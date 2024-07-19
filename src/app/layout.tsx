import type { Metadata } from 'next';
import { Noto_Sans_Arabic } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const Noto = Noto_Sans_Arabic({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'كورة بت',
  description:'استمتع بخدمات شحن الرصيد السريعة والآمنة لتطبيقات الرهانات في المغرب مع موقعنا. اكتشف التفاصيل الآن!',
  keywords:[],
  twitter:{},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ar'>
      <body className={Noto.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
