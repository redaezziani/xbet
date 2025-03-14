import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'إنشاء حساب',
    description: 'تعلم كيفية إنشاء حساب على موقعنا',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
