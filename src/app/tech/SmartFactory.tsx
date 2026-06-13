import { motion } from 'motion/react';

const solutions = [
  { title: 'Production Performance & Planning', desc: 'OEE/OLE monitoring, scheduling, plan-vs-actual tracking.' },
  { title: 'Process Intelligence & Optimization', desc: 'SPC, process capability, recipe management.' },
  { title: 'Quality Intelligence', desc: 'Inline inspection, CAPA, complaint management.' },
  { title: 'Traceability & Genealogy', desc: 'Batch tracking, raw material traceability, recall management.' },
  { title: 'Maintenance & Reliability Intelligence', desc: 'Predictive maintenance, CMMS, asset reliability.' },
  { title: 'Warehouse Intelligence', desc: 'Smart storage, pick optimisation, inventory analytics.' },
  { title: 'Intralogistics & Material Flow', desc: 'AGV/AMR orchestration, material scheduling.' },
  { title: 'Spatial Intelligence & Asset Tracking', desc: 'Indoor positioning, RTLS, geofencing.' },
  { title: 'Vision Intelligence', desc: 'Computer vision, defect detection, PPE compliance.' },
  { title: 'Robotics & Physical AI', desc: 'Robotic process automation, cobot integration.' },
  { title: 'Digital Twins & Simulation', desc: '3D plant twins, what-if simulation, virtual commissioning.' },
  { title: 'Industrial IoT & OT-IT Integration', desc: 'Edge gateways, protocol bridging, unified data layer.' },
  { title: 'Manufacturing Execution & Workflow', desc: 'MES, paperless manufacturing, e-batch records.' },
  { title: 'Smart Notifications & Control Tower', desc: 'Real-time alerts, escalation, war room dashboards.' },
  { title: 'Safety, EHS & Permit-to-Work', desc: 'Digital PTW, hazard reporting, incident investigation, BBS.' },
  { title: 'Energy, Utilities & ESG Intelligence', desc: 'Energy monitoring, carbon tracking, ESG reporting.' },
  { title: 'Cybersecurity & Data Privacy', desc: 'OT security, zero trust, GDPR/PDPA compliance.' },
  { title: 'Data Platform, Governance & AI Enablement', desc: 'Data lakehouse, MDM, AI/ML pipelines.' },
];

export default function SmartFactory() {
  return (
    <div>
      <section className="py-24 px-4 text-center bg-gradient-to-b from-[#0d1a3a] to-[#0a0f1e]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-[#f0c030] text-sm tracking-widest uppercase mb-4">Industry 4.0</p>
          <h1 className="font-display text-5xl md:text-6xl mb-6">Smart Factory</h1>
          <p className="text-[#a0b0cc] text-lg max-w-2xl mx-auto">
            End-to-end shopfloor digitisation — PLC & SCADA programming, IIoT, MES/MOM integration, digital twins, and full Industry 4.0 implementations. Delivered from Paris, powered from India.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl text-center mb-4">18 Smart Factory Solutions</h2>
        <p className="text-[#a0b0cc] text-center mb-16">Comprehensive coverage across the entire manufacturing intelligence stack.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 bg-[#0d1a3a] border border-[#1e2a4a] rounded-xl hover:border-[#f0c030] transition-colors duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-[#f0c030] mb-3" />
              <h3 className="font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-[#a0b0cc] text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0d1a3a] border-y border-[#1e2a4a] text-center">
        <p className="text-[#a0b0cc] mb-6 max-w-xl mx-auto">Ready to digitise your shopfloor? Our team in France and India is ready to help.</p>
        <a href="mailto:business@virtechvisuals.com" className="inline-block px-8 py-4 bg-[#f0c030] text-[#0a0f1e] font-semibold rounded-lg hover:bg-white transition-all duration-300">
          Get In Touch
        </a>
      </section>
    </div>
  );
}
