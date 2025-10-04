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
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1200px]">
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
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Technical Excellence
                  </h3>
                  <p className="text-gray-600">
                    Leveraging cutting-edge technology to streamline operations
                    and deliver innovative solutions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Business Strategy
                  </h3>
                  <p className="text-gray-600">
                    Strategic planning and execution that ensures sustainable
                    growth and market leadership.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Data-Driven Insights
                  </h3>
                  <p className="text-gray-600">
                    Analyzing market trends and opportunities to guide informed
                    business decisions.
                  </p>
                </div>
              </div>

              {/* Team Members Grid */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Moiz Kapasi",
                    role: "Manager - Software Engineer",
                    image: "/images/placeholder.png",
                    description:
                      "Moiz brings his technical expertise and innovative mindset to build scalable solutions for our operations.",
                    icon: Code,
                    color: "blue",
                  },
                  {
                    name: "Taher Kapasi",
                    role: "Manager – Business Owner",
                    image: "/images/taher_kapasi.png",
                    description:
                      "Taher manages our business strategy and ensures that we deliver top-quality products and services to our clients.",
                    icon: Briefcase,
                    color: "green",
                  },
                  {
                    name: "Vinayak Cheruvil",
                    role: "Manager – Business Analyst",
                    image: "/images/placeholder.png",
                    description:
                      "Vinayak analyzes market trends and business opportunities to guide our growth and decision-making.",
                    icon: BarChart3,
                    color: "purple",
                  },
                ].map((member) => {
                  const IconComponent = member.icon;
                  return (
                    <div
                      key={member.name}
                      className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                    >
                      <div className="relative mb-6">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-32 h-32 rounded-full object-cover border-4 border-gray-100 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div
                          className={`absolute -bottom-2 -right-2 w-10 h-10 bg-${member.color}-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg`}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-gray-500 mb-4">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-center leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Our Journey Section */}
              <div className="bg-primary rounded-3xl p-8 md:p-12 text-white">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Our Journey
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    From childhood friends to business partners, our journey has
                    been driven by passion, collaboration, and the desire to
                    make a difference. Each challenge we faced taught us
                    valuable lessons, and each milestone we achieved
                    strengthened our bond.
                  </p>
                  <p className="text-white/90 text-lg leading-relaxed">
                    We believe in combining our unique professional skills with
                    our shared values to create products that our customers
                    love, and experiences that make a difference.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 pt-6">
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                      <Heart className="w-5 h-5" />
                      <span className="font-medium">Passion</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                      <Users className="w-5 h-5" />
                      <span className="font-medium">Collaboration</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                      <Lightbulb className="w-5 h-5" />
                      <span className="font-medium">Innovation</span>
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
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Temperature-Controlled Storage
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Climate-optimized warehouses with advanced monitoring
                    systems that maintain ideal conditions for preserving
                    product quality, freshness, and nutritional value throughout
                    the storage period.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Advanced Processing Equipment
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    State-of-the-art roasting and grinding machinery that
                    ensures precision, consistency, and efficiency in every
                    batch, delivering products that meet exacting quality
                    specifications.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    International Safety Standards
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Facilities fully compliant with global safety and hygiene
                    benchmarks, ensuring every product meets international
                    quality requirements and regulatory standards.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Streamlined Operations
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cutting-edge technology combined with skilled personnel to
                    optimize workflows, minimize wastage, and ensure timely
                    delivery to customers worldwide.
                  </p>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p className="leading-relaxed">
                    From temperature-controlled storage to advanced roasting and
                    grinding equipment, we prioritize precision and efficiency
                    in every operation. Our facilities also comply with
                    international safety and hygiene standards, ensuring that
                    every product delivered meets global benchmarks.
                  </p>
                  <p className="leading-relaxed">
                    By combining cutting-edge technology with skilled personnel,
                    we are able to streamline operations, reduce wastage, and
                    ensure timely delivery to our customers worldwide. This
                    robust infrastructure is the backbone of our commitment to
                    quality, reliability, and excellence in every product we
                    offer.
                  </p>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold text-center mb-8">
                  Infrastructure at a Glance
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      24/7
                    </div>
                    <div className="text-blue-100">Operations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      100%
                    </div>
                    <div className="text-blue-100">Quality Assured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      ISO
                    </div>
                    <div className="text-blue-100">Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      Global
                    </div>
                    <div className="text-blue-100">Standards</div>
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
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-7 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Globe2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Worldwide Reach
                  </h3>
                  <p className="text-gray-600">
                    Established presence across multiple continents including
                    Asia, Europe, North America, and the Middle East with
                    growing partnerships.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-7 rounded-xl border-2 border-green-100 hover:border-green-300 transition-all">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600">
                    Every shipment meets international quality standards with
                    rigorous testing and compliance with all regulatory
                    requirements.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-7 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Reliable Delivery
                  </h3>
                  <p className="text-gray-600">
                    Efficient logistics and robust supply chain management
                    ensuring timely deliveries while maintaining product
                    freshness and integrity.
                  </p>
                </div>
              </div>

              {/* Detailed Export Info */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Our Export Excellence
                </h3>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">
                        Efficient Logistics Management
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        With efficient logistics and robust supply chain
                        management, we provide timely deliveries and maintain
                        product freshness and integrity throughout the entire
                        shipping process.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">
                        International Coordination
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Our team coordinates closely with international partners
                        to ensure smooth operations and compliance with all
                        regulatory requirements across different markets and
                        jurisdictions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">
                        Long-Term Partnerships
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        By combining high-quality products with reliability and
                        transparency, we have built long-term relationships with
                        customers around the globe who trust us for consistent
                        excellence.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">
                        Trusted Global Partner
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Our commitment to excellence in every export makes us a
                        trusted partner for businesses seeking premium
                        agricultural commodities with reliable service and
                        competitive pricing.
                      </p>
                    </div>
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
