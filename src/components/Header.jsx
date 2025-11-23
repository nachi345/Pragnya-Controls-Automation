import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../images/image.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-slate-900/95 text-white sticky top-0 z-40 backdrop-blur border-b border-slate-800">
      <div className="w-full max-w-[1500px] mx-auto px-6 flex items-center justify-between py-4">

        {/* LEFT SIDE — LOGO + TEXT */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Pragnya Controls Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-xl shadow-lg"
          />
          <span className="font-semibold tracking-tight text-3xl sm:text-3xl">
            Pragnya Controls & Automation
          </span>
        </Link>

        {/* RIGHT SIDE — NAV LINKS */}
        <nav className="hidden md:flex items-center gap-10 text-base text-2xl ml-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-white ${
                  isActive ? "text-white font-bold" : "text-slate-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-600 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <nav className="px-6 py-4 flex flex-col gap-3 text-base">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 transition ${
                    isActive
                      ? "bg-slate-800 text-white font-semibold"
                      : "text-slate-300 hover:bg-slate-800/70"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
