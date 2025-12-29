"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AboutHeroSection from "@/components/shared/hero/about-hero";
import {
  Send,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  MessagesSquare,
  Scale,
  Zap,
  FileText,
  ShieldCheck,
  HeadphonesIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function InquiryPage() {
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
        title="Inquiry"
        description="Have a question or inquiry? Send us a message and our team will get back to you."
      />

      {/* Inquiry Form Section */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />

        <div className="relative z-10 mx-auto w-full px-6 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20">
            {/* Form Side */}
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-secondary/10 via-transparent to-primary/5 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-0.5 w-12 bg-secondary" />
                      <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em]">
                        Get into touch
                      </h2>
                    </div>
                    <h3 className="text-4xl font-black text-primary uppercase tracking-tight leading-tight">
                      Send us your <span className="text-secondary">Inquiry</span>
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 ml-1">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          placeholder="Moiz Kapasi"
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
                          placeholder="+91 79904 29441"
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
                          placeholder="Export Inquiry"
                          value={formData.subject}
                          onChange={handleChange}
                          className="h-14 bg-white/50 border-white/80 rounded-2xl focus:ring-secondary/20 focus:border-secondary transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 ml-4">
                        Your Message *
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Please tell us more about your requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[160px] bg-white/50 border-white/80 rounded-3xl p-6 focus:ring-secondary/20 focus:border-secondary transition-all"
                        required
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="group relative overflow-hidden w-full md:w-auto min-w-[220px] h-16 bg-primary text-secondary rounded-full transition-all duration-700 font-black text-sm tracking-[0.3em] shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_60px_rgba(255,193,7,0.2)] hover:-translate-y-1 active:scale-95"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-4">
                          {isLoading ? "SENDING..." : "SEND MESSAGE"}
                          {!isLoading && <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />}
                        </span>
                      </Button>
                    </div>

                    {status && (
                      <div className={cn(
                        "mt-6 p-4 rounded-2xl text-center text-sm font-bold tracking-wider",
                        status.includes("success")
                          ? "bg-green-500/10 text-green-600 border border-green-500/20"
                          : "bg-red-500/10 text-red-600 border border-red-500/20"
                      )}>
                        {status}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Info Side */}
            <div className="lg:sticky lg:top-36 h-fit space-y-10 animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="space-y-8">
                <div className="flex flex-col gap-8">
                  {[
                    {
                      icon: Clock,
                      title: "Fast Response",
                      text: "Expect a detailed reply within 24-48 business hours from our expert team."
                    },
                    {
                      icon: HeadphonesIcon,
                      title: "Expert Support",
                      text: "Get direct guidance on product technicalities, pricing, and global logistics."
                    },
                    {
                      icon: ShieldCheck,
                      title: "Secure Partnership",
                      text: "All inquiries are treated with strict confidentiality and professional integrity."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="group flex gap-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white shadow-lg group-hover:bg-primary group-hover:text-secondary transition-all duration-500">
                        <item.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-black text-primary uppercase tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Contact Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-secondary to-secondary/30 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                <div className="relative bg-primary rounded-3xl p-8 text-white overflow-hidden shadow-2xl">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                  <div className="relative z-10 space-y-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-md mb-2">
                      <Scale className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-widest leading-tight">
                      Compliance & <br />Quality Support
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-light">
                      Need specific quality certificates or certifications? Please mention them in your message.
                    </p>
                    <div className="pt-4">
                      <div className="h-0.5 w-12 bg-secondary mx-auto rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16 md:py-24 bg-white/30 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-secondary/50" />
              <h3 className="text-lg font-black text-primary uppercase tracking-[0.3em]">
                Excellence
              </h3>
              <div className="h-px w-12 bg-secondary/50" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight">
              Why Contact <span className="text-secondary">Us?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Quick Response",
                desc: "Our dedicated export team ensures timely and detailed responses to all messages across time zones."
              },
              {
                icon: FileText,
                title: "Expert Quotes",
                desc: "Get precise, transparent pricing and logistics estimates tailored to your specific trade requirements."
              },
              {
                icon: CheckCircle2,
                title: "Verified Quality",
                desc: "Discuss technical specifications directly with specialists who understand global food safety standards."
              },
              {
                icon: MessagesSquare,
                title: "Direct Support",
                desc: "Experience person-to-person communication with managers who prioritize your long-term success."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative h-full">
                <div className="absolute -inset-0.5 bg-white rounded-3xl blur-sm" />
                <div className="relative h-full bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-secondary" />
                  </div>
                  <h3 className="text-lg font-black text-primary mb-3 uppercase tracking-tight">
                    {feature.title}
                  </h3>
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
