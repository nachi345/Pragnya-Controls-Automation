// src/pages/Gallery.jsx
import { Link } from 'react-router-dom';
import { ArrowRight, ZoomIn, Factory, Cpu, Zap, Settings, Power, RefreshCw, Divide } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Import images
import LoadSharingImg from '../images/LoadSharing.jpg'
import MCCPanelImg from '../images/MCCPanel.jpg'
import PDBImg from '../images/PDB.jpeg'
import PLCPanelImg from '../images/PLCPanel.jpeg'
import PLCImg from '../images/PLC.jpeg'
import PowerDistributionImg from '../images/PowerDistribution.jpeg'
import VFDPanelImg from '../images/VFDPanel.png'

export default function Gallery() {

  // -------------------- Carousel State --------------------
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slides = [
    LoadSharingImg, MCCPanelImg, PDBImg,
    PLCPanelImg, PLCImg, PowerDistributionImg, VFDPanelImg
  ];
  const timerRef = useRef(null);

  // -------------------- Autoplay Logic --------------------
  useEffect(() => {
    if (!isPlaying) {
      clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  // Manual controls
  function goTo(index) {
    setCurrent((index + slides.length) % slides.length);
  }

  function nextSlide() {
    goTo(current + 1);
  }

  function prevSlide() {
    goTo(current - 1);
  }

  function togglePlay() {
    setIsPlaying(prev => !prev);
  }

  // -------------------- Gallery Items --------------------
  const galleryItems = [
    {
      id: 1,
      image: LoadSharingImg,
      title: "Load Sharing & Synchronizing Panel",
      description: "Advanced synchronization systems for multiple power sources ensuring seamless operation and proportional load distribution.",
      category: "Power Management",
      features: [
        "Synchronizer modules for phase matching",
        "Load sharing controllers",
        "Protection interlocks and safety systems",
        "Automatic changeover switches"
      ],
      specifications: {
        "Synchronization Accuracy": "±10° phase angle",
        "Frequency Range": "50/60Hz operation",
        "Generator Support": "Up to 8 generators",
        "Communication": "RS485, Ethernet, Modbus"
      }
    },
    {
      id: 2,
      image: MCCPanelImg,
      title: "MCC Panel (Motor Control Center)",
      description: "Centralized control systems for efficient organization and management of multiple motors in industrial environments.",
      category: "Motor Control",
      features: [
        "Common bus-bar system",
        "Individual motor starter modules",
        "Comprehensive protection devices",
        "Safety-compartment segregation"
      ],
      specifications: {
        "Standards": "IEC 61439, IS 8623",
        "Protection Rating": "IP42 to IP55",
        "Current Rating": "Up to 1000A",
        "Busbar Material": "Electro-tin plated copper"
      }
    },
    {
      id: 3,
      image: PDBImg,
      title: "Power Distribution Board",
      description: "Efficient power distribution systems for safe and reliable electrical power management in industrial settings.",
      category: "Power Distribution",
      features: [
        "Main incoming circuit breakers",
        "Multiple outgoing feeders",
        "Advanced protection devices",
        "Load balancing capabilities"
      ],
      specifications: {
        "Voltage": "240V - 415V AC",
        "Phases": "Single/Three phase",
        "Protection": "MCB, MCCB, RCCB",
        "Enclosure": "IP42 to IP65 rated"
      }
    },
    {
      id: 4,
      image: PLCPanelImg,
      title: "PLC Control Panel",
      description: "Advanced automation panels with Programmable Logic Controllers for precise industrial process control.",
      category: "Automation",
      features: [
        "PLC modules with I/O systems",
        "HMI display interfaces",
        "Multiple communication networks",
        "Real-time monitoring"
      ],
      specifications: {
        "Input Voltage": "240V - 480V AC",
        "Protection Rating": "IP54 / IP65",
        "Communication": "Ethernet, Profibus, Modbus",
        "Controller": "Siemens/Allen Bradley"
      }
    },
    {
      id: 5,
      image: PLCImg,
      title: "PLC Systems",
      description: "Professional PLC programming and integration for industrial automation and control applications.",
      category: "Control Systems",
      features: [
        "Advanced programming capabilities",
        "Real-time data processing",
        "Multiple I/O configurations",
        "Network integration"
      ],
      specifications: {
        "Processor": "32-bit RISC",
        "Memory": "Up to 4MB",
        "I/O Capacity": "Up to 8192 points",
        "Programming": "Ladder Logic, STL, FBD"
      }
    },
    {
      id: 6,
      image: PowerDistributionImg,
      title: "Power Distribution System",
      description: "Comprehensive power distribution solutions for industrial plants and commercial facilities.",
      category: "Power Systems",
      features: [
        "Main distribution panels",
        "Sub-distribution boards",
        "Power monitoring systems",
        "Safety protection devices"
      ],
      specifications: {
        "Voltage Level": "415V - 11kV",
        "Capacity": "Up to 4000A",
        "Standards": "IEC 61439-2",
        "Protection": "Differential, Overcurrent"
      }
    },
    {
      id: 7,
      image: VFDPanelImg,
      title: "VFD Panel (Variable Frequency Drive)",
      description: "Precision motor control panels that optimize energy consumption and provide superior speed control.",
      category: "Motor Drives",
      features: [
        "VFD units for motor control",
        "Input harmonic filters",
        "Bypass contactors",
        "Advanced diagnostics"
      ],
      specifications: {
        "Voltage Range": "380V - 690V AC",
        "Power Range": "0.75kW - 500kW",
        "Control Methods": "V/F, Sensorless Vector",
        "Efficiency": "97-98%"
      }
    }
  ];

  // -------------------- UI --------------------
  return (

    <div className="min-h-screen bg-white content-shift-right animate-on-scroll anim-up">

      {/* HERO */}
      <section className="w-full bg-gradient-to-br from-blue-700 to-red-600 text-white text-center py-16 sm:py-18 lg:py-20 px-4 sm:px-6 animate-on-scroll anim-down">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10 space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Our Products
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
            Discover high-quality automation and control products built to enhance performance, safety, and efficiency across modern industrial systems.
          </p>
        </div>
      </section>

      {/* GALLERY STRUCTURE */}
      <section className="w-full bg-white text-white text-center py-16 sm:py-18 lg:py-20 px-4 sm:px-6 animate-on-scroll anim-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* -------- LEFT : CAROUSEL -------- */}
          <div className="w-full animate-on-scroll anim-left">
            <div className="relative rounded-lg overflow-hidden">

              <img
                src={slides[current]}
                alt={`slide-${current}`}
                className="w-full h-[520px] object-cover rounded-lg shadow-lg"
              />

              {/* Control Bar */}
              <div className="absolute bottom-0 left-0 w-full bg-white/90 py-3 flex items-center justify-center gap-8 text-3xl">
                <button onClick={prevSlide} className="text-gray-700 hover:text-black">‹</button>
                <button onClick={togglePlay} className="text-gray-700 hover:text-black">
                  {isPlaying ? '⏸' : '▶'}
                </button>
                <button onClick={nextSlide} className="text-gray-700 hover:text-black">›</button>
              </div>

              {/* Dots */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2 h-2 rounded-full ${i === current ? 'bg-gray-900' : 'bg-gray-400'}`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* -------- RIGHT : DETAILS -------- */}
          <div className="w-full animate-on-scroll anim-right">
            {(() => {
              const item = galleryItems[current];
              return (
                <>
                  <div className="text-xl font-semibold text-blue-300 uppercase mb-3">
                    {item.category}
                  </div>

                  <h2 className="text-3xl font-bold mb-4">{item.title}</h2>

                  {/* Overview */}
                  <div className="mb-6 bg-white rounded-lg shadow-sm p-6 text-black">
                    <h4 className="font-semibold mb-2">Overview</h4>
                    <p className="leading-relaxed">{item.description}</p>
                  </div>

                  {/* Features + Specs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="bg-white rounded-lg shadow-sm p-6 text-black">
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {item.features.map((f, idx) => <li key={idx}>{f}</li>)}
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6 text-black">
                      <h4 className="font-semibold mb-3">Technical Specifications</h4>
                      <div className="space-y-2">
                        {Object.entries(item.specifications).map(([k, v]) => (
                          <div key={k} className="flex justify-between border-b py-2">
                            <span className="text-gray-600">{k}</span>
                            <span className="font-semibold">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </>
              );
            })()}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-gradient-to-br from-blue-700 to-red-600 text-white text-center py-16 sm:py-18 lg:py-20 px-4 sm:px-6 animate-on-scroll anim-up">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Transform Your Operations?
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto">
            Get a free consultation and discover how we can help optimize your manufacturing
            processes with cutting-edge automation solutions.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-gray-900 px-10 sm:px-14 py-4 sm:py-5 rounded-3xl font-bold text-lg sm:text-xl hover:scale-110 transition-transform duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
