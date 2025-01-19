// components/EventCalendar.tsx
import React, { useEffect, useRef, memo } from 'react';

function EventCalendar() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "colorTheme": "light",
        "isTransparent": false,
        "locale": "en",
        "importanceFilter": "0,1",
        "countryFilter": "us,eu,kr,jp,cn,tw,hk,au,gb"
      }`;
    
    if (container.current) {
      container.current.appendChild(script);
    }

    return () => {
      if (container.current) {
        const scriptElement = container.current.querySelector('script');
        if (scriptElement) {
          container.current.removeChild(scriptElement);
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

export default memo(EventCalendar);