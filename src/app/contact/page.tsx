"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  Send,
  Building
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: ""
      });
    }, 1000);
  };

  const clinicPhone = "+919489516326";
  const whatsappUrl = `https://wa.me/919489516326?text=Hi%20Sri%20Deepam%20Dental%2520Clinic%252C%2520I%2520would%2520like%2520to%2520ask%2520a%2520question.`;

  return (
    <div className="relative bg-stone-bg min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block font-sans">Contact</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary font-display leading-tight">
            Connect With Us
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl leading-relaxed font-sans font-light">
            Have questions about treatments, emergency pain relief, or scheduling? Our clinical team is here to support you.
          </p>
          <div className="h-[1px] w-full bg-accent/15 pt-2" />
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Details & Map */}
            <div className="lg:col-span-5 space-y-8">
              {/* Clinic details (Line layout) */}
              <div className="bg-stone-bg border border-border-subtle p-6 rounded-2xl space-y-6">
                <h3 className="text-base font-bold text-primary font-display border-b border-border-subtle/80 pb-3 flex items-center gap-2">
                  <Building className="h-5 w-5 text-accent" />
                  Clinic Details
                </h3>

                <div className="space-y-5 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex gap-3 items-start">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-primary block">Clinic Address</span>
                      <span className="text-slate-500 text-xs mt-1 leading-relaxed block font-sans font-light">
                        Sri Deepam Multispeciality Dental Clinic <br />
                        Cuddalore Main Road, Near BSNL Office, <br />
                        Vandigate, Chidambaram, Tamil Nadu 608001
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3 items-start border-t border-border-subtle/50 pt-4">
                    <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-primary block">Direct Phone</span>
                      <a href={`tel:${clinicPhone}`} className="text-primary font-extrabold text-xs mt-1 hover:underline block font-sans">
                        +91 94895 16326
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-3 items-start border-t border-border-subtle/50 pt-4">
                    <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-primary block">Email Support</span>
                      <span className="text-slate-500 text-xs mt-1 block font-sans font-light">
                        contact@srideepamdental.in
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-stone-bg border border-border-subtle p-6 rounded-2xl space-y-4">
                <h3 className="text-base font-bold text-primary font-display border-b border-border-subtle/80 pb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  Clinical Schedule
                </h3>

                <div className="space-y-2.5 text-xs font-sans font-light text-slate-500">
                  <div className="flex justify-between items-center py-1 border-b border-border-subtle/50">
                    <span className="font-bold text-primary">Monday - Saturday</span>
                    <div className="text-right">
                      <span className="font-bold text-primary block">09:30 AM - 01:30 PM</span>
                      <span className="font-bold text-primary block">04:30 PM - 08:30 PM</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-bold text-primary">Sunday</span>
                    <span className="font-bold text-primary">10:00 AM - 01:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Map Iframe */}
              <div className="bg-stone-bg border border-border-subtle rounded-2xl overflow-hidden shadow-sm h-64 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.2587595304724!2d79.69537651147571!3d11.405374488735234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54c25141021481%3A0xc39f864e432f75a6!2sBSNL%20Office%2C%20Chidambaram!5e0!3m2!1sen!2sin!4v1718451121000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Deepam Dental Clinic Map Location"
                />
              </div>
            </div>

            {/* Right Column: Underlined Minimal Inquiry Form */}
            <div className="lg:col-span-7 bg-stone-bg border border-border-subtle p-8 rounded-3xl space-y-6">
              <h3 className="text-lg font-bold text-primary font-display border-b border-border-subtle/80 pb-3">Send a Message</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-sans font-light">
                Fill out our form below to request a callback or ask questions. All submissions are reviewed by our clinic coordinator.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Anand Sundaram"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full py-2 bg-transparent border-b border-border-subtle focus:border-accent text-slate-800 text-sm focus:outline-none transition-all placeholder-slate-350"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full py-2 bg-transparent border-b border-border-subtle focus:border-accent text-slate-800 text-sm focus:outline-none transition-all placeholder-slate-350"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="anand@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full py-2 bg-transparent border-b border-border-subtle focus:border-accent text-slate-800 text-sm focus:outline-none transition-all placeholder-slate-350"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full py-2 bg-transparent border-b border-border-subtle focus:border-accent text-slate-800 text-sm focus:outline-none transition-all cursor-pointer font-sans"
                    >
                      <option value="General Inquiry">General Dental Question</option>
                      <option value="Appointment Request">Schedule Consultation</option>
                      <option value="Treatment Estimate">Get Pricing Info</option>
                      <option value="Emergency Relief">Severe Pain Support</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Your Message *</label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      placeholder="Please details symptoms or queries..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full py-2 bg-transparent border-b border-border-subtle focus:border-accent text-slate-800 text-sm focus:outline-none transition-all placeholder-slate-350"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 py-3.5 px-6 bg-primary hover:bg-primary-hover text-white border border-accent/20 rounded-xl font-bold uppercase tracking-wider text-[10px] flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all disabled:opacity-50"
                    >
                      <Send className="h-3.5 w-3.5" />
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                    
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold uppercase tracking-wider text-[10px] flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all text-center"
                    >
                      <MessageSquare className="h-3.5 w-3.5 fill-white" />
                      WhatsApp Inquiry
                    </a>
                  </div>
                </form>
              ) : (
                /* Success screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <CheckCircle2 className="h-14 w-14 text-emerald-500 mx-auto" />
                  <h4 className="text-xl font-bold text-primary font-display">Inquiry Sent Successfully</h4>
                  <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed font-sans font-light">
                    We have logged your query. Our clinical coordinator will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="py-2.5 px-6 bg-primary hover:bg-primary-hover text-white rounded-xl text-[10px] font-bold uppercase tracking-wider border border-accent/25 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
