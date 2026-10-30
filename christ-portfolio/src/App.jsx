import React, { useState, useEffect, useRef } from 'react';
import Face3DCanvas from './components/Face3DCanvas';
import CinematicViewport from './components/CinematicViewport';
import PrologueSection from './components/PrologueSection';
import VisionarySection from './components/VisionarySection';
import FeatureFilmsSection from './components/FeatureFilmsSection';
import CastAndCrew from './components/CastAndCrew';
import TransmissionSection from './components/TransmissionSection';
import TrailerModal from './components/TrailerModal';
import { soundEngine } from './utils/audioEngine';

export default function App() {
  const [scrollRatio, setScrollRatio] = useState(0);
  const [currentScene, setCurrentScene] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

  const scrollProgressRef = useRef(0);
  const isNavigatingRef = useRef(false);

  // Global Scroll Listener
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          const ratio = totalHeight > 0 ? Math.min(1, Math.max(0, currentScroll / totalHeight)) : 0;

          scrollProgressRef.current = ratio;
          setScrollRatio(ratio);

          // Only compute active scene from scroll if not currently in a click-navigation smooth scroll
          if (!isNavigatingRef.current) {
            const sectionIds = ['prologue', 'visionary', 'features', 'skills', 'transmission'];
            let activeIdx = 0;

            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
              activeIdx = sectionIds.length - 1;
            } else {
              // Focal point: 35% from the top of the viewport
              const focalPoint = window.innerHeight * 0.35;

              for (let i = 0; i < sectionIds.length; i++) {
                const el = document.getElementById(sectionIds[i]);
                if (el) {
                  const rect = el.getBoundingClientRect();
                  if (rect.top <= focalPoint && rect.bottom > focalPoint) {
                    activeIdx = i;
                    break;
                  }
                }
              }
            }

            setCurrentScene(activeIdx);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (targetId, sceneIdx) => {
    isNavigatingRef.current = true;
    setCurrentScene(sceneIdx);

    const el = document.getElementById(targetId);
    if (el) {
      if (targetId === 'prologue') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const headerOffset = 64;
        const rect = el.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetTop = rect.top + scrollTop - headerOffset;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    }

    // Release navigation lock after smooth scrolling completes
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 950);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#050507' }}>
      {/* Film Grain Texture Filter */}
      <div className="film-grain" />

      {/* Cinematic Vignette */}
      <div className="cinema-vignette" />

      {/* Anamorphic 2.39:1 Viewport Scope Bars & Navigation Header */}
      <CinematicViewport
        scrollRatio={scrollRatio}
        currentScene={currentScene}
        onNavigate={handleNavigate}
      />

      {/* 3D WebGL Face & Particle Engine */}
      <Face3DCanvas scrollProgress={scrollProgressRef} />

      {/* Narrative Scrollytelling Sections */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {/* Scene 01 // Prologue */}
        <PrologueSection onExploreClick={() => handleNavigate('visionary', 1)} />

        {/* Scene 02 // Act I: The Director's Manifesto */}
        <VisionarySection />

        {/* Scene 03 // Act II: Premier Productions */}
        <FeatureFilmsSection onOpenProject={(film) => setActiveProject(film)} />

        {/* Scene 04 // Act III: Cast & Crew Billing */}
        <CastAndCrew />

        {/* Scene 05 // Finale: Direct Transmission */}
        <TransmissionSection />
      </main>

      {/* Project Dossier Modal */}
      {activeProject && (
        <TrailerModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
}
