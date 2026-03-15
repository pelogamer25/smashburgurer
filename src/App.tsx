/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TopBun, Cheese, Patty, Lettuce, Tomato, Onions, Pickles, Sauce, BottomBun } from './components/BurgerIngredients';
import { CassetteTape, RetroSun, ArcadeGhost } from './components/RetroObjects';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const burgerContainerRef = useRef<HTMLDivElement>(null);
  
  const topBunRef = useRef<HTMLDivElement>(null);
  const cheeseRef = useRef<HTMLDivElement>(null);
  const pattyRef = useRef<HTMLDivElement>(null);
  const lettuceRef = useRef<HTMLDivElement>(null);
  const tomatoRef = useRef<HTMLDivElement>(null);
  const onionsRef = useRef<HTMLDivElement>(null);
  const picklesRef = useRef<HTMLDivElement>(null);
  const sauceRef = useRef<HTMLDivElement>(null);
  const bottomBunRef = useRef<HTMLDivElement>(null);

  const taglineRef = useRef<HTMLHeadingElement>(null);
  const perfectionRef = useRef<HTMLHeadingElement>(null);
  const shockwaveRef = useRef<HTMLDivElement>(null);

  // Retro objects refs
  const cassetteRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initial setup for deconstructed burger
    gsap.set(topBunRef.current, { y: -350, z: 300, rotationX: 15, rotationZ: -5, x: -20 });
    gsap.set(cheeseRef.current, { y: -200, z: 200, rotationX: 10, x: 30 });
    gsap.set(pattyRef.current, { y: -50, z: 100, rotationX: 25, rotationY: 15 });
    gsap.set(lettuceRef.current, { y: 100, z: 50, rotationZ: 12, x: -10 });
    gsap.set(tomatoRef.current, { y: 200, z: 0, x: 25 });
    gsap.set(onionsRef.current, { y: 300, z: -50, rotationZ: -15 });
    gsap.set(picklesRef.current, { y: 400, z: -100, rotationX: -20, x: -15 });
    gsap.set(sauceRef.current, { y: 450, z: -150, opacity: 0, scale: 0.8 });
    gsap.set(bottomBunRef.current, { y: 550, z: -200, rotationX: -5 });

    // Typewriter effect for tagline
    const taglineText = "Construida capa por capa.";
    if (taglineRef.current) {
      taglineRef.current.innerHTML = '';
      taglineText.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        taglineRef.current?.appendChild(span);
      });

      gsap.to(taglineRef.current.children, {
        opacity: 1,
        stagger: 0.05,
        duration: 0.1,
        ease: "none",
        delay: 0.5
      });
    }

    // Main Assembly Timeline (0% to 50% of scroll)
    const assembleTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "50% top",
        scrub: 1,
      }
    });

    // Fade out tagline
    assembleTl.to(taglineRef.current, { opacity: 0, y: -50, duration: 0.1 }, 0);

    // Assemble ingredients
    const finalOffsets = [-140, -90, -50, -10, 20, 40, 60, 80, 110];
    const refs = [topBunRef, cheeseRef, pattyRef, lettuceRef, tomatoRef, onionsRef, picklesRef, sauceRef, bottomBunRef];
    
    refs.forEach((ref, index) => {
      assembleTl.to(ref.current, {
        y: finalOffsets[index],
        z: 0,
        x: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        opacity: 1,
        scale: 1,
        ease: "power2.inOut",
      }, 0);
    });

    // Shockwave and Perfection text at 55%
    assembleTl.to(shockwaveRef.current, {
      scale: 3,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out"
    }, 0.9);

    assembleTl.to(perfectionRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.2,
      ease: "back.out(1.5)"
    }, 0.9);

    // Recede burger after 50%
    const recedeTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "50% top",
        end: "65% top",
        scrub: 1,
      }
    });

    recedeTl.to(burgerContainerRef.current, {
      scale: 0.5,
      y: -300,
      opacity: 0.2,
      filter: "blur(10px)",
      ease: "power1.inOut"
    }, 0);
    
    recedeTl.to(perfectionRef.current, {
      opacity: 0,
      y: -100,
      ease: "power1.in"
    }, 0);

    // Text Parallax
    const parallaxTexts = document.querySelectorAll('.parallax-text');
    parallaxTexts.forEach((text) => {
      gsap.to(text, {
        y: -100,
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    });

    // Ingredients Story Horizontal Parallax
    const story2 = document.querySelector('.story-2');
    if (story2) {
      gsap.fromTo(story2, 
        { x: 100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1,
          scrollTrigger: {
            trigger: story2,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          }
        }
      );
    }

    // Retro objects floating animations
    gsap.to(cassetteRef.current, {
      y: -30,
      rotationX: 15,
      rotationY: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(sunRef.current, {
      y: 20,
      rotationZ: 10,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(ghostRef.current, {
      y: -20,
      x: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Mouse tilt effect for cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <div ref={containerRef} className="relative w-full h-[680vh] bg-gradient-to-b from-[#030303] via-[#0a0000] to-[#030303] overflow-hidden">
      {/* Global Overlays */}
      <div className="grain-overlay"></div>
      <div className="scroll-fog"></div>
      <div className="synthwave-grid"></div>

      {/* Ambient Orbs */}
      <div className="fixed top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] ambient-orb orb-blood mix-blend-screen"></div>
      <div className="fixed top-1/2 right-1/4 w-[400px] h-[400px] md:w-[800px] md:h-[800px] ambient-orb orb-crimson mix-blend-screen"></div>
      <div className="fixed bottom-1/4 left-1/3 w-[250px] h-[250px] md:w-[500px] md:h-[500px] ambient-orb orb-inferno mix-blend-screen"></div>

      {/* Floating Retro Objects */}
      <div ref={cassetteRef} className="fixed top-[15%] right-[10%] w-32 md:w-48 opacity-40 z-10 pointer-events-none">
        <CassetteTape />
      </div>
      <div ref={sunRef} className="fixed bottom-[20%] left-[5%] w-40 md:w-64 opacity-30 z-10 pointer-events-none">
        <RetroSun />
      </div>
      <div ref={ghostRef} className="fixed top-[40%] left-[15%] w-16 md:w-24 opacity-50 z-10 pointer-events-none">
        <ArcadeGhost />
      </div>

      {/* Fixed Burger Container */}
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-30" style={{ perspective: '1200px' }}>
        <div ref={burgerContainerRef} className="relative w-full max-w-[400px] aspect-square flex items-center justify-center scale-75 md:scale-100" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Shockwave */}
          <div ref={shockwaveRef} className="absolute w-full h-full rounded-full border border-blood opacity-0 shadow-[0_0_80px_rgba(250,2,2,0.6)]"></div>

          {/* Ingredients */}
          <div ref={topBunRef} className="absolute w-full burger-layer z-[90]"><TopBun /></div>
          <div ref={cheeseRef} className="absolute w-[105%] burger-layer z-[80]"><Cheese /></div>
          <div ref={pattyRef} className="absolute w-full burger-layer z-[70]"><Patty /></div>
          <div ref={lettuceRef} className="absolute w-[110%] burger-layer z-[60]"><Lettuce /></div>
          <div ref={tomatoRef} className="absolute w-full burger-layer z-[50]"><Tomato /></div>
          <div ref={onionsRef} className="absolute w-[95%] burger-layer z-[40]"><Onions /></div>
          <div ref={picklesRef} className="absolute w-[90%] burger-layer z-[30]"><Pickles /></div>
          <div ref={sauceRef} className="absolute w-[95%] burger-layer z-[20]"><Sauce /></div>
          <div ref={bottomBunRef} className="absolute w-full burger-layer z-[10]"><BottomBun /></div>
        </div>
      </div>

      {/* Hero Section (0-20vh) */}
      <section className="absolute top-0 left-0 w-full h-screen flex items-start pt-[15vh] justify-center z-40 pointer-events-none px-4">
        <div className="relative">
          <div className="absolute inset-0 bg-blood/20 blur-[80px] rounded-full scale-150"></div>
          <h1 ref={taglineRef} className="relative text-4xl md:text-7xl lg:text-8xl font-display text-cream tracking-wide text-center drop-shadow-[0_0_30px_rgba(250,2,2,0.8)]">
            {/* Text injected via JS */}
          </h1>
        </div>
      </section>

      {/* Perfection Text (appears at 50%) */}
      <section className="absolute top-[340vh] left-0 w-full h-screen flex items-start pt-[20vh] justify-center z-40 pointer-events-none -mt-[20vh]">
        <div className="relative">
          <div className="absolute inset-0 bg-blood/30 blur-[100px] rounded-full scale-150"></div>
          <h2 ref={perfectionRef} className="relative glitch text-6xl md:text-7xl lg:text-9xl font-display text-cream tracking-[0.2em] opacity-0 translate-y-20 drop-shadow-[0_0_60px_rgba(250,2,2,0.8)]" data-text="SMASH.">
            SMASH.
          </h2>
        </div>
      </section>

      {/* Ingredients Story */}
      <section className="absolute top-[400vh] left-0 w-full min-h-screen z-20 px-6 md:px-24 py-32 flex flex-col gap-64">
        <div className="story-2 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-right">
            <h3 className="parallax-text text-4xl md:text-6xl font-display text-blood mb-6 drop-shadow-[0_0_25px_rgba(250,2,2,0.6)] tracking-wide">La Costra Smash</h3>
            <p className="parallax-text text-base md:text-xl text-cream/90 font-body leading-relaxed max-w-md mx-auto md:ml-auto md:mr-0 font-light">
              Aplastada a la perfección sobre la plancha ardiente. Reacción de Maillard al máximo: bordes crujientes y caramelizados que encierran todo el jugo de la carne. Pura elegancia culinaria.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center opacity-60 blur-[2px]">
             <Patty className="w-full max-w-md transform scale-125 md:scale-150 -rotate-12 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]" />
          </div>
        </div>
      </section>

      {/* Brand / Values */}
      <section className="absolute top-[480vh] left-0 w-full min-h-screen z-20 flex items-center justify-center px-6 md:px-8 bg-black/20 backdrop-blur-[40px] border-y border-cream/5">
        <div className="max-w-5xl mx-auto text-center">
          <p className="parallax-text text-2xl md:text-5xl lg:text-7xl font-display text-cream leading-tight drop-shadow-[0_0_20px_rgba(250,2,2,0.3)] font-light tracking-wide">
            "No hacemos comida rápida. Diseñamos arquitectura culinaria, capa por minuciosa capa."
          </p>
        </div>
      </section>

      {/* Menu Teaser / CTA */}
      <section className="absolute top-[560vh] left-0 w-full min-h-screen z-20 flex flex-col items-center justify-center px-4 md:px-8 pb-40">
        <h3 className="parallax-text text-4xl md:text-5xl font-display text-cream mb-12 md:mb-16 drop-shadow-[0_0_20px_rgba(250,2,2,0.5)] text-center tracking-widest text-shine-fx">Creaciones de Autor</h3>
        
        <div className="flex flex-wrap justify-center gap-12 mb-24">
          {[1, 2, 3].map((item) => (
            <div 
              key={item}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="shiny-card w-72 h-96 bg-cream/5 backdrop-blur-3xl border border-cream/10 rounded-2xl p-6 flex flex-col items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_60px_rgba(250,2,2,0.3)] hover:border-blood/50 transition-all duration-700 group"
            >
              <div className="w-full h-40 bg-black/40 rounded-xl border border-cream/5 mb-4 overflow-hidden relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-blood/30 to-transparent group-hover:opacity-100 opacity-30 transition-opacity duration-700"></div>
                 <span className="text-cream/60 font-display italic text-2xl z-10 tracking-widest">LVL {item}</span>
              </div>
              <div className="flex-1 flex flex-col justify-end items-center text-center w-full">
                <h4 className="text-xl font-display text-blood mb-3 uppercase tracking-widest">La Clásica No.{item}</h4>
                <p className="text-sm text-cream/70 font-light leading-relaxed">Doble carne, triple queso, salsa secreta.</p>
              </div>
            </div>
          ))}
        </div>

        <button className="shiny-btn px-14 py-5 rounded-full bg-gradient-to-r from-blood to-[#8a0000] text-cream font-display font-bold tracking-[0.2em] uppercase text-sm hover:from-[#8a0000] hover:to-blood transition-all duration-500 shadow-[0_0_40px_rgba(250,2,2,0.4)] hover:shadow-[0_0_60px_rgba(250,2,2,0.6)] border border-blood/50">
          Insert Coin
        </button>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full h-[20vh] bg-black z-30 flex flex-col items-center justify-center border-t border-white/5">
        <div className="w-12 h-12 opacity-50 mb-4">
          <TopBun />
          <Patty className="-mt-12" />
          <BottomBun className="-mt-12" />
        </div>
        <p className="text-xs text-cream/40 font-body tracking-widest uppercase">© 2026 Smash</p>
      </footer>
    </div>
  );
}

