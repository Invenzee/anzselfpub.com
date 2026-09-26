import Link from "next/link";

export const PHONE_NUMBER = "4564812546664";

export function HeroActions({ align = "start" }: { align?: "start" | "center" }) {
  return (
    <div className={`mt-8 flex flex-wrap items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}>
      <Link
        href="/contact-us"
        className="inline-flex rounded-xl bg-teal px-5 py-3 text-base font-medium text-white transition hover:bg-[#048f88]"
      >
        Get Free Consultation
      </Link>
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="inline-flex rounded-xl border border-navy bg-white px-5 py-3 text-base font-medium text-navy"
      >
        {PHONE_NUMBER}
      </a>
    </div>
  );
}
