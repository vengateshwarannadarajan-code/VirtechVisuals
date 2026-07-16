import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';

type Category = 'All' | 'Hardware' | 'Software' | 'Platform';

const products = [
  {
    category: 'Software' as Category,
    name: 'AuditPros',
    tagline: 'Inspection & Audit Workflow',
    desc: 'End-to-end inspection and audit workflow management with digital checklists, photo evidence, NCR linkage, and compliance dashboards.',
    specs: ['Digital checklists', 'NCR & CAPA workflows', 'Audit-ready records'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600',
    slug: 'auditpros',
  },
  {
    category: 'Software' as Category,
    name: 'PermitFlows',
    tagline: 'Digital Permit-to-Work',
    desc: 'Digital permit-to-work issuance and tracking with multi-level approvals, risk assessments, and complete audit trails.',
    specs: ['Hot work, confined space, electrical permits', 'Multi-level approvals', 'Active permit dashboard'],
    image: 'https://images.unsplash.com/photo-1609188076864-c35269136c09?w=600',
    slug: 'permitflows',
  },
  {
    category: 'Platform' as Category,
    name: 'DigiTrack',
    tagline: 'Real-time Asset & Inventory Visibility',
    desc: 'Track assets and inventory across plants with complete visibility using BLE, UWB, GPS, and LoRaWAN technology.',
    specs: ['BLE / UWB indoor tracking', 'GPS yard tracking', 'Geofence alerts'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600',
    slug: 'digitrack',
  },
  {
    category: 'Software' as Category,
    name: 'SafeSphere EHS',
    tagline: 'Health & Safety Compliance',
    desc: 'Environment, health and safety compliance hub covering incident reporting, CAPA, training, and safety analytics.',
    specs: ['Incident & near-miss reporting', 'CAPA management', 'Safety KPI dashboards'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600',
    slug: 'safesphere-ehs',
  },
  {
    category: 'Software' as Category,
    name: 'GateKeeper',
    tagline: 'Visitor Access Control',
    desc: 'Smart visitor registration and access control system with pre-registration, badge printing, and real-time tracking.',
    specs: ['Pre-registration portal', 'Badge printing', 'Real-time visitor dashboard'],
    image: 'https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?w=600',
    slug: 'gatekeeper',
  },
  {
    category: 'Platform' as Category,
    name: 'ESG 360',
    tagline: 'Sustainability Metrics Dashboard',
    desc: 'Unified dashboard for sustainability metrics and reporting aligned to GRI, SASB, and BRSR frameworks.',
    specs: ['Scope 1/2/3 emissions', 'ESG report builder', 'Target tracking'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600',
    slug: 'esg-360',
  },
  {
    category: 'Software' as Category,
    name: 'VisionSafe AI',
    tagline: 'AI-Powered Safety Analytics',
    desc: 'CCTV-based workplace safety analytics powered by computer vision for PPE detection and hazard monitoring.',
    specs: ['PPE detection', 'Restricted zone monitoring', 'Evidence capture'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600',
    slug: 'visionsafe-ai',
  },
  {
    category: 'Software' as Category,
    name: 'IncidentGPT',
    tagline: 'LLM-Driven Incident Capture',
    desc: 'Multilingual incident capture and classification using AI with automatic root cause suggestion and CAPA workflows.',
    specs: ['Natural language reporting', 'AI root cause suggester', 'Multilingual support'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600',
    slug: 'incidentgpt',
  },
  {
    category: 'Software' as Category,
    name: 'PredictPulse',
    tagline: 'Predictive Maintenance Platform',
    desc: 'AI-driven predictive maintenance for industrial assets using vibration, thermal, and current signature analysis.',
    specs: ['Vibration & thermal analysis', 'ML failure prediction', 'RUL estimation'],
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600',
    slug: 'predictpulse',
  },
  {
    category: 'Software' as Category,
    name: 'EnergyOptix',
    tagline: 'Energy Consumption Monitoring',
    desc: 'Real-time energy monitoring and optimization platform with anomaly detection and ESG reporting integration.',
    specs: ['Machine-level monitoring', 'Anomaly detection', 'ESG integration'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600',
    slug: 'energyoptix',
  },
  {
    category: 'Software' as Category,
    name: 'ScheduleSync',
    tagline: 'AI Production Scheduling',
    desc: 'AI-powered production planning and scheduling with finite capacity optimization and what-if simulation.',
    specs: ['Finite capacity engine', 'What-if simulator', 'Plan vs actual tracking'],
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600',
    slug: 'schedulesync',
  },
  {
    category: 'Software' as Category,
    name: 'SkillMatrix Hub',
    tagline: 'Operator Certification Tracking',
    desc: 'Digital skills matrix and training management system with gap analysis and certification expiry alerts.',
    specs: ['Competency framework builder', 'Gap analysis dashboard', 'Certification alerts'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
    slug: 'skillmatrix-hub',
  },
  {
    category: 'Platform' as Category,
    name: 'TwinBuilder 3D',
    tagline: 'Digital Twin Diagnostics',
    desc: 'Create and manage digital twins for industrial equipment with real-time sensor overlay and failure simulation.',
    specs: ['CAD model import', 'Live sensor overlay', 'Remote diagnostics'],
    image: 'https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?w=600',
    slug: 'twinbuilder-3d',
  },
  {
    category: 'Software' as Category,
    name: 'FieldPulse Live',
    tagline: 'GPS Field-Staff Tracking',
    desc: 'Real-time tracking and management of field operations with job dispatch, route optimization, and productivity analytics.',
    specs: ['Live GPS map', 'Intelligent job dispatch', 'Route optimizer'],
    image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=600',
    slug: 'fieldpulse-live',
  },
  {
    category: 'Platform' as Category,
    name: 'WarehousePro',
    tagline: 'Enterprise Warehouse Management System',
    desc: 'End-to-end warehouse management with real-time inventory accuracy, wave picking, and labor management.',
    specs: ['Wave planning & batch picking', 'Slotting optimization', 'Labor management'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600',
    slug: 'warehousepro',
  },
  {
    category: 'Platform' as Category,
    name: 'SpareSync IoT',
    tagline: 'IoT-Powered Spare Parts Management',
    desc: 'Smart spare parts inventory with IoT sensors, auto-replenishment, and predictive stock management for maintenance operations.',
    specs: ['IoT bin monitoring', 'Predictive reorder engine', 'CMMS integration'],
    image: 'https://images.unsplash.com/photo-1601132359864-c974e79890ac?w=600',
    slug: 'sparesync-iot',
  },
  {
    category: 'Software' as Category,
    name: 'CopperTrack',
    tagline: 'Copper Refinery Production Planning',
    desc: 'Enterprise-grade copper tankhouse operations and production planning platform for electrolytic copper refineries.',
    specs: ['Tankhouse decision engine', 'PLC current readings', 'SAP/ERP integration'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600',
    slug: 'coppertrack',
  },
  {
    category: 'Software' as Category,
    name: 'TurfTrack',
    tagline: 'Smart Turf Booking & Management Platform',
    desc: 'Complete digital platform for turf bookings, slot management, pricing, offers, payments, and customer engagement.',
    specs: ['Real-time slot booking', 'Smart pricing engine', 'Revenue analytics'],
    image: 'https://images.unsplash.com/photo-1551958219-acbc595d7c09?w=600',
    slug: 'turftrack',
  },
  {
    category: 'Software' as Category,
    name: 'Clinic OS',
    tagline: 'Healthcare Practice Management',
    desc: 'Complete clinic management system for appointments, patient records, billing, and telemedicine integration.',
    specs: ['Electronic patient records', 'Telemedicine', 'Billing & insurance'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
    slug: 'clinic-os',
  },
  {
    category: 'Software' as Category,
    name: 'Church OS',
    tagline: 'Religious Organization Management',
    desc: 'Comprehensive platform for managing congregations, donations, events, and community engagement with multi-channel communication.',
    specs: ['Member directory', 'Donation & tithe tracking', 'Event registration'],
    image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600',
    slug: 'church-os',
  },
  {
    category: 'Software' as Category,
    name: 'EduVerse',
    tagline: 'Smart Education Management',
    desc: 'End-to-end school and college management platform for admissions, academics, attendance, fee collection, and parent engagement.',
    specs: ['Student management', 'Fee collection & payments', 'Parent portal'],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
    slug: 'eduverse',
  },
  {
    category: 'Software' as Category,
    name: 'Realty Command',
    tagline: 'Real Estate Operations Platform',
    desc: 'Integrated property management platform for developers, brokers, and property managers covering listings, CRM, and tenant management.',
    specs: ['Property listings & CRM', 'Tenant management', 'Financial reporting'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600',
    slug: 'realty-command',
  },
  {
    category: 'Software' as Category,
    name: 'PharmaTrack',
    tagline: 'Tool & Spare Management for Pharma',
    desc: 'Specialized inventory management for pharmaceutical manufacturing tools, spares, and compliance tracking.',
    specs: ['GMP compliant records', 'Calibration management', 'FDA 21 CFR Part 11'],
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600',
    slug: 'pharmatrack',
  },
  {
    category: 'Software' as Category,
    name: 'RetailIQ',
    tagline: 'Smart Retail Operations',
    desc: 'Unified retail management system covering POS, inventory, loyalty programs, and omnichannel analytics.',
    specs: ['POS system', 'Loyalty program', 'Omnichannel analytics'],
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600',
    slug: 'retailiq',
  },
  {
    category: 'Hardware' as Category,
    name: 'EdgeNode X1',
    tagline: 'Industrial Edge Gateway',
    desc: 'Ruggedised edge computing gateway for real-time data aggregation from PLCs, SCADA systems, and sensors. IP67 rated, -40°C to 85°C operating range.',
    specs: ['ARM Cortex-A72 quad-core', '8GB RAM / 64GB eMMC', 'OPC-UA, MQTT, Modbus'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600',
    slug: null,
  },
  {
    category: 'Software' as Category,
    name: 'FlowIQ',
    tagline: 'Process Intelligence Suite',
    desc: 'AI-powered analytics platform that turns raw machine data into actionable production insights - zero-code dashboards, anomaly detection, and OEE tracking.',
    specs: ['No-code dashboard builder', 'Real-time anomaly alerts', 'ERP / MES integration'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    slug: null,
  },
  {
    category: 'Platform' as Category,
    name: 'Virtech Cloud',
    tagline: 'Unified IIoT Platform',
    desc: 'Enterprise-grade cloud platform connecting your entire operational estate - from shop floor to supply chain - in one secure environment.',
    specs: ['Multi-site management', 'ISO 27001 certified', 'REST API & webhooks'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600',
    slug: null,
  },
  {
    category: 'Hardware' as Category,
    name: 'SensorMesh Pro',
    tagline: 'Wireless Sensor Array',
    desc: 'Self-organising mesh network of industrial sensors for vibration, temperature, humidity, and power monitoring - deploy in hours, not weeks.',
    specs: ['5-year battery life', 'LoRaWAN / Zigbee', '±0.1°C accuracy'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600',
    slug: null,
  },
  {
    category: 'Software' as Category,
    name: 'PredictaOps',
    tagline: 'Predictive Maintenance AI',
    desc: 'Machine learning models trained on your equipment data to predict failures 2-4 weeks in advance with >92% accuracy.',
    specs: ['Auto-ML training pipeline', 'CMMS integration', 'Mobile maintenance app'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600',
    slug: null,
  },
  {
    category: 'Platform' as Category,
    name: 'DigitalTwin Studio',
    tagline: '3D Factory Simulation',
    desc: 'Build real-time digital twins of your factory layout. Simulate bottlenecks, test changes, and optimise flow before touching physical assets.',
    specs: ['CAD import (STEP / DXF)', 'Physics-based simulation', 'Live sensor data binding'],
    image: 'https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?w=600',
    slug: null,
  },
];

const categories: Category[] = ['All', 'Hardware', 'Software', 'Platform'];

export default function Products() {
  const [active, setActive] = useState<Category>('All');
  const filtered = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <PageHero
        tag="Product Portfolio"
        title="Built for Industry"
        subtitle="From ruggedised edge hardware to AI-powered software platforms — everything you need to digitalise operations end to end."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920"
      />

      {/* Filter tabs */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm border transition-all duration-200 ${
                active === cat
                  ? 'bg-[#d4af37] text-[#1a1a1a] border-[#d4af37]'
                  : 'border-[#333] text-[#a0a0a0] hover:border-[#d4af37]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, i) => {
            const cardInner = (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#222] border border-[#2e2e2e] rounded-xl overflow-hidden hover:border-[#d4af37]/40 transition-colors duration-300 group flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.slug && (
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] bg-[#d4af37] text-[#1a1a1a] px-2 py-1 rounded font-display tracking-wider">
                        View Details
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-2">{product.category}</span>
                  <h3 className="font-display text-xl mb-1 group-hover:text-[#d4af37] transition-colors">{product.name}</h3>
                  <p className="text-[#a0a0a0] text-sm mb-4">{product.tagline}</p>
                  <p className="text-[#888] text-sm leading-relaxed mb-6 flex-1">{product.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((s, si) => (
                      <li key={si} className="flex items-center gap-2 text-xs text-[#a0a0a0]">
                        <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className={`w-full py-2.5 border rounded-lg text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                    product.slug
                      ? 'border-[#d4af37]/50 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#1a1a1a]'
                      : 'border-[#333] text-[#555]'
                  }`}>
                    {product.slug ? (
                      <>Explore Product <ArrowRight className="w-3.5 h-3.5" /></>
                    ) : 'Learn More'}
                  </div>
                </div>
              </motion.div>
            );

            return product.slug ? (
              <Link key={product.name} to={`/products/${product.slug}`} className="block">
                {cardInner}
              </Link>
            ) : (
              <div key={product.name}>{cardInner}</div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
