import React from "react";

export default function WhatsAppButton({
  phone = "+919999999999",
  message = "Hello, I would like to know more about your products."
}) {
  const normalized = ("" + phone).replace(/[^0-9]/g, "");
  const url = `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 left-4 z-50 bg-[#25D366] hover:bg-[#20b85a] 
                 text-white rounded-full w-14 h-14 shadow-xl 
                 flex items-center justify-center 
                 transition-transform duration-200 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.87 11.87 0 0012 0C5.37 0 .01 5.37.01 12a11.9 11.9 0 001.95 6.53L0 24l5.6-1.46A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.19-3.48-8.52zM12 21.6c-1.45 0-2.87-.37-4.13-1.07l-.29-.17-3.33.86.89-3.25-.18-.33A9.6 9.6 0 012.4 12c0-5.32 4.32-9.6 9.6-9.6 2.56 0 4.96.99 6.77 2.8 1.81 1.81 2.8 4.21 2.8 6.77 0 5.28-4.28 9.6-9.6 9.6z" />
        <path d="M17.02 14.31c-.29-.15-1.7-.84-1.96-.93-.26-.09-.45-.14-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.34-1.45-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.5.07-.77.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.05 2.86 1.2 3.06.15.19 2.09 3.22 5.07 4.52 2.98 1.3 2.98.87 3.52.82.54-.05 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.32z" />
      </svg>
    </a>
  );
}
