
// import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorks";
import IndustriesSection from "@/components/IndustriesSection";
// import TestimonialSection from "@/components/Testimonial";
import UseCasesSection from "@/components/UseCasesSection";
// import VideoSection from "@/components/VideoSection";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">

      <HeroSection
        title="Build AI Agents That Sound Human — In Any Language"
        subtitle="NeuroVerse powers natural, multilingual conversations across chat, voice, and beyond—no coding required."
        primaryButtonText="Get Started for Free"
        secondaryButtonText="Watch Demo"
      />


      
       <FeatureSection
        title="3. What Can You Do with NeuroVerse?"
        subtitle="Discover the Power of Human-Like AI Agents—Anywhere, in Any Language."
        featuresText="Create advanced AI agents effortlessly without coding, and deploy them across platforms."
      />


      <HowItWorksSection />


     <IndustriesSection/>


        {/* <VideoSection /> */}

      <UseCasesSection /> 



      {/* <AboutSection /> */}
 
      {/* <TestimonialSection /> */}


      <ContactSection />

    </div>
  );
}
