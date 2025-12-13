import React from 'react';
import { Home, BookOpen, Github, Linkedin, Mail, Moon } from 'lucide-react';
import Navbar from '../components/Navbar';
import '../App.css'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white p-8 overflow-hidden flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* About Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About</h1>
          <p className="text-gray-300 leading-relaxed">
            After high school, I decided to take the road less traveled. Instead of diving into a traditional
            degree, I rolled up my sleeves and taught myself the ins and outs of full-stack development. I
            fell in love with the MERN stack and honed my skills by building my own projects from the
            ground up. It's been a journey of late-night coding sessions, countless 'aha!' moments, and
            the thrill of seeing my ideas come to life on screen. While I may not have a fancy diploma, I've
            got a portfolio of real-world projects that showcase what I can do. I'm proof that with passion
            and determination, you can carve your own path in the tech world.
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-black font-bold text-xs">BROTOTYPE</span>
            </div>
            <div className="flex-1 flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">Brototype</h3>
                <p className="text-gray-400">Full stack development bootcamp</p>
              </div>
              <p className="text-gray-400">2024 - 2025</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-8 h-8" />
            </div>
            <div className="flex-1 flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">CHMHSS</h3>
                <p className="text-gray-400">Commerce with Computer Application</p>
              </div>
              <p className="text-gray-400">2022 - 2024</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium">Javascript</span>
            <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium">DSA</span>
            <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium">React</span>
            <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium">Typescript</span>
            <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium">Node.js</span>
            <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium">MongoDB</span>
            <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium">Postgres</span>
            <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium">C++</span>
            <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium">Express.js</span>
            <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium">Tailwind</span>
          </div>
        </section>
      <Navbar/>
      </div>
    </div>
  );
}