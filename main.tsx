/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  MessageCircle, 
  Headphones, 
  CalendarCheck, 
  BarChart3, 
  Building2, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Mail,
  Zap,
  Star,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const services = [
  {
    icon: Phone,
    title: "Virtual Phone Answering",
    description: "Professional call answering for UAE businesses, so every customer inquiry is handled with care."
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Manage customer WhatsApp inquiries through a professional shared inbox without exposing agent numbers."
  },
  {
    icon: Headphones,
    title: "Live Chat Support",
    description: "Convert website visitors into leads with fast, friendly, and trained live chat responses."
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description: "Schedule consultations, site visits, callbacks, and meetings directly into your calendar."
  },
  {
    icon: BarChart3,
    title: "Lead Capture & Reporting",
    description: "Receive clear lead summaries, missed call reports, and daily customer communication updates."
  },
  {
    icon: Building2,
    title: "Business Number Setup",
    description: "Support with virtual number, call forwarding, and PBX setup based on client requirements."
  }
];

const industries = [
  "Business Setup Firms",
  "Real Estate Agencies",
  "Clinics & Medical Centers",
  "Ecommerce Brands",
  "Legal & Consulting Firms",
  "Home Services Companies"
];

const plans = [
  {
    name: "Starter",
    price: "299",
    description: "For small businesses that need basic call handling.",
    features: ["Up to 100 calls/month", "Message taking", "Email summaries", "Business hours support"]
  },
  {
    name: "Business",
    price: "499",
    description: "For growing teams that need phone and WhatsApp support.",
    features: ["Up to 300 calls/month", "WhatsApp lead alerts", "Lead qualification", "Callback scheduling"],
    featured: true
  },
  {
    name: "Premium",
    price: "899",
    description: "For businesses that want complete communication support.",
    features: ["Up to 500 calls/month", "Phone + WhatsApp + chat", "Appointment booking", "CRM updates", "Daily reports"]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0E1028] text-white font-sans selection:bg-[#D9A928] selection:text-[#0E1028]">
      {/* Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-[#0E1028]/95 backdrop-blur-md border-white/10 py-3 shadow-2xl" 
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D9A928] text-xl font-black text-[#0E1028] shadow-[0_0_20px_rgba(217,169,40,0.3)]">
              V
            </div>
            <span className="text-xl font-bold tracking-tight font-display">VirtualDXB</span>
          </motion.div>

          <nav className="hidden items-center gap-10 text-sm font-medium text-white/70 md:flex">
            {["Services", "Industries", "Pricing", "Partners", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="hover:text-[#D9A928] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D9A928] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="rounded-xl bg-[#D9A928] px-6 py-2.5 font-bold text-[#0E1028] shadow-lg transition-shadow hover:shadow-[#D9A928]/20"
          >
            Get started
          </motion.a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-20 pb-32 md:pt-32 md:pb-48">
          <div className="absolute inset-0 z-0">
             <img 
               src="/src/assets/images/dubai_business_hero_1779193320918.png" 
               alt="Dubai Office" 
               className="w-full h-full object-cover opacity-[0.07] grayscale"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#D9A928]/5 blur-[120px] pointer-events-none" />
          <div className="absolute left-[-10%] bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full border border-[#D9A928]/30 bg-[#D9A928]/10 px-4 py-1.5 mb-8">
                <Zap size={14} className="text-[#D9A928]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9A928]">Professional communication support for growing UAE businesses</span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="mb-8 text-5xl font-black leading-[1.1] tracking-tight md:text-7xl font-display">
                Never Miss A <span className="text-[#D9A928]">Customer Inquiry</span> Again
              </motion.h1>
              
              <motion.p variants={fadeIn} className="mb-10 max-w-xl text-lg leading-relaxed text-white/60">
                Virtual receptionist, WhatsApp support, and live customer communication services for UAE businesses.
              </motion.p>

              <motion.div variants={fadeIn} className="mb-12 flex flex-col gap-4 sm:flex-row">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D9A928] px-8 py-4 text-lg font-bold text-[#0E1028] shadow-xl shadow-[#D9A928]/20 transition"
                >
                  Book free consultation <ArrowRight size={20} />
                </motion.a>
                <motion.a 
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  href="#services" 
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-4 text-lg font-semibold text-white transition"
                >
                  View services
                </motion.a>
              </motion.div>

              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: CheckCircle, text: "Fast setup" },
                  { icon: Building2, text: "UAE-focused" },
                  { icon: Star, text: "No hiring needed" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-white/50">
                    <item.icon className="text-[#D9A928]" size={18} />
                    {item.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:blockPerspective-1000"
            >
              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-4 lg:p-8 shadow-2xl backdrop-blur-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D9A928]/5 to-transparent pointer-events-none" />
                <div className="rounded-[2rem] bg-[#15183A] p-6 lg:p-8 relative">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#D9A928]/60 mb-1">Real-time Operations</p>
                      <h3 className="text-2xl font-bold font-display">Live Inquiry Stream</h3>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/20 uppercase tracking-tighter animate-pulse">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Active Now
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: Phone, label: "Call Received", text: "Lead captured and synced to CRM.", time: "2m ago" },
                      { icon: MessageCircle, label: "WhatsApp Reply", text: "Product inquiry handled by agent.", time: "45s ago" },
                      { icon: CalendarCheck, label: "Meeting Booked", text: "Site visit confirmed for Thursday.", time: "Just now", active: true }
                    ].map((inquiry, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.2) }}
                        className={`rounded-2xl border p-4 transition ${
                          inquiry.active 
                            ? "bg-[#D9A928]/10 border-[#D9A928]/30" 
                            : "bg-white/5 border-white/5"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <inquiry.icon className={inquiry.active ? "text-[#D9A928]" : "text-white/40"} size={16} />
                            <span className="text-xs font-bold uppercase tracking-tight">{inquiry.label}</span>
                          </div>
                          <span className="text-[10px] text-white/30">{inquiry.time}</span>
                        </div>
                        <p className="text-sm text-white/60 leading-tight">{inquiry.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="relative z-10 border-y border-white/10 bg-white/[0.02] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold font-display text-white/90">Trusted By Growing UAE Businesses</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                "Fast onboarding",
                "Professional call handling",
                "WhatsApp support",
                "Lead capture",
                "UAE-focused operations"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/5 p-5 shadow-sm hover:border-[#D9A928]/30 transition-colors"
                >
                  <div className="h-6 w-6 rounded-full bg-[#D9A928]/20 flex items-center justify-center shrink-0">
                    <CheckCircle size={14} className="text-[#D9A928]" />
                  </div>
                  <span className="text-sm font-bold text-white/80">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 border-y border-white/10 bg-white/[0.01] backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { label: "Coverage", value: "24/7*" },
                { label: "Target Response", value: "60s" },
                { label: "Presence", value: "UAE" },
                { label: "Staff Costs", value: "0" }
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <p className="mb-1 text-3xl font-black text-[#D9A928] font-display transition-transform group-hover:scale-110">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-6 py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 inline-block font-bold uppercase tracking-[0.3em] text-[#D9A928] text-xs"
              >
                Our Capabilities
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 text-4xl font-black md:text-5xl font-display"
              >
                Complete communication support
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-2xl text-lg text-white/60 leading-relaxed"
              >
                We help UAE SMEs respond faster, capture more leads, and project a professional corporate image from the very first customer interaction.
              </motion.p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div 
                    key={i}
                    variants={fadeIn}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="group relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition-all hover:shadow-2xl"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9A928] text-[#0E1028] shadow-[0_4px_15px_rgba(217,169,40,0.3)] transition-transform group-hover:rotate-6">
                      <Icon size={26} />
                    </div>
                    <h3 className="mb-4 text-xl font-bold font-display">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-white/50">{service.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-[#f0ece1] px-6 py-32 text-[#0E1028]">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-20 lg:grid-cols-2 items-center">
              <div>
                <span className="mb-4 inline-block font-bold uppercase tracking-[0.3em] text-[#A67D09] text-xs">The Process</span>
                <h2 className="mb-8 text-4xl font-black md:text-5xl font-display">How it works</h2>
                <p className="mb-10 text-lg leading-relaxed text-slate-600">
                  Simple setup. Professional results. We collect your business requirements, prepare custom call scripts, configure your communication channels, and start handling inquiries immediately.
                </p>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="inline-flex items-center gap-3 rounded-2xl bg-[#0E1028] px-8 py-4 font-bold text-white shadow-xl transition"
                >
                  Start onboarding <ArrowRight size={20} />
                </motion.a>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Consultation", text: "Discovery call & package selection." },
                  { title: "Setup & scripts", text: "Greeting script and escalation rules." },
                  { title: "Go live", text: "Phone, WhatsApp, or chat setup." },
                  { title: "Lead reporting", text: "Go live with weekly reporting and lead summaries." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 rounded-[2rem] bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow border border-slate-100"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D9A928] text-xl font-black shadow-inner">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold font-display">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Human Expertise Section */}
        <section className="px-6 py-32 overflow-hidden border-t border-white/5 bg-[#0E1028] text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-[#D9A928]/10 blur-3xl rounded-full" />
                <div className="p-3 rounded-[3.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl relative">
                  <img 
                    src="/src/assets/images/customer_support_professional_1779193339491.png"
                    alt="Professional Support Agent"
                    className="rounded-[2.8rem] w-full h-[550px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-12 left-12 right-12 p-8 rounded-[2rem] bg-[#0E1028]/90 backdrop-blur-md border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-5">
                      <div className="flex -space-x-3">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="h-10 w-10 rounded-full border-2 border-[#0E1028] bg-slate-800 flex items-center justify-center text-[10px] font-black overflow-hidden bg-[#D9A928]/20">
                            A{i}
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#D9A928] mb-0.5">Elite Response Team</p>
                        <p className="text-sm font-semibold text-white/70">Verified UAE Business Experts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="mb-4 inline-block font-bold uppercase tracking-[0.3em] text-[#D9A928] text-xs"
                >
                  The Human Advantage
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mb-8 text-4xl font-black md:text-6xl font-display leading-[1.1]"
                >
                  Technology power.<br />Human empathy.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-12 text-xl leading-relaxed text-white/50"
                >
                  Systems can route calls, but only people can build relationships. Every VirtualDXB agent is a trained specialist in professional communication and UAE business etiquette.
                </motion.p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    "Professional articulation",
                    "UAE market expertise",
                    "Etiquette & manners",
                    "Rapid script adoption"
                  ].map((text, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex items-center gap-4"
                    >
                      <div className="h-6 w-6 rounded-lg bg-[#D9A928]/10 flex items-center justify-center">
                        <CheckCircle size={14} className="text-[#D9A928]" />
                      </div>
                      <span className="font-bold text-sm text-white/80">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="px-6 py-32 bg-[#F7F7F7] text-[#0E1028]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <span className="mb-4 inline-block font-bold uppercase tracking-[0.3em] text-[#A67D09] text-xs transition-colors group-hover:text-[#D9A928]">Sectors</span>
              <h2 className="mb-6 text-4xl font-black md:text-5xl font-display">Specialized for your industry</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-500 leading-relaxed">
                Our team understands the specific nuances and requirements of high-inquiry businesses in the UAE.
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {industries.map((industry, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center justify-between rounded-2xl bg-white border border-slate-200 p-8 shadow-sm transition hover:shadow-md hover:border-[#D9A928]"
                >
                  <span className="text-lg font-bold font-display">{industry}</span>
                  <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-[#D9A928]/10 group-hover:text-[#D9A928] transition-colors">
                    <ChevronRight size={16} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-white px-6 py-32 text-[#0E1028]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <span className="mb-4 inline-block font-bold uppercase tracking-[0.3em] text-[#A67D09] text-xs">Packages</span>
              <h2 className="mb-6 text-4xl font-black md:text-5xl font-display">Flexible pricing for UAE SMEs</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Scale your support as your business grows. No hidden fees, just professional excellence.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {plans.map((plan, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col rounded-[2.5rem] p-10 transition-all ${
                    plan.featured 
                      ? "bg-[#0E1028] text-white scale-105 shadow-2xl z-10" 
                      : "bg-[#F7F7F7] border border-slate-200"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#D9A928] px-5 py-1.5 text-xs font-black uppercase tracking-widest text-[#0E1028]">
                      Recommended
                    </div>
                  )}
                  <h3 className="mb-2 text-2xl font-black font-display">{plan.name}</h3>
                  <p className={`mb-8 text-sm font-medium ${plan.featured ? "text-white/60" : "text-slate-500"}`}>
                    {plan.description}
                  </p>
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-sm font-bold opacity-60">AED</span>
                    <span className="text-5xl font-black font-display tracking-tight">{plan.price}</span>
                    <span className="text-sm font-bold opacity-40">/month</span>
                  </div>
                  
                  <ul className="mb-10 space-y-4 flex-grow">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm font-medium">
                        <CheckCircle className="mt-0.5 shrink-0 text-[#D9A928]" size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact" 
                    className={`block rounded-2xl py-4 text-center font-bold transition-all shadow-lg ${
                      plan.featured 
                        ? "bg-[#D9A928] text-[#0E1028] hover:shadow-[#D9A928]/30" 
                        : "bg-[#0E1028] text-white hover:bg-black"
                    }`}
                  >
                    Select {plan.name}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="px-6 py-32 relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="relative rounded-[3rem] border border-white/10 bg-white/[0.03] p-10 lg:p-20 overflow-hidden">
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#D9A928]/10 blur-[60px]" />
              <div className="relative grid gap-16 lg:grid-cols-2 items-center">
                <div>
                  <span className="mb-4 inline-block font-bold uppercase tracking-[0.3em] text-[#D9A928] text-xs">Partner Program</span>
                  <h2 className="mb-8 text-4xl font-black font-display text-[#D9A928]">Partner With VirtualDXB</h2>
                  <p className="mb-10 text-lg leading-relaxed text-white/50">
                    Perfect for business setup firms, coworking spaces, and virtual offices providers. Offer premium receptionist services to your clients as a seamless value-add while we manage the backend operations.
                  </p>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact" 
                    className="inline-flex items-center gap-3 rounded-2xl bg-[#D9A928] px-8 py-4 font-bold text-[#0E1028] shadow-xl"
                  >
                    Become a partner <ArrowRight size={20} />
                  </motion.a>
                </div>
                <div className="grid gap-4">
                  {[
                    { icon: ShieldCheck, text: "White-label service model" },
                    { icon: BarChart3, text: "Recurring revenue stream" },
                    { icon: CheckCircle, text: "Zero staffing burden" },
                    { icon: Clock, text: "Fast client onboarding" }
                  ].map((benefit, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-5 rounded-2.5xl bg-white/5 p-5 border border-white/5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9A928]/10 text-[#D9A928]">
                        <benefit.icon size={20} />
                      </div>
                      <span className="font-bold text-sm">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-[#f0ece1] px-6 py-32 text-[#0E1028]">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block font-bold uppercase tracking-[0.3em] text-[#A67D09] text-xs">Connect</span>
                <h2 className="mb-8 text-4xl font-black md:text-6xl font-display">Ready for better communication?</h2>
                <p className="mb-12 text-lg text-slate-600 leading-relaxed max-w-md">
                  Book a free consultation today. Let's discuss your requirements and find the perfect package for your UAE business.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email Support", value: "hello@virtualdxb.com" },
                    { icon: MessageCircle, label: "WhatsApp", value: "Chat available 24/7" },
                    { icon: Clock, label: "Business Hours", value: "9 AM - 6 PM Gulf Standard Time" }
                  ].map((contact, i) => (
                    <div key={i} className="flex items-center gap-5 group">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#D9A928] shadow-sm transition-transform group-hover:scale-110">
                        <contact.icon size={22} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#A67D09]">{contact.label}</p>
                        <p className="font-bold text-slate-800">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[3rem] bg-white p-8 lg:p-12 shadow-2xl border border-white"
              >
                <form className="grid gap-6">
                  <div className="grid gap-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">Organization Name</label>
                    <input className="rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 outline-none transition focus:border-[#D9A928] focus:bg-white" placeholder="e.g. Acme Dubai LLC" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="grid gap-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">Email</label>
                      <input className="rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 outline-none transition focus:border-[#D9A928] focus:bg-white" placeholder="work@email.com" />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">Contact No.</label>
                      <input className="rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 outline-none transition focus:border-[#D9A928] focus:bg-white" placeholder="+971 -- --- ----" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">Primary Requirement</label>
                    <select className="appearance-none rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 outline-none transition focus:border-[#D9A928] focus:bg-white">
                      <option>Virtual phone answering</option>
                      <option>WhatsApp support</option>
                      <option>Website live chat</option>
                      <option>Partner program</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">Message</label>
                    <textarea className="min-h-[140px] rounded-2xl border border-slate-100 bg-slate-50 px-6 py-6 outline-none transition focus:border-[#D9A928] focus:bg-white resize-none" placeholder="How can we help your business thrive?" />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button" 
                    className="mt-2 rounded-2xl bg-[#0E1028] px-6 py-5 font-black text-white shadow-xl shadow-black/10 transition hover:bg-black"
                  >
                    Submit Inquiry
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0E1028] px-6 py-20 pb-32 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9A928] text-xl font-black text-[#0E1028]">V</div>
              <div>
                <p className="text-xl font-bold font-display">VirtualDXB</p>
                <p className="text-xs font-medium text-white/40 leading-relaxed max-w-[300px]">
                  Professional virtual phone and chat support for UAE businesses, delivered by our expert team.
                </p>
              </div>
            </div>
            
            <div className="flex gap-10 text-sm font-bold text-white/40">
              <a href="#" className="hover:text-[#D9A928] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D9A928] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#D9A928] transition-colors">Support</a>
            </div>

            <p className="text-xs font-bold text-white/20 uppercase tracking-[0.2em]">
              © 2026 VirtualDXB. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/971000000000" // Placeholder phone number
        target="_blank"
        className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-white shadow-2xl shadow-emerald-500/20"
      >
        <MessageCircle size={24} fill="currentColor" className="text-white" />
        <span className="hidden md:inline">WhatsApp click-to-chat</span>
      </motion.a>
    </div>
  );
}
