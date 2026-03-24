import { useEffect, useRef } from "react";

type ContentItem =
  | { type: "heading"; text: string }
  | { type: "headingWithLinks"; text: string; items: { icon: "play" | "demo" | "github"; href: string }[] }
  | { type: "meta"; items: string[] }
  | { type: "link"; text: string; href: string; inline?: string }
  | { type: "links"; items: { icon: "play" | "demo" | "github"; href: string }[] }
  | { type: "bullet"; text: string }
  | { type: "education"; title: string; institution: string; date: string };

interface ModalProps {
  card: {
    number: string;
    title: string;
    content: ContentItem[];
  } | null;
  onClose: () => void;
}

export default function ModalComponent({ card, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!card) return;
    const handleMouseLeave = () => onClose();
    const el = modalRef.current;
    el?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [card, onClose]);

  if (!card) return null;

  let bulletIndex = 0;


  const renderItem = (item: ContentItem, i: number) => {
    if (item.type === "heading") {
      return (
        <span
          key={i}
          style={{
            color: "#e8e2ce",
            fontSize: "25px",
            textTransform: "uppercase" as const,
            letterSpacing: "0.12em",
            marginTop: i > 0 ? "0.5rem" : 0,
            display: "block",
          }}
        >
          {item.text}
        </span>
      );
    }
 if (item.type === "education") {
      return (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            paddingLeft: "0.75rem",
            borderLeft: "1.5px solid #8a8470",
          }}
        >
          <span
            style={{
              color: "#e8e2ce",
              fontSize: "18px",
              letterSpacing: "0.08em",
            }}
          >
            {item.title}
          </span>
          <span
            style={{
              color: "#c8c3aa",
              fontSize: "14px",
              letterSpacing: "0.15em",
            }}
          >
            {item.institution}
          </span>
          <span
            style={{
              color: "#c8c3aa",
              fontSize: "14px",
              letterSpacing: "0.2em",
            }}
          >
            {item.date}
          </span>
        </div>
      );
    }

    if (item.type === "headingWithLinks") {
      return (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginTop: i > 0 ? "0.5rem" : 0,
          }}
        >
          <span
            style={{
              color: "#e8e2ce",
              fontSize: "25px",
              textTransform: "uppercase" as const,
              letterSpacing: "0.12em",
            }}
          >
            {item.text}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {item.items.map((link, j) => (
              <a
                key={j}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "#c8c3aa",
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "1px solid #8a8470",
                  padding: "4px 10px",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#c8c3aa";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#3d3b34";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c8c3aa";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#c8c3aa";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#8a8470";
                }}
              >
                {link.icon === "play" && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <polygon points="2,1 9,5 2,9"/>
                  </svg>
                )}
                {link.icon === "demo" && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="1" y="2" width="8" height="6"/>
                    <line x1="3" y1="8" x2="7" y2="8"/>
                    <line x1="5" y1="8" x2="5" y2="9.5"/>
                  </svg>
                )}
                {link.icon === "github" && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M5 0.5C2.5 0.5 0.5 2.5 0.5 5c0 2 1.3 3.7 3.1 4.3.2 0 .3-.1.3-.3V8.4c-1.2.3-1.5-.6-1.5-.6-.2-.5-.5-.7-.5-.7-.4-.3 0-.3 0-.3.4 0 .7.4.7.4.4.7 1 .5 1.3.4 0-.3.2-.5.3-.6-1-.1-2-.5-2-2.2 0-.5.2-.9.4-1.2 0-.1-.2-.6 0-1.2 0 0 .4-.1 1.2.4.4-.1.7-.1 1.1-.1.4 0 .7 0 1.1.1.8-.5 1.2-.4 1.2-.4.2.6 0 1.1 0 1.2.3.3.4.7.4 1.2 0 1.7-1 2.1-2 2.2.2.1.3.4.3.8v1.2c0 .2.1.3.3.3C8.2 8.7 9.5 7 9.5 5 9.5 2.5 7.5.5 5 .5z"/>
                  </svg>
                )}
                {link.icon === "play" ? "Video" : link.icon === "demo" ? "Demo" : "Github"}
              </a>
            ))}
          </div>
        </div>
      );
    }
