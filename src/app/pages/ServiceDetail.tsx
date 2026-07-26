import { motion } from 'motion/react';
import { Link, useParams, Navigate } from 'react-router';
import {
  ArrowRight, ArrowLeft,
  // Custom Software
  Globe, Smartphone, Building2, Plug, LayoutTemplate, Wrench,
  // Industrial Automation
  BarChart3, CalendarClock, ShieldCheck, Warehouse, Navigation, Layers,
  // Artificial Intelligence
  ScanEye, TrendingUp, MessageSquareDot, AlertTriangle, Lightbulb, Puzzle,
  // IoT & Edge
  Cpu, Server, Radio, MonitorSmartphone, Brain, Gauge,
  // Cloud & DevOps
  Cloud, MoveRight, GitMerge, Container, Activity, DollarSign,
  // Data Engineering
  Workflow, Database, PieChart, ClipboardCheck, GitFork, LineChart,
  // Cybersecurity
  ShieldAlert, Search, Lock, Bell, GraduationCap, Map,
  // CAD CAM
  Box, CpuIcon, ScanLine, Scan, Compass, FileText,
  // Talent Solutions
  UserCheck, Users, Star, Receipt, Building, BarChart2,
  // Training
  Code2, Presentation, Factory, FlaskConical, ShieldX, Trophy,
  // Digital Marketing
  SearchCode, Share2, BookOpen, Megaphone, Palette, MousePointerClick,
  // Managed Services
  LifeBuoy, CloudCog, Eye, PackageCheck, Timer, RefreshCw,
  // VR AR
  Glasses, HandHelping, Boxes, MapPin, MonitorPlay, Radar,
  // Industry icons for Real-World Impact
  Stethoscope, Layers2, Car, CreditCard, Truck, ShoppingBag,
  Pill, PackageOpen, HardHat, Pickaxe,
  Fuel, Zap, Landmark, Film, Snowflake,
  TowerControl, Coins, Store, Home as HomeIcon,
  Scale, Microscope, Factory as FactoryIcon,
  // Benefits list
  CheckCircle2,
} from 'lucide-react';
import { Footer } from '../components/Footer';

interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  challenge: string;
  frameworkSteps: { title: string; desc: string }[];
  subServiceIcons?: string[];
  subServices: { title: string; desc: string }[];
  useCases: { industry: string; desc: string }[];
  techStack: string[];
  benefits: string[];
  faqs: string[];
  related: string[];
}

