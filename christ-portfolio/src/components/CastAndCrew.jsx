import React, { useState } from 'react';
import {
  DraftingCompass,
  Building2,
  Tractor,
  Boxes,
  Sparkles,
} from 'lucide-react';
import { soundEngine } from '../utils/audioEngine';

export default function CastAndCrew() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      id: '01',
      name: 'CAD',
      fullName: 'Computer-Aided Design',
      category: '2D & 3D DRAFTING',
      icon: <DraftingCompass size={22} color="#FF2A2A" />,
      accent: '#FF2A2A',
      role: 'Precision 2D technical drawings, 3D parametric solid modeling, and geometric dimensioning & tolerancing (GD&T).',
      level: 'ADVANCED EXPERT',
      specs: [
        '2D/3D Drafting',
        'Parametric Modeling',
        'Engineering Schematics',
      ],
      tagline: 'PRECISION GEOMETRY',
      metrics: '100% PRECISION',
    },
    {
      id: '02',
      name: 'Archicad',
      fullName: 'Architectural BIM Solutions',
      category: 'BIM ARCHITECTURE',
      icon: <Building2 size={22} color="#FFB300" />,
      accent: '#FFB300',
      role: 'Building Information Modeling (BIM), 3D architectural visualization, spatial planning, and virtual building documentation.',
      level: 'PROFICIENT',
      specs: [
        'BIM Workflow',
        'Virtual Building',
        'Spatial Planning',
      ],
      tagline: 'VIRTUAL BUILDING',
      metrics: 'HIGH FIDELITY',
    },
    {
      id: '03',
      name: 'Form Machinery',
      fullName: 'Farm & Form Machinery Systems',
      category: 'MECHANICAL & AGRI SYSTEMS',
      icon: <Tractor size={22} color="#00F0FF" />,
      accent: '#00F0FF',
      role: 'Design, mechanical analysis, and drafting of agricultural implements, form & processing equipment, and power assemblies.',
      level: 'CORE DISCIPLINE',
      specs: [
        'Farm Implements',
        'Power Systems',
        'Assembly Modeling',
      ],
      tagline: 'HEAVY EQUIPMENT',
      metrics: 'MECHANICAL CAD',
    },
    {
      id: '04',
      name: 'Revit',
      fullName: 'Autodesk Revit BIM Platform',
      category: 'STRUCTURAL BIM',
      icon: <Boxes size={22} color="#D946EF" />,
      accent: '#D946EF',
      role: 'Parametric family creation, structural modeling, multi-disciplinary BIM coordination, and construction documentation.',
      level: 'SPECIALIST',
      specs: [
        'Parametric Families',
        'Structural BIM',
        '3D Coordination',
      ],
      tagline: 'BIM INFRASTRUCTURE',
      metrics: 'SEAMLESS BIM',
    },
  ];

  return (
    <section
      id="skills"
      style={{
        minHeight: 'auto',
        padding: 'clamp(65px, 9vh, 105px) clamp(16px, 5vw, 60px)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 5vh, 44px)' }}>
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
            <Sparkles size={14} />
            <span>CORE PRODUCTION ARSENAL</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-cinema)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              color: '#FFFFFF',
              letterSpacing: '2px',
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            AREAS OF EXPERTISE.
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-ash)',
              letterSpacing: '2.5px',
            }}
          >
            4 CORE ENGINEERING PROFICIENCIES &bull; CAD, BIM &amp; MACHINERY SYSTEMS
          </div>

          {/* Mobile Swipe Cue */}
          <div
            className="mobile-swipe-hint"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--accent-amber)',
              letterSpacing: '2px',
              marginTop: '16px',
            }}
          >
            <span>&larr; SWIPE TO EXPLORE // 01 &mdash; 04 &rarr;</span>
          </div>
        </div>

        {/* 4 Feature Monolith Cards: 1 Row with Horizontal Scroll on Mobile, 4 Columns on Desktop */}
        <div className="skills-container">
          {skills.map((skill) => {
            const isHovered = selectedSkill === skill.id;

            return (
              <div
                key={skill.id}
                className="cinema-panel skill-card"
                style={{
                  padding: '20px 18px',
                  background: isHovered ? 'rgba(18, 14, 24, 0.95)' : 'rgba(12, 10, 16, 0.85)',
                  border: isHovered
                    ? `1px solid ${skill.accent}`
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isHovered
                    ? `0 14px 34px -10px ${skill.accent}33, 0 0 16px ${skill.accent}22`
                    : 'none',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                }}
                onMouseEnter={() => {
                  soundEngine.playClick();
                  setSelectedSkill(skill.id);
                }}
                onMouseLeave={() => {
                  setSelectedSkill(null);
                }}
              >
                {/* Glowing Top Accent Strip */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, transparent, ${skill.accent}, transparent)`,
                    opacity: isHovered ? 1 : 0.4,
                    transition: 'opacity 0.3s ease',
                  }}
                />

                {/* Card Top: Index & Tagline */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '1.5px',
                  }}
                >
                  <span style={{ color: skill.accent, fontWeight: 700 }}>
                   {skill.id}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>
                    {skill.tagline}
                  </span>
                </div>

                {/* Icon & Title Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${skill.accent}40`,
                      boxShadow: `0 0 14px ${skill.accent}20`,
                      flexShrink: 0,
                    }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-action)',
                        fontSize: '1.85rem',
                        letterSpacing: '1px',
                        color: '#FFFFFF',
                        lineHeight: 1,
                        margin: 0,
                      }}
                    >
                      {skill.name}
                    </h3>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: skill.accent,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginTop: '3px',
                      }}
                    >
                      {skill.fullName}
                    </div>
                  </div>
                </div>

                {/* Role / Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    color: 'var(--text-ash)',
                    lineHeight: 1.5,
                    margin: '12px 0',
                    flexGrow: 1,
                  }}
                >
                  {skill.role}
                </p>

                {/* Compact Capability Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '16px',
                    paddingTop: '10px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {skill.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'var(--text-platinum)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '2px 7px',
                        borderRadius: '3px',
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Bottom Status / Level */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      color: skill.accent,
                      letterSpacing: '0.5px',
                      background: `${skill.accent}15`,
                      border: `1px solid ${skill.accent}40`,
                      padding: '3px 8px',
                      borderRadius: '3px',
                    }}
                  >
                    {skill.level}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>
                    {skill.metrics}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
