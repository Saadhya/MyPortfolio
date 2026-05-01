import { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, GraduationCap, Star } from 'lucide-react';
import { certifications, achievements, education } from '../data/portfolio';

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="relative bg-black py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">Recognition & Growth</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Achievements</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Award */}
          <div className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-yellow-400" size={20} />
              <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Award</p>
            </div>
            <div className="space-y-4">
              {achievements.map((a, i) => (
                <div key={i} className="p-6 border border-yellow-500/20 bg-yellow-500/5 hover:border-yellow-500/40 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <Star className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-yellow-300 font-bold">{a.title}</p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{a.detail}</p>
                  <p className="text-gray-600 text-xs mt-3 font-mono">{a.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-blue-400" size={20} />
              <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Certifications</p>
            </div>
            <div className="space-y-4">
              {certifications.map((c, i) => (
                <div key={i} className="p-5 border border-white/10 bg-white/2 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 font-mono text-xs mt-1 flex-shrink-0">0{i + 1}</span>
                    <div>
                      <p className="text-white text-sm font-semibold group-hover:text-blue-300 transition-colors leading-snug">{c.title}</p>
                      <p className="text-gray-600 text-xs mt-1">{c.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-400" size={20} />
              <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Education</p>
            </div>
            <div className="space-y-4">
              {education.map((e, i) => (
                <div key={i} className="p-5 border border-white/10 bg-white/2 hover:border-blue-500/30 transition-all duration-300 group">
                  <p className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors mb-1">{e.degree}</p>
                  <p className="text-blue-400 text-xs font-semibold">{e.institution}</p>
                  <p className="text-gray-600 text-xs mt-1 font-mono">{e.year}</p>
                </div>
              ))}
            </div>

            {/* Europe readiness */}
            <div className="mt-6 p-5 border border-blue-500/20 bg-blue-950/15">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Europe Readiness</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  Ready for relocation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  Visa sponsorship welcome
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  English: Professional
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  DE · NL · SE · FI markets
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
