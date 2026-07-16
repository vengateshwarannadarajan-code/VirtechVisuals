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
  { icon: <BarChart3 className="w-6 h-6 text-[#d4af37]" />, title: 'Production Performance & Planning', desc: 'Improve OEE/OLE and delivery with real-time control and smart scheduling.', slug: 'production-performance-planning' },
  { icon: <GitMerge className="w-6 h-6 text-[#d4af37]" />, title: 'Process Intelligence & Optimization', desc: 'Detect deviations, eliminate bottlenecks, and drive continuous process improvement.', slug: 'process-intelligence-optimization' },
  { icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />, title: 'Quality Intelligence', desc: 'Digitize inspections, reduce defects, and make quality audit-ready.', slug: 'quality-intelligence' },
  { icon: <GitBranch className="w-6 h-6 text-[#d4af37]" />, title: 'Traceability & Genealogy', desc: 'Track every batch, lot, and serial - forward and backward - with audit-ready evidence.', slug: 'traceability-genealogy' },
  { icon: <Wrench className="w-6 h-6 text-[#d4af37]" />, title: 'Maintenance & Reliability Intelligence', desc: 'Cut breakdowns using structured PM, work orders, and reliability KPIs.', slug: 'maintenance-reliability-intelligence' },
  { icon: <Package className="w-6 h-6 text-[#d4af37]" />, title: 'Warehouse Intelligence', desc: 'Increase inventory accuracy and dispatch speed with disciplined workflows.', slug: 'warehouse-intelligence' },
  { icon: <Truck className="w-6 h-6 text-[#d4af37]" />, title: 'Intralogistics & Material Flow', desc: 'Optimize line feeding, staging, and WIP movement with full visibility.', slug: 'intralogistics-material-flow' },
  { icon: <MapPin className="w-6 h-6 text-[#d4af37]" />, title: 'Spatial Intelligence & Asset Tracking', desc: 'Track assets and enforce location-based rules using BLE, UWB, GPS, and LoRaWAN.', slug: 'spatial-intelligence-asset-tracking' },
  { icon: <Eye className="w-6 h-6 text-[#d4af37]" />, title: 'Vision Intelligence', desc: 'Use cameras and AI to strengthen quality, safety, and process discipline.', slug: 'vision-intelligence' },
  { icon: <Bot className="w-6 h-6 text-[#d4af37]" />, title: 'Robotics & Physical AI', desc: 'Enable AMR/AGV/cobots with fleet orchestration, safety, and mission analytics.', slug: 'robotics-physical-ai' },
  { icon: <Box className="w-6 h-6 text-[#d4af37]" />, title: 'Digital Twins & Simulation', desc: 'Simulate factory layouts, flows, and scenarios before making physical changes.', slug: 'digital-twins-simulation' },
  { icon: <Wifi className="w-6 h-6 text-[#d4af37]" />, title: 'Industrial IoT & OT-IT Integration', desc: 'Connect PLCs, sensors, and enterprise systems into a unified data architecture.', slug: 'industrial-iot-ot-it-integration' },
  { icon: <ClipboardList className="w-6 h-6 text-[#d4af37]" />, title: 'Manufacturing Execution & Workflow Automation', desc: 'Digitize SOPs, approvals, and action closure with role-based workflows.', slug: 'manufacturing-execution-workflow-automation' },
  { icon: <Bell className="w-6 h-6 text-[#d4af37]" />, title: 'Smart Notifications & Control Tower Operations', desc: 'Ensure the right people act at the right time with structured escalation.', slug: 'smart-notifications-control-tower' },
  { icon: <ShieldAlert className="w-6 h-6 text-[#d4af37]" />, title: 'Safety, EHS & Permit-to-Work', desc: 'Enforce zone safety, permits, incident reporting, and compliance logging.', slug: 'safety-ehs-permit-to-work' },
  { icon: <Zap className="w-6 h-6 text-[#d4af37]" />, title: 'Energy, Utilities & ESG Intelligence', desc: 'Monitor consumption, detect anomalies, and track sustainability KPIs.', slug: 'energy-utilities-esg-intelligence' },
  { icon: <Lock className="w-6 h-6 text-[#d4af37]" />, title: 'Cybersecurity & Data Privacy Compliance', desc: 'Protect IT/OT infrastructure and ensure GDPR, DPDP, HIPAA readiness.', slug: 'cybersecurity-data-privacy-compliance' },
  { icon: <Database className="w-6 h-6 text-[#d4af37]" />, title: 'Data Platform, Governance & AI Enablement', desc: 'Build a unified data foundation with quality, governance, and AI lifecycle management.', slug: 'data-platform-governance-ai-enablement' },
  { icon: <LayoutGrid className="w-6 h-6 text-[#d4af37]" />, title: 'Warehouse Management System (WMS)', desc: 'End-to-end warehouse operations with real-time inventory accuracy and optimized fulfillment.', slug: 'warehouse-management-system' },
  { icon: <Cpu className="w-6 h-6 text-[#d4af37]" />, title: 'IoT-Based WMS for Spare Parts', desc: 'Smart spare parts inventory with IoT sensors, auto-replenishment, and predictive stock management.', slug: 'iot-wms-spare-parts' },
  { icon: <BarChart3 className="w-6 h-6 text-[#d4af37]" />, title: 'Copper Refinery Operations Intelligence', desc: 'Tankhouse production planning, stripping and changeover decisions, crane scheduling, PLC-driven readings and SAP/ERP-integrated forecasting for electrolytic copper refineries.', slug: 'copper-refinery-operations-intelligence' },
];

