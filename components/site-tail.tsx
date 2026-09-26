import { Coupon } from "@/components/coupon";
import { Faq } from "@/components/faq";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { WhyChoose } from "@/components/why-choose";

export function SiteTail() {
  return (
    <>
      <HowItWorks />
      <WhyChoose />
      <Coupon />
      <Testimonials />
      <Faq />
    </>
  );
}