const servicesData: Record<string, ServiceData> = {
  'custom-software': {
    slug: 'custom-software',
    subServiceIcons: ['Globe', 'Smartphone', 'Building2', 'Plug', 'LayoutTemplate', 'Wrench'],
    title: 'Custom Software Development',
    subtitle: 'We design and develop custom software applications that solve real business problems. From enterprise platforms to mobile apps and cloud-native solutions, our team delivers scalable, secure, and high-performance software tailored to your workflows and goals.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80&auto=format&fit=crop',
    challenge: 'Off-the-shelf software forces businesses to adapt their processes to rigid tools. Custom workflows, industry-specific logic, and integration requirements are ignored, leading to workarounds, data silos, and operational inefficiency.',
    frameworkSteps: [
      { title: 'Discovery & Architecture', desc: 'Requirements gathering, technical architecture design, and technology stack selection aligned to your business goals.' },
      { title: 'UI/UX Design', desc: 'User research, wireframing, prototyping, and design system creation for intuitive, accessible interfaces.' },
      { title: 'Full-Stack Development', desc: 'Frontend, backend, and database development using modern frameworks with clean, maintainable code.' },
      { title: 'Quality Assurance', desc: 'Automated testing, performance testing, security testing, and user acceptance testing.' },
      { title: 'DevOps & Deployment', desc: 'CI/CD pipelines, containerization, cloud infrastructure setup, and zero-downtime deployments.' },
      { title: 'Support & Evolution', desc: 'Post-launch monitoring, bug fixes, feature enhancements, and technology upgrades.' },
    ],
    subServices: [
      { title: 'Web Application Development', desc: 'Full-stack web applications with modern frameworks, responsive design, and seamless UX for enterprise and consumer platforms.' },
      { title: 'Mobile App Development', desc: 'Native and cross-platform mobile apps for iOS and Android with offline capabilities and push notifications.' },
      { title: 'Enterprise Software Solutions', desc: 'Large-scale ERP, CRM, and workflow management systems customized to your organizational processes.' },
      { title: 'API Development & Integrations', desc: 'RESTful and GraphQL APIs with secure third-party integrations connecting your systems seamlessly.' },
      { title: 'SaaS Product Development', desc: 'Multi-tenant SaaS platforms with subscription management, user provisioning, and scalable cloud architecture.' },
      { title: 'Maintenance & Enhancements', desc: 'Ongoing application support, feature enhancements, performance tuning, and technology stack upgrades.' },
    ],
    useCases: [
      { industry: 'Healthcare', desc: 'Patient portal with EHR integration, telemedicine, and appointment scheduling' },
      { industry: 'Manufacturing', desc: 'MES dashboards connecting shopfloor PLCs to cloud analytics in real time' },
      { industry: 'Fintech', desc: 'Payment gateway integration with PCI-DSS compliance and fraud detection' },
      { industry: 'Logistics', desc: 'Fleet management platform with GPS tracking, route optimization, and driver apps' },
      { industry: 'Retail', desc: 'Omnichannel e-commerce with inventory sync, loyalty programs, and personalized recommendations' },
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'React Native', 'PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'GraphQL', 'TypeScript'],
    benefits: ['Agile development methodology', 'Full-stack expertise', 'Scalable architecture', 'Post-launch support & maintenance', 'CI/CD pipelines', 'Security-first approach'],
    faqs: ['How long does a typical custom software project take?', 'Do you work with existing codebases or only greenfield projects?', 'What technologies do you specialize in?', 'How do you ensure quality and security?'],
    related: ['industrial-automation', 'artificial-intelligence', 'iot-edge-computing', 'cloud-devops', 'data-engineering', 'cybersecurity'],
  },

  'industrial-automation': {
    slug: 'industrial-automation',
    subServiceIcons: ['BarChart3', 'CalendarClock', 'ShieldCheck', 'Warehouse', 'Navigation', 'Layers'],
    title: 'Industrial Automation & Smart Factory',
    subtitle: 'We help manufacturers transform their shopfloors with smart factory solutions, from production intelligence and quality digitization to warehouse automation and digital twins. Our solutions connect machines, people, and processes for real-time visibility and control.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80&auto=format&fit=crop',
    challenge: 'Disconnected shopfloor systems, manual data collection, and reactive operations lead to poor OEE, quality escapes, and costly downtime. Without digital integration, factories operate blind, unable to optimize what they cannot measure.',
    frameworkSteps: [
      { title: 'Shopfloor Assessment', desc: 'Current-state analysis, maturity assessment, and digital roadmap creation for smart factory transformation.' },
      { title: 'OT-IT Integration', desc: 'PLC/SCADA connectivity, edge data acquisition, and enterprise system integration for unified operations.' },
      { title: 'MES & Execution', desc: 'Manufacturing execution workflows, SOPs, checklists, approvals, and role-based task management.' },
      { title: 'Analytics & Dashboards', desc: 'Real-time KPI dashboards, loss analytics, trend analysis, and control tower views.' },
      { title: 'Automation & Robotics', desc: 'AMR/AGV fleet orchestration, cobot integration, and physical AI enablement for automated material flow.' },
      { title: 'Continuous Improvement', desc: 'Kaizen workflows, root cause analysis, and structured improvement programs driven by data.' },
    ],
    subServices: [
      { title: 'Production Intelligence (OEE/OLE)', desc: 'Real-time OEE/OLE monitoring, downtime tracking, micro-stop analysis, changeover optimization, and plan vs actual dashboards.' },
      { title: 'Production Planning & Scheduling', desc: 'Finite capacity scheduling, sequencing, schedule adherence tracking, and intelligent production plan management.' },
      { title: 'Quality & Traceability (Vision + Genealogy)', desc: 'Digital inspections, quality gates, defect analytics, NCR/CAPA, vision-based QC, and batch/lot genealogy.' },
      { title: 'Warehouse & Intralogistics Intelligence', desc: 'Inventory visibility, GRN/putaway, picking/kitting, replenishment, cycle counts, dispatch validation, and material flow optimization.' },
      { title: 'Asset Tracking (BLE/UWB/GPS/LoRaWAN)', desc: 'Indoor/outdoor asset and tool tracking using BLE, UWB, GPS, and LoRaWAN with geofencing, movement history, and yard management.' },
      { title: 'Digital Twins & Robotics Enablement', desc: 'Factory/line digital twins, what-if simulation, AMR/AGV/cobot enablement, fleet orchestration, and mission analytics.' },
    ],
    useCases: [
      { industry: 'Automotive', desc: 'Real-time OEE tracking across 12 production lines with automated downtime classification' },
      { industry: 'Pharma', desc: 'Batch genealogy and electronic batch records with 21 CFR Part 11 compliance' },
      { industry: 'FMCG', desc: 'Automated warehouse with AGV fleet orchestration and pick-pack-dispatch validation' },
      { industry: 'Chemicals', desc: 'Digital twin of reactor vessels with predictive maintenance and safety interlocks' },
      { industry: 'Steel & Metals', desc: 'Quality gate automation with vision-based defect detection and SPC charts' },
    ],
    techStack: ['Siemens MindSphere', 'Ignition SCADA', 'Kepware', 'OPC-UA', 'MQTT', 'Node-RED', 'Azure IoT Hub', 'AWS IoT Greengrass', 'Power BI', 'Grafana', 'TimescaleDB', 'InfluxDB'],
    benefits: ['Multi-plant scalability', 'OT-IT integration expertise', 'Industry 4.0 aligned', 'Vendor-agnostic approach', 'ROI-driven implementation', '24/7 operational visibility'],
    faqs: ['Can you integrate with our existing PLCs and SCADA systems?', 'What is the typical ROI timeline for smart factory projects?', 'Do you support multi-plant deployments?', 'How do you handle change management on the shopfloor?'],
    related: ['custom-software', 'artificial-intelligence', 'iot-edge-computing', 'cloud-devops', 'data-engineering', 'cybersecurity'],
  },

  'artificial-intelligence': {
    slug: 'artificial-intelligence',
    subServiceIcons: ['ScanEye', 'TrendingUp', 'MessageSquareDot', 'AlertTriangle', 'Lightbulb', 'Puzzle'],
    title: 'Artificial Intelligence',
    subtitle: 'We build and deploy AI-powered solutions that transform how businesses operate. From computer vision and NLP to predictive analytics and generative AI, our team delivers production-ready AI that integrates with your existing systems and delivers measurable ROI.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=80&auto=format&fit=crop',
    challenge: 'AI proof-of-concepts that never reach production, models that degrade without monitoring, and implementations that do not integrate with existing workflows. Most AI initiatives fail to deliver the promised ROI because they lack engineering discipline.',
    frameworkSteps: [
      { title: 'AI Strategy & Assessment', desc: 'Use-case identification, feasibility analysis, data readiness assessment, and AI roadmap creation.' },
      { title: 'Data Engineering', desc: 'Data collection, cleaning, labeling, augmentation, and pipeline automation for model training.' },
      { title: 'Model Development', desc: 'Custom model architecture, training, hyperparameter optimization, and evaluation for your specific use case.' },
      { title: 'Edge Deployment', desc: 'Model optimization, quantization, and deployment on edge devices for real-time inference.' },
      { title: 'MLOps Pipeline', desc: 'Automated training, versioning, A/B testing, monitoring, and retraining infrastructure.' },
      { title: 'Integration & Scaling', desc: 'API wrapper development, system integration, and horizontal scaling for production workloads.' },
    ],
    subServices: [
      { title: 'Computer Vision', desc: 'Visual inspection, defect detection, object recognition, OCR, and video analytics for manufacturing and safety.' },
      { title: 'Predictive Analytics', desc: 'Forecasting models for demand planning, predictive maintenance, quality prediction, and operational optimization.' },
      { title: 'NLP / Chatbots', desc: 'Chatbots, document understanding, sentiment analysis, text classification, and multilingual NLP solutions.' },
      { title: 'Anomaly Detection', desc: 'Real-time anomaly detection in sensor data, transactions, quality metrics, and operational patterns using ML models.' },
      { title: 'Recommendation & Optimization', desc: 'Intelligent recommendation engines, parameter optimization, resource allocation, and decision support systems.' },
      { title: 'AI Integration for Business Apps', desc: 'Embed AI capabilities into existing enterprise applications including ERP, CRM, MES, and QMS for smarter workflows.' },
    ],
    useCases: [
      { industry: 'Manufacturing', desc: 'Vision-based defect detection on assembly lines achieving 99.2% accuracy with less than 100ms inference' },
      { industry: 'Energy', desc: 'Predictive maintenance for turbines reducing unplanned downtime by 40% using vibration analytics' },
      { industry: 'Banking', desc: 'Fraud detection engine processing 50K+ transactions/sec with real-time anomaly scoring' },
      { industry: 'Healthcare', desc: 'Medical imaging AI for radiology screening with HIPAA-compliant model deployment' },
      { industry: 'Retail', desc: 'Demand forecasting with 95%+ accuracy using weather, events, and historical sales data' },
    ],
    techStack: ['PyTorch', 'TensorFlow', 'OpenCV', 'Hugging Face', 'LangChain', 'NVIDIA Triton', 'MLflow', 'Kubeflow', 'ONNX Runtime', 'FastAPI', 'OpenAI API', 'AWS SageMaker'],
    benefits: ['Domain-specific AI models', 'Production-grade deployment', 'Explainable AI practices', 'Data privacy & compliance', 'Continuous model improvement', 'Integration with existing systems'],
    faqs: ['How do you handle AI model accuracy and bias?', 'Can AI models run on-premise or at the edge?', 'What data do you need to get started?', 'How do you ensure AI models stay accurate over time?'],
    related: ['custom-software', 'industrial-automation', 'iot-edge-computing', 'cloud-devops', 'data-engineering', 'cybersecurity'],
  },

  'iot-edge-computing': {
    slug: 'iot-edge-computing',
    subServiceIcons: ['Cpu', 'Server', 'Radio', 'MonitorSmartphone', 'Brain', 'Gauge'],
    title: 'IoT & Edge Computing',
    subtitle: 'We design and deploy IoT and edge computing solutions that connect your physical operations to digital systems. From PLC/SCADA data acquisition to edge AI deployment, we enable real-time monitoring, control, and intelligence at the source.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format&fit=crop',
    challenge: 'Machines and sensors generate massive amounts of data that never reaches decision-makers. Disconnected OT systems, proprietary protocols, and lack of edge processing create blind spots that prevent real-time response and predictive operations.',
    frameworkSteps: [
      { title: 'Connectivity Assessment', desc: 'OT landscape audit, protocol mapping, and connectivity architecture design for your facility.' },
      { title: 'Edge Infrastructure', desc: 'Edge gateway deployment, compute provisioning, and network configuration for reliable data flow.' },
      { title: 'Data Normalization', desc: 'Protocol translation, event normalization, time-series structuring, and quality validation.' },
      { title: 'Real-time Processing', desc: 'Stream processing, rule engines, threshold alerts, and edge analytics for immediate insights.' },
      { title: 'Cloud Integration', desc: 'Secure data transmission to cloud platforms, API publishing, and enterprise system integration.' },
      { title: 'Device Management', desc: 'Remote monitoring, firmware updates, health checks, and lifecycle management for all connected devices.' },
    ],
    subServices: [
      { title: 'PLC/SCADA Data Acquisition', desc: 'Connect to PLCs, SCADA systems, and industrial controllers using OPC-UA, Modbus, MQTT, and proprietary protocols.' },
      { title: 'Edge Gateways & Real-time Data', desc: 'Deploy edge gateways for local data processing, buffering, protocol translation, and real-time streaming to cloud.' },
      { title: 'BLE / LoRaWAN / MQTT Integration', desc: 'Integrate wireless sensor networks using BLE, LoRaWAN, MQTT, and other IoT protocols for flexible connectivity.' },
      { title: 'Device Management & Health Monitoring', desc: 'Remote device provisioning, firmware OTA updates, connectivity health checks, and lifecycle management dashboards.' },
      { title: 'Edge AI Deployment', desc: 'Deploy AI models on edge devices for real-time inference including visual inspection, anomaly detection, and predictive alerts at the source.' },
      { title: 'Sensor & Meter Integrations', desc: 'Integrate energy meters, environmental sensors, vibration sensors, flow meters, and other instrumentation into unified data streams.' },
    ],
    useCases: [
      { industry: 'Oil & Gas', desc: 'Remote well monitoring with satellite-connected edge devices and predictive pump failure alerts' },
      { industry: 'Manufacturing', desc: 'PLC data acquisition from 200+ machines feeding real-time OEE dashboards via OPC-UA' },
      { industry: 'Utilities', desc: 'Smart meter data collection across 50K endpoints with LoRaWAN and edge aggregation' },
      { industry: 'Cold Chain', desc: 'Temperature monitoring across refrigerated fleet with GPS tracking and compliance alerts' },
      { industry: 'Mining', desc: 'Vibration and acoustic sensors on crushers with edge-based anomaly detection for predictive maintenance' },
    ],
    techStack: ['AWS IoT Greengrass', 'Azure IoT Edge', 'Kepware', 'HiveMQ', 'InfluxDB', 'Node-RED', 'Balena', 'NVIDIA Jetson', 'Apache Kafka', 'Mosquitto MQTT', 'OPC-UA', 'Modbus TCP'],
    benefits: ['Protocol-agnostic connectivity', 'Sub-second latency', 'Offline-capable edge processing', 'Secure OT-IT data flow', 'Scalable device management', 'Vendor-neutral architecture'],
    faqs: ['How do you handle connectivity in remote or low-bandwidth environments?', 'What protocols do you support for industrial equipment?', 'Can edge devices run AI models locally?', 'How do you secure OT-IT data flows?'],
    related: ['custom-software', 'industrial-automation', 'artificial-intelligence', 'cloud-devops', 'data-engineering', 'cybersecurity'],
  },

  'cloud-devops': {
    slug: 'cloud-devops',
    subServiceIcons: ['Cloud', 'MoveRight', 'GitMerge', 'Container', 'Activity', 'DollarSign'],
    title: 'Cloud & DevOps Services',
    subtitle: 'We help organizations design cloud-native architectures, migrate workloads, and implement DevOps practices that accelerate delivery while maintaining security and cost efficiency. Our certified engineers work across AWS, Azure, and GCP.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80&auto=format&fit=crop',
    challenge: 'Unoptimized cloud spending, manual deployments, lack of observability, and security misconfigurations slow down development and expose infrastructure to risk. Without DevOps maturity, teams ship slower and break things more often.',
    frameworkSteps: [
      { title: 'Cloud Strategy', desc: 'Cloud readiness assessment, architecture design, provider selection, and migration planning.' },
      { title: 'Migration & Modernization', desc: 'Lift-and-shift, re-platform, and re-architect strategies for moving workloads to cloud.' },
      { title: 'CI/CD Automation', desc: 'Pipeline design, automated testing integration, deployment strategies, and release management.' },
      { title: 'Infrastructure as Code', desc: 'Terraform, Pulumi, or CloudFormation templates for repeatable, version-controlled infrastructure.' },
      { title: 'Observability', desc: 'Monitoring, logging, tracing, and alerting setup with tools like Prometheus, Grafana, Datadog, and ELK.' },
      { title: 'FinOps & Security', desc: 'Cost optimization, right-sizing, security hardening, compliance scanning, and access management.' },
    ],
    subServices: [
      { title: 'Cloud Architecture (AWS/Azure/GCP)', desc: 'Design scalable, resilient cloud architectures with multi-region, multi-AZ strategies across AWS, Azure, and GCP.' },
      { title: 'Cloud Migration & Modernization', desc: 'Migrate legacy workloads to cloud with re-platform, re-architect, or lift-and-shift strategies and zero-downtime cutover.' },
      { title: 'DevOps / CI-CD Pipelines', desc: 'Automated build, test, and deploy pipelines with GitHub Actions, GitLab CI, Jenkins, and Azure DevOps.' },
      { title: 'Kubernetes / Containerization', desc: 'Container orchestration with Docker and Kubernetes (EKS, AKS, GKE) with auto-scaling and service mesh.' },
      { title: 'Monitoring, Logging & SRE', desc: 'Full observability with Prometheus, Grafana, Datadog, ELK stack, and SRE practices for reliability.' },
      { title: 'Cloud Security & Cost Optimization', desc: 'Security hardening, compliance scanning, cost right-sizing, reserved instance planning, and FinOps dashboards.' },
    ],
    useCases: [
      { industry: 'SaaS', desc: 'Multi-tenant Kubernetes platform serving 10K+ tenants with auto-scaling and blue-green deployments' },
      { industry: 'E-commerce', desc: 'Cloud migration from on-premise reducing infrastructure costs by 45% with improved uptime' },
      { industry: 'Banking', desc: 'PCI-DSS compliant cloud architecture with encryption at rest, in transit, and network segmentation' },
      { industry: 'Media', desc: 'CDN-backed streaming infrastructure handling 1M+ concurrent users with auto-scaling' },
      { industry: 'Healthcare', desc: 'HIPAA-compliant cloud environment with audit logging, encryption, and disaster recovery' },
    ],
    techStack: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'Prometheus', 'Grafana', 'Datadog', 'ArgoCD', 'Helm'],
    benefits: ['Multi-cloud expertise', 'Infrastructure as Code', '99.99% uptime SLAs', 'Cost optimization focus', 'Security-first approach', '24/7 on-call support'],
    faqs: ['Which cloud provider do you recommend?', 'How do you handle cloud cost optimization?', 'Can you migrate our on-premise systems with zero downtime?', 'Do you provide 24/7 cloud operations support?'],
    related: ['custom-software', 'industrial-automation', 'artificial-intelligence', 'iot-edge-computing', 'data-engineering', 'cybersecurity'],
  },

  'data-engineering': {
    slug: 'data-engineering',
    subServiceIcons: ['Workflow', 'Database', 'PieChart', 'ClipboardCheck', 'GitFork', 'LineChart'],
    title: 'Data Engineering & Analytics',
    subtitle: 'We build modern data platforms that unify, transform, and visualize your data. From ETL pipelines and data warehouses to BI dashboards and data governance, we help organizations make faster, smarter decisions backed by trusted data.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80&auto=format&fit=crop',
    challenge: 'Data is scattered across silos, reports are manually created in spreadsheets, and there\'s no single source of truth. Poor data quality, missing governance, and lack of self-service analytics prevent organizations from becoming truly data-driven.',
    frameworkSteps: [
      { title: 'Data Strategy', desc: 'Data maturity assessment, architecture design, and roadmap for building a modern data platform.' },
      { title: 'Pipeline Development', desc: 'ETL/ELT pipeline design, orchestration, monitoring, and error handling for reliable data flow.' },
      { title: 'Storage & Modeling', desc: 'Data warehouse, lakehouse, and dimensional modeling for optimized query performance.' },
      { title: 'BI & Visualization', desc: 'Dashboard design, self-service analytics, and embedded reporting with Power BI, Tableau, or Looker.' },
      { title: 'Governance & Quality', desc: 'Data catalog, lineage tracking, quality rules, and access control for trusted data.' },
      { title: 'AI Enablement', desc: 'Feature stores, training datasets, and analytics layer preparation for AI/ML workloads.' },
    ],
    subServices: [
      { title: 'Data Pipelines (ETL/ELT)', desc: 'Build robust data pipelines with Apache Airflow, dbt, Spark, and cloud-native ETL/ELT services for reliable data flow.' },
      { title: 'Data Warehouse / Lakehouse', desc: 'Design and deploy modern data warehouses and lakehouses on Snowflake, Databricks, BigQuery, or Redshift.' },
      { title: 'BI Dashboards & Reporting', desc: 'Interactive dashboards and self-service reporting with Power BI, Tableau, Looker, or custom-built analytics.' },
      { title: 'Data Governance & Quality', desc: 'Data catalog, lineage, quality rules, profiling, and access controls for trusted, compliant data.' },
      { title: 'Master Data Management (MDM)', desc: 'Centralized master data for products, customers, vendors, and assets with deduplication and golden record management.' },
      { title: 'KPI & Control Tower Dashboards', desc: 'Executive KPI dashboards, control tower views, and real-time operational intelligence for leadership decision-making.' },
    ],
    useCases: [
      { industry: 'Manufacturing', desc: 'Unified data platform consolidating ERP, MES, and IoT data for real-time production intelligence' },
      { industry: 'Retail', desc: 'Customer 360 data platform merging POS, e-commerce, loyalty, and CRM data for personalization' },
      { industry: 'Finance', desc: 'Regulatory reporting automation with data lineage and audit trails for SOX compliance' },
      { industry: 'Telecom', desc: 'Network performance analytics processing 1B+ daily events with real-time anomaly detection' },
      { industry: 'Healthcare', desc: 'Clinical data warehouse integrating EMR, claims, and IoMT data for population health analytics' },
    ],
    techStack: ['Snowflake', 'Databricks', 'Apache Airflow', 'dbt', 'Apache Spark', 'Power BI', 'Tableau', 'Looker', 'BigQuery', 'Redshift', 'Kafka', 'Fivetran', 'Great Expectations'],
    benefits: ['Modern data stack expertise', 'Real-time & batch processing', 'Self-service analytics', 'Data quality automation', 'Scalable architecture', 'Cloud-native solutions'],
    faqs: ['What is the difference between a data warehouse and a data lakehouse?', 'How long does it take to build a modern data platform?', 'Can you connect to our existing ERP and CRM systems?', 'How do you ensure data quality?'],
    related: ['custom-software', 'industrial-automation', 'artificial-intelligence', 'iot-edge-computing', 'cloud-devops', 'cybersecurity'],
  },

  'cybersecurity': {
    slug: 'cybersecurity',
    subServiceIcons: ['ShieldAlert', 'Search', 'Lock', 'Bell', 'GraduationCap', 'Map'],
    title: 'Cybersecurity',
    subtitle: 'We provide comprehensive cybersecurity services, from vulnerability assessments and penetration testing to managed security monitoring and global privacy compliance. Our security experts help organizations identify risks, strengthen defenses, and meet regulatory requirements across GDPR, DPDP, HIPAA, and more.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80&auto=format&fit=crop',
    challenge: 'Cyber threats are evolving faster than most organizations can respond. Undetected vulnerabilities, unpatched systems, lack of incident response plans, and non-compliance with data privacy regulations expose businesses to breaches, fines, and reputational damage.',
    frameworkSteps: [
      { title: 'Security Assessment', desc: 'Comprehensive vulnerability scanning, penetration testing, and risk assessment across your entire attack surface.' },
      { title: 'Architecture Review', desc: 'Security architecture analysis, threat modeling, and hardening recommendations for applications and infrastructure.' },
      { title: 'Continuous Monitoring', desc: '24/7 security monitoring, SIEM integration, alerting, and incident response support.' },
      { title: 'Compliance Framework', desc: 'Gap analysis, policy development, and audit preparation for GDPR, HIPAA, SOC 2, ISO 27001, and regional regulations.' },
      { title: 'Security Training', desc: 'Employee awareness programs, phishing simulations, and secure development training for engineering teams.' },
      { title: 'Privacy Engineering', desc: 'Data mapping, consent management, DSAR workflows, and privacy-by-design implementation.' },
    ],
    subServices: [
      { title: 'VAPT (Web, Mobile, API, Network, Cloud)', desc: 'Identify vulnerabilities and validate real-world risks across your applications, networks, and cloud infrastructure.' },
      { title: 'Security Audits & Hardening', desc: 'Source code review, configuration review, security architecture review, and compliance support (ISO 27001, SOC 2).' },
      { title: 'OT/ICS Security', desc: 'OT network assessment, OT-IT segmentation design, ICS/SCADA security monitoring, and OT incident response planning.' },
      { title: 'SOC/SIEM Monitoring Support', desc: 'Security monitoring and alerting, incident response and recovery, security patch tracking, and periodic re-testing.' },
      { title: 'Privacy Compliance', desc: 'GDPR, DPDP Act (India), PDPL, HIPAA, CCPA/CPRA, LGPD, PIPEDA, and POPIA compliance support.' },
      { title: 'Data Mapping & Privacy Controls', desc: 'Data mapping, RoPA, consent management, cookie compliance, DSAR workflows, and vendor privacy risk review.' },
    ],
    useCases: [
      { industry: 'Banking', desc: 'PCI-DSS compliance assessment and penetration testing for payment processing infrastructure' },
      { industry: 'Healthcare', desc: 'HIPAA security risk assessment with remediation roadmap for hospital network' },
      { industry: 'Manufacturing', desc: 'OT/ICS security assessment and network segmentation for critical infrastructure' },
      { industry: 'E-commerce', desc: 'Web application VAPT and API security testing for 5M+ user platform' },
      { industry: 'Government', desc: 'DPDP Act compliance implementation with data mapping and consent management' },
    ],
    techStack: ['Burp Suite', 'Nessus', 'Metasploit', 'Wireshark', 'OWASP ZAP', 'Splunk', 'QRadar', 'CrowdStrike', 'Qualys', 'Nmap', 'Kali Linux', 'Tenable.io'],
    benefits: ['OWASP & NIST aligned methodologies', 'Certified security professionals (CEH, OSCP, CISSP)', 'Industry-specific compliance expertise', '24/7 monitoring capabilities', 'Global privacy law coverage', 'Actionable remediation reports'],
    faqs: ['What is the difference between a vulnerability assessment and a penetration test?', 'How often should we conduct security assessments?', 'Do you provide compliance certification?', 'Can you secure both IT and OT environments?'],
    related: ['custom-software', 'industrial-automation', 'artificial-intelligence', 'iot-edge-computing', 'cloud-devops', 'data-engineering'],
  },

  'cad-cam': {
    slug: 'cad-cam',
    subServiceIcons: ['Box', 'ScanLine', 'Scan', 'Compass', 'FileText', 'ClipboardCheck'],
    title: 'CAD CAM Services',
    subtitle: 'We deliver comprehensive CAD/CAM services that bridge design and manufacturing. From 3D modeling and CNC programming to simulation and toolpath optimization, our team leverages industry-leading software to reduce cycle times, minimize material waste, and accelerate your product-to-production pipeline.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1920&q=80&auto=format&fit=crop',
    challenge: 'Design-to-manufacturing handoff is plagued by errors, rework, and miscommunication. Manual CNC programming is time-consuming, toolpath inefficiencies increase cycle times, and legacy part documentation is incomplete or lost.',
    frameworkSteps: [
      { title: 'CAD Engineering', desc: 'Parametric modeling, surface modeling, and assembly design in SolidWorks, CATIA, NX, Creo, and AutoCAD.' },
      { title: 'CAM Programming', desc: 'Multi-axis CNC programming with optimized toolpaths, feeds, speeds, and tool selection for reduced cycle times.' },
      { title: 'Simulation & Verification', desc: 'Virtual machining simulation, collision detection, and material removal verification before production.' },
      { title: 'Tooling Design', desc: 'Custom fixtures, jigs, gauges, and cutting tool assemblies optimized for your manufacturing processes.' },
      { title: 'Sheet Metal Engineering', desc: 'Flat pattern development, bend analysis, nesting optimization, and laser/plasma cut-ready outputs.' },
      { title: 'Reverse Engineering', desc: '3D scanning, point cloud processing, and CAD reconstruction for legacy parts without documentation.' },
    ],
    subServices: [
      { title: '3D CAD Modeling & Detailing', desc: 'Parametric and surface modeling in SolidWorks, CATIA, NX, and Creo with GD&T-compliant 2D production drawings.' },
      { title: 'CNC Programming & Toolpath Optimization', desc: 'Multi-axis CNC programming for milling, turning, and wire EDM with optimized toolpaths for reduced cycle times.' },
      { title: 'CAM Simulation & Verification', desc: 'Toolpath simulation, collision detection, and material removal verification to ensure error-free machining.' },
      { title: 'Reverse Engineering', desc: 'Point cloud to CAD reconstruction, legacy part digitization, and dimensional inspection using 3D scanning.' },
      { title: 'Design for Manufacturing (DFM)', desc: 'DFM/DFA analysis ensuring designs are optimized for manufacturability, cost efficiency, and quality.' },
      { title: 'BOM & Drawing Documentation', desc: 'Complete bill of materials, assembly drawings, parts lists, and ISO-compliant engineering documentation.' },
    ],
    useCases: [
      { industry: 'Aerospace', desc: '5-axis CNC programming for turbine blade machining with Vericut simulation and post-processor development' },
      { industry: 'Automotive', desc: 'Sheet metal die design and nesting optimization reducing material waste by 18%' },
      { industry: 'Medical Devices', desc: 'Orthopedic implant CAD modeling with GD&T and FDA-compliant documentation' },
      { industry: 'Heavy Engineering', desc: 'Reverse engineering of legacy pump components using 3D scanning and CAD reconstruction' },
      { industry: 'Tool & Die', desc: 'Injection mold design with flow analysis and toolpath optimization for EDM and milling' },
    ],
    techStack: ['SolidWorks', 'CATIA V5/V6', 'Siemens NX', 'PTC Creo', 'AutoCAD', 'Mastercam', 'Vericut', 'GibbsCAM', 'ANSYS', 'HyperMesh', 'FARO Scanning', 'GOM Inspect'],
    benefits: ['Multi-CAD & multi-CAM platform expertise', 'Post-processor customization for any CNC machine', 'DFM & DFA analysis', 'Rapid prototyping & 3D printing support', 'ISO-compliant documentation', 'Seamless design-to-manufacturing handoff'],
    faqs: ['Which CAD/CAM platforms do you work with?', 'Can you handle multi-axis CNC programming?', 'Do you support reverse engineering of legacy parts?', 'How do you ensure manufacturing quality from CAD designs?'],
    related: ['custom-software', 'industrial-automation', 'artificial-intelligence', 'iot-edge-computing', 'cloud-devops', 'data-engineering'],
  },

  'talent-solutions': {
    slug: 'talent-solutions',
    subServiceIcons: ['UserCheck', 'Users', 'Star', 'Receipt', 'Building', 'BarChart2'],
    title: 'Talent Solutions',
    subtitle: 'We provide comprehensive talent solutions spanning permanent recruitment, contract staffing, payroll outsourcing, HR compliance, and managed workforce services. From sourcing and screening to onboarding, payroll processing, and workforce analytics, we handle the entire employee lifecycle so you can focus on your business.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80&auto=format&fit=crop',
    challenge: 'Hiring takes too long, candidate quality is inconsistent, payroll errors create compliance risks, and workforce scaling for projects is unpredictable. Without a strategic talent partner, companies miss deadlines, overspend on recruitment, face statutory penalties, and lose top candidates to faster-moving competitors.',
    frameworkSteps: [
      { title: 'Recruitment & Talent Acquisition', desc: 'Full-cycle recruitment from JD creation, multi-channel sourcing, screening, and assessments to offer management and onboarding.' },
      { title: 'Contract Staffing & Temp Workforce', desc: 'Flexible staffing solutions for project-based, seasonal, and surge hiring needs with pre-vetted professionals deployed in 5 to 7 days.' },
      { title: 'Payroll Processing & Management', desc: 'End-to-end payroll outsourcing including salary computation, tax deductions, statutory compliance (PF, ESI, PT, TDS), payslip generation, and bank transfers.' },
      { title: 'HR Compliance & Statutory Management', desc: 'Labour law compliance across multiple states and countries including PF/ESI registration, professional tax, labour welfare fund, gratuity, and shop & establishment act compliance.' },
      { title: 'Screening & Background Verification', desc: 'Technical assessments, behavioral interviews, psychometric testing, criminal background checks, employment verification, and education verification.' },
      { title: 'Workforce Analytics & Reporting', desc: 'Hiring funnel metrics, time-to-fill tracking, cost-per-hire analysis, attrition dashboards, payroll cost analytics, and quality-of-hire scoring.' },
    ],
    subServices: [
      { title: 'Permanent Recruitment', desc: 'Full-cycle hiring for permanent roles from JD creation and sourcing to interview coordination, offer management, and onboarding support.' },
      { title: 'Contract Staffing', desc: 'Flexible workforce solutions with pre-vetted contractors for project-based, seasonal, or surge hiring needs. We handle contracts, compliance, and payroll.' },
      { title: 'Executive Search', desc: 'Leadership hiring for C-suite, VP, and director-level roles with confidential, targeted search strategies and psychometric evaluation.' },
      { title: 'Payroll Outsourcing', desc: 'Complete payroll management including salary computation, statutory deductions (PF, ESI, TDS, PT), payslip generation, bank transfers, and year-end tax filings.' },
      { title: 'RPO (Recruitment Process Outsourcing)', desc: 'Dedicated recruitment team embedded within your organization, managing the entire hiring function including sourcing, screening, coordination, and analytics.' },
      { title: 'HR Compliance & Labour Law Advisory', desc: 'Multi-state and multi-country statutory compliance management including PF, ESI, professional tax, minimum wages, labour welfare fund, and audit support.' },
    ],
    useCases: [
      { industry: 'IT Services', desc: 'Ramped up 120-member development team in 8 weeks for a large-scale digital transformation program' },
      { industry: 'Manufacturing', desc: 'Recruited 50+ industrial automation engineers across 3 plants with specialized PLC/SCADA skills' },
      { industry: 'BFSI', desc: 'Executive search for CTO and VP Engineering roles for a Series B fintech startup' },
      { industry: 'Pharma', desc: 'Contract staffing of 30 QA/QC professionals for FDA audit preparation within 4 weeks' },
      { industry: 'Retail', desc: 'Campus hiring drive across 15 engineering colleges sourcing 200+ freshers for tech roles' },
    ],
    techStack: ['LinkedIn Recruiter', 'Naukri', 'HackerRank', 'Codility', 'Workday', 'SAP SuccessFactors', 'BambooHR', 'greytHR', 'Zoho Payroll', 'Keka HR', 'ATS Platforms', 'Video Interview Platforms'],
    benefits: ['40+ industry verticals covered', 'Proprietary talent database of 500K+ profiles', 'Rapid turnaround, contract staff in 5 to 7 days', 'Multi-state payroll compliance across India', 'International payroll for UAE, Singapore & USA', 'Dedicated account managers per client'],
    faqs: ['What is your average time-to-fill for technical roles?', 'How do you ensure candidate quality?', 'Do you handle payroll and compliance for contract staff?', 'Can you manage payroll for employees in multiple countries?'],
    related: ['custom-software', 'industrial-automation', 'training', 'digital-marketing', 'managed-services', 'cloud-devops'],
  },

  'training': {
    slug: 'training',
    subServiceIcons: ['Code2', 'Presentation', 'Factory', 'FlaskConical', 'ShieldX', 'Trophy'],
    title: 'Training',
    subtitle: 'We design and deliver corporate training programs that bridge skill gaps and accelerate professional development. From technology bootcamps to leadership workshops, our training solutions are customized to your industry, roles, and organizational goals.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80&auto=format&fit=crop',
    challenge: 'Generic training programs do not address industry-specific skill gaps, certifications expire without tracking, and there is no measurement of training effectiveness, making L&D budgets hard to justify and skill development unpredictable.',
    frameworkSteps: [
      { title: 'Training Needs Analysis', desc: 'Skills gap assessment, competency mapping, and prioritized training plan development.' },
      { title: 'Curriculum Design', desc: 'Custom course development with learning objectives, hands-on labs, and assessment frameworks.' },
      { title: 'Delivery & Facilitation', desc: 'On-site, virtual, and hybrid training delivery by certified industry practitioners.' },
      { title: 'Assessment & Certification', desc: 'Pre/post assessments, practical evaluations, and verifiable digital certificates.' },
      { title: 'LMS Setup & Management', desc: 'Learning management system deployment, content upload, progress tracking, and completion analytics.' },
      { title: 'Effectiveness Measurement', desc: 'Kirkpatrick model evaluation, skill application tracking, and ROI analysis of training investments.' },
    ],
    subServices: [
      { title: 'Technical Training', desc: 'Hands-on training in programming, cloud, DevOps, data science, AI/ML, IoT, and cybersecurity for engineering teams.' },
      { title: 'Corporate Workshops', desc: 'Customized workshops on agile methodologies, project management, digital transformation, and industry best practices.' },
      { title: 'Industrial Automation Training', desc: 'PLC/SCADA programming, HMI design, industrial networking, and smart factory operations training.' },
      { title: 'AI / Data Training', desc: 'Machine learning, data engineering, analytics, Python, and AI tools training for technical and business teams.' },
      { title: 'Cybersecurity Awareness', desc: 'Security awareness programs, phishing simulations, secure coding practices, and compliance training.' },
      { title: 'Leadership Development', desc: 'Executive coaching, leadership bootcamps, communication skills, and management training for emerging leaders.' },
    ],
    useCases: [
      { industry: 'Government', desc: 'Naan Mudhalvan program training 5000+ students in AI, IoT, and cloud computing across Tamil Nadu' },
      { industry: 'Manufacturing', desc: 'Industrial automation training for 200+ shopfloor operators on PLC programming and HMI design' },
      { industry: 'IT Services', desc: 'Cloud certification bootcamp (AWS/Azure) for 150 engineers with 92% pass rate' },
      { industry: 'Banking', desc: 'Cybersecurity awareness training for 3000+ employees with phishing simulation exercises' },
      { industry: 'Pharma', desc: 'Data analytics and Power BI training for quality and regulatory affairs teams' },
    ],
    techStack: ['Moodle LMS', 'Microsoft Teams', 'Zoom', 'Jupyter Notebooks', 'AWS Training Labs', 'Azure Sandbox', 'HackerRank', 'Google Classroom', 'Articulate 360', 'Custom Lab Environments'],
    benefits: ['Customized curriculum design', 'Hands-on project-based learning', 'Certified industry trainers', 'Pre & post assessment tracking', 'On-site and virtual delivery', 'Training effectiveness analytics'],
    faqs: ['Can you customize training content for our specific industry?', 'Do you provide certifications after training?', 'What is the minimum batch size for corporate training?', 'How do you measure training effectiveness?'],
    related: ['custom-software', 'artificial-intelligence', 'cybersecurity', 'talent-solutions', 'digital-marketing', 'managed-services'],
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    subServiceIcons: ['SearchCode', 'Share2', 'BookOpen', 'Megaphone', 'Palette', 'MousePointerClick'],
    title: 'Digital Marketing',
    subtitle: 'We help businesses build brand visibility, generate qualified leads, and drive revenue through strategic digital marketing. Our full-service approach covers everything from SEO and content to paid media and social engagement, all backed by analytics and performance tracking.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1920&q=80&auto=format&fit=crop',
    challenge: 'Marketing budgets are wasted on channels that do not convert, content is created without strategy, and there is no connection between marketing spend and revenue. Without data-driven optimization, growth stalls and competitors capture market share.',
    frameworkSteps: [
      { title: 'SEO & Technical Audit', desc: 'Site crawl analysis, keyword research, technical fixes, content optimization, and link building strategies.' },
      { title: 'Content Strategy', desc: 'Editorial calendar planning, content creation, SEO writing, and content performance analytics.' },
      { title: 'Paid Media Management', desc: 'Campaign setup, audience targeting, bid optimization, and ROAS tracking across Google, LinkedIn, and Meta.' },
      { title: 'Social Media Management', desc: 'Content creation, community management, influencer outreach, and social listening.' },
      { title: 'Marketing Automation', desc: 'Email sequences, lead scoring, CRM integration, and nurture campaign design.' },
      { title: 'Analytics & Reporting', desc: 'UTM tracking, attribution modeling, conversion funnels, and monthly performance dashboards.' },
    ],
    subServices: [
      { title: 'SEO & Search Marketing', desc: 'Technical SEO, on-page optimization, link building, and local SEO to improve organic rankings and traffic.' },
      { title: 'Social Media Marketing', desc: 'Strategy, content creation, community management, and paid campaigns across LinkedIn, Instagram, Facebook, and more.' },
      { title: 'Content Marketing', desc: 'Blog posts, whitepapers, case studies, infographics, and video content that educates, engages, and converts.' },
      { title: 'Performance Marketing (Ads)', desc: 'Google Ads, LinkedIn Ads, Meta Ads, and programmatic campaigns optimized for ROI and lead quality.' },
      { title: 'Branding & Creative', desc: 'Brand identity, logo design, pitch decks, explainer videos, and visual communication for digital-first brands.' },
      { title: 'Website Optimization & Analytics', desc: 'Conversion rate optimization, A/B testing, heatmaps, UTM tracking, and performance analytics dashboards.' },
    ],
    useCases: [
      { industry: 'B2B SaaS', desc: 'SEO strategy that increased organic traffic by 340% and generated 200+ qualified leads/month' },
      { industry: 'E-commerce', desc: 'Google Ads and Meta campaigns achieving 5.2x ROAS for a D2C fashion brand' },
      { industry: 'Real Estate', desc: 'Local SEO and lead generation campaign for 12 project launches across 5 cities' },
      { industry: 'Education', desc: 'Social media strategy growing LinkedIn following from 5K to 50K with 8% engagement rate' },
      { industry: 'Manufacturing', desc: 'Content marketing with technical blogs, case studies, and whitepapers driving 150+ MQLs/quarter' },
    ],
    techStack: ['Google Analytics 4', 'Google Ads', 'Meta Business Suite', 'LinkedIn Campaign Manager', 'SEMrush', 'Ahrefs', 'HubSpot', 'Mailchimp', 'Canva', 'Hootsuite', 'Google Search Console', 'Hotjar'],
    benefits: ['Data-driven campaigns', 'Monthly analytics reports', 'A/B testing optimization', 'Multi-channel strategy', 'Lead generation focus', 'Brand consistency across touchpoints'],
    faqs: ['How long before we see results from SEO?', 'What is your approach to paid advertising?', 'Do you manage social media accounts?', 'How do you measure marketing ROI?'],
    related: ['custom-software', 'artificial-intelligence', 'talent-solutions', 'training', 'managed-services', 'cloud-devops'],
  },

  'managed-services': {
    slug: 'managed-services',
    subServiceIcons: ['LifeBuoy', 'CloudCog', 'Eye', 'PackageCheck', 'Timer', 'RefreshCw'],
    title: 'Managed Services & Support',
    subtitle: 'We provide end-to-end managed services and support, from application maintenance and cloud operations to incident handling and continuous improvement. Our dedicated support teams ensure your systems are always available, secure, and optimized.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80&auto=format&fit=crop',
    challenge: 'Post-go-live systems degrade without proactive monitoring, patches pile up, incidents take too long to resolve, and there is no structured improvement plan. Without managed services, operational risk grows and system health deteriorates over time.',
    frameworkSteps: [
      { title: 'Service Desk Setup', desc: 'Ticketing system configuration, SLA definition, escalation matrix, and team onboarding.' },
      { title: 'Application Support', desc: 'L1/L2/L3 support for bug fixes, configuration changes, and minor enhancements.' },
      { title: 'Infrastructure Ops', desc: 'Server monitoring, patching, backup management, and infrastructure health checks.' },
      { title: 'Incident Management', desc: '24/7 incident detection, triage, resolution, and root cause analysis with SLA compliance.' },
      { title: 'Release Management', desc: 'Planned upgrades, patch deployment, regression testing, and release documentation.' },
      { title: 'Continuous Improvement', desc: 'Quarterly reviews, optimization recommendations, and technology roadmap updates.' },
    ],
    subServices: [
      { title: 'Application Support (L1/L2/L3)', desc: 'Tiered application support, from user queries and configuration changes to complex debugging and code fixes.' },
      { title: 'Cloud Ops / SRE', desc: 'Cloud infrastructure management, site reliability engineering, auto-scaling, and availability optimization.' },
      { title: 'Monitoring & Incident Handling', desc: '24/7 system monitoring, alerting, incident triage, resolution, and root cause analysis with SLA tracking.' },
      { title: 'Patch & Upgrade Management', desc: 'Scheduled patching, version upgrades, security updates, and regression testing with zero-downtime deployment.' },
      { title: 'SLA-based Support', desc: 'Defined SLAs for response time, resolution time, uptime guarantees, and monthly performance reporting.' },
      { title: 'Continuous Improvement Roadmap', desc: 'Quarterly reviews, performance optimization, technology debt reduction, and proactive enhancement planning.' },
    ],
    useCases: [
      { industry: 'Banking', desc: '24/7 L1-L3 support for core banking platform serving 2M+ users with 99.99% uptime SLA' },
      { industry: 'E-commerce', desc: 'Cloud ops and SRE for high-traffic platform handling 500K daily orders during peak season' },
      { industry: 'Manufacturing', desc: 'MES and IoT platform support across 8 plants with incident response under 15-minute SLA' },
      { industry: 'Healthcare', desc: 'Application maintenance for EMR system with HIPAA-compliant patching and security monitoring' },
      { industry: 'Telecom', desc: 'Infrastructure monitoring and capacity planning for 99.999% availability on core network systems' },
    ],
    techStack: ['ServiceNow', 'Jira Service Management', 'PagerDuty', 'Datadog', 'New Relic', 'Prometheus', 'Grafana', 'Splunk', 'OpsGenie', 'Freshdesk', 'Zabbix', 'Ansible'],
    benefits: ['24/7 support coverage', 'Defined SLAs & KPIs', 'Proactive monitoring', 'Cost-effective operations', 'Dedicated account managers', 'Continuous improvement focus'],
    faqs: ['What SLA tiers do you offer?', 'How do you handle critical incidents?', 'Can you support applications you did not build?', 'How do you measure and report on service quality?'],
    related: ['custom-software', 'cloud-devops', 'cybersecurity', 'data-engineering', 'iot-edge-computing', 'artificial-intelligence'],
  },

  'vr-ar': {
    slug: 'vr-ar',
    subServiceIcons: ['Glasses', 'HandHelping', 'Boxes', 'MapPin', 'MonitorPlay', 'Radar'],
    title: 'VR/AR & Spatial Intelligence',
    subtitle: 'We design and develop VR, AR, and mixed reality solutions that transform how teams visualize, interact, and collaborate. From immersive training and remote assistance to spatial digital twins and indoor intelligence, our XR practice bridges the physical and digital worlds.',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=1920&q=80&auto=format&fit=crop',
    challenge: 'Traditional 2D screens cannot communicate spatial complexity, such as factory layouts, equipment assemblies, hazardous procedures, or facility operations. Teams waste time interpreting flat drawings, travel for on-site inspections, and struggle with training that does not translate to real-world performance.',
    frameworkSteps: [
      { title: 'XR Strategy & Assessment', desc: 'Use-case identification, hardware selection, platform evaluation, and immersive experience roadmap creation.' },
      { title: '3D Asset Creation', desc: 'Photogrammetry, LiDAR scanning, CAD-to-XR conversion, and optimized 3D model creation for real-time rendering.' },
      { title: 'Experience Development', desc: 'VR/AR application development with interaction design, spatial UI/UX, and hand/eye tracking integration.' },
      { title: 'Spatial Data Integration', desc: 'LiDAR point cloud processing, indoor mapping, BIM integration, and IoT sensor overlay for spatial intelligence.' },
      { title: 'Edge & Cloud Rendering', desc: 'Cloud-streamed XR, edge rendering for low-latency, and device management for enterprise headset fleets.' },
      { title: 'Deployment & Training', desc: 'User onboarding, content management system setup, analytics dashboard, and ongoing content updates.' },
    ],
    subServices: [
      { title: 'Immersive VR Training & Simulation', desc: 'Build realistic VR training environments for safety procedures, equipment operation, hazardous scenarios, and onboarding, reducing training time and improving retention.' },
      { title: 'AR Remote Assistance & Guided Work', desc: 'AR-powered remote expert guidance, step-by-step work instructions, and hands-free digital overlays for maintenance, assembly, and field service.' },
      { title: '3D Visualization & Digital Twins', desc: 'Interactive 3D models of facilities, equipment, and production lines powered by LiDAR scans, CAD imports, and real-time IoT data overlays.' },
      { title: 'Indoor Positioning & Spatial Mapping', desc: 'BLE/UWB-based indoor navigation, LiDAR point cloud processing, and spatial mapping for warehouses, factories, and large facilities.' },
      { title: 'Mixed Reality Collaboration', desc: 'Multi-user MR experiences for design reviews, virtual walkthroughs, and cross-site collaboration using Meta Quest, HoloLens, and Apple Vision Pro.' },
      { title: 'Spatial Intelligence & Analytics', desc: 'Spatial data processing, heatmaps, movement analytics, occupancy intelligence, and location-aware dashboards for facility optimization.' },
    ],
    useCases: [
      { industry: 'Oil & Gas', desc: 'VR safety training for hazardous confined space entry reducing incident rates by 70%' },
      { industry: 'Manufacturing', desc: 'AR-guided assembly instructions on HoloLens reducing error rates by 45% for complex assemblies' },
      { industry: 'Real Estate', desc: 'Immersive 3D property walkthroughs with spatial analytics for buyer engagement optimization' },
      { industry: 'Healthcare', desc: 'VR surgical simulation for training orthopedic procedures with haptic feedback' },
      { industry: 'Warehousing', desc: 'Indoor positioning system with BLE beacons for real-time asset tracking and navigation' },
    ],
    techStack: ['Unity', 'Unreal Engine', 'Meta Quest SDK', 'ARKit', 'ARCore', 'Microsoft HoloLens', 'Apple Vision Pro', 'Matterport', 'LiDAR Processing', 'WebXR', 'Three.js', 'Blender'],
    benefits: ['Cross-platform XR development', 'LiDAR & photogrammetry expertise', 'Enterprise headset fleet management', 'Real-time IoT integration', 'Reduced training costs by 60%+', 'Hardware-agnostic approach'],
    faqs: ['Which VR/AR headsets do you support?', 'Can XR solutions integrate with our existing IoT and enterprise systems?', 'What is the ROI of VR training compared to traditional methods?', 'Do you support WebXR for browser-based experiences?'],
    related: ['custom-software', 'industrial-automation', 'artificial-intelligence', 'iot-edge-computing', 'cloud-devops', 'data-engineering'],
  },
};

