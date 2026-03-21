import { useState } from "react";

const cards = [
  {
    number: "01",
    title: "Experiencia",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <rect x="4" y="6" width="20" height="16" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="8" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="8" y1="15" x2="16" y2="15" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="8" y1="19" x2="13" y2="19" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="11" y="3" width="6" height="4" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Proyectos",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <rect x="4" y="10" width="20" height="14" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M4 10 L10 4 L24 4 L24 10" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="10" y1="4" x2="10" y2="10" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="10" y1="17" x2="18" y2="17" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Skills",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="14" y1="5" x2="14" y2="8" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="14" y1="20" x2="14" y2="23" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="5" y1="14" x2="8" y2="14" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="20" y1="14" x2="23" y2="14" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Educación",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M14 5 L24 10 L14 15 L4 10 Z" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M8 12.5 L8 19 C8 19 11 22 14 22 C17 22 20 19 20 19 L20 12.5" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="24" y1="10" x2="24" y2="17" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="24" cy="18" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function App() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex items-center justify-center min-h-screen px-8 ">
      <div className="w-full max-w-4xl">
        <div
          className="grid grid-cols-2 max-xs:grid-cols-1 gap-8"
          style={{ fontFamily: "'Share Tech Mono', 'Courier New', monospace" }}
        >
          {cards.map((card, i) => (
            <div
              key={card.number}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex flex-col justify-between overflow-hidden cursor-pointer transition-colors duration-150"
              style={{
                backgroundColor: hovered === i ? "#3d3b34" : "#c8c3aa",
                border: "1.5px solid #8a8470",
                marginRight: i % 2 === 0 ? "-1.5px" : 0,
                marginBottom: "-1.5px",
                padding: "2.4rem 1.8rem",
                minHeight: "220px",
                zIndex: hovered === i ? 1 : 0,
              }}
            >
              <span
                className="absolute top-0 left-0 h-[3px] transition-all duration-200"
                style={{
                  width: hovered === i ? "100%" : "0%",
                  backgroundColor: "#e8e2ce",
                }}
              />

              <span
                className="text-[10px] tracking-widest transition-colors duration-150"
                style={{ color: hovered === i ? "#e8e2ce" : "#6b6757" }}
              >
                {card.number}
              </span>

              <div
                className="flex items-center gap-2 mt-4 transition-colors duration-150"
                style={{ color: hovered === i ? "#e8e2ce" : "#3a3830" }}
              >
                {card.icon}
                <span className="text-[15px] uppercase tracking-widest">
                  {card.title}
                </span>
              </div>

              <div
                className="flex justify-end mt-5 pt-3 transition-colors duration-150"
                style={{
                  borderTop: `1px solid ${hovered === i ? "#5a5849" : "#b0ab97"}`,
                }}
              >
                <span
                  className="text-[11px] transition-all duration-150"
                  style={{
                    color: hovered === i ? "#e8e2ce" : "#6b6757",
                    transform: hovered === i ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                  →
                </span>
              </div>

              <span
                className="absolute bottom-0 left-0 h-[2px] transition-all duration-200"
                style={{
                  width: hovered === i ? "100%" : "0%",
                  backgroundColor: "#e8e2ce",
                }}
              />

              <span
                className="absolute bottom-[6px] right-[6px] transition-all duration-150"
                style={{
                  width: hovered === i ? "12px" : "8px",
                  height: hovered === i ? "12px" : "8px",
                  borderRight: `1.5px solid ${hovered === i ? "#e8e2ce" : "#8a8470"}`,
                  borderBottom: `1.5px solid ${hovered === i ? "#e8e2ce" : "#8a8470"}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}