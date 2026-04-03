import { useState } from "react";

const smoothScrollTo = (targetId: string) => {
  const target = document.getElementById(targetId);
  if (!target) return;
  const targetY = target.getBoundingClientRect().top + window.scrollY;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 1000;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

export default function NavbarComponent() {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopyMail = () => {
    navigator.clipboard.writeText("navarrolucas4668@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

const baseNav: React.CSSProperties = {
    position: "fixed",
    left: "1.5rem",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "rgba(61, 59, 52, 0.85)",
    backdropFilter: "blur(6px)",
    border: "1.5px solid #8a8470",
    borderRadius: "12px",
    padding: expanded ? "1.2rem 0.9rem" : "0.7rem",
    fontFamily: "'Share Tech Mono', 'Courier New', monospace",
    transition: "padding 0.3s ease, width 0.3s ease",
    overflow: "hidden",
    width: expanded ? "120px" : "54px",
  };

  const dividerStyle: React.CSSProperties = {
    width: "100%",
    height: "1px",
    backgroundColor: "#5a5849",
    margin: "0.2rem 0",
  };

  const navBtnStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#b0ab97",
    fontSize: "10px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    textDecoration: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0.35rem 0.4rem",
    borderRadius: "4px",
    transition: "color 0.15s ease, background 0.15s ease",
    fontFamily: "'Share Tech Mono', 'Courier New', monospace",
    width: "100%",
    textAlign: "left",
    whiteSpace: "nowrap",
  };

  const iconBtnStyle: React.CSSProperties = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#b0ab97",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "0.35rem 0.4rem",
      borderRadius: "4px",
      transition: "color 0.15s ease, background 0.15s ease",
      width: "100%",
      textDecoration: "none",
      fontFamily: "'Share Tech Mono', 'Courier New', monospace",
      fontSize: "10px",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
    };

  const handleHover = (e: React.MouseEvent<HTMLElement>, entering: boolean) => {
    const el = e.currentTarget as HTMLElement;
    el.style.color = entering ? "#e8e2ce" : "#b0ab97";
    el.style.backgroundColor = entering ? "rgba(232, 226, 206, 0.08)" : "transparent";
  };

  const triggerBtn: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#b0ab97",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0.2rem",
    transition: "color 0.15s ease",
    width: "100%",
  };

  return (
    <nav
      style={baseNav}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Trigger icon — siempre visible */}
      <div style={triggerBtn}>
        <svg width="28" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="7" height="7" stroke="#b0ab97" strokeWidth="1.4"/>
          <rect x="11" y="2" width="7" height="7" stroke="#b0ab97" strokeWidth="1.4"/>
          <rect x="2" y="11" width="7" height="7" stroke="#b0ab97" strokeWidth="1.4"/>
          <rect x="11" y="11" width="7" height="7" stroke="#b0ab97" strokeWidth="1.4"/>
        </svg>
      </div>

      {/* Contenido expandido */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
          width: "100%",
          opacity: expanded ? 1 : 0,
          maxHeight: expanded ? "500px" : "0px",
          overflow: "hidden",
          transition: "opacity 0.25s ease, max-height 0.3s ease",
        }}
      >
        <div style={dividerStyle} />

        {/* Nav sections */}
        <button
          style={navBtnStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
          onClick={() => smoothScrollTo("hero-section")}
        >
          <svg width="14" height="14" viewBox="0 0 10 10" fill="none">
            <polygon points="5,1 9,9 1,9" stroke="currentColor" strokeWidth="1.2" fill="none"/>
          </svg>
          Hero
        </button>

        <button
          style={navBtnStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
          onClick={() => smoothScrollTo("cards-section")}
        >
          <svg width="14" height="14" viewBox="0 0 10 10" fill="none">
            <rect x="1" y="1" width="8" height="8" stroke="currentColor" strokeWidth="1.2"/>
            <line x1="1" y1="4" x2="9" y2="4" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          Index
        </button>

        <button
          style={navBtnStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
          onClick={() => smoothScrollTo("contact-section")}
        >
          <svg width="14" height="14" viewBox="0 0 10 10" fill="none">
            <rect x="1" y="2" width="8" height="6" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M1 2 L5 6 L9 2" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          Contact
        </button>

        <div style={dividerStyle} />

        {/* GitHub */}
        <a
          href="https://github.com/LucasNavarro21"
          target="_blank"
          rel="noreferrer"
          style={iconBtnStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <svg width="22" height="22" viewBox="0 0 10 10" fill="currentColor">
            <path d="M5 0.5C2.5 0.5 0.5 2.5 0.5 5c0 2 1.3 3.7 3.1 4.3.2 0 .3-.1.3-.3V8.4c-1.2.3-1.5-.6-1.5-.6-.2-.5-.5-.7-.5-.7-.4-.3 0-.3 0-.3.4 0 .7.4.7.4.4.7 1 .5 1.3.4 0-.3.2-.5.3-.6-1-.1-2-.5-2-2.2 0-.5.2-.9.4-1.2 0-.1-.2-.6 0-1.2 0 0 .4-.1 1.2.4.4-.1.7-.1 1.1-.1.4 0 .7 0 1.1.1.8-.5 1.2-.4 1.2-.4.2.6 0 1.1 0 1.2.3.3.4.7.4 1.2 0 1.7-1 2.1-2 2.2.2.1.3.4.3.8v1.2c0 .2.1.3.3.3C8.2 8.7 9.5 7 9.5 5 9.5 2.5 7.5.5 5 .5z"/>
          </svg>
          
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/lucas-navarroo/"
          target="_blank"
          rel="noreferrer"
          style={iconBtnStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <svg width="22" height="22" viewBox="0 0 10 10" fill="currentColor">
            <path d="M1 1h2v2H1zM1 4h2v5H1zM4 4h1.8v.7C6 4.3 6.5 4 7.2 4 8.8 4 9 5 9 6.2V9H7V6.5c0-.6 0-1.5-.9-1.5-.9 0-1.1.7-1.1 1.4V9H3V4z"/>
          </svg>
          
        </a>

        {/* CV */}
        <a
          href="https://drive.google.com/file/d/1jljnQ7hMPRnaExkZCjRsEQqOUgKGNcNz/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          style={iconBtnStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <svg width="22" height="22" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="2" y="1" width="6" height="8"/>
            <line x1="4" y1="3.5" x2="7" y2="3.5"/>
            <line x1="4" y1="5" x2="7" y2="5"/>
            <line x1="4" y1="6.5" x2="6" y2="6.5"/>
          </svg>
        </a>

        <div style={dividerStyle} />

{/* Mail */}
        <button
          style={{ ...iconBtnStyle, justifyContent: "center" }}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
          onClick={handleCopyMail}
          title={copied ? "¡Copiado!" : "Copiar email"}
        >
          {copied ? (
            <svg width="22" height="22" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M1.5 5.5L4 8L8.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="1" y="2" width="8" height="6"/>
              <path d="M1 2 L5 6 L9 2"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}