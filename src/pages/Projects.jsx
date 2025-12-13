import React from 'react';
import { Globe, Github, Home, Linkedin, Mail,Briefcase } from 'lucide-react';
// import Navbar from '../components/Navbar';
import '../App.css'

export default function Projects() {
  const projects = [
    {
      title: "Car wash app ",
      date: "june 2025 - july 2025 ",
      description: "Perfume shop is an advanced E-commerce web application that includes all the features necessary for a successful E-commerce store.",
      tags: [ "cron-job","EJS", "Javascript", "MongoDb", "Mongoose", "Css", "Node.js", "Express.js", "whatsapp-web.js"],
      links: {
        website: "#",
        source: "https://github.com/sayy-da/car-wash"
      }
    },
    {
      title: "labelle perfume E-commerce",
      date: "September 2024 - November 2024",
      description: "Perfume shop is an advanced E-commerce web application that includes all the features necessary for a successful E-commerce store.",
      tags: ["Ejs", "Javascript", "MongoDb", "Mongoose", "Css", "RazorPay", "Node.js", "Express.js"],
      links: {
        website: "#",
        source: "https://github.com/sayy-da/labelle"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col">
        {/* Header */}
        <div className="text-center mb-12">
          <button className="mb-6 px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            My Projects
          </button>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Check out my latest work
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all bg-gradient-to-b from-gray-900/50 to-transparent"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.date}</p>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a 
                  href={project.links.website}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  <Globe size={16} />
                  Website
                </a>
                <a 
                  href={project.links.source}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-sm font-medium hover:border-gray-600 transition-colors"
                >
                  <Github size={16} />
                  Source
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}