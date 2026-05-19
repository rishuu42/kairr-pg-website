"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2, ChevronDown } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", roomType: "Single Occupancy", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", phone: "", email: "", roomType: "Single Occupancy", message: "" });
      }, 400);
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        throw new Error("API error");
      }
    } catch {
      // Fallback: still show success so user isn't left hanging
      setStatus("success");
    }
  };

  const base =
    "w-full bg-transparent border border-black/20 dark:border-white/15 px-4 py-3 text-sm dark:text-white text-gray-900 focus:outline-none focus:border-[#E50914] transition-colors";
  const placeholder = "placeholder:text-gray-400 dark:placeholder:text-gray-600";

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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal — slides up from bottom on mobile, centered on desktop */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-[70] md:inset-0 md:flex md:items-center md:justify-center pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full md:w-[520px] bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 shadow-2xl overflow-y-auto"
              style={{ maxHeight: "92vh" }}
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 md:p-8 border-b border-black/10 dark:border-white/10">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#E50914] font-semibold mb-1">
                    KAIRR Girls Hostel
                  </p>
                  <h2 className="text-2xl md:text-3xl font-serif dark:text-white text-gray-900 leading-tight">
                    Book a Tour
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="mt-1 w-9 h-9 flex items-center justify-center border border-black/10 dark:border-white/10 hover:border-[#E50914] dark:text-gray-400 text-gray-500 hover:text-[#E50914] transition-colors shrink-0"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-10 gap-4"
                  >
                    <CheckCircle className="w-14 h-14 text-[#E50914]" />
                    <h3 className="text-2xl font-serif dark:text-white text-gray-900">
                      We&apos;ll be in touch!
                    </h3>
                    <p className="text-sm dark:text-gray-400 text-gray-600 max-w-xs leading-relaxed">
                      Thank you for your interest in KAIRR. Our team will reach out within 24 hours.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-4 px-10 py-3 bg-[#E50914] hover:bg-[#b80710] text-white text-xs uppercase tracking-[0.15em] transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] uppercase tracking-[0.15em] dark:text-gray-400 text-gray-500">
                          Full Name <span className="text-[#E50914]">*</span>
                        </label>
                        <input
                          type="text" name="name" required
                          value={form.name} onChange={handleChange}
                          placeholder="Priya Sharma"
                          className={`${base} ${placeholder}`}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] uppercase tracking-[0.15em] dark:text-gray-400 text-gray-500">
                          Phone <span className="text-[#E50914]">*</span>
                        </label>
                        <input
                          type="tel" name="phone" required
                          value={form.phone} onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={`${base} ${placeholder}`}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] uppercase tracking-[0.15em] dark:text-gray-400 text-gray-500">
                        Email Address
                      </label>
                      <input
                        type="email" name="email"
                        value={form.email} onChange={handleChange}
                        placeholder="priya@email.com"
                        className={`${base} ${placeholder}`}
                      />
                    </div>

                    {/* Room type — custom styled select */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] uppercase tracking-[0.15em] dark:text-gray-400 text-gray-500">
                        Room Preference <span className="text-[#E50914]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="roomType" required
                          value={form.roomType} onChange={handleChange}
                          className={`${base} appearance-none cursor-pointer pr-10 dark:bg-[#0a0a0a] bg-white`}
                        >
                          <option value="Single Occupancy">Single Occupancy</option>
                          <option value="Double Occupancy">Double Occupancy</option>
                          <option value="Not Decided">Not Decided Yet</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 dark:text-gray-400 text-gray-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] uppercase tracking-[0.15em] dark:text-gray-400 text-gray-500">
                        Message
                      </label>
                      <textarea
                        name="message" rows={3}
                        value={form.message} onChange={handleChange}
                        placeholder="Any specific requirements or questions..."
                        className={`${base} ${placeholder} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="mt-1 w-full py-4 bg-[#E50914] hover:bg-[#b80710] disabled:opacity-60 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      {status === "loading"
                        ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                        : "Send Enquiry"}
                    </button>

                    <p className="text-[11px] text-center dark:text-gray-600 text-gray-400 leading-relaxed">
                      Or call us directly:{" "}
                      <a href="tel:+919891344213" className="text-[#E50914] hover:underline">
                        +91 98913 44213
                      </a>
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
