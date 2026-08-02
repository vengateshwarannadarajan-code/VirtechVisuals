import { useState } from 'react';
import { Mail, Phone, Globe, Building2, Download, CheckCircle, ExternalLink } from 'lucide-react';

const VCARD = `BEGIN:VCARD
VERSION:3.0
FN:Vengateshwaran Nadarajan
N:Nadarajan;Vengateshwaran;;;
ORG:Virtech Visuals
TITLE:Co-Founder & Chief Operating Officer
EMAIL:business@virtechvisuals.com
TEL:+33751064387
URL:https://virtechvisuals.com
ADR;TYPE=WORK:;;Paris;Île-de-France;;France
NOTE:Smart Factory · Industrial IoT · Creative Studio
END:VCARD`;

function saveVCard() {
  const blob = new Blob([VCARD], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'vengateshwaran-nadarajan-virtech.vcf';
  a.click();
  URL.revokeObjectURL(url);
}

const links = [
  { icon: Mail,     label: 'Email',          href: 'mailto:business@virtechvisuals.com', display: 'business@virtechvisuals.com' },
  { icon: Phone,    label: 'Phone',           href: 'tel:+33751064387',                  display: '+33 7 51 06 43 87' },
  { icon: Globe,    label: 'Smart Factory',   href: 'https://virtechvisuals.com/smart-factory', display: 'virtechvisuals.com/smart-factory' },
  { icon: Building2,label: 'Creative Studio', href: 'https://virtechvisuals.com/creative-studio', display: 'virtechvisuals.com/creative-studio' },
  { icon: Building2,    label: 'Digi Sailor', href: 'https://www.digisailor.com',        display: 'digisailor.com' },
];

export default function BusinessCard() {
  const [saved, setSaved]             = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  function handleSave() {
    saveVCard();
    setSaved(true);
    setTimeout(() => setSaved(false), 2800);
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0D1A',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '40px 16px',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Ambient glow */}
      <div style={{
        pointerEvents: 'none', position: 'fixed', inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 10%, rgba(212,175,55,0.08) 0%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', width: '100%', maxWidth: '384px', margin: '0 auto' }}>

        {/* Gold top line */}
        <div style={{ height: 3, marginBottom: 32, borderRadius: 9999, background: 'linear-gradient(to right, transparent, #d4af37, transparent)', opacity: 0.7 }} />

        {/* Card */}
        <div style={{
          position: 'relative', borderRadius: 4,
          border: '1px solid rgba(212,175,55,0.2)',
          overflow: 'hidden',
          background: 'linear-gradient(160deg, #0F1526 0%, #0A0D1A 60%, #0d1020 100%)',
          boxShadow: '0 0 0 1px rgba(212,175,55,0.06), 0 32px 80px rgba(0,0,0,0.6)',
        }}>
          {/* Corner accents */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: 64, height: 64, background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: 80, height: 80, background: 'linear-gradient(315deg, rgba(212,175,55,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />

          {/* Header */}
          <div style={{ padding: '40px 32px 32px', textAlign: 'center', position: 'relative' }}>

            {/* Badge */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '4px 12px', fontSize: 10, letterSpacing: '0.18em',
                textTransform: 'uppercase', border: '1px solid rgba(212,175,55,0.3)',
                color: '#d4af37', background: 'rgba(212,175,55,0.06)',
                fontFamily: "'Geist Mono', monospace",
              }}>
                <CheckCircle size={9} strokeWidth={2.5} /> VIRTECH VISUALS
              </span>
            </div>

            {/* Logo */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <img src="/logo.png" alt="Virtech Visuals" style={{ height: 80, width: 80, objectFit: 'contain' }} />
            </div>

            {/* Name */}
            <h1 style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.06em', color: '#EDE8DC', fontWeight: 600, margin: '0 0 2px', lineHeight: 1.2 }}>
              <span style={{ fontSize: 26 }}>V</span><span style={{ fontSize: 18 }}>ENGATESHWARAN</span>
            </h1>
            <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: 24, letterSpacing: '0.06em', color: '#d4af37', fontWeight: 700, margin: '0 0 12px', lineHeight: 1.2 }}>
              NADARAJAN
            </h1>

            {/* Title */}
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 14, color: '#B5AFA3', margin: '0 0 4px' }}>
              Co-Founder &amp; Chief Operating Officer
            </p>

            {/* Location */}
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.55)', margin: 0 }}>
              Paris, France
            </p>

            {/* Divider */}
            <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(212,175,55,0.15)' }} />
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 8, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.35)' }}>
                DIGI SAILOR · CREATIVE STUDIO
              </span>
              <div style={{ flex: 1, height: 1, background: 'rgba(212,175,55,0.15)' }} />
            </div>
          </div>

          {/* Links */}
          <div style={{ padding: '0 24px 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {links.map((link, i) => {
              const Icon = link.icon;
              const isHovered = hoveredLink === i;
              return (
                <a key={link.label} href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredLink(i)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '12px 16px', borderRadius: 2,
                    background: isHovered ? 'rgba(212,175,55,0.07)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${isHovered ? 'rgba(212,175,55,0.25)' : 'rgba(212,175,55,0.08)'}`,
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                >
                  <div style={{
                    flexShrink: 0, width: 32, height: 32,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: 2,
                    background: isHovered ? 'rgba(212,175,55,0.12)' : 'rgba(212,175,55,0.06)',
                    color: isHovered ? '#d4af37' : '#7A7060',
                    transition: 'all 0.2s',
                  }}>
                    <Icon size={14} strokeWidth={1.8} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.45)', marginBottom: 2 }}>
                      {link.label}
                    </div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: isHovered ? '#EDE8DC' : '#9A9589', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', transition: 'color 0.2s' }}>
                      {link.display}
                    </div>
                  </div>
                  <ExternalLink size={11} strokeWidth={1.8} style={{ color: '#d4af37', opacity: isHovered ? 0.7 : 0.2, flexShrink: 0 }} />
                </a>
              );
            })}
          </div>

          {/* Save vCard */}
          <div style={{ padding: '0 24px 32px' }}>
            <button onClick={handleSave} style={{
              width: '100%', padding: '14px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              borderRadius: 2, cursor: 'pointer',
              background: saved
                ? 'linear-gradient(135deg, rgba(100,180,100,0.15) 0%, rgba(100,180,100,0.08) 100%)'
                : 'linear-gradient(135deg, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.08) 100%)',
              border: `1px solid ${saved ? 'rgba(100,200,100,0.3)' : 'rgba(212,175,55,0.35)'}`,
              color: saved ? '#7EC87E' : '#d4af37',
              fontFamily: "'Cinzel', serif",
              letterSpacing: '0.12em', fontSize: 11, fontWeight: 600,
              transition: 'all 0.3s',
            }}>
              {saved ? <><CheckCircle size={14} strokeWidth={2} /> CONTACT SAVED</> : <><Download size={14} strokeWidth={1.8} /> SAVE CONTACT</>}
            </button>
          </div>

          {/* Footer */}
          <div style={{ padding: '16px 24px', textAlign: 'center', borderTop: '1px solid rgba(212,175,55,0.08)' }}>
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.3)', margin: 0 }}>
              TAP · CONNECT · VIRTECH VISUALS
            </p>
          </div>
        </div>

        {/* Gold bottom line */}
        <div style={{ height: 3, marginTop: 32, borderRadius: 9999, background: 'linear-gradient(to right, transparent, #d4af37, transparent)', opacity: 0.7 }} />
      </div>
    </div>
  );
}
