import { useCallback, useEffect, useState, useMemo, memo } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const ParticlesBackground = memo(() => {
  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      number: { value: 1560, density: { enable: true } },
      color: { value: "#8a8470" },
      shape: { type: "circle" },
      opacity: { value: { min: 0.1, max: 0.5 } },
      size: { value: { min: 1, max: 2.5 } },
      move: {
        enable: true,
        direction: "none",
        speed: { min: 1, max: 3 },
        straight: false,
        outModes: { default: "bounce" },
      },
    },
    detectRetina: true,
  }), []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    />
  );
});

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

export default function HeroComponent() {
  const [init, setInit] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const [nameVisible, setNameVisible] = useState(false);
  const [showRole, setShowRole] = useState(false);

  const roles = ["Full Stack Developer", "Analista de Sistemas"];

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  useEffect(() => {
    const nameTimer = setTimeout(() => setNameVisible(true), 400);
    const roleTimer = setTimeout(() => setShowRole(true), 1200);
    return () => {
      clearTimeout(nameTimer);
      clearTimeout(roleTimer);
    };
  }, []);

  useEffect(() => {
    if (!showRole) return;
    const interval = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setRoleVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [showRole]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Share Tech Mono', 'Courier New', monospace",
      }}
    >
      {init && <ParticlesBackground />}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          textAlign: "center",
          padding: "0 2rem",
          height: "100%",
        }}
      >
        {/* Name */}
        <h1
          style={{
            color: "#3a3830",
            fontSize: "clamp(32px, 5vw, 56px)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            margin: 0,
            fontWeight: "normal",
            opacity: nameVisible ? 1 : 0,
            transform: nameVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
            borderLeft: "2px solid #8a8470",
            borderRight: "2px solid #8a8470",
            padding: "0 0.4em",
            lineHeight: "1",
          }}
        >
          Lucas Navarro
        </h1>

        {/* Role */}
        <div style={{ height: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span
            style={{
              color: "#3a3830",
              fontSize: "clamp(13px, 2vw, 16px)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              opacity: showRole && roleVisible ? 1 : 0,
              transform: showRole && roleVisible ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
              borderBottom: "1.5px solid #8a8470",
              paddingBottom: "0.3rem",
            }}
          >
            {roles[roleIndex]}
          </span>
        </div>

        {/* Arrow down */}
        <div
          onClick={() => smoothScrollTo("cards-section")}
          style={{
            position: "absolute",
            bottom: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: nameVisible ? 1 : 0,
            transition: "opacity 1s ease 1.5s",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <svg
            width="32"
            height="20"
            viewBox="0 0 32 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ animation: "bounce 2s ease-in-out infinite" }}
          >
            <path
              d="M2 2L16 18L30 2"
              stroke="#3a3830"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Gradient overlay bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "180px",
          background: "linear-gradient(to bottom, transparent, #c8c3aa)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(8px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}