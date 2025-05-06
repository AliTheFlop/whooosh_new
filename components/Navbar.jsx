'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/#services' },
    { title: 'Projects', href: '/#projects' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrolled
                    ? 'bg-[#111114]/80 backdrop-blur-md border-b border-indigo-500/10'
                    : 'bg-transparent'
            )}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <Zap className="h-8 w-8 text-indigo-500" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                            Whooosh.net
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="hidden md:flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                        <Link
                            href={'/contact'}
                            className="bg-indigo-700 hover:bg-indigo-700 text-white h-10 px-4 py-2"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#111114]/95 backdrop-blur-lg border-t border-indigo-500/10"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="text-base font-medium text-white/80 hover:text-white py-2 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </Link>
                            ))}

                            <Link
                                href={'/contact'}
                                className="bg-indigo-700 hover:bg-indigo-700 text-white h-10 px-4 py-2 mt-2 w-full"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
