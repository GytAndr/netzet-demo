import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import './globals.css';
import Navbar from './ui/navbar';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Parenting Leader',
    description:
        'Introducing an exclusive VIP parenting community on Facebook with additional parenting tools and tips directly from the founder, Derek Mitchell, and other experts.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={raleway.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
