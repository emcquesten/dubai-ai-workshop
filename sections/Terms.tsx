import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from './Footer';

export const Terms: React.FC = () => {
    return (
        <div className="bg-background text-primary selection:bg-brand-blue/20 selection:text-primary overflow-x-hidden font-body">
            <Navbar hideNavLinks />

            {/* Content */}
            <main className="pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
                        <p className="text-gray-500 text-lg">Last Updated: December 2025</p>
                    </div>

                    <div className="space-y-12 text-gray-700 leading-relaxed">
                        {/* Introduction */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                            <p className="mb-4">
                                These Terms and Conditions govern your use of this website and your participation in the AI Automation Workshop for Real Estate Professionals ("the Workshop") hosted by FutureProofed ("we," "us," or "our"). By accessing this website, joining our waitlist, or registering for the Workshop, you agree to be bound by these Terms and Conditions in their entirety.
                            </p>
                            <p>
                                Please read these terms carefully before submitting any information or making any payment.
                            </p>
                        </section>

                        {/* Workshop Registration and Payment */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Workshop Registration and Payment</h2>
                            <p className="mb-4">
                                Registration for the Workshop is confirmed only upon receipt of full payment. By completing payment, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
                            </p>
                            <p>
                                Workshop fees are listed in US Dollars (USD) and must be paid in full at the time of registration. We reserve the right to change Workshop pricing at any time, but any price changes will not affect registrations that have already been confirmed and paid.
                            </p>
                        </section>

                        {/* No Refunds */}
                        <section className="bg-red-50 rounded-2xl p-8 border border-red-100">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Refunds</h2>
                            <p className="mb-4">
                                <strong>All Workshop fees are non-refundable.</strong> Once payment has been made, no refunds will be issued for any reason, including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Change of mind or personal circumstances</li>
                                <li>Inability to attend due to scheduling conflicts</li>
                                <li>Failure to attend the Workshop on the scheduled date</li>
                                <li>Dissatisfaction with the Workshop content or delivery</li>
                                <li>Technical difficulties experienced by the participant</li>
                            </ul>
                            <p>
                                By completing payment, you acknowledge and accept this no-refund policy.
                            </p>
                        </section>

                        {/* Non-Transferable Registration */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Non-Transferable Registration</h2>
                            <p className="mb-4">
                                Your Workshop registration is personal to you and is non-transferable. You may not sell, assign, or transfer your registration or attendance rights to another individual or entity under any circumstances.
                            </p>
                            <p>
                                If you are unable to attend, your registration will be forfeited and no refund, credit, or transfer will be provided.
                            </p>
                        </section>

                        {/* Workshop Recording and Media Release */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Workshop Recording and Media Release</h2>
                            <p className="mb-4">
                                By registering for and attending the Workshop, you acknowledge and consent that the Workshop will be recorded. This recording may include video, audio, photographs, screen captures, and any other form of media capture.
                            </p>
                            <p className="mb-4">
                                You grant FutureProofed and its affiliates a perpetual, irrevocable, worldwide, royalty-free, fully transferable license to use, reproduce, modify, distribute, display, and create derivative works from any recordings, photographs, or other media in which you appear or in which your voice, likeness, name, image, statements, or contributions are captured.
                            </p>
                            <p className="mb-4">This content may be used for any purpose, including but not limited to:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Creating educational products, courses, or resources for sale or distribution</li>
                                <li>Marketing, promotional, and advertising materials</li>
                                <li>Social media content across all platforms</li>
                                <li>Website content, blog posts, and articles</li>
                                <li>Podcasts, video series, and other audio-visual content</li>
                                <li>Case studies, testimonials, and success stories</li>
                                <li>Internal training and archival purposes</li>
                                <li>Any other content repurposing as we see fit</li>
                            </ul>
                            <p className="mb-4">
                                You waive any right to inspect or approve the finished recordings or the manner in which they are used. You also waive any right to compensation, royalties, or payment of any kind for the use of such recordings or content.
                            </p>
                            <p className="mb-4">
                                You release FutureProofed, its owners, employees, contractors, and affiliates from any and all claims, demands, or liabilities arising from or related to the recording, use, or distribution of any media in which you appear.
                            </p>
                            <p>
                                If you have specific concerns about being recorded or appearing in any media, you must notify us in writing at eric@futureproofed.io prior to the Workshop date. We will make reasonable efforts to accommodate your request, but we cannot guarantee that you will not appear in any background footage or group recordings.
                            </p>
                        </section>

                        {/* Participant Content and Contributions */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Participant Content and Contributions</h2>
                            <p className="mb-4">
                                Any questions, comments, ideas, suggestions, workflows, or other contributions you share during the Workshop may be used by FutureProofed without restriction. By participating, you grant us a perpetual, royalty-free license to use any content or ideas you contribute during the Workshop for any purpose, including incorporation into future workshops, courses, products, or materials.
                            </p>
                            <p>
                                You will not be entitled to any compensation, credit, or attribution for such contributions unless separately agreed in writing.
                            </p>
                        </section>

                        {/* Workshop Delivery and Content */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Workshop Delivery and Content</h2>
                            <p className="mb-4">
                                We reserve the right to make reasonable changes to the Workshop content, schedule, format, venue, or instructors at any time without prior notice. While we will make every effort to deliver the Workshop as advertised, we do not guarantee that specific topics, tools, or outcomes will be covered or achieved.
                            </p>
                            <p>
                                The Workshop is provided on an "as is" basis. We make no representations or warranties of any kind, express or implied, regarding the Workshop content, delivery, or outcomes.
                            </p>
                        </section>

                        {/* Participant Requirements */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Participant Requirements</h2>
                            <p className="mb-4">
                                Participants are required to bring their own laptop to the Workshop. We are not responsible for providing equipment, and failure to bring a suitable device may limit your ability to participate fully.
                            </p>
                            <p className="mb-4">
                                Participants are responsible for ensuring they have a stable internet connection if any portion of the Workshop requires online access.
                            </p>
                            <p>
                                You agree to conduct yourself professionally and respectfully throughout the Workshop. We reserve the right to remove any participant whose behavior is disruptive, inappropriate, or violates these terms, without refund.
                            </p>
                        </section>

                        {/* No Guaranteed Results */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Guaranteed Results</h2>
                            <p className="mb-4">
                                The Workshop is intended for educational and informational purposes only. We do not guarantee any specific results, outcomes, or business improvements from your participation.
                            </p>
                            <p className="mb-4">
                                Any examples, case studies, or success stories shared during the Workshop are for illustrative purposes only and should not be interpreted as promises or guarantees of similar results. Your results will depend on many factors, including your own effort, business circumstances, and implementation.
                            </p>
                            <p>
                                You acknowledge that the success of any automation or workflow you build is your sole responsibility.
                            </p>
                        </section>

                        {/* Intellectual Property */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
                            <p className="mb-4">
                                All Workshop content, materials, presentations, handouts, recordings, and resources are the intellectual property of FutureProofed and are protected by copyright and other intellectual property laws.
                            </p>
                            <p className="mb-4">
                                You are granted a limited, non-exclusive, non-transferable license to use the Workshop materials for your personal, non-commercial use only. You may not reproduce, distribute, modify, publicly display, sell, or create derivative works from any Workshop materials without our prior written consent.
                            </p>
                            <p>
                                You may not record, photograph, or capture any portion of the Workshop (audio, video, or otherwise) without our express written permission. Unauthorized recording is strictly prohibited and may result in removal from the Workshop without refund and potential legal action.
                            </p>
                        </section>

                        {/* Confidentiality */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Confidentiality</h2>
                            <p>
                                During the Workshop, other participants may share personal business information, challenges, or strategies. You agree to treat any information shared by other participants as confidential and not to disclose, share, or use such information outside of the Workshop without the express consent of the individual who shared it.
                            </p>
                        </section>

                        {/* Limitation of Liability */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                            <p className="mb-4">
                                To the fullest extent permitted by law, FutureProofed, its owners, employees, contractors, and affiliates shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising from or related to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Your participation in or inability to participate in the Workshop</li>
                                <li>Any content, information, or materials provided during the Workshop</li>
                                <li>Any actions you take or decisions you make based on the Workshop content</li>
                                <li>Any technical failures, interruptions, or errors</li>
                                <li>Any loss of data, profits, or business opportunities</li>
                                <li>The use or distribution of any recordings or media in which you appear</li>
                            </ul>
                            <p>
                                Our total liability to you for any claims arising from the Workshop shall not exceed the amount you paid for your Workshop registration.
                            </p>
                        </section>

                        {/* Indemnification */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
                            <p>
                                You agree to indemnify, defend, and hold harmless FutureProofed, its owners, employees, contractors, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising from or related to your participation in the Workshop, your breach of these Terms and Conditions, or your violation of any applicable law or regulation.
                            </p>
                        </section>

                        {/* Event Cancellation or Postponement */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Event Cancellation or Postponement</h2>
                            <p className="mb-4">
                                We reserve the right to cancel or postpone the Workshop at any time due to circumstances beyond our reasonable control, including but not limited to insufficient registrations, venue issues, instructor unavailability, illness, natural disasters, government restrictions, or other unforeseen events.
                            </p>
                            <p className="mb-4">
                                In the event of cancellation by us, registered participants will be offered either a full refund or the option to transfer their registration to a rescheduled date, at our discretion.
                            </p>
                            <p>
                                In the event of postponement, your registration will automatically transfer to the new date. If you are unable to attend the rescheduled Workshop, you may request a refund, which will be granted at our sole discretion.
                            </p>
                        </section>

                        {/* Waitlist and Communications */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Waitlist and Communications</h2>
                            <p className="mb-4">
                                By joining our waitlist, you consent to receive email communications from us regarding the Workshop and related offerings. You may unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us directly.
                            </p>
                            <p>
                                Joining the waitlist does not guarantee a spot in the Workshop. Registration is confirmed only upon successful payment.
                            </p>
                        </section>

                        {/* Third-Party Tools and Services */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Tools and Services</h2>
                            <p className="mb-4">
                                The Workshop may reference or utilize third-party tools, platforms, or services such as n8n, Make.com, or others. We are not affiliated with, endorsed by, or responsible for any third-party tools or services mentioned during the Workshop.
                            </p>
                            <p>
                                Your use of any third-party tools is subject to their respective terms of service and privacy policies. We are not liable for any issues, costs, or damages arising from your use of third-party tools.
                            </p>
                        </section>

                        {/* Consulting and Custom Build Services */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Consulting and Custom Build Services</h2>
                            <p className="mb-4">
                                Consulting and custom workflow build services are separate from the Workshop and are subject to separate agreements and pricing. Workshop registration does not include or entitle you to any consulting or custom build services.
                            </p>
                            <p>
                                Any consulting or custom build engagements will be governed by a separate agreement between you and FutureProofed.
                            </p>
                        </section>

                        {/* Privacy */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy</h2>
                            <p>
                                Your privacy is important to us. Please refer to our <a href="/privacy" className="text-brand-blue hover:underline">Privacy Policy</a> for information about how we collect, use, and protect your personal data.
                            </p>
                        </section>

                        {/* Modifications to Terms */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications to Terms</h2>
                            <p className="mb-4">
                                We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this website. Your continued use of this website or participation in the Workshop after any modifications indicates your acceptance of the updated terms.
                            </p>
                            <p>
                                It is your responsibility to review these Terms and Conditions periodically for changes.
                            </p>
                        </section>

                        {/* Severability */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Severability</h2>
                            <p>
                                If any provision of these Terms and Conditions is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such finding shall not affect the validity of the remaining provisions, which shall continue in full force and effect.
                            </p>
                        </section>

                        {/* Entire Agreement */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Entire Agreement</h2>
                            <p>
                                These Terms and Conditions, together with our Privacy Policy, constitute the entire agreement between you and FutureProofed regarding your use of this website and participation in the Workshop, and supersede all prior agreements, representations, or understandings.
                            </p>
                        </section>

                        {/* Governing Law and Jurisdiction */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law and Jurisdiction</h2>
                            <p>
                                These Terms and Conditions are governed by the laws of the United Arab Emirates. Any disputes arising from or related to these terms or the Workshop shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
                            </p>
                        </section>

                        {/* Contact Us */}
                        <section className="bg-gray-50 rounded-2xl p-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions about these Terms and Conditions, please contact us at:
                            </p>
                            <p className="text-brand-blue font-medium text-lg">
                                <a href="mailto:eric@futureproofed.io" className="hover:underline">eric@futureproofed.io</a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
