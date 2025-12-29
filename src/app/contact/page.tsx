"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, HeadphonesIcon, Zap, ShieldCheck } from "lucide-react";
import AboutHeroSection from "@/components/shared/hero/about-hero";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Failed to send message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <AboutHeroSection
        title="Contact Us"
        description="Get in touch with us. We're here to help and answer any questions you might have."
      />

      {/* Contact Section */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-background overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-dots)" />
          </svg>
        </div>
        <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-24 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto w-full px-6 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            {/* Left Side - Contact Information */}
            <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-0.5 w-12 bg-secondary" />
                  <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em]">
                    Connect
                  </h2>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-[1.1]">
                  Get In <span className="text-secondary">Touch</span>
                </h3>
                <p className="text-lg text-gray-600 font-medium max-w-md">
                  We&apos;d love to hear from you. Our team is ready to assist you with any inquiries or feedback.
                </p>
              </div>

              {/* Contact Details Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: MapPin,
                    title: "Our Address",
                    content: (
                      <span>
                        Bhomeshwar Plot, Jamnagar road<br />
                        Rajkot - 360006, Gujarat, India
                      </span>
                    ),
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: (
                      <div className="flex flex-col">
                        <span>+91 79904 29441</span>
                        <span>+91 63558 94754</span>
                      </div>
                    ),
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: (
                      <div className="flex flex-col">
                        <span className="truncate">info@triadglobaltrading.com</span>
                        <span className="truncate">support@triadglobaltrading.com</span>
                        <span className="truncate">export@triadglobaltrading.com</span>
                        <span className="truncate">import@triadglobaltrading.com</span>
                      </div>
                    ),
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: (
                      <div className="flex flex-col">
                        <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
                        <span>Sun: 9:00 AM - 1:00 PM</span>
                      </div>
                    ),
                  },
                ].map((item, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl border border-white/80 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1" />
                    <div className="relative p-6 space-y-4">
                      <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                        <item.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-black text-primary uppercase tracking-widest">{item.title}</h4>
                        <div className="text-sm text-gray-600 font-bold leading-relaxed">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/10 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
                  <div className="mb-10">
                    <h3 className="text-3xl font-black text-primary uppercase tracking-tight mb-2">
                      Send Us a <span className="text-secondary">Message</span>
                    </h3>
                    <p className="text-gray-600 font-bold text-sm uppercase tracking-wide">
                      Fill out the form and we&apos;ll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 ml-1">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          className="h-14 bg-white/50 border-white/80 rounded-2xl focus:ring-secondary/20 focus:border-secondary transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 ml-1">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="name@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="h-14 bg-white/50 border-white/80 rounded-2xl focus:ring-secondary/20 focus:border-secondary transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 ml-1">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          placeholder="+91 12345 67890"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-14 bg-white/50 border-white/80 rounded-2xl focus:ring-secondary/20 focus:border-secondary transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 ml-1">
                          Subject
                        </label>
                        <Input
                          name="subject"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={handleChange}
                          className="h-14 bg-white/50 border-white/80 rounded-2xl focus:ring-secondary/20 focus:border-secondary transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 ml-1">
                        Your Message *
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[160px] bg-white/50 border-white/80 rounded-3xl focus:ring-secondary/20 focus:border-secondary transition-all p-6"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-16 bg-primary hover:bg-primary/90 text-secondary font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_10px_30px_rgba(238,187,144,0.3)] hover:shadow-[0_15px_40px_rgba(238,187,144,0.4)] transition-all duration-500 flex items-center justify-center gap-3 group/btn"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-4 border-secondary/30 border-t-secondary rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    {status && (
                      <div className={cn(
                        "p-4 rounded-xl text-center font-bold text-sm animate-in fade-in zoom-in duration-300",
                        status.includes("success")
                          ? "bg-green-50 text-green-600 border border-green-100"
                          : "bg-red-50 text-red-600 border border-red-100"
                      )}>
                        {status}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-white/30 backdrop-blur-md relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-secondary/50" />
              <h2 className="text-lg font-black text-primary uppercase tracking-[0.3em]">
                Location
              </h2>
              <div className="h-px w-12 bg-secondary/50" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight">
              Find Us <span className="text-secondary">Here</span>
            </h3>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Visit our head office or explore the surrounding area of Rajkot, Gujarat.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-white/80 backdrop-blur-xl p-4 rounded-[2.5rem] shadow-2xl border border-white">
              <div className="rounded-[1.5rem] overflow-hidden border border-gray-100 h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.548533322894!2d70.78540927505234!3d22.31357667969254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c992a8c31375%3A0x815c11b23ac98c5f!2sBhomeshwar%20Plot%2C%20Rajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1730463600000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="grayscale hover:grayscale-0 transition-all duration-1000"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section / Help Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight">
              We&apos;re Here to <span className="text-secondary">Help</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Whether you have a question about our services, need technical support, or just want to provide feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Quick Response", desc: "We respond to all inquiries within 24 business hours." },
              { icon: HeadphonesIcon, title: "Expert Support", desc: "Our experienced professionals are ready to assist you." },
              { icon: ShieldCheck, title: "Secure & Private", desc: "Your information is protected with industry-standard security." }
            ].map((feature, idx) => (
              <div key={idx} className="group relative h-full">
                <div className="absolute -inset-0.5 bg-white rounded-3xl blur-sm" />
                <div className="relative h-full bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500 shadow-sm">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-secondary" />
                  </div>
                  <h4 className="text-lg font-black text-primary mb-3 uppercase tracking-tight">{feature.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium flex-grow">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
