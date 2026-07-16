import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1e1e1e] pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 mb-10 border-b border-[#1a1a1a]">
          <div>
            <div className="font-display text-3xl text-[#d4af37] mb-1">Virtech Visuals</div>
            <p className="text-[#444] text-xs tracking-wide">Technology · Creativity · Results</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#333] tracking-widest uppercase">Industrial Tech</span>
              <span className="font-display text-base text-[#a0a0a0]">Digi Sailor</span>
              <span className="text-[10px] text-[#444]">hello@virtechvisuals.com</span>
            </div>
            <div className="w-px bg-[#1e1e1e] hidden md:block" />
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#333] tracking-widest uppercase">Creative Services</span>
              <span className="font-display text-base text-[#a0a0a0]">Creative Studio</span>
              <span className="text-[10px] text-[#444]">hello@virtechvisuals.com</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <p className="text-[#444] text-xs leading-relaxed mb-6">
              End-to-end Smart Factory solutions and technology services, from shopfloor to boardroom.
            </p>
            <div className="flex flex-wrap gap-2">
              {['ISO 27001', 'ISO 9001', 'SOC 2'].map(cert => (
                <span key={cert} className="text-[9px] tracking-widest text-[#444] border border-[#222] px-2 py-1 rounded">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs text-[#d4af37] tracking-widest uppercase mb-5">Solutions</h4>
            <ul className="space-y-3">
              {[
                'Production Performance',
                'Quality Intelligence',
                'Maintenance & Reliability',
                'Warehouse Intelligence',
                'Spatial & Vision AI',
                'Digital Twin & Robotics',
              ].map(item => (
                <li key={item}>
                  <Link to="/smart-factory" className="text-[#444] text-xs hover:text-[#a0a0a0] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-[#d4af37] tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Custom Software Dev', slug: 'custom-software' },
                { label: 'Artificial Intelligence', slug: 'artificial-intelligence' },
                { label: 'Cloud & DevOps', slug: 'cloud-devops' },
                { label: 'IoT & Edge Computing', slug: 'iot-edge-computing' },
                { label: 'Cybersecurity', slug: 'cybersecurity' },
                { label: 'Talent Solutions', slug: 'talent-solutions' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={`/services/${item.slug}`} className="text-[#444] text-xs hover:text-[#a0a0a0] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-[#d4af37] tracking-widest uppercase mb-5">Products</h4>
            <ul className="space-y-3">
              {['GateKeeper', 'IncidentGPT', 'VisionSafe AI', 'DigiTrack', 'PermitFlows', 'PredictPulse'].map(item => (
                <li key={item}>
                  <Link to="/products" className="text-[#444] text-xs hover:text-[#a0a0a0] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-[#d4af37] tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3 mb-8">
              {[
                { label: 'Case Studies', to: '/case-studies' },
                { label: 'AI', to: '/ai' },
                { label: 'Technologies', to: '/technologies' },
                { label: 'Creative Studio', to: '/creative-studio' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.to} className="text-[#444] text-xs hover:text-[#a0a0a0] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xs text-[#d4af37] tracking-widest uppercase mb-3">Get in Touch</h4>
            <a href="mailto:hello@virtechvisuals.com" className="text-[#444] text-xs hover:text-[#a0a0a0] transition-colors block mb-1">
              hello@virtechvisuals.com
            </a>
          </div>
        </div>

        <div className="border-t border-[#161616] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#2e2e2e] text-xs">&copy; 2026 Virtech Visuals. Digi Sailor is a division of Virtech Visuals. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="text-[#2e2e2e] text-xs hover:text-[#555] transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
