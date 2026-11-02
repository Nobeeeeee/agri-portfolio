import React from 'react';
import { ChevronDown, Play, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/audioEngine';
import CinematicHeroPortrait from './CinematicHeroPortrait';

export default function PrologueSection({ onExploreClick }) {
  return (
    <section
      id="prologue"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(80px, 12vh, 110px) clamp(20px, 6vw, 80px) 70px clamp(20px, 6vw, 80px)',
        position: 'relative',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      {/* Top Banners */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pointerEvents: 'auto',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '4px',
              color: 'var(--accent-crimson)',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '6px',
            }}
          >
            <Sparkles size={13} color="#FF2A2A" />
            <span>DIRECTED &amp; DEVELOPED BY </span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '2px',
              color: 'var(--text-ash)',
            }}
          >
          
          </div>
        </div>

        <div
          style={{
            textAlign: 'right',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '2px',
            color: 'var(--text-muted)',
            display: 'none',
          }}
          className="desktop-only-badge"
        >
          <div>3D NEURAL PERSPECTIVE</div>
          <div style={{ color: 'var(--accent-amber)' }}>INTERACTIVE MONOLITH</div>
        </div>
      </div>

      {/* Main Hero Split: Left Typography + Right 3D Photorealistic Portrait */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'clamp(30px, 5vw, 60px)',
          marginTop: 'auto',
          marginBottom: 'auto',
          flexWrap: 'wrap-reverse',
        }}
      >
        {/* Left Column: Typography & CTAs */}
        <div
          style={{
            flex: '1 1 500px',
            maxWidth: '650px',
            pointerEvents: 'auto',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(11px, 1.2vw, 13px)',
              color: 'var(--accent-amber)',
              letterSpacing: '6px',
              marginBottom: '14px',
              textTransform: 'uppercase',
            }}
          >
          
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-action)',
              fontSize: 'clamp(3.8rem, 10vw, 8.8rem)',
              letterSpacing: '4px',
              lineHeight: 0.88,
              color: '#FFFFFF',
              textTransform: 'uppercase',
              marginBottom: '18px',
              textShadow: '0 10px 40px rgba(0, 0, 0, 0.9)',
            }}
          >
            MAGESHWARAN
          </h1>

          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.3rem, 2.8vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '2px',
              color: 'var(--text-platinum)',
              lineHeight: 1.2,
              marginBottom: '22px',
            }}
          >
            CREATIVE DESIGNER &bull;{' '}
            <span
              style={{
                color: 'var(--accent-crimson)',
                textShadow: '0 0 25px rgba(229, 9, 20, 0.6)',
              }}
            >
              DESIGNER OF BUILDING INFORMATION MODELS
            </span>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(14px, 1.3vw, 17px)',
              color: 'var(--text-ash)',
              maxWidth: '560px',
              lineHeight: 1.6,
              marginBottom: '34px',
            }}
          >
          Explore the art of architectural design — where creativity meets precision, and every detail shapes the future.
          </p>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                soundEngine.playWhoosh(100, 300);
                onExploreClick();
              }}
              className="btn-cinema"
            >
              <Play size={16} fill="currentColor" />
              <span>ABOUT ME</span>
            </button>

            <a
              href="#transmission"
              onClick={() => soundEngine.playClick()}
              className="btn-ghost"
            >
            GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Right Column: 3D Photorealistic Portrait Monolith (Desktop Only in Home) */}
        <div
          className="hero-portrait-desktop"
          style={{
            flex: '0 1 auto',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'auto',
          }}
        >
          <CinematicHeroPortrait />
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          pointerEvents: 'auto',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-ash)',
            letterSpacing: '3px',
            cursor: 'pointer',
          }}
          onClick={onExploreClick}
        >
          <div
            style={{
              width: '24px',
              height: '38px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px',
            }}
          >
            <div
              style={{
                width: '3px',
                height: '8px',
                backgroundColor: 'var(--accent-crimson)',
                borderRadius: '2px',
                animation: 'pulseGlow 1.2s infinite',
              }}
            />
          </div>
          <span>SCROLL TO ADVANCE SCENE</span>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent-amber)',
            letterSpacing: '2px',
          }}
        >
          [3D MONOLITH // BIOMETRIC ACTIVE]
        </div>
      </div>
    </section>
  );
}
