"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-b-[#33353F] border-r-transparent text-white flex ">
      <div className="container mx-auto p-12 w-full flex justify-between ">
        <span>Pedro M.</span>
        <p className="text-slate-600 ">All right reserved.</p>
      </div>
      <div className="opacity-60 hover:opacity-100 hover:transition-colors">
        <FloatingWhatsApp
          phoneNumber="+51 934629301"
          className="text-black"
          accountName="Pedro Molina"
          avatar="/images/Avatar.png"
          chatMessage="¡Hola! 🤝 ¿En que lo puedo ayudar?"
        />
      </div>
    </footer>
  );
};

export default Footer;
