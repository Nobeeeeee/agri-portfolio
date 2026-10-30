import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ExternalLink, Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function TransmissionSection() {
  const [copiedField, setCopiedField] = useState(null);

  const phone = '+91 6369003680';
  const email = 'mageshc2005@gmail.com';
  const github = 'https://github.com/Nobeeeeee';
  const linkedin = 'https://www.linkedin.com/in/christnoble';
  const instagram = 'https://www.instagram.com/one_._love_._21?igsh=MnFqNWw3NTY1cnBj';

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section
      id="transmission"
      style={{
        minHeight: '100vh',
        padding: '120px clamp(20px, 6vw, 80px) 160px clamp(20px, 6vw, 80px)',
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '980px', width: '100%' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--accent-crimson)',
              letterSpacing: '3px',
              marginBottom: '14px',
              textTransform: 'uppercase',
            }}
          >
            <span className="rec-dot" />
            <span style={{ color: 'var(--text-muted)' }}></span>
            <span>LET'S WORK TOGETHER</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-cinema)',
              fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)',
              color: '#FFFFFF',
              letterSpacing: '2px',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            LET'S CONNECT
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--accent-amber)',
              letterSpacing: '3px',
              marginBottom: '16px',
            }}
          >
            OPEN FOR NEW OPPORTUNITIES
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(14px, 1.2vw, 17px)',
              color: 'var(--text-ash)',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Let&apos;s build  Connect with me directly
            via phone, email, or explore my social channels below.
          </p>
        </div>

        {/* Cinematic Contact Channels Monolith */}
        <div
          className="cinema-panel"
          style={{
            padding: 'clamp(24px, 4vw, 48px)',
            background: 'rgba(10, 9, 13, 0.94)',
            border: '1px solid rgba(229, 9, 20, 0.35)',
            boxShadow: '0 30px 90px -10px rgba(0, 0, 0, 0.95), 0 0 50px rgba(229, 9, 20, 0.15)',
            borderRadius: '12px',
            position: 'relative',
          }}
        >
          {/* Top Status Telemetry Line */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '16px',
              marginBottom: '32px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '2px',
              color: 'var(--text-muted)',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="rec-dot" />
              <span>COMMUNICATION CHANNEL</span>
            </div>
            <div style={{ color: '#4ADE80' }}>
              STATUS: READY TO CONNECT ●
            </div>
          </div>

          {/* Direct Phone & Email Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginBottom: '32px',
            }}
          >
            {/* Phone Card */}
            <div
              style={{
                background: 'rgba(5, 5, 7, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-crimson)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '2px',
                    color: 'var(--accent-amber)',
                    marginBottom: '12px',
                  }}
                >
                  <Phone size={15} color="var(--accent-crimson)" />
                  <span>DIRECT LINE // MOBILE</span>
                </div>

                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-action)',
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    letterSpacing: '2px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    marginBottom: '14px',
                  }}
                >
                  {phone}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="btn-cinema"
                  style={{
                    fontSize: '13px',
                    padding: '8px 16px',
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={14} />
                  <span>CALL NOW</span>
                </a>

                <button
                  onClick={() => handleCopy(phone, 'phone')}
                  className="btn-ghost"
                  style={{ padding: '8px 14px', fontSize: '11px' }}
                >
                  {copiedField === 'phone' ? <Check size={14} color="#4ADE80" /> : <Copy size={14} />}
                  <span>{copiedField === 'phone' ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div
              style={{
                background: 'rgba(5, 5, 7, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-crimson)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '2px',
                    color: 'var(--accent-amber)',
                    marginBottom: '12px',
                  }}
                >
                  <Mail size={15} color="var(--accent-crimson)" />
                  <span>DIRECT INBOX // EMAIL</span>
                </div>

                <a
                  href={`mailto:${email}`}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(14px, 1.6vw, 18px)',
                    letterSpacing: '1px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    marginBottom: '18px',
                    wordBreak: 'break-all',
                    fontWeight: 600,
                  }}
                >
                  {email}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <a
                  href={`mailto:${email}`}
                  className="btn-cinema"
                  style={{
                    fontSize: '13px',
                    padding: '8px 16px',
                    textDecoration: 'none',
                  }}
                >
                  <Mail size={14} />
                  <span>SEND EMAIL</span>
                </a>

                <button
                  onClick={() => handleCopy(email, 'email')}
                  className="btn-ghost"
                  style={{ padding: '8px 14px', fontSize: '11px' }}
                >
                  {copiedField === 'email' ? <Check size={14} color="#4ADE80" /> : <Copy size={14} />}
                  <span>{copiedField === 'email' ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Social Channels Billing Grid */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '2.5px',
                color: 'var(--text-ash)',
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
            >
              
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '14px',
              }}
            >
              {/* GitHub */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: 'rgba(5, 5, 7, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  color: '#FFF',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-crimson)';
                  e.currentTarget.style.backgroundColor = 'rgba(229, 9, 20, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.backgroundColor = 'rgba(5, 5, 7, 0.85)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <div>
                    <div style={{ fontFamily: 'var(--font-action)', fontSize: '18px', letterSpacing: '1px' }}>GITHUB</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-ash)' }}>@Nobeeeeee</div>
                  </div>
                </div>
                <ArrowUpRight size={16} color="var(--accent-crimson)" />
              </a>

              {/* LinkedIn */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: 'rgba(5, 5, 7, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  color: '#FFF',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-crimson)';
                  e.currentTarget.style.backgroundColor = 'rgba(229, 9, 20, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.backgroundColor = 'rgba(5, 5, 7, 0.85)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <div>
                    <div style={{ fontFamily: 'var(--font-action)', fontSize: '18px', letterSpacing: '1px' }}>LINKEDIN</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-ash)' }}>in/christnoble</div>
                  </div>
                </div>
                <ArrowUpRight size={16} color="var(--accent-crimson)" />
              </a>

              {/* Instagram */}
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: 'rgba(5, 5, 7, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  color: '#FFF',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-crimson)';
                  e.currentTarget.style.backgroundColor = 'rgba(229, 9, 20, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.backgroundColor = 'rgba(5, 5, 7, 0.85)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <div>
                    <div style={{ fontFamily: 'var(--font-action)', fontSize: '18px', letterSpacing: '1px' }}>INSTAGRAM</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-ash)' }}>@one_._love_._21</div>
                  </div>
                </div>
                <ArrowUpRight size={16} color="var(--accent-crimson)" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
