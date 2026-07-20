import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useI18n } from '../i18n/context';

// ── EmailJS config ────────────────────────────────────────────────────────────
const SERVICE_ID  = 'service_y0js2ee';
const TEMPLATE_ID = 'template_hbkn9mn'; // single universal template
const PUBLIC_KEY  = 'GERgwtvqYSgQuCMf3';

const SERVICE_OPTIONS = [
  // Smart Factory
  'Smart Factory Solutions',
  'Custom Software Development',
  'Artificial Intelligence',
  'Cloud & DevOps',
  'IoT & Edge Computing',
  'Cybersecurity',
  'Talent Solutions',
  'Product Demo (GateKeeper / VisionSafe / DigiTrack)',
  // Creative Studio
  'Creative Studio — Photography',
  'Creative Studio — Video',
  'Creative Studio — Social Content',
  'Creative Studio — Brand Package',
  // General
  'General Enquiry',
];

interface ContactFormProps {
  /** Pre-select a service option */
  defaultService?: string;
  /** Show the contact info sidebar (default: true) */
  showSidebar?: boolean;
  /** Dark card background variant */
  dark?: boolean;
}

export function ContactForm({
  defaultService = '',
  showSidebar = true,
  dark = false,
}: ContactFormProps) {
  const { t } = useI18n();
  const [form, setForm] = useState({
    name: '', email: '', company: '', service: defaultService, message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);
  const [error, setError]     = useState('');

  const update = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          company:      form.company || 'Not provided',
          service_type: form.service,
          message:      form.message,
          to_email:     'business@virtechvisuals.com',
          reply_to:     form.email,
        },
        PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      setError('Something went wrong. Please email us at business@virtechvisuals.com');
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-[#d4af37]" />,
      label: 'Email',
      value: 'business@virtechvisuals.com',
      href: 'mailto:business@virtechvisuals.com',
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#d4af37]" />,
      label: 'WhatsApp',
      value: '+33 7 80 84 34 87',
      sub: 'Mon-Sat, 9am to 7pm CET',
      href: 'https://wa.me/33780843487',
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#d4af37]" />,
      label: 'Location',
      value: 'Paris, France',
      sub: 'Serving clients globally',
      href: null,
    },
    {
      icon: <Clock className="w-5 h-5 text-[#d4af37]" />,
      label: 'Response Time',
      value: '< 24 Hours',
      sub: 'We respond to all enquiries within one business day',
      href: null,
    },
  ];

  const cardBg = dark ? 'bg-[#111]' : 'bg-[#1a1a1a]';
  const inputBg = dark ? 'bg-[#1a1a1a]' : 'bg-[#111]';

  return (
    <div className={`grid grid-cols-1 ${showSidebar ? 'lg:grid-cols-5' : ''} gap-10`}>

      {/* ── Sidebar ─────────────────────────────────────────────────────────── */}
      {showSidebar && (
        <div className="lg:col-span-2 space-y-4">
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-start gap-4 p-5 ${cardBg} border border-[#2a2a2a] rounded-xl hover:border-[#d4af37]/40 transition-colors group`}
                >
                  <div className="p-2.5 bg-[#d4af37]/10 rounded-lg flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-[#555] tracking-widest uppercase mb-1">{item.label}</div>
                    <div className="text-sm text-white group-hover:text-[#d4af37] transition-colors">{item.value}</div>
                    {item.sub && <div className="text-xs text-[#555] mt-0.5">{item.sub}</div>}
                  </div>
                </a>
              ) : (
                <div className={`flex items-start gap-4 p-5 ${cardBg} border border-[#2a2a2a] rounded-xl`}>
                  <div className="p-2.5 bg-[#d4af37]/10 rounded-lg flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-[10px] text-[#555] tracking-widest uppercase mb-1">{item.label}</div>
                    <div className="text-sm text-white">{item.value}</div>
                    {item.sub && <div className="text-xs text-[#555] mt-0.5">{item.sub}</div>}
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/33780843487"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl text-[#25D366] hover:bg-[#25D366]/20 transition-colors text-sm font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            {t('contact.wa')}
          </a>
        </div>
      )}

      {/* ── Form ────────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={showSidebar ? 'lg:col-span-3' : ''}
      >
        {sent ? (
          <div className={`flex flex-col items-center justify-center text-center py-20 ${cardBg} border border-[#2a2a2a] rounded-2xl px-8`}>
            <div className="w-14 h-14 rounded-full bg-[#d4af37]/15 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-7 h-7 text-[#d4af37]" />
            </div>
            <h3 className="font-display text-2xl mb-3">{t('contact.sent.title')}</h3>
            <p className="text-[#666] text-sm max-w-sm mb-6">{t('contact.sent.sub')}</p>
            <a
              href="https://wa.me/33780843487"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg text-[#25D366] text-sm hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> {t('contact.wa')}
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`${cardBg} border border-[#2a2a2a] rounded-2xl p-8 space-y-5`}
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="vv-name" className="block text-xs text-[#555] tracking-widest uppercase mb-2">
                  {t('contact.name')} *
                </label>
                <input
                  id="vv-name"
                  type="text"
                  value={form.name}
                  onChange={e => update('name', e.target.value)}
                  placeholder={t('contact.placeholder.name')}
                  className={`w-full px-4 py-3 ${inputBg} border border-[#2a2a2a] rounded-lg focus:border-[#d4af37]/60 outline-none transition-colors text-sm text-white placeholder-[#444]`}
                  required
                />
              </div>
              <div>
                <label htmlFor="vv-email" className="block text-xs text-[#555] tracking-widest uppercase mb-2">
                  {t('contact.email')} *
                </label>
                <input
                  id="vv-email"
                  type="email"
                  value={form.email}
                  onChange={e => update('email', e.target.value)}
                  placeholder={t('contact.placeholder.email')}
                  className={`w-full px-4 py-3 ${inputBg} border border-[#2a2a2a] rounded-lg focus:border-[#d4af37]/60 outline-none transition-colors text-sm text-white placeholder-[#444]`}
                  required
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="vv-company" className="block text-xs text-[#555] tracking-widest uppercase mb-2">
                {t('contact.company')}
              </label>
              <input
                id="vv-company"
                type="text"
                value={form.company}
                onChange={e => update('company', e.target.value)}
                placeholder={t('contact.placeholder.company')}
                className={`w-full px-4 py-3 ${inputBg} border border-[#2a2a2a] rounded-lg focus:border-[#d4af37]/60 outline-none transition-colors text-sm text-white placeholder-[#444]`}
              />
            </div>

            {/* Service */}
            <div>
              <label htmlFor="vv-service" className="block text-xs text-[#555] tracking-widest uppercase mb-2">
                {t('contact.interest')} *
              </label>
              <select
                id="vv-service"
                value={form.service}
                onChange={e => update('service', e.target.value)}
                className={`w-full px-4 py-3 ${inputBg} border border-[#2a2a2a] rounded-lg focus:border-[#d4af37]/60 outline-none transition-colors text-sm text-white`}
                required
              >
                <option value="">{t('contact.placeholder.service')}</option>
                {SERVICE_OPTIONS.map(s => (
                  <option key={s} value={s} className={inputBg}>{s}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="vv-message" className="block text-xs text-[#555] tracking-widest uppercase mb-2">
                {t('contact.message')} *
              </label>
              <textarea
                id="vv-message"
                value={form.message}
                onChange={e => update('message', e.target.value)}
                rows={5}
                placeholder={t('contact.placeholder.message')}
                className={`w-full px-4 py-3 ${inputBg} border border-[#2a2a2a] rounded-lg focus:border-[#d4af37]/60 outline-none transition-colors text-sm text-white placeholder-[#444] resize-none`}
                required
              />
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button
              type="submit"
              disabled={sending}
              className="w-full py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg font-display text-sm hover:bg-[#e5c24a] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {sending
                ? t('contact.sending')
                : <><Send className="w-4 h-4" /> {t('contact.send')}</>
              }
            </button>

            <p className="text-[#444] text-xs text-center">
              {t('contact.response')}{' '}
              <a href="mailto:business@virtechvisuals.com" className="text-[#d4af37] hover:underline">
                business@virtechvisuals.com
              </a>
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
}
