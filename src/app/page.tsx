import Footer from '@/components/page-ui/footer';
import Header from '@/components/page-ui/header';
import { ServiceCounters } from '@/components/page-ui/service-counters';
import { Layer } from '@/components/page-ui/layer';
import { ServiceSection } from '@/components/page-ui/service-section';
import { MainSection } from '@/components/page-ui/main-section';

export default function Home() {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-start gap-2'>
      <Header />
      <Layer />
      <MainSection />
      <ServiceCounters />
      <ServiceSection />
      <Footer />
    </main>
  );
}
