import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from "lucide-react";
import logo from "../images/image.png";

export default function Footer() {
  return (
    <footer className="bg-[#030712] text-slate-300 pt-16 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4 text-center md:text-left">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img src={logo} alt="logo" className="w-20 h-20 rounded-xl shadow-lg" />
          <h2 className="text-xl text-white font-semibold">Pragnya Controls & Automation</h2>
          {/* <p className="text-sm text-slate-400"></p> */}

          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            Industrial control solutions and automation systems for modern manufacturing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-sky-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-sky-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-sky-400">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-sky-400">Products</Link></li>
            <li><Link to="/contact" className="hover:text-sky-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-sky-400 cursor-pointer">Control Panels</li>
            <li className="hover:text-sky-400 cursor-pointer">Automation</li>
            <li className="hover:text-sky-400 cursor-pointer">Power Solutions</li>
            <li className="hover:text-sky-400 cursor-pointer">Custom Work</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={16} className="text-red-400" />
              <span>+91 97404 57074</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={16} className="text-red-400" />
              <span>pragnyacontrols2021@gmail.com</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} className="text-red-400" />
              <span>Bengaluru, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-slate-800 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto px-6">

          {/* Social Icons */}
          <div className="flex gap-6 text-slate-400">
            <Facebook className="cursor-pointer hover:text-white" size={20} />
            <Linkedin className="cursor-pointer hover:text-white" size={20} />
            <Instagram className="cursor-pointer hover:text-white" size={20} />
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-500 text-center">
            © {new Date().getFullYear()} Pragnya Controls & Automation. 
            All rights reserved.
          </p>

          {/* Privacy */}
          <button className="text-xs hover:text-sky-400">
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );
}