const enterpriseSolutions = [
  { icon: <DollarSign className="w-6 h-6 text-[#d4af37]" />, title: 'Finance & Cost Intelligence', desc: 'Track budget vs actual, cost centers, and the true cost of downtime and quality failures.', slug: 'finance-cost-intelligence' },
  { icon: <ShoppingCart className="w-6 h-6 text-[#d4af37]" />, title: 'Procurement & Supplier Intelligence', desc: 'Streamline PR to PO workflows and manage supplier quality and risk.', slug: 'procurement-supplier-intelligence' },
  { icon: <Users className="w-6 h-6 text-[#d4af37]" />, title: 'Workforce & HR Intelligence', desc: 'Manage attendance, skills, training, and workforce productivity.', slug: 'workforce-hr-intelligence' },
  { icon: <FileText className="w-6 h-6 text-[#d4af37]" />, title: 'Legal, Contracts & Compliance Management', desc: 'Manage contracts, renewals, NDAs, and compliance calendars digitally.', slug: 'legal-contracts-compliance-management' },
  { icon: <HeadphonesIcon className="w-6 h-6 text-[#d4af37]" />, title: 'Customer, Order & Service Intelligence', desc: 'Track order status, OTD, complaints, warranty, and service SLAs.', slug: 'customer-order-service-intelligence' },
  { icon: <FolderKanban className="w-6 h-6 text-[#d4af37]" />, title: 'Project & Portfolio Intelligence', desc: 'Manage programs, milestones, risks, and multi-site rollout tracking.', slug: 'project-portfolio-intelligence' },
];

const metrics = [
  { value: '24', label: 'Solutions across shopfloor & enterprise' },
  { value: '18+', label: 'Industries served' },
  { value: '4-8 wk', label: 'Pilot deployment timeline' },
  { value: '99.9%', label: 'System uptime SLA' },
];

const faqs = [
  { q: 'What is a Smart Factory solution?', a: 'A Smart Factory solution connects machines, people, and processes through digital technologies like IIoT, AI, and real-time analytics to improve manufacturing efficiency, quality, and safety.' },
  { q: 'How many solutions does Virtech Visuals offer?', a: 'We offer 24 solutions: 18 covering shopfloor operations and 6 covering enterprise and corporate functions. All built to scale from a single pilot line to multi-plant deployment.' },
  { q: 'Can solutions be deployed independently?', a: 'Yes. Every solution is modular and can be deployed standalone or integrated with others. You can start with one area like OEE monitoring or quality inspection and expand from there.' },
  { q: 'How long does implementation typically take?', a: 'A pilot line deployment typically goes live in 4-8 weeks. Full multi-plant rollouts are phased over 3-12 months depending on scope and complexity.' },
  { q: 'Do you integrate with existing ERP and MES systems?', a: 'Yes. We integrate with SAP, Oracle, Microsoft Dynamics, Infor, and all major MES platforms through standard APIs, OPC-UA, and custom connectors.' },
  { q: 'What industries do your solutions support?', a: 'Our solutions are deployed across automotive, pharma, food & beverage, chemicals, oil & gas, metals & mining, electronics, and FMCG among 18+ industries.' },
  { q: 'Is training provided for shopfloor operators?', a: 'Yes. Every deployment includes structured operator training, management dashboard walkthroughs, and a hypercare period post go-live. We also offer ongoing training programmes.' },
  { q: 'What ROI can manufacturers expect?', a: 'Clients typically see 20-45% OEE improvement, 30-60% reduction in unplanned downtime, and 15-40% quality defect reduction within the first 6 months of deployment.' },
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
        image="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=90&fit=crop&auto=format"
      />

      {/* Metrics */}
      <section className="border-y border-[#2a2a2a] py-12 px-4 md:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-[#d4af37] mb-1">{m.value}</div>
              <div className="text-[#666] text-xs leading-snug">{m.label}</div>
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
                    <h3 className="font-display text-sm mb-1.5 group-hover:text-[#d4af37] transition-colors leading-snug">{s.title}</h3>
                    <p className="text-[#555] text-xs leading-relaxed mb-3">{s.desc}</p>
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
                    <h3 className="font-display text-sm mb-1.5 group-hover:text-[#d4af37] transition-colors leading-snug">{s.title}</h3>
                    <p className="text-[#555] text-xs leading-relaxed mb-3">{s.desc}</p>
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
                  <span className="font-display text-sm text-white">{faq.q}</span>
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
                      <p className="px-5 pb-5 text-[#666] text-sm leading-relaxed bg-[#111]">{faq.a}</p>
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
