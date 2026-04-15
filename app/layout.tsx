import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Hoque Group | Global Logistics & Industrial Authority',
  description: 'Global logistics and industrial conglomerate specializing in import-export and large-scale supply chain solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-secondary/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
