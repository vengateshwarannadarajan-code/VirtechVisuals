import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Bot, Eye, TrendingUp, Brain, Search, GitBranch, Cpu, Cloud, Server } from 'lucide-react';
import { useI18n } from '../i18n/context';
import { PageHero } from '../components/PageHero';
import { Footer } from '../components/Footer';

const capabilities = [
  {
    icon: <Bot className="w-7 h-7 text-[#d4af37]" />,
    titleKey: 'ai.cap1.title',
    sub: 'Chatbots + Agents',
    descKey: 'ai.cap1.desc',
    builds: [
      'Document Q&A bots (RAG): SOPs, manuals, tenders, policies, maintenance guides',
      'Department assistants: HR, Finance, IT helpdesk, Ops, Purchase, Safety',
      'Sales/proposal assistant: drafts proposals, scope, emails, estimates',
      'Workflow agents: raise tickets, check status, pull reports, trigger alerts',
      'Multilingual assistants: English / Tamil / Tanglish for frontline teams',
    ],
    features: ['Role-based access', 'Audit logs', 'Feedback loop', 'Secure deployment (cloud/on-prem/hybrid)'],
    queries: [
      '"Show me today\'s downtime reasons by line"',
      '"What is the SOP for line changeover? Give checklist"',
      '"Summarize yesterday\'s shift report + top issues"',
    ],
  },
  {
    icon: <Brain className="w-7 h-7 text-[#d4af37]" />,
    titleKey: 'ai.cap2.title',
    sub: 'Autonomous Agents & Multi-Agent Systems',
    descKey: 'ai.cap2.desc',
    builds: [
      'Multi-agent orchestration: coordinated agents for procurement, scheduling, quality, and logistics',
      'Tool-using agents: agents that call APIs, query databases, trigger workflows, and update records',
      'Planning agents: break complex goals into sub-tasks, execute sequentially or in parallel',
      'Supervisory agents: monitor other agents, handle exceptions, escalate when confidence is low',
      'Human-in-the-loop agents: autonomous execution with approval gates for critical decisions',
    ],
    features: ['Agent memory & context management', 'Multi-step reasoning chains', 'Guardrails & safety controls', 'Real-time observability & tracing'],
    queries: [
      '"Agent: detected quality deviation, adjusted parameters, notified supervisor, logged corrective action"',
      '"Agent: received PO, checked inventory, created production order, scheduled dispatch, sent confirmation"',
      '"Agent: analyzed energy spike, correlated with machine logs, identified root cause, raised maintenance ticket"',
    ],
  },
  {
    icon: <Eye className="w-7 h-7 text-[#d4af37]" />,
    titleKey: 'ai.cap3.title',
    sub: 'CCTV / Mobile / Industrial Camera',
    descKey: 'ai.cap3.desc',
    builds: [
      'PPE compliance (helmet/vest/mask), restricted-zone alerts',
      'Defect detection (surface defects, missing parts, wrong assembly)',
      'Counting & tracking (in/out count, queue length, pallet count)',
      'OCR + label reading (serial numbers, invoices, packing labels)',
      'Attendance + access (face verification + door lock integration)',
    ],
    features: ['Cloud AI (central processing)', 'Edge AI (local processing for speed & privacy)'],
    queries: ['Reduce manual QC checks', 'Prevent safety incidents', 'Improve dispatch accuracy'],
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-[#d4af37]" />,
    titleKey: 'ai.cap4.title',
    sub: 'Forecasting, Anomaly, Optimization',
    descKey: 'ai.cap4.desc',
    builds: [
      'Predictive maintenance (failure risk, remaining useful life estimation)',
      'Anomaly detection (energy spikes, abnormal cycle time, machine drift)',
      'Demand & inventory forecasting',
      'Quality prediction (scrap risk based on parameters)',
      'Risk scoring (SLA breach risk, delay risk, compliance risk)',
    ],
    features: ['Risk score dashboards', '"Next best action" recommendations', 'Auto-generated daily/weekly insights'],
    queries: [],
  },
  {
    icon: <Cpu className="w-7 h-7 text-[#d4af37]" />,
    titleKey: 'ai.cap5.title',
    sub: 'MES / WMS / Production Intelligence',
    descKey: 'ai.cap5.desc',
    builds: [
      'Downtime classification + root cause insights',
      'OEE/OLE analytics with reason codes and shift comparisons',
      'Production plan vs actual deviation prediction',
      'Intelligent escalation rules (who to notify, when, and how)',
    ],
    features: ['WhatsApp / Email / Teams / Mobile app / Dashboard alerts', 'Escalation matrix by role, severity, time threshold'],
    queries: [],
  },
  {
    icon: <Search className="w-7 h-7 text-[#d4af37]" />,
    titleKey: 'ai.cap6.title',
    sub: 'Extract Meaning at Scale',
    descKey: 'ai.cap6.desc',
    builds: [
      'Enterprise semantic search (documents, PDFs, tickets, emails)',
      'Auto-classification of complaints and tickets',
      'RFP / contract extraction: milestones, payment terms, obligations, risks',
      'Automated report writing: daily/weekly status, insights, exceptions',
    ],
    features: [],
    queries: [],
  },
  {
    icon: <GitBranch className="w-7 h-7 text-[#d4af37]" />,
    titleKey: 'ai.cap7.title',
    sub: 'Data Engineering + Model Ops',
    descKey: 'ai.cap7.desc',
    builds: [
      'Data pipelines (APIs, ETL, connectors, IoT streams)',
      'Data quality rules + master data alignment',
      'Model deployment + monitoring (accuracy, drift, latency)',
      'Versioning, rollback, retraining plan',
      'Security controls + audit logging + access management',
    ],
    features: [],
    queries: [],
  },
];

const useCasesByCategory = [
  {
    category: 'Manufacturing',
    cases: [
      'Predictive maintenance alerts with failure probability + recommended action',
      'Downtime intelligence, auto-tag cause, top reasons, shift-wise comparison',
      'Defect detection (vision), scratches, wrong assembly, missing parts',
      'Tool life prediction (CNC), reduce breakage, plan tool change',
      'Process anomaly detection, drift in cycle time, pressure, temperature',
      'Energy optimization, spot abnormal consumption by equipment & shift',
      'Digital shift report generator, structured summary + action list',
    ],
  },
  {
    category: 'Warehousing & Logistics',
    cases: [
      'Smart inward QA (barcode + image validation)',
      'Put-away recommendation (space optimization & velocity-based slotting)',
      'Pick optimization (batching + shortest path suggestions)',
      'Dispatch accuracy (OCR packing label + carton verification)',
      'Delay risk prediction (ETA risk and proactive escalation)',
      'Damage claim automation (image evidence + auto ticket)',
    ],
  },
  {
    category: 'Sales, Service & Support',
    cases: [
      'AI helpdesk (ticket summarization + recommended response)',
      'Lead scoring (priority leads based on behavior & signals)',
      'Proposal generator (scope + timeline + assumptions + risks)',
      'Call/meeting summary (action items + follow-ups)',
    ],
  },
  {
    category: 'HR & Admin',
    cases: [
      'HR assistant (policy, leave, onboarding, forms)',
      'Employee query bot (payroll, documents, letters)',
      'Compliance assistant (checklists, SOP adherence questions)',
    ],
  },
];

const workflows = [
  {
    title: 'WhatsApp Escalation for Downtime',
    steps: [
      'Machine downtime detected from MES/IoT',
      'Rule engine checks: line, severity, duration, shift',
      'AI adds context: last 3 similar incidents + probable cause',
      'WhatsApp sent to maintenance + supervisor',
      'If not acknowledged in X mins, escalates to next level',
      'Resolution captured, learning improves future recommendations',
    ],
  },
  {
    title: 'SOP Assistant for Operations',
    steps: [
      'User asks: "What is changeover SOP for Line 3?"',
      'AI fetches approved SOP + checklist + safety steps',
      'User confirms steps done',
      'System logs compliance and generates completion record',
    ],
  },
  {
    title: 'Vision-Based Quality Gate',
    steps: [
      'Product passes camera station',
      'AI detects defect probability',
      'If above threshold: reject + store image evidence',
      'Auto ticket created with defect type, time, batch, operator',
      'Dashboard shows trends & root causes',
    ],
  },
];

const engagementModels = [
  { duration: '2 to 4 weeks', phaseKey: 'ai.phase1', descKey: 'ai.phase1.desc' },
  { duration: '6 to 10 weeks', phaseKey: 'ai.phase2', descKey: 'ai.phase2.desc' },
  { duration: 'Quarterly', phaseKey: 'ai.phase3', descKey: 'ai.phase3.desc' },
  { duration: 'Ongoing', phase: 'Managed AI Ops', desc: 'Continuous improvements + monitoring + new use cases' },
];

const deliverables = [
  'AI opportunity assessment + use case priority matrix',
  'Data readiness report (sources, gaps, cleaning needs)',
  'POC build (2 to 4 weeks) with measurable KPIs',
  'Production build (APIs, dashboards, alerts, audit logs)',
  'Model monitoring plan + retraining cycle',
  'SOPs + user training + handover documentation',
];

const integrations = ['ERP', 'MES', 'WMS', 'CRM', 'SCADA', 'PLC', 'IoT Gateways', 'WhatsApp', 'Email', 'Teams', 'Mobile Apps', 'Web Dashboards'];

export default function AI() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <PageHero
        tag="AI at Digisailor"
        title="Build Practical AI That Delivers Results"
        subtitle="We help organizations adopt AI that is usable, measurable, secure, and integrated with existing systems like ERP, MES, WMS, CRM, WhatsApp, and Email. From GenAI assistants to predictive maintenance and computer vision, our focus is business outcomes, not just demos."
        image="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=90&fit=crop&auto=format"
      />

      {/* Outcomes */}
      <section className="border-y border-[#2a2a2a] py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#999] text-xs tracking-widest uppercase mb-5">Outcomes We Typically Target</p>
          <div className="flex flex-wrap gap-3">
            {[
              'Reduce downtime & quality defects',
              'Faster reporting & decision cycles',
              'Automate repetitive coordination tasks',
              'Improve compliance, traceability & audit readiness',
              'Increase throughput, SLA adherence & customer satisfaction',
            ].map((outcome, i) => (
              <span key={i} className="px-4 py-2 bg-[#1e1e1e] border border-[#2e2e2e] rounded-full text-sm text-[#ccc] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" /> {outcome}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-display text-3xl md:text-5xl mb-3">AI Capability Areas</h2>
          <p className="text-[#c0c0c0]">End-to-end AI capabilities, from GenAI chatbots to computer vision and MLOps, all designed for enterprise integration.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-7 bg-[#1e1e1e] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="p-3 bg-[#d4af37]/10 rounded-lg flex-shrink-0">{cap.icon}</div>
                <div>
                  <h3 className="font-display text-xl mb-0.5">{t(cap.titleKey)}</h3>
                  <p className="text-[#999] text-xs">{cap.sub}</p>
                </div>
              </div>
              <p className="text-[#c0c0c0] text-sm leading-relaxed mb-5">{t(cap.descKey)}</p>
              {cap.builds.length > 0 && (
                <div className="mb-5">
                  <p className="text-[#999] text-xs tracking-widest uppercase mb-3">We Build</p>
                  <ul className="space-y-1.5">
                    {cap.builds.map((b, bi) => (
                      <li key={bi} className="text-xs text-[#bbb] flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#d4af37] flex-shrink-0 mt-1.5" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {cap.features.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {cap.features.map((f, fi) => (
                    <span key={fi} className="px-2 py-1 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded text-[10px] text-[#d4af37]">{f}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Case Library */}
      <section className="bg-[#111] py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-3">AI Use Cases by Industry & Function</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCasesByCategory.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-[#d4af37] text-xs tracking-widest uppercase mb-4">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.cases.map((c, ci) => (
                    <li key={ci} className="flex items-start gap-2 text-sm text-[#c0c0c0]">
                      <span className="w-1 h-1 rounded-full bg-[#d4af37] flex-shrink-0 mt-2" /> {c}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Workflow Automations */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl mb-3">AI in Action</h2>
          <p className="text-[#c0c0c0]">Sample Workflow Automations</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {workflows.map((wf, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-[#1e1e1e] border border-[#2e2e2e] rounded-xl"
            >
              <h3 className="font-display text-lg mb-5 text-[#d4af37]">{wf.title}</h3>
              <ol className="space-y-3">
                {wf.steps.map((step, si) => (
                  <li key={si} className="flex items-start gap-3 text-xs text-[#c0c0c0]">
                    <span className="w-5 h-5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">{si + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deployment Options */}
      <section className="bg-[#111] py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl mb-6">Deployment Options</h2>
            <p className="text-[#c0c0c0] text-sm mb-8">Enterprise-grade deployment flexibility with seamless integration into your existing tech stack.</p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: <Cloud className="w-5 h-5" />, label: 'Cloud', desc: 'Fast rollout, scalable, cost-effective' },
                { icon: <Server className="w-5 h-5" />, label: 'On-Premise', desc: 'Data stays inside client network' },
                { icon: <GitBranch className="w-5 h-5" />, label: 'Hybrid', desc: 'Sensitive data on-prem, AI services in cloud' },
              ].map((d, i) => (
                <div key={i} className="p-4 bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg text-center">
                  <div className="text-[#d4af37] mb-2 flex justify-center">{d.icon}</div>
                  <div className="text-sm font-medium mb-1">{d.label}</div>
                  <div className="text-[#aaa] text-xs">{d.desc}</div>
                </div>
              ))}
            </div>
            <h3 className="text-xs text-[#999] tracking-widest uppercase mb-4">Supported Integrations</h3>
            <div className="flex flex-wrap gap-2">
              {integrations.map((integ, i) => (
                <span key={i} className="px-3 py-1.5 bg-[#1a1a1a] border border-[#2e2e2e] rounded-md text-xs text-[#888]">{integ}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl mb-6">Engagement Models</h2>
            <div className="space-y-4 mb-10">
              {engagementModels.map((em, i) => (
                <div key={i} className="flex gap-4 p-4 bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg">
                  <div className="text-[#d4af37] text-xs font-medium w-24 flex-shrink-0">{em.duration}</div>
                  <div>
                    <div className="text-sm font-medium mb-1">{em.phase}</div>
                    <div className="text-[#aaa] text-xs">{em.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="font-display text-xl mb-5">What You Actually Get</h2>
            <ul className="space-y-2">
              {deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#c0c0c0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] flex-shrink-0 mt-2" /> {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Ready to Build AI That Works?</h2>
          <p className="text-[#c0c0c0] mb-8">Let's discuss your AI opportunity, from assessment to production in weeks, not months.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300 font-medium">
              Request AI Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-lg hover:border-[#d4af37]/60 hover:text-[#d4af37] transition-all duration-300">
              Get a POC Plan (2 to 4 weeks)
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
