"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AboutHeroSection from "@/components/shared/hero/about-hero";

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
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1140px] px-6 md:px-3">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Form Left Side */}
            <div className="bg-gray-50 p-8 rounded-lg h-fit">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Send us your inquiry
              </h3>
              <p className="text-gray-600 mb-6">
                Fill out the form and we`&apos;`ll get back to you within 24
                hours.
              </p>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <Input
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    placeholder="+91 12345 67890"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="button"
                  className="w-full"
                  disabled={isLoading}
                  onClick={handleSubmit}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                {status && (
                  <p
                    className={`text-sm text-center font-medium ${
                      status.includes("success")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Information Right Side */}
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Response Time</h4>
                  <p className="text-gray-600">
                    We typically respond to all inquiries within 24-48 business
                    hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">What to Expect</h4>
                  <p className="text-gray-600">
                    Our team will review your message and provide detailed
                    answers to your questions or guide you to the appropriate
                    resources.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Support Areas</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Product information and pricing</li>
                    <li>• Technical support and guidance</li>
                    <li>• Service inquiries and quotes</li>
                    <li>• General questions and feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-6 md:px-3">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
            Why Contact Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-center">
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
              <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Our team ensures timely and detailed responses to all messages.
              </p>
            </div>
            <div className="text-center">
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
              <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Get professional advice and assistance from our experienced
                team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
