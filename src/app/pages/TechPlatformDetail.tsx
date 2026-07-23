import { motion } from 'motion/react';
import { Link, useParams, Navigate } from 'react-router';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';

interface PlatformData {
  slug: string;
  name: string;
  tagline: string;
  subtitle: string;
  image: string;
  modules: { title: string; desc: string }[];
  capabilities: string[];
  industries: string[];
}

const platformsData: Record<string, PlatformData> = {
  'sap': {
    slug: 'sap',
    name: 'SAP Solutions',
    tagline: 'Intelligent Enterprise Solutions',
    subtitle: 'We deliver end-to-end SAP implementations, migrations, and support, from core ERP to specialized industry solutions. Our certified SAP consultants help you modernize your enterprise with S/4HANA, streamline HR with SuccessFactors, and unlock analytics with SAP BTP.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920',
    modules: [
      { title: 'SAP S/4HANA', desc: 'Next-generation ERP suite for finance, supply chain, manufacturing, and asset management.' },
      { title: 'SAP Business One', desc: 'Affordable ERP for small and mid-size businesses with integrated CRM, financials, and inventory.' },
      { title: 'SAP SuccessFactors', desc: 'Cloud-based HCM for talent management, payroll, workforce analytics, and employee experience.' },
      { title: 'SAP BTP', desc: 'Business Technology Platform for integration, extension, analytics, and AI on top of SAP.' },
      { title: 'SAP Ariba', desc: 'Procurement and supply chain collaboration network for strategic sourcing and spend management.' },
      { title: 'SAP Analytics Cloud', desc: 'Unified BI, planning, and predictive analytics across your SAP landscape.' },
    ],
    capabilities: [
      'Greenfield & brownfield S/4HANA implementations',
      'ECC to S/4HANA migration',
      'Custom ABAP & Fiori development',
      'Integration with non-SAP systems',
      'SAP Basis administration & support',
      'Licensing advisory & optimization',
    ],
    industries: ['Manufacturing', 'Automotive', 'Pharma & Life Sciences', 'Metals & Mining', 'FMCG', 'Oil & Gas'],
  },

  'oracle-netsuite': {
    slug: 'oracle-netsuite',
    name: 'Oracle / NetSuite Solutions',
    tagline: 'Complete Cloud Application Suite',
    subtitle: 'We implement and optimize Oracle Cloud and NetSuite solutions for enterprises of all sizes. From ERP and HCM to CX and EPM, our Oracle practice helps you consolidate systems, improve visibility, and drive growth.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920',
    modules: [
      { title: 'Oracle ERP Cloud', desc: 'Financials, procurement, project management, and risk management in a unified cloud.' },
      { title: 'Oracle NetSuite', desc: 'Cloud ERP for mid-market, financials, inventory, CRM, and eCommerce in one platform.' },
      { title: 'Oracle HCM Cloud', desc: 'Global HR, talent management, workforce management, and payroll.' },
      { title: 'Oracle CX Cloud', desc: 'Sales, marketing, service, and commerce cloud for end-to-end customer experience.' },
      { title: 'Oracle Cloud Infrastructure', desc: 'Enterprise-grade IaaS and PaaS with autonomous database and AI services.' },
      { title: 'Oracle EPM Cloud', desc: 'Enterprise performance management for planning, budgeting, and financial close.' },
    ],
    capabilities: [
      'Oracle Cloud ERP implementation & migration',
      'NetSuite customization & SuiteScript development',
      'Oracle Integration Cloud (OIC) setup',
      'Data migration from legacy systems',
      'Reporting & analytics with OTBI/BI Publisher',
      'Managed services & L1-L3 support',
    ],
    industries: ['Retail & eCommerce', 'Financial Services', 'Healthcare', 'Technology', 'Professional Services', 'Education'],
  },

  'microsoft-dynamics': {
    slug: 'microsoft-dynamics',
    name: 'Microsoft Dynamics 365 Solutions',
    tagline: 'Unified Business Applications',
    subtitle: 'We help organizations harness the full Microsoft ecosystem, Dynamics 365 for ERP and CRM, Power Platform for low-code automation, and Azure for scalable cloud infrastructure. Our Microsoft-certified team delivers seamless implementations tailored to your business.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920',
    modules: [
      { title: 'Dynamics 365 Finance', desc: 'Automate financial operations with AI-driven insights, global compliance, and real-time reporting.' },
      { title: 'Dynamics 365 Supply Chain', desc: 'Optimize supply chain with predictive analytics, warehouse management, and IoT integration.' },
      { title: 'Dynamics 365 Sales', desc: 'Accelerate revenue with relationship insights, pipeline management, and LinkedIn integration.' },
      { title: 'Dynamics 365 Customer Service', desc: 'Deliver omnichannel support with AI-powered case routing and knowledge management.' },
      { title: 'Power Platform', desc: 'Power Apps, Power Automate, Power BI, and Copilot Studio for citizen development and automation.' },
      { title: 'Azure Integration', desc: 'Azure cloud services for scalability, security, and advanced analytics alongside Dynamics 365.' },
    ],
    capabilities: [
      'Dynamics 365 implementation & configuration',
      'Power Platform app development',
      'Dataverse & data migration',
      'Custom plugin & workflow development',
      'Integration with Microsoft 365 & Teams',
      'Azure DevOps for ALM',
    ],
    industries: ['Manufacturing', 'Retail', 'Government', 'Construction', 'Logistics', 'Non-profit'],
  },

  'odoo': {
    slug: 'odoo',
    name: 'Odoo Solutions',
    tagline: 'Integrated Open-Source ERP',
    subtitle: 'Odoo provides a modular, cost-effective ERP suite ideal for growing businesses. We offer Odoo implementation, customization, and support, covering everything from accounting and inventory to eCommerce and marketing automation.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920',
    modules: [
      { title: 'Odoo ERP', desc: 'Core modules for accounting, inventory, purchasing, and manufacturing management.' },
      { title: 'Odoo CRM', desc: 'Pipeline management, lead scoring, and automated follow-ups for sales teams.' },
      { title: 'Odoo eCommerce', desc: 'Built-in online store with payment integration, shipping, and inventory sync.' },
      { title: 'Odoo HR', desc: 'Employee management, recruitment, appraisals, attendance, and payroll.' },
      { title: 'Odoo Manufacturing', desc: 'MRP, work orders, quality control, and maintenance management.' },
      { title: 'Odoo Studio', desc: 'Low-code customization tool to tailor Odoo modules to your exact needs.' },
    ],
    capabilities: [
      'Odoo Community & Enterprise implementation',
      'Custom module development (Python/OWL)',
      'Data migration from legacy ERP systems',
      'Third-party API integrations',
      'Odoo.sh cloud hosting & management',
      'Training & change management',
    ],
    industries: ['SME / Mid-Market', 'Retail', 'Manufacturing', 'Services', 'Education', 'Hospitality'],
  },

  'salesforce': {
    slug: 'salesforce',
    name: 'Salesforce Solutions',
    tagline: 'CRM & Enterprise Cloud',
    subtitle: 'We implement and customize Salesforce solutions to help you sell smarter, serve better, and market more effectively. Our Salesforce practice covers the full cloud portfolio, from Sales and Service Cloud to industry-specific solutions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920',
    modules: [
      { title: 'Sales Cloud', desc: 'Lead management, opportunity tracking, forecasting, and CPQ for sales teams.' },
      { title: 'Service Cloud', desc: 'Case management, knowledge base, omnichannel support, and field service.' },
      { title: 'Marketing Cloud', desc: 'Email journeys, audience segmentation, social media, and marketing analytics.' },
      { title: 'Commerce Cloud', desc: 'B2B and B2C commerce with AI-powered personalization and order management.' },
      { title: 'Experience Cloud', desc: 'Customer and partner portals, community engagement, and self-service.' },
      { title: 'MuleSoft', desc: 'API-led integration platform for connecting Salesforce with any system.' },
    ],
    capabilities: [
      'Salesforce implementation & configuration',
      'Apex & Lightning Web Component development',
      'Salesforce-to-ERP integration',
      'Data migration & deduplication',
      'AppExchange solution evaluation',
      'Managed services & admin support',
    ],
    industries: ['Financial Services', 'Healthcare', 'Technology', 'Media', 'Real Estate', 'Non-profit'],
  },
};

