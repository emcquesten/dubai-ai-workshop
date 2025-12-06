import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from './Footer';

export const Privacy: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-background text-primary selection:bg-brand-blue/20 selection:text-primary overflow-x-hidden font-body">
            <Navbar hideNavLinks />

            {/* Content */}
            <main className="pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('privacy.title')}</h1>
                        <p className="text-gray-500 text-lg">{t('privacy.lastUpdated')}</p>
                    </div>

                    <div className="space-y-12 text-gray-700 leading-relaxed">
                        {/* Introduction */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.introTitle')}</h2>
                            <p className="mb-4">{t('privacy.introP1')}</p>
                            <p>
                                <strong>{t('privacy.introP2')}</strong>
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.collectTitle')}</h2>
                            <p className="mb-4">{t('privacy.collectP1')}</p>
                            <ul className="list-disc ps-6 space-y-2 mb-4">
                                <li>{t('privacy.collectItem1')}</li>
                                <li>{t('privacy.collectItem2')}</li>
                                <li>{t('privacy.collectItem3')}</li>
                                <li>{t('privacy.collectItem4')}</li>
                                <li>{t('privacy.collectItem5')}</li>
                            </ul>
                            <p>{t('privacy.collectP2')}</p>
                        </section>

                        {/* How We Use Your Information */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.useTitle')}</h2>
                            <p className="mb-4">{t('privacy.useP1')}</p>
                            <ul className="list-disc ps-6 space-y-2 mb-6">
                                <li>{t('privacy.useItem1')}</li>
                                <li>{t('privacy.useItem2')}</li>
                                <li>{t('privacy.useItem3')}</li>
                                <li>{t('privacy.useItem4')}</li>
                                <li>{t('privacy.useItem5')}</li>
                            </ul>
                            <p className="mb-4"><strong>{t('privacy.useP2')}</strong></p>
                            <ul className="list-disc ps-6 space-y-2">
                                <li>{t('privacy.useNotItem1')}</li>
                                <li>{t('privacy.useNotItem2')}</li>
                                <li>{t('privacy.useNotItem3')}</li>
                            </ul>
                        </section>

                        {/* Email Communications */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.emailTitle')}</h2>
                            <p className="mb-4">{t('privacy.emailP1')}</p>
                            <ul className="list-disc ps-6 space-y-2 mb-4">
                                <li>{t('privacy.emailItem1')}</li>
                                <li>{t('privacy.emailItem2')}</li>
                                <li>{t('privacy.emailItem3')}</li>
                                <li>{t('privacy.emailItem4')}</li>
                            </ul>
                            <p>{t('privacy.emailP2')}</p>
                        </section>

                        {/* Data Storage and Security */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.storageTitle')}</h2>
                            <p className="mb-4">{t('privacy.storageP1')}</p>
                            <ul className="list-disc ps-6 space-y-2 mb-4">
                                <li>{t('privacy.storageItem1')}</li>
                                <li>{t('privacy.storageItem2')}</li>
                            </ul>
                            <p>{t('privacy.storageP2')}</p>
                        </section>

                        {/* Data Retention */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.retentionTitle')}</h2>
                            <p className="mb-4">{t('privacy.retentionP1')}</p>
                            <ul className="list-disc ps-6 space-y-2">
                                <li>{t('privacy.retentionItem1')}</li>
                                <li>{t('privacy.retentionItem2')}</li>
                                <li>{t('privacy.retentionItem3')}</li>
                            </ul>
                        </section>

                        {/* Your Rights */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.rightsTitle')}</h2>
                            <p className="mb-4">{t('privacy.rightsP1')}</p>
                            <ul className="list-disc ps-6 space-y-2 mb-4">
                                <li><strong>{t('privacy.rightsAccess')}</strong> {t('privacy.rightsAccessDesc')}</li>
                                <li><strong>{t('privacy.rightsCorrection')}</strong> {t('privacy.rightsCorrectionDesc')}</li>
                                <li><strong>{t('privacy.rightsDeletion')}</strong> {t('privacy.rightsDeletionDesc')}</li>
                                <li><strong>{t('privacy.rightsWithdrawal')}</strong> {t('privacy.rightsWithdrawalDesc')}</li>
                            </ul>
                            <p>{t('privacy.rightsP2')}</p>
                        </section>

                        {/* Third-Party Services */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.thirdPartyTitle')}</h2>
                            <p className="mb-4">{t('privacy.thirdPartyP1')}</p>
                            <ul className="list-disc ps-6 space-y-2 mb-4">
                                <li>{t('privacy.thirdPartyItem1')}</li>
                                <li>{t('privacy.thirdPartyItem2')}</li>
                                <li>{t('privacy.thirdPartyItem3')}</li>
                                <li>{t('privacy.thirdPartyItem4')}</li>
                            </ul>
                            <p>{t('privacy.thirdPartyP2')}</p>
                        </section>

                        {/* Cookies and Tracking */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.cookiesTitle')}</h2>
                            <p className="mb-4">{t('privacy.cookiesP1')}</p>
                            <ul className="list-disc ps-6 space-y-2 mb-4">
                                <li>{t('privacy.cookiesItem1')}</li>
                                <li>{t('privacy.cookiesItem2')}</li>
                            </ul>
                            <p>{t('privacy.cookiesP2')}</p>
                        </section>

                        {/* Children's Privacy */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.childrenTitle')}</h2>
                            <p>{t('privacy.childrenP1')}</p>
                        </section>

                        {/* Changes to This Policy */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.changesTitle')}</h2>
                            <p>{t('privacy.changesP1')}</p>
                        </section>

                        {/* Contact Us */}
                        <section className="bg-gray-50 rounded-2xl p-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.contactTitle')}</h2>
                            <p className="mb-4">{t('privacy.contactP1')}</p>
                            <p className="text-brand-blue font-medium text-lg">
                                <a href="mailto:eric@futureproofed.io" className="hover:underline">eric@futureproofed.io</a>
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.governingTitle')}</h2>
                            <p>{t('privacy.governingP1')}</p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
