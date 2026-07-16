import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Footer } from '../components/Footer';
import { PageHero } from '../components/PageHero';

const services = [
  'Smart Factory Solutions',
  'Custom Software Development',
  'Artificial Intelligence',
  'Cloud & DevOps',
  'IoT & Edge Computing',
  'Cybersecurity',
  'Talent Solutions',
  'Product Demo',
  'Creative Studio: Photography',
  'Creative Studio: Video',
  'Creative Studio: Social Content',
  'Other',
];

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
    sub: 'Available Mon-Sat, 9am to 7pm CET',
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise(r => setTimeout(r, 800));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pt-16">

      <PageHero
        tag="Get In Touch"
        title="Let's Build Something Together"
        subtitle="Whether you're exploring a solution, requesting a demo, or ready to start. Our team is here to help."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=90&fit=crop&auto=format"
      />

      {/* Quick contact strip */}
      <section className="border-y border-[#222] bg-[#111] py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <a href="mailto:business@virtechvisuals.com" className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#d4af37] transition-colors">
            <Mail className="w-4 h-4 text-[#d4af37]" />
            business@virtechvisuals.com
          </a>
          <span className="hidden sm:block w-px h-4 bg-[#333]" />
          <a href="https://wa.me/33780843487" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#d4af37] transition-colors">
            <MessageCircle className="w-4 h-4 text-[#d4af37]" />
            +33 7 80 84 34 87
          </a>
          <span className="hidden sm:block w-px h-4 bg-[#333]" />
          <span className="flex items-center gap-2 text-[#a0a0a0]">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            Paris, France
          </span>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14">

          {/* Left - contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 bg-[#111] border border-[#2a2a2a] rounded-xl hover:border-[#d4af37]/40 transition-colors group"
                  >
                    <div className="p-2.5 bg-[#d4af37]/10 rounded-lg flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] text-[#555] tracking-widest uppercase mb-1">{item.label}</div>
                      <div className="font-display text-sm text-white mb-0.5 group-hover:text-[#d4af37] transition-colors">{item.value}</div>
                      {item.sub && <div className="text-xs text-[#555]">{item.sub}</div>}
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-5 bg-[#111] border border-[#2a2a2a] rounded-xl">
                    <div className="p-2.5 bg-[#d4af37]/10 rounded-lg flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="text-[10px] text-[#555] tracking-widest uppercase mb-1">{item.label}</div>
                      <div className="font-display text-sm text-white mb-0.5">{item.value}</div>
                      {item.sub && <div className="text-xs text-[#555]">{item.sub}</div>}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/33780843487" aria-label="Chat on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl text-[#25D366] hover:bg-[#25D366]/20 transition-colors text-sm font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20 bg-[#111] border border-[#2a2a2a] rounded-2xl px-8">
                <div className="w-14 h-14 rounded-full bg-[#d4af37]/15 flex items-center justify-center mb-6">
                  <Send className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="font-display text-2xl mb-3">Message Sent!</h3>
                <p className="text-[#666] text-sm max-w-sm leading-relaxed mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <a
                  href="https://wa.me/33780843487" aria-label="Chat on WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg text-[#25D366] text-sm hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Or message us on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs text-[#555] tracking-widest uppercase mb-2">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg focus:border-[#d4af37]/60 outline-none transition-colors text-sm text-white placeholder-[#444]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-[#555] tracking-widest uppercase mb-2">Email *</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg focus:border-[#d4af37]/60 outline-none transition-colors text-sm text-white placeholder-[#444]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs text-[#555] tracking-widest uppercase mb-2">Company</label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company or business name"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg focus:border-[#d4af37]/60 outline-none transition-colors text-sm text-white placeholder-[#444]"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs text-[#555] tracking-widest uppercase mb-2">I'm interested in *</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg focus:border-[#d4af37]/60 outline-none transition-colors text-sm text-white"
                    required
                  >
                    <option value="" className="bg-[#1a1a1a]">Select a service or topic</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#1a1a1a]">{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-[#555] tracking-widest uppercase mb-2">Message *</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    placeholder="Tell us about your project, challenge, or what you'd like to explore..."
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg focus:border-[#d4af37]/60 outline-none transition-colors text-sm text-white placeholder-[#444] resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg font-display text-sm hover:bg-[#e5c24a] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {sending ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>}
                </button>
                <p className="text-[#444] text-xs text-center">
                  We'll respond within 24 hours. Or reach us directly at{' '}
                  <a href="mailto:business@virtechvisuals.com" className="text-[#d4af37] hover:underline">business@virtechvisuals.com</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
