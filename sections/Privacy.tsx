import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from './Footer';

export const Privacy: React.FC = () => {
    return (
        <div className="bg-background text-primary selection:bg-brand-blue/20 selection:text-primary overflow-x-hidden font-body">
            <Navbar hideNavLinks />

            {/* Content */}
            <main className="pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                        <p className="text-gray-500 text-lg">Last Updated: December 2025</p>
                    </div>

                    <div className="space-y-12 text-gray-700 leading-relaxed">
                        {/* Introduction */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                            <p className="mb-4">
                                This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website and submit your information to join our waitlist for the AI Automation Workshop for Real Estate Professionals.
                            </p>
                            <p>
                                We are committed to protecting your privacy and handling your data with transparency and care. <strong>We will never sell, rent, or trade your personal information to third parties.</strong>
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                            <p className="mb-4">When you join our waitlist, we collect the following information:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Phone number (if provided)</li>
                                <li>Your self-reported level of experience with AI and automation</li>
                                <li>Your responses regarding current business challenges and desired solutions</li>
                            </ul>
                            <p>
                                We may also automatically collect certain technical information when you visit our website, including your IP address, browser type, device type, and pages visited. This is collected through standard analytics tools to help us understand how visitors interact with our site.
                            </p>
                        </section>

                        {/* How We Use Your Information */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                            <p className="mb-4">We use the information you provide solely for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>To add you to our waitlist and notify you when registration opens</li>
                                <li>To send you updates about the workshop, including dates, location, and logistics</li>
                                <li>To tailor the workshop content based on the challenges and needs you share with us</li>
                                <li>To respond to your inquiries if you contact us directly</li>
                                <li>To improve our website and user experience</li>
                            </ul>
                            <p className="mb-4">We will <strong>not</strong> use your information for:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Selling or sharing with third parties for their marketing purposes</li>
                                <li>Sending unrelated promotional content or spam</li>
                                <li>Any purpose beyond what is directly related to the AI Automation Workshop</li>
                            </ul>
                        </section>

                        {/* Email Communications */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Email Communications</h2>
                            <p className="mb-4">By joining our waitlist, you consent to receive email communications from us regarding the workshop. These may include:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Waitlist confirmation</li>
                                <li>Workshop announcements and registration details</li>
                                <li>Reminders and logistical information</li>
                                <li>Follow-up communications after the event</li>
                            </ul>
                            <p>
                                You may unsubscribe from these communications at any time by clicking the "unsubscribe" link at the bottom of any email or by contacting us directly. If you unsubscribe, we will promptly remove you from our mailing list, though we may retain your information in our records for administrative purposes unless you request full deletion.
                            </p>
                        </section>

                        {/* Data Storage and Security */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage and Security</h2>
                            <p className="mb-4">Your personal information is stored securely using industry-standard tools and platforms. We use trusted third-party services for data management, including:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Airtable for securely storing waitlist submissions</li>
                                <li>Email marketing software for managing communications</li>
                            </ul>
                            <p>
                                We implement reasonable technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        {/* Data Retention */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
                            <p className="mb-4">We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy. Specifically:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>If you attend the workshop, we may retain your information for follow-up communications and future offerings unless you opt out</li>
                                <li>If you do not attend or the workshop does not proceed, we will retain your information for a maximum of 24 months, after which it will be deleted unless you request earlier deletion</li>
                                <li>You may request deletion of your data at any time by contacting us</li>
                            </ul>
                        </section>

                        {/* Your Rights */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                            <p className="mb-4">You have the following rights regarding your personal information:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Access:</strong> You may request a copy of the personal data we hold about you</li>
                                <li><strong>Correction:</strong> You may request that we correct any inaccurate or incomplete information</li>
                                <li><strong>Deletion:</strong> You may request that we delete your personal data from our systems</li>
                                <li><strong>Withdrawal of Consent:</strong> You may withdraw your consent to receive communications at any time</li>
                            </ul>
                            <p>
                                To exercise any of these rights, please contact us using the details provided below. We will respond to your request within a reasonable timeframe.
                            </p>
                        </section>

                        {/* Third-Party Services */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
                            <p className="mb-4">We use third-party services to operate our website and manage your data. These services have their own privacy policies, and we encourage you to review them:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Airtable (data storage)</li>
                                <li>Email marketing platform (communications)</li>
                                <li>Website hosting provider</li>
                                <li>Analytics tools</li>
                            </ul>
                            <p>
                                We only share the minimum information necessary with these services to fulfill the purposes described in this policy. We do not sell or provide your data to any third parties for independent use.
                            </p>
                        </section>

                        {/* Cookies and Tracking */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
                            <p className="mb-4">Our website may use cookies and similar tracking technologies to enhance your experience and collect analytics data. These may include:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Essential cookies required for the website to function</li>
                                <li>Analytics cookies to understand how visitors use our site</li>
                            </ul>
                            <p>
                                You can control cookie preferences through your browser settings. Disabling cookies may affect your experience on the site.
                            </p>
                        </section>

                        {/* Children's Privacy */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
                            <p>
                                Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a minor, we will take steps to delete it promptly.
                            </p>
                        </section>

                        {/* Changes to This Policy */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.
                            </p>
                        </section>

                        {/* Contact Us */}
                        <section className="bg-gray-50 rounded-2xl p-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions about this Privacy Policy, wish to exercise your rights, or have concerns about how your data is handled, please contact us at:
                            </p>
                            <p className="text-brand-blue font-medium text-lg">
                                <a href="mailto:eric@futureproofed.io" className="hover:underline">eric@futureproofed.io</a>
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                            <p>
                                This Privacy Policy is governed by the laws of the United Arab Emirates. Any disputes arising from this policy shall be subject to the jurisdiction of the courts of Dubai.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