const serviceList = [
  { slug: 'custom-software', title: 'Custom Software Development' },
  { slug: 'industrial-automation', title: 'Industrial Automation & Smart Factory' },
  { slug: 'artificial-intelligence', title: 'Artificial Intelligence' },
  { slug: 'iot-edge-computing', title: 'IoT & Edge Computing' },
  { slug: 'cloud-devops', title: 'Cloud & DevOps Services' },
  { slug: 'data-engineering', title: 'Data Engineering & Analytics' },
  { slug: 'cybersecurity', title: 'Cybersecurity' },
  { slug: 'cad-cam', title: 'CAD CAM Services' },
  { slug: 'talent-solutions', title: 'Talent Solutions' },
  { slug: 'training', title: 'Training' },
  { slug: 'digital-marketing', title: 'Digital Marketing' },
  { slug: 'managed-services', title: 'Managed Services & Support' },
  { slug: 'vr-ar', title: 'VR/AR & Spatial Intelligence' },
];


const industryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Healthcare': Stethoscope,
  'Manufacturing': HardHat,
  'Fintech': CreditCard,
  'Logistics': Truck,
  'Retail': ShoppingBag,
  'Automotive': Car,
  'Pharma': Pill,
  'FMCG': PackageOpen,
  'Chemicals': FlaskConical,
  'Steel & Metals': Layers2,
  'Oil & Gas': Fuel,
  'Energy': Zap,
  'Banking': Landmark,
  'Education': GraduationCap,
  'Media': Film,
  'Mining': Pickaxe,
  'Cold Chain': Snowflake,
  'Utilities': TowerControl,
  'Telecom': Radio,
  'Finance': Coins,
  'SaaS': Cloud,
  'B2B SaaS': Cloud,
  'E-commerce': Store,
  'Real Estate': HomeIcon,
  'Government': Scale,
  'IT Services': Code2,
  'BFSI': Landmark,
  'Aerospace': Gauge,
  'Medical Devices': Microscope,
  'Heavy Engineering': Wrench,
  'Tool & Die': Wrench,
  'Warehousing': Warehouse,
};

