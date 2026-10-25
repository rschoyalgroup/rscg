"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/lib/leads";
import Honeypot from "./Honeypot";

export default function LeadForm({
  className = "",
  formId = "consultation",
}: {
  className?: string;
  /** Which form this is in Clyrix: "consultation" on service pages, "callback" in the call-back popup. */
  formId?: "consultation" | "callback";
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    country: "",
    email: "",
    requirement: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const router = useRouter();

  const requirements = [
    { value: "", label: "Select business area" },
    { value: "wondermill", label: "Wonder Mill IoT Smart Mills" },
    { value: "stone_dresser", label: "Emery Stone Dresser Solutions" },
    { value: "turnkey_mill", label: "Turnkey Flour Mill Plants (20-150+ TPD)" },
    { value: "traditional_mills", label: "Traditional Stone Mills & Emery Stones" },
    { value: "general", label: "General Corporate Inquiry / Partnership" },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.requirement) newErrors.requirement = "Please select a business area";
    
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");
    const result = await submitLead({
      form: formId,
      formName: formId === "callback" ? "Call-back request" : "Consultation request",
      fields: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        country: formData.country,
        interest: requirements.find((r) => r.value === formData.requirement)?.label || formData.requirement,
        message: formData.message,
      },
      website: honeypot,
    });
    if (!result.ok) {
      setSubmitError(result.error);
      setIsSubmitting(false);
      return;
    }
    router.push("/thank-you?success=true");
  };

  return (
    <div className={`relative glass-panel rounded-3xl p-8 shadow-2xl ${className || "shadow-slate-900/10"} transition-all duration-300`}>
      {/* Shimmer top badge */}
      <div className="absolute -top-3.5 left-8 animate-shimmer text-white text-[10px] font-extrabold tracking-widest px-3.5 py-1.5 rounded-lg shadow-md select-none">
        Connect with us
      </div>

      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Request a consultation
        </h3>
        <p className="text-sm sm:text-base text-slate-500 mt-2 leading-relaxed">
          Submit your requirements and an RS Choyal engineer or representative will contact you within one business day.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 tracking-wider mb-1.5">
            Full name <span className="text-brand-primary">*</span>
          </label>
          <input
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full text-sm px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none ${
              errors.name
                ? "border-red-500/50 focus:ring-2 focus:ring-red-500/10"
                : "border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10"
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Phone & Email (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 tracking-wider mb-1.5">
              Phone number <span className="text-brand-primary">*</span>
            </label>
            <input
              type="tel"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full text-sm px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none ${
                errors.phone
                  ? "border-red-500/50 focus:ring-2 focus:ring-red-500/10"
                  : "border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10"
              }`}
            />
            {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 tracking-wider mb-1.5">
              Email address <span className="text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full text-sm px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none ${
                errors.email
                  ? "border-red-500/50 focus:ring-2 focus:ring-red-500/10"
                  : "border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10"
              }`}
            />
            {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* City & Country (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 tracking-wider mb-1.5">
              City <span className="text-brand-primary">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Ajmer / Dubai"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={`w-full text-sm px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none ${
                errors.city
                  ? "border-red-500/50 focus:ring-2 focus:ring-red-500/10"
                  : "border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10"
              }`}
            />
            {errors.city && <p className="text-[11px] text-red-500 mt-1">{errors.city}</p>}
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 tracking-wider mb-1.5">
              Country <span className="text-brand-primary">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. India / UAE"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className={`w-full text-sm px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none ${
                errors.country
                  ? "border-red-500/50 focus:ring-2 focus:ring-red-500/10"
                  : "border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10"
              }`}
            />
            {errors.country && <p className="text-[11px] text-red-500 mt-1">{errors.country}</p>}
          </div>
        </div>

        {/* Business Area Dropdown */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 tracking-wider mb-1.5">
            Area of interest <span className="text-brand-primary">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.requirement}
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
              className={`w-full text-sm px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none appearance-none cursor-pointer ${
                errors.requirement
                  ? "border-red-500/50 focus:ring-2 focus:ring-red-500/10"
                  : "border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10"
              }`}
            >
              {requirements.map((req) => (
                <option key={req.value} value={req.value} className="bg-white text-slate-900">
                  {req.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          {errors.requirement && <p className="text-[11px] text-red-500 mt-1">{errors.requirement}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 tracking-wider mb-1.5">
            Brief message <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <textarea
            placeholder="Tell us about your project or inquiry..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={3}
            className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 resize-none"
          />
        </div>

        <Honeypot value={honeypot} onChange={setHoneypot} />

        {submitError && (
          <p role="alert" className="text-xs text-red-500 bg-red-50 border border-red-500/20 rounded-xl px-4 py-3">
            {submitError}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
        >
          {isSubmitting ? (
            <span>Sending inquiry...</span>
          ) : (
            <>
              <span>Submit request</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <p className="text-xs text-slate-500 text-center mt-3 leading-relaxed">
          By submitting, you agree to our privacy policy. No promotional spam.
        </p>
      </form>
    </div>
  );
}
