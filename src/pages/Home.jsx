import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Cog, Shield, TrendingUp } from "lucide-react";

// Client Logos
import cli1 from "../images/cli1.jpg";
import cli2 from "../images/cli2.jpg";
import cli3 from "../images/cli3.jpg";
import cli4 from "../images/cli4.jpg";
import cli5 from "../images/cli5.jpg";
import cli6 from "../images/cli6.jpg";
import cli7 from "../images/cli7.jpg";
import cli8 from "../images/cli8.jpg";
import cli9 from "../images/cli9.jpg";
import cli10 from "../images/cli10.jpg";
import cli11 from "../images/cli11.jpg";
import cli12 from "../images/cli12.jpg";
import cli13 from "../images/cli13.jpg";
import cli14 from "../images/cli14.jpg";
import cli15 from "../images/cli15.jpg";

export default function Home() {

  const features = [
    {
      icon: <Zap className="w-12 h-12 text-red-500" />,
      title: "Smart Automation",
      description: "Advanced automation systems for modern manufacturing operations"
    },
    {
      icon: <Cog className="w-12 h-12 text-blue-600" />,
      title: "Custom Solutions",
      description: "Tailored control panels and systems for your specific needs"
    },
    {
      icon: <Shield className="w-12 h-12 text-red-600" />,
      title: "Reliable & Safe",
      description: "Industry-standard safety and reliability in every solution"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      title: "Performance",
      description: "Optimize operations and increase efficiency with our systems"
    }
  ];

  const clients = [
    cli1, cli2, cli3, cli4, cli5, cli6, cli7,
    cli8, cli9, cli10, cli11, cli12, cli13, cli14, cli15
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-br from-blue-700 to-red-600 text-white text-center py-16 sm:py-18 lg:py-20 px-4 sm:px-6">
        <div className="relative z-10 max-w-4xl mx-auto mb-25 animate-on-scroll anim-down">
          <h1 className="text-5xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 animate-on-scroll anim-up">
            Industrial Control Solutions for Modern Manufacturing
          </h1>

          <p className="text-lg sm:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto animate-on-scroll anim-up">
            Pragnya Controls & Automation delivers cutting-edge control panels, automation systems, and power solutions for industrial excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll anim-up">
            <Link
              to="/services"
              className="w-full sm:w-auto border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition transform hover:scale-105 flex items-center gap-2"
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition transform hover:scale-105 flex items-center gap-2"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100 w-full text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-14 animate-on-scroll anim-up">
          We combine innovation, reliability & expertise to deliver solutions that drive your business forward.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-2xl border border-gray-200 shadow hover:shadow-2xl transition transform hover:scale-105 animate-on-scroll anim-up"
            >
              <div className="mb-6 flex justify-center">{f.icon}</div>
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">{f.title}</h3>
              <p className="text-gray-600 text-lg">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR CLIENTS SECTION */}
     {/* OUR CLIENTS SECTION */}
<section className="py-20 bg-white w-full text-center">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-14 animate-on-scroll anim-up">
    Our Clients
  </h2>

  <p className="text-black text-lg max-w-3xl mx-auto mb-12 animate-on-scroll anim-up">
    We are trusted by leading industries and organizations across India.  
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto px-6">

    {clients.map((logo, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-xl p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 animate-on-scroll anim-up"
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        <img
          src={logo}
          alt={`Client ${index + 1}`}
          className="w-28 h-20 object-contain transition duration-300 hover:scale-105"
        />
      </div>
    ))}

  </div>
</section>


      {/* CTA SECTION */}
      <section className="w-full bg-gradient-to-br from-blue-700 to-red-600 text-white text-center py-16 sm:py-18 lg:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5 animate-on-scroll anim-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight animate-on-scroll anim-down">
            Ready to Elevate Your Operations?
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed animate-on-scroll anim-up">
            Let's discuss how our solutions can transform your manufacturing process.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-4 bg-white text-gray-900 py-3 sm:py-3.5 px-8 sm:px-10 rounded-full text-sm sm:text-base lg:text-lg font-bold hover:scale-110 transition-transform animate-on-scroll anim-up"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