function IndustryIcon({ industry }: { industry: string }) {
  const Icon = industryIconMap[industry] || Building2;
  return <Icon className="w-5 h-5 text-[#d4af37]" />;
}

// Dynamic icon renderer for sub-service cards
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, Smartphone, Building2, Plug, LayoutTemplate, Wrench,
  BarChart3, CalendarClock, ShieldCheck, Warehouse, Navigation, Layers,
  ScanEye, TrendingUp, MessageSquareDot, AlertTriangle, Lightbulb, Puzzle,
  Cpu, Server, Radio, MonitorSmartphone, Brain, Gauge,
  Cloud, MoveRight, GitMerge, Container, Activity, DollarSign,
  Workflow, Database, PieChart, ClipboardCheck, GitFork, LineChart,
  ShieldAlert, Search, Lock, Bell, GraduationCap, Map,
  Box, ScanLine, Scan, Compass, FileText,
  UserCheck, Users, Star, Receipt, Building, BarChart2,
  Code2, Presentation, Factory, FlaskConical, ShieldX, Trophy,
  SearchCode, Share2, BookOpen, Megaphone, Palette, MousePointerClick,
  LifeBuoy, CloudCog, Eye, PackageCheck, Timer, RefreshCw,
  Glasses, HandHelping, Boxes, MapPin, MonitorPlay, Radar,
};

