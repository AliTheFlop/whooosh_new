"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "The Oracle",
    type: "Accounting Firm",
    description: "A modern, sophisticated website that transformed this accounting firm's online presence, leading to a 70% increase in high-value client inquiries.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion", "Supabase"],
    link: "theoracle.whooosh.net",
  },
  {
    title: "Atlas Law",
    type: "Law Firm",
    description: "Premium website redesign for an established law firm, featuring client portals and custom scheduling tools that increased client satisfaction by 85%.",
    image: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    link: "atlaslaw.whooosh.net",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#13131a]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We've Created Before</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            See how we've helped businesses like yours position themselves as a modern alternative to their competitors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden group"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative h-[500px] w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.div
                  animate={{ y: hovered === index ? -10 : 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-3">
                    <span className="text-sm font-medium text-indigo-400">{project.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/80 mb-5 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}