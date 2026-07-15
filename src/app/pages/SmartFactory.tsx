import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  ArrowRight, BarChart3, ShieldCheck, Wrench, Package, Eye, GitBranch,
  Wifi, Lock, Database, Brain, Box, CalendarDays, Activity, MapPin,
  Truck, Bell, FileCheck, ShieldAlert, Zap, ClipboardList, Monitor,
  Bot, Package2,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';

const solutionGroups = [
  {
    label: 'Production Performance',
    solutions: [
      { icon: <BarChart3 className="w-6 h-6 text-[#d4af37]" />, title: 'OEE / OLE Monitoring', desc: 'Real-time overall equipment and labour effectiveness tracking with loss analysis across all lines.' },
      { icon: <CalendarDays className="w-6 h-6 text-[#d4af37]" />, title: 'Production Scheduling', desc: 'Finite-capacity scheduling with what-if simulation and live plan-vs-actual dashboards.' },
      { icon: <Activity className="w-6 h-6 text-[#d4af37]" />, title: 'Process Intelligence & SPC', desc: 'Statistical process control, recipe management, and process capability analytics.' },
    ],
  },
  {
    label: 'Quality & Traceability',
    solutions: [
      { icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />, title: 'Quality Intelligence', desc: 'Inline digital QC, CAPA management, complaint tracking, and audit-ready records.' },
      { icon: <GitBranch className="w-6 h-6 text-[#d4af37]" />, title: 'Traceability & Genealogy', desc: 'Batch and component tracking from raw material to finished goods with recall management.' },
      { icon: <Eye className="w-6 h-6 text-[#d4af37]" />, title: 'Vision Intelligence', desc: 'Computer vision for 100% inline defect detection, PPE compliance, and label verification.' },
    ],
  },
  {
    label: 'Maintenance & Reliability',
    solutions: [
      { icon: <Wrench className="w-6 h-6 text-[#d4af37]" />, title: 'Predictive Maintenance', desc: 'ML on vibration, thermal, and acoustic data to predict failures weeks in advance.' },
      { icon: <ClipboardList className="w-6 h-6 text-[#d4af37]" />, title: 'CMMS & Work Orders', desc: 'Structured PM schedules, work order management, and asset reliability KPIs.' },
      { icon: <MapPin className="w-6 h-6 text-[#d4af37]" />, title: 'Asset Tracking (RTLS)', desc: 'Indoor positioning for tools and mobile assets using BLE, UWB, and LoRaWAN.' },
    ],
  },
  {
    label: 'Warehouse & Intralogistics',
    solutions: [
      { icon: <Package className="w-6 h-6 text-[#d4af37]" />, title: 'Warehouse Intelligence', desc: 'Smart slotting, pick optimisation, and real-time inventory accuracy across locations.' },
      { icon: <Truck className="w-6 h-6 text-[#d4af37]" />, title: 'Intralogistics & Material Flow', desc: 'AGV/AMR orchestration, material scheduling, and shopfloor replenishment automation.' },
      { icon: <Package2 className="w-6 h-6 text-[#d4af37]" />, title: 'Yard & Dock Management', desc: 'Inbound/outbound coordination, yard slot booking, and driver check-in workflows.' },
    ],
  },
  {
    label: 'Safety & Compliance',
    solutions: [
      { icon: <ShieldAlert className="w-6 h-6 text-[#d4af37]" />, title: 'EHS & Safety Intelligence', desc: 'Incident reporting, CAPA, BBS tracking, safety KPIs, and ISO 45001 readiness.' },
      { icon: <FileCheck className="w-6 h-6 text-[#d4af37]" />, title: 'Permit-to-Work (PTW)', desc: 'Digital permit issuance with multi-level approvals and active-permit dashboards.' },
      { icon: <Zap className="w-6 h-6 text-[#d4af37]" />, title: 'Energy & ESG Monitoring', desc: 'Machine-level energy monitoring, carbon tracking, and Scope 1/2/3 ESG reporting.' },
    ],
  },
  {
    label: 'Digital Twin & Automation',
    solutions: [
      { icon: <Box className="w-6 h-6 text-[#d4af37]" />, title: 'Digital Twins & Simulation', desc: '3D plant twins with live sensor overlay, remote diagnostics, and virtual commissioning.' },
      { icon: <Bot className="w-6 h-6 text-[#d4af37]" />, title: 'Robotics & Physical AI', desc: 'Cobot integration, robotic process automation, and physical AI for autonomous operations.' },
      { icon: <Monitor className="w-6 h-6 text-[#d4af37]" />, title: 'MES & Paperless Manufacturing', desc: 'Electronic batch records, e-travellers, and complete shopfloor digitisation.' },
    ],
  },
  {
    label: 'Connectivity & Intelligence',
    solutions: [
      { icon: <Wifi className="w-6 h-6 text-[#d4af37]" />, title: 'Industrial IoT & OT-IT Integration', desc: 'Edge gateways, OPC-UA/MQTT protocol bridging, and unified industrial data layer.' },
      { icon: <Bell className="w-6 h-6 text-[#d4af37]" />, title: 'Control Tower & Alerting', desc: 'Real-time notifications, escalation workflows, and war room command dashboards.' },
      { icon: <Lock className="w-6 h-6 text-[#d4af37]" />, title: 'OT / ICS Cybersecurity', desc: 'Zero trust architecture, OT network segmentation, and GDPR/PDPA compliance.' },
    ],
  },
  {
    label: 'Data & AI Platform',
    solutions: [
      { icon: <Database className="w-6 h-6 text-[#d4af37]" />, title: 'Data Lakehouse & MDM', desc: 'Unified industrial data platform with master data governance and quality management.' },
      { icon: <Brain className="w-6 h-6 text-[#d4af37]" />, title: 'AI / ML Pipelines', desc: 'End-to-end MLOps: model versioning, drift monitoring, and automated retraining.' },
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

      {/* Solutions grouped */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-20">
        {solutionGroups.map((group, gi) => (
          <div key={gi}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-2 block">{group.label}</span>
              <div className="h-px w-full bg-[#2a2a2a]" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.solutions.map((sol, si) => (
                <motion.div
                  key={si}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: si * 0.07 }}
                  className="group flex flex-col gap-4 p-7 bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/40 hover:bg-[#1e1e1e] transition-all duration-300 h-full"
                >
                  <div className="p-2.5 bg-[#d4af37]/10 rounded-lg w-fit group-hover:bg-[#d4af37]/20 transition-colors">
                    {sol.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-base mb-2 group-hover:text-[#d4af37] transition-colors">{sol.title}</h3>
                    <p className="text-[#777] text-xs leading-relaxed">{sol.desc}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-xs text-[#555] group-hover:text-[#d4af37] transition-colors">
                    Explore <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#111] py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-6">Ready to digitise your factory?</h2>
          <p className="text-[#a0a0a0] mb-10">Our Smart Factory team will assess your current state, identify quick wins, and build a roadmap to full digitisation.</p>
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
