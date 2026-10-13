"use client";

import Script from "next/script";

export const OxoCounter = () => {
    return (
        <>
            {/* Counter containers */}
            <div className="flex items-center gap-3">
                {/* TOP.GE */}
                <div id="top-ge-counter-container" data-site-id="118558"></div>
                {/* OXO.GE, custom id to avoid conflict with TOP.GE */}
                <div id="oxo-ge-counter-container" data-site-id="9" data-counter-style="5" data-counter-color="#6366f1"></div>
            </div>

            {/* TOP.GE Counter Script */}
            <Script
                src="//counter.top.ge/counter.js"
                strategy="lazyOnload"
            />

            {/* OXO.GE Counter Script, inlined because oxo.ge/counter.js hardcodes "top-ge-counter-container" id */}
            <Script id="oxo-counter-script" strategy="lazyOnload">
                {`(function () {
                    var container = document.getElementById('oxo-ge-counter-container');
                    if (!container) return;

                    var siteId = container.getAttribute('data-site-id');
                    if (!siteId) return;

                    var style = container.getAttribute('data-counter-style')
                             || container.getAttribute('data-counter-type')
                             || '';
                    var color = container.getAttribute('data-counter-color') || '';

                    var host = '//oxo.ge';

                    var hitUrl = host + '/api/counter_hit?site_id=' + siteId;
                    hitUrl += '&r=' + Math.random();
                    try {
                        if (document.referrer) hitUrl += '&ref=' + encodeURIComponent(document.referrer);
                        hitUrl += '&page=' + encodeURIComponent(location.href);
                        hitUrl += '&sw=' + (screen.width || 0);
                        hitUrl += '&sh=' + (screen.height || 0);
                        hitUrl += '&lang=' + encodeURIComponent((navigator.language || navigator.userLanguage || '').substring(0, 10));
                    } catch(e) {}

                    var pixel = new Image();
                    pixel.src = hitUrl;

                    var imgUrl = host + '/api/counter_image?site_id=' + siteId;
                    if (style) imgUrl += '&style=' + encodeURIComponent(style);
                    if (color) imgUrl += '&color=' + encodeURIComponent(color);

                    var link = document.createElement('a');
                    link.href = host + '/stat?id=' + siteId;
                    link.target = '_blank';
                    link.title = 'OXO.GE';

                    var img = document.createElement('img');
                    img.src = imgUrl;
                    img.alt = 'OXO.GE Counter';
                    img.style.border = 'none';

                    link.appendChild(img);
                    container.appendChild(link);
                })();`}
            </Script>
        </>
    );
};
