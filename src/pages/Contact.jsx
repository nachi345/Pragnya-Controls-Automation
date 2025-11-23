import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company:* ${formData.company}
*Message:* ${formData.message}

*You have a fresh enquiry from the website.*
    `.trim();

    try {
      await navigator.clipboard.writeText(whatsappMessage);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const url = `https://wa.me/919740457074?text=${encodedMessage}`;
    window.open(url, "_blank");

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });

    setLoading(false);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-10 h-10" />,
      label: "Phone",
      value: "+91 97404 57074",
      link: "tel:+919740457074",
    },
    {
      icon: <Mail className="w-10 h-10" />,
      label: "Email",
      value: "pragnyacontrols2021@gmail.com",
      link: "mailto:pragnyacontrols2021@gmail.com",
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      label: "Location",
      value: "Bengaluru, India",
      link: "https://maps.app.goo.gl/CCZDne3zFadhjf9b6?g_st=aw",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      label: "Working Hours",
      value: "Mon–Sat 9AM–6PM IST",
      link: "/contact",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">

      {/* HERO */}
      <section className="w-full bg-gradient-to-br from-blue-700 to-red-600 text-white text-center py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6 animate-on-scroll anim-down">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-100 animate-on-scroll anim-up">
            Have a question or need help with automation? Our team is ready to assist.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="w-full py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto space-y-12">
       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black animate-on-scroll anim-up">
  Get in Touch With Us
</h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll anim-up">
  {contactInfo.map((item, i) => (
    <a
      key={i}
      href={item.link}
      className="bg-white rounded-3xl p-8 border shadow hover:shadow-xl transition-all flex flex-col items-center text-center"
    >
      <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-blue-100 rounded-3xl flex items-center justify-center mb-4">
        <span className="text-red-600">{item.icon}</span>
      </div>

      {/* Updated text color */}
      <h3 className="text-2xl font-semibold text-black">{item.label}</h3>
      <p className="mt-2 text-black">{item.value}</p>
    </a>
  ))}
</div>

        </div>
      </section>
       {/* CONTACT FORM */}
      <section className="w-full bg-slate-950 text-white px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div className="space-y-6 animate-on-scroll anim-left">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Let's discuss your automation needs.
            </h2>
            <p className="text-slate-300 text-lg">
              Fill out the form and we will get back to you shortly.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-xl animate-on-scroll anim-right">
            <form onSubmit={handleSubmit} className="space-y-6">

              {["name", "email", "company", "phone"].map((field, i) => (
                <div key={i} className="space-y-2">
                  <label className="block text-sm font-semibold capitalize">{field}</label>
                  <input
                    type="text"
                    name={field}
                    required={field !== "company"}
                    placeholder={`Your ${field}`}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full bg-slate-900 text-white border border-slate-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
              ))}

              <div className="space-y-2">
                <label className="block text-sm font-semibold">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirement"
                  className="w-full bg-slate-900 text-white border border-slate-700 px-4 py-3 rounded-xl resize-none focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-full font-semibold ${
                  loading ? "opacity-70" : ""
                }`}
              >
                {loading ? "Preparing WhatsApp…" : "Submit Enquiry"}
                {!loading && <ArrowRight size={18} />}
              </button>

              {submitted && (
                <p className="text-green-600 text-sm bg-green-100 px-4 py-2 rounded text-center">
                  WhatsApp opened successfully!
                </p>
              )}

            </form>
          </div>
        </div>
      </section>


      {/* MAP + DETAILS */}
      <section className="w-full px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="w-full bg-white rounded-3xl border shadow-lg overflow-hidden animate-on-scroll anim-left">
            <div className="h-80 sm:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.020713988838!2d77.56652617469924!3d12.90273598739321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151c80bedc11%3A0xda953bce7a2da52b!2sPragnya%20Controls%20%26%20Automation!5e0!3m2!1sen!2sin!4v1731405912345"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <MapPin className="text-red-600" /> Our Office Location
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Visit us for a face-to-face discussion regarding your automation needs.
              </p>
              <a
                href="https://maps.app.goo.gl/CCZDne3zFadhjf9b6?g_st=aw"
                target="_blank"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>

        </div>
      </section>

     
      {/* FINAL CTA */}
      <section className="w-full bg-gradient-to-br from-blue-700 to-red-600 text-white text-center py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6 animate-on-scroll anim-up">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Start Your Automation Journey?
          </h2>
          <p className="text-lg text-gray-100">
            Contact us now for expert guidance.
          </p>
          <a
            href="https://wa.me/919740457074"
            target="_blank"
            className="inline-block bg-white text-gray-900 px-12 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
