import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experienceLevel: '',
    problem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('VITE_WEBHOOK_URL is not configured');
      setError('Form submission is not configured. Please contact support.');
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        ...formData,
        phone: formData.phone ? `+971${formData.phone}` : '',
        submittedAt: new Date().toISOString()
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error('Webhook response not ok:', response.status, response.statusText);
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', experienceLevel: '', problem: '' });
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="waitlist" className="bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            Join the waitlist.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Dates are being finalized. Sign up below and you'll be the first to know when registration opens. Spots are limited to 10 per session.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-gray-100 rounded-3xl p-12 md:p-16 shadow-xl text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-sans font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                  You're on the list!
                </h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  Thanks for signing up. I'll be in touch soon with workshop dates and next steps.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-surface border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                    placeholder="Ahmed Al-Rashid"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-surface border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                    placeholder="ahmed@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 font-medium">+971</span>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-20 pr-5 py-4 bg-surface border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                      placeholder="50 123 4567"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Experience Level */}
                <div>
                  <label htmlFor="experienceLevel" className="block text-sm font-semibold text-gray-900 mb-2">
                    Experience with Automation
                  </label>
                  <select
                    id="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-5 py-4 bg-surface border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all appearance-none cursor-pointer"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>Select your experience level</option>
                    <option value="beginner">Beginner - New to automation</option>
                    <option value="some-experience">Some Experience - Used a few tools</option>
                    <option value="intermediate">Intermediate - Comfortable with automation</option>
                    <option value="advanced">Advanced - Built complex workflows</option>
                  </select>
                </div>

                {/* Business Problem */}
                <div>
                  <label htmlFor="problem" className="block text-sm font-semibold text-gray-900 mb-2">
                    What's taking up most of your time right now?
                  </label>
                  <textarea
                    id="problem"
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    rows={4}
                    className="w-full px-5 py-4 bg-surface border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none"
                    placeholder="e.g., I spend hours every day sorting through leads..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="text-red-600 text-sm text-center bg-red-50 py-3 px-4 rounded-lg">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 px-8 font-sans font-bold text-base tracking-wide bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 hover:scale-[1.02] transform duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Submitting...' : 'Get on the Waitlist'}
                </button>

                <p className="text-center text-sm text-gray-500 mt-6">
                  I'll email you when dates are set. No spam, just workshop updates.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
};