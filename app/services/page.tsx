"use client";
import React, { useState } from "react";
import { ALL_SERVICES } from "@/data/services";
import { X, Check, ChevronDown, ChevronUp, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleReadMore = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setExpandedId(expandedId === id ? null : id);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setTimeout(() => setIsSubmitted(false), 400);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 border-b-4 border-black pb-12">
          <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-neutral-900">
            Service <br/> <span className="text-green-600">Inventory</span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
             <span className="flex items-center gap-2 border-r border-neutral-200 pr-6"><Clock size={14}/> Real-Time Availability</span>
             <span className="flex items-center gap-2"><ShieldCheck size={14}/> Certified BHS Technicians</span>
          </div>
        </header>

        {/* FULL WIDTH LIST: grid-cols-1 forces one card per row */}
        <div className="flex flex-col gap-8">
          {ALL_SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white border border-neutral-200 overflow-hidden transition-all duration-300 hover:border-black"
            >
              <div className="flex flex-col md:flex-row min-h-[300px]">
                
                {/* LEFT: IMAGE SECTION */}
                <div 
                  onClick={() => setSelectedService(service)}
                  className="w-full md:w-[400px] shrink-0 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 cursor-pointer relative"
                >
                  <img 
                    src={service.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    alt={service.title} 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-xl">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* RIGHT: CONTENT SECTION */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="font-black uppercase text-3xl md:text-4xl leading-none tracking-tighter text-neutral-900 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-[15px] md:text-lg text-neutral-500 leading-relaxed mb-6 max-w-2xl">
                    {service.desc}
                  </p>

                  {/* EXPANDABLE DETAILS AREA */}
                  <AnimatePresence>
                    {expandedId === service.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mb-8 p-6 bg-neutral-50 border-l-4 border-green-500 text-neutral-700 text-sm md:text-base leading-relaxed italic">
                          <span className="block text-[10px] font-black text-green-600 uppercase tracking-[0.2em] mb-2 not-italic">Technical Standards:</span>
                          {service.fullDetails}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ACTIONS */}
                  <div className="flex flex-wrap items-center gap-6 mt-auto pt-6 border-t border-neutral-100">
                    <button 
                      onClick={(e) => toggleReadMore(e, service.id)}
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
                    >
                      {expandedId === service.id ? "Close Specs" : "Expand Full Scope"}
                      {expandedId === service.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <button 
                      onClick={() => setSelectedService(service)}
                      className="ml-0 md:ml-auto bg-black text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.3em] transition-all hover:bg-green-600 flex items-center gap-4 group/btn"
                    >
                      Book This Service
                      <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* ACCENT CORNER */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-green-500 opacity-0 group-hover:opacity-100 transition-all" />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL SYSTEM (Inherited from previous) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal} className="absolute inset-0 bg-neutral-900/95 backdrop-blur-md" />
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} className="relative bg-white w-full max-w-xl shadow-2xl rounded-sm">
               <button onClick={closeModal} className="absolute top-8 right-8 text-neutral-400 hover:text-black transition-colors"><X size={28} /></button>
               <div className="p-10 md:p-16">
                {!isSubmitted ? (
                  <motion.div key="form">
                    <span className="text-green-600 font-black uppercase text-[11px] tracking-[0.4em] mb-4 block">Booking Request</span>
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">{selectedService.title}</h3>
                    
                    <form className="space-y-8" onSubmit={handleBooking}>
                        <div className="relative">
                          <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block mb-1">Full Name</label>
                          <input required type="text" className="w-full border-b-4 border-neutral-100 py-3 outline-none focus:border-green-600 font-bold text-xl transition-all" placeholder="YOUR NAME" />
                        </div>
                        <div className="relative">
                          <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block mb-1">Contact Phone</label>
                          <input required type="tel" className="w-full border-b-4 border-neutral-100 py-3 outline-none focus:border-green-600 font-bold text-xl transition-all" placeholder="+91" />
                        </div>
                        <button className="w-full bg-black text-white font-black uppercase py-6 tracking-[0.4em] hover:bg-green-600 transition-colors flex items-center justify-center gap-4 text-sm mt-4">
                          Confirm Inquiry <Check size={20}/>
                        </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div key="success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
                    <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-200"><Check size={50}/></div>
                    <h3 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">Sent!</h3>
                    <p className="text-neutral-500 text-sm mb-12 leading-relaxed uppercase tracking-widest">Our coordination team will contact you in <span className="text-black font-black">15 Minutes</span></p>
                    <button onClick={closeModal} className="w-full bg-black text-white font-black uppercase py-5 tracking-widest hover:bg-neutral-800 transition-all">Return to Catalogue</button>
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