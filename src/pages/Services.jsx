import { Link } from "react-router-dom";
import {
  Package,
  Zap,
  Cpu,
  Settings,
  CheckCircle,
  Wrench,
  CircuitBoard,
  Shield,
  Users,
  Target,
  RefreshCw,
  Power,
  Gauge,
  Divide,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Package className="w-8 h-8 text-red-600" />,
      title: "Control Panel Design & Manufacturing",
      description:
        "Custom-designed and manufactured control panels tailored to your industrial requirements. From concept to deployment, we handle every detail with precision and expertise.",
      features: [
        "Custom Design",
        "Quality Manufacturing",
        "Testing & Certification",
        "Installation Support",
        "Documentation",
        "Compliance Standards",
      ],
      benefits: [
        "Tailored solutions",
        "Industry compliance",
        "Quick deployment",
        "Comprehensive documentation",
      ],
    },
    {
      icon: <Zap className="w-8 h-8 text-red-600" />,
      title: "Automation Systems",
      description:
        "Advanced automation solutions that streamline your manufacturing processes, reduce manual intervention, and improve productivity with smart technology integration.",
      features: [
        "PLC Programming",
        "SCADA Systems",
        "Process Automation",
        "System Integration",
        "HMI Development",
        "Data Analytics",
      ],
      benefits: [
        "Increased efficiency",
        "Reduced errors",
        "Real-time monitoring",
        "Scalable solutions",
      ],
    },
    {
      icon: <Cpu className="w-8 h-8 text-red-600" />,
      title: "Power Factor Correction Solutions",
      description:
        "Optimize your power consumption and reduce electricity costs with our advanced power factor correction systems and energy management solutions.",
      features: [
        "Power Analysis",
        "Equipment Installation",
        "Monitoring & Reporting",
        "Energy Savings",
        "Load Management",
        "Cost Optimization",
      ],
      benefits: [
        "Lower electricity bills",
        "Improved efficiency",
        "Reduced carbon footprint",
        "Better equipment life",
      ],
    },
    {
      icon: <Settings className="w-8 h-8 text-red-600" />,
      title: "Maintenance & Support",
      description:
        "Comprehensive maintenance and technical support services to keep your systems running smoothly and efficiently with minimal downtime.",
      features: [
        "24/7 Support",
        "Preventive Maintenance",
        "Emergency Response",
        "Training Services",
        "Remote Monitoring",
        "Performance Optimization",
      ],
      benefits: [
        "Minimal downtime",
        "Expert support",
        "Proactive maintenance",
        "Extended equipment life",
      ],
    },
  ];

  const process = [
    {
      title: "Consultation",
      description:
        "We understand your requirements and business challenges through detailed analysis.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Design",
      description:
        "Custom solution design tailored to your specific operational needs and goals.",
      icon: <CircuitBoard className="w-6 h-6" />,
    },
    {
      title: "Development",
      description:
        "Build, test, and validate your solution with quality assurance protocols.",
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: "Deployment",
      description:
        "Professional installation and seamless system integration at your facility.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Support",
      description:
        "Ongoing maintenance, optimization, and technical support services.",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  const technologies = [
    { name: "PLC Panels", description: "SCADA/PLC Control Panels", icon: <Cpu className="w-6 h-6" /> },
    { name: "VFD Panels", description: "Variable Frequency Drive Panels", icon: <RefreshCw className="w-6 h-6" /> },
    { name: "MCC Panels", description: "Motor Control Center Panels", icon: <Zap className="w-6 h-6" /> },
    { name: "PCC Panels", description: "Power Control Center Panels", icon: <Power className="w-6 h-6" /> },
    { name: "APFC Panels", description: "Automatic Power Factor Correction", icon: <Gauge className="w-6 h-6" /> },
    { name: "Load Sharing", description: "Synchronizing Panels", icon: <Divide className="w-6 h-6" /> },
    { name: "Power Distribution", description: "Distribution Panels", icon: <Settings className="w-6 h-6" /> },
    { name: "Control Systems", description: "Industrial Control Systems", icon: <CircuitBoard className="w-6 h-6" /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">

      {/* ---------------- HERO ---------------- */}
      <section className="w-full bg-gradient-to-br from-blue-700 to-red-600 text-white text-center py-16 sm:py-18 lg:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-6 animate-on-scroll anim-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Our Services
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive industrial automation and control solutions designed to transform your manufacturing operations.
          </p>
        </div>
      </section>

      {/* ---------------- SERVICES LIST ---------------- */}
      <section className="w-full bg-gray-50 py-10 sm:py-18 lg:py-14 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-16">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 animate-on-scroll anim-up">
            Our Comprehensive Services
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:gap-10">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 animate-on-scroll anim-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex flex-col sm:flex-row gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-blue-100 rounded-2xl flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 mt-3">{service.description}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg mb-3 flex items-center gap-2">
                          <CheckCircle size={18} className="text-green-600" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((f, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                              <span className="text-gray-700">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg mb-3 flex items-center gap-2">
                          <Target size={18} className="text-blue-600" />
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((b, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                              <span className="text-gray-700">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="w-full py-1 sm:py-5 lg:py-10 bg-white px-6 sm:px-8 lg:px-2">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 animate-on-scroll anim-up">
            Our Proven Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-3xl border border-gray-200 p-6 text-center hover:scale-105 transition-transform duration-300 animate-on-scroll anim-up"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TECHNOLOGIES ---------------- */}
      <section className="w-full py-10 sm:py-28 lg:py-14 bg-gray-50 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-16">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 animate-on-scroll anim-up">
            Technologies We Master
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="bg-white p-6 border border-gray-200 rounded-2xl text-center hover:shadow-xl hover:scale-105 transition-all duration-300 animate-on-scroll anim-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="w-full bg-gradient-to-br from-blue-700 to-red-600 text-white text-center py-16 sm:py-18 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8 animate-on-scroll anim-up">
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
