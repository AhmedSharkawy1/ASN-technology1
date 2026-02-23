import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MenuFeature from "@/components/MenuFeature";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import StrategicFunnel from "@/components/StrategicFunnel";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <StrategicFunnel />
            <MenuFeature />
            <Portfolio />
            <CaseStudies />
            <Testimonials />
            <CTA />
        </>
    );
}
