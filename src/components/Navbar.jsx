import React from 'react';
import { Home, Briefcase, Github, Mail, Linkedin } from 'lucide-react';
import "../App.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999] pointer-events-auto">
      <nav className="bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-4 shadow-lg">
        <a
          href="/"
          aria-label="Home"
          className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-transform duration-300 group"
        >
          <Home className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </a>


        <a
          href="https://www.linkedin.com/in/sayyida-jahan-k/"
          aria-label="LinkedIn"
          className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-transform duration-300 group"
        >
          <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </a>

        <a
          href="https://github.com/sayy-da"
          aria-label="GitHub"
          className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-transform duration-300 group"
        >
          <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sayyujahan@gmail.com"
          aria-label="Email"
          className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-transform duration-300 group"
        >
          <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
