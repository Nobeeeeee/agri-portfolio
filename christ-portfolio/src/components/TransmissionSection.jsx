import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ExternalLink, ArrowUpRight } from 'lucide-react';

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
        padding: 'clamp(65px, 8vh, 100px) clamp(8px, 2.5vw, 40px) clamp(70px, 10vh, 120px) clamp(8px, 2.5vw, 40px)',
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '980px', width: '100%' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(24px, 4.5vh, 44px)' }}>
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
            <span className="rec-dot" />
            <span>LET'S WORK TOGETHER</span>
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
            LET'S CONNECT
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--accent-amber)',
              letterSpacing: '3px',
              marginBottom: '12px',
            }}
          >
            OPEN FOR NEW OPPORTUNITIES
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(13px, 1.2vw, 16px)',
              color: 'var(--text-ash)',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Connect with me directly via phone, email, or explore my social channels below.
          </p>
        </div>

        {/* Cinematic Contact Channels Monolith */}
        <div
          className="cinema-panel contact-monolith-panel"
          style={{
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
              paddingBottom: '12px',
              marginBottom: 'clamp(14px, 2.5vh, 26px)',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(8.5px, 2vw, 11px)',
              letterSpacing: 'clamp(0.5px, 1.2vw, 2px)',
              color: 'var(--text-muted)',
              gap: '6px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0 }}>
              <span className="rec-dot" style={{ width: '6px', height: '6px', flexShrink: 0 }} />
              <span style={{ whiteSpace: 'nowrap' }}>COMMUNICATION CHANNEL</span>
            </div>
            <div style={{ color: '#4ADE80', whiteSpace: 'nowrap', flexShrink: 0 }}>
              STATUS: READY TO CONNECT ●
            </div>
          </div>

          {/* Direct Phone & Email Cards: 2 Columns Side-by-Side Without Overflow */}
          <div className="contact-direct-grid">
            {/* Phone Card */}
            <div
              className="contact-card-item"
              style={{
                background: 'rgba(5, 5, 7, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: 'clamp(10px, 1.8vw, 22px) clamp(8px, 1.6vw, 20px)',
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
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(7.5px, 1.6vw, 11px)',
                    letterSpacing: 'clamp(0.5px, 1.2vw, 2px)',
                    color: 'var(--accent-amber)',
                    marginBottom: '8px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  <Phone size={12} color="var(--accent-crimson)" style={{ flexShrink: 0 }} />
                  <span>DIRECT LINE // MOBILE</span>
                </div>

                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-action)',
                    fontSize: 'clamp(1.05rem, 2.8vw, 2.3rem)',
                    letterSpacing: 'clamp(0.5px, 1vw, 2px)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    marginBottom: '10px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {phone}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '4px', alignItems: 'center', width: '100%' }}>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="btn-cinema"
                  style={{
                    flex: '1 1 auto',
                    minWidth: 0,
                    justifyContent: 'center',
                    fontSize: 'clamp(9px, 1.8vw, 12px)',
                    padding: 'clamp(5px, 1vw, 8px) clamp(4px, 1.2vw, 14px)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    gap: '4px',
                  }}
                >
                  <Phone size={11} style={{ flexShrink: 0 }} />
                  <span>CALL NOW</span>
                </a>

                <button
                  onClick={() => handleCopy(phone, 'phone')}
                  className="btn-ghost"
                  style={{
                    flex: '0 0 auto',
                    minWidth: 0,
                    justifyContent: 'center',
                    padding: 'clamp(5px, 1vw, 8px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(9px, 1.8vw, 11px)',
                    whiteSpace: 'nowrap',
                    gap: '4px',
                  }}
                >
                  {copiedField === 'phone' ? <Check size={11} color="#4ADE80" /> : <Copy size={11} />}
                  <span>{copiedField === 'phone' ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div
              className="contact-card-item"
              style={{
                background: 'rgba(5, 5, 7, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: 'clamp(10px, 1.8vw, 22px) clamp(8px, 1.6vw, 20px)',
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
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(7.5px, 1.6vw, 11px)',
                    letterSpacing: 'clamp(0.5px, 1.2vw, 2px)',
                    color: 'var(--accent-amber)',
                    marginBottom: '8px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  <Mail size={12} color="var(--accent-crimson)" style={{ flexShrink: 0 }} />
                  <span>DIRECT INBOX // EMAIL</span>
                </div>

                <a
                  href={`mailto:${email}`}
                  title={email}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(8.5px, 1.9vw, 15px)',
                    letterSpacing: '0.2px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    marginBottom: '10px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontWeight: 600,
                  }}
                >
                  {email}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '4px', alignItems: 'center', width: '100%' }}>
                <a
                  href={`mailto:${email}`}
                  className="btn-cinema"
                  style={{
                    flex: '1 1 auto',
                    minWidth: 0,
                    justifyContent: 'center',
                    fontSize: 'clamp(9px, 1.8vw, 12px)',
                    padding: 'clamp(5px, 1vw, 8px) clamp(4px, 1.2vw, 14px)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    gap: '4px',
                  }}
                >
                  <Mail size={11} style={{ flexShrink: 0 }} />
                  <span>SEND EMAIL</span>
                </a>

                <button
                  onClick={() => handleCopy(email, 'email')}
                  className="btn-ghost"
                  style={{
                    flex: '0 0 auto',
                    minWidth: 0,
                    justifyContent: 'center',
                    padding: 'clamp(5px, 1vw, 8px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(9px, 1.8vw, 11px)',
                    whiteSpace: 'nowrap',
                    gap: '4px',
                  }}
                >
                  {copiedField === 'email' ? <Check size={11} color="#4ADE80" /> : <Copy size={11} />}
                  <span>{copiedField === 'email' ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Social Channels Billing Grid: 3 Columns Side-by-Side Without Overflow */}
          <div className="contact-social-grid">
            {/* GitHub */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'clamp(8px, 1.5vw, 14px) clamp(6px, 1.2vw, 16px)',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(4px, 1vw, 8px)', minWidth: 0 }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <div style={{ minWidth: 0, overflow: 'hidden' }}>
                  <div style={{ fontFamily: 'var(--font-action)', fontSize: 'clamp(11px, 2.2vw, 17px)', letterSpacing: '0.5px', lineHeight: 1 }}>
                    GITHUB
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(7px, 1.4vw, 9.5px)', color: 'var(--text-ash)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    @Nobeeeeee
                  </div>
                </div>
              </div>
              <ArrowUpRight size={12} color="var(--accent-crimson)" style={{ flexShrink: 0 }} />
            </a>

            {/* LinkedIn */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'clamp(8px, 1.5vw, 14px) clamp(6px, 1.2vw, 16px)',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(4px, 1vw, 8px)', minWidth: 0 }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <div style={{ minWidth: 0, overflow: 'hidden' }}>
                  <div style={{ fontFamily: 'var(--font-action)', fontSize: 'clamp(11px, 2.2vw, 17px)', letterSpacing: '0.5px', lineHeight: 1 }}>
                    LINKEDIN
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(7px, 1.4vw, 9.5px)', color: 'var(--text-ash)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    in/christnoble
                  </div>
                </div>
              </div>
              <ArrowUpRight size={12} color="var(--accent-crimson)" style={{ flexShrink: 0 }} />
            </a>

            {/* Instagram */}
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'clamp(8px, 1.5vw, 14px) clamp(6px, 1.2vw, 16px)',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(4px, 1vw, 8px)', minWidth: 0 }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <div style={{ minWidth: 0, overflow: 'hidden' }}>
                  <div style={{ fontFamily: 'var(--font-action)', fontSize: 'clamp(11px, 2.2vw, 17px)', letterSpacing: '0.5px', lineHeight: 1 }}>
                    INSTAGRAM
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(7px, 1.4vw, 9.5px)', color: 'var(--text-ash)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    @one_._love_._21
                  </div>
                </div>
              </div>
              <ArrowUpRight size={12} color="var(--accent-crimson)" style={{ flexShrink: 0 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
