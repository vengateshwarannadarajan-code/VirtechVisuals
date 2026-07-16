import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Plus, Minus, CheckCircle2, Package } from 'lucide-react';
import { getSolutionBySlug, sharedFaqs } from '../data/solutions';

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const solution = getSolutionBySlug(slug ?? '');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!solution) return <Navigate to="/smart-factory" replace />;

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">

      {/* Breadcrumb */}
      <div className="border-b border-[#222] px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#555]">
          <Link to="/" className="hover:text-[#a0a0a0] transition-colors">Home</Link>
          <span>›</span>
          <Link to="/smart-factory" className="hover:text-[#a0a0a0] transition-colors">Smart Factory Solutions</Link>
          <span>›</span>
          <span className="text-[#888]">{solution.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0d0d0d] border-b border-[#222]">
        {/* Full-bleed image with overlay */}
        <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden bg-[#111]">
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/30 via-[#0d0d0d]/50 to-[#0d0d0d]" />
          {/* Content over image */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pb-14">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-4 block">Smart Factory Solution</span>
                <h1 className="font-display text-4xl md:text-6xl mb-4 max-w-3xl leading-tight">{solution.title}</h1>
                <p className="text-[#a0a0a0] text-base md:text-lg max-w-2xl leading-relaxed">{solution.tagline}</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Intro + CTAs below image */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-8"
          >
            <p className="text-[#666] text-sm max-w-2xl leading-relaxed">{solution.intro}</p>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link to="/contact" className="px-7 py-3.5 bg-[#d4af37] text-[#1a1a1a] rounded-lg font-display text-sm hover:bg-[#e5c24a] transition-colors">
                Request a Demo
              </Link>
              <Link to="/contact" className="px-7 py-3.5 border border-[#333] text-[#a0a0a0] rounded-lg text-sm hover:border-[#d4af37]/50 hover:text-white transition-colors">
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 md:px-8 bg-[#1a1a1a] border-b border-[#222]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <div>
              <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">The Problem</span>
              <h2 className="font-display text-2xl md:text-3xl">Why this matters</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-[#777] leading-relaxed">{solution.problem}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Modules */}
      <section className="py-20 px-4 md:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Solution Modules</span>
            <h2 className="font-display text-3xl md:text-4xl mb-2">Each module can be deployed independently or as part of the complete solution.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solution.modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-[#d4af37]/30 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-4 group-hover:bg-[#d4af37]/20 transition-colors">
                  <span className="text-xs font-display text-[#d4af37]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display text-sm mb-2 group-hover:text-[#d4af37] transition-colors">{mod.name}</h3>
                <p className="text-[#666] text-xs leading-relaxed">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 md:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Capabilities</span>
            <h2 className="font-display text-3xl md:text-4xl">Key Features</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {solution.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 bg-[#111] border border-[#2a2a2a] rounded-lg"
              >
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-[#888] text-sm">{feat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-8 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl">Frequently Asked Questions</h2>
          </motion.div>

          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl px-8 py-2">
            {sharedFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="border-b border-[#2a2a2a] last:border-0"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="text-sm font-display group-hover:text-[#d4af37] transition-colors">{faq.q}</span>
                  <span className="flex-shrink-0 p-1.5 rounded-full border border-[#2e2e2e] group-hover:border-[#d4af37]/40 transition-colors">
                    {openFaq === i
                      ? <Minus className="w-3.5 h-3.5 text-[#d4af37]" />
                      : <Plus className="w-3.5 h-3.5 text-[#666]" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#777] text-sm leading-relaxed pb-5">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 px-4 md:px-8 bg-[#1a1a1a] border-t border-[#222]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Related Products</span>
            <h2 className="font-display text-3xl">Recommended for this solution</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {solution.relatedProducts.map((prod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to="/products"
                  className="group flex items-center gap-4 p-5 bg-[#111] border border-[#2a2a2a] rounded-xl hover:border-[#d4af37]/40 transition-all duration-300"
                >
                  <div className="p-2.5 bg-[#d4af37]/10 rounded-lg flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors">
                    <Package className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="font-display text-sm group-hover:text-[#d4af37] transition-colors">{prod.name}</div>
                    <div className="text-[10px] text-[#555] mt-0.5">{prod.tagline}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#333] group-hover:text-[#d4af37] ml-auto transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 px-4 md:px-8 bg-[#111] border-t border-[#222]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Related Case Studies</span>
            <h2 className="font-display text-3xl">Real outcomes from real deployments</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {solution.relatedCaseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to="/case-studies"
                  className="group block p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-[#d4af37]/40 transition-all duration-300"
                >
                  <span className="text-[10px] text-[#555] tracking-widest uppercase border border-[#2a2a2a] px-2.5 py-1 rounded-full inline-block mb-3 group-hover:border-[#d4af37]/30 group-hover:text-[#888] transition-colors">
                    {cs.industry}
                  </span>
                  <p className="font-display text-sm leading-snug group-hover:text-[#d4af37] transition-colors">{cs.title}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-[#1a1a1a] border-t border-[#222]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">Ready to implement {solution.title}?</h2>
            <p className="text-[#666] text-sm mb-10">Let our team help you design and deploy the right solution for your shopfloor.</p>
            <Link to="/contact" className="inline-block px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg font-display hover:bg-[#e5c24a] transition-colors">
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <div className="border-t border-[#222] px-4 md:px-8 py-6 bg-[#111]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {solution.prev ? (
            <Link
              to={`/smart-factory/${solution.prev}`}
              className="group flex items-center gap-3 text-sm text-[#555] hover:text-[#d4af37] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <div>
                <div className="text-[10px] tracking-widest uppercase mb-0.5">Previous</div>
                <div className="font-display text-xs text-[#888] group-hover:text-[#d4af37] transition-colors line-clamp-1">
                  {getSolutionBySlug(solution.prev)?.title}
                </div>
              </div>
            </Link>
          ) : <div />}

          <Link to="/smart-factory" className="text-xs text-[#444] hover:text-[#888] transition-colors tracking-widest uppercase">
            All Solutions
          </Link>

          {solution.next ? (
            <Link
              to={`/smart-factory/${solution.next}`}
              className="group flex items-center gap-3 text-sm text-[#555] hover:text-[#d4af37] transition-colors text-right"
            >
              <div>
                <div className="text-[10px] tracking-widest uppercase mb-0.5">Next</div>
                <div className="font-display text-xs text-[#888] group-hover:text-[#d4af37] transition-colors line-clamp-1">
                  {getSolutionBySlug(solution.next)?.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
