import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const WHATSAPP_NUMBER = "918055223358";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I visited your website and would like to know more about your services."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "np_service",
        "template_cjdr6y4",
        formData,
        "Sab2RU4dbqJkEkomS"
      )
      .then(() => {
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setShowSuccess(false), 3500);
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setShowError(true);
        setTimeout(() => setShowError(false), 3500);
      })
      .finally(() => setIsSubmitting(false));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: MapPin, title: "Address", details: "Nagpur, Maharashtra, India" },
    { icon: Phone, title: "Phone", details: "+91 8055223358" },
    { icon: Mail, title: "Email", details: "npgroups@gmail.com" },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#0F0F0F] to-[#1a1a1a]"
    >

      {/* ── SUCCESS TOAST ── */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{
              background: "rgba(20, 20, 20, 0.75)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(212, 175, 55, 0.35)",
              boxShadow:
                "0 8px 32px rgba(212,175,55,0.2), inset 0 1px 0 rgba(255,255,255,0.07)",
            }}
          >
            <CheckCircle className="text-[#D4AF37] shrink-0" size={22} />
            <div>
              <p className="text-white font-semibold text-sm">
                Message Sent Successfully!
              </p>
              <p className="text-white/50 text-xs mt-0.5">
                We'll get back to you soon.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── ERROR TOAST ── */}
      <AnimatePresence>
        {showError && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{
              background: "rgba(20, 20, 20, 0.75)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(239, 68, 68, 0.35)",
              boxShadow:
                "0 8px 32px rgba(239,68,68,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <span className="text-red-400 text-lg font-bold shrink-0">✕</span>
            <div>
              <p className="text-white font-semibold text-sm">
                Failed to send message.
              </p>
              <p className="text-white/50 text-xs mt-0.5">
                Please try again later.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#D4AF37]">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">Let's discuss your next project</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* FORM */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-[#1a1a1a] border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-[#1a1a1a] border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-[#1a1a1a] border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-6 py-4 bg-[#1a1a1a] border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] resize-none transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D4AF37] hover:bg-[#C19B2E] disabled:opacity-60 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : <> Send Message <Send size={20} /> </>}
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#D4AF37] bg-opacity-10 p-3 rounded-lg">
                      <info.icon className="text-[#D4AF37]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-gray-400">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4, type: "spring", stiffness: 200 }}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center rounded-2xl cursor-pointer overflow-hidden"
        style={{
          background: "rgba(20, 20, 20, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(37, 211, 102, 0.4)",
          boxShadow: "0 8px 32px rgba(37,211,102,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
          padding: "10px 14px",
        }}
      >
        {/* WhatsApp icon */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#25D366] shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-5 h-5">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.697-1.81A12.94 12.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 23a10.94 10.94 0 01-5.57-1.523l-.398-.237-4.573 1.075 1.098-4.46-.26-.418A10.944 10.944 0 015 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.07-8.23c-.332-.166-1.963-.968-2.267-1.079-.304-.11-.525-.166-.746.166-.22.332-.856 1.079-1.05 1.3-.193.22-.387.248-.718.083-.332-.166-1.4-.516-2.667-1.645-.985-.878-1.65-1.962-1.843-2.294-.193-.332-.02-.511.145-.677.149-.148.332-.387.498-.58.166-.193.22-.332.332-.553.11-.22.055-.414-.028-.58-.083-.166-.746-1.8-1.022-2.465-.27-.648-.543-.56-.746-.57l-.636-.011c-.22 0-.58.083-.884.414-.304.332-1.16 1.134-1.16 2.765s1.188 3.208 1.354 3.43c.166.22 2.34 3.572 5.673 5.007.793.342 1.412.546 1.894.699.796.253 1.52.217 2.092.132.638-.095 1.963-.803 2.24-1.578.276-.774.276-1.438.193-1.578-.083-.138-.304-.22-.636-.387z" />
          </svg>
        </div>

        {/* Expanding label on hover */}
        <motion.span
          variants={{ hover: { maxWidth: 160, marginLeft: 10, opacity: 1 } }}
          initial={{ maxWidth: 0, marginLeft: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-white text-sm font-medium whitespace-nowrap overflow-hidden"
        >
          Chat on WhatsApp
        </motion.span>
      </motion.a>

    </section>
  );
};

export default Contact;
