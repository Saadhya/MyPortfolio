import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState<number>(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative bg-black py-28 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">Career Path</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Work Experience</h2>
          <p className="text-gray-500 mt-4 max-w-xl">6+ years growing from developer to lead, shipping real products at global scale.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-4 top-8 w-5 h-5 rounded-full items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full ${exp.type === 'current' ? 'bg-blue-400 animate-pulse' : 'bg-gray-600'}`} />
                  <div className={`absolute w-5 h-5 rounded-full border ${exp.type === 'current' ? 'border-blue-400/50' : 'border-gray-600/50'}`} />
                </div>

                <div className={`md:ml-16 border ${exp.type === 'current' ? 'border-blue-500/30' : 'border-white/10'} bg-white/2 hover:bg-white/4 transition-all duration-300`}>
                  {/* Header */}
                  <button
                    onClick={() => setExpanded(expanded === idx ? -1 : idx)}
                    className="w-full p-6 md:p-8 text-left"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          {exp.type === 'current' && (
                            <span className="px-2 py-0.5 text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 tracking-widest uppercase">
                              Current
                            </span>
                          )}
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Calendar size={13} />
                            <span>{exp.period}</span>
                            <span className="text-gray-700">·</span>
                            <span className="text-gray-600">{exp.duration}</span>
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-white mt-2">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase size={14} className="text-blue-400" />
                          <span className="text-blue-400 font-semibold">{exp.company}</span>
                          {exp.client && (
                            <>
                              <span className="text-gray-700">·</span>
                              <span className="text-gray-500 text-sm">{exp.client}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <ChevronRight
                        size={20}
                        className={`text-gray-500 transition-transform duration-300 flex-shrink-0 mt-2 ${expanded === idx ? 'rotate-90' : ''}`}
                      />
                    </div>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.stack.map((s) => (
                        <span key={s} className="px-2 py-1 text-xs border border-white/10 text-gray-500">{s}</span>
                      ))}
                    </div>
                  </button>

                  {/* Expandable details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${expanded === idx ? 'max-h-screen' : 'max-h-0'}`}
                  >
                    <div className="px-6 md:px-8 pb-8 border-t border-white/5 pt-6">
                      <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-4">Key Contributions</p>
                      <ul className="space-y-3">
                        {exp.highlights.map((h, hi) => (
                          <li key={hi} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total experience callout */}
        <div className={`mt-16 p-8 border border-white/10 bg-gradient-to-r from-blue-950/20 to-transparent transition-all duration-700 delay-600 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div>
              <div className="text-5xl font-black text-white">6<span className="text-blue-400">+</span></div>
              <div className="text-gray-500 text-sm mt-1">Years Total</div>
            </div>
            <div className="h-px md:h-16 w-full md:w-px bg-white/10" />
            <div className="flex-1">
              <p className="text-white font-semibold mb-2">Frontend → Lead</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Progressed from individual contributor to leading a team of 4 engineers, owning sprint planning, architecture decisions, code reviews, and mentorship at a Fortune 500 client account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
