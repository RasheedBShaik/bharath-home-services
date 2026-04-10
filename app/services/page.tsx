"use client";
import React, { useState } from "react";
import { ALL_SERVICES } from "@/data/services";
import {
  X,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the API call
    setIsSubmitted(true);
  };
  const toggleReadMore = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  const closeModal = () => {
    setSelectedService(null);
    setTimeout(() => setIsSubmitted(false), 400);
  };

  // Animation Variants
  const containerVars = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const cardVars = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }as const;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* --- Dynamic Header --- */}
        <header className="mb-20 border-b-4 border-black pb-12 overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-neutral-900"
          >
            Service <br /> <span className="text-green-600">Inventory</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400"
          >
            <span className="flex items-center gap-2 border-r border-neutral-200 pr-6">
              <Clock size={14} className="text-green-600" /> Real-Time
              Availability
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-green-600" /> Certified BHS
              Technicians
            </span>
          </motion.div>
        </header>

        {/* --- Animated Service List --- */}
        <LayoutGroup>
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-8"
          >
            {ALL_SERVICES.map((service) => (
              <motion.div
                layout
                variants={cardVars}
                key={service.id}
                className="group relative bg-white border border-neutral-200 overflow-hidden transition-all duration-500 hover:border-black hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
              >
                <div className="flex flex-col md:flex-row min-h-75">
                  {/* LEFT: Image with Reveal Overlay */}
                  <div
                    onClick={() => setSelectedService(service)}
                    className="w-full md:w-100 shrink-0 overflow-hidden relative cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="w-full h-full"
                    >
                      <img
                        src={service.image}
                        className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-1000"
                        alt={service.title}
                      />
                    </motion.div>

                    {/* Floating Price Tag */}
                    <div className="absolute top-6 left-6 overflow-hidden">
                      <motion.span
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest block"
                      >
                        {service.price}
                      </motion.span>
                    </div>
                  </div>

                  {/* RIGHT: Content with Layout Transitions */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white">
                    <motion.div layout="position">
                      <h3 className="font-black uppercase text-3xl md:text-5xl leading-none tracking-tighter text-neutral-900 group-hover:text-green-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[15px] md:text-lg text-neutral-500 leading-relaxed mt-4 mb-8 max-w-xl">
                        {service.desc}
                      </p>
                    </motion.div>

                    {/* EXPANDABLE SPECS */}
                    <AnimatePresence mode="wait">
                      {expandedId === service.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mb-8 p-8 bg-neutral-50 border-l-4 border-green-500">
                            <span className="block text-[10px] font-black text-green-600 uppercase tracking-widest mb-3">
                              Service Architecture
                            </span>
                            <p className="text-neutral-700 text-sm md:text-base leading-relaxed font-medium">
                              {service.fullDetails}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* ACTIONS */}
                    <motion.div
                      layout="position"
                      className="flex flex-wrap items-center gap-8 mt-auto pt-8 border-t border-neutral-100"
                    >
                      <button
                        onClick={(e) => toggleReadMore(e, service.id)}
                        className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-black transition-all"
                      >
                        <span className="w-8 h-px bg-neutral-200 group-hover:w-12 transition-all" />
                        {expandedId === service.id ? "Minimize" : "View Specs"}
                        <ChevronDown
                          className={`transition-transform duration-500 ${expandedId === service.id ? "rotate-180" : ""}`}
                          size={14}
                        />
                      </button>

                      <button
                        onClick={() => setSelectedService(service)}
                        className="ml-auto bg-black text-white px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] transition-all hover:bg-green-600 flex items-center gap-4 group/btn"
                      >
                        Initiate Booking
                        <ArrowRight
                          size={18}
                          className="group-hover/btn:translate-x-2 transition-transform duration-500"
                        />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </LayoutGroup>
      </div>

      {/* --- Global Booking Modal --- */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-neutral-950/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative bg-white w-full max-w-2xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-8 right-8 z-10 text-neutral-400 hover:text-black hover:rotate-90 transition-all duration-500"
              >
                <X size={32} />
              </button>

              <div className="p-10 md:p-20">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-0.5 bg-green-600" />
                      <span className="text-green-600 font-black uppercase text-[10px] tracking-[0.4em]">
                        Reservation
                      </span>
                    </div>
                    <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-none">
                      {selectedService.title}
                    </h3>

                    <form className="space-y-10" onSubmit={handleBooking}>
                      <div className="group relative">
                        <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block mb-2 group-focus-within:text-green-600 transition-colors">
                          Client Identification
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full border-b-2 border-neutral-100 py-4 outline-none focus:border-black font-bold text-2xl transition-all placeholder:text-neutral-200"
                          placeholder="FULL NAME"
                        />
                      </div>
                      <div className="group relative">
                        <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block mb-2 group-focus-within:text-green-600 transition-colors">
                          Communication Line
                        </label>
                        <input
                          required
                          type="tel"
                          className="w-full border-b-2 border-neutral-100 py-4 outline-none focus:border-black font-bold text-2xl transition-all placeholder:text-neutral-200"
                          placeholder="+91"
                        />
                      </div>

                      <button className="w-full bg-black text-white font-black uppercase py-7 tracking-[0.5em] hover:bg-green-600 transition-all shadow-2xl hover:shadow-green-200 flex items-center justify-center gap-4 text-[12px] mt-4">
                        Dispatch Inquiry <ArrowRight size={20} />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-32 h-32 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_20px_50px_rgba(34,197,94,0.3)]">
                      <Check size={60} />
                    </div>
                    <h3 className="text-6xl font-black uppercase tracking-tighter mb-6">
                      Confirmed
                    </h3>
                    <p className="text-neutral-500 text-xs mb-14 leading-relaxed uppercase tracking-[0.3em]">
                      Our logistics team will verify your slot within{" "}
                      <span className="text-black font-black">15 Minutes</span>
                    </p>
                    <button
                      onClick={closeModal}
                      className="w-full border-2 border-black text-black font-black uppercase py-5 tracking-widest hover:bg-black hover:text-white transition-all"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;
