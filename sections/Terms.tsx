import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from './Footer';

export const Terms: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-background text-primary selection:bg-brand-blue/20 selection:text-primary overflow-x-hidden font-body">
            <Navbar hideNavLinks />

            {/* Content */}
            <main className="pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('terms.title')}</h1>
                        <p className="text-gray-500 text-lg">{t('terms.lastUpdated')}</p>
                    </div>

                    <div className="space-y-12 text-gray-700 leading-relaxed">
                        {/* Introduction */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.introTitle')}</h2>
                            <p className="mb-4">{t('terms.introP1')}</p>
                            <p>{t('terms.introP2')}</p>
                        </section>

                        {/* Workshop Registration and Payment */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.registrationTitle')}</h2>
                            <p className="mb-4">{t('terms.registrationP1')}</p>
                            <p>{t('terms.registrationP2')}</p>
                        </section>

                        {/* No Refunds */}
                        <section className="bg-red-50 rounded-2xl p-8 border border-red-100">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.refundTitle')}</h2>
                            <p className="mb-4">
                                <strong>{t('terms.refundP1')}</strong> {t('terms.refundP2')}
                            </p>
                            <ul className="list-disc ps-6 space-y-2 mb-4">
                                <li>{t('terms.refundItem1')}</li>
                                <li>{t('terms.refundItem2')}</li>
                                <li>{t('terms.refundItem3')}</li>
                                <li>{t('terms.refundItem4')}</li>
                                <li>{t('terms.refundItem5')}</li>
                            </ul>
                            <p>{t('terms.refundP3')}</p>
                        </section>

                        {/* Non-Transferable Registration */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.transferTitle')}</h2>
                            <p className="mb-4">{t('terms.transferP1')}</p>
                            <p>{t('terms.transferP2')}</p>
                        </section>

                        {/* Workshop Recording and Media Release */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.recordingTitle')}</h2>
                            <p className="mb-4">{t('terms.recordingP1')}</p>
                            <p className="mb-4">{t('terms.recordingP2')}</p>
                            <p className="mb-4">{t('terms.recordingP3')}</p>
                            <ul className="list-disc ps-6 space-y-2 mb-4">
                                <li>{t('terms.recordingItem1')}</li>
                                <li>{t('terms.recordingItem2')}</li>
                                <li>{t('terms.recordingItem3')}</li>
                                <li>{t('terms.recordingItem4')}</li>
                                <li>{t('terms.recordingItem5')}</li>
                                <li>{t('terms.recordingItem6')}</li>
                                <li>{t('terms.recordingItem7')}</li>
                                <li>{t('terms.recordingItem8')}</li>
                            </ul>
                            <p className="mb-4">{t('terms.recordingP4')}</p>
                            <p className="mb-4">{t('terms.recordingP5')}</p>
                            <p>{t('terms.recordingP6')}</p>
                        </section>

                        {/* Participant Content and Contributions */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.contributionsTitle')}</h2>
                            <p className="mb-4">{t('terms.contributionsP1')}</p>
                            <p>{t('terms.contributionsP2')}</p>
                        </section>

                        {/* Workshop Delivery and Content */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.deliveryTitle')}</h2>
                            <p className="mb-4">{t('terms.deliveryP1')}</p>
                            <p>{t('terms.deliveryP2')}</p>
                        </section>

                        {/* Participant Requirements */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.requirementsTitle')}</h2>
                            <p className="mb-4">{t('terms.requirementsP1')}</p>
                            <p className="mb-4">{t('terms.requirementsP2')}</p>
                            <p>{t('terms.requirementsP3')}</p>
                        </section>

                        {/* No Guaranteed Results */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.resultsTitle')}</h2>
                            <p className="mb-4">{t('terms.resultsP1')}</p>
                            <p className="mb-4">{t('terms.resultsP2')}</p>
                            <p>{t('terms.resultsP3')}</p>
                        </section>

                        {/* Intellectual Property */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.ipTitle')}</h2>
                            <p className="mb-4">{t('terms.ipP1')}</p>
                            <p className="mb-4">{t('terms.ipP2')}</p>
                            <p>{t('terms.ipP3')}</p>
                        </section>

                        {/* Confidentiality */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.confidentialityTitle')}</h2>
                            <p>{t('terms.confidentialityP1')}</p>
                        </section>

                        {/* Limitation of Liability */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.liabilityTitle')}</h2>
                            <p className="mb-4">{t('terms.liabilityP1')}</p>
                            <ul className="list-disc ps-6 space-y-2 mb-4">
                                <li>{t('terms.liabilityItem1')}</li>
                                <li>{t('terms.liabilityItem2')}</li>
                                <li>{t('terms.liabilityItem3')}</li>
                                <li>{t('terms.liabilityItem4')}</li>
                                <li>{t('terms.liabilityItem5')}</li>
                                <li>{t('terms.liabilityItem6')}</li>
                            </ul>
                            <p>{t('terms.liabilityP2')}</p>
                        </section>

                        {/* Indemnification */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.indemnificationTitle')}</h2>
                            <p>{t('terms.indemnificationP1')}</p>
                        </section>

                        {/* Event Cancellation or Postponement */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.cancellationTitle')}</h2>
                            <p className="mb-4">{t('terms.cancellationP1')}</p>
                            <p className="mb-4">{t('terms.cancellationP2')}</p>
                            <p>{t('terms.cancellationP3')}</p>
                        </section>

                        {/* Waitlist and Communications */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.waitlistTitle')}</h2>
                            <p className="mb-4">{t('terms.waitlistP1')}</p>
                            <p>{t('terms.waitlistP2')}</p>
                        </section>

                        {/* Third-Party Tools and Services */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.thirdPartyTitle')}</h2>
                            <p className="mb-4">{t('terms.thirdPartyP1')}</p>
                            <p>{t('terms.thirdPartyP2')}</p>
                        </section>

                        {/* Consulting and Custom Build Services */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.consultingTitle')}</h2>
                            <p className="mb-4">{t('terms.consultingP1')}</p>
                            <p>{t('terms.consultingP2')}</p>
                        </section>

                        {/* Privacy */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.privacyRefTitle')}</h2>
                            <p>
                                {t('terms.privacyRefP1')} <a href="/privacy" className="text-brand-blue hover:underline">{t('terms.privacyRefLink')}</a>
                            </p>
                        </section>

                        {/* Modifications to Terms */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.modificationsTitle')}</h2>
                            <p className="mb-4">{t('terms.modificationsP1')}</p>
                            <p>{t('terms.modificationsP2')}</p>
                        </section>

                        {/* Severability */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.severabilityTitle')}</h2>
                            <p>{t('terms.severabilityP1')}</p>
                        </section>

                        {/* Entire Agreement */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.entireTitle')}</h2>
                            <p>{t('terms.entireP1')}</p>
                        </section>

                        {/* Governing Law and Jurisdiction */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.governingTitle')}</h2>
                            <p>{t('terms.governingP1')}</p>
                        </section>

                        {/* Contact Us */}
                        <section className="bg-gray-50 rounded-2xl p-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.contactTitle')}</h2>
                            <p className="mb-4">{t('terms.contactP1')}</p>
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
