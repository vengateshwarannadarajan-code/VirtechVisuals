import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';
import { useI18n } from '../i18n/context';
import {
  ArrowRight, Cpu, Brain, Layers, TrendingUp,
  BarChart3, ShieldCheck, Wrench, Package, Eye, GitBranch,
  Code2, Cloud, Wifi, Lock, UserCheck,
  DoorOpen, AlertTriangle, Navigation, HeartPulse,
  MessageCircle, Mail,
} from 'lucide-react';

export default function Home() {
  const { t } = useI18n();

  const statsData = [
    { value: '24',    key: 'home.stats.solutions' },
    { value: '40%',   key: 'home.stats.gain' },
    { value: '18+',   key: 'home.stats.industries' },
    { value: '99.9%', key: 'home.stats.uptime' },
  ];

  const highlights = [
    {
      tagKey:   'home.digi.tag',
      titleKey: 'home.digi.title',
      descKey:  'home.digi.desc',
      ctaKey:   'home.digi.cta',
      to:       '/smart-factory',
      image:    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900',
    },
    {
      tagKey:   'home.studio.tag',
      titleKey: 'home.studio.title',
      descKey:  'home.studio.desc',
      ctaKey:   'home.studio.cta',
      to:       '/creative-studio',
      image:    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900',
    },
  ];

  const solutions = [
    { icon: <BarChart3 className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sol.production', descKey: 'sol.production.desc', to: '/smart-factory/production-performance-planning' },
    { icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sol.quality', descKey: 'sol.quality.desc', to: '/smart-factory/quality-intelligence' },
    { icon: <Wrench className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sol.maintenance', descKey: 'sol.maintenance.desc', to: '/smart-factory/maintenance-reliability-intelligence' },
    { icon: <Package className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sol.warehouse', descKey: 'sol.warehouse.desc', to: '/smart-factory/warehouse-intelligence' },
    { icon: <Eye className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sol.spatial', descKey: 'sol.spatial.desc', to: '/smart-factory/spatial-intelligence-asset-tracking' },
    { icon: <GitBranch className="w-6 h-6 text-[#d4af37]" />, titleKey: 'sol.digital', descKey: 'sol.digital.desc', to: '/smart-factory/digital-twins-simulation' },
  ];

  const services = [
    { icon: <Code2 className="w-6 h-6 text-[#d4af37]" />, titleKey: 'svc.custom', descKey: 'svc.custom.desc', to: '/services/custom-software' },
    { icon: <UserCheck className="w-6 h-6 text-[#d4af37]" />, titleKey: 'svc.talent', descKey: 'svc.talent.desc', to: '/services/talent-solutions' },
    { icon: <Brain className="w-6 h-6 text-[#d4af37]" />, titleKey: 'svc.ai', descKey: 'svc.ai.desc', to: '/ai' },
    { icon: <Cloud className="w-6 h-6 text-[#d4af37]" />, titleKey: 'svc.cloud', descKey: 'svc.cloud.desc', to: '/services/cloud-devops' },
    { icon: <Wifi className="w-6 h-6 text-[#d4af37]" />, titleKey: 'svc.iot', descKey: 'svc.iot.desc', to: '/services/iot-edge-computing' },
    { icon: <Lock className="w-6 h-6 text-[#d4af37]" />, titleKey: 'svc.cyber', descKey: 'svc.cyber.desc', to: '/services/cybersecurity' },
  ];

  const products = [
    { icon: <DoorOpen className="w-6 h-6 text-[#d4af37]" />, name: 'GateKeeper', taglineKey: 'prod.gatekeeper.tag', descKey: 'prod.gatekeeper.desc', to: '/products/gatekeeper' },
    { icon: <AlertTriangle className="w-6 h-6 text-[#d4af37]" />, name: 'IncidentGPT', taglineKey: 'prod.incident.tag', descKey: 'prod.incident.desc', to: '/products/incidentgpt' },
    { icon: <Eye className="w-6 h-6 text-[#d4af37]" />, name: 'VisionSafe AI', taglineKey: 'prod.vision.tag', descKey: 'prod.vision.desc', to: '/products/visionsafe-ai' },
    { icon: <Navigation className="w-6 h-6 text-[#d4af37]" />, name: 'DigiTrack', taglineKey: 'prod.digitrack.tag', descKey: 'prod.digitrack.desc', to: '/products/digitrack' },
    { icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />, name: 'PermitFlows', taglineKey: 'prod.permit.tag', descKey: 'prod.permit.desc', to: '/products/permitflows' },
    { icon: <HeartPulse className="w-6 h-6 text-[#d4af37]" />, name: 'PredictPulse', taglineKey: 'prod.predict.tag', descKey: 'prod.predict.desc', to: '/products/predictpulse' },
  ];

  const whyItems = [
    { icon: <Cpu className="w-5 h-5 text-[#d4af37]" />, labelKey: 'why.sf', bodyKey: 'why.sf.desc' },
    { icon: <Layers className="w-5 h-5 text-[#d4af37]" />, labelKey: 'why.svc', bodyKey: 'why.svc.desc' },
    { icon: <Brain className="w-5 h-5 text-[#d4af37]" />, labelKey: 'why.ai', bodyKey: 'why.ai.desc' },
    { icon: <Package className="w-5 h-5 text-[#d4af37]" />, labelKey: 'why.prod', bodyKey: 'why.prod.desc' },
    { icon: <Cloud className="w-5 h-5 text-[#d4af37]" />, labelKey: 'why.platform', bodyKey: 'why.platform.desc' },
    { icon: <TrendingUp className="w-5 h-5 text-[#d4af37]" />, labelKey: 'why.results', bodyKey: 'why.results.desc' },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex">
          <div className="w-1/2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=960" alt="Industrial" className="w-full h-full object-cover scale-110" />
          </div>
          <div className="w-1/2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=960" alt="Creative" className="w-full h-full object-cover scale-110" />
          </div>
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/40 text-[#d4af37] text-xs tracking-widest uppercase mb-8">
            {t('home.badge')}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="font-display text-6xl md:text-8xl mb-6 leading-tight">
            Virtech Visuals
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-lg md:text-xl text-[#c0c0c0] mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('home.sub')}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-[24px] justify-center mb-6">
            <Link to="/smart-factory" className="px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300 flex items-center justify-center gap-2">
              {t('home.cta.factory')} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/creative-studio" className="px-8 py-4 border border-white/20 text-white rounded-lg hover:border-[#d4af37]/60 hover:text-[#d4af37] transition-all duration-300 flex items-center justify-center gap-2">
              {t('home.cta.creative')} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center justify-center gap-[24px] text-sm mb-8">
            <a href="https://wa.me/33780843487" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#c0c0c0] hover:text-[#d4af37] transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="mailto:business@virtechvisuals.com" className="flex items-center gap-1.5 text-[#c0c0c0] hover:text-[#d4af37] transition-colors">
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-[#aaa] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#d4af37]/60 to-transparent" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#2a2a2a] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-[32px]">
          {statsData.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-[#d4af37] mb-2">{s.value}</div>
              <div className="text-[#c0c0c0] text-sm">{t(s.key)}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Two Studios */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-4xl md:text-5xl mb-12 text-center">
          {t('home.two.title')}
        </motion.h2>
        {highlights.map((h, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className={`grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-[#2e2e2e] hover:border-[#d4af37]/40 transition-colors duration-300 group md:h-[480px] ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            <div className="relative h-[320px] md:h-full overflow-hidden">
              <img src={h.image} alt={t(h.titleKey)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="bg-[#222] p-10 md:p-14 flex flex-col justify-center h-full">
              <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-4">{t(h.tagKey)}</span>
              <h3 className="font-display text-4xl mb-5">{t(h.titleKey)}</h3>
              <p className="text-[#c0c0c0] leading-relaxed mb-8">{t(h.descKey)}</p>
              <Link to={h.to} className="inline-flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors group/link">
                {t(h.ctaKey)} <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Smart Factory Solutions */}
      <section className="py-24 px-4 md:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">{t('home.sf.tag')}</span>
              <h2 className="font-display text-4xl md:text-5xl">{t('home.sf.title')}</h2>
              <p className="text-[#c0c0c0] mt-4 max-w-2xl text-sm leading-relaxed">{t('home.sf.sub')}</p>
            </div>
            <Link to="/smart-factory" className="inline-flex items-center gap-2 text-sm text-[#d4af37] border border-[#d4af37]/30 px-5 py-2.5 rounded-lg hover:bg-[#d4af37]/10 transition-colors whitespace-nowrap flex-shrink-0">
              {t('home.sf.cta')} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {solutions.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Link to={s.to} className="group flex flex-col gap-4 p-7 bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/40 hover:bg-[#1e1e1e] transition-all duration-300 h-full">
                  <div className="p-2.5 bg-[#d4af37]/10 rounded-lg w-fit group-hover:bg-[#d4af37]/20 transition-colors">{s.icon}</div>
                  <div>
                    <h3 className="font-display text-base mb-2 group-hover:text-[#d4af37] transition-colors">{t(s.titleKey)}</h3>
                    <p className="text-[#bbb] text-xs leading-relaxed">{t(s.descKey)}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-xs text-[#999] group-hover:text-[#d4af37] transition-colors">
                    {t('common.explore')} <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 md:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">{t('home.svc.tag')}</span>
              <h2 className="font-display text-4xl md:text-5xl">{t('home.svc.title')}</h2>
              <p className="text-[#c0c0c0] mt-4 max-w-2xl text-sm leading-relaxed">{t('home.svc.sub')}</p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-[#d4af37] border border-[#d4af37]/30 px-5 py-2.5 rounded-lg hover:bg-[#d4af37]/10 transition-colors whitespace-nowrap flex-shrink-0">
              {t('home.svc.cta')} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Link to={s.to} className="group flex items-start gap-5 p-7 bg-[#222] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/40 hover:bg-[#252525] transition-all duration-300">
                  <div className="p-2.5 bg-[#d4af37]/10 rounded-lg flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors">{s.icon}</div>
                  <div>
                    <h3 className="font-display text-base mb-2 group-hover:text-[#d4af37] transition-colors">{t(s.titleKey)}</h3>
                    <p className="text-[#bbb] text-xs leading-relaxed">{t(s.descKey)}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-[#999] group-hover:text-[#d4af37] transition-colors">
                      {t('svc.explore')} <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-4 md:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">{t('home.prod.tag')}</span>
              <h2 className="font-display text-4xl md:text-5xl">{t('home.prod.title')}</h2>
              <p className="text-[#c0c0c0] mt-4 max-w-2xl text-sm leading-relaxed">{t('home.prod.sub')}</p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm text-[#d4af37] border border-[#d4af37]/30 px-5 py-2.5 rounded-lg hover:bg-[#d4af37]/10 transition-colors whitespace-nowrap flex-shrink-0">
              {t('home.prod.cta')} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {products.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Link to={p.to} className="group flex flex-col gap-5 p-7 bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/40 hover:bg-[#1e1e1e] transition-all duration-300 h-full">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-[#d4af37]/10 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors">{p.icon}</div>
                    <span className="text-[10px] text-[#999] tracking-widest uppercase border border-[#2e2e2e] px-2.5 py-1 rounded-full group-hover:border-[#d4af37]/30 group-hover:text-[#d4af37]/70 transition-colors">{t(p.taglineKey)}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-2 group-hover:text-[#d4af37] transition-colors">{p.name}</h3>
                    <p className="text-[#bbb] text-xs leading-relaxed">{t(p.descKey)}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-xs text-[#999] group-hover:text-[#d4af37] transition-colors">
                    {t('prod.explore')} <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 md:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">{t('home.why.tag')}</span>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl">{t('home.why.title')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#2a2a2a] border border-[#2a2a2a] rounded-2xl overflow-hidden divide-x-0 divide-y divide-[#2a2a2a] md:divide-y-0">
            {whyItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-[#1a1a1a] p-8 flex flex-col gap-4 hover:bg-[#1f1f1f] transition-colors duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#d4af37]/10 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors flex-shrink-0">{item.icon}</div>
                  <h3 className="font-display text-base leading-snug">{t(item.labelKey)}</h3>
                </div>
                <p className="text-[#bbb] text-sm leading-relaxed">{t(item.bodyKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 md:px-8 bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl mb-6">{t('home.cta.title')}</h2>
            <p className="text-[#c0c0c0] text-lg mb-10 max-w-2xl mx-auto">{t('home.cta.sub')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#e5c24a] transition-colors flex items-center justify-center gap-2 font-medium">
                {t('home.cta.btn')} <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://wa.me/33780843487" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-[#25D366]/40 text-[#25D366] rounded-lg hover:bg-[#25D366]/10 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" /> {t('home.cta.wa')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
