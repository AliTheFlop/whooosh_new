"use client";

import { motion } from 'framer-motion';
import { 
  Target, 
  BarChart, 
  Award, 
  Cloud, 
  Zap, 
  Lock
} from 'lucide-react';

const benefits = [
  {
    title: "Quality Lead Generator",
    description: "Transform your website into a powerful lead generation engine that consistently attracts your ideal high-value prospects.",
    icon: Target,
  },
  {
    title: "Revenue-Driven Design",
    description: "Every design decision is strategically crafted to maximize conversions and drive measurable business growth.",
    icon: BarChart,
  },
  {
    title: "Instant Brand Authority",
    description: "Establish immediate credibility with a premium website that positions your brand as the industry leader.",
    icon: Award,
  },
  {
    title: "Zero Downtime",
    description: "Enterprise-grade hosting ensures your website is always available when your potential clients need you.",
    icon: Cloud,
  },
  {
    title: "Lightning Performance",
    description: "Blazing fast load times and smooth interactions that keep users engaged and improve search rankings.",
    icon: Zap,
  },
  {
    title: "Future-proof",
    description: "Built with cutting-edge technology that adapts to emerging trends and scales with your business growth.",
    icon: Lock,
  },
];

export default function Benefits() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="benefits" className="relative py-24 bg-[#111114]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Where Your Business Wins</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our approach is designed to give your business the competitive edge it needs to thrive in today's digital landscape.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group bg-[#16161a] border border-indigo-500/10 rounded-xl p-6 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className="mb-5 bg-indigo-500/10 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors duration-300">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}