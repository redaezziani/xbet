import type { Metadata } from 'next';
import { Noto_Sans_Arabic } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const Noto = Noto_Sans_Arabic({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: ' Melfot | شحن رصيد الرهانات',
  description:'استمتع بخدمات شحن الرصيد السريعة والآمنة لتطبيقات الرهانات في المغرب مع موقعنا. اكتشف التفاصيل الآن!',
  keywords:['شحن رصيد الرهانات','شحن رصيد الرهانات المغرب','شحن رصيد الرهانات بالمغرب','شحن رصيد الرهانات بالمغرب','شحن رصيد الرهانات بالمغرب','شحن رصيد الرهانات بالمغرب','شحن رصيد الرهانات بالمغرب','شحن رصيد الرهانات بالمغرب','شحن رصيد الرهانات بالمغرب','شحن رصيد الرهانات بالمغرب',"melfot",'1xbet','linebet','bet365','maroc','morocco','المغرب','الرهانات','الرهانات المغرب '],
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
