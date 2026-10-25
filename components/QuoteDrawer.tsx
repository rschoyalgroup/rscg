"use client";

import { useState } from "react";
import { X, Trash2, Mail, Phone, User, MessageSquare } from "lucide-react";
import { useQuote } from "./QuoteContext";
import { useRouter } from "next/navigation";
import { submitLead } from "@/lib/leads";
import Honeypot from "./Honeypot";

export default function QuoteDrawer() {
  const { quoteItems, removeFromQuote, updateQty, isDrawerOpen, setIsDrawerOpen, clearQuote } = useQuote();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  if (!isDrawerOpen) return null;

  const totalItems = quoteItems.reduce((acc, item) => acc + item.qty, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (quoteItems.length === 0) return;
    
    setIsSubmitting(true);
    setSubmitError("");
    const result = await submitLead({
      form: "quote-list",
      formName: "Quote list",
      fields: { name: formData.name, email: formData.email, phone: formData.phone, message: formData.notes },
      items: quoteItems.map((item) => ({ id: item.id, name: item.name, category: item.category, size: item.size, qty: item.qty })),
      website: honeypot,
    });
    if (!result.ok) {
      setSubmitError(result.error);
      setIsSubmitting(false);
      return;
    }

    // Only now that the enquiry is saved: clear the list and close
    clearQuote();
    setIsDrawerOpen(false);
    setIsSubmitting(false);
    
    // Redirect to thank you page
    router.push("/thank-you");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fade-in bg-slate-900/60 backdrop-blur-sm">
      {/* Click outside to close */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-in">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-brand-primary text-white">
          <div>
            <h2 className="text-xl font-bold font-heading">Enquiry quote list</h2>
            <p className="text-xs text-slate-200 mt-1">Review items to submit for a custom proposal</p>
          </div>
          <button 
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="Close quote drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {quoteItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                📋
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Your quote list is empty</h3>
              <p className="text-sm text-slate-500 max-w-xs mx-auto">
                Explore our flour mills and products catalog to add items to your quote list.
              </p>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="mt-4 px-6 py-2.5 bg-brand-primary text-white rounded-xl text-sm font-semibold hover:bg-brand-secondary transition-colors"
              >
                Browse products
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-400 tracking-wider">
                  Selected items ({totalItems})
                </h3>
                <div className="divide-y divide-slate-100">
                  {quoteItems.map((item) => (
                    <div key={`${item.id}-${item.size || "std"}`} className="py-4 flex gap-4 first:pt-0 last:pb-0">
                      <div className="relative w-16 h-16 rounded-lg bg-slate-50 border border-slate-100 overflow-hidden flex-shrink-0 flex items-center justify-center">
                        <img 
                          src={item.image || "/images/wonder-mill.png"} 
                          alt={item.name}
                          className="object-contain max-h-full max-w-full p-1"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-800 text-sm truncate">{item.name}</h4>
                        <p className="text-xs text-brand-primary font-semibold mt-0.5">{item.category}</p>
                        {item.size && (
                          <span className="inline-block text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md mt-1">
                            Size: {item.size}
                          </span>
                        )}
                        
                        <div className="flex items-center gap-3 mt-2">
                          {/* Quantity Selector */}
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden h-8">
                            <button 
                              type="button"
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              className="px-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors h-full text-sm font-bold"
                            >
                              -
                            </button>
                            <span className="w-8 text-center text-sm font-bold text-slate-800">
                              {item.qty}
                            </span>
                            <button 
                              type="button"
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              className="px-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors h-full text-sm font-bold"
                            >
                              +
                            </button>
                          </div>

                          <button 
                            type="button"
                            onClick={() => removeFromQuote(item.id)}
                            className="text-slate-400 hover:text-red-500 p-1.5 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enquiry Form */}
              <form onSubmit={handleSubmit} className="relative space-y-4 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-400 tracking-wider">
                  Contact information
                </h3>
                
                <div className="space-y-3">
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
                    <input 
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none text-sm text-slate-800"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
                    <input 
                      type="email"
                      required
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none text-sm text-slate-800"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
                    <input 
                      type="tel"
                      required
                      placeholder="Phone/WhatsApp number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none text-sm text-slate-800"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
                    <textarea 
                      placeholder="Specific requirements, capacities needed, or questions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={3}
                      className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none text-sm text-slate-800 resize-none"
                    />
                  </div>
                </div>

                <Honeypot value={honeypot} onChange={setHoneypot} />

                {submitError && (
                  <p role="alert" className="text-xs text-red-500 bg-red-50 border border-red-500/20 rounded-xl px-4 py-3">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold rounded-xl shadow-[0_4px_14px_rgba(247,176,50,0.35)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.5)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-6 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Submitting request...</span>
                  ) : (
                    <>
                      <span>Submit quote request</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
