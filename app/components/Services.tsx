"use client";
import React, { useState } from "react";
import { ALL_SERVICES } from "@/data/services";
import { X, ChevronRight, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ServicesHome = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section className="bg-white py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-green-600 mb-6"
            >
              <div className="w-12 h-0.5 bg-green-600" />
              <span className="font-black uppercase tracking-[0.4em] text-[10px]">
                Our Expertise
              </span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-slate-900">
              Elite <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #0f172a" }}>Solutions.</span>
            </h2>
          </div>

          <p className="text-slate-500 font-medium max-w-xs leading-relaxed border-l-2 border-slate-100 pl-6 hidden md:block">
            Professional-grade craftsmanship delivered to every corner of your residence in Andhra Pradesh.
          </p>
        </div>

        {/* --- High-End List Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
          {ALL_SERVICES.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer flex items-center justify-between py-8 border-b border-slate-100 hover:border-green-500 transition-all duration-500"
            >
              <div className="flex items-center gap-8">
                <span className="text-slate-300 font-black text-xl group-hover:text-green-500 transition-colors">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
                    Certified Expert Handling
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-green-600 group-hover:rotate-45 transition-all duration-500">
                <ChevronRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/services"
            className="group relative flex items-center gap-4 px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] active:scale-95"
          >
            <span className="relative z-10">View All Services</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-green-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      </div>

      {/* --- Refined Agency Modal --- */}
      <AnimatePresence>
        {selectedService && (
          <Modal
            service={selectedService}
            close={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const Modal = ({ service, close }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-6"
  >
    <motion.div
      initial={{ y: 50, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 20, opacity: 0, scale: 0.98 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden relative flex flex-col md:flex-row"
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2 h-64 md:h-auto relative">
        <img
          src={service.image}
          className="w-full h-full object-cover"
          alt={service.title}
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
        <button
          onClick={close}
          className="absolute top-8 right-8 w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-2 text-green-600 mb-6">
          <ShieldCheck size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">Premium Service</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-6 leading-none">
          {service.title}
        </h2>
        
        <p className="text-slate-500 leading-relaxed mb-10 text-lg">
          {service.desc}
        </p>

        <div className="grid grid-cols-1 gap-4">
          <button className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-green-600 transition-all shadow-xl hover:shadow-green-100">
            Secure Appointment
          </button>
          <button
            onClick={close}
            className="w-full text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] py-2 hover:text-slate-900 transition-colors"
          >
            Return to list
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default ServicesHome;