import { getNicheByKey } from './data';
import type { PersonaSpec } from './types';

/**
 * Compiles a structured PersonaSpec into the Georgian system prompt that
 * /api/chat-demo sends to the model. Mirrors the shape of the hand-written
 * `clinic` persona (name, business data, price ranges, booking flow, strict
 * guards) so every niche demo behaves consistently. The model is separately
 * instructed (BASE_SYSTEM in the route) to reply in the visitor's language.
 */
export function buildPersonaPrompt(s: PersonaSpec): string {
  const addr = s.address ? `\n- მისამართი: ${s.address}` : '';
  return `შენი როლი: ${s.botName}, სადემონსტრაციო ${s.bizType} "${s.brand}"-ის ონლაინ ადმინისტრატორი aiNOW-ს გვერდზე.

ბიზნესის მონაცემები (მხოლოდ ამ მონაცემებით უპასუხე):
- გრაფიკი: ${s.hours}. შენ კი 24/7 პასუხობ.${addr}
- სერვისები და ფასების შუალედები (ზუსტ ფასს სპეციალისტი ამბობს კონსულტაციაზე): ${s.services}

ჩაწერის წესი: ${s.booking}

მკაცრი წესები: ფასი რომ სიაში არ არის, არ გამოიგონო, უთხარი რომ სპეციალისტი დააზუსტებს. ${s.guardrails.join(' ')} იყავი თბილი, თავაზიანი და მოკლე, როგორც კარგი ადმინისტრატორი.`;
}

/** Returns the compiled niche persona prompt for a key, or undefined if unknown. */
export function getNichePersonaPrompt(key: string): string | undefined {
  const e = getNicheByKey(key);
  return e ? buildPersonaPrompt(e.persona) : undefined;
}

/**
 * Compiles the follow-up-suggestions instruction for a niche. Same rule
 * structure as the legacy clinic constant in /api/chat-demo (never repeat an
 * answered question, move the dialogue forward, max 45 chars, visitor's
 * language, JSON array only), but voiced as THIS niche's customer and steered
 * to THIS niche's natural next-step topics instead of the clinic list
 * (address/parking/what-to-bring). Falls back to a generic customer voice when
 * the niche has not filled the fields yet.
 */
export function buildSuggestInstruction(s: PersonaSpec): string {
  const noun = s.customerNoun || 'მომხმარებელი';
  const domains =
    s.followupDomains ||
    `მომსახურების დეტალები, ვადები, მისამართი, გადახდის წესები, შეკვეთის ან ჯავშნის შეცვლა`;
  return `ზემოთ მოცემული დიალოგის მიხედვით შეადგინე ზუსტად 3 მოკლე კითხვა, რომელსაც ${noun} ლოგიკურად დასვამდა შემდეგ ეტაპზე (${noun}-ის პირით). წესები: 1) არასოდეს გაიმეორო კითხვა, რაზეც უკვე გაეცა პასუხი ან რაც უკვე შეთანხმდა. 2) კითხვებმა დიალოგი წინ უნდა წასწიოს, ბუნებრივი შემდეგი თემები ამ სფეროში: ${domains}. 3) თითო კითხვა მაქსიმუმ 45 სიმბოლო. 4) იმ ენაზე, რომელზეც ${noun} წერდა. დააბრუნე მხოლოდ JSON მასივი: ["...","...","..."]. არანაირი სხვა ტექსტი.`;
}

/** Returns the niche-aware suggestions instruction for a key, or undefined. */
export function getNicheSuggestInstruction(key: string): string | undefined {
  const e = getNicheByKey(key);
  return e ? buildSuggestInstruction(e.persona) : undefined;
}
