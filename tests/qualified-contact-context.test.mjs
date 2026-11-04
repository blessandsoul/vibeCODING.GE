import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ts = require('typescript');
const originalFetch = globalThis.fetch;
globalThis.fetch = async () => { throw new Error('Network is forbidden in contact regression tests'); };
test.after(() => { globalThis.fetch = originalFetch; });
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../src');
const cache = new Map();
function load(file, stubs={}) {
  const path = resolve(root,file);
  if (!Object.keys(stubs).length && cache.has(path)) return cache.get(path);
  const code=ts.transpileModule(readFileSync(path,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
  const module={exports:{}};
  if (!Object.keys(stubs).length) cache.set(path,module.exports);
  const local = (name) => {
    if (name in stubs) return stubs[name];
    if (name.startsWith('@/')) return load(name.slice(2)+'.ts',stubs);
    if (name.startsWith('.')) return load(resolve(dirname(path),name)+(name.endsWith('.ts')?'':'.ts'),stubs);
    return require(name);
  };
  new Function('require','module','exports',code)(local,module,module.exports);
  return module.exports;
}
const context=load('features/contact/lib/contact-context.ts');
const {contactFormSchema}=load('features/contact/schemas/contact.schema.ts');
const {formatContactNotification}=load('features/contact/lib/contact-notification.ts');
const valid={name:'Nino Example',company:'Example shop',phone:'+00000000000',message:'Please help us answer product questions.',product:'Product demo',contactPreference:'whatsapp',contactConfirmed:true,source:'contact-page',sourcePath:'/ru/contact',landingPath:'/en/blog/first',referrerHost:'www.google.com',utmSource:'google',utmMedium:'organic'};

test('phone-only, missing identity/task/channel and unconfirmed contact never qualify',()=>{
  for(const body of [{phone:valid.phone},{...valid,name:''},{...valid,name:'1234'},{...valid,message:'        '},{...valid,message:'!!!!!!!!!!!!'},{...valid,contactPreference:undefined},{...valid,contactPreference:'telegram'},{...valid,contactConfirmed:false},{...valid,contactConfirmed:undefined},{...valid,contactPreference:'email',email:undefined}]) assert.equal(contactFormSchema.safeParse(body).success,false);
  const parsed=contactFormSchema.parse({...valid,name:'  Nino Example  ',message:'  '+valid.message+'  '});
  assert.equal(parsed.name,valid.name);assert.equal(parsed.message,valid.message);
});

test('notification contains person, business, task, contact choice and own product page',()=>{
  const parsed=contactFormSchema.parse(valid);
  const text=formatContactNotification(parsed);
  for(const value of [valid.name,valid.company,valid.phone,valid.message,'WhatsApp','https://'+context.CONTACT_SITE+valid.sourcePath,valid.landingPath,valid.referrerHost,valid.utmSource]) assert.ok(text.includes(value),value);
  assert.ok(text.length<=4096);
  const max={...valid,name:'n'.repeat(120),company:'c'.repeat(120),product:'p'.repeat(120),message:'m'.repeat(1800),source:'s'.repeat(100),sourcePath:'/'+ 'p'.repeat(199),landingPath:'/'+ 'l'.repeat(199),referrerHost:'r'.repeat(150)+'.example.com',utmSource:'u'.repeat(100),utmMedium:'m'.repeat(100),utmCampaign:'c'.repeat(100),utmContent:'x'.repeat(100),utmTerm:'t'.repeat(100)};
  const result=contactFormSchema.safeParse(max);
  if(result.success)assert.ok(formatContactNotification(result.data).length<=4096);
});

test('first visit is one snapshot, later campaigns cannot overwrite or fill its attribution',()=>{
  const first=context.buildContactVisitContext('/en/blog/first','?utm_source=google','https://www.google.com/search?q=private');
  const later=context.buildContactVisitContext('/ru/contact','?utm_campaign=facebook_paid&utm_medium=cpc&gclid=secret-click-id','',first);
  assert.deepEqual(later,first);assert.equal(later.utmCampaign,undefined);assert.equal(later.paidClick,undefined);
  const safe=context.buildContactVisitContext('/contact','?email=private@example.com&gclid=secret-click-id','');
  assert.equal(safe.paidClick,true);assert.equal(JSON.stringify(safe).includes('secret-click-id'),false);assert.equal(JSON.stringify(safe).includes('private@example.com'),false);
  const text=formatContactNotification({...valid,referrerHost:undefined,utmSource:undefined,utmMedium:undefined,paidClick:true});
  assert.ok(text.includes('სარეკლამო გადასვლის ნიშანი'));assert.equal(text.includes('ვიზიტის წყარო: უცნობია'),false);
});

if(!['aichats.ge','aistaff.ge','aivision.ge'].includes(context.CONTACT_SITE)) test('actual Telegram sender uses complete own-site plain text and rejects an unconfirmed provider receipt',async()=>{
  const oldToken=process.env.TELEGRAM_BOT_TOKEN,oldChat=process.env.TELEGRAM_CHAT_ID;
  process.env.TELEGRAM_BOT_TOKEN='unit-test-token';process.env.TELEGRAM_CHAT_ID='synthetic-chat';
  let sent;
  try {
    const sender=load('lib/telegram.ts').sendTelegramNotification;
    globalThis.fetch=async(url,init)=>{assert.equal(url,'https://api.telegram.org/botunit-test-token/sendMessage');sent=JSON.parse(init.body);return Response.json({ok:true,result:{message_id:42}});};
    await sender(valid);
    assert.equal(sent.parse_mode,undefined);
    for(const value of [valid.name,valid.company,valid.message,'WhatsApp',context.CONTACT_SITE+valid.sourcePath,valid.landingPath,valid.referrerHost])assert.ok(sent.text.includes(value),value);
    globalThis.fetch=async()=>Response.json({ok:false});await assert.rejects(()=>sender(valid));
    globalThis.fetch=async()=>Response.json({ok:true,result:{}});await assert.rejects(()=>sender(valid));
  } finally {
    globalThis.fetch=async()=>{throw new Error('Network forbidden in contact tests');};
    if(oldToken===undefined)delete process.env.TELEGRAM_BOT_TOKEN;else process.env.TELEGRAM_BOT_TOKEN=oldToken;
    if(oldChat===undefined)delete process.env.TELEGRAM_CHAT_ID;else process.env.TELEGRAM_CHAT_ID=oldChat;
  }
});

const requestModule=load('features/home/lib/closing-lead-message.ts');
if(typeof requestModule.buildClosingLeadRequest==='function') test('real browser request builder keeps structured identity and source fields',()=>{
  const input={...valid,name:valid.name,company:valid.company,task:valid.message,product:valid.product,contactPreference:'whatsapp',contactChannel:'whatsapp',contactConfirmed:true,turnstileToken:'synthetic-token',attribution:{source:valid.source,sourcePath:valid.sourcePath,landingPath:valid.landingPath,referrerHost:valid.referrerHost,utmSource:valid.utmSource,utmMedium:valid.utmMedium}};
  const request=requestModule.buildClosingLeadRequest(input);const raw=JSON.parse(request.init.body);
  const body={...raw,contactPreference:raw.contactPreference??raw.contact_preference,contactConfirmed:raw.contactConfirmed??raw.contact_confirmed,sourcePath:raw.sourcePath??raw.source_path,landingPath:raw.landingPath??raw.landing_path,referrerHost:raw.referrerHost??raw.referrer_host,utmSource:raw.utmSource??raw.utm_source,utmMedium:raw.utmMedium??raw.utm_medium};
  const parsed=contactFormSchema.safeParse(body);assert.equal(parsed.success,true,parsed.error?.message);
  assert.equal(body.name,valid.name);assert.equal(body.company,valid.company);assert.equal(body.contactPreference,'whatsapp');assert.equal(body.contactConfirmed,true);assert.equal(body.sourcePath,valid.sourcePath);assert.equal(body.landingPath,valid.landingPath);assert.equal(body.referrerHost,valid.referrerHost);assert.equal(body.utmSource,valid.utmSource);assert.ok(body.message.includes(valid.message));
});

const routePath=resolve(root,'app/api/contact/route.ts');
if(existsSync(routePath) && readFileSync(routePath,'utf8').includes('sendTelegramNotification')) test('public route rejects phone-only before CAPTCHA and delivery, and forwards full valid context',async()=>{
  let calls=0,checks=0,payload;let verified=false;
  const route=load('app/api/contact/route.ts',{'next/server':{NextResponse:{json:Response.json.bind(Response)}},'@/features/contact/schemas/contact.schema':{contactFormSchema},'@/lib/landing-clone-preview':{isLandingClonePreview:()=>false,previewNoIndexHeaders:()=>({})},'@/lib/contact-challenge':{verifyContactChallenge:async()=>{checks++;return verified;}},'@/lib/rate-limit':{checkRateLimit:()=>({success:true})},'@/lib/telegram':{sendTelegramNotification:async(data)=>{calls++;payload=data;return {ok:true,result:{message_id:42}};}}});
  const request=body=>new Request('https://'+context.CONTACT_SITE+'/api/contact',{method:'POST',headers:{'content-type':'application/json','origin':'https://'+context.CONTACT_SITE,'referer':'https://'+context.CONTACT_SITE+'/ru/contact'},body:JSON.stringify(body)});
  assert.equal((await route.POST(request({phone:valid.phone}))).status,400);assert.equal(checks,0);assert.equal(calls,0);
  assert.equal((await route.POST(request(valid))).status,403);assert.equal(calls,0);
  verified=true;assert.equal((await route.POST(request({...valid,turnstileToken:'synthetic'}))).status,200);
  assert.equal(calls,1);for(const key of ['name','company','message','contactPreference','contactConfirmed','sourcePath','landingPath','referrerHost','utmSource'])assert.equal(payload[key],valid[key]);
});
