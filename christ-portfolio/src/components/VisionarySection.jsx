import React from 'react';
import { Compass } from 'lucide-react';

export default function VisionarySection() {
  return (
    <section
      id="visionary"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px clamp(20px, 6vw, 80px)',
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

          <h2
            style={{
              fontFamily: 'var(--font-cinema)',
              fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '2px',
              marginBottom: '20px',
            }}
          >
            WHERE PRECISION MEETS
            <br />
            <span
              style={{
                color: 'var(--accent-amber)',
                textShadow: '0 0 30px rgba(255, 179, 0, 0.4)',
              }}
            >
              LIMITLESS IMAGINATION.
            </span>
          </h2>

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
