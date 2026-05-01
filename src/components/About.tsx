import { useEffect, useRef, useState } from 'react';
import { Award, Users, Zap, Briefcase } from 'lucide-react';
import { profile } from '../data/portfolio';

const iconMap = [Zap, Users, Award, Briefcase];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const targets = [6, 4, 40, 10];
    targets.forEach((target, i) => {
      let current = 0;
      const step = Math.ceil(target / 40);
      const interval = setInterval(() => {
        current = Math.min(current + step, target);
        setCounts((prev) => {
          const next = [...prev];
          next[i] = current;
          return next;
        });
        if (current >= target) clearInterval(interval);
      }, 40);
    });
  }, [visible]);

  const flags = [
    { country: 'Germany', code: 'DE', city: 'Berlin · Munich', color: 'from-yellow-500 to-red-600' },
    { country: 'Netherlands', code: 'NL', city: 'Amsterdam', color: 'from-blue-600 to-red-500' },
    { country: 'Sweden', code: 'SE', city: 'Stockholm', color: 'from-blue-600 to-yellow-400' },
    { country: 'Finland', code: 'FI', city: 'Helsinki', color: 'from-white to-blue-600' },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Senior Engineer.<br />
            <span className="text-gray-500">People Leader.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Bio */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {profile.summary}
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Currently based in Delhi, India, I am actively seeking senior/lead frontend engineering roles in Europe — particularly Germany, Netherlands, Sweden, and Finland. I bring a proven track record of delivering enterprise-grade platforms, leading cross-functional teams, and driving measurable performance improvements.
            </p>

            {/* Target countries */}
            <div>
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-4 font-semibold">Target Markets</p>
              <div className="flex flex-wrap gap-3">
                {flags.map((f) => (
                  <div
                    key={f.code}
                    className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/3 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 group"
                  >
                    <span className="text-lg">{
                      f.code === 'DE' ? '🇩🇪' :
                      f.code === 'NL' ? '🇳🇱' :
                      f.code === 'SE' ? '🇸🇪' : '🇫🇮'
                    }</span>
                    <div>
                      <p className="text-white text-xs font-semibold group-hover:text-blue-300 transition-colors">{f.country}</p>
                      <p className="text-gray-600 text-xs">{f.city}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((stat, i) => {
                const Icon = iconMap[i];
                const suffix = stat.value.replace(/\d+/g, '');
                return (
                  <div
                    key={stat.label}
                    className="relative p-8 border border-white/10 bg-gradient-to-br from-white/3 to-transparent hover:border-blue-500/30 hover:from-blue-950/20 transition-all duration-500 group overflow-hidden"
                  >
                    <div className="absolute top-4 right-4 text-blue-400/20 group-hover:text-blue-400/40 transition-colors">
                      <Icon size={32} />
                    </div>
                    <div className="text-5xl font-black text-white mb-1 tabular-nums">
                      {counts[i]}{suffix}
                    </div>
                    <div className="text-gray-500 text-sm tracking-wide">{stat.label}</div>
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
                  </div>
                );
              })}
            </div>

            {/* Achievement callout */}
            <div className="mt-4 p-6 border border-yellow-500/20 bg-yellow-500/5 flex items-start gap-4">
              <Award className="text-yellow-400 mt-0.5 flex-shrink-0" size={24} />
              <div>
                <p className="text-yellow-300 font-semibold text-sm">GEM Award — Capgemini 2024</p>
                <p className="text-gray-500 text-sm mt-1">Recognised for outstanding delivery and leadership on the Honeywell Career Site</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
