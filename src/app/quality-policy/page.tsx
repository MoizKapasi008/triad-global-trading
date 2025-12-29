"use client";

import AboutHeroSection from "@/components/shared/hero/about-hero";
import {
  ShieldCheck,
  Target,
  Eye,
  Gem,
  CheckCircle2,
  Zap,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Activity,
  Microscope,
  Leaf,
  Stethoscope
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function QualityPolicyPage() {
  return (
    <main>
      {/* Hero Section */}
      <AboutHeroSection
        title="Quality Policy"
        description="Our commitment to excellence and continuous improvement in everything we do."
      />

      {/* Policy Statement Section */}
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            {/* Commitment Left Side */}
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-tr from-secondary/10 via-transparent to-primary/5 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_30px_70px_rgba(0,0,0,0.08)] flex flex-col">
                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-0.5 w-12 bg-secondary" />
                      <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em]">
                        Commitment
                      </h2>
                    </div>
                    <h3 className="text-4xl font-black text-primary uppercase tracking-tight leading-tight">
                      Our Quality <span className="text-secondary">Pledge</span>
                    </h3>
                  </div>

                  <div className="space-y-10 flex-grow">
                    <div className="flex gap-6 group/item">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover/item:bg-primary transition-all duration-500">
                        <Gem className="w-6 h-6 text-primary group-hover/item:text-secondary" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-black text-primary uppercase tracking-tight">Mission Statement</h4>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          To consistently deliver products and services of the highest quality through continuous improvement, innovation, and unwavering commitment.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6 group/item">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover/item:bg-primary transition-all duration-500">
                        <Eye className="w-6 h-6 text-primary group-hover/item:text-secondary" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-black text-primary uppercase tracking-tight">Vision</h4>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          To be recognized as an industry leader in quality excellence, setting benchmarks for reliability and performance worldwide.
                        </p>
                      </div>
                    </div>

                    <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="text-lg font-black text-primary uppercase tracking-tight">Core Values</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {[
                          "Excellence", "Integrity", "Innovation", "Customer-Centric", "Accountability"
                        ].map((val) => (
                          <div key={val} className="flex items-center gap-2 text-sm text-gray-700 font-bold">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Objectives Right Side */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/5 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_30px_70px_rgba(0,0,0,0.08)] flex flex-col">
                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-0.5 w-12 bg-secondary" />
                      <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em]">
                        Objectives
                      </h2>
                    </div>
                    <h3 className="text-4xl font-black text-primary uppercase tracking-tight leading-tight">
                      Defining <span className="text-secondary">Goals</span>
                    </h3>
                  </div>

                  <div className="space-y-8 flex-grow">
                    {[
                      { icon: Target, title: "Customer Satisfaction", desc: "Achieve and maintain a minimum of 95% satisfaction rating through consistent quality delivery." },
                      { icon: ShieldCheck, title: "Zero Defects", desc: "Strive for zero-defect manufacturing through rigorous quality control and testing procedures." },
                      { icon: Activity, title: "Continuous Improvement", desc: "Implement ongoing process improvements to enhance quality standards and operational efficiency." },
                      { icon: Award, title: "Global Compliance", desc: "Maintain full compliance with international standards and recognized quality management systems." }
                    ].map((obj, idx) => (
                      <div key={idx} className="flex gap-6 group/obj">
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md group-hover/obj:bg-primary transition-all duration-300">
                          <obj.icon className="w-6 h-6 text-primary group-hover/obj:text-secondary" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-lg font-black text-primary uppercase tracking-tight leading-tight">{obj.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            {obj.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Principles Section */}
      <section className="py-24 bg-white/30 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-secondary/50" />
              <h2 className="text-lg font-black text-primary uppercase tracking-[0.3em]">
                Principles
              </h2>
              <div className="h-px w-12 bg-secondary/50" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight">
              Quality <span className="text-secondary">Assurance</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Microscope, title: "Detailed Analysis", desc: "Comprehensive quality checks at every stage to ensure products meet the highest standards." },
              { icon: Users, title: "Skilled Team", desc: "Regular training programs to ensure our team maintains expertise in quality practices." },
              { icon: TrendingUp, title: "Data Tracking", desc: "Continuous monitoring and analysis of quality metrics to drive improvement initiatives." },
              { icon: Zap, title: "Swift Action", desc: "Swift response to quality issues with root cause analysis and corrective measures." }
            ].map((feature, idx) => (
              <div key={idx} className="group relative h-full">
                <div className="absolute -inset-0.5 bg-white rounded-3xl blur-sm" />
                <div className="relative h-full bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
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

      {/* Certifications Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight">
              Quality <span className="text-secondary">Benchmarks</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Our commitment is validated by internationally recognized certifications and adherence to global standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: "ISO 9001", title: "Quality Management", icon: ShieldCheck, color: "blue" },
              { id: "ISO 14001", title: "Environmental", icon: Leaf, color: "green" },
              { id: "ISO 45001", title: "Health & Safety", icon: Stethoscope, color: "amber" }
            ].map((cert) => (
              <div key={cert.id} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-b from-primary/10 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-10 flex flex-col items-center border border-white/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl">
                    <cert.icon className="w-10 h-10 text-secondary" />
                  </div>
                  <h4 className="text-2xl font-black text-primary mb-2 uppercase tracking-tight">{cert.id}</h4>
                  <p className="text-gray-600 font-black text-[10px] uppercase tracking-[0.2em]">{cert.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Commitment Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -ml-32 -mb-32 blur-[100px]" />

        <div className="mx-auto max-w-5xl px-6 lg:px-12 relative z-10 text-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-3xl backdrop-blur-md mb-8 rotate-3 shadow-2xl">
            <BookOpen className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tight leading-tight">
            Management <span className="text-secondary">Commitment</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
              Our leadership team is fully committed to maintaining and improving our quality management system. We ensure adequate resources, training, and support are provided to all employees to achieve our quality objectives.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
              This policy is communicated to all stakeholders and made available to the public. We encourage feedback and suggestions for continuous improvement from all parties involved in our global operations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
