"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundWrapper from '@/components/core/BackgroundWrapper';

import Slide1 from '@/components/slides/01-Slide1';
import Slide2 from '@/components/slides/02-Slide2';
import Slide3 from '@/components/slides/03-Slide3';
import Slide4 from '@/components/slides/04-Slide4';
import Slide5 from '@/components/slides/05-Slide5';
import Slide6 from '@/components/slides/06-Slide6';
import Slide7 from '@/components/slides/07-Slide7';
import Slide8 from '@/components/slides/08-Slide8';
import Slide9 from '@/components/slides/09-Slide9';
import Slide10 from '@/components/slides/10-Slide10';
import Slide11 from '@/components/slides/11-Slide11';
import Slide12 from '@/components/slides/12-Slide12';

const todosOsSlides: React.ComponentType[] = [
  Slide1, 
  Slide2, 
  Slide3, 
  Slide4, 
  Slide5, 
  Slide6, 
  Slide7, 
  Slide8, 
  Slide9, 
  Slide10, 
  Slide11, 
  Slide12
];

export default function Home() {
  const [slides, setSlides] = useState<React.ComponentType[]>([]);
  const [slideAtivo, setSlideAtivo] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setSlides(todosOsSlides.slice(1));
    } else {
      setSlides(todosOsSlides);
    }
  }, []);

  const proximoSlide = useCallback(() => {
    setSlideAtivo((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [slides]);

  const slideAnterior = useCallback(() => {
    setSlideAtivo((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') proximoSlide();
      if (e.key === 'ArrowLeft') slideAnterior();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [proximoSlide, slideAnterior]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if ((e.target as Element).closest('.modelo-3d') || (e.target as Element).closest('.gamma-grid')) {
        touchStartX.current = null;
        touchStartY.current = null;
        return;
      }
      
      touchStartX.current = e.changedTouches[0].screenX;
      touchStartY.current = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) return;

      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;

      const diffX = touchStartX.current - touchEndX;
      const diffY = touchStartY.current - touchEndY;

      if (Math.abs(diffY) > Math.abs(diffX)) return; 

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) proximoSlide();
        else slideAnterior();
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [proximoSlide, slideAnterior]);

  if (slides.length === 0) return null;

  const SlideAtual = slides[slideAtivo];

  return (
    <main className="main-wrapper">
      <BackgroundWrapper slideAtivo={slideAtivo} />

      <AnimatePresence mode="wait">
        <motion.div
          key={slideAtivo}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        >
          <SlideAtual />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}