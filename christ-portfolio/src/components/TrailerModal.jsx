import React, { useEffect } from 'react';
import { X, ExternalLink, Play, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { soundEngine } from '../utils/audioEngine';

export default function TrailerModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(5, 4, 7, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px, 4vw, 40px)',
        animation: 'fadeIn 0.25s ease-out',
      }}
      onClick={onClose}
    >
      <div
        className="cinema-panel"
        style={{
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0A090D',
          border: '1px solid rgba(229, 9, 20, 0.4)',
          borderRadius: '12px',
          padding: 'clamp(24px, 4vw, 40px)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95), 0 0 50px rgba(229, 9, 20, 0.2)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => {
            soundEngine.playClick();
            onClose();
          }}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFF',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-crimson)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--accent-amber)',
              letterSpacing: '3px',
              marginBottom: '8px',
            }}
          >
            {project.genre} &bull; PRODUCTION YEAR {project.year}
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-action)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#FFFFFF',
              letterSpacing: '2px',
              lineHeight: 1,
            }}
          >
            {project.title}
          </h2>
        </div>

        {/* Poster Widescreen Banner */}
        <div
          style={{
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '28px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
          }}
        >
          <img
            src={project.poster}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(10,9,13,0.9) 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Synopsis & Architecture */}
        <div style={{ marginBottom: '28px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--accent-crimson)',
              letterSpacing: '2px',
              marginBottom: '10px',
            }}
          >
            // ARCHITECTURAL SYNOPSIS
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--text-platinum)',
              lineHeight: 1.7,
              marginBottom: '16px',
            }}
          >
            {project.synopsis}
          </p>
        </div>

        {/* Technical Stack */}
        <div style={{ marginBottom: '32px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--accent-crimson)',
              letterSpacing: '2px',
              marginBottom: '12px',
            }}
          >
            // CORE TECHNOLOGIES DEPLOYED
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.stack.map((item, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-platinum)',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '6px 12px',
                  borderRadius: '4px',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '20px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cinema"
            style={{ fontSize: '15px', padding: '10px 22px' }}
          >
            <Play size={16} fill="currentColor" />
            <span>LAUNCH LIVE SYSTEM</span>
          </a>

          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <ExternalLink size={14} />
            <span>INSPECT SOURCE CODE</span>
          </a>
        </div>
      </div>
    </div>
  );
}
