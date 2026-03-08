
import HeroSection from "@/sections/HeroSection";
import LogoBar from '@/components/LogoBar';
import ServicesSection from '@/sections/ServicesSection';
import ImpactSection from '@/sections/ImpactSection';
import OurExpertiseSection from '@/sections/OurExpertiseSection';
import OurWork from '@/sections/OurWork';
import VerifiedPartners from '@/sections/VerifiedPartners';
import ProcessSection from '@/sections/ProcessSection';
import EngagementModels from '@/sections/EngagementModels';
import FAQ from '@/sections/FAQ';
import BookCallSection from '@/components/BookCallSection';
import FixedButton from '@/components/FixedButton';



export default function Home() {
  return (
    <main>
      <HeroSection/>
      <LogoBar/>
      <ServicesSection/>
      <ImpactSection/>
      <OurExpertiseSection/>
      <OurWork/>
      <VerifiedPartners/>
      <ProcessSection/>
      <EngagementModels/>
      <FAQ/>
      
      <BookCallSection/>
      <FixedButton/>

  
    </main>
  );
}