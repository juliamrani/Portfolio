import { useRef, useState, useCallback, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const projects = [
  { title: "Portfolio Website", desc: "React + Three.js personal showcase" },
  { title: "E-Commerce App", desc: "Full-stack shop with Stripe payments" },
  { title: "AI Chat Interface", desc: "Real-time LLM chat with streaming" },
  { title: "Dashboard Analytics", desc: "D3.js data visualization platform" },
  { title: "Mobile App", desc: "React Native cross-platform app" },
  { title: "Open Source CLI", desc: "Node.js developer productivity tool" },
];

function ProjectCard({ title, desc, mousePos }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [localPos, setLocalPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setLocalPos({ x: mousePos.x - rect.left, y: mousePos.y - rect.top });
  }, [mousePos]);

  return (
    <Box
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{ position: "relative", borderRadius: "0.5rem", overflow: "hidden", background: "rgba(255,255,255,0.125)" }}
    >
      {/* Border glow - suit le curseur en permanence */}
      <Box sx={{
        position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", zIndex: 1,
        background: `radial-gradient(800px circle at ${localPos.x}px ${localPos.y}px, rgba(255,255,255,0.3), transparent 40%)`,
      }} />

      {/* Inner glow - seulement au hover */}
      <Box sx={{
        position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", zIndex: 2,
        background: `radial-gradient(400px circle at ${localPos.x}px ${localPos.y}px, rgba(100,160,255,0.2), transparent 40%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
      }} />

      {/* Contenu */}
      <Box component="a" href="#" sx={{
        position: "absolute", inset: "2px", background: "rgb(111, 111, 161)",
        borderRadius: "inherit", zIndex: 3, display: "grid",
        gridTemplateRows: "1fr 1fr", gap: "0.5rem",
        px: 2, pl: 4, textDecoration: "none", alignContent: "center",
      }}>
        <Typography component="strong" sx={{ alignSelf: "self-end", fontSize: "1.1rem", fontWeight: 700, color: "white" }}>
          {title}
        </Typography>
        <Typography component="span" sx={{ opacity: 0.6, color: "#ccc", fontSize: "0.875rem", lineHeight: 1.5 }}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Projects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = useCallback((e) => setMousePos({ x: e.clientX, y: e.clientY }), []);

  return (
    <Box onMouseMove={handleMouseMove} sx={{
      width: "75vw", height: "50vh",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gap: "0.3rem",
    }}>
      {projects.map((p, i) => (
        <ProjectCard key={i} title={p.title} desc={p.desc} mousePos={mousePos} />
      ))}
    </Box>
  );
}