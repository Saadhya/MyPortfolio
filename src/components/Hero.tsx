import { useEffect, useRef, useState } from 'react';
import { ArrowDown, MapPin, Linkedin, Mail, Globe } from 'lucide-react';
import { profile } from '../data/portfolio';

const europeanCities = ['Berlin', 'Helsinki', 'Stockholm', 'Amsterdam', 'Munich', 'Zurich'];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cityIndex, setCityIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  // Animated canvas particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Typewriter for city cycling
  useEffect(() => {
    const city = europeanCities[cityIndex];
    if (typing) {
      if (displayed.length < city.length) {
        const t = setTimeout(() => setDisplayed(city.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
        return () => clearTimeout(t);
      } else {
        setCityIndex((i) => (i + 1) % europeanCities.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, cityIndex]);

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-950/30 via-black/60 to-black pointer-events-none" />

      {/* 3D grid floor effect */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(59,130,246,0.05) 0%, transparent 100%)',
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'perspective(300px) rotateX(60deg)',
          transformOrigin: 'bottom center',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Open to work badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-blue-500/40 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-widest uppercase animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping-slow inline-block" />
          Open to Relocation · Europe
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-4 leading-none">
          SAAD
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">HYA</span>
        </h1>

        {/* Title */}
        <p className="text-lg md:text-2xl font-light text-gray-300 tracking-widest uppercase mb-6">
          Senior Frontend Engineer
        </p>

        {/* City typewriter */}
        <div className="flex items-center justify-center gap-3 mb-10 text-gray-400 text-sm md:text-base">
          <MapPin size={16} className="text-blue-400" />
          <span>Available for opportunities in</span>
          <span className="text-blue-400 font-bold min-w-28 text-left">
            {displayed}
            <span className="animate-blink">|</span>
          </span>
        </div>

        {/* Summary highlight */}
        <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed mb-12">
          6+ years building <span className="text-white font-medium">high-performance web platforms</span> at scale.
          Leading teams, architecting systems, and shipping products that move metrics.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="mailto:saadhya98@gmail.com"
            className="px-8 py-4 border border-white/30 text-white hover:border-white hover:bg-white/5 font-semibold tracking-wider transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        {/* Quick links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors duration-300 text-sm"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <span className="text-gray-700">·</span>
          <a
            href="mailto:saadhya98@gmail.com"
            className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors duration-300 text-sm"
          >
            <Mail size={16} />
            Email
          </a>
          <span className="text-gray-700">·</span>
          <span className="flex items-center gap-2 text-gray-500 text-sm">
            <Globe size={16} />
            EU Work Authorization Ready
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-blue-400 transition-colors duration-300 animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
