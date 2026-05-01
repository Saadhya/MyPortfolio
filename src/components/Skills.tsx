import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolio';

const categoryColors: Record<string, string> = {
  'Frontend Core': 'blue',
  'UI & Styling': 'sky',
  'Architecture': 'cyan',
  'Cloud & DevOps': 'blue',
  'Databases': 'sky',
  'AI & Tools': 'cyan',
  'Mobile & More': 'blue',
};

const colorMap: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  blue: { border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-300', dot: 'bg-blue-500' },
  sky: { border: 'border-sky-500/30', bg: 'bg-sky-500/10', text: 'text-sky-300', dot: 'bg-sky-400' },
  cyan: { border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-300', dot: 'bg-cyan-400' },
};

const proficiencyData = [
  { name: 'React / TypeScript', level: 96 },
  { name: 'Redux Toolkit', level: 92 },
  { name: 'CSS / Tailwind / MUI', level: 90 },
  { name: 'REST API Integration', level: 93 },
  { name: 'Performance Optimisation', level: 88 },
  { name: 'CI/CD & Cloud (AWS/IBM)', level: 78 },
  { name: 'Team Leadership', level: 85 },
  { name: 'Testing (Jest/Vitest)', level: 80 },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [bars, setBars] = useState<number[]>(new Array(proficiencyData.length).fill(0));

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    proficiencyData.forEach((item, i) => {
      setTimeout(() => {
        setBars((prev) => {
          const next = [...prev];
          next[i] = item.level;
          return next;
        });
      }, i * 120);
    });
  }, [visible]);

  return (
    <section id="skills" ref={sectionRef} className="relative bg-neutral-950 py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">Technical Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Skills & Stack</h2>
          <p className="text-gray-500 mt-4 max-w-xl">6+ years of hands-on experience with modern web technologies, cloud platforms, and engineering leadership.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Skill categories */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => {
                const c = colorMap[categoryColors[category] || 'blue'];
                return (
                  <div key={category} className={`p-5 border ${c.border} bg-white/2 hover:bg-white/4 transition-all duration-300 group`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                      <span className={`text-xs font-bold tracking-widest uppercase ${c.text}`}>{category}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs text-gray-300 border border-white/10 bg-white/3 hover:border-blue-500/40 hover:text-blue-300 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Proficiency bars */}
          <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-8">Proficiency Levels</p>
            <div className="space-y-6">
              {proficiencyData.map((item, i) => (
                <div key={item.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm font-medium">{item.name}</span>
                    <span className="text-blue-400 text-xs font-bold tabular-nums">{bars[i]}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${bars[i]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* 3D floating tech badge */}
            <div className="mt-12 p-6 border border-blue-500/20 bg-blue-950/20 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 border border-blue-500/10 rounded-full" />
              <div className="absolute -right-4 -top-4 w-20 h-20 border border-blue-500/15 rounded-full" />
              <p className="text-blue-400 text-xs uppercase tracking-widest font-bold mb-2">Primary Stack</p>
              <p className="text-white font-black text-2xl tracking-tight">React + TypeScript</p>
              <p className="text-gray-500 text-sm mt-1">+ Redux · REST APIs · AWS · CI/CD</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-semibold">6+ Years Production Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
