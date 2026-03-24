import { useState } from "react";
import ModalComponent from "./modal-component";

type ContentItem =
  | { type: "heading"; text: string }
  | { type: "headingWithLinks"; text: string; items: { icon: "play" | "demo" | "github"; href: string }[] }
  | { type: "meta"; items: string[] }
  | { type: "link"; text: string; href: string; inline?: string }
  | { type: "links"; items: { icon: "play" | "demo" | "github"; href: string }[] }
  | { type: "bullet"; text: string };

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

const modalData: Record<string, { number: string; title: string; content: ContentItem[] }> = {
"01": {
    number: "01",
    title: "Experiencia",
    content: [
      { type: "heading", text: "Full Stack Developer" },
      { type: "link", text: "ForIt Software Factory", href: "https://forit.ar/", inline: "Part-time" },
      { type: "meta", items: ["Enero 2025 — Presente", "Provincia de Buenos Aires", "Remota"] },
      { type: "heading", text: "Responsabilidades principales" },
      { type: "bullet", text: "Desarrollo Full Stack end-to-end con foco en modelado de dominio y reglas de negocio, asegurando que el software refleje con precisión las necesidades del producto." },
      { type: "bullet", text: "Aplicación rigurosa de Clean Architecture, Clean Code y TDD para minimizar deuda técnica, junto con participación activa en code reviews aportando feedback constructivo al equipo." },
      { type: "bullet", text: "Gestión de Pull Requests atómicos y bien documentados bajo metodología Scrum, facilitando la integración continua y manteniendo un historial de cambios claro y trazable." },
      { type: "bullet", text: "Resolución autónoma de tickets de mediana complejidad con comunicación fluida sobre el estado de las tareas, utilizando TypeScript, Node, Express, Docker, Prisma, SQLite, TailwindCSS, Storybook y Vitest en arquitecturas monorepo con Yarn Workspaces." },
      { type: "heading", text: "Empleado de Mantenimiento" },
      { type: "link", text: "Nuevo Passeo", href: "#", inline: "Full-time" },
      { type: "meta", items: ["Noviembre 2021 — Presente", "CABA", "Presencial"] },
      { type: "heading", text: "Responsabilidades principales" },
      { type: "bullet", text: "Limpieza diaria de instalaciones de interiores y exteriores." },
      { type: "bullet", text: "Control y reposición de suministros de limpieza." },
      { type: "bullet", text: "Trabajo en equipo con otros miembros del personal." },
      { type: "bullet", text: "Reporte de mantenimiento y necesidades básicas." },
    ],
  },
  "02": {
  number: "02",
  title: "Proyectos",
  content: [
    { type: "headingWithLinks", text: "App de Reconocimiento ForIT", items: [
      { icon: "play", href: "https://drive.google.com/file/d/1xLtEU4ZO81ZnEd34qv2iFQSDYQ7LemZx/view?usp=drive_link" },
      { icon: "demo", href: "https://recognitions-app-1.onrender.com/" },
    ]},
    { type: "meta", items: ["Fundación Formar", "2026"] },
    { type: "bullet", text: "Plataforma interna de reconocimiento para equipos de desarrollo orientada a visibilizar logros y buenas prácticas alineadas a la cultura organizacional." },
    { type: "bullet", text: "Permite la gestión de feedback positivo entre desarrolladores, QAs y líderes técnicos, facilitando el seguimiento de métricas de desempeño y el fortalecimiento de la motivación en múltiples squads." },
    { type: "meta", items: ["Tecnologías: NextJs, Tailwind"] },

    { type: "headingWithLinks", text: "App de Pedidos de Comida", items: [
      { icon: "github", href: "https://github.com/LucasNavarro21/PFinalComidaApp" },
    ]},
    { type: "meta", items: ["Fundación Formar", "2025"] },
    { type: "bullet", text: "Aplicación web full-stack para la gestión de pedidos de comida con control de acceso basado en roles y flujos diferenciados para cada tipo de usuario." },
    { type: "bullet", text: "Incluye registro, autenticación, administración de restaurantes, manejo de productos y proceso de compra completo para clientes." },
    { type: "bullet", text: "Desarrollé toda la arquitectura del proyecto: backend con servicios, controladores y entidades tipadas; frontend con UI dinámica, rutas protegidas, carrito persistente y vistas específicas para cada rol." },
    { type: "meta", items: ["Tecnologías: React, Express"] },

    { type: "headingWithLinks", text: "P2P File Transfer App", items: [
      { icon: "play", href: "https://drive.google.com/file/d/17vdV5ukoclAuF5CdiVVv4BCwqJkhfqEF/view?usp=drive_link" },
      { icon: "demo", href: "https://pair-drop-codigo-jc9xfs.flutterflow.app/" },
    ]},
    { type: "meta", items: ["Full Stack Internship", "Nuclea Solutions", "2025"] },
    { type: "bullet", text: "Aplicación web que permite la transferencia de archivos directamente entre usuarios mediante tecnología peer-to-peer, iniciando el proceso con WebSocket para la señalización y estableciendo una conexión WebRTC para el envío seguro y eficiente de archivos sin pasar por servidores intermedios." },
    { type: "bullet", text: "Diseñé y desarrollé toda la solución, incluyendo la lógica de conexión, validación de salas mediante códigos únicos y la interfaz de usuario utilizando Flutter Web." },
    { type: "meta", items: ["Tecnologías: Dart, Flutter Web, WebRTC, WebSocket, HTML5, JavaScript, Railway, Firebase"] },
  ],
},
  "03": {
    number: "03",
    title: "Skills",
    content: [
      { type: "bullet", text: "Frontend: React, TypeScript, Tailwind" },
      { type: "bullet", text: "Backend: Node.js, Express, PostgreSQL" },
      { type: "bullet", text: "Tools: Git, Docker, Figma" },
    ],
  },
  "04": {
    number: "04",
    title: "Educación",
    content: [
      { type: "bullet", text: "Carrera — Universidad (año - año)" },
      { type: "bullet", text: "Curso o certificación relevante" },
      { type: "bullet", text: "Otro estudio o formación" },
    ],
  },
};

