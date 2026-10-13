import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import './meta-trust-strip.css';

export async function MetaTrustStrip() {
  const t = await getTranslations('home.metaTrust');

  return (
    <aside className="meta-trust" aria-label={t('provider')}>
      <div className="meta-trust__grid">
        <article className="meta-trust__card meta-trust__card--provider">
          <div className="meta-trust__media">
            <Image
              src="/images/meta-trust/meta-tech-provider-light-v3.png"
              alt=""
              width={1448}
              height={1086}
              sizes="(max-width: 860px) 78vw, 33vw"
            />
            <div className="meta-trust__copy">
              <p className="meta-trust__status">{t('providerStatus')}</p>
              <h3>{t('provider')}</h3>
            </div>
          </div>
        </article>

        <article className="meta-trust__card meta-trust__card--app">
          <div className="meta-trust__media">
            <Image
              src="/images/meta-trust/meta-app-review-light-v3.png"
              alt=""
              width={1448}
              height={1086}
              sizes="(max-width: 860px) 78vw, 33vw"
            />
            <div className="meta-trust__copy">
              <p className="meta-trust__status">{t('appStatus')}</p>
              <h3>{t('app')}</h3>
            </div>
          </div>
        </article>

        <article className="meta-trust__card meta-trust__card--connection">
          <div className="meta-trust__media">
            <Image
              src="/images/meta-trust/meta-one-click-light-v3.png"
              alt=""
              width={1448}
              height={1086}
              sizes="(max-width: 860px) 78vw, 33vw"
            />
            <div className="meta-trust__copy">
              <p className="meta-trust__status">{t('connectionStatus')}</p>
              <h3>{t('connection')}</h3>
            </div>
          </div>
        </article>
      </div>
    </aside>
  );
}
