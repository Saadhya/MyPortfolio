import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Users, Tag, Layers, CheckCircle } from 'lucide-react';
import { projects } from '../data/portfolio';

const stageIcons: Record<string, string> = {
  layout: '◈', code: '</>', link: '⇄', zap: '⚡', rocket: '🚀',
  database: '⬡', layers: '◰', users: '◉', 'check-circle': '✓',
  map: '◎', 'credit-card': '▣', cloud: '☁', book: '◫',
  'pie-chart': '◔', play: '▶', shield: '◍', 'bar-chart': '▨',
  search: '◈', 'user': '◉',
};

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const project = projects[selected];

  const handleSelect = (idx: number) => {
    setSelected(idx);
    setActiveStage(0);
  };

  return (
    <section id="projects" ref={sectionRef} className="relative bg-neutral-950 py-28 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Featured Work</h2>
          <p className="text-gray-500 mt-4 max-w-xl">End-to-end project breakdowns — my role, the process, technical stack, and measurable outcomes.</p>
        </div>

        {/* Project selector tabs */}
        <div className={`flex flex-wrap gap-2 mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleSelect(i)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider border transition-all duration-300 ${
                selected === i
                  ? 'border-blue-500 bg-blue-500/15 text-blue-300'
                  : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300'
              }`}
            >
              {p.title.split(' ').slice(0, 2).join(' ')}
            </button>
          ))}
        </div>

        {/* Main project display */}
        <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-5 gap-0 border border-white/10 overflow-hidden">
            {/* Left: Image + meta */}
            <div className="lg:col-span-2 relative">
              <div className="aspect-video lg:aspect-auto lg:h-full min-h-64 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-all duration-700 scale-105"
                  key={project.id}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 hidden lg:block" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest border border-blue-500/40 bg-blue-500/20 text-blue-300">
                    {project.category}
                  </span>
                </div>

                {/* Bottom meta */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-500 text-xs">{project.company}</span>
                    <span className="text-gray-700">·</span>
                    <span className="text-gray-500 text-xs">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Users size={12} className="text-blue-400" />
                    <span className="text-blue-300 text-xs font-semibold">{project.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-3 bg-black/50 p-8 md:p-10 flex flex-col">
              {/* Impact */}
              <div className="mb-6 pb-6 border-b border-white/5">
                <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-2">Impact & Goal</p>
                <p className="text-white text-lg font-semibold leading-snug">{project.impact}</p>
              </div>

              {/* Tech stack */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Layers size={12} className="text-blue-400" />
                  <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Tech Stack</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="px-3 py-1 text-xs border border-blue-500/30 bg-blue-500/8 text-blue-300 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Process stages */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={12} className="text-blue-400" />
                  <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Project Stages</p>
                </div>

                {/* Stage tabs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stages.map((stage, si) => (
                    <button
                      key={si}
                      onClick={() => setActiveStage(si)}
                      className={`px-3 py-1.5 text-xs font-medium border transition-all duration-200 ${
                        activeStage === si
                          ? 'border-blue-500/50 bg-blue-500/15 text-blue-300'
                          : 'border-white/10 text-gray-600 hover:text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <span className="mr-1.5 font-mono">{String(si + 1).padStart(2, '0')}</span>
                      {stage.phase}
                    </button>
                  ))}
                </div>

                {/* Active stage detail */}
                <div className="p-4 border border-white/10 bg-white/2 min-h-20 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 text-xl font-mono mt-0.5 flex-shrink-0">
                      {stageIcons[project.stages[activeStage]?.icon] || '◈'}
                    </span>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{project.stages[activeStage]?.phase}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.stages[activeStage]?.desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-3">
                  {project.metrics.map((m) => (
                    <div key={m} className="flex items-center gap-1.5 text-xs text-gray-400">
                      <CheckCircle size={11} className="text-green-400" />
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div className={`flex justify-end gap-3 mt-6 transition-all duration-700 delay-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => handleSelect((selected - 1 + projects.length) % projects.length)}
            className="p-3 border border-white/10 text-gray-500 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => handleSelect((selected + 1) % projects.length)}
            className="p-3 border border-white/10 text-gray-500 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Project grid thumbnails */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleSelect(i)}
              className={`relative aspect-video overflow-hidden border transition-all duration-300 ${
                selected === i ? 'border-blue-500/60 scale-95' : 'border-white/10 hover:border-white/30'
              }`}
            >
              <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-1.5 left-1.5 right-1.5">
                <p className="text-white text-xs font-semibold leading-tight truncate">{p.title.split(' ').slice(0, 2).join(' ')}</p>
              </div>
              {selected === i && (
                <div className="absolute inset-0 border-2 border-blue-500/50" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
