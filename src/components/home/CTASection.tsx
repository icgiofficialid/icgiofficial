import { Link } from "react-router-dom";
import { useState } from "react";
import { MessageCircle, Mail, Send, CheckCircle } from "lucide-react";

type SendMethod = "whatsapp" | "email";

const WHATSAPP_NUMBER = "628139905880";

interface CTASectionProps {
  hideJoinSection?: boolean;
  hideContactForm?: boolean;
}

const CTASection = ({ hideJoinSection = false, hideContactForm = false }: CTASectionProps) => {
  const [method, setMethod] = useState<SendMethod>("whatsapp");
  const [form, setForm] = useState({
    name: "",
    contact: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    const { name, contact, phone, message } = form;
    if (!name || !contact || !message) return;

    if (method === "whatsapp") {
      const text = encodeURIComponent(
        `Halo ICGI! \n\n*Nama:* ${name}\n*No. HP:* ${phone || "-"}\n*Email:* ${contact}\n\n*Pesan:*\n${message}`
      );
      const waUrl = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${text}`;
      const waWeb = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

      window.location.href = waUrl;
      setTimeout(() => {
        window.location.href = waWeb;
      }, 1500);
      
    } else {
      const subject = encodeURIComponent(`Contact from ${name} - ICGI`);
      const body = encodeURIComponent(
        `Nama: ${name}\nNo. HP: ${phone || "-"}\n\nPesan:\n${message}`
      );
      window.open(
        `mailto:info@icgi.official.id@gmail.com?subject=${subject}&body=${body}&from=${contact}`,
        "_blank"
      );
    }

    setSent(true);
    setForm({ name: "", contact: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="hero-gradient section-padding">
      <div className="container-main">

        {/* Top CTA — disembunyikan di halaman /contact */}
        {!hideJoinSection && (
          <>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
                Ready to Compete on a{" "}
                <span className="gold-text">Global Stage?</span>
              </h2>
              <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
                Join thousands of gifted individuals from around the world in our
                academic and cultural programs.
              </p>
              <Link to="/membership" className="btn-accent text-base px-12 py-4">
                Join ICGI Now
              </Link>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-12 max-w-2xl mx-auto">
              <div className="flex-1 h-px bg-primary-foreground/20" />
              <span className="font-heading text-primary-foreground/50 text-sm tracking-widest uppercase">
                Indonesian Centre for Giftedness Innovation
              </span>
              <div className="flex-1 h-px bg-primary-foreground/20" />
            </div>
          </>
        )}

        {/* Contact Form Card */}
        {!hideContactForm && (
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Card Header */}
          <div className="px-8 pt-8 pb-0 text-center">
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-primary-foreground mb-2">
              Contact Us
            </h3>
            <p className="font-body text-primary-foreground/60 text-sm mb-6">
              Send us a message via WhatsApp or Email
            </p>

            {/* Toggle */}
            <div className="inline-flex bg-white/10 border border-white/20 rounded-full p-1 mb-6">
              <button
                onClick={() => setMethod("whatsapp")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-heading font-semibold transition-all duration-300 ${
                  method === "whatsapp"
                    ? "bg-[#25D366] text-white shadow-md scale-[1.03]"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
              <button
                onClick={() => setMethod("email")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-heading font-semibold transition-all duration-300 ${
                  method === "email"
                    ? "bg-primary text-primary-foreground shadow-md scale-[1.03]"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
            </div>
          </div>

          {/* Form Body */}
          <div className="px-8 pb-8 space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-xl bg-white/15 border border-white/25 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 text-sm font-body focus:outline-none focus:border-accent focus:bg-white/20 transition"
            />

            <input
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className="w-full rounded-xl bg-white/15 border border-white/25 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 text-sm font-body focus:outline-none focus:border-accent focus:bg-white/20 transition"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone (optional)"
              type="tel"
              className="w-full rounded-xl bg-white/15 border border-white/25 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 text-sm font-body focus:outline-none focus:border-accent focus:bg-white/20 transition"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full rounded-xl bg-white/15 border border-white/25 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 text-sm font-body focus:outline-none focus:border-accent focus:bg-white/20 transition resize-none"
            />

            <button
              onClick={handleSend}
              disabled={!form.name || !form.contact || !form.message}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-heading font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
                sent
                  ? "bg-green-500 text-white"
                  : method === "whatsapp"
                  ? "bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-lg hover:shadow-green-500/30 hover:scale-[1.01] disabled:opacity-40 disabled:cursor-not-allowed"
                  : "bg-accent hover:brightness-110 text-accent-foreground shadow-lg hover:scale-[1.01] disabled:opacity-40 disabled:cursor-not-allowed"
              }`}
            >
              {sent ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send via {method === "whatsapp" ? "WhatsApp" : "Email"}
                </>
              )}
            </button>

            <p className="text-center text-xs text-primary-foreground/40 font-body">
              {method === "whatsapp"
                ? "You'll be redirected to WhatsApp to complete sending."
                : "Your default email client will open to send the message."}
            </p>
          </div>
        </div>
        )}

      </div>
    </section>
  );
};

export default CTASection;