import React, { useState, useEffect } from 'react';
import { Film, Menu, X, ArrowUpRight } from 'lucide-react';

export default function CinematicViewport({ scrollRatio, currentScene, onNavigate }) {
  const [timecode, setTimecode] = useState('00:00:00:00');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic Hollywood production timecode ticker
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const hrs = '00';
      const mins = String(Math.floor(frame / 1800)).padStart(2, '0');
      const secs = String(Math.floor((frame % 1800) / 30)).padStart(2, '0');
      const frames = String(frame % 30).padStart(2, '0');
      setTimecode(`${hrs}:${mins}:${secs}:${frames}`);
    }, 1000 / 30); // 30 fps timecode clock

    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: 'HOME', target: 'prologue',  },
    { label: 'ABOUT ME', target: 'visionary',  },
    { label: 'PROJECTS', target: 'features',  },
    { label: 'SKILLS', target: 'skills', },
    { label: 'CONTACT', target: 'transmission', },
  ];

  const handleNavClick = (id, sceneIdx) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id, sceneIdx);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* 2.39:1 Top Cinemascope Bar with Navigation Header */}
      <header
        className="cinema-bar-top"
        style={{
          height: 'clamp(52px, 6.5vh, 66px)',
          padding: '0 clamp(16px, 4vw, 48px)',
          background: 'rgba(5, 5, 7, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(229, 9, 20, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: Brand & Telemetry Timecode */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 2vw, 20px)' }}>
          <div
            onClick={() => handleNavClick('prologue', 0)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
            }}
          >
            <span className="rec-dot" />
            <span
              style={{
                fontFamily: 'var(--font-action)',
                fontSize: '22px',
                letterSpacing: '2px',
                color: '#FFFFFF',
              }}
            >
              MAGESHWARAN
            </span>
          </div>

          <span style={{ opacity: 0.25, display: 'inline-block' }}>|</span>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '2px',
              color: 'var(--text-ash)',
            }}
            className="desktop-telemetry"
          >
            <span>TC {timecode}</span>
            <span style={{ color: 'var(--accent-crimson)', fontWeight: 600 }}>4K HDR</span>
          </div>
        </div>

        {/* Center / Right: Desktop Navigation Menu */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(14px, 2vw, 28px)',
          }}
          className="desktop-nav-menu"
        >
          {navItems.map((item, idx) => {
            const isActive = currentScene === idx;

            return (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target, idx)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? '#FFFFFF' : 'var(--text-ash)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  padding: '6px 4px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--accent-amber)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-ash)';
                }}
              >
                {isActive && (
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-crimson)',
                      boxShadow: '0 0 8px var(--accent-crimson)',
                    }}
                  />
                )}
                <span>{item.label}</span>

                {/* Active Indicator Underline */}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #E50914, #FFB300)',
                      borderRadius: '1px',
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="mobile-menu-btn"
          style={{
            background: 'none',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFF',
            padding: '6px 8px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(5, 5, 7, 0.98)',
            borderBottom: '1px solid rgba(229, 9, 20, 0.4)',
            zIndex: 999,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            backdropFilter: 'blur(20px)',
          }}
        >
          {navItems.map((item, idx) => (
            <button
              key={item.target}
              onClick={() => handleNavClick(item.target, idx)}
              style={{
                background: 'none',
                border: 'none',
                color: currentScene === idx ? 'var(--accent-crimson)' : 'var(--text-platinum)',
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                letterSpacing: '2px',
                textAlign: 'left',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* 2.39:1 Bottom Cinemascope Bar */}
      <footer className="cinema-bar-bottom">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ opacity: 0.3 }}>//</span>
        </div>

        {/* Global Progress Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '160px',
              height: '3px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '2px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: `${Math.min(100, Math.round(scrollRatio * 100))}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #E50914, #FFB300)',
                transition: 'width 0.1s linear',
              }}
            />
          </div>
          <span style={{ color: 'var(--text-platinum)', fontWeight: 600 }}>
            {Math.min(100, Math.round(scrollRatio * 100))}%
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: 'var(--accent-amber)' }}>&copy;</span>
          <span style={{ color: '#F2EDE8' }}>MAGESHWARAN PRODUCTION</span>
        </div>
      </footer>
    </>
  );
}
