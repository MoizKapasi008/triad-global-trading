import AboutHeroSection from "@/components/shared/hero/about-hero";
import { aboutSections } from "@/lib/aboutUs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Users,
  Building2,
  Globe2,
  Award,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Code,
  Briefcase,
  BarChart3,
  Heart,
  Lightbulb,
  Rocket,
} from "lucide-react";

type AboutParams = {
  params: Promise<{
    aboutId: string;
  }>;
};

// ✅ Dynamic metadata (SEO)
export async function generateMetadata({
  params,
}: AboutParams): Promise<Metadata> {
  const { aboutId } = await params;
  const section = aboutSections.find((s) => s.id === aboutId);
  if (!section) {
    return {
      title: "Not Found",
      description: "The requested about section does not exist.",
    };
  }
  return {
    title: section.title,
    description: `Learn more about our ${section.title}.`,
  };
}

// ✅ Page component
export default async function AboutUsPage({ params }: AboutParams) {
  const { aboutId } = await params;
  const section = aboutSections.find((s) => s.id === aboutId);
  if (!section) return notFound();

  return (
    <main>
      {/* Hero Section */}
      <AboutHeroSection
        title={section.title}
        description={`Learn more about our ${section.title}.`}
      />

      {/* Content Section */}
      <section className="relative py-24 mb-0 bg-background overflow-hidden">
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
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 mx-auto w-full px-6 lg:px-12 max-w-7xl">
          {/* OUR TEAM SECTION */}
          {section.id === "our-team" && (
            <div className="space-y-16">
              {/* Header with Icon */}
              <div className="text-center max-w-4xl mx-auto space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Meet Our Team
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are three childhood friends who shared a dream of creating
                  something impactful. Together, we started this company to
                  bring high-quality products to customers worldwide.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Each of us comes from a unique professional background, which
                  makes our team strong and diverse: one is a{" "}
                  <span className="font-semibold text-primary">
                    Software Engineer
                  </span>
                  , one is a{" "}
                  <span className="font-semibold text-primary">
                    Business Owner
                  </span>
                  , and the other is a{" "}
                  <span className="font-semibold text-primary">
                    Business Analyst
                  </span>
                  . Our combined skills help us innovate, grow, and deliver
                  excellence every day.
                </p>
              </div>

              {/* Core Values */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Technical Excellence", desc: "Leveraging cutting-edge technology to streamline operations and deliver innovative solutions.", icon: Code, color: "blue" },
                  { title: "Business Strategy", desc: "Strategic planning and execution that ensures sustainable growth and market leadership.", icon: Briefcase, color: "green" },
                  { title: "Data-Driven Insights", desc: "Analyzing market trends and opportunities to guide informed business decisions.", icon: BarChart3, color: "purple" }
                ].map((item, idx) => (
                  <div key={item.title} className="group relative h-full">
                    <div className="absolute -inset-0.5 bg-white/40 rounded-3xl blur-sm" />
                    <div className="relative h-full bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 group flex flex-col">
                      <div className={`w-14 h-14 bg-${item.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                      </div>
                      <h3 className="text-xl font-black text-primary mb-3 uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-medium flex-grow">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Team Members Grid */}
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Anonymous",
                    role: "Manager",
                    image: "/images/placeholder.png",
                    description:
                      "Person brings his technical expertise and innovative mindset to build scalable solutions for our operations.",
                    icon: Code,
                    color: "blue",
                  },
                  {
                    name: "Anonymous",
                    role: "Manager",
                    image: "/images/placeholder.png",
                    description:
                      "Person manages our business strategy and ensures that we deliver top-quality products and services to our clients.",
                    icon: Briefcase,
                    color: "amber",
                  },
                  {
                    name: "Anonymous",
                    role: "Manager",
                    image: "/images/placeholder.png",
                    description:
                      "Person analyzes market trends and business opportunities to guide our growth and decision-making.",
                    icon: BarChart3,
                    color: "purple",
                  },
                ].map((member, idx) => {
                  const IconComponent = member.icon;
                  return (
                    <div
                      key={member.name}
                      className="animate-in fade-in slide-in-from-bottom-8 duration-700 group relative h-full"
                      style={{ animationDelay: `${idx * 200}ms` }}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-b from-secondary/10 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
                      <div className="relative h-full bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 flex flex-col items-center border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3">
                        <div className="relative mb-8">
                          <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={160}
                            height={160}
                            className="w-40 h-40 rounded-full object-cover border-8 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500"
                          />
                          <div
                            className={`absolute bottom-0 right-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-xl group-hover:rotate-[360deg] transition-transform duration-700`}
                          >
                            <IconComponent className="w-5 h-5 text-secondary" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-black text-primary mb-2 uppercase tracking-tight">
                          {member.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-6 h-0.5 bg-secondary" />
                          <p className="text-[10px] font-black text-primary/50 uppercase tracking-[0.2em]">
                            {member.role}
                          </p>
                          <div className="w-6 h-0.5 bg-secondary" />
                        </div>
                        <p className="text-gray-600 text-center leading-relaxed font-medium flex-grow">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Our Journey Section */}
              <div className="relative group mt-20">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-[3rem] blur-2xl opacity-50" />
                <div className="relative bg-primary rounded-[3rem] p-12 md:p-20 text-white overflow-hidden shadow-2xl">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-[100px]" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -ml-32 -mb-32 blur-[100px]" />

                  <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-3xl backdrop-blur-md mb-4 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <Rocket className="w-10 h-10 text-secondary" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
                        Our Journey
                      </h3>
                      <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
                    </div>

                    <div className="space-y-8 text-lg md:text-xl text-white/90 leading-relaxed font-light">
                      <p>
                        From childhood friends to business partners, our journey has
                        been driven by passion, collaboration, and the desire to
                        make a difference. Each challenge we faced taught us
                        valuable lessons, and each milestone we achieved
                        strengthened our bond.
                      </p>
                      <p>
                        We believe in combining our unique professional skills with
                        our shared values to create products that our customers
                        love, and experiences that make a difference.
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 pt-10">
                      {[
                        { icon: Heart, label: "Passion" },
                        { icon: Users, label: "Collaboration" },
                        { icon: Lightbulb, label: "Innovation" }
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-3 bg-white/10 px-8 py-4 rounded-full backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/20 transition-all group/tag cursor-default">
                          <item.icon className="w-5 h-5 text-secondary group-hover/tag:scale-125 transition-transform" />
                          <span className="font-bold uppercase tracking-[0.2em] text-xs">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* INFRASTRUCTURE SECTION */}
          {section.id === "infrastructure" && (
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Our Infrastructure
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We operate state-of-the-art facilities equipped with modern
                  processing, packaging, and storage technologies to ensure the
                  highest quality standards. Our infrastructure is designed to
                  handle both bulk and retail production, maintaining product
                  integrity at every stage.
                </p>
              </div>

              {/* Infrastructure Features Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Temperature-Controlled Storage",
                    description: "Climate-optimized warehouses with advanced monitoring systems that maintain ideal conditions for preserving product quality, freshness, and nutritional value.",
                    icon: Shield,
                    gradient: "from-blue-500 to-indigo-600"
                  },
                  {
                    title: "Advanced Processing Equipment",
                    description: "State-of-the-art roasting and grinding machinery that ensures precision, consistency, and efficiency in every batch, delivering products that meet exacting quality specifications.",
                    icon: Zap,
                    gradient: "from-green-500 to-emerald-600"
                  },
                  {
                    title: "International Safety Standards",
                    description: "Facilities fully compliant with global safety and hygiene benchmarks, ensuring every product meets international quality requirements and regulatory standards.",
                    icon: Award,
                    gradient: "from-purple-500 to-fuchsia-600"
                  },
                  {
                    title: "Streamlined Operations",
                    description: "Cutting-edge technology combined with skilled personnel to optimize workflows, minimize wastage, and ensure timely delivery to customers worldwide.",
                    icon: TrendingUp,
                    gradient: "from-orange-500 to-amber-600"
                  }
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className="animate-in fade-in slide-in-from-bottom-8 duration-700 group relative h-full"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="absolute -inset-0.5 bg-white/40 rounded-[2rem] blur-sm" />
                    <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-[2rem] p-10 border border-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 group flex flex-col">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-medium flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Description */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-white/20 rounded-3xl blur-md" />
                <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white">
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p className="leading-relaxed font-medium">
                      From temperature-controlled storage to advanced roasting and
                      grinding equipment, we prioritize precision and efficiency
                      in every operation. Our facilities also comply with
                      international safety and hygiene standards, ensuring that
                      every product delivered meets global benchmarks.
                    </p>
                    <p className="leading-relaxed font-medium">
                      By combining cutting-edge technology with skilled personnel,
                      we are able to streamline operations, reduce wastage, and
                      ensure timely delivery to our customers worldwide. This
                      robust infrastructure is the backbone of our commitment to
                      quality, reliability, and excellence in every product we
                      offer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
                <div className="absolute inset-0 bg-primary/95 backdrop-blur-md" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl" />

                <div className="relative z-10 p-12 md:p-16 text-white text-center">
                  <h3 className="text-2xl font-black uppercase tracking-[0.4em] mb-12 flex items-center justify-center gap-4">
                    <div className="h-0.5 w-8 bg-secondary" />
                    Metrics Overview
                    <div className="h-0.5 w-8 bg-secondary" />
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                      { value: "24/7", label: "Operations" },
                      { value: "100%", label: "Quality Assured" },
                      { value: "ISO", label: "Certified" },
                      { value: "GLO", label: "Global Standards", suffix: "BAL" }
                    ].map((metric) => (
                      <div key={metric.label} className="group/metric">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 text-secondary group-hover/metric:scale-110 transition-transform duration-500 flex items-baseline justify-center">
                          {metric.value}
                          {metric.suffix && <span className="text-4xl md:text-5xl lg:text-6xl">{metric.suffix}</span>}
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* GLOBAL EXPORT SECTION */}
          {section.id === "global-export" && (
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Globe2 className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Global Export
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our export network spans multiple countries across Asia,
                  Europe, North America, and the Middle East, delivering premium
                  agricultural products to clients worldwide. We ensure every
                  shipment meets international quality standards and is handled
                  with utmost care.
                </p>
              </div>

              {/* Export Highlights */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Worldwide Reach",
                    description: "Established presence across multiple continents including Asia, Europe, North America, and the Middle East.",
                    icon: Globe2,
                    gradient: "from-blue-500/10 to-blue-500/5",
                    borderColor: "border-blue-500/20"
                  },
                  {
                    title: "Quality Assurance",
                    description: "Every shipment meets international quality standards with rigorous testing and compliance.",
                    icon: Shield,
                    gradient: "from-emerald-500/10 to-emerald-500/5",
                    borderColor: "border-emerald-500/20"
                  },
                  {
                    title: "Reliable Delivery",
                    description: "Efficient logistics and robust supply chain management ensuring timely deliveries worldwide.",
                    icon: TrendingUp,
                    gradient: "from-amber-500/10 to-amber-500/5",
                    borderColor: "border-amber-500/20"
                  }
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className="relative group animate-in fade-in slide-in-from-right-8 duration-700 h-full"
                    style={{ animationDelay: `${idx * 200}ms` }}
                  >
                    <div className={`relative bg-gradient-to-br ${item.gradient} backdrop-blur-xl p-10 rounded-[2rem] border-2 ${item.borderColor} hover:border-secondary transition-all duration-500 h-full flex flex-col items-center text-center shadow-lg hover:shadow-2xl`}>
                      <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl">
                        <item.icon className="w-10 h-10 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 font-medium leading-relaxed flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Export Info */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/10 to-transparent rounded-[2.5rem] blur-xl" />
                <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-10 border border-white shadow-[0_15px_50px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="h-0.5 w-16 bg-secondary" />
                    <h3 className="text-2xl font-black text-primary uppercase tracking-[0.3em]">
                      Export Excellence
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                    {[
                      { icon: Zap, color: "blue", title: "Logistics Management", text: "Efficient logistics and robust supply chain management providing timely deliveries and maintaining product integrity." },
                      { icon: Users, color: "green", title: "Global Coordination", text: "Close coordination with international partners ensuring smooth operations and compliance across all jurisdictions." },
                      { icon: Award, color: "purple", title: "Partner Trusts", text: "Long-term relationships built on reliability and transparency, earning trust from customers worldwide." },
                      { icon: Target, color: "amber", title: "Premium Service", text: "Commitment to excellence in every export, providing reliable service and competitive global pricing." }
                    ].map((item) => (
                      <div key={item.title} className="flex gap-6 group/item">
                        <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover/item:bg-secondary transition-colors duration-500 shadow-xl">
                          <item.icon className="w-8 h-8 text-secondary group-hover/item:text-primary transition-colors duration-500" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-lg font-black text-primary uppercase tracking-tight">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed font-medium">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