function SubServiceIcon({ name }: { name?: string }) {
  const Icon = name ? iconMap[name] : null;
  return (
    <div className="p-2.5 bg-[#d4af37]/10 rounded-lg w-fit mb-4 group-hover:bg-[#d4af37]/20 transition-colors">
      {Icon
        ? <Icon className="w-5 h-5 text-[#d4af37]" />
        : <div className="w-5 h-5 rounded-full bg-[#d4af37]" />
      }
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData[slug || ''];

  if (!service) return <Navigate to="/services" replace />;

  const relatedServices = service.related
    .map(s => serviceList.find(sl => sl.slug === s))
    .filter(Boolean)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-[#999] text-xs mb-6">
            <Link to="/" className="hover:text-[#c0c0c0] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#c0c0c0] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#c0c0c0]">{service.title}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl mb-6 max-w-4xl">
            {service.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-[#c0c0c0] max-w-3xl leading-relaxed mb-8">
            {service.subtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300 font-medium">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="mt-10 h-px w-24 bg-[#d4af37] origin-left" />
        </div>
      </section>

      {/* Challenge */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl mb-5 text-[#d4af37]">The Challenge</h2>
            <p className="text-[#c0c0c0] leading-relaxed">{service.challenge}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl mb-5">Delivery Framework</h2>
            <p className="text-[#c0c0c0] text-sm mb-6">A structured engagement model ensuring quality, transparency, and measurable outcomes.</p>
            <div className="space-y-4">
              {service.frameworkSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-display text-sm text-[#d4af37] flex-shrink-0 mt-0.5">0{i + 1}</span>
                  <div>
                    <div className="text-sm font-medium mb-1">{step.title}</div>
                    <div className="text-xs text-[#bbb] leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="bg-[#111] py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-3">What We Offer</h2>
            <p className="text-[#c0c0c0]">Our Sub-Services</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-6 bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/30 transition-colors group"
              >
                <SubServiceIcon name={service.subServiceIcons?.[i]} />
                <h3 className="font-medium mb-2 text-sm group-hover:text-[#d4af37] transition-colors">{sub.title}</h3>
                <p className="text-[#bbb] text-xs leading-relaxed">{sub.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl mb-3">Real-World Impact</h2>
          <p className="text-[#c0c0c0]">Industry Use Cases</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-5 bg-[#1e1e1e] border border-[#2e2e2e] rounded-lg hover:border-[#d4af37]/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#d4af37]/10 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors flex-shrink-0">
                  <IndustryIcon industry={uc.industry} />
                </div>
                <span className="text-[#d4af37] text-xs tracking-widest uppercase font-medium">{uc.industry}</span>
              </div>
              <p className="text-[#c0c0c0] text-sm leading-relaxed">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack + Benefits */}
      <section className="bg-[#111] py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-[#1a1a1a] border border-[#2e2e2e] rounded-md text-sm text-[#ccc] hover:border-[#d4af37]/40 hover:text-white transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl mb-6">Why Choose Us</h2>
            <ul className="space-y-3">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#c0c0c0]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-2xl mb-8">
          Frequently Asked Questions
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {service.faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-5 bg-[#1e1e1e] border border-[#2e2e2e] rounded-lg"
            >
              <p className="text-sm text-[#ccc]">{faq}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#111] py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-2xl mb-8">
            Explore Other Services
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedServices.map((rel, i) => (
              rel && (
                <motion.div
                  key={rel.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={`/services/${rel.slug}`}
                    className="flex items-center justify-between p-5 bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg hover:border-[#d4af37]/40 hover:text-[#d4af37] transition-colors group"
                  >
                    <span className="text-sm">{rel.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-[#c0c0c0] mb-8">Let's discuss how our {service.title.toLowerCase()} can transform your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300 font-medium">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-lg hover:border-[#d4af37]/60 hover:text-[#d4af37] transition-all duration-300">
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
