"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const info = [
    { icon: <MapPin size={20} />, label: "Office", text: " Nellore, AP" },
    { icon: <Mail size={20} />, label: "Email", text: "test@gmail.com" },
    { icon: <Phone size={20} />, label: "Call", text: "+91 1234567890" },
    { icon: <Clock size={20} />, label: "Hours", text: "8:00 AM - 8:00 PM" },
  ];

  // Animation Variants
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="py-32 bg-white text-black px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* --- HEADER --- */}
        <div className="text-left border-b border-neutral-100 pb-12">
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85]"
            >
              Get In <span className="text-green-600">Touch</span>
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-neutral-500 font-bold uppercase tracking-widest text-xs"
          >
            Available for projects across Andhra Pradesh. Reply within 24 hours.
          </motion.p>
        </div>

        {/* --- TOP CARDS: Quick Info --- */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {info.map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVars}
              className="p-8 border border-neutral-100 bg-neutral-50/50 rounded-2xl flex flex-col items-start group hover:bg-neutral-900 transition-all duration-500"
            >
              <div className="text-green-600 mb-6 group-hover:scale-110 group-hover:text-green-400 transition-all">
                {item.icon}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400 mb-2 group-hover:text-neutral-500">
                {item.label}
              </span>
              <p className="text-sm font-bold group-hover:text-white transition-colors">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- CONTACT FORM --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Let's build <br/> something <span className="text-green-600">Great.</span></h2>
            <p className="text-neutral-500 leading-relaxed max-w-md">
              Whether it's a luxury residential project or a large-scale commercial development, our team is ready to bring your vision to life.
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input type="text" placeholder="Your Name" className="p-5 bg-neutral-50 border border-neutral-100 rounded-xl focus:ring-1 focus:ring-green-500 outline-none transition-all placeholder:text-neutral-400 placeholder:uppercase placeholder:text-[10px] placeholder:font-bold placeholder:tracking-widest" />
            <input type="email" placeholder="Email Address" className="p-5 bg-neutral-50 border border-neutral-100 rounded-xl focus:ring-1 focus:ring-green-500 outline-none transition-all placeholder:text-neutral-400 placeholder:uppercase placeholder:text-[10px] placeholder:font-bold placeholder:tracking-widest" />
            <input type="tel" placeholder="Phone Number" className="md:col-span-2 p-5 bg-neutral-50 border border-neutral-100 rounded-xl focus:ring-1 focus:ring-green-500 outline-none transition-all placeholder:text-neutral-400 placeholder:uppercase placeholder:text-[10px] placeholder:font-bold placeholder:tracking-widest" />
            <textarea placeholder="Tell us about your project" className="md:col-span-2 p-5 bg-neutral-50 border border-neutral-100 rounded-xl h-40 focus:ring-1 focus:ring-green-500 outline-none resize-none transition-all placeholder:text-neutral-400 placeholder:uppercase placeholder:text-[10px] placeholder:font-bold placeholder:tracking-widest"></textarea>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="md:col-span-2 py-5 bg-neutral-900 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-xl flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-xl"
            >
              <Send size={14} /> Send Inquiry
            </motion.button>
          </motion.form>
        </div>

        {/* --- MAP --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-125 rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-100 relative group"
        >
          <iframe
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.55048256346!2d79.9824!3d14.4447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI2JzQxLjAiTiA3OcKwNTgnNTYuNiJF!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
            src="https://www.google.com/maps?q=Nellore,+Andhra+Pradesh,+India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            className="transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
          ></iframe>
          
          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-white">
             <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <MapPin size={24} />
             </div>
             <div>
                <p className="text-sm font-black uppercase tracking-tighter text-black">Bharathi Home Services</p>
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Nellore</p>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;