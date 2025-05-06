'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
    const [budget, setBudget] = useState([2500]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { toast } = useToast();

    const formatBudget = (value) => {
        if (value >= 5000) return '$5,000+';
        return `$${value.toLocaleString()}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSuccess(false);

        const formData = new FormData(e.target);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            company: formData.get('company'),
            budget: formatBudget(budget[0]),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('https://submit-form.com/JXFA6pqH1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                toast({
                    title: 'Message sent successfully!',
                    description: "We'll get back to you within 24 hours.",
                });
                e.target.reset();
                setBudget([2500]);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast({
                title: 'Error sending message',
                description: 'Please try again or email us directly.',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#111114] pt-32 pb-16">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
                        <Mail className="h-4 w-4 mr-2 text-indigo-400" />
                        <span className="text-sm font-medium text-indigo-400">
                            Free Quote
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Get Your Free Website Quote
                    </h1>
                    <p className="text-xl text-white/70">
                        Tell us about your project, and we&apos;ll get back to
                        you within 24 hours.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="bg-[#16161a]/80 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70">
                                        First Name
                                    </label>
                                    <Input
                                        name="firstName"
                                        type="text"
                                        required
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70">
                                        Last Name
                                    </label>
                                    <Input
                                        name="lastName"
                                        type="text"
                                        required
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70">
                                    Email
                                </label>
                                <Input
                                    name="email"
                                    type="email"
                                    required
                                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70">
                                    Company
                                </label>
                                <Input
                                    name="company"
                                    type="text"
                                    required
                                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                                    placeholder="Company Ltd."
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-medium text-white/70">
                                    Estimated Budget
                                </label>
                                <Slider
                                    value={budget}
                                    onValueChange={setBudget}
                                    max={5000}
                                    step={500}
                                    className="py-4"
                                />
                                <div className="text-center text-lg font-semibold text-indigo-400">
                                    {formatBudget(budget[0])}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70">
                                    What do you need?
                                </label>
                                <Textarea
                                    name="message"
                                    required
                                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[150px]"
                                    placeholder="Tell us about your website needs and any specific features you're looking for..."
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Get Your Free Quote
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-8 flex items-center justify-center"
                                >
                                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                                    <span className="text-green-400">
                                        Your message has been sent successfully!
                                    </span>
                                </motion.div>
                            )}

                            <p className="text-white/50 text-sm text-center">
                                Or email us directly at{' '}
                                <a
                                    href="mailto:ali@whooosh.net"
                                    className="text-indigo-400 hover:text-indigo-300"
                                >
                                    ali@whooosh.net
                                </a>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
