import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'MayaStr',
    description: 'Redifining Encryption',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
