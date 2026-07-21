import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../i18n/context';
import { PageHero } from '../components/PageHero';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { caseStudies } from '../data/caseStudies';

// Get unique industries for filter tabs
const industries = ['All', ...Array.from(new Set(caseStudies.map(c => c.industry))).sort()];

export default function CaseStudies() {
  const { t } = useI18n();
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.industry === active);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pt-16">
      <PageHero
        tag={t('cases.tag')}
        title={t('cases.title')}
        subtitle={t('cases.sub')}
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=90&fit=crop&auto=format"
      />

      {/* Stats */}
      <section className="border-y border-[#2a2a2a] bg-[#111] py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: `${caseStudies.length}+`, label: 'Case Studies' },
            { value: '18+', label: 'Industries' },
            { value: '465+', label: 'Clients Served' },
            { value: '10+', label: 'Countries' },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-[#d4af37] mb-1">{s.value}</div>
              <div className="text-[#666] text-xs">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 px-4 md:px-8 bg-[#1a1a1a] border-b border-[#2a2a2a] sticky top-16 z-30 backdrop-blur-md bg-[#1a1a1a]/95">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {industries.map(ind => (
              <button
                key={ind}
                onClick={() => setActive(ind)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  active === ind
                    ? 'bg-[#d4af37] text-[#1a1a1a]'
                    : 'border border-[#2a2a2a] text-[#666] hover:border-[#d4af37]/40 hover:text-[#d4af37]'
                }`}
              >
                {ind}
                {ind !== 'All' && (
                  <span className="ml-1.5 opacity-60">
                    {caseStudies.filter(c => c.industry === ind).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case study grid */}
      <section className="py-16 px-4 md:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-[#555] text-sm">
            Showing {filtered.length} case {filtered.length === 1 ? 'study' : 'studies'}
            {active !== 'All' && ` in ${active}`}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cs, i) => (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.06 }}
              >
                <div className="group flex flex-col bg-[#111] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#d4af37]/40 transition-all duration-300 h-full">

                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/30 to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 bg-[#d4af37]/20 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-[10px] font-medium tracking-wide">
                        {cs.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-[10px] text-[#555] tracking-widest uppercase mb-2">{cs.category}</p>
                    <h3 className="font-display text-base mb-1 group-hover:text-[#d4af37] transition-colors leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-[#555] text-xs mb-3">{cs.client}</p>

                    {/* Duration + engineers */}
                    {(cs.duration || cs.engineers) && (
                      <div className="flex gap-3 mb-4">
                        {cs.duration && (
                          <span className="text-[10px] text-[#444] border border-[#222] px-2 py-0.5 rounded">
                            ⏱ {cs.duration}
                          </span>
                        )}
                        {cs.engineers && (
                          <span className="text-[10px] text-[#444] border border-[#222] px-2 py-0.5 rounded">
                            👥 {cs.engineers}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Key results */}
                    {cs.results.length > 0 && (
                      <div className="space-y-1.5 mb-4 flex-1">
                        <p className="text-[10px] text-[#d4af37] tracking-widest uppercase mb-2">
                          <TrendingUp className="w-3 h-3 inline mr-1" />
                          {t('cases.results')}
                        </p>
                        {cs.results.slice(0, 2).map((r, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[#d4af37] flex-shrink-0 mt-0.5" />
                            <span className="text-[#777] text-[11px] leading-snug">{r}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    {cs.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {cs.technologies.slice(0, 3).map((tech, j) => (
                          <span key={j} className="text-[10px] text-[#444] border border-[#222] px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto pt-3 border-t border-[#1e1e1e] flex items-center gap-1 text-xs text-[#555] group-hover:text-[#d4af37] transition-colors">
                      {t('cases.read')} <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl mb-4">{t('cases.cta.title')}</h2>
            <p className="text-[#666] text-sm max-w-xl mx-auto">{t('cases.cta.sub')}</p>
          </motion.div>
          <ContactForm showSidebar={true} defaultService="Smart Factory Solutions" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
