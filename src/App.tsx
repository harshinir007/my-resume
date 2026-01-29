
import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart3, 
  Search, 
  Code2, 
  Users, 
  Brain, 
  Zap, 
  Clock, 
  Mail, 
  Linkedin, 
  MapPin,
  GraduationCap,
  Briefcase,
  Award, 
  Globe,
  ChevronRight,
  Menu,
  X,
  Quote,
  ExternalLink,
  Rocket,
  Cpu,
  Fingerprint,
  ChevronDown
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  TECHNICAL_SKILLS, 
  SOFT_SKILLS, 
  LANGUAGES, 
  EXPERIENCE, 
  EDUCATION, 
  CERTIFICATIONS 
} from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if header should be "compact" style
      setScrolled(currentScrollY > 50);
      
      // Determine visibility (Hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // Active section detection
      const sections = ['about', 'skills', 'experience', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
  ];

  return (
    <div className={`
      fixed w-full z-50 flex justify-center px-4 pt-6 pointer-events-none transition-transform duration-500 ease-in-out
      ${visible ? 'translate-y-0' : '-translate-y-full pt-0'}
    `}>
      <nav className={`
        pointer-events-auto
        transition-all duration-500 ease-in-out
        ${scrolled 
          ? 'bg-[#E5E7EB]/90 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] py-2 px-3 lg:px-6 rounded-full max-w-6xl w-full' 
          : 'bg-[#E5E7EB]/50 backdrop-blur-md py-3 px-4 lg:px-8 w-full max-w-7xl rounded-full border border-slate-200/50'
        }
        flex items-center justify-between
      `}>
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="#" className="w-9 h-9 lg:w-11 lg:h-11 rounded-full bg-teal-600 flex items-center justify-center text-white font-black text-sm lg:text-lg shadow-lg shadow-teal-500/20 hover:scale-105 transition-transform">
            H
          </a>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:block">
          <div className="flex items-center lg:space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  relative px-3 lg:px-4 py-2 rounded-full text-[0.765rem] lg:text-[0.8925rem] font-black uppercase tracking-[0.15em] transition-all duration-300 hover:text-teal-600
                  ${activeSection === link.id 
                    ? 'text-teal-600' 
                    : 'text-slate-500'
                  }
                `}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
           <a 
            href={PERSONAL_INFO.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-2 lg:ml-6 px-6 lg:px-8 py-2.5 bg-[#111827] text-white text-[0.7rem] lg:text-[0.8rem] font-black uppercase tracking-[0.2em] rounded-full shadow-xl hover:bg-teal-700 transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-full text-slate-900 bg-white/50 hover:bg-white transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed inset-x-4 top-24 pointer-events-auto transition-all duration-300 transform origin-top
        ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
      `}>
        <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] border border-slate-100 shadow-2xl p-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`
                block px-8 py-4 rounded-3xl text-sm font-black uppercase tracking-widest
                ${activeSection === link.id ? 'bg-teal-50 text-teal-600' : 'text-slate-600'}
              `}
            >
              {link.name}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="block w-full py-4 bg-[#111827] text-white rounded-3xl text-sm font-black uppercase tracking-widest text-center shadow-lg"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

