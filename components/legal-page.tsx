import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageBanner } from "@/components/page-banner";

export function LegalPage({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <main>
      <PageBanner eyebrow={eyebrow} title={title} text={text} />
      <article className="mx-auto max-w-3xl space-y-8 px-5 pb-20 text-base leading-relaxed text-[#3d4650] sm:px-8">
        {children}
      </article>
    </main>
  );
}

export function legalMetadata(title: string, description: string): Metadata {
  return { title: `${title} | AMZ Self Pub`, description };
}
