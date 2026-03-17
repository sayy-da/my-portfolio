import React from 'react';
import { Home, BookOpen, Github, Linkedin, Mail, Moon } from 'lucide-react';
import Navbar from '../components/Navbar';
import brototype from '../assets/brototype-logo.jpg'
import '../App.css'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white p-8 overflow-hidden flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* About Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About</h1>
          <p className="text-gray-300 leading-relaxed">
          After higher secondary education, I chose a non-traditional path by pursuing self-learning instead of a formal degree. I dedicated myself to mastering full-stack development, with a strong focus on the MERN stack.

Through hands-on projects, I built real-world applications from the ground up, gaining practical experience in both frontend and backend development. This journey involved continuous learning, problem-solving, and applying concepts in real scenarios.

While I may not hold a formal degree, I have developed a solid skill set and a portfolio of projects that demonstrate my capabilities. I believe passion, consistency, and practical experience are key to building a successful career in technology.
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          
         <div className="flex items-start gap-4 mb-6">
  <img
    src={brototype}
    alt="Brototype"
    className="w-16 h-16 object-contain rounded-full flex-shrink-0"
  />

  <div className="flex-1 flex justify-between items-start">
    <div>
      <h3 className="text-xl font-bold">Brototype</h3>
      <p className="text-gray-400">Full stack development bootcamp</p>
    </div>
    <p className="text-gray-400">2024 - 2026</p>
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