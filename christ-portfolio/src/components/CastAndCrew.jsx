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
      category: '2D & 3D DRAFTING & MODELING',
      icon: <DraftingCompass size={28} color="#FF2A2A" />,
      accent: '#FF2A2A',
      role: 'Precision 2D technical drawings, 3D parametric solid modeling, engineering schematics, and geometric dimensioning & tolerancing (GD&T).',
      level: 'ADVANCED EXPERT',
      specs: [
        '2D / 3D Technical Drafting',
        'Parametric Solid Modeling',
        'Engineering Schematics',
        'Geometric Dimensioning & Tolerancing (GD&T)',
        'Fabrication & Assembly Blueprints',
      ],
      tagline: 'PRECISION GEOMETRIC DRAFTING',
      metrics: 'PRODUCTION READY // 100% PRECISION',
    },
    {
      id: '02',
      name: 'Archicad',
      fullName: 'Architectural BIM Solutions',
      category: 'BIM ARCHITECTURE & SPATIAL DESIGN',
      icon: <Building2 size={28} color="#FFB300" />,
      accent: '#FFB300',
      role: 'Building Information Modeling (BIM), 3D architectural visualization, spatial planning, virtual building documentation, and structural coordination.',
      level: 'PROFICIENT',
      specs: [
        'BIM Workflow Integration',
        'Virtual Building Construction',
        'Architectural Spatial Planning',
        '3D Elevation & Section Detailing',
        'Interactive Architectural Renders',
      ],
      tagline: 'VIRTUAL BUILDING INFORMATION',
      metrics: 'BIM WORKFLOW // HIGH FIDELITY',
    },
    {
      id: '03',
      name: 'Form Machinery',
      fullName: 'Farm & Form Machinery Systems',
      category: 'MECHANICAL & AGRICULTURAL EQUIPMENT',
      icon: <Tractor size={28} color="#00F0FF" />,
      accent: '#00F0FF',
      role: 'Design, mechanical analysis, and drafting of agricultural implements, form & processing machinery, tractor power systems, and equipment assemblies.',
      level: 'CORE DISCIPLINE',
      specs: [
        'Farm Implements & Field Machinery',
        'Form & Processing Equipment Design',
        'Mechanical Power Transmission',
        'Component Assembly & Kinematics',
        'Fabrication Layouts & Prototyping',
      ],
      tagline: 'HEAVY EQUIPMENT & POWER SYSTEMS',
      metrics: 'FIELD PROVEN // MECHANICAL CAD',
    },
    {
      id: '04',
      name: 'Revit',
      fullName: 'Autodesk Revit BIM Platform',
      category: 'STRUCTURAL BIM & PARAMETRIC DESIGN',
      icon: <Boxes size={28} color="#D946EF" />,
      accent: '#D946EF',
      role: 'Parametric family creation, structural modeling, multi-disciplinary BIM coordination, clash detection, and comprehensive construction documentation.',
      level: 'SPECIALIST',
      specs: [
        'Parametric Family Creation',
        'Structural & Architectural BIM',
        'Multi-Disciplinary Coordination',
        '3D Clash Detection & Resolution',
        'Automated Quantity Schedules & Docs',
      ],
      tagline: 'INTEGRATED BIM INFRASTRUCTURE',
      metrics: 'PARAMETRIC DEPTH // SEAMLESS BIM',
    },
  ];

  return (
    <section
      id="skills"
      style={{
        minHeight: '100vh',
        padding: '120px clamp(20px, 6vw, 80px)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            <Sparkles size={14} />
            <span style={{ color: 'var(--text-muted)' }}></span>
            <span>CORE PRODUCTION ARSENAL</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-cinema)',
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              color: '#FFFFFF',
              letterSpacing: '2px',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            AREAS OF EXPERTISE.
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--text-ash)',
              letterSpacing: '3px',
            }}
          >
            4 CORE ENGINEERING PROFICIENCIES &bull; CAD, BIM &amp; MACHINERY SYSTEMS
          </div>
        </div>

        {/* 4 Feature Monolith Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {skills.map((skill) => {
            const isHovered = selectedSkill === skill.id;

            return (
              <div
                key={skill.id}
                className="cinema-panel"
                style={{
                  padding: '30px 24px',
                  background: isHovered ? 'rgba(18, 14, 24, 0.95)' : 'rgba(12, 10, 16, 0.85)',
                  border: isHovered
                    ? `1px solid ${skill.accent}`
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isHovered
                    ? `0 16px 40px -10px ${skill.accent}33, 0 0 20px ${skill.accent}22`
                    : 'none',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '10px',
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

                {/* Card Header: Index & Category */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '2px',
                  }}
                >
                  <span
                    style={{
                      color: skill.accent,
                      fontWeight: 700,
                    }}
                  >
                    ACT {skill.id} // 04
                  </span>
                  <span
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '10px',
                    }}
                  >
                    {skill.tagline}
                  </span>
                </div>

                {/* Icon Container */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '54px',
                    height: '54px',
                    borderRadius: '8px',
                    background: `rgba(255, 255, 255, 0.03)`,
                    border: `1px solid ${skill.accent}40`,
                    marginBottom: '20px',
                    boxShadow: `0 0 20px ${skill.accent}20`,
                  }}
                >
                  {skill.icon}
                </div>

                {/* Skill Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-action)',
                    fontSize: '2.4rem',
                    letterSpacing: '1.5px',
                    color: '#FFFFFF',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  {skill.name}
                </h3>

                {/* Full Title / Subtitle */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: skill.accent,
                    letterSpacing: '1.5px',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                  }}
                >
                  {skill.fullName}
                </div>

                {/* Role / Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--text-ash)',
                    lineHeight: 1.6,
                    marginBottom: '22px',
                    flexGrow: 1,
                  }}
                >
                  {skill.role}
                </p>

                {/* Capability Specification Chips */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '24px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {skill.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-platinum)',
                      }}
                    >
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: skill.accent,
                          display: 'inline-block',
                          flexShrink: 0,
                        }}
                      />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Status / Proficiency Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      fontWeight: 700,
                      color: skill.accent,
                      letterSpacing: '1px',
                      background: `${skill.accent}15`,
                      border: `1px solid ${skill.accent}40`,
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '10px',
                    }}
                  >
                    {skill.level}
                  </span>

                  <span
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '10px',
                      letterSpacing: '1px',
                    }}
                  >
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
