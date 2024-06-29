import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css';

const cairo = Cairo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'موقع شحن الرصيد لتطبيقات الرهانات',
  description: 'استمتع بخدمات شحن الرصيد السريعة والآمنة لتطبيقات الرهانات مع موقعنا. اكتشف التفاصيل الآن!',
  keywords: 'شحن الرصيد, تطبيقات الرهانات, 1XBet, LineBet, Binance',
  
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ar'>
      <body className={cairo.className}>
        {children}
        <SpeedInsights />
        </body>
    </html>
  );
}
