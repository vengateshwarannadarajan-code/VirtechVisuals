import { motion } from 'motion/react';

const factoryProducts = [
  { name: 'AuditPros', desc: 'Inspection & Audit Workflow Management' },
  { name: 'PermitFlows', desc: 'Digital Permit-to-Work System' },
  { name: 'DigiTrack', desc: 'Asset & Inventory Tracking' },
  { name: 'SafeSphere EHS', desc: 'Environment, Health & Safety Platform' },
  { name: 'GateKeeper', desc: 'Visitor & Contractor Management' },
  { name: 'ESG 360', desc: 'ESG Reporting & Compliance' },
  { name: 'VisionSafe AI', desc: 'AI-Powered Safety Monitoring' },
  { name: 'IncidentGPT', desc: 'AI Incident Investigation' },
  { name: 'PredictPulse', desc: 'Predictive Maintenance Platform' },
  { name: 'EnergyOptix', desc: 'Energy Monitoring & Optimisation' },
  { name: 'ScheduleSync', desc: 'Production Scheduling' },
  { name: 'SkillMatrix Hub', desc: 'Workforce Skill Management' },
  { name: 'TwinBuilder 3D', desc: 'Digital Twin Platform' },
  { name: 'FieldPulse Live', desc: 'Field Service Management' },
];

const specializedProducts = [
  { name: 'Clinic OS', desc: 'Clinic & Hospital Management' },
  { name: 'Church OS', desc: 'Church & Community Management' },
  { name: 'PharmaTrack', desc: 'Pharmaceutical Compliance & Tracking' },
  { name: 'EduVerse', desc: 'Education Management Platform' },
  { name: 'Realty Command', desc: 'Real Estate Operations Platform' },
  { name: 'RetailIQ', desc: 'Retail Intelligence Platform' },
  { name: 'Warehouse Pro', desc: 'Full-Featured WMS' },
  { name: 'IoT Spares WMS', desc: 'IoT-Based Spare Parts WMS' },
];

export default function Products() {
  return (
    <div>
      <section className="py-24 px-4 text-center bg-gradient-to-b from-[#0d1a3a] to-[#0a0f1e]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-[#f0c030] text-sm tracking-widest uppercase mb-4">22 Products</p>
          <h1 className="font-display text-5xl md:text-6xl mb-6">Products</h1>
          <p className="text-[#a0b0cc] text-lg max-w-2xl mx-auto">
            A complete portfolio of ready-to-deploy industrial and enterprise software products, available to European clients through Virtech Visuals.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl mb-12">Factory & Industrial Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {factoryProducts.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 bg-[#0d1a3a] border border-[#1e2a4a] rounded-xl hover:border-[#f0c030] transition-colors duration-300"
            >
              <h3 className="font-semibold text-[#f0c030] mb-2">{p.name}</h3>
              <p className="text-[#a0b0cc] text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="font-display text-3xl mb-12">Specialised & Industry Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializedProducts.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 bg-[#0d1a3a] border border-[#1e2a4a] rounded-xl hover:border-[#f0c030] transition-colors duration-300"
            >
              <h3 className="font-semibold text-[#f0c030] mb-2">{p.name}</h3>
              <p className="text-[#a0b0cc] text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0d1a3a] border-y border-[#1e2a4a] text-center">
        <p className="text-[#a0b0cc] mb-6 max-w-xl mx-auto">Interested in any of our products? Contact us for a demo or pricing.</p>
        <a href="mailto:business@virtechvisuals.com" className="inline-block px-8 py-4 bg-[#f0c030] text-[#0a0f1e] font-semibold rounded-lg hover:bg-white transition-all duration-300">
          Request a Demo
        </a>
      </section>
    </div>
  );
}
