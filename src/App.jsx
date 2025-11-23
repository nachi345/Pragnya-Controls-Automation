import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import ScrollAnimations from "./ScrollAnimations";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />  
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-50">
        <Header />

        {/* Main Content */}
        <main className="flex-1">

          {/* Global Scroll Animations — required for all pages */}
          <ScrollAnimations />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* WhatsApp Button */}
        <WhatsAppButton
          phone="+919740457074"
          message="Hello, I would like to know more about your automation solutions."
        />

        <Footer />
      </div>
    </BrowserRouter>
  );
}
