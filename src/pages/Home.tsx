import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  ClipboardCheck,
  Settings,
  ShieldCheck,
  Banknote,
  FileText,
  Globe,
  Star,
  Ship,
  Activity,
  Leaf,
  FileCheck,
  BookOpen,
  MessageSquare,
  ChevronRight,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  Building,
  ArrowRightLeft,
  Handshake,
} from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTimestamp: number;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
};

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    company: "TechFlow Dynamics",
    quote: "AHV Worldwide completely optimized our international shipping routes.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80"
  },
  {
    name: "Marcus Chen",
    company: "Global Imports Co.",
    quote: "Exceptional speed and transparency. They handled our complex customs clearances effortlessly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80"
  },
  {
    name: "Elena Rodriguez",
    company: "Luxe Retail",
    quote: "The most reliable logistics partner we've worked with across 15 countries.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80"
  },
  {
    name: "James Wilson",
    company: "Manufacturing Pro",
    quote: "Their team's expertise in heavy freight is unmatched. Highly recommended.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80"
  }
];

const TestimonialOverlay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 150);
      
      setTimeout(() => {
        setAnimating(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = TESTIMONIALS[currentIndex];

  return (
    <div className="absolute bottom-8 right-8 z-30 hidden lg:block w-[340px]">
      <div className={`bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl ${animating ? 'animate-shock' : ''}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-zinc-500">Google</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
          </div>
        </div>
        <p className="text-sm text-zinc-700 italic mb-4 line-clamp-3">
          "{t.quote}"
        </p>
        <div className="flex items-center gap-3">
          <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
          <div>
            <div className="text-sm font-bold text-zinc-900">{t.name}</div>
            <div className="text-xs text-zinc-500">{t.company}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const { setIsLeadFormOpen } = useOutletContext<{ setIsLeadFormOpen: (open: boolean) => void }>();

  return (
    <>
        <Helmet>
          <title>AHV Worldwide | Go Global - Export, Import & Consultancy</title>
          <meta name="description" content="AHV Worldwide offers comprehensive solutions in global export and import trade, pharmaceutical consultancy, and specialized education services." />
          <meta name="keywords" content="Export, Import, Pharma, Ayurveda, Education, Global Trade, AHV Worldwide" />
        </Helmet>
        {/* HERO SECTION */}
        <section className="relative rounded-[20px] overflow-hidden bg-zinc-100 min-h-[500px] h-[calc(100vh-100px)] lg:h-[832px] flex flex-col shadow-xl shadow-black/5">
          {/* Background Video */}
          <video 
            src="https://res.cloudinary.com/dm3scoj2q/video/upload/v1782542083/make_this_video_train_is_going_vxft1b.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Hero Content */}
          <div className="relative z-10 mt-auto p-6 lg:p-8 lg:px-12 pb-12 lg:pb-16 flex flex-col justify-end gap-6 max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.1] font-bold text-[#FFD700] tracking-tight drop-shadow-xl font-heading">
              AHV Worldwide
            </h1>
            <p className="text-white/95 text-4xl sm:text-5xl drop-shadow-lg" style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}>
              Go global
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
              <button className="bg-[#FF6E14] hover:bg-[#e05f0d] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-[#FF6E14]/20 w-full sm:w-auto text-center">
                Explore Our Services
              </button>
              <button onClick={() => setIsLeadFormOpen(true)} className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg w-full sm:w-auto text-center">
                Get a Free Consultation
              </button>
            </div>
          </div>
          
          <TestimonialOverlay />
        </section>

        {/* STATS SECTION */}
        <section className="flex flex-wrap gap-4 mt-6">
          <div className="bg-[#EAF0F6] rounded-2xl px-8 py-5 flex items-center gap-5 flex-1 min-w-[240px] shadow-sm">
            <span className="text-4xl font-bold tracking-tight text-zinc-900"><AnimatedCounter end={33} suffix="+" /></span>
            <div className="w-px h-10 bg-zinc-300"></div>
            <span className="text-xs text-zinc-600 font-medium leading-tight max-w-[110px] uppercase tracking-wider">Years Experience</span>
          </div>
          <div className="bg-[#EAF0F6] rounded-2xl px-8 py-5 flex items-center gap-5 flex-1 min-w-[240px] shadow-sm">
            <span className="text-4xl font-bold tracking-tight text-zinc-900"><AnimatedCounter end={25} suffix="+" /></span>
            <div className="w-px h-10 bg-zinc-300"></div>
            <span className="text-xs text-zinc-600 font-medium leading-tight max-w-[110px] uppercase tracking-wider">Countries Reached</span>
          </div>
          <div className="bg-[#EAF0F6] rounded-2xl px-8 py-5 flex items-center gap-5 flex-1 min-w-[240px] shadow-sm">
             <span className="text-4xl font-bold tracking-tight text-zinc-900"><AnimatedCounter end={500} suffix="+" duration={2500} /></span>
            <div className="w-px h-10 bg-zinc-300"></div>
            <span className="text-xs text-zinc-600 font-medium leading-tight max-w-[120px] uppercase tracking-wider">Clients Served</span>
          </div>
          <div className="bg-[#EAF0F6] rounded-2xl px-8 py-5 flex items-center gap-5 flex-1 min-w-[240px] shadow-sm">
             <span className="text-4xl font-bold tracking-tight text-zinc-900"><AnimatedCounter end={3} /></span>
            <div className="w-px h-10 bg-zinc-300"></div>
            <span className="text-xs text-zinc-600 font-medium leading-tight max-w-[120px] uppercase tracking-wider">Expert Domains</span>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section className="mt-24">
          <div className="text-sm font-medium text-zinc-500 mb-3 tracking-wide">/ About us</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-zinc-900 tracking-tight font-heading">Why people trust us</h2>
          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-[#2A2B2E] text-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[340px] shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-6 gap-4">
                  <h3 className="text-[1.35rem] font-semibold leading-snug font-heading">We deliver the same quality in every batch</h3>
                  <div className="bg-[#FF6E14]/10 p-3 rounded-2xl text-[#FF6E14] shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">Consistent weave, shade and finish across every run — what you sign off on the sample is exactly what arrives at your door.</p>
            </div>

            <div className="col-span-12 md:col-span-8 lg:col-span-3 bg-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[340px] shadow-sm">
              <h3 className="text-[1.35rem] font-semibold leading-snug mb-6 font-heading">We own every stage, fibre to dispatch</h3>
              <div className="rounded-xl overflow-hidden mb-6 h-36 relative shrink-0">
                <img 
                  src="https://lnhtransport.com/wp-content/uploads/2021/06/export-packing-lnh.jpg" 
                  alt="Export Packing" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed mt-auto">Sourcing, weaving, finishing, packing — one team controls the full process, so quality never slips through a handoff.</p>
            </div>

            <div className="col-span-12 lg:col-span-6 bg-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[340px] relative overflow-hidden shadow-sm">
              <div className="relative z-10 max-w-[280px]">
                <h3 className="text-[1.35rem] font-semibold leading-snug mb-4 font-heading">We supply buyers across 40+ countries</h3>
              </div>
              <div className="absolute right-0 top-0 w-3/4 h-full pointer-events-none">
                 <img 
                   src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1782552193/ChatGPT_Image_Jun_27_2026_02_12_07_PM_zkqq1x.png" 
                   alt="Map background" 
                   className="w-full h-full object-cover object-left opacity-90 rounded-l-[2rem] mask-image-gradient"
                   style={{ maskImage: 'linear-gradient(to right, transparent, black 20%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%)' }}
                 />
              </div>
              <p className="text-sm text-zinc-500 relative z-10 max-w-[320px] mt-auto leading-relaxed">North America, Europe, the Middle East, Southeast Asia and Latin America — an export network trusted by importers worldwide.</p>
            </div>

            <div className="col-span-12 md:col-span-4 bg-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[300px] shadow-sm">
              <div className="flex justify-between items-start mb-6 gap-4">
                <h3 className="text-[1.35rem] font-semibold leading-snug font-heading">We quote one price, fixed at confirmation</h3>
                <div className="bg-[#FF6E14]/10 p-3 rounded-2xl text-[#FF6E14] shrink-0">
                  <Banknote className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">The rate you agree at order is the rate you pay — no surprise surcharges between confirmation and delivery.</p>
            </div>

            <div className="col-span-12 md:col-span-4 bg-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[300px] shadow-sm">
              <div className="flex justify-between items-start mb-6 gap-4">
                <h3 className="text-[1.35rem] font-semibold leading-snug font-heading">We take on custom and specialty weaves</h3>
                <div className="bg-[#FF6E14]/10 p-3 rounded-2xl text-[#FF6E14] shrink-0">
                  <Settings className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">Bespoke widths, blends and finishes, plus large-volume runs — the orders other mills turn away, we build to spec.</p>
            </div>

            <div className="col-span-12 md:col-span-4 bg-[#2A2B2E] text-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[300px] shadow-sm">
              <div className="flex justify-between items-start mb-6 gap-4">
                <h3 className="text-[1.35rem] font-semibold leading-snug font-heading">We keep you in the loop, end to end</h3>
                <div className="bg-[#FF6E14]/10 p-3 rounded-2xl text-[#FF6E14] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">Track your order from loom to shipment with one dedicated contact reachable at every step — full visibility, no chasing.</p>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="mt-24">
          <div className="text-sm font-medium text-zinc-500 mb-3 tracking-wide">/ Services</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-zinc-900 tracking-tight font-heading">Our core expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col min-h-[340px] transition-all hover:shadow-lg group shadow-sm">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop" alt="Import Export Trade" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl text-zinc-700 shadow-sm">
                  <Ship className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 bg-[#EAF0F6]">
                <h3 className="text-xl font-bold text-zinc-900 font-heading mb-3">Import & Export Trade</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mt-auto">Global sourcing and distribution across diverse markets.</p>
                <button onClick={() => setIsLeadFormOpen(true)} className="mt-6 flex items-center justify-between w-full bg-white rounded-2xl py-3 px-5 text-sm font-bold text-zinc-900 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors">
                  Inquire Now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col min-h-[340px] transition-all hover:shadow-lg group shadow-sm">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800&auto=format&fit=crop" alt="Pharma Consultancy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl text-zinc-700 shadow-sm">
                  <Activity className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 bg-[#EAF0F6]">
                <h3 className="text-xl font-bold text-zinc-900 font-heading mb-3">Pharma Consultancy</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mt-auto">WHO-GMP / USFDA / EDQM / ISO compliance and advisory.</p>
                <button onClick={() => setIsLeadFormOpen(true)} className="mt-6 flex items-center justify-between w-full bg-white rounded-2xl py-3 px-5 text-sm font-bold text-zinc-900 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors">
                  Inquire Now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col min-h-[340px] transition-all hover:shadow-lg group shadow-sm">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800&auto=format&fit=crop" alt="Ayurveda Consultancy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl text-zinc-700 shadow-sm">
                  <Leaf className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 bg-[#EAF0F6]">
                <h3 className="text-xl font-bold text-zinc-900 font-heading mb-3">Ayurveda Consultancy</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mt-auto">Expert guidance on traditional medicine formulation and regulation.</p>
                <button onClick={() => setIsLeadFormOpen(true)} className="mt-6 flex items-center justify-between w-full bg-white rounded-2xl py-3 px-5 text-sm font-bold text-zinc-900 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors">
                  Inquire Now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col min-h-[340px] transition-all hover:shadow-lg group shadow-sm">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop" alt="Export-Import Documentation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl text-zinc-700 shadow-sm">
                  <FileCheck className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 bg-[#EAF0F6]">
                <h3 className="text-xl font-bold text-zinc-900 font-heading mb-3">Export-Import Documentation</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mt-auto">Streamlined paperwork, customs clearance, and regulatory filing.</p>
                <button onClick={() => setIsLeadFormOpen(true)} className="mt-6 flex items-center justify-between w-full bg-white rounded-2xl py-3 px-5 text-sm font-bold text-zinc-900 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors">
                  Inquire Now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col min-h-[340px] transition-all hover:shadow-lg group shadow-sm">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop" alt="1-to-1 Educational Tuition" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl text-zinc-700 shadow-sm">
                  <BookOpen className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 bg-[#EAF0F6]">
                <h3 className="text-xl font-bold text-zinc-900 font-heading mb-3">1-to-1 Educational Tuition</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mt-auto">Personalized academic support for 8th–10th Std students.</p>
                <button onClick={() => setIsLeadFormOpen(true)} className="mt-6 flex items-center justify-between w-full bg-white rounded-2xl py-3 px-5 text-sm font-bold text-zinc-900 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors">
                  Inquire Now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col min-h-[340px] transition-all hover:shadow-lg group shadow-sm">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="English Speaking Coaching" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl text-zinc-700 shadow-sm">
                  <MessageSquare className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 bg-[#EAF0F6]">
                <h3 className="text-xl font-bold text-zinc-900 font-heading mb-3">English Speaking Coaching</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mt-auto">Communication skills training for executives and students.</p>
                <button onClick={() => setIsLeadFormOpen(true)} className="mt-6 flex items-center justify-between w-full bg-white rounded-2xl py-3 px-5 text-sm font-bold text-zinc-900 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors">
                  Inquire Now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="mt-24">
          <div className="text-sm font-medium text-zinc-500 mb-3 tracking-wide">/ Why Choose Us</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-zinc-900 tracking-tight font-heading">Why Choose AHV Worldwide?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-zinc-100">
              <div className="bg-[#FF6E14]/10 p-4 rounded-2xl text-[#FF6E14] shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 mb-2">33+ Years Experience</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">Pharmaceutical industry experience at General Manager level.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-[2rem] p-8 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-zinc-100">
              <div className="bg-[#FF6E14]/10 p-4 rounded-2xl text-[#FF6E14] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 mb-2">Global Certifications</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">Expertise in WHO-GMP, USFDA, EDQM, and ISO certifications.</p>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-zinc-100">
              <div className="bg-[#FF6E14]/10 p-4 rounded-2xl text-[#FF6E14] shrink-0">
                <ArrowRightLeft className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 mb-2">Dual Importer & Exporter</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">Your one-stop global trade partner across worldwide markets.</p>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-zinc-100">
              <div className="bg-[#FF6E14]/10 p-4 rounded-2xl text-[#FF6E14] shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 mb-2">Academic Excellence</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">MBA, M.Sc., Ph.D (Management), and 4 published research papers.</p>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-zinc-100">
              <div className="bg-[#FF6E14]/10 p-4 rounded-2xl text-[#FF6E14] shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 mb-2">Trusted Globally</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">Trusted by Multinational & Indian companies across sectors.</p>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-zinc-100">
              <div className="bg-[#FF6E14]/10 p-4 rounded-2xl text-[#FF6E14] shrink-0">
                <Handshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 mb-2">Personalised Consultancy</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">Dedicated service with a strict commitment to your results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA BANNER */}
        <section className="mt-24">
          <div className="bg-[#2A2B2E] rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight font-heading">
                Ready to Go Global? Let's Connect.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setIsLeadFormOpen(true)} className="bg-[#FF6E14] hover:bg-[#e05f0d] text-white px-10 py-5 rounded-full font-bold text-lg transition-colors shadow-lg shadow-[#FF6E14]/20 flex items-center justify-center gap-3">
                  Get a Free Quote
                </button>
                <a href="https://wa.me/919921481220" target="_blank" rel="noreferrer" className="bg-white text-[#2A2B2E] hover:bg-zinc-100 px-10 py-5 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-3">
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
