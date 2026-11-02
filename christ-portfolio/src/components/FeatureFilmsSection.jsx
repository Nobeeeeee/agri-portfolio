import React, { useState, useEffect, useRef } from 'react';
import { Clapperboard, ExternalLink, Play, Eye, Sparkles, Terminal, Activity } from 'lucide-react';
import { soundEngine } from '../utils/audioEngine';

export default function FeatureFilmsSection({ onOpenProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 960;

  const films = [
    {
      id: 'quantumnexus',
      title: 'QUANTUM NEXUS',
      subtitle: 'HIGH-FREQUENCY ALGORITHMIC MATRIX',
      year: '2026',
      poster: '/poster_quantumnexus.jpg',
      logline: 'Sub-millisecond institutional market terminal with 3D vector orderbooks and real-time WebGL data streams.',
      stack: ['React 19', 'Three.js / WebGL', 'WebSockets', 'TailwindCSS', 'TypeScript'],
      metrics: '350K+ TX/SEC // 0.8MS LATENCY',
      status: 'MISSION: DEPLOYED',
      accent: '#FF2A2A',
      demoUrl: 'https://github.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 'cyberstream',
      title: 'CYBER STREAM',
      subtitle: 'ULTRA-HD MEDIA BROADCAST PIPELINE',
      year: '2025',
      poster: '/poster_cyberstream.jpg',
      logline: 'Decentralized next-gen video streaming protocol with spatial sound rendering and adaptive bitrate switching.',
      stack: ['Next.js App Router', 'Web Audio API', 'WebRTC', 'HLS.js', 'Framer Motion'],
      metrics: '4K 120FPS // ZERO BUFFERING',
      status: 'MISSION: LIVE BROADCAST',
      accent: '#FFB300',
      demoUrl: 'https://github.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 'agripulse',
      title: 'AGRI PULSE',
      subtitle: 'SATELLITE IOT PREDICTION ENGINE',
      year: '2025',
      poster: '/poster_agripulse.jpg',
      logline: 'Precision agricultural intelligence platform fusing multi-spectral satellite imagery with ground field sensors.',
      stack: ['React', 'Mapbox GL / Deck.gl', 'FastAPI', 'Chart.js', 'PostGIS'],
      metrics: '100K+ ACRES // 94% ACCURACY',
      status: 'MISSION: ORBITAL MONITOR',
      accent: '#00F0FF',
      demoUrl: 'https://github.com',
      codeUrl: 'https://github.com',
    },
  ];

  const handleSelect = (index) => {
    if (index === activeIndex) return;
    soundEngine.playWhoosh(140 + index * 40, 280 + index * 40);
    setActiveIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        soundEngine.playWhoosh(150, 300);
        setActiveIndex((prev) => (prev + 1) % films.length);
      }
      if (e.key === 'ArrowLeft') {
        soundEngine.playWhoosh(280, 140);
        setActiveIndex((prev) => (prev - 1 + films.length) % films.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [films.length]);

  // Touch / Drag swipe
  const handleTouchStart = (e) => {
    startXRef.current = e.touches ? e.touches[0].clientX : e.clientX;
    setIsDragging(true);
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - startXRef.current;
    if (diff < -50) {
      soundEngine.playWhoosh(150, 300);
      setActiveIndex((prev) => (prev + 1) % films.length);
    } else if (diff > 50) {
      soundEngine.playWhoosh(280, 140);
      setActiveIndex((prev) => (prev - 1 + films.length) % films.length);
    }
  };

  const currentFilm = films[activeIndex];

  return (
    <section
      id="features"
      style={{
        minHeight: '100vh',
        padding: isMobile
          ? 'clamp(65px, 8vh, 90px) 8px clamp(50px, 7vh, 80px) 8px'
          : '120px clamp(16px, 4vw, 60px) 100px clamp(16px, 4vw, 60px)',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        perspective: '1400px',
      }}
    >
      <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '24px' : '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--accent-crimson)',
              letterSpacing: '3px',
              marginBottom: '12px',
              textTransform: 'uppercase',
            }}
          >
            <Clapperboard size={14} />
            <span style={{ color: 'var(--text-muted)' }}></span>
            <span>DIGITAL STRUCTURES</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-cinema)',
              fontSize: 'clamp(2.4rem, 5vw, 4.4rem)',
              color: '#FFFFFF',
              letterSpacing: '2px',
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            DIGITAL DESIGN GALLERY
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--text-ash)',
              letterSpacing: '3px',
            }}
          >
            INTERACTIVE 3D PROJECTION ARC &bull; CLICK ANY CARD TO ENGAGE
          </div>
        </div>

        {/* --- 3D REVOLVING SPATIAL ARC DECK --- */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseUp={handleTouchEnd}
          style={{
            position: 'relative',
            height: isMobile ? 'clamp(420px, 55vh, 500px)' : 'clamp(460px, 58vh, 620px)',
            width: '100%',
            transformStyle: 'preserve-3d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: isMobile ? '10px 0 28px 0' : '20px 0 40px 0',
            userSelect: 'none',
          }}
        >
          {films.map((film, index) => {
            // Calculate spatial offset relative to active index
            const offset = (index - activeIndex + films.length) % films.length;
            // Map offset to -1, 0, 1 for 3 items
            let posIndex = 0;
            if (offset === 0) posIndex = 0; // Center
            else if (offset === 1) posIndex = 1; // Right
            else posIndex = -1; // Left

            const isCenter = posIndex === 0;

            // 3D Spatial Transform Matrix
            let translateX = 0;
            let translateZ = 0;
            let rotateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;

            // Responsive offset calculations so shadowed cards in the back are clearly seen in mobile view
            let shiftX = 380;
            let translateZBack = -180;
            let rotateAngle = 28;
            let backScale = 0.86;

            if (isMobile) {
              shiftX = Math.round(Math.min(95, Math.max(55, windowWidth * 0.18)));
              translateZBack = -110;
              rotateAngle = 18;
              backScale = 0.82;
            } else if (isTablet) {
              shiftX = 220;
              translateZBack = -140;
              rotateAngle = 22;
              backScale = 0.84;
            }

            if (posIndex === 0) {
              translateX = 0;
              translateZ = isMobile ? 35 : 80;
              rotateY = 0;
              scale = 1;
              opacity = 1;
              zIndex = 20;
            } else if (posIndex === 1) {
              translateX = shiftX;
              translateZ = translateZBack;
              rotateY = -rotateAngle;
              scale = backScale;
              opacity = isMobile ? 0.65 : 0.45;
              zIndex = 10;
            } else if (posIndex === -1) {
              translateX = -shiftX;
              translateZ = translateZBack;
              rotateY = rotateAngle;
              scale = backScale;
              opacity = isMobile ? 0.65 : 0.45;
              zIndex = 10;
            }

            return (
              <div
                key={film.id}
                onClick={() => handleSelect(index)}
                style={{
                  position: 'absolute',
                  width: isMobile ? 'clamp(240px, 70vw, 315px)' : 'clamp(300px, 50vw, 680px)',
                  height: '100%',
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  transformOrigin: 'center center',
                  transition: 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                  opacity,
                  zIndex,
                  cursor: isCenter ? 'default' : 'pointer',
                  borderRadius: '16px',
                  border: `1px solid ${isCenter ? 'rgba(229, 9, 20, 0.55)' : 'rgba(255, 255, 255, 0.1)'}`,
                  boxShadow: isCenter
                    ? '0 30px 90px -10px rgba(0, 0, 0, 0.98), 0 0 50px rgba(229, 9, 20, 0.35), 0 10px 40px rgba(0, 0, 0, 0.9)'
                    : '0 20px 50px rgba(0, 0, 0, 0.95), -10px 0 30px rgba(0, 0, 0, 0.9), 10px 0 30px rgba(0, 0, 0, 0.9)',
                  overflow: 'hidden',
                  backgroundColor: '#0A090D',
                }}
              >
                {/* Poster Background with Anamorphic Grade */}
                <img
                  src={film.poster}
                  alt={film.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: isCenter
                      ? 'contrast(1.08) brightness(0.92)'
                      : 'contrast(1) brightness(0.55) grayscale(40%)',
                    transition: 'filter 0.5s ease',
                  }}
                />

                {/* Cinematic Vignette & Info Scrim */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(5, 5, 7, 0.96) 0%, rgba(5, 5, 7, 0.65) 50%, rgba(5, 5, 7, 0.2) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* 3D Deep Shadow Overlay for Background Cards */}
                {!isCenter && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(5, 5, 7, 0.52)',
                      boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.95)',
                      pointerEvents: 'none',
                      zIndex: 4,
                      transition: 'background 0.5s ease',
                    }}
                  />
                )}

                {/* Top Holographic Header Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: isMobile ? '12px' : '18px',
                    left: isMobile ? '14px' : '20px',
                    right: isMobile ? '14px' : '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: isMobile ? '10px' : '11px',
                    letterSpacing: '1.5px',
                    color: '#FFF',
                    zIndex: 5,
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(0, 0, 0, 0.75)',
                      padding: isMobile ? '3px 8px' : '4px 10px',
                      borderRadius: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: film.accent,
                    }}
                  >
                    <span className="rec-dot" style={{ width: '6px', height: '6px', backgroundColor: film.accent }} />
                    <span>{film.status}</span>
                  </div>

                  <div style={{ color: 'var(--text-ash)' }}>
                    ARCHIVE // 0{index + 1}
                  </div>
                </div>

                {/* Center Content for Active Monolith */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: isMobile ? '16px' : '22px',
                    left: isMobile ? '16px' : 'clamp(20px, 3vw, 36px)',
                    right: isMobile ? '16px' : 'clamp(20px, 3vw, 36px)',
                    zIndex: 5,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: isMobile ? '10px' : '11px',
                      color: film.accent,
                      letterSpacing: isMobile ? '2px' : '3px',
                      marginBottom: '6px',
                    }}
                  >
                    {film.subtitle}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-action)',
                      fontSize: isCenter
                        ? (isMobile ? 'clamp(2rem, 5.5vw, 2.6rem)' : 'clamp(2.4rem, 4.5vw, 4.2rem)')
                        : (isMobile ? '1.35rem' : 'clamp(1.8rem, 3.2vw, 2.8rem)'),
                      letterSpacing: '2px',
                      color: isCenter ? '#FFFFFF' : 'rgba(255, 255, 255, 0.42)',
                      lineHeight: 1,
                      marginBottom: isMobile ? '8px' : '12px',
                      textShadow: isCenter ? '0 4px 20px rgba(0,0,0,0.9)' : 'none',
                    }}
                  >
                    {film.title}
                  </h3>

                  <p
                    style={{
                      fontSize: isMobile ? '12px' : 'clamp(13px, 1.1vw, 15px)',
                      color: 'var(--text-platinum)',
                      lineHeight: 1.45,
                      marginBottom: isMobile ? '12px' : '16px',
                      display: isCenter ? 'block' : 'none',
                      maxWidth: '540px',
                    }}
                  >
                    {film.logline}
                  </p>

                  {/* Tech stack badges (Visible on active center) */}
                  {isCenter && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: isMobile ? '14px' : '20px',
                      }}
                    >
                      {film.stack.slice(0, isMobile ? 3 : film.stack.length).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: isMobile ? '9px' : '10px',
                            color: 'var(--text-ash)',
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            padding: '2px 7px',
                            borderRadius: '3px',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions for center card */}
                  {isCenter && (
                    <div style={{ display: 'flex', gap: isMobile ? '8px' : '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          soundEngine.playWhoosh(140, 260);
                          onOpenProject(film);
                        }}
                        className="btn-cinema"
                        style={{
                          fontSize: isMobile ? '12px' : '14px',
                          padding: isMobile ? '7px 14px' : '9px 20px',
                        }}
                      >
                        <Play size={isMobile ? 12 : 14} fill="currentColor" />
                        <span>EXPLORE DOSSIER</span>
                      </button>

                      <a
                        href={film.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{
                          padding: isMobile ? '7px 12px' : '9px 16px',
                          fontSize: isMobile ? '10px' : '11px',
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          soundEngine.playClick();
                        }}
                      >
                        <ExternalLink size={isMobile ? 12 : 13} />
                        <span>LIVE REPO</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* --- CINEMATIC TELEMETRY SCRUBBER DIAL --- */}
        <div
          className="cinema-panel"
          style={{
            maxWidth: isMobile ? 'clamp(280px, 86vw, 360px)' : '850px',
            margin: '0 auto',
            padding: isMobile ? '7px 12px' : '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(10, 9, 13, 0.95)',
            border: '1px solid rgba(229, 9, 20, 0.3)',
            borderRadius: isMobile ? '6px' : '8px',
            flexWrap: 'nowrap',
            gap: isMobile ? '8px' : '16px',
            boxSizing: 'border-box',
          }}
        >
          {/* Audio Waveform Meter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '6px' : '10px', minWidth: 0 }}>
            <Activity size={isMobile ? 13 : 16} color="var(--accent-crimson)" style={{ flexShrink: 0 }} />
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: isMobile ? '12px' : '18px', flexShrink: 0 }}>
              {(isMobile
                ? [6, 11, 5, 12, 8, 10]
                : [12, 18, 8, 16, 22, 10, 14, 20, 15, 9, 17, 13]
              ).map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: isMobile ? '2px' : '3px',
                    height: `${h}px`,
                    backgroundColor: i === (isMobile ? activeIndex * 2 : activeIndex * 4) ? 'var(--accent-crimson)' : 'rgba(255, 255, 255, 0.3)',
                    borderRadius: '1px',
                    transition: 'height 0.3s ease, background-color 0.3s ease',
                  }}
                />
              ))}
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: isMobile ? '9px' : '11px',
                letterSpacing: isMobile ? '1px' : '2px',
                color: 'var(--text-ash)',
                whiteSpace: 'nowrap',
              }}
            >
              {isMobile ? '3D RADIAL' : 'SPATIAL 3D RADIAL FREQUENCY'}
            </span>
          </div>

          {/* Stepper Dots (Theme matched) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '7px' : '10px', flexShrink: 0 }}>
            {films.map((film, idx) => {
              const isActive = activeIndex === idx;

              return (
                <button
                  key={film.id}
                  onClick={() => handleSelect(idx)}
                  title={`0${idx + 1} // ${film.title}`}
                  aria-label={`0${idx + 1} // ${film.title}`}
                  style={{
                    width: isActive ? (isMobile ? '8px' : '10px') : (isMobile ? '6px' : '8px'),
                    height: isActive ? (isMobile ? '8px' : '10px') : (isMobile ? '6px' : '8px'),
                    borderRadius: '50%',
                    padding: 0,
                    border: 'none',
                    cursor: 'pointer',
                    background: isActive ? 'var(--accent-crimson)' : 'rgba(255, 255, 255, 0.25)',
                    boxShadow: isActive
                      ? '0 0 8px var(--accent-crimson), 0 0 14px rgba(229, 9, 20, 0.7)'
                      : 'none',
                    transition: 'all 0.25s ease',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                      e.currentTarget.style.transform = 'scale(1.25)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                />
              );
            })}
          </div>

          {/* Frame indicator */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: isMobile ? '9px' : '11px',
              letterSpacing: isMobile ? '1px' : '2px',
              color: 'var(--accent-amber)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {isMobile ? 'SWIPE ⇄' : 'USE ← / → ARROWS TO ROTATE'}
          </div>
        </div>
      </div>
    </section>
  );
}
