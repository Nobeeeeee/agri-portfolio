import React from 'react';
import { Compass } from 'lucide-react';
import CinematicHeroPortrait from './CinematicHeroPortrait';

export default function VisionarySection() {
  return (
    <section
      id="visionary"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(75px, 10vh, 120px) clamp(20px, 6vw, 80px)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '1150px', width: '100%' }}>
        {/* Section Header */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--accent-crimson)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            <Compass size={14} />
            <span>THE MIND BEHIND THE MODELS</span>
          </div>

          <h2 className="visionary-title">
            <span className="visionary-title-line">WHERE PRECISION MEETS</span>
            <span className="visionary-title-line visionary-title-amber">
              LIMITLESS IMAGINATION.
            </span>
          </h2>

          {/* Mobile-Only Portrait Card: Displayed in About Me on mobile devices */}
          <div className="hero-portrait-mobile">
            <CinematicHeroPortrait />
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(15px, 1.4vw, 19px)',
              color: 'var(--text-ash)',
              maxWidth: '750px',
              lineHeight: 1.7,
            }}
          >
            Traditional design is no longer just about drawings and dimensions. Today's architectural world demands precision, creativity, spatial intelligence, and immersive visualization. As a CAD and Architectural Design Enthusiast, I bridge the gap between creative imagination and technical precision, transforming concepts into detailed blueprints, intelligent 3D models, and breathtaking architectural realities.
          </p>
        </div>
      </div>
    </section>
  );
}
