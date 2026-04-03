import { useState } from "react";

export default function ContactComponent() {
  const [copied, setCopied] = useState(false);

  const handleCopyMail = () => {
    navigator.clipboard.writeText("navarrolucas4668@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="contact-section"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Share Tech Mono', 'Courier New', monospace",
        backgroundColor: "#1a1918",
        backgroundImage:
        "linear-gradient(#2a2925 1px, transparent 1px), linear-gradient(90deg, #2a2925 1px, transparent 1px)",
        gap: "2.5rem",
      }}
    >
      {/* Gradient top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120px",
          background: "linear-gradient(to bottom, #c8c3aa, #1a1918)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ color: "#6b6757", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase" }}>
            05 / CONTACT
          </span>
          <h2
            style={{
              color: "#e8e2ce",
              fontSize: "clamp(24px, 4vw, 40px)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: "normal",
              margin: 0,
              borderLeft: "2px solid #8a8470",
              borderRight: "2px solid #8a8470",
              padding: "0 0.5em",
              lineHeight: "1",
            }}
          >
            Contacto
          </h2>
          <div style={{ width: "40px", height: "1.5px", backgroundColor: "#8a8470" }} />
        </div>

        {/* Mail block */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            border: "1.5px solid #8a8470",
            padding: "1rem 1.5rem",
            position: "relative",
          }}
        >
          {/* Corner marks */}
          <span style={{ position: "absolute", top: "4px", left: "4px", width: "8px", height: "8px", borderTop: "1.5px solid #8a8470", borderLeft: "1.5px solid #8a8470" }} />
          <span style={{ position: "absolute", top: "4px", right: "4px", width: "8px", height: "8px", borderTop: "1.5px solid #8a8470", borderRight: "1.5px solid #8a8470" }} />
          <span style={{ position: "absolute", bottom: "4px", left: "4px", width: "8px", height: "8px", borderBottom: "1.5px solid #8a8470", borderLeft: "1.5px solid #8a8470" }} />
          <span style={{ position: "absolute", bottom: "4px", right: "4px", width: "8px", height: "8px", borderBottom: "1.5px solid #8a8470", borderRight: "1.5px solid #8a8470" }} />

          <svg width="18" height="18" viewBox="0 0 10 10" fill="none" stroke="#8a8470" strokeWidth="1.2">
            <rect x="1" y="2" width="8" height="6"/>
            <path d="M1 2 L5 6 L9 2"/>
          </svg>

          <span style={{ color: "#c8c3aa", fontSize: "14px", letterSpacing: "0.1em" }}>
            navarrolucas4668@gmail.com
          </span>

          <button
            onClick={handleCopyMail}
            title={copied ? "¡Copiado!" : "Copiar email"}
            style={{
              background: "none",
              border: "1px solid #8a8470",
              cursor: "pointer",
              color: copied ? "#e8e2ce" : "#8a8470",
              padding: "0.3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.15s ease, border-color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "#e8e2ce";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#e8e2ce";
            }}
            onMouseLeave={(e) => {
              if (!copied) {
                (e.currentTarget as HTMLButtonElement).style.color = "#8a8470";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#8a8470";
              }
            }}
          >
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M1.5 5.5L4 8L8.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="3" y="1" width="6" height="7"/>
                <path d="M1 3v6h6"/>
              </svg>
            )}
          </button>
        </div>

        {/* Divider */}
        <div style={{ width: "40px", height: "1.5px", backgroundColor: "#5a5849" }} />

        {/* Social links */}
        <div style={{ display: "flex", gap: "1.5rem" }}>

          {/* GitHub */}
          <a
            href="https://github.com/LucasNavarro21"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              color: "#8a8470",
              textDecoration: "none",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              transition: "color 0.15s ease",
              border: "1.5px solid #5a5849",
              padding: "1rem 1.5rem",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#e8e2ce"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#8a8470"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#8a8470"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#5a5849"; }}
          >
            <svg width="24" height="24" viewBox="0 0 10 10" fill="currentColor">
              <path d="M5 0.5C2.5 0.5 0.5 2.5 0.5 5c0 2 1.3 3.7 3.1 4.3.2 0 .3-.1.3-.3V8.4c-1.2.3-1.5-.6-1.5-.6-.2-.5-.5-.7-.5-.7-.4-.3 0-.3 0-.3.4 0 .7.4.7.4.4.7 1 .5 1.3.4 0-.3.2-.5.3-.6-1-.1-2-.5-2-2.2 0-.5.2-.9.4-1.2 0-.1-.2-.6 0-1.2 0 0 .4-.1 1.2.4.4-.1.7-.1 1.1-.1.4 0 .7 0 1.1.1.8-.5 1.2-.4 1.2-.4.2.6 0 1.1 0 1.2.3.3.4.7.4 1.2 0 1.7-1 2.1-2 2.2.2.1.3.4.3.8v1.2c0 .2.1.3.3.3C8.2 8.7 9.5 7 9.5 5 9.5 2.5 7.5.5 5 .5z"/>
            </svg>
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lucas-navarroo/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              color: "#8a8470",
              textDecoration: "none",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              transition: "color 0.15s ease",
              border: "1.5px solid #5a5849",
              padding: "1rem 1.5rem",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#e8e2ce"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#8a8470"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#8a8470"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#5a5849"; }}
          >
            <svg width="24" height="24" viewBox="0 0 10 10" fill="currentColor">
              <path d="M1 1h2v2H1zM1 4h2v5H1zM4 4h1.8v.7C6 4.3 6.5 4 7.2 4 8.8 4 9 5 9 6.2V9H7V6.5c0-.6 0-1.5-.9-1.5-.9 0-1.1.7-1.1 1.4V9H3V4z"/>
            </svg>
            LinkedIn
          </a>

        </div>

        {/* Footer label */}
        <span style={{ color: "#5a5849", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: "1rem" }}>
          YoRHa Portfolio System / v1.0
        </span>
      </div>
    </div>
  );
}