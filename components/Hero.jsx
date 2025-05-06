'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[#111114]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-600/20 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-purple-600/20 rounded-full blur-3xl opacity-20"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-24 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
                            <Rocket className="h-4 w-4 mr-2 text-indigo-400" />
                            <span className="text-sm font-medium text-indigo-400">
                                Premium Web Design Agency
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
                    >
                        Never miss a{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                            high-value client
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto"
                    >
                        Secure More Leads With A Custom Website That's Built For
                        Your Brand
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button className="h-12 px-8 bg-indigo-600 hover:bg-indigo-700 text-white">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            className="h-12 px-8 border-white/20 text-white hover:bg-white/10"
                        >
                            View Our Work
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce opacity-50">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-1">
                    <div className="w-1 h-2 bg-white/30 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
