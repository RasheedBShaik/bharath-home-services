"use client";
import React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const info = [
    { icon: <MapPin size={20} />, label: "Office", text: "Savitri Nagar, Nellore, AP" },
    { icon: <Mail size={20} />, label: "Email", text: "bharathomeservices9@gmail.com" },
    { icon: <Phone size={20} />, label: "Call", text: "+91 89858 33307" },
    { icon: <Clock size={20} />, label: "Hours", text: "8:00 AM - 8:00 PM" },
  ];

  return (
    <section className="py-24 bg-white text-black px-6">
      <div className="max-w-7xl py-6 mx-auto flex flex-col gap-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-center text-black">Contact Us</h2>
        
        {/* 1. TOP CARDS: Quick Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {info.map((item, i) => (
            <div key={i} className="p-6 border border-gray-100 bg-gray-50/50 rounded-xl flex flex-col items-center text-center group hover:border-green-400 transition-colors">
              <div className="text-green-500 mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-1">{item.label}</span>
              <p className="text-sm font-semibold">{item.text}</p>
            </div>
          ))}
        </div>

        {/* 2. MIDDLE: Contact Form */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-black">Get In Touch</h2>
            <p className="text-gray-500 mt-2">Send us a message and we'll reply within 24 hours.</p>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="p-4 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-green-400 outline-none" />
            <input type="email" placeholder="Email" className="p-4 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-green-400 outline-none" />
            
            {/* Replaced duplicate Email with Phone Number */}
            <input type="tel" placeholder="Phone Number" className="md:col-span-2 p-4 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-green-400 outline-none" />
            
            <textarea placeholder="How can we help?" className="md:col-span-2 p-4 bg-gray-50 border-none rounded-lg h-32 focus:ring-2 focus:ring-green-400 outline-none resize-none"></textarea>
            
            <button className="md:col-span-2 py-4 bg-black text-white font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 hover:bg-green-500 hover:text-black transition-all">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>

        {/* 3. BOTTOM: Full-Width Map */}
        <div className="w-full h-112.5 rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.964724497334!2d79.9723381!3d14.4579979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cc3894200c5%3A0xc47e3352723c3182!2sSavitri%20Nagar%2C%20Nellore%2C%20Andhra%20Pradesh%20524004!5e0!3m2!1sen!2sin!4v1712411234567"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
          
          {/* Overlay Floating Tag */}
          <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3">
             <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <MapPin size={20} />
             </div>
             <div>
                <p className="text-xs font-bold uppercase tracking-tighter text-black">Bharath Home Services</p>
                <p className="text-[10px] text-gray-500 leading-none">Savitri Nagar, Nellore</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;