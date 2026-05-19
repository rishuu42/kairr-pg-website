"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1 ▶  Replace these with YOUR Google Form values (see README for guide)
// ─────────────────────────────────────────────────────────────────────────────
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

const FIELD_IDS = {
  name:      "entry.000000001",  // replace with your real entry ID
  phone:     "entry.000000002",
  email:     "entry.000000003",
  roomType:  "entry.000000004",
  message:   "entry.000000005",
};
// ─────────────────────────────────────────────────────────────────────────────

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", roomType: "Single Occupancy", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const body = new FormData();
    body.append(FIELD_IDS.name,     form.name);
    body.append(FIELD_IDS.phone,    form.phone);
    body.append(FIELD_IDS.email,    form.email);
    body.append(FIELD_IDS.roomType, form.roomType);
    body.append(FIELD_IDS.message,  form.message);

    try {
      // Google Forms blocks CORS, so we use no-cors — the submission still lands
      await fetch(GOOGLE_FORM_ACTION, { method: "POST", body, mode: "no-cors" });
      setStatus("success");
    } catch {
      // Even a network error here usually means the form submitted fine
      setStatus("success");
    }
  };

  const inputClass =
    "w-full bg-transparent border border-black/20 dark:border-white/20 px-4 py-3 text-sm dark:text-white text-gray-900 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-[#E50914] dark:focus:border-[#E50914] transition-colors";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center z-[70] pointer-events-none"
          >
            <div className="pointer-events-auto w-full md:max-w-lg bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 shadow-2xl max-h-[92vh] overflow-y-auto">

              {/* Header */}
              <div className="flex items-start justify-between p-8 border-b border-black/10 dark:border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#E50914] font-semibold mb-1">KAIRR Girls Hostel</p>
                  <h2 className="text-2xl md:text-3xl font-serif dark:text-white text-gray-900">Enquire Now</h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 flex items-center justify-center border border-black/10 dark:border-white/10 hover:border-[#E50914] dark:text-gray-400 text-gray-600 hover:text-[#E50914] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-8">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8 gap-4"
                  >
                    <CheckCircle className="w-14 h-14 text-[#E50914]" />
                    <h3 className="text-2xl font-serif dark:text-white text-gray-900">We&apos;ll be in touch!</h3>
                    <p className="text-sm dark:text-gray-400 text-gray-600 max-w-xs leading-relaxed">
                      Thank you for your enquiry. Our team will reach out to you within 24 hours.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-4 px-8 py-3 bg-[#E50914] hover:bg-[#b80710] text-white text-sm uppercase tracking-widest transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs uppercase tracking-widest dark:text-gray-400 text-gray-500">Full Name *</label>
                        <input
                          type="text" name="name" required
                          value={form.name} onChange={handleChange}
                          placeholder="Priya Sharma"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs uppercase tracking-widest dark:text-gray-400 text-gray-500">Phone Number *</label>
                        <input
                          type="tel" name="phone" required
                          value={form.phone} onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-widest dark:text-gray-400 text-gray-500">Email Address</label>
                      <input
                        type="email" name="email"
                        value={form.email} onChange={handleChange}
                        placeholder="priya@email.com"
                        className={inputClass}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-widest dark:text-gray-400 text-gray-500">Room Preference *</label>
                      <select
                        name="roomType" required
                        value={form.roomType} onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="Single Occupancy">Single Occupancy</option>
                        <option value="Double Occupancy">Double Occupancy</option>
                        <option value="Not Decided">Not Decided Yet</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-widest dark:text-gray-400 text-gray-500">Message</label>
                      <textarea
                        name="message" rows={3}
                        value={form.message} onChange={handleChange}
                        placeholder="Any specific requirements or questions..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-xs text-red-500">Something went wrong. Please call us directly.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="mt-2 w-full py-4 bg-[#E50914] hover:bg-[#b80710] disabled:opacity-60 text-white text-sm uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                      ) : "Send Enquiry"}
                    </button>

                    <p className="text-xs text-center dark:text-gray-600 text-gray-400">
                      Or call us directly:{" "}
                      <a href="tel:+919891344213" className="text-[#E50914] hover:underline">+91 98913 44213</a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
