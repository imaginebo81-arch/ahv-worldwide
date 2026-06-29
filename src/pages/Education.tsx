import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronRight,
  BookOpen,
  MessageCircle,
  FlaskConical,
  Globe,
  GraduationCap,
  Video,
  CheckCircle,
  CreditCard,
  Phone,
  MessageSquare
} from 'lucide-react';

export default function Education() {
  const { setIsLeadFormOpen } = useOutletContext<{ setIsLeadFormOpen: (open: boolean) => void }>();

  return (
    <>
      <Helmet>
        <title>Education & Training Services | AHV Worldwide</title>
        <meta name="description" content="AHV Worldwide offers comprehensive education and training services, including 1-to-1 academic tuition, English speaking coaching, and pharma training." />
      </Helmet>
      {/* Section A: Page Intro */}
      <section className="relative rounded-[20px] overflow-hidden bg-[#2A2B2E] py-24 px-8 lg:px-12 flex flex-col items-center justify-center text-center shadow-xl h-[400px]">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop" alt="Education Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading tracking-tight">Education & Training Services</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">25+ Years of Teaching Excellence | 1-to-1 | Online | Guaranteed Results</p>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Education</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mt-24">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-[#FF6E14] mb-4 tracking-wide uppercase">/ Our Programs</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight font-heading">Comprehensive Training</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Section B: Service 1 */}
          <div className="bg-white rounded-[3rem] p-10 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <BookOpen className="w-32 h-32 text-blue-600" />
            </div>
            <div className="relative z-10">
              <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 font-heading">1-to-1 Academic Tuition</h3>
              <ul className="space-y-4 mb-8 text-zinc-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Target Students:</strong> Class 8, 9, and 10 (CBSE, ICSE, SSC, IB)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Subjects:</strong> Science, Mathematics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Mode:</strong> Online (1-to-1 personalized sessions)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Guarantee:</strong> Assured improvement in marks and grades</span>
                </li>
              </ul>
              <button onClick={() => setIsLeadFormOpen(true)} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                <Video className="w-5 h-5" /> Free Demo Session
              </button>
            </div>
          </div>

          {/* Section C: Service 2 */}
          <div className="bg-white rounded-[3rem] p-10 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <MessageCircle className="w-32 h-32 text-indigo-600" />
            </div>
            <div className="relative z-10">
              <div className="bg-indigo-50 text-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 font-heading">English Speaking Coaching</h3>
              <ul className="space-y-4 mb-8 text-zinc-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span><strong>Target Audience:</strong> Students (15+), Executives, Managers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span><strong>Focus Areas:</strong> Professional communication, business English, spoken fluency, presentation skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span><strong>Outcome:</strong> Confident communication for academic and corporate environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span><strong>Mode:</strong> Online (1-to-1 personalized sessions)</span>
                </li>
              </ul>
              <button onClick={() => setIsLeadFormOpen(true)} className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                <Video className="w-5 h-5" /> Free Demo Session
              </button>
            </div>
          </div>

          {/* Section D: Service 3 */}
          <div className="bg-white rounded-[3rem] p-10 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <FlaskConical className="w-32 h-32 text-[#FF6E14]" />
            </div>
            <div className="relative z-10">
              <div className="bg-[#FFF4ED] text-[#FF6E14] w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <FlaskConical className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 font-heading">Pharma & Regulatory Training</h3>
              <ul className="space-y-4 mb-8 text-zinc-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                  <span><strong>Target Audience:</strong> Pharma professionals, QA/QC teams, Ayurvedic manufacturers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                  <span><strong>Topics:</strong> WHO-GMP, USFDA compliance, ISO 9000, documentation, validation, audit preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                  <span><strong>Mode:</strong> Corporate training (on-site or online)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                  <span><strong>Format:</strong> Workshops, group sessions, or 1-to-1 sessions</span>
                </li>
              </ul>
              <button onClick={() => setIsLeadFormOpen(true)} className="inline-flex items-center gap-2 bg-[#FF6E14] hover:bg-[#E55B0C] text-white px-6 py-3 rounded-xl font-bold transition-colors">
                Enquire Now
              </button>
            </div>
          </div>

          {/* Section E: Service 4 */}
          <div className="bg-white rounded-[3rem] p-10 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Globe className="w-32 h-32 text-emerald-600" />
            </div>
            <div className="relative z-10">
              <div className="bg-emerald-50 text-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 font-heading">Export-Import Training</h3>
              <ul className="space-y-4 mb-8 text-zinc-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Target Audience:</strong> Entrepreneurs, new exporters/importers, business professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Topics:</strong> IEC registration, documentation, customs, product selection, buyer identification, DGFT</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Mode:</strong> Online or in-person sessions</span>
                </li>
              </ul>
              <button onClick={() => setIsLeadFormOpen(true)} className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                Enquire Now
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Section F: Free Demo CTA Box */}
      <section className="mt-24">
        <div className="bg-[#2A2B2E] rounded-[3rem] p-10 lg:p-16 text-center shadow-xl max-w-5xl mx-auto text-white">
          <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Video className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading tracking-tight">Book a FREE Online Demo Session</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a no-obligation demo for tuition or English speaking coaching. Experience the quality of teaching before you commit.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button onClick={() => setIsLeadFormOpen(true)} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FF6E14] hover:bg-[#E55B0C] text-white px-8 py-4 rounded-xl font-bold transition-colors text-lg">
                <Phone className="w-5 h-5" /> Book Demo Now
             </button>
             <button onClick={() => setIsLeadFormOpen(true)} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-zinc-100 text-zinc-900 px-8 py-4 rounded-xl font-bold transition-colors text-lg">
                <MessageSquare className="w-5 h-5 text-[#25D366]" /> WhatsApp Us
             </button>
          </div>
        </div>
      </section>

      {/* Section G: Payment Terms Note */}
      <section className="mt-16 mb-12">
        <div className="bg-[#F4F6F8] border border-zinc-200 rounded-[2rem] p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm shrink-0">
            <CreditCard className="w-8 h-8 text-zinc-700" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-zinc-900 mb-1">Payment Terms</h4>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Payment is required in advance depending on the service. Duration-based and subject-based packages available. <button onClick={() => setIsLeadFormOpen(true)} className="font-bold text-zinc-900 hover:underline">Contact for a customized quote.</button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