const SectionHeading = ({ children, subtitle }: { children?: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">{children}</h2>
    {subtitle && <p className="text-slate-600 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    <div className="w-16 h-1.5 gradient-bg mx-auto mt-6 rounded-full"></div>
  </div>
);

const Hero = () => (
  <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-white text-center">
    <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-teal-50/50 rounded-full blur-[160px] opacity-70"></div>
    <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-cyan-50/50 rounded-full blur-[160px] opacity-70"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="inline-block px-5 py-2 mb-8 text-xs font-black tracking-[0.3em] text-teal-600 uppercase bg-teal-50 rounded-full border border-teal-100 shadow-sm">
        Digital Marketing Associate
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
        Hi, I'm <br className="md:hidden" /><span className="gradient-text">{PERSONAL_INFO.name}</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium text-balance px-4">
        {PERSONAL_INFO.tagline}
      </p>

      {/* Interactive Scroll Indicator */}
      <div className="flex justify-center mt-8">
        <div className="group flex flex-col items-center gap-3">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Explore Profile</span>
          <div className="w-10 h-16 rounded-full border-2 border-slate-100 flex justify-center p-2">
            <div className="w-1 h-3 bg-teal-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-white relative overflow-hidden scroll-mt-32">
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50/50 to-transparent"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[3px] w-16 bg-teal-500 rounded-full"></div>
            <span className="text-teal-600 font-black uppercase tracking-[0.5em] text-xs">Profile</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter mb-8 uppercase">
            Logic <br />
            <span className="text-teal-500 flex items-center gap-4">
              & <span className="text-slate-900">Vision</span>
            </span>
          </h2>
          <p className="text-slate-400 font-bold text-sm uppercase tracking-widest leading-none">
            Strategic Growth • Data Analysis • Creative Execution
          </p>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="relative group perspective-1000 bento-card">
            <div className="relative bg-slate-900 rounded-[3rem] p-10 md:p-14 text-white overflow-hidden shadow-2xl glow-effect">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Cpu size={200} className="rotate-12" />
              </div>
              
              <div className="relative z-10 bento-inner">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-teal-500/20 rounded-2xl border border-teal-500/30 shadow-xl shadow-teal-500/10">
                    <Fingerprint className="text-teal-400" size={32} />
                  </div>
                  <span className="text-teal-400 font-black uppercase tracking-[0.3em] text-xs">Strategic Objective</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black mb-10 tracking-tight leading-snug">
                  Building the <br />
                  <span className="text-teal-400 underline decoration-teal-400/20 underline-offset-[12px]">Future of Brands</span>
                </h3>
                
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                  {PERSONAL_INFO.about}
                </p>
                
                <div className="mt-12 flex flex-wrap items-center gap-8">
                  <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-14 h-14 rounded-2xl border-4 border-slate-900 bg-slate-800 flex items-center justify-center pointer-events-none">
                        <Code2 size={24} className="text-teal-400" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Status</span>
                    <span className="text-sm font-black uppercase tracking-widest text-teal-400 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                      Active & Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const QuickStats = () => (
  <div className="max-w-4xl mx-auto mb-20 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 items-center justify-center">
      <div className="text-center group bento-card">
        <p className="stats-number text-3xl md:text-4xl font-black text-amber-500 mb-2">0-1</p>
        <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">Years Exp</p>
      </div>
      <div className="text-center group bento-card">
        <p className="stats-number text-3xl md:text-4xl font-black text-amber-500 mb-2">5+</p>
        <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">Certs</p>
      </div>
      <div className="text-center group bento-card">
        <p className="stats-number text-3xl md:text-4xl font-black text-amber-500 mb-2">100%</p>
        <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">Eagerness</p>
      </div>
      <div className="text-center group flex flex-col items-center bento-card">
        <div className="mb-2 text-amber-500">
          <Rocket size={40} className="md:w-[48px] md:h-[48px]" fill="currentColor" fillOpacity={0.2} strokeWidth={3} />
        </div>
        <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">Ready to Start</p>
      </div>
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-24 bg-white scroll-mt-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <QuickStats />
      <SectionHeading subtitle="Combining engineering logic with marketing intuition to drive data-driven results.">
        Core Expertise
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {TECHNICAL_SKILLS.map((category, idx) => (
          <div key={idx} className="bento-card bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 transition-all">
            <div className="bento-inner">
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white mb-8 shadow-lg shadow-teal-200">
                <div>
                  {idx === 0 ? <BarChart3 size={32} /> : idx === 1 ? <Code2 size={32} /> : <Zap size={32} />}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white text-slate-700 rounded-xl text-sm font-bold border border-slate-200 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bento-card bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="bento-inner relative z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
          <h3 className="text-2xl font-extrabold mb-10 flex items-center gap-4">
            <div className="p-2 bg-teal-500/20 rounded-xl">
              <Users className="text-teal-400" size={36} />
            </div>
            Soft Skills & Collaboration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFT_SKILLS.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-400 shrink-0"></div>
                <p className="font-bold text-teal-50 text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-24 bg-slate-50 scroll-mt-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="Practical experience in registration growth and sales optimization through student-focused strategies.">
        Work & Projects
      </SectionHeading>
      <div className="space-y-12">
        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className="bento-card relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all">
            <div className="bento-inner md:grid md:grid-cols-12 gap-10">
              <div className="md:col-span-3">
                <div className="inline-block px-4 py-1 rounded-full gradient-bg text-white text-[10px] font-black uppercase tracking-widest mb-4">
                  {exp.isProject ? "Impact Project" : "Internship"}
                </div>
                <h4 className="text-teal-600 font-black text-xl mb-1">{exp.period}</h4>
                <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">{exp.company}</p>
              </div>
              <div className="md:col-span-9 border-l-4 border-slate-100 pl-10">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                  {exp.title}
                </h3>
                <ul className="space-y-5">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-600 leading-relaxed text-lg">
                      <div className="mt-2 shrink-0">
                        <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                          <ChevronRight size={14} className="text-teal-600" />
                        </div>
                      </div>
                      <span className={i === 0 && exp.id === 'foozy' ? 'font-bold text-slate-900' : ''}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="py-24 bg-white scroll-mt-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="Technical foundation combined with academic excellence.">
        Education
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="bento-card bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 transition-all">
            <div className="bento-inner">
              <div className="w-16 h-16 bg-white text-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <GraduationCap size={32} />
              </div>
              <p className="text-teal-600 font-black text-xs uppercase tracking-[0.2em] mb-3">{edu.period}</p>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">{edu.degree}</h3>
              <p className="text-slate-500 font-bold text-sm mb-6 uppercase tracking-wide">{edu.institution}</p>
              {edu.score && (
                <div className="pt-6 border-t border-slate-200">
                  <span className="inline-block px-4 py-2 bg-white text-teal-700 rounded-xl text-sm font-black border border-teal-50 shadow-sm">
                    {edu.score}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Certifications = () => (
  <section id="certifications" className="py-24 bg-slate-50 scroll-mt-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="Verified expertise in high-impact Google Ads channels and AI-powered performance.">
        Certifications
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.id} className="bento-card group relative overflow-hidden rounded-[3rem] bg-white border border-slate-200 p-2 shadow-sm transition-all hover:shadow-xl">
            <div className="bento-inner">
              <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-slate-100 flex items-center justify-center relative">
                <img 
                  src={cert.imageUrl} 
                  alt={cert.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-8">
                  {cert.verificationUrl && (
                    <a 
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-full font-bold text-sm flex items-center gap-2 border border-teal-400/50 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Credential View <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-tight">{cert.name}</h3>
                  <div className="w-14 h-14 bg-slate-50 text-teal-600 rounded-2xl flex items-center justify-center shadow-inner group-hover:gradient-bg group-hover:text-white transition-all duration-500 shrink-0">
                    <Award size={28} />
                  </div>
                </div>
                <p className="text-slate-400 font-bold text-sm mt-4 uppercase tracking-[0.1em]">Verified via Google Skillshop</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-32">
    <div className="absolute top-0 left-0 w-full h-full">
       <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px]"></div>
       <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase">LET'S CONNECT</h2>
      <p className="text-slate-400 max-w-2xl mx-auto mb-20 text-xl font-medium leading-relaxed">
        Feel free to reach out to me for opportunities or collaborations. I am always open to discussing new projects and creative ideas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="p-12 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 transition-all flex flex-col items-center hover:bg-white/10 hover:border-teal-500/50 group"
        >
          <div className="bento-inner flex flex-col items-center">
            <div className="w-20 h-20 gradient-bg rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-teal-500/20 group-hover:scale-110 transition-transform">
              <Mail size={36} />
            </div>
            <h3 className="text-lg font-black mb-3 uppercase tracking-widest text-teal-400">Email</h3>
            <p className="text-white font-bold text-lg break-all">{PERSONAL_INFO.email}</p>
          </div>
        </a>
        <a 
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-12 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 transition-all flex flex-col items-center hover:bg-white/10 hover:border-blue-500/50 group"
        >
          <div className="bento-inner flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <Linkedin size={36} />
            </div>
            <h3 className="text-lg font-black mb-3 uppercase tracking-widest text-blue-400">LinkedIn</h3>
            <p className="text-white font-bold text-lg">Harshini R</p>
          </div>
        </a>
        <div className="p-12 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 transition-all flex flex-col items-center">
          <div className="bento-inner flex flex-col items-center">
            <div className="w-20 h-20 gradient-bg rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-teal-500/20">
              <MapPin size={36} />
            </div>
            <h3 className="text-lg font-black mb-3 uppercase tracking-widest text-teal-400">Location</h3>
            <p className="text-white font-bold text-lg text-balance">{PERSONAL_INFO.location}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-slate-900 border-t border-white/5 text-center">
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <span className="text-2xl font-black gradient-text">HR.</span>
      </div>
      <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
        &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed for the Digital Age.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-teal-200 selection:text-teal-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
