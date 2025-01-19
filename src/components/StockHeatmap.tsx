// components/StockHeatmap.tsx
import React, { useEffect, useRef, memo } from 'react';

function StockHeatmap() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = container.current;
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
      "exchanges": [
        "KOSPI",
        "KOSDAQ"
      ],
      "dataSource": "SPK",
      "grouping": "sector",
      "blockSize": "market_cap_basic",
      "blockColor": "change",
      "locale": "en",
      "symbolUrl": "",
      "colorTheme": "light",
      "hasTopBar": false,
      "isDataSetEnabled": false,
      "isZoomEnabled": true,
      "hasSymbolTooltip": true,
      "width": "100%",
      "height": "100%"
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

export default memo(StockHeatmap);