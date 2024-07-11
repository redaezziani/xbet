import Footer from '@/components/page-ui/footer';
import Header from '@/components/page-ui/header';
import { ServiceCounters } from '@/components/page-ui/service-counters';
import { Layer } from '@/components/page-ui/layer';
import { ServiceSection } from '@/components/page-ui/service-section';
import { MainSection } from '@/components/page-ui/main-section';
import { InfiniteSlider } from '@/components/page-ui/slider';
import { HowITWork } from '@/components/page-ui/how-it-work';
import ClientRev from '@/components/page-ui/client-rev';
import AccountCreationInfo from '@/components/page-ui/account-creationinfo';

export default function Home() {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-start gap-2'>
        {/* <div className="w-full left-0 top-0 z-0 h-full min-h-screen bg-gradient-to-b from-primary/20 via-amber-100/20 to-transparent absolute "/> */}
      <Header />
      <Layer />
      <MainSection />
      <ServiceCounters />
      <ServiceSection />
      <InfiniteSlider />
      <HowITWork />
      <AccountCreationInfo/>
      {/* <ClientRev /> */}
      <Footer />
    </main>
  );
}
