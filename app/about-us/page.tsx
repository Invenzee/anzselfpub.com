import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/page-banner";
import { Ghostwriting } from "@/components/ghostwriting";

export const metadata: Metadata = {
  title: "About Us | AMZ Self Pub",
  description: "Author-focused self-publishing from manuscript to marketing.",
};

export default function AboutUsPage() {
  return (
    <main>
      <PageBanner
        eyebrow="About Us"
        title="A Streamlined Path to Self-Publishing"
        text="AMZSelfPub provides a simple, flexible, and author-focused self-publishing experience tailored to your goals."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-8">
          <div className="space-y-5 text-base leading-relaxed text-[#5c6570] sm:text-lg">
            <p>
              From manuscript development to publishing, distribution, and marketing, we support
              you throughout the process while keeping your creative vision at the center of every
              step.
            </p>
            <p>
              AMZSelfpub offers a complete publishing experience, supporting writers through
              editing, publishing, and promotion with expert guidance and dedicated support.
            </p>
          </div>
          <Image
            src="/images/about-book.png"
            alt="Anna's Friends, The Assignment"
            width={640}
            height={760}
            className="h-auto w-full object-contain"
          />
        </div>
      </section>
      <Ghostwriting />
    </main>
  );
}
