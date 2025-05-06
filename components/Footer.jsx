'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
    Zap,
} from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0c0c0f] border-t border-indigo-500/10">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 mb-6"
                        >
                            <Zap className="h-6 w-6 text-indigo-500" />
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                                Whooosh.net
                            </span>
                        </Link>
                        <p className="text-white/70 mb-6">
                            Premium web design agency focused on creating
                            high-converting websites for local brands.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-white/50 hover:text-indigo-400 transition-colors"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="#"
                                className="text-white/50 hover:text-indigo-400 transition-colors"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="#"
                                className="text-white/50 hover:text-indigo-400 transition-colors"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="#"
                                className="text-white/50 hover:text-indigo-400 transition-colors"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            {[
                                'Website Design',
                                'Premium Hosting',
                                'Maintenance',
                            ].map((service, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-white/70 hover:text-indigo-400 transition-colors"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {['About Us', 'Our Process', 'Case Studies'].map(
                                (link, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-white/70 hover:text-indigo-400 transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <Mail
                                    size={18}
                                    className="text-indigo-400 mr-3 flex-shrink-0"
                                />
                                <a
                                    href="mailto:hello@whooosh.net"
                                    className="text-white/70 hover:text-indigo-400 transition-colors"
                                >
                                    ali@whooosh.net
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-indigo-500/10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-white/50 text-sm mb-4 md:mb-0">
                            {currentYear} Whooosh.net.
                        </p>
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="text-white/50 text-sm hover:text-indigo-400 transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-white/50 text-sm hover:text-indigo-400 transition-colors"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-white/50 text-sm hover:text-indigo-400 transition-colors"
                            >
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
