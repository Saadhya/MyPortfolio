import { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, MapPin, Send, ArrowUpRight, Copy, Check } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative bg-neutral-950 py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">Let's Connect</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Available for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">European Roles</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            I'm actively exploring senior and lead frontend engineering opportunities in Germany, Netherlands, Sweden, and Finland. Open to visa-sponsored relocation.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-6 max-w-4xl mx-auto transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Email card */}
          <div className="group p-8 border border-white/10 bg-white/2 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
            <div className="flex items-start justify-between mb-4">
              <Mail className="text-blue-400" size={24} />
              <button
                onClick={copyEmail}
                className="p-2 border border-white/10 text-gray-500 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              </button>
            </div>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-2">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="text-white font-semibold text-lg hover:text-blue-300 transition-colors break-all"
            >
              {profile.email}
            </a>
            <p className="text-gray-600 text-sm mt-2">Best for job inquiries</p>
          </div>

          {/* LinkedIn card */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group p-8 border border-white/10 bg-white/2 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 relative overflow-hidden block"
          >
            <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
            <div className="flex items-start justify-between mb-4">
              <Linkedin className="text-blue-400" size={24} />
              <ArrowUpRight size={16} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
            </div>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-2">LinkedIn</p>
            <p className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">linkedin.com/in/saadhya98</p>
            <p className="text-gray-600 text-sm mt-2">Full profile & recommendations</p>
          </a>

          {/* Location card */}
          <div className="p-8 border border-white/10 bg-white/2">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="text-blue-400 flex-shrink-0" size={24} />
            </div>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-2">Current Location</p>
            <p className="text-white font-semibold text-lg">Delhi, India</p>
            <p className="text-gray-500 text-sm mt-2">Available for full relocation to EU</p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {['🇩🇪 DE', '🇳🇱 NL', '🇸🇪 SE', '🇫🇮 FI'].map((flag) => (
                <span key={flag} className="px-2 py-1 text-xs border border-white/10 text-gray-500">
                  {flag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div className="p-8 border border-blue-500/30 bg-blue-950/20 flex flex-col justify-between">
            <div>
              <p className="text-xs text-blue-400 uppercase tracking-widest font-semibold mb-2">Ready to hire?</p>
              <p className="text-white font-bold text-xl leading-snug mb-4">
                Let's build something<br />great together.
              </p>
              <p className="text-gray-500 text-sm">
                Senior/Lead Frontend roles · React/TypeScript · EU relocation · Visa sponsorship welcome
              </p>
            </div>
            <a
              href={`mailto:${profile.email}?subject=Frontend Lead Opportunity&body=Hi Saadhya,`}
              className="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 text-sm tracking-wider"
            >
              <Send size={14} />
              Send a Message
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className={`mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 delay-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-700 text-sm">
            © 2025 Saadhya · Senior Frontend Engineer
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-700">
            <span>React + TypeScript</span>
            <span>·</span>
            <span>Targeting EU Markets</span>
            <span>·</span>
            <span>Open to Relocation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