if (item.type === "links") {
      return (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {item.items.map((link, j) => (
            <a
              key={j}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#c8c3aa",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid #8a8470",
                padding: "4px 10px",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#c8c3aa";
                (e.currentTarget as HTMLAnchorElement).style.color = "#3d3b34";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c8c3aa";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#c8c3aa";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#8a8470";
              }}
            >
              {link.icon === "play" && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                  <polygon points="2,1 9,5 2,9"/>
                </svg>
              )}
              {link.icon === "demo" && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <rect x="1" y="2" width="8" height="6"/>
                  <line x1="3" y1="8" x2="7" y2="8"/>
                  <line x1="5" y1="8" x2="5" y2="9.5"/>
                </svg>
              )}
              {link.icon === "github" && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                  <path d="M5 0.5C2.5 0.5 0.5 2.5 0.5 5c0 2 1.3 3.7 3.1 4.3.2 0 .3-.1.3-.3V8.4c-1.2.3-1.5-.6-1.5-.6-.2-.5-.5-.7-.5-.7-.4-.3 0-.3 0-.3.4 0 .7.4.7.4.4.7 1 .5 1.3.4 0-.3.2-.5.3-.6-1-.1-2-.5-2-2.2 0-.5.2-.9.4-1.2 0-.1-.2-.6 0-1.2 0 0 .4-.1 1.2.4.4-.1.7-.1 1.1-.1.4 0 .7 0 1.1.1.8-.5 1.2-.4 1.2-.4.2.6 0 1.1 0 1.2.3.3.4.7.4 1.2 0 1.7-1 2.1-2 2.2.2.1.3.4.3.8v1.2c0 .2.1.3.3.3C8.2 8.7 9.5 7 9.5 5 9.5 2.5 7.5.5 5 .5z"/>
                </svg>
              )}
              {link.icon === "play" ? "Video" : link.icon === "demo" ? "Demo" : "Github"}
            </a>
          ))}
        </div>
      );
    }

   if (item.type === "link") {
      return (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#b0ab97",
              fontSize: "18px",
              letterSpacing: "0.05em",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            {item.text}
          </a>

          {item.inline && (
            <span
              style={{
                color: "#c8c3aa",
                fontSize: "10px",
                letterSpacing: "0.2em",
                padding: "2px 8px",
                border: "1px solid #8a8470",
              }}
            >
              {item.inline}
            </span>
          )}
        </div>
      );
    }

    if (item.type === "meta") {
      return (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {item.items.map((m: string, j: number) => (
            <span key={j} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {j > 0 && (
                <span style={{ color: "#c8c3aa" }}>—</span>
              )}
              <span style={{ color: "#c8c3aa", fontSize: "14px", letterSpacing: "0.2em" }}>
                {m}
              </span>
            </span>
          ))}
        </div>
      );
    }

    if (item.type === "bullet") {
      bulletIndex += 1;
      const index = bulletIndex;
      return (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
            fontSize: "14.5px",
            letterSpacing: "0.05em",
            lineHeight: "1.6",
            color: "#b0ab97",
          }}
        >
          <span style={{ color: "#6b6757", flexShrink: 0 }}>
            [{String(index).padStart(2, "0")}]
          </span>
          {item.text}
        </div>
      );
    }

    return null;
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        ref={modalRef}
        style={{
          pointerEvents: "auto",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgba(61, 59, 52, 0.85)",
          backdropFilter: "blur(4px)",
          border: "1.5px solid #8a8470",
          fontFamily: "'Share Tech Mono', 'Courier New', monospace",
          width: "70vw",
          maxWidth: "70vw",
        }}
      >
        {/* Top bar */}
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "3px",
            backgroundColor: "#e8e2ce",
            display: "block",
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.5rem 1.5rem 1rem",
            borderBottom: "1px solid #5a5849",
          }}
        >
          <span style={{ color: "#6b6757", fontSize: "12px", letterSpacing: "0.18em" }}>
            {card.number} / DATA
          </span>
          <span style={{ color: "#e8e2ce", fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            {card.title}
          </span>
        </div>

        {/* Content */}
{/* Scrollbar style */}
        <style>{`
          .nier-scroll::-webkit-scrollbar {
            width: 4px;
          }
          .nier-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          .nier-scroll::-webkit-scrollbar-thumb {
            background: #8a8470;
          }
          .nier-scroll::-webkit-scrollbar-thumb:hover {
            background: #c8c3aa;
          }
        `}</style>

        {/* Content */}
        <div
          className="nier-scroll"
          style={{
            padding: "1.25rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            maxHeight: "60vh",
            overflowY: "auto",
          }}
        >
          {card.content.map((item, i) => renderItem(item, i))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0.75rem 1.5rem",
            borderTop: "1px solid #5a5849",
          }}
        >
          <span style={{ color: "#6b6757", fontSize: "12px", letterSpacing: "0.2em" }}>
            YoRHa PORTFOLIO SYSTEM
          </span>
        </div>

        {/* Corner mark */}
        <span
          style={{
            position: "absolute",
            bottom: "6px",
            right: "6px",
            width: "10px",
            height: "10px",
            borderRight: "1.5px solid #8a8470",
            borderBottom: "1.5px solid #8a8470",
            display: "block",
          }}
        />

        {/* Bottom bar */}
        <span
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "2px",
            backgroundColor: "#e8e2ce",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