export default function TechPlatformDetail() {
  const { slug } = useParams<{ slug: string }>();
  const platform = platformsData[slug || ''];

  if (!platform) return <Navigate to="/technologies" replace />;

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={platform.image} alt={platform.name} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-[#999] text-xs mb-6">
            <Link to="/" className="hover:text-[#c0c0c0] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/technologies" className="hover:text-[#c0c0c0] transition-colors">Technologies</Link>
            <span>/</span>
            <span className="text-[#c0c0c0]">{platform.name}</span>
          </motion.div>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/40 text-[#d4af37] text-xs tracking-widest uppercase mb-6">
            {platform.tagline}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl mb-6 max-w-4xl">
            {platform.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-[#c0c0c0] max-w-3xl leading-relaxed mb-8">
            {platform.subtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300 font-medium">
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="mt-10 h-px w-24 bg-[#d4af37] origin-left" />
        </div>
      </section>

      {/* Key Modules */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl mb-3">Key Modules</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {platform.modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 bg-[#1e1e1e] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/30 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-[#d4af37] mb-4" />
              <h3 className="font-medium mb-2 text-sm">{mod.title}</h3>
              <p className="text-[#bbb] text-xs leading-relaxed">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities + Industries */}
      <section className="bg-[#111] py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl mb-6">Our Capabilities</h2>
            <ul className="space-y-3">
              {platform.capabilities.map((cap, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#c0c0c0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] flex-shrink-0" />
                  {cap}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl mb-6">Industries We Serve</h2>
            <div className="flex flex-wrap gap-3">
              {platform.industries.map((ind, i) => (
                <span key={i} className="px-4 py-2 bg-[#1a1a1a] border border-[#2e2e2e] rounded-full text-sm text-[#ccc] hover:border-[#d4af37]/40 transition-colors">
                  {ind}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Ready to Transform with {platform.name.split(' ')[0]}?</h2>
          <p className="text-[#c0c0c0] mb-8">Let's discuss how our {platform.name} expertise can accelerate your digital transformation journey.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300 font-medium">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/technologies" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-lg hover:border-[#d4af37]/60 hover:text-[#d4af37] transition-all duration-300">
              <ArrowLeft className="w-4 h-4" /> Back to Technologies
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
