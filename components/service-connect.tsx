"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

const covers = ["/images/book-5.png", "/images/hero-book.png", "/images/book-4.png"];

export function ServiceConnect({ title = "Connect With Leading Book Publishers in USA Today" }: { title?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section className="bg-teal text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <form onSubmit={onSubmit}>
          <h2 className="max-w-xl font-heading text-4xl leading-tight sm:text-5xl">{title}</h2>
          <div className="mt-8 grid gap-4 sm:max-w-xl sm:grid-cols-2">
            <input
              name="fullName"
              required
              placeholder="Full Name"
              className="h-12 rounded-full border border-white/40 bg-transparent px-5 text-white outline-none placeholder:text-white/80 focus:border-white"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email*"
              className="h-12 rounded-full border border-white/40 bg-transparent px-5 text-white outline-none placeholder:text-white/80 focus:border-white"
            />
          </div>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex max-w-md items-start gap-3 text-xs leading-relaxed text-white/90">
              <input type="checkbox" required className="mt-1 accent-white" />
              <span>
                We will add your info to our CRM for contacting you regarding your request. For more
                info please consult our privacy policy.
              </span>
            </label>
            <button
              type="submit"
              className="inline-flex h-12 shrink-0 items-center gap-3 rounded-lg bg-navy px-5 text-sm font-medium text-white"
            >
              Subscribe
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70 text-xs">
                ↗
              </span>
            </button>
          </div>
          {sent ? (
            <p className="mt-4 text-sm" role="status">
              You are on the list.
            </p>
          ) : null}
        </form>
        <div className="flex items-end justify-center gap-3">
          {covers.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={180}
              height={260}
              className="h-52 w-auto rounded-sm object-cover shadow-xl sm:h-64"
              style={{ transform: `translateY(${index === 1 ? "-12px" : "0"})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
