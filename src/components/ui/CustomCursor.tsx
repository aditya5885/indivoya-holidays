"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position references for silky smooth linear interpolation (lerp)
  const mouse = useRef({ x: -100, y: -100 });
  const circle = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch screens
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const frame = requestAnimationFrame(() => setMounted(true));

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Instant pinpoint dot follows cursor exactly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering clickable interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, [role='button'], [role='tab'], input, select, textarea, label, [tabindex]:not([tabindex='-1'])"
        );
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // 60FPS Lerp loop for the outer smooth magnetic ring
    let rafId: number;
    const render = () => {
      // Lerp formula: current + (target - current) * ease
      const ease = 0.18;
      circle.current.x += (mouse.current.x - circle.current.x) * ease;
      circle.current.y += (mouse.current.y - circle.current.y) * ease;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circle.current.x}px, ${circle.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* Outer fluid trailing ring with mix-blend mode for high-fashion sites */}
      <div
        ref={circleRef}
        className={`${styles.cursorRing} ${isHovered ? styles.cursorRingHover : ""} ${
          isClicking ? styles.cursorRingClick : ""
        }`}
        aria-hidden
      />

      {/* Center sharp precision dot */}
      <div
        ref={dotRef}
        className={`${styles.cursorDot} ${isHovered ? styles.cursorDotHover : ""}`}
        aria-hidden
      />
    </>
  );
}
