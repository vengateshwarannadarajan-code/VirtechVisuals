import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2, Plug, ExternalLink } from 'lucide-react';
import { Footer } from '../components/Footer';
import { getProductBySlug } from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug ?? '');
  const [openModule, setOpenModule] = useState<number | null>(null);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">

      {/* Breadcrumb */}
      <div className="border-b border-[#222] px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#555]">
          <Link to="/" className="hover:text-[#a0a0a0] transition-colors">Home</Link>
          <span>›</span>
          <Link to="/products" className="hover:text-[#a0a0a0] transition-colors">Products</Link>
          <span>›</span>
          <span className="text-[#888]">{product.name}</span>
        </div>
      </div>

      {/* Hero with image */}
      <section className="relative overflow-hidden bg-[#0d0d0d] border-b border-[#222]">
        <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden bg-[#111]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/20 via-[#0d0d0d]/50 to-[#0d0d0d]" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pb-14">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-[#d4af37] tracking-widest uppercase">{product.category}</span>
                  {product.badge && (
                    <span className="text-[10px] bg-[#d4af37] text-[#1a1a1a] px-2 py-0.5 rounded font-display tracking-widest">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h1 className="font-display text-4xl md:text-6xl mb-4 leading-tight">{product.name}</h1>
                <p className="text-[#a0a0a0] text-base md:text-lg max-w-2xl leading-relaxed">{product.tagline}</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Intro + CTAs */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-8"
          >
            <p className="text-[#666] text-sm max-w-2xl leading-relaxed">{product.intro}</p>
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

      {/* Product Modules */}
      <section className="py-20 px-4 md:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Inside {product.name}</span>
            <h2 className="font-display text-3xl md:text-4xl">Product Modules</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-[#d4af37]/30 transition-colors cursor-pointer"
                onClick={() => setOpenModule(openModule === i ? null : i)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors">
                    <span className="text-xs font-display text-[#d4af37]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <h3 className="font-display text-sm mb-2 group-hover:text-[#d4af37] transition-colors">{mod.name}</h3>
                <AnimatePresence initial={false}>
                  <p className="text-[#666] text-xs leading-relaxed">{mod.desc}</p>
                </AnimatePresence>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
            {product.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3 p-4 bg-[#111] border border-[#2a2a2a] rounded-lg"
              >
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-[#888] text-sm">{feat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 md:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Real-World Applications</span>
            <h2 className="font-display text-3xl md:text-4xl">Industry Use Cases</h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {product.useCases.map((uc, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-sm text-[#888] border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2 rounded-lg"
              >
                {uc}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 md:px-8 bg-[#1a1a1a] border-t border-[#222]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Integrations & Connectors</span>
            <h2 className="font-display text-3xl mb-2">{product.name} connects seamlessly with your existing technology ecosystem.</h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {product.integrations.map((intg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#111] border border-[#2a2a2a] rounded-lg"
              >
                <Plug className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                <span className="text-xs text-[#777]">{intg}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 px-4 md:px-8 bg-[#111] border-t border-[#222]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Related Products</span>
            <h2 className="font-display text-3xl">Works great alongside</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {product.relatedProducts.map((prod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/products/${prod.slug}`}
                  className="group flex items-center gap-4 p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-[#d4af37]/40 transition-all duration-300"
                >
                  <div className="p-2.5 bg-[#d4af37]/10 rounded-lg flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors">
                    <ExternalLink className="w-5 h-5 text-[#d4af37]" />
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
      <section className="py-16 px-4 md:px-8 bg-[#1a1a1a] border-t border-[#222]">
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
            {product.relatedCaseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to="/case-studies"
                  className="group block p-5 bg-[#111] border border-[#2a2a2a] rounded-xl hover:border-[#d4af37]/40 transition-all duration-300"
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
      <section className="py-20 px-4 md:px-8 bg-[#111] border-t border-[#222]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Ready to deploy {product.name}?</h2>
            <p className="text-[#666] text-sm mb-10">Let our team help you configure and deploy {product.name} for your organization.</p>
            <Link to="/contact" className="inline-block px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg font-display hover:bg-[#e5c24a] transition-colors">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Prev / Next */}
      <div className="border-t border-[#222] px-4 md:px-8 py-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {product.prev ? (
            <Link
              to={`/products/${product.prev}`}
              className="group flex items-center gap-3 text-sm text-[#555] hover:text-[#d4af37] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <div>
                <div className="text-[10px] tracking-widest uppercase mb-0.5">Previous</div>
                <div className="font-display text-xs text-[#888] group-hover:text-[#d4af37] transition-colors">
                  {getProductBySlug(product.prev)?.name}
                </div>
              </div>
            </Link>
          ) : <div />}

          <Link to="/products" className="text-xs text-[#444] hover:text-[#888] transition-colors tracking-widest uppercase">
            All Products
          </Link>

          {product.next ? (
            <Link
              to={`/products/${product.next}`}
              className="group flex items-center gap-3 text-sm text-[#555] hover:text-[#d4af37] transition-colors text-right"
            >
              <div>
                <div className="text-[10px] tracking-widest uppercase mb-0.5">Next</div>
                <div className="font-display text-xs text-[#888] group-hover:text-[#d4af37] transition-colors">
                  {getProductBySlug(product.next)?.name}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : <div />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
