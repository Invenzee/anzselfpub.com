import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Portfolio | AMZ Self Pub",
  description: "A selection of books published with AMZ Self Pub.",
};

const books = [
  { src: "/images/book-5.png", title: "Simple Way Of Piece Life" },
  { src: "/images/book-3.png", title: "Great Travel At Desert" },
  { src: "/images/book-16.png", title: "The Lady Beauty Scarlett" },
  { src: "/images/book-4.png", title: "Once Upon A Time" },
  { src: "/images/hero-book.png", title: "The Song of Achilles" },
  { src: "/images/about-book.png", title: "Anna's Friends: The Assignment" },
];

export default function PortfolioPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Books"
        title="Portfolio"
        text="A look at covers and titles prepared for authors who wanted their work in readers' hands."
      />
      <section className="bg-white">
        <ul className="mx-auto grid max-w-6xl gap-6 px-5 pb-20 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {books.map((book) => (
            <li key={book.src} className="bg-white p-4 shadow-[0_12px_30px_rgba(5,63,126,0.08)]">
              <Image src={book.src} alt={book.title} width={320} height={440} className="h-80 w-full object-cover" />
              <p className="mt-4 font-medium text-navy">{book.title}</p>
            </li>
          ))}
        </ul>
        <div className="pb-20 text-center">
          <Link href="/book-publishing" className="inline-flex rounded-xl bg-teal px-6 py-3 font-medium text-white">
            Start Book Publishing
          </Link>
        </div>
      </section>
    </main>
  );
}
