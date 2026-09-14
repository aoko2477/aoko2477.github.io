import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const cormorant = Cormorant_Garamond({ variable: '--font-cormorant', subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = { title: 'aoko*の観測所', description: 'aokoがつくったTRPG・配信関連の記事、ツール、アプリ、素材の案内所。' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ja"><body className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable}`}>{children}</body></html>; }