export default function NierCards() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleModalClose = () => {
    setActiveModal(null);
    setHovered(null);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-8">
        <div className="w-full max-w-4xl">
          <div
            className="grid grid-cols-2 max-xs:grid-cols-1"
            style={{ fontFamily: "'Share Tech Mono', 'Courier New', monospace" }}
          >
            {cards.map((card, i) => (
              <div
                key={card.number}
                onMouseEnter={() => {
                  setHovered(i);
                  setActiveModal(card.number);
                }}
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
                {/* Top bar */}
                <span
                  className="absolute top-0 left-0 h-[3px] transition-all duration-200"
                  style={{
                    width: hovered === i ? "100%" : "0%",
                    backgroundColor: "#e8e2ce",
                  }}
                />

                {/* Number */}
                <span
                  className="text-[10px] tracking-widest transition-colors duration-150"
                  style={{ color: hovered === i ? "#e8e2ce" : "#6b6757" }}
                >
                  {card.number}
                </span>

                {/* Icon + Title */}
                <div
                  className="flex items-center gap-2 mt-4 transition-colors duration-150"
                  style={{ color: hovered === i ? "#e8e2ce" : "#3a3830" }}
                >
                  {card.icon}
                  <span className="text-[15px] uppercase tracking-widest">
                    {card.title}
                  </span>
                </div>

                {/* Footer */}
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

                {/* Bottom bar */}
                <span
                  className="absolute bottom-0 left-0 h-[2px] transition-all duration-200"
                  style={{
                    width: hovered === i ? "100%" : "0%",
                    backgroundColor: "#e8e2ce",
                  }}
                />

                {/* Corner mark */}
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

      <ModalComponent
        card={activeModal ? modalData[activeModal] : null}
        onClose={handleModalClose}
      />
    </>
  );
}