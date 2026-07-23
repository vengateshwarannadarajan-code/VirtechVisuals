import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../i18n/context';
import { PageHero } from '../components/PageHero';
import { Footer } from '../components/Footer';

const erpPlatforms = [
  {
    slug: 'sap',
    name: 'SAP',
    label: 'End-to-end SAP solutions',
    modules: ['SAP S/4HANA', 'SAP Business One', 'SAP SuccessFactors'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
  },
  {
    slug: 'oracle-netsuite',
    name: 'Oracle / NetSuite',
    label: 'Oracle cloud suite for ERP, HCM, CX, and NetSuite',
    modules: ['Oracle ERP Cloud', 'NetSuite', 'Oracle HCM'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
  },
  {
    slug: 'microsoft-dynamics',
    name: 'Microsoft Dynamics 365',
    label: 'Dynamics 365 for finance, supply chain, sales, and customer service',
    modules: ['Dynamics 365', 'Power Platform', 'Azure'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
  },
  {
    slug: 'odoo',
    name: 'Odoo',
    label: 'Integrated open-source ERP for growing businesses',
    modules: ['Odoo ERP', 'Odoo CRM', 'Odoo eCommerce'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
  },
  {
    slug: 'salesforce',
    name: 'Salesforce',
    label: 'CRM and enterprise cloud for sales, service, marketing, and commerce',
    modules: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  },
];

const stackLayers = [
  {
    category: 'Web, Mobile & Application Frameworks',
    groups: [
      { label: 'Frontend', items: ['React', 'Next.js', 'Angular'] },
      { label: 'Backend', items: ['Node.js (Express/NestJS)', 'Python (FastAPI/Django)', 'Java (Spring Boot)'] },
      { label: 'Mobile', items: ['Flutter', 'React Native', 'Android (Kotlin)'] },
      { label: 'API & Realtime', items: ['REST', 'GraphQL', 'Webhooks', 'WebSockets'] },
    ],
  },
  {
    category: 'Cloud, DevOps & Observability',
    groups: [
      { label: 'Cloud', items: ['AWS', 'Microsoft Azure', 'Google Cloud (GCP)'] },
      { label: 'Containers', items: ['Docker', 'Kubernetes (EKS/AKS/GKE)'] },
      { label: 'CI/CD', items: ['GitHub Actions', 'GitLab CI', 'Azure DevOps'] },
      { label: 'IaC', items: ['Terraform'] },
      { label: 'Monitoring & Logs', items: ['Prometheus', 'Grafana', 'ELK/OpenSearch', 'Loki'] },
      { label: 'Tracing', items: ['OpenTelemetry'] },
    ],
  },
  {
    category: 'Industrial IoT & Edge Platforms (Smart Factory)',
    groups: [
      { label: 'AWS', items: ['AWS IoT Core', 'AWS IoT Greengrass', 'AWS IoT SiteWise'] },
      { label: 'Azure', items: ['Azure IoT Hub', 'Azure IoT Edge', 'Azure Digital Twins'] },
      { label: 'Protocols', items: ['OPC UA', 'Modbus (TCP/RTU)', 'MQTT', 'Profinet / Ethernet-IP'] },
      { label: 'Tracking Tech', items: ['BLE Beacons', 'UWB', 'LoRaWAN', 'GPS'] },
    ],
  },
  {
    category: 'Data Engineering & Analytics',
    groups: [
      { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis'] },
      { label: 'Time-Series', items: ['TimescaleDB', 'InfluxDB'] },
      { label: 'BI & Dashboards', items: ['Power BI', 'KPI/Control Tower dashboards'] },
      { label: 'Data Governance', items: ['Master data', 'Data quality', 'Standard event models'] },
    ],
  },
  {
    category: 'AI/ML, Vision & Speech',
    groups: [
      { label: 'ML Frameworks', items: ['PyTorch', 'TensorFlow', 'scikit-learn'] },
      { label: 'Computer Vision', items: ['OpenCV', 'YOLO'] },
      { label: 'Speech / Voice', items: ['Whisper'] },
      { label: 'Edge AI', items: ['NVIDIA Jetson (use-case driven)'] },
    ],
  },
  {
    category: 'LLMs, Multimodal AI & Agentic Platforms',
    groups: [
      { label: 'LLM Providers', items: ['OpenAI (GPT)', 'Anthropic (Claude)', 'Google (Gemini)', 'Meta (Llama)'] },
      { label: 'RAG / Retrieval', items: ['Pinecone', 'Weaviate', 'FAISS'] },
      { label: 'Agent Frameworks', items: ['LangChain', 'LlamaIndex'] },
      { label: 'Agent Platforms', items: ['Google ADK', 'AWS/Azure agent orchestration'] },
    ],
  },
  {
    category: 'Robotics & Physical AI',
    groups: [
      { label: 'Middleware', items: ['ROS 2'] },
      { label: 'Capabilities', items: ['SLAM', 'Navigation', 'Path planning', 'Fleet integration patterns'] },
    ],
  },
  {
    category: 'VR/AR, XR & Spatial Intelligence',
    groups: [
      { label: 'VR Platforms', items: ['Unity', 'Unreal Engine', 'WebXR'] },
      { label: 'AR Frameworks', items: ['ARKit', 'ARCore', 'Vuforia', '8th Wall'] },
      { label: 'MR Headsets', items: ['Meta Quest 3/Pro', 'HoloLens 2', 'Apple Vision Pro'] },
      { label: '3D & Scanning', items: ['Blender', 'Photogrammetry', 'LiDAR Point Clouds', 'CAD-to-XR'] },
      { label: 'Rendering', items: ['Cloud XR streaming', 'Edge rendering', 'Three.js', 'React Three Fiber'] },
    ],
  },
  {
    category: 'Cybersecurity & Privacy Compliance',
    groups: [
      { label: 'Security Testing', items: ['VAPT (web, mobile, API, network, cloud)'] },
      { label: 'Monitoring', items: ['SIEM/SOC support', 'Logging and alerting integrations'] },
      { label: 'OT Security', items: ['Segmentation', 'Secure remote access patterns'] },
      { label: 'Privacy', items: ['GDPR', 'DPDP (India)', 'PDPL', 'HIPAA'] },
    ],
  },
  {
    category: 'CAD / CAM & Design Tools',
    groups: [
      { label: 'CAD (2D/3D)', items: ['AutoCAD', 'Siemens NX', 'CATIA', 'SOLIDWORKS', 'BricsCAD', 'PTC Creo', 'Fusion 360', 'Inventor', 'Solid Edge'] },
      { label: 'BIM / AEC', items: ['Autodesk Revit', 'Navisworks', 'Civil 3D', 'Tekla Structures', 'Bentley MicroStation', 'SketchUp'] },
      { label: '3D Modeling', items: ['Blender'] },
    ],
  },
];

export default function Technologies() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <PageHero
        tag="Technology Stack"
        title="Technologies We Work With"
        subtitle="From enterprise platforms to edge AI, we bring deep expertise across a comprehensive technology ecosystem to power your digital transformation."
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=90&fit=crop&auto=format"
      />

      {/* ERP Enterprise Platforms */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl mb-3">Enterprise Platforms & Integrations</h2>
          <p className="text-[#c0c0c0]">ERP: SAP, Oracle / NetSuite, Microsoft Dynamics 365, Odoo, Salesforce</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {erpPlatforms.map((plat, i) => (
            <motion.div
              key={plat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-[#1e1e1e] border border-[#2e2e2e] rounded-xl overflow-hidden hover:border-[#d4af37]/40 transition-colors"
            >
              <div className="relative h-32 overflow-hidden">
                <img src={plat.image} alt={plat.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base mb-1">{plat.name}</h3>
                <p className="text-[#bbb] text-xs leading-relaxed mb-4">{plat.label}</p>
                <ul className="space-y-1 mb-4">
                  {plat.modules.map((m, mi) => (
                    <li key={mi} className="text-xs text-[#aaa] flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#d4af37]" /> {m}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/technologies/${plat.slug}`}
                  className="inline-flex items-center gap-1 text-[#d4af37] text-xs hover:gap-2 transition-all"
                >
                  Explore {plat.name} integration <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full Tech Stack Layers */}
      <section className="bg-[#111] py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-3">Complete Technology Ecosystem</h2>
            <p className="text-[#c0c0c0]">Best-of-breed, open-standards technology at every layer, no vendor lock-in, no black boxes.</p>
          </motion.div>
          <div className="space-y-10">
            {stackLayers.map((layer, li) => (
              <motion.div
                key={li}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: li * 0.05 }}
              >
                <h3 className="text-[#d4af37] text-xs tracking-widest uppercase mb-5">{layer.category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {layer.groups.map((group, gi) => (
                    <div key={gi} className="p-4 bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg">
                      <div className="text-[#999] text-[10px] tracking-widest uppercase mb-3">{group.label}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item, ii) => (
                          <span
                            key={ii}
                            className="px-2 py-1 bg-[#222] border border-[#333] rounded text-xs text-[#ccc] hover:border-[#d4af37]/40 hover:text-white transition-colors cursor-default"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Need Help Choosing the Right Stack?</h2>
          <p className="text-[#c0c0c0] mb-8">Our architects will recommend the ideal technology mix for your use case, budget, and scale.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300 font-medium"
          >
            Talk to an Architect <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
