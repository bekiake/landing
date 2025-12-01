import { motion } from 'framer-motion';
import { useRef, ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ 
  children, 
  backgroundImage, 
  speed = 0.5,
  className = '' 
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState('0%');

  useEffect(() => {
    if (typeof window !== 'undefined' && ref.current) {
      const handleScroll = () => {
        const rect = ref.current!.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
        setY(`${scrollProgress * speed * 100}%`);
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div
          style={{ y }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={backgroundImage}
            alt=""
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            quality={80}
            priority={false}
            loading="lazy"
            draggable={false}
            unoptimized={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/80 via-white/70 to-white/80" />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
