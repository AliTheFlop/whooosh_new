'use client';

import { motion } from 'framer-motion';
import { Users, Globe, Zap, Shield } from 'lucide-react';

const stats = [
    { value: '95%', label: 'Client Satisfaction', icon: Users },
    { value: '24/7', label: 'Support Coverage', icon: Globe },
    { value: '2x', label: 'Faster Development', icon: Zap },
    { value: '100%', label: 'Project Success Rate', icon: Shield },
];

export default function Stats() {
    return (
        <section className="py-24 w-full bg-[#13131a]">
            <div className="container w-full mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        By The Numbers
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Our track record speaks for itself
                    </p>
                </motion.div>

                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8">
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
                            <div className="text-3xl font-bold mb-2">
                                {stat.value}
                            </div>
                            <div className="text-white/70">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
