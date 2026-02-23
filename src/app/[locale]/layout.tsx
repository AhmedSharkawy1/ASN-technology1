import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'ASN Technology | Futuristic Digital Agency',
    description: 'We build visually stunning, high-conversion websites and digital solutions.',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://asn-technology.com',
        siteName: 'ASN Technology',
        images: [{ url: '/api/og' }],
    },
};

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ar' }];
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    setRequestLocale(locale);
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
            <body className={`${inter.variable} min-h-screen antialiased bg-background text-foreground`}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                        <Navigation />
                        <main className="pt-20">
                            {children}
                        </main>
                        <Footer />
                        <FloatingWhatsApp />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
