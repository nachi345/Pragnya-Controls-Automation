import React from "react";
import { Lightbulb, Award, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const timeline = [
    {
      year: "2016",
      text: "Pragnya Controls & Automation founded with a focus on industrial control panels.",
    },
    {
      year: "2018",
      text: "Delivered turnkey automation solutions for multiple manufacturing plants across Karnataka.",
    },
    {
      year: "2020",
      text: "Expanded into PLC / HMI / SCADA programming and IIoT integration.",
    },
    {
      year: "2024",
      text: "Successfully completed 300+ projects with 150+ clients across various industries.",
    },
  ];

  const values = [
    {
      title: "Innovation",
      icon: <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />,
      text: "Delivering modern automation solutions with forward-thinking engineering.",
    },
    {
      title: "Quality",
      icon: <Award className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />,
      text: "Building reliable, safe and industry-standard control systems.",
    },
    {
      title: "Reliability",
      icon: <Target className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />,
      text: "Ensuring consistent performance and long-term dependability for clients.",
    },
    {
      title: "Partnership",
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />,
      text: "Growing together with customers through trusted collaboration.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white text-slate-900">

      {/* ---------------------------- HERO SECTION ---------------------------- */}
      <section className="w-full bg-gradient-to-br from-blue-700 to-red-600 text-white text-center py-16 sm:py-20 lg:py-20 px-4 sm:px-6 animate-on-scroll anim-down">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-on-scroll anim-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl  font-bold leading-tight animate-on-scroll anim-up">
            About Pragnya Controls & Automation
          </h1>
          <p className="text-xl sm:text-base lg:text-xl text-white leading-relaxed animate-on-scroll anim-up">
            Engineering reliable automation and control solutions that power modern manufacturing.
          </p>
        </div>
      </section>

      {/* ---------------------------- JOURNEY + STATS ---------------------------- */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid gap-10 lg:gap-14 lg:grid-cols-2 items-start">

          {/* Text */}
          <div className="space-y-5 sm:space-y-6 animate-on-scroll anim-left">
            <h2 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-slate-900">
              Our Journey of Innovation
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
              Pragnya Controls & Automation was founded in 2016 with a mission to provide world-class
              industrial control solutions that transform manufacturing operations.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
              Over the past 8 years, we have become a trusted partner for manufacturers across India,
              delivering automation solutions that improve efficiency and ensure the highest safety standards.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 animate-on-scroll anim-right">
            {[
              { num: "300+", label: "Projects Delivered" },
              { num: "150+", label: "Happy Clients" },
              { num: "8+", label: "Years Experience" },
              { num: "98%", label: "Client Satisfaction" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 text-center text-white shadow-xl bg-gradient-to-br from-red-500 to-blue-600 flex flex-col justify-center animate-on-scroll anim-up"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">{item.num}</div>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- VALUES SECTION ---------------------------- */}
      <section className="w-full bg-gray-50 py-10 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-16 animate-on-scroll anim-up">
        <div className="max-w-6xl mx-auto text-center space-y-10 sm:space-y-12">
          <h2 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-slate-900 animate-on-scroll anim-down">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl shadow hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center h-full animate-on-scroll anim-up"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-5 bg-red-50 rounded-2xl flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- TIMELINE SECTION ---------------------------- */}
      <section className="w-full bg-white py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-16 animate-on-scroll anim-up">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center text-slate-900 animate-on-scroll anim-down">
            Our Growth Journey
          </h2>

          <ol className="relative border-l border-slate-300 pl-5 sm:pl-6 space-y-6 sm:space-y-8">
            {timeline.map((item, index) => (
              <li key={index} className="relative pl-3 sm:pl-4 animate-on-scroll anim-left">
                <span className="absolute -left-2 top-1 block w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full"></span>
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-red-600">
                  {item.year}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------- CTA SECTION ---------------------------- */}
      <section className="w-full bg-gradient-to-br from-blue-700 to-red-600 text-white text-center py-16 sm:py-18 lg:py-20 px-4 sm:px-6 animate-on-scroll anim-up">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight animate-on-scroll anim-down">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed animate-on-scroll anim-up">
            Let’s work together to build powerful, modern, and reliable automation systems.
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
