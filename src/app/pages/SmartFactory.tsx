import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Cpu, BarChart3, ShieldCheck, Wrench, Package, Eye, GitBranch, Zap, Activity, Database } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const solutionGroups = [
  {
    icon: <BarChart3 className="w-6 h-6 text-[#d4af37]" />,
    title: 'Production Performance & Planning',
    items: [
      { name: 'OEE / OLE Monitoring', desc: 'Real-time overall equipment and labour effectiveness tracking across all lines.' },
      { name: 'Production Scheduling & Planning', desc: 'Finite-capacity scheduling with what-if simulation and plan-vs-actual dashboards.' },
      { name: 'Process Intelligence & SPC', desc: 'Statistical process control, recipe management, and process capability analytics.' },
    ],
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />,
    title: 'Quality & Traceability',
    items: [
      { name: 'Quality Intelligence & Inspection', desc: 'Inline digital QC, CAPA management, complaint tracking, and audit-ready records.' },
      { name: 'Traceability & Genealogy', desc: 'Batch and component tracking from raw material to finished goods, with recall management.' },
      { name: 'Vision Intelligence', desc: 'Computer vision for defect detection at 100% throughput and PPE compliance monitoring.' },
    ],
  },
  {
    icon: <Wrench className="w-6 h-6 text-[#d4af37]" />,
    title: 'Maintenance & Reliability',
    items: [
      { name: 'Predictive Maintenance', desc: 'ML models on vibration, thermal, and acoustic data to predict failures weeks ahead.' },
      { name: 'CMMS & Work Orders', desc: 'Structured PM schedules, work order management, and asset reliability KPIs.' },
      { name: 'Asset Tracking (RTLS)', desc: 'Indoor positioning for tools and mobile assets using BLE, UWB, and LoRaWAN.' },
    ],
  },
  {
    icon: <Package className="w-6 h-6 text-[#d4af37]" />,
    title: 'Warehouse & Intralogistics',
    items: [
      { name: 'Warehouse Intelligence', desc: 'Smart slotting, pick optimisation, and real-time inventory accuracy.' },
      { name: 'Intralogistics & Material Flow', desc: 'AGV/AMR orchestration, material scheduling, and shopfloor replenishment.' },
      { name: 'Yard & Dock Management', desc: 'Inbound/outbound coordination, yard slot booking, and driver check-in.' },
    ],
  },
  {
    icon: <Eye className="w-6 h-6 text-[#d4af37]" />,
    title: 'Safety & Compliance',
    items: [
      { name: 'EHS & Safety Intelligence', desc: 'Incident reporting, CAPA, BBS, safety KPIs, and ISO 45001 readiness.' },
      { name: 'Permit-to-Work (PTW)', desc: 'Digital permit issuance with multi-level approvals and active-permit dashboards.' },
      { name: 'Energy & ESG Monitoring', desc: 'Machine-level energy monitoring, carbon tracking, and Scope 1/2/3 ESG reporting.' },
    ],
  },
  {
    icon: <GitBranch className="w-6 h-6 text-[#d4af37]" />,
    title: 'Digital Twin & Automation',
    items: [
      { name: 'Digital Twins & Simulation', desc: '3D plant twins with live sensor overlay, remote diagnostics, and virtual commissioning.' },
      { name: 'Robotics & Physical AI', desc: 'Cobot integration, robotic process automation, and physical AI for autonomous operations.' },
      { name: 'MES & Paperless Manufacturing', desc: 'Electronic batch records, e-travellers, and full shopfloor digitisation.' },
    ],
  },
  {
    icon: <Zap className="w-6 h-6 text-[#d4af37]" />,
    title: 'Connectivity & Intelligence',
    items: [
      { name: 'IIoT & OT-IT Integration', desc: 'Edge gateways, OPC-UA/MQTT protocol bridging, and unified data layer.' },
      { name: 'Control Tower & Alerting', desc: 'Real-time notifications, escalation workflows, and war room dashboards.' },
      { name: 'Cybersecurity (OT/ICS)', desc: 'Zero trust architecture, OT network segmentation, and GDPR/PDPA compliance.' },
    ],
  },
  {
    icon: <Database className="w-6 h-6 text-[#d4af37]" />,
    title: 'Data & AI Platform',
    items: [
      { name: 'Data Lakehouse & MDM', desc: 'Unified industrial data platform with master data governance and quality management.' },
      { name: 'AI/ML Pipelines', desc: 'End-to-end MLOps pipelines, model versioning, drift monitoring, and retraining automation.' },
    ],
  },
];

const stats = [
  { value: '24', label: 'Solution Domains' },
  { value: '40%', label: 'Avg OEE Improvement' },
  { value: '61%', label: 'Downtime Reduction' },
  { value: '99.7%', label: 'Defect Detection Rate' },
];

export default function SmartFactory() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <PageHero
        tag="Industry 4.0"
        title="End-to-End Smart Factory"
        subtitle="24 solution domains covering shopfloor operations, enterprise functions, and corporate governance — from pilot to multi-plant scale."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920"
      />

      {/* Stats */}
      <section className="border-y border-[#2a2a2a] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl text-[#d4af37] mb-2">{s.value}</div>
              <div className="text-[#a0a0a0] text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solution Groups */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
        {solutionGroups.map((group, gi) => (
          <motion.div
            key={gi}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.05 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-[#d4af37]/10 rounded-lg">{group.icon}</div>
              <h2 className="font-display text-2xl">{group.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {group.items.map((item, ii) => (
                <div
                  key={ii}
                  className="p-6 bg-[#222] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/40 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-[#777] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#111] py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-6">Ready to digitise your factory?</h2>
          <p className="text-[#a0a0a0] mb-10">Talk to our Smart Factory team. We'll assess your current state, identify quick wins, and build a roadmap to full digitisation.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300"
          >
            Request a Factory Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
