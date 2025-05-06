"use client";

import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';

const services = [
  {
    title: "Website Design",
    description: "Custom, conversion-focused websites tailored to your brand and business goals. We create experiences that convert visitors into high-value clients.",
    features: ["Custom UI/UX Design", "Responsive Development", "SEO Optimization", "Content Strategy"],
    icon: Code,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Premium Hosting",
    description: "High-performance hosting solutions that ensure your website is always fast, secure, and accessible to potential clients worldwide.",
    features: ["99.9% Uptime", "SSL Certificates", "DDoS Protection", "Daily Backups"],
    icon: Server,
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Maintenance",
    description: "Proactive website maintenance to keep your digital presence secure, up-to-date, and performing at its best for your clients.",
    features: ["Regular Updates", "Security Audits", "Performance Optimization", "24/7 Support"],
    icon: Wrench,
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#111114] to-[#13131a]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
          We handle everything to do with your website. Don't worry about a thing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-[#16161a]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16161a] to-transparent"></div>
              </div>
              
              <div className="relative p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-500/10 rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="text-white/70 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mr-2"></div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}