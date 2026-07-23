import { Link } from 'react-router';
import { useI18n } from '../i18n/context';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1e1e1e] pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 mb-10 border-b border-[#1a1a1a]">
          <div>
            <img src="/logo.png" alt="Virtech Visuals" className="h-14 w-auto mb-2" />
            <p className="text-[#888] text-xs tracking-wide">{t('footer.tagline')}</p>
          </div>
          <div className="flex flex-wrap gap-4 items-start">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#bbb] tracking-widest uppercase">{t('footer.industrial')}</span>
              <span className="font-display text-base text-[#c0c0c0]">Digi Sailor</span>
              <a href="mailto:business@virtechvisuals.com" className="text-[10px] text-[#888] hover:text-[#d4af37] transition-colors">
                business@virtechvisuals.com
              </a>
            </div>
            <div className="w-px bg-[#1e1e1e] hidden md:block self-stretch" />
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#bbb] tracking-widest uppercase">{t('footer.creative')}</span>
              <span className="font-display text-base text-[#c0c0c0]">Creative Studio</span>
              <a href="https://wa.me/33780843487" target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#888] hover:text-[#d4af37] transition-colors">
                +33 7 80 84 34 87
              </a>
            </div>
            <div className="w-px bg-[#1e1e1e] hidden md:block self-stretch" />
            {/* Language switcher in footer */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#bbb] tracking-widest uppercase">Language</span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[40px] mb-14">
          <div className="col-span-2 md:col-span-1" style={{minWidth: 0}}>
            <p className="text-[#999] text-xs leading-relaxed mb-5">{t('footer.desc')}</p>
          </div>

          <div>
            <h4 className="text-xs text-[#d4af37] tracking-widest uppercase mb-5">{t('footer.solutions')}</h4>
            <ul className="space-y-[12px]">
              {[
                { label: 'Production Performance', to: '/smart-factory/production-performance-planning' },
                { label: 'Quality Intelligence',   to: '/smart-factory/quality-intelligence' },
                { label: 'Maintenance & Reliability', to: '/smart-factory/maintenance-reliability-intelligence' },
                { label: 'Warehouse Intelligence', to: '/smart-factory/warehouse-intelligence' },
                { label: 'Spatial & Vision AI',    to: '/smart-factory/spatial-intelligence-asset-tracking' },
                { label: 'Digital Twin & Robotics', to: '/smart-factory/digital-twins-simulation' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.to} className="text-[#888] text-xs hover:text-[#c0c0c0] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-[#d4af37] tracking-widest uppercase mb-5">{t('footer.services')}</h4>
            <ul className="space-y-[12px]">
              {[
                { label: 'Custom Software Dev',    slug: 'custom-software' },
                { label: 'Artificial Intelligence', slug: 'artificial-intelligence' },
                { label: 'Cloud & DevOps',          slug: 'cloud-devops' },
                { label: 'IoT & Edge Computing',    slug: 'iot-edge-computing' },
                { label: 'Cybersecurity',           slug: 'cybersecurity' },
                { label: 'Talent Solutions',        slug: 'talent-solutions' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={`/services/${item.slug}`} className="text-[#888] text-xs hover:text-[#c0c0c0] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-[#d4af37] tracking-widest uppercase mb-5">{t('footer.products')}</h4>
            <ul className="space-y-[12px]">
              {[
                { label: 'GateKeeper',    slug: 'gatekeeper' },
                { label: 'IncidentGPT',  slug: 'incidentgpt' },
                { label: 'VisionSafe AI', slug: 'visionsafe-ai' },
                { label: 'DigiTrack',     slug: 'digitrack' },
                { label: 'PermitFlows',   slug: 'permitflows' },
                { label: 'PredictPulse',  slug: 'predictpulse' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={`/products/${item.slug}`} className="text-[#888] text-xs hover:text-[#c0c0c0] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-[#d4af37] tracking-widest uppercase mb-5">{t('footer.company')}</h4>
            <ul className="space-y-3 mb-8">
              {[
                  { label: 'AI',              to: '/ai' },
                { label: 'Technologies',    to: '/technologies' },
                { label: 'Creative Studio', to: '/creative-studio' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.to} className="text-[#888] text-xs hover:text-[#c0c0c0] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xs text-[#d4af37] tracking-widest uppercase mb-3">{t('footer.touch')}</h4>
            <a href="mailto:business@virtechvisuals.com" className="text-[#888] text-xs hover:text-[#c0c0c0] transition-colors block mb-1">
              business@virtechvisuals.com
            </a>
            <a href="https://wa.me/33780843487" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="text-[#888] text-xs hover:text-[#25D366] transition-colors block">
              +33 7 80 84 34 87
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#161616] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#aaa] text-xs">{t('footer.copyright')}</p>
          <div className="flex gap-6">
            {[
              { key: 'footer.privacy', href: '#' },
              { key: 'footer.terms',   href: '#' },
              { key: 'footer.cookies', href: '#' },
            ].map(item => (
              <a key={item.key} href={item.href} className="text-[#aaa] text-xs hover:text-[#999] transition-colors">
                {t(item.key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
