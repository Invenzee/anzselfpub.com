export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "what-to-prepare-before-you-publish",
    title: "What to prepare before you publish",
    date: "March 12, 2026",
    excerpt:
      "A manuscript, a trim size, and a clear owner of the retailer account are enough to start. The rest of the schedule depends on editing and design.",
    paragraphs: [
      "Most AMZ Self Pub projects land between a few weeks and about three months. Editing, cover design, and the number of revision rounds move that date more than the upload itself.",
      "Bring the latest manuscript, any images you already own, and the name that should appear on the cover. If the book will be listed on Amazon, the KDP account should be yours so royalties pay to you.",
      "You do not need a finished cover on day one. You do need a genre and a reader in mind, because those two choices drive the edit, the design, and the categories.",
      "If the draft is still unfinished, say so. Ghostwriting and fiction support can start from an outline. Publishing setup should wait until the text is approved.",
    ],
  },
  {
    slug: "when-a-book-needs-more-than-one-isbn",
    title: "When a book needs more than one ISBN",
    date: "April 2, 2026",
    excerpt:
      "Paperback, hardcover, and ebook are different editions. Each format that uses an ISBN generally needs its own number.",
    paragraphs: [
      "An ISBN identifies a specific edition. A paperback and a hardcover of the same story are not the same product, so they should not share one number.",
      "Ebook retailers sometimes assign their own identifier. If you also want a separate ISBN on the ebook, that is a second decision, not a duplicate of the print ISBN.",
      "Reusing a print ISBN on a new trim size or a heavily revised text creates a mismatch between the number and the book in a store’s system. When the edition changes, ask for a new number before the files are uploaded.",
      "AMZ Self Pub can include ISBN guidance in the publishing setup. You keep the registration in your name.",
    ],
  },
  {
    slug: "how-early-reviews-should-work",
    title: "How early reviews should work",
    date: "May 18, 2026",
    excerpt:
      "Early readers help you learn if the book is clear. They are not a substitute for honest reviews, and the copy you send should match the book you publish.",
    paragraphs: [
      "Send advance copies only when the text is the one you intend to publish. Reviewers cannot fairly comment on a draft you plan to rewrite.",
      "Tell readers it is an advance copy, give them a date, and make it easy to reply. A short list of the right readers beats a large list of people who do not read your genre.",
      "Do not pay for a promise of a five-star review. Ask for an honest reaction, and use the notes to fix typos or a confusing chapter before launch.",
      "After publication, point readers to the retailer page. Early notes are for you. Public reviews belong on the store, written by the reader.",
    ],
  },
  {
    slug: "what-changes-the-cost-of-self-publishing",
    title: "What changes the cost of self-publishing",
    date: "June 9, 2026",
    excerpt:
      "The invoice follows the work: length, editing depth, illustration, print quantity, and whether you need marketing after the files are done.",
    paragraphs: [
      "A short ebook with light editing costs less than a long novel that needs a developmental edit, a custom cover, and a print run. Page count and art are the usual reasons a quote moves.",
      "Ask for the stage prices in writing: writing or editing, cover, formatting, publishing setup, print, and promotion. Approving one stage does not commit you to the next until you say so.",
      "Printing is priced on quantity, color, and binding. A proof copy is cheaper than discovering a margin error after a large run.",
      "AMZ Self Pub confirms scope before a stage starts. If you only need formatting, you do not have to buy a full marketing package to get the interior done.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
