import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const slides = [
  {
    url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Luxury Interiors',
  },
  {
    url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Modern Architecture',
  },
  {
    url: 'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Elegant Spaces',
  },
  {
    url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Premium Design',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (index: number) => {
    if (index === current) return;
    setPrev(current);
    setCurrent(index);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* ── SLIDESHOW BACKGROUNDS ── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${slide.url}')`,
            transform: `scale(1.08) translateY(${scrollY * 0.2}px)`,
            opacity: i === current ? 1 : 0,
            transition: i === current
              ? 'opacity 1.2s ease, transform 0.1s linear'
              : 'opacity 1s ease',
            zIndex: i === current ? 1 : prev === i ? 0 : -1,
          }}
        />
      ))}

      {/* ── OVERLAYS ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/75 via-black/45 to-black/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-transparent to-black/25" />

      {/* Gold bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px z-20"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)', opacity: 0.5 }} />

      {/* ── CORNER BRACKETS ── */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-[#D4AF37]/40 z-20" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r-2 border-t-2 border-[#D4AF37]/40 z-20" />
      <div className="absolute bottom-20 left-8 w-16 h-16 border-l-2 border-b-2 border-[#D4AF37]/40 z-20" />
      <div className="absolute bottom-20 right-8 w-16 h-16 border-r-2 border-b-2 border-[#D4AF37]/40 z-20" />

      {/* ── SLIDE LABEL (bottom-left) ── */}
      <div className="absolute bottom-16 left-12 z-30 flex items-center gap-3"
        style={{ opacity: loaded ? 0.7 : 0, transition: 'opacity 0.5s ease 1s' }}>
        <div className="w-8 h-px bg-[#D4AF37]/60" />
        <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">
          {slides[current].label}
        </span>
      </div>

      {/* ── DOT INDICATORS ── */}
      <div className="absolute bottom-16 right-12 z-30 flex gap-2"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease 1s' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-500 rounded-full"
            style={{
              width: i === current ? '28px' : '8px',
              height: '8px',
              background: i === current ? '#D4AF37' : 'rgba(212,175,55,0.35)',
            }}
          />
        ))}
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* BADGE */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.1s',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">
            Premium Construction
          </span>
        </div>

        {/* HEADING */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-none tracking-tight"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s',
            textShadow: '0 4px 40px rgba(0,0,0,0.6)',
          }}
        >
          Building Your
        </h1>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.35s',
            background: 'linear-gradient(135deg, #D4AF37 0%, #F5E27A 50%, #C19B2E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 4px 20px rgba(212,175,55,0.4))',
          }}
        >
          Vision Into Reality
        </h1>

        {/* DIVIDER */}
        <div className="flex items-center justify-center gap-4 mb-6"
          style={{ opacity: loaded ? 1 : 0, transition: 'all 0.7s ease 0.45s' }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
        </div>

        {/* SUBTITLE */}
        <p
          className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-xl mx-auto font-light tracking-wide"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.5s',
          }}
        >
          Premium Design & Construction Solutions crafted with precision, passion, and purpose.
        </p>

        {/* BUTTONS */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.65s',
          }}
        >
          <button
            className="group relative overflow-hidden bg-[#D4AF37] hover:bg-[#C19B2E] text-black font-bold px-10 py-4 rounded-xl transition-all duration-300 flex items-center gap-2"
            style={{ boxShadow: '0 8px 32px rgba(212,175,55,0.35)' }}
          >
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }} />
            Get a Quote
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <button className="group border-2 border-[#D4AF37]/70 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold px-10 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 backdrop-blur-sm bg-white/5">
            <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 group-hover:border-black/30 flex items-center justify-center transition-colors">
              <Play size={14} className="translate-x-0.5" />
            </div>
            View Projects
          </button>
        </div>

        {/* STATS */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.8s',
          }}
        >
          {[
            { value: '200+', label: 'Projects Done' },
            { value: '15+', label: 'Years Experience' },
            { value: '50+', label: 'Expert Team' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, #F5E27A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
        style={{
          opacity: loaded ? 0.5 : 0,
          transition: 'opacity 0.7s ease 1.2s',
          animation: 'bounce 2s ease-in-out infinite',
        }}
      >
        <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#D4AF37]/60 to-transparent" />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;