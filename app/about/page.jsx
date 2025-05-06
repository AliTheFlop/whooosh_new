"use client";

import { motion } from 'framer-motion';
import { Users, Globe, Zap, Shield } from 'lucide-react';

const stats = [
  { value: '95%', label: 'Client Satisfaction', icon: Users },
  { value: '24/7', label: 'Support Coverage', icon: Globe },
  { value: '2x', label: 'Faster Development', icon: Zap },
  { value: '100%', label: 'Project Success Rate', icon: Shield },
];

const values = [
  {
    title: "Client-First Approach",
    description: "Every decision we make is guided by what's best for your business growth and success."
  },
  {
    title: "Innovative Solutions",
    description: "We stay ahead of digital trends to ensure your website remains cutting-edge and effective."
  },
  {
    title: "Transparent Communication",
    description: "Clear, honest communication and regular updates throughout your project journey."
  },
  {
    title: "Results-Driven",
    description: "We focus on creating websites that drive real business results and ROI."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#111114]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital Excellence Since 2020
            </h1>
            <p className="text-xl text-white/70 mb-8">
              We're a team of digital craftsmen dedicated to transforming businesses through exceptional web design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-indigo-500/10 rounded-lg">
                    <stat.icon className="h-6 w-6 text-indigo-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-[#16161a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-white/70 mb-4">
                Founded in 2020, Whooosh.net emerged from a simple yet powerful vision: to help businesses thrive in the digital age through exceptional web design and development.
              </p>
              <p className="text-white/70 mb-4">
                What sets us apart is our unwavering commitment to creating websites that don't just look great but drive real business results. We combine cutting-edge technology with strategic design thinking to deliver solutions that help our clients stand out in their industries.
              </p>
              <p className="text-white/70">
                Today, we continue to push the boundaries of what's possible in web design, helping businesses transform their digital presence and achieve remarkable growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#16161a] border border-indigo-500/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}