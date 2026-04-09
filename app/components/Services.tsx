"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ALL_SERVICES } from "@/data/services";
import { ArrowRight, Plus, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesHome = () => {
  // 1. STATE MANAGEMENT
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 2. HANDLERS
  const openModal = (service: any) => {
    setSelectedService(service);
    setIsSubmitted(false);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
  };

  const homeServices = ALL_SERVICES.slice(0, 8);

  return (
    <section className="bg-white py-32 px-6 md:px-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Expertise</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-neutral-900">
              Modern <br/> <span className="text-neutral-400">Solutions</span>
            </h2>
          </div>
          <Link 
            href="/services" 
            className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] bg-black text-white px-8 py-4 hover:bg-green-600 transition-all"
          >
            Explore 20+ Services 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
          {homeServices.map((service) => (
            <div 
              key={service.id} 
              onClick={() => openModal(service)} // TRIGGER MODAL
              className="cursor-pointer group relative bg-white p-8 hover:bg-neutral-50 transition-all flex flex-col h-full overflow-hidden"
            >
              <div className="aspect-square overflow-hidden mb-8 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
              </div>

              <div className="flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-black uppercase text-xl tracking-tighter leading-none text-neutral-900 group-hover:text-green-600">
                    {service.title}
                  </h3>
                  <Plus size={18} className="text-neutral-300 group-hover:rotate-90 group-hover:text-green-600 transition-all" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                   <div className="h-px w-4 bg-green-500" />
                   <p className="text-[10px] text-green-600 font-black uppercase tracking-widest">{service.price}</p>
                </div>
                <p className="text-[12px] leading-relaxed text-neutral-400 font-medium line-clamp-3">
                  {service.desc}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-green-500 opacity-0 group-hover:opacity-100 transition-all translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          ))}
        </div>

        {/* 3. THE BOOKING MODAL */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
              {/* Overlay */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={closeModal} 
                className="absolute inset-0 bg-neutral-900/95 backdrop-blur-md" 
              />
              
              {/* Modal Content */}
              <motion.div 
                initial={{ y: 40, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                exit={{ y: 40, opacity: 0 }} 
                className="relative bg-white w-full max-w-xl shadow-2xl rounded-sm overflow-hidden"
              >
                <button 
                  onClick={closeModal} 
                  className="absolute top-8 right-8 text-neutral-400 hover:text-black transition-colors z-20"
                >
                  <X size={28} />
                </button>

                <div className="p-10 md:p-16">
                  {!isSubmitted ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <span className="text-green-600 font-black uppercase text-[11px] tracking-[0.4em] mb-4 block">
                        Booking Request
                      </span>
                      <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
                        {selectedService.title}
                      </h3>
                      
                      <form className="space-y-8" onSubmit={handleBooking}>
                        <div className="relative">
                          <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block mb-1">Full Name</label>
                          <input 
                            required 
                            type="text" 
                            className="w-full border-b-4 border-neutral-100 py-3 outline-none focus:border-green-600 font-bold text-xl transition-all placeholder:text-neutral-200" 
                            placeholder="YOUR NAME" 
                          />
                        </div>
                        <div className="relative">
                          <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block mb-1">Contact Phone</label>
                          <input 
                            required 
                            type="tel" 
                            className="w-full border-b-4 border-neutral-100 py-3 outline-none focus:border-green-600 font-bold text-xl transition-all placeholder:text-neutral-200" 
                            placeholder="+91" 
                          />
                        </div>
                        <button className="w-full bg-black text-white font-black uppercase py-6 tracking-[0.4em] hover:bg-green-600 transition-colors flex items-center justify-center gap-4 text-sm mt-4">
                          Confirm Inquiry <Check size={20}/>
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="success" 
                      initial={{ scale: 0.9, opacity: 0 }} 
                      animate={{ scale: 1, opacity: 1 }} 
                      className="text-center py-10"
                    >
                      <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-200">
                        <Check size={50}/>
                      </div>
                      <h3 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">Sent!</h3>
                      <p className="text-neutral-500 text-sm mb-12 leading-relaxed uppercase tracking-widest">
                        Our coordination team will contact you in <span className="text-black font-black">15 Minutes</span>
                      </p>
                      <button 
                        onClick={closeModal} 
                        className="w-full bg-black text-white font-black uppercase py-5 tracking-widest hover:bg-neutral-800 transition-all"
                      >
                        Return to Catalogue
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesHome;