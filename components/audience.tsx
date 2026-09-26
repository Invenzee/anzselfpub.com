import Image from "next/image";

const books = [
  { src: "/images/book-5.png", alt: "Simple Way Of Piece Life", cta: true },
  { src: "/images/book-3.png", alt: "Great Travel At Desert", cta: false },
  { src: "/images/book-16.png", alt: "The Lady Beauty Scarlett", cta: false },
  { src: "/images/book-4.png", alt: "Once Upon A Time", cta: false },
];

export function Audience() {
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
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <li key={book.src} className="bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <div className="relative">
                <Image
                  src={book.src}
                  alt={book.alt}
                  width={260}
                  height={360}
                  className="h-72 w-full object-cover"
                />
                {book.cta ? (
                  <p className="absolute right-3 bottom-4 left-3 bg-teal py-2 text-center text-xs font-semibold tracking-[0.14em] text-white">
                    PUBLISH YOUR BOOK
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-teal" />
          <span className="h-3 w-3 rounded-full bg-white/70" />
          <span className="h-3 w-3 rounded-full bg-white/70" />
          <span className="h-3 w-3 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
