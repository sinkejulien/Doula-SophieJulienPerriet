import { useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
  className?: string;
}

export function CalendlyEmbed({ url, className = "" }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

// Button that opens Calendly popup
interface CalendlyButtonProps {
  url: string;
  text?: string;
  className?: string;
}

export function CalendlyButton({ url, text = "Réserver un appel découverte", className = "" }: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalendly = () => {
    // @ts-ignore - Calendly is loaded via script
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url });
    }
  };

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <button
        onClick={openCalendly}
        className={className}
      >
        {text}
      </button>
    </>
  );
}
