import { About } from "@/components/about";
import { Audience } from "@/components/audience";
import { Connect } from "@/components/connect";
import { Coupon } from "@/components/coupon";
import { Faq } from "@/components/faq";
import { Ghostwriting } from "@/components/ghostwriting";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Services } from "@/components/publishing-services";
import { Testimonials } from "@/components/testimonials";
import { WhyChoose } from "@/components/why-choose";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Audience />
      <Connect />
      <Ghostwriting />
      <HowItWorks />
      <WhyChoose />
      <Coupon />
      <Testimonials />
      <Faq />
    </main>
  );
}
