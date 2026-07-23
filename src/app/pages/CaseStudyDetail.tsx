import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Clock, Users, CheckCircle2, TrendingUp, Wrench } from 'lucide-react';
import { getCaseStudyBySlug, caseStudies } from '../data/caseStudies';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { useI18n } from '../i18n/context';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();
  const cs = getCaseStudyBySlug(slug ?? '');

  if (!cs) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center justify-center pt-16">
        <h1 className="font-display text-4xl mb-4">Case Study Not Found</h1>
        <Link to="/case-studies" className="text-[#d4af37] hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>
      </div>
    );
  }

  // Related cases — same industry, exclude current
  const related = caseStudies
    .filter(c => c.industry === cs.industry && c.slug !== cs.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pt-16">

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={cs.image} alt={cs.title} className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-black/60 to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pb-12">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#d4af37] text-sm mb-6 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-[#d4af37]/20 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-xs font-medium">
              {cs.industry}
            </span>
            <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-white/70 text-xs">
              {cs.category}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl mb-3 drop-shadow-lg">{cs.title}</h1>
          <p className="text-white/70 text-lg">{cs.client}</p>
        </div>
      </section>

      {/* Meta strip */}
      {(cs.duration || cs.engineers) && (
        <section className="border-b border-[#2a2a2a] bg-[#111] py-5 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-8">
            {cs.duration && (
              <div className="flex items-center gap-2 text-sm text-[#c0c0c0]">
                <Clock className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[#999] text-xs uppercase tracking-widest mr-1">Duration</span>
                {cs.duration}
              </div>
            )}
            {cs.engineers && (
              <div className="flex items-center gap-2 text-sm text-[#c0c0c0]">
                <Users className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[#999] text-xs uppercase tracking-widest mr-1">Team</span>
                {cs.engineers}
              </div>
            )}
            {cs.technologies.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <Wrench className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[#999] text-xs uppercase tracking-widest mr-1">Tech</span>
                {cs.technologies.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-xs text-[#aaa]">{t}</span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Main content */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14">

          {/* Left — main content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Challenge */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">The Challenge</span>
              <h2 className="font-display text-2xl mb-4">Why This Mattered</h2>
              <p className="text-[#c0c0c0] leading-relaxed">{cs.challenge}</p>
            </motion.div>

            {/* Key Results */}
            {cs.results.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">
                  <TrendingUp className="w-3 h-3 inline mr-1" />
                  Key Results
                </span>
                <h2 className="font-display text-2xl mb-6">What We Delivered</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cs.results.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 p-4 bg-[#111] border border-[#2a2a2a] rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white leading-snug">{r}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right — sidebar */}
          <div className="space-y-6">

            {/* Quick facts */}
            <div className="p-6 bg-[#111] border border-[#2a2a2a] rounded-xl">
              <h3 className="font-display text-base mb-4 text-[#d4af37]">Project Overview</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-[10px] text-[#999] tracking-widest uppercase mb-0.5">Client</dt>
                  <dd className="text-sm text-white">{cs.client}</dd>
                </div>
                <div>
                  <dt className="text-[10px] text-[#999] tracking-widest uppercase mb-0.5">Industry</dt>
                  <dd className="text-sm text-white">{cs.industry}</dd>
                </div>
                <div>
                  <dt className="text-[10px] text-[#999] tracking-widest uppercase mb-0.5">Category</dt>
                  <dd className="text-sm text-white">{cs.category}</dd>
                </div>
                {cs.duration && (
                  <div>
                    <dt className="text-[10px] text-[#999] tracking-widest uppercase mb-0.5">Duration</dt>
                    <dd className="text-sm text-white">{cs.duration}</dd>
                  </div>
                )}
                {cs.engineers && (
                  <div>
                    <dt className="text-[10px] text-[#999] tracking-widest uppercase mb-0.5">Team Size</dt>
                    <dd className="text-sm text-white">{cs.engineers}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Technologies */}
            {cs.technologies.length > 0 && (
              <div className="p-6 bg-[#111] border border-[#2a2a2a] rounded-xl">
                <h3 className="font-display text-base mb-4 text-[#d4af37]">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {cs.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-xs text-[#c0c0c0]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="p-6 bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl">
              <h3 className="font-display text-base mb-2">Want Similar Results?</h3>
              <p className="text-[#aaa] text-xs mb-4 leading-relaxed">Let us discuss how we can transform your operations.</p>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#d4af37] text-[#1a1a1a] rounded-lg text-sm font-medium hover:bg-[#e5c24a] transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="py-16 px-4 md:px-8 bg-[#111] border-t border-[#2a2a2a]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-2xl mb-8">More {cs.industry} Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rc, i) => (
                <Link key={rc.slug} to={`/case-studies/${rc.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#d4af37]/40 transition-colors"
                  >
                    <div className="h-36 overflow-hidden">
                      <img src={rc.image} alt={rc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] text-[#999] uppercase tracking-widest mb-1">{rc.category}</p>
                      <h3 className="font-display text-sm group-hover:text-[#d4af37] transition-colors leading-snug">{rc.title}</h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact form */}
      <section className="py-20 px-4 md:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl mb-3">Ready to Transform Your Operations?</h2>
            <p className="text-[#aaa] text-sm max-w-xl mx-auto">Tell us about your challenge and we will get back to you within 24 hours.</p>
          </div>
          <ContactForm showSidebar={true} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
