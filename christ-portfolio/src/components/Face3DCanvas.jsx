import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Face3DCanvas({ scrollProgress }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- THREE SCENE SETUP ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050507, 0.00075);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      4000
    );
    camera.position.set(0, 0, 750);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // --- CIRCULAR GLOW PARTICLE TEXTURE ---
    const createGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(255, 220, 180, 0.9)');
      grad.addColorStop(0.65, 'rgba(229, 9, 20, 0.5)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createGlowTexture();

    // --- PARTICLES DATA ---
    const particleCount = 4200;
    const posList = [];
    const warpList = [];
    const ringList = [];
    const colorList = [];

    for (let i = 0; i < particleCount; i++) {
      // Cosmic Stardust Distribution (floating across the whole viewport in 3D)
      const rad = 200 + Math.random() * 1100;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      posList.push(
        rad * Math.sin(phi) * Math.cos(theta),
        rad * Math.sin(phi) * Math.sin(theta) * 0.7,
        rad * Math.cos(phi) - 150
      );

      // Warp Tunnel Distribution (hyperspace stream on scroll)
      const tunnelAngle = Math.random() * Math.PI * 2;
      const tunnelRadius = 100 + Math.random() * 450;
      const tunnelZ = (Math.random() - 0.5) * 2800;
      warpList.push(
        Math.cos(tunnelAngle) * tunnelRadius,
        Math.sin(tunnelAngle) * tunnelRadius,
        tunnelZ
      );

      // Finale Quantum Ring Distribution
      const ringAngle = Math.random() * Math.PI * 2;
      const ringRadius = 340 + (Math.random() - 0.5) * 80;
      ringList.push(
        Math.cos(ringAngle) * ringRadius,
        Math.sin(ringAngle) * ringRadius - 30,
        (Math.random() - 0.5) * 160
      );

      // Vibrant cinematic colors: mix of crimson, gold, and diamond white
      const randColor = Math.random();
      if (randColor < 0.45) {
        // Crimson embers
        colorList.push(1.0, 0.15 + Math.random() * 0.2, 0.15);
      } else if (randColor < 0.8) {
        // Golden amber sparks
        colorList.push(1.0, 0.72 + Math.random() * 0.2, 0.1);
      } else {
        // Stardust platinum
        colorList.push(0.9, 0.92, 1.0);
      }
    }

    const defaultPositions = new Float32Array(posList);
    const warpPositions = new Float32Array(warpList);
    const ringPositions = new Float32Array(ringList);
    const currentPositions = new Float32Array(posList);
    const colors = new Float32Array(colorList);

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      size: 5.5,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(pointsMesh);

    // --- MOUSE TRACKING ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // --- RENDER LOOP ---
    let animationFrameId;
    let clock = new THREE.Clock();

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const p = scrollProgress.current;

      if (pointsMesh && defaultPositions) {
        const positions = pointsGeometry.attributes.position.array;

        // Scroll Transitions:
        // 0.15 - 0.45: Warp stream fly-through
        // 0.78 - 1.00: Quantum reactor ring in finale
        const tWarp = Math.min(1, Math.max(0, (p - 0.12) / 0.28));
        const tRing = Math.min(1, Math.max(0, (p - 0.78) / 0.18));

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;

          const dx = defaultPositions[i3];
          const dy = defaultPositions[i3 + 1];
          const dz = defaultPositions[i3 + 2];

          const wx = warpPositions[i3];
          const wy = warpPositions[i3 + 1];
          const wz = warpPositions[i3 + 2];

          const rx = ringPositions[i3];
          const ry = ringPositions[i3 + 1];
          const rz = ringPositions[i3 + 2];

          let targetX = dx;
          let targetY = dy;
          let targetZ = dz;

          if (tWarp > 0) {
            targetX = targetX + (wx - targetX) * tWarp;
            targetY = targetY + (wy - targetY) * tWarp;
            targetZ = targetZ + (wz - targetZ) * tWarp;
          }

          if (tRing > 0) {
            targetX = targetX + (rx - targetX) * tRing;
            targetY = targetY + (ry - targetY) * tRing;
            targetZ = targetZ + (rz - targetZ) * tRing;
          }

          // Gentle ambient floating wave
          const wave = Math.sin(elapsedTime * 0.8 + i * 0.02) * 1.5;

          positions[i3] += (targetX - positions[i3]) * 0.08;
          positions[i3 + 1] += (targetY - positions[i3 + 1]) * 0.08 + wave * 0.15;
          positions[i3 + 2] += (targetZ - positions[i3 + 2]) * 0.08;
        }

        pointsGeometry.attributes.position.needsUpdate = true;

        // Subtle 3D mesh rotation
        pointsMesh.rotation.y = elapsedTime * 0.04 + mouse.x * 0.15;
        pointsMesh.rotation.x = -mouse.y * 0.1;

        // Camera Dolly
        const targetCamZ = 750 - p * 380;
        camera.position.z += (targetCamZ - camera.position.z) * 0.06;
        camera.position.x += (mouse.x * 35 - camera.position.x) * 0.05;
        camera.position.y += (mouse.y * 25 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    render();

    // --- RESIZE ---
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}
