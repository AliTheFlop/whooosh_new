'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
    return (
        <section className="py-24 bg-[#111114] w-full relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl opacity-20"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#16161a]/80 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 md:p-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                            Let&apos;s make your website{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                                unforgettable.
                            </span>
                        </h2>
                        <p className="text-white/70 text-center mb-8 max-w-2xl mx-auto">
                            Turn your website into a powerful asset that sets
                            you apart from the competition.
                        </p>

                        <div className="flex justify-center">
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10 w-full max-w-md">
                                <h3 className="text-xl font-semibold mb-2">
                                    Get Your Free Quote
                                </h3>
                                <p className="text-white/70 mb-4">
                                    Tell us about your vision, and we'll show
                                    you how to make it a reality.
                                </p>
                                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                                    Get Quote
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="text-center text-white/60 text-sm mt-8">
                            <p>
                                No commitment required. We respond to all
                                inquiries within 24 hours.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
