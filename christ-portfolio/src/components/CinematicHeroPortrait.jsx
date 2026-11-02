import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Scan, Aperture, ShieldCheck } from 'lucide-react';
import { soundEngine } from '../utils/audioEngine';

export default function CinematicHeroPortrait() {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrame;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from center of portrait
      const deltaX = (e.clientX - centerX) / (window.innerWidth * 0.5);
      const deltaY = (e.clientY - centerY) / (window.innerHeight * 0.5);

      // Tilt angles (clamped)
      targetX = Math.max(-14, Math.min(14, -deltaY * 16));
      targetY = Math.max(-16, Math.min(16, deltaX * 18));

      // Specular glare position (percentage inside card)
      const glarePercentX = ((e.clientX - rect.left) / rect.width) * 100;
      const glarePercentY = ((e.clientY - rect.top) / rect.height) * 100;

      setTilt((prev) => ({
        ...prev,
        glareX: Math.max(0, Math.min(100, glarePercentX)),
        glareY: Math.max(0, Math.min(100, glarePercentY)),
      }));
    };

    const updateTilt = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      setTilt((prev) => ({
        ...prev,
        x: currentX,
        y: currentY,
      }));

      animationFrame = requestAnimationFrame(updateTilt);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrame = requestAnimationFrame(updateTilt);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="hero-portrait-card"
      onMouseEnter={() => {
        setIsHovered(true);
        soundEngine.playClick();
      }}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '16px',
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        zIndex: 20,
        pointerEvents: 'auto',
        userSelect: 'none',
      }}
    >
      {/* 3D Tilted Monolith Container */}
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '16px',
          transform: `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateZ(10px)`,
          transition: 'box-shadow 0.3s ease',
          boxShadow: isHovered
            ? '0 30px 80px -10px rgba(229, 9, 20, 0.4), 0 0 40px rgba(229, 9, 20, 0.25)'
            : '0 25px 60px -10px rgba(0, 0, 0, 0.9), 0 0 25px rgba(229, 9, 20, 0.15)',
          border: '1px solid rgba(229, 9, 20, 0.35)',
          overflow: 'hidden',
          backgroundColor: '#0A090D',
          position: 'relative',
        }}
      >
        {/* Crisp Photorealistic Portrait Image (Normal, sharp, no pixelation!) */}
        <img
          src="/profile.png"
          alt="Mageshwaran — CAD &amp; Architectural Designer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 15%',
            display: 'block',
            filter: 'contrast(1.08) brightness(1.02) saturate(1.04)',
            transform: 'scale(1.03)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Cinematic Vignette Shadow Overlay (smoothly fades the background into dark cinema) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 36%, transparent 42%, rgba(10, 9, 13, 0.55) 75%, rgba(5, 5, 7, 0.95) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Bottom Suit Fade Gradient */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '35%',
            background: 'linear-gradient(to top, #0A090D 0%, rgba(10, 9, 13, 0.8) 40%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Interactive Specular Glare / Glass Sheen */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle 280px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 200, 200, 0.05) 50%, transparent 80%)`,
            pointerEvents: 'none',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Anamorphic Crimson Laser Edge Scanline */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #FF2A2A, #FFB300, transparent)',
            boxShadow: '0 0 12px #FF2A2A',
            animation: 'pulseGlow 2.5s infinite alternate',
          }}
        />

        {/* Top HUD Telemetry Info */}
        <div
          style={{
            position: 'absolute',
            top: 'clamp(10px, 3.5%, 16px)',
            left: 'clamp(12px, 4%, 18px)',
            right: 'clamp(12px, 4%, 18px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(8px, 1.8vw, 10px)',
            letterSpacing: 'clamp(1px, 0.3vw, 2px)',
            color: 'var(--text-platinum)',
            textShadow: '0 2px 6px rgba(0, 0, 0, 0.9)',
            zIndex: 5,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="rec-dot" style={{ width: '6px', height: '6px' }} />
            <span>ID // MAGESHWARAN</span>
          </div>

          <div
            style={{
              background: 'rgba(0, 0, 0, 0.7)',
              padding: '2px 8px',
              borderRadius: '3px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'var(--accent-amber)',
              fontSize: '9px',
            }}
          >
            
          </div>
        </div>

        {/* Precision Corner Crosshair Brackets */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            width: '12px',
            height: '12px',
            borderTop: '2px solid var(--accent-crimson)',
            borderLeft: '2px solid var(--accent-crimson)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '12px',
            height: '12px',
            borderTop: '2px solid var(--accent-crimson)',
            borderRight: '2px solid var(--accent-crimson)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            width: '12px',
            height: '12px',
            borderBottom: '2px solid var(--accent-crimson)',
            borderLeft: '2px solid var(--accent-crimson)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            width: '12px',
            height: '12px',
            borderBottom: '2px solid var(--accent-crimson)',
            borderRight: '2px solid var(--accent-crimson)',
            pointerEvents: 'none',
          }}
        />

        {/* Bottom Monolith Metadata */}
        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(10px, 3.5%, 16px)',
            left: 'clamp(12px, 4%, 18px)',
            right: 'clamp(12px, 4%, 18px)',
            zIndex: 5,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(8px, 1.8vw, 10px)',
              letterSpacing: 'clamp(1.2px, 0.35vw, 2.5px)',
              color: 'var(--accent-amber)',
              marginBottom: '3px',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            CREATIVE CAD DESIGNER
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(7.5px, 1.6vw, 10px)',
              letterSpacing: 'clamp(0.6px, 0.2vw, 1.5px)',
              color: 'var(--text-ash)',
              gap: '4px',
              flexWrap: 'nowrap',
            }}
          >
            <span>PITCH: {tilt.x > 0 ? `+${tilt.x.toFixed(1)}°` : `${tilt.x.toFixed(1)}°`}</span>
            <span>YAW: {tilt.y > 0 ? `+${tilt.y.toFixed(1)}°` : `${tilt.y.toFixed(1)}°`}</span>
            <span style={{ color: '#4ADE80', whiteSpace: 'nowrap' }}>ONLINE ●</span>
          </div>
        </div>
      </div>
    </div>
  );
}
