import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import {
  Plus, Minus, ArrowRight,
  BarChart3, GitMerge, ShieldCheck, GitBranch, Wrench, Package, Truck,
  MapPin, Eye, Bot, Box, Wifi, ClipboardList, Bell, ShieldAlert, Zap,
  Lock, Database, LayoutGrid, Cpu, DollarSign, ShoppingCart, Users,
  FileText, HeadphonesIcon, FolderKanban,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { useI18n } from '../i18n/context';
import { Footer } from '../components/Footer';

const shopfloorSolutions = [
  { icon: <BarChart3 className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s1.title', descKey: 'sf.s1.desc', slug: 'production-performance-planning' },
  { icon: <GitMerge className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s2.title', descKey: 'sf.s2.desc', slug: 'process-intelligence-optimization' },
  { icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s3.title', descKey: 'sf.s3.desc', slug: 'quality-intelligence' },
  { icon: <GitBranch className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s4.title', descKey: 'sf.s4.desc', slug: 'traceability-genealogy' },
  { icon: <Wrench className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s5.title', descKey: 'sf.s5.desc', slug: 'maintenance-reliability-intelligence' },
  { icon: <Package className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s6.title', descKey: 'sf.s6.desc', slug: 'warehouse-intelligence' },
  { icon: <Truck className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s7.title', descKey: 'sf.s7.desc', slug: 'intralogistics-material-flow' },
  { icon: <MapPin className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s8.title', descKey: 'sf.s8.desc', slug: 'spatial-intelligence-asset-tracking' },
  { icon: <Eye className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s9.title', descKey: 'sf.s9.desc', slug: 'vision-intelligence' },
  { icon: <Bot className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s10.title', descKey: 'sf.s10.desc', slug: 'robotics-physical-ai' },
  { icon: <Box className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s11.title', descKey: 'sf.s11.desc', slug: 'digital-twins-simulation' },
  { icon: <Wifi className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s12.title', descKey: 'sf.s12.desc', slug: 'industrial-iot-ot-it-integration' },
  { icon: <ClipboardList className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s13.title', descKey: 'sf.s13.desc', slug: 'manufacturing-execution-workflow-automation' },
  { icon: <Bell className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s14.title', descKey: 'sf.s14.desc', slug: 'smart-notifications-control-tower' },
  { icon: <ShieldAlert className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s15.title', descKey: 'sf.s15.desc', slug: 'safety-ehs-permit-to-work' },
  { icon: <Zap className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s16.title', descKey: 'sf.s16.desc', slug: 'energy-utilities-esg-intelligence' },
  { icon: <Lock className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s17.title', descKey: 'sf.s17.desc', slug: 'cybersecurity-data-privacy-compliance' },
  { icon: <Database className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s18.title', descKey: 'sf.s18.desc', slug: 'data-platform-governance-ai-enablement' },
  { icon: <LayoutGrid className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s19.title', descKey: 'sf.s19.desc', slug: 'warehouse-management-system' },
  { icon: <Cpu className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s20.title', descKey: 'sf.s20.desc', slug: 'iot-wms-spare-parts' },
  { icon: <BarChart3 className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.s21.title', descKey: 'sf.s21.desc', slug: 'copper-refinery-operations-intelligence' },
];

const enterpriseSolutions = [
  { icon: <DollarSign className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.e1.title', descKey: 'sf.e1.desc', slug: 'finance-cost-intelligence' },
  { icon: <ShoppingCart className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.e2.title', descKey: 'sf.e2.desc', slug: 'procurement-supplier-intelligence' },
  { icon: <Users className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.e3.title', descKey: 'sf.e3.desc', slug: 'workforce-hr-intelligence' },
  { icon: <FileText className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.e4.title', descKey: 'sf.e4.desc', slug: 'legal-contracts-compliance-management' },
  { icon: <HeadphonesIcon className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.e5.title', descKey: 'sf.e5.desc', slug: 'customer-order-service-intelligence' },
  { icon: <FolderKanban className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sf.e6.title', descKey: 'sf.e6.desc', slug: 'project-portfolio-intelligence' },
];

const metrics = [
  { value: '24', labelKey: 'sf.stat1' },
  { value: '18+', labelKey: 'sf.stat2' },
  { value: '4-8 wk', labelKey: 'sf.stat3' },
  { value: '99.9%', labelKey: 'sf.stat4' },
];

const faqs = [
  { qKey: 'sf.faq1.q', aKey: 'sf.faq1.a' },
  { qKey: 'sf.faq2.q', a: 'We offer 24 solutions: 18 covering shopfloor operations and 6 covering enterprise and corporate functions. All built to scale from a single pilot line to multi-plant deployment.' },
  { qKey: 'sf.faq3.q', aKey: 'sf.faq3.a' },
  { qKey: 'sf.faq4.q', aKey: 'sf.faq4.a' },
  { qKey: 'sf.faq5.q', aKey: 'sf.faq5.a' },
  { qKey: 'sf.faq6.q', aKey: 'sf.faq6.a' },
  { qKey: 'sf.faq7.q', aKey: 'sf.faq7.a' },
  { qKey: 'sf.faq8.q', aKey: 'sf.faq8.a' },
];

export default function SmartFactory() {
  const { t } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pt-16">
      <PageHero
        {...{tag: t('sf.tag')}} tag={t('sf.tag')}
        title={t('sf.title')}
        subtitle={t('sf.sub')}
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=90&fit=crop&auto=format"
      />

      {/* Metrics */}
      <section className="border-y border-[#2a2a2a] py-12 px-4 md:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-[#d4af37] mb-1">{m.value}</div>
              <div className="text-[#666] text-xs leading-snug">{t(m.labelKey)}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shopfloor Solutions */}
      <section className="py-20 px-4 md:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">{t('sf.shopfloor.tag')}</span>
            <h2 className="font-display text-3xl md:text-4xl mb-3">{t('sf.shopfloor.title')}</h2>
            <p className="text-[#666] text-sm max-w-2xl">{t('sf.shopfloor.sub')}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shopfloorSolutions.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.06 }}>
                <Link
                  to={`/smart-factory/${s.slug}`}
                  className="group flex items-start gap-4 p-6 bg-[#111] border border-[#2a2a2a] rounded-xl hover:border-[#d4af37]/40 hover:bg-[#151515] transition-all duration-300 h-full"
                >
                  <div className="p-2 bg-[#d4af37]/10 rounded-lg flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors mt-0.5">
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-sm mb-1.5 group-hover:text-[#d4af37] transition-colors leading-snug">{t(s.titleKey)}</h3>
                    <p className="text-[#555] text-xs leading-relaxed mb-3">{t(s.descKey)}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-[#444] group-hover:text-[#d4af37] transition-colors">
                      Explore <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 px-4 md:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">{t('sf.enterprise.tag')}</span>
            <h2 className="font-display text-3xl md:text-4xl mb-3">{t('sf.enterprise.title')}</h2>
            <p className="text-[#666] text-sm max-w-2xl">{t('sf.enterprise.sub')}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {enterpriseSolutions.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link
                  to={`/smart-factory/${s.slug}`}
                  className="group flex items-start gap-4 p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-[#d4af37]/40 hover:bg-[#1e1e1e] transition-all duration-300 h-full"
                >
                  <div className="p-2 bg-[#d4af37]/10 rounded-lg flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors mt-0.5">
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-sm mb-1.5 group-hover:text-[#d4af37] transition-colors leading-snug">{t(s.titleKey)}</h3>
                    <p className="text-[#555] text-xs leading-relaxed mb-3">{t(s.descKey)}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-[#444] group-hover:text-[#d4af37] transition-colors">
                      Explore <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-8 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">{t('sf.faq.tag')}</span>
            <h2 className="font-display text-3xl md:text-4xl">{t('sf.faq.title')}</h2>
          </motion.div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="border border-[#2a2a2a] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-[#111] hover:bg-[#151515] transition-colors"
                >
                  <span className="font-display text-sm text-white">{t(faq.qKey)}</span>
                  {openFaq === i
                    ? <Minus className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    : <Plus className="w-4 h-4 text-[#555] flex-shrink-0" />
                  }
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[#666] text-sm leading-relaxed bg-[#111]">{t(faq.aKey)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl mb-4">{t('sf.cta.title')}</h2>
            <p className="text-[#666] text-sm mb-8 max-w-xl mx-auto leading-relaxed">
              Schedule a free assessment with our Industry 4.0 specialists. A pilot line deployment typically goes live in 4-8 weeks.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#e5c24a] transition-colors font-display text-sm"
            >
              Book Free Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
