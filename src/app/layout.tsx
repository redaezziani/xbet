import type { Metadata } from 'next';
import { Noto_Sans_Arabic } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const Noto = Noto_Sans_Arabic({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'موقع شحن الرصيد لتطبيقات الرهانات في المغرب',
  description:
    'استمتع بخدمات شحن الرصيد السريعة والآمنة لتطبيقات الرهانات في المغرب مع موقعنا. اكتشف التفاصيل الآن!',
  keywords:
    'شحن الرصيد, تطبيقات الرهانات, المغرب, 1XBet, LineBet, Binance, موقع رهانات, تحميل تطبيق رهانات, شركات الرهانات, تطبيقات الرهانات المجانية, كيفية الرهان عبر الإنترنت, طرق الرهان المفضلة, أفضل تطبيقات الرهان, مقارنة تطبيقات الرهان, تطبيقات الرهان الآمنة, تطبيقات الرهان الشهيرة, خدمات الرهان عبر الإنترنت, استراتيجيات الرهان, تقييم تطبيقات الرهان, تطبيقات الرهان للهواتف الذكية, مراجعات تطبيقات الرهان',
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
