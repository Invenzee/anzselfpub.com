"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const books = [
  { src: "/images/carousel-1.png", alt: "The Little Star's Big Journey", width: 355, height: 520 },
  { src: "/images/carousel-2.png", alt: "The Universe Within", width: 355, height: 520 },
  { src: "/images/carousel-3.png", alt: "Ignite Your Growth", width: 355, height: 520 },
  { src: "/images/carousel-4.png", alt: "The Coven", width: 355, height: 520 },
  { src: "/images/carousel/book-5.png", alt: "Simple Way Of Piece Life", width: 900, height: 1306 },
  { src: "/images/carousel/book-16.png", alt: "The Lady Beauty Scarlett", width: 900, height: 1306 },
  { src: "/images/carousel/book-4.png", alt: "Once Upon A Time", width: 900, height: 1306 },
];

function BookCard({
  book,
  className,
  hidden = false,
}: {
  book: (typeof books)[number];
  className: string;
  hidden?: boolean;
}) {
  return (
    <article aria-hidden={hidden || undefined} className={className}>
      <Image
        src={book.src}
        alt={hidden ? "" : book.alt}
        width={book.width}
        height={book.height}
        sizes="(min-width: 1024px) 25vw, 80vw"
        className="block h-auto w-full"
      />
    </article>
  );
}

export function Audience() {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function updateActive() {
    const root = scroller.current;
    if (!root || root.clientWidth === 0) return;
    const cards = [...root.children] as HTMLElement[];
    const center = root.scrollLeft + root.clientWidth / 2;
    let closest = 0;
    let best = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - center);
      if (distance < best) {
        best = distance;
        closest = index;
      }
    });

    setActive(closest);
  }

  function scrollTo(index: number) {
    setActive(index);
    const root = scroller.current;
    const card = root?.children[index] as HTMLElement | undefined;
    if (!root || !card || root.clientWidth === 0) return;
    const left = card.offsetLeft - (root.clientWidth - card.offsetWidth) / 2;
    root.scrollTo({ left, behavior: "smooth" });
  }

  return (
    <section id="books" className="relative overflow-hidden bg-navy text-white">
      <Image
        src="/images/how-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-navy/75" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="mx-auto max-w-3xl text-center font-heading text-4xl leading-tight sm:text-5xl">
          Your Book <span className="text-teal">Deserves</span> a Global Audience
        </h2>
        <div
          ref={scroller}
          onScroll={updateActive}
          className="mt-12 flex snap-x snap-mandatory items-center gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
          aria-roledescription="carousel"
          aria-label="Published books"
        >
          {books.map((book) => (
            <BookCard
              key={book.src}
              book={book}
              className="w-[82%] shrink-0 snap-center sm:w-[46%]"
            />
          ))}
        </div>
        <div
          className="mt-12 hidden overflow-hidden lg:block"
          style={{ containerType: "inline-size" }}
          aria-roledescription="carousel"
          aria-label="Published books"
        >
          <div
            className="flex items-center gap-4 transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(calc(${-active} * (100cqw + 1rem) / 4))` }}
          >
            {[...books, ...books].map((book, index) => (
              <BookCard
                key={`${book.src}-${index}`}
                book={book}
                hidden={index >= books.length}
                className="w-[calc((100cqw-3rem)/4)] shrink-0"
              />
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {books.map((book, index) => (
            <button
              key={book.src}
              type="button"
              aria-label={`Show ${book.alt}`}
              aria-current={index === active}
              onClick={() => scrollTo(index)}
              className={`h-3 w-3 rounded-full ${index === active ? "bg-teal" : "bg-white/70"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
