"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

const defaultItems: FaqItem[] = [
  {
    question: "How do we start?",
    answer:
      "Send the genre, a short description, and the file you have now through the contact form. We reply with the stages that fit that book and the fee for each stage before any work begins.",
  },
  {
    question: "Do you edit a draft that already exists?",
    answer:
      "Yes. Developmental editing looks at structure and pace. Line editing works on clarity and tone. Proofreading is the last pass on spelling and punctuation. You can hire one of those passes or all three.",
  },
  {
    question: "Do I keep the rights and royalties?",
    answer:
      "You remain the author. Retailer accounts and royalties stay in your name. AMZ Self Pub does not claim copyright in your manuscript.",
  },
  {
    question: "Can you help if the book is not finished?",
    answer:
      "Yes. Ghostwriting, fiction writing, and ebook writing can start from an outline or interviews. Publishing setup waits until you have approved the text.",
  },
  {
    question: "Which formats can you prepare?",
    answer:
      "We prepare ebook, paperback, and hardcover files, and we can add audiobook narration or a print run when that stage is in the agreement.",
  },
];

export function Faq({
  items = defaultItems,
  title = "Publishing Questions",
}: {
  items?: FaqItem[];
  title?: string;
}) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="text-center font-heading text-4xl text-navy sm:text-5xl">{title}</h2>
        <ul className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {items.map((item, index) => {
            const expanded = open === index;
            return (
              <li key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-ink sm:gap-6 sm:py-6 sm:text-xl"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : index)}
                >
                  {item.question}
                  <span className="text-teal" aria-hidden="true">
                    {expanded ? "−" : "+"}
                  </span>
                </button>
                {expanded ? <p className="pb-6 text-base leading-relaxed text-muted">{item.answer}</p> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
