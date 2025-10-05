"use client";

import AboutHeroSection from "@/components/shared/hero/about-hero";

export default function QualityPolicyPage() {
  return (
    <main>
      {/* Hero Section */}
      <AboutHeroSection
        title="Quality Policy"
        description="Our commitment to excellence and continuous improvement in everything we do."
      />

      {/* Policy Statement Section */}
      <section className="py-20">
        <div className="mx-auto max-w-[1140px] px-6 md:px-3">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Policy Statement Left Side */}
            <div className="bg-primary-foreground p-8 rounded-lg h-fit">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Our Quality Commitment
              </h3>
              <p className="text-gray-600 mb-6">
                We are dedicated to delivering superior quality products and
                services that exceed customer expectations.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-primary">
                    Mission Statement
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    To consistently deliver products and services of the highest
                    quality through continuous improvement, innovation, and
                    unwavering commitment to customer satisfaction.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2 text-primary">
                    Vision
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    To be recognized as an industry leader in quality
                    excellence, setting benchmarks for reliability, performance,
                    and customer satisfaction.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2 text-primary">
                    Core Values
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Excellence in every aspect of our work</li>
                    <li>• Integrity and transparency in operations</li>
                    <li>• Continuous learning and improvement</li>
                    <li>• Customer-centric approach</li>
                    <li>• Accountability and responsibility</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quality Objectives Right Side */}
            <div className="bg-primary-foreground p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Quality Objectives
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Customer Satisfaction
                  </h4>
                  <p className="text-gray-600">
                    Achieve and maintain a minimum of 95% customer satisfaction
                    rating through consistent delivery of quality products and
                    services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Zero Defects</h4>
                  <p className="text-gray-600">
                    Strive for zero-defect manufacturing and service delivery
                    through rigorous quality control and testing procedures.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Continuous Improvement
                  </h4>
                  <p className="text-gray-600">
                    Implement ongoing process improvements and innovation to
                    enhance quality standards and operational efficiency.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Compliance</h4>
                  <p className="text-gray-600">
                    Maintain full compliance with industry standards,
                    regulations, and internationally recognized quality
                    management systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Principles Section */}
      <section className="py-16 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-6 md:px-3">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
            Our Quality Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center">
                Quality Assurance
              </h3>
              <p className="text-gray-600 text-center">
                Comprehensive quality checks at every stage to ensure products
                meet the highest standards.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center">
                Employee Training
              </h3>
              <p className="text-gray-600 text-center">
                Regular training programs to ensure our team maintains expertise
                in quality practices.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center">
                Performance Monitoring
              </h3>
              <p className="text-gray-600 text-center">
                Continuous monitoring and analysis of quality metrics to drive
                improvement initiatives.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center">
                Rapid Response
              </h3>
              <p className="text-gray-600 text-center">
                Swift action on quality issues with root cause analysis and
                corrective measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 ">
        <div className="mx-auto max-w-4xl px-6 md:px-3">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
            Quality Certifications & Standards
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our commitment to quality is validated by internationally recognized
            certifications and adherence to industry standards.
          </p>
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">ISO</span>
                </div>
                <h4 className="font-semibold mb-1">ISO 9001:2015</h4>
                <p className="text-sm text-gray-600">Quality Management</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">ISO</span>
                </div>
                <h4 className="font-semibold mb-1">ISO 14001:2015</h4>
                <p className="text-sm text-gray-600">
                  Environmental Management
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">ISO</span>
                </div>
                <h4 className="font-semibold mb-1">ISO 45001:2018</h4>
                <p className="text-sm text-gray-600">Health & Safety</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Commitment Section */}
      <section className="py-16 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-6 md:px-3">
          <div className="bg-primary-foreground rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Management Commitment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our leadership team is fully committed to maintaining and
              improving our quality management system. We ensure adequate
              resources, training, and support are provided to all employees to
              achieve our quality objectives. Regular management reviews are
              conducted to assess the effectiveness of our quality system and
              identify opportunities for improvement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This quality policy is communicated to all employees, suppliers,
              and stakeholders, and is made available to the public. We
              encourage feedback and suggestions for continuous improvement from
              all parties involved in our operations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
