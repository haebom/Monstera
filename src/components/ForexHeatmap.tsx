// components/ForexHeatmap.tsx
import React, { useEffect, useRef, memo } from 'react';

function ForexHeatmap() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = container.current;
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
      "width": "100%",
      "height": "100%",
      "currencies": [
        "EUR",
        "USD",
        "JPY",
        "AUD",
        "CNY",
        "KRW"
      ],
      "isTransparent": false,
      "colorTheme": "light",
      "locale": "en",
      "backgroundColor": "#ffffff"
    }`;
    
    if (currentContainer) {
      currentContainer.appendChild(script);
    }

    return () => {
      if (currentContainer) {
        const scriptElement = currentContainer.querySelector('script');
        if (scriptElement) {
          currentContainer.removeChild(scriptElement);
        }
      }
    };
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '100vh',
    }}>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}

export default memo(ForexHeatmap);