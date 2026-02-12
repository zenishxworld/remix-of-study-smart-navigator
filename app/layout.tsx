import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const dynamic = 'force-dynamic'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
    title: 'UWAI — Study Abroad Intelligence Platform',
    description: 'Make ₹50L decisions with data, not consultants. Commission-free, AI-powered university matching with transparent ROI analysis.',
    keywords: 'study abroad, university comparison, ROI calculator, AI university matching, education, international students, UWAI',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            try {
                                var theme = localStorage.getItem('theme');
                                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                    document.documentElement.classList.add('dark');
                                }
                            } catch(e) {}
                        })();
                    `
                }} />
            </head>
            <body className={`${inter.className} theme-transition`}>
                {children}
            </body>
        </html>
    )
}
