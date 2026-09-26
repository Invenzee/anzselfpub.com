type FaqItem = { question: string; answer: string };

export const serviceFaqs: Record<string, FaqItem[]> = {
  "book-editing": [
    {
      question: "What kind of edit do I need?",
      answer:
        "If the plot or argument still moves around, start with a developmental edit. If the structure is set and the sentences need work, use a line edit. Proofreading is only for the version you are about to publish.",
    },
    {
      question: "Will the editor rewrite my voice?",
      answer:
        "No. Notes and line changes are suggestions. You approve what stays. The editor does not replace your point of view with a different style.",
    },
    {
      question: "Can I send a partial manuscript?",
      answer:
        "Yes. Say which chapters are ready. We edit only the pages in the agreement, then you can add later chapters as a separate pass.",
    },
    {
      question: "What do I get back?",
      answer:
        "A marked file and a short note on the largest issues. You can ask for a clean copy after you accept the changes in that round.",
    },
  ],
  "book-marketing": [
    {
      question: "Do you run ads in my account?",
      answer:
        "Only if the agreement says so, and only in an ad account you own. We do not keep the account or the royalties.",
    },
    {
      question: "What is planned before any spend?",
      answer:
        "Audience, categories, keywords, and the launch window are written down first. Promotion does not start until you approve that plan.",
    },
    {
      question: "Can you market a book that is already live?",
      answer:
        "Yes. We can revise the listing copy and set a new push for a title that is already on sale.",
    },
    {
      question: "Is a cover redesign part of marketing?",
      answer:
        "No. Marketing covers listing text, categories, and the promotion plan. A new cover is a design stage with its own fee.",
    },
  ],
  "amazon-publishing": [
    {
      question: "Whose KDP account is used?",
      answer:
        "Yours. We help configure the listing. Royalties pay to the account you control.",
    },
    {
      question: "Do you prepare both Kindle and paperback?",
      answer:
        "Yes, when both are in the scope. Each edition gets its own file check before upload.",
    },
    {
      question: "Who chooses the price and categories?",
      answer:
        "You do. We recommend categories and keywords, then you approve them on the listing.",
    },
    {
      question: "What if KDP rejects a file?",
      answer:
        "We correct trim, margin, or cover errors that come from the files we prepared, and resubmit that edition.",
    },
  ],
  "audio-book-narration": [
    {
      question: "Do I hear a sample before the full book?",
      answer:
        "Yes. We record a short sample in the tone you described. The full narration starts after you approve that read.",
    },
    {
      question: "Can pronunciation be listed in advance?",
      answer:
        "Send names, places, and any words that should not be guessed. Those notes go to the narrator before the session.",
    },
    {
      question: "Who owns the audio?",
      answer:
        "You do. The delivered files are yours to distribute on the platforms named in the agreement.",
    },
    {
      question: "Is retail distribution included?",
      answer:
        "Only if it is written into the project. Otherwise you receive the finished audio and upload it yourself.",
    },
  ],
  "authors-website": [
    {
      question: "Which pages are included?",
      answer:
        "Home, books, about, and contact, unless the agreement adds more. Each book gets a cover, a short description, and the buy links you provide.",
    },
    {
      question: "Do I own the domain?",
      answer:
        "Yes. Register it in your name, or transfer it to you before launch. We do not keep the site as our property.",
    },
    {
      question: "Can I change a cover later?",
      answer:
        "Yes. After handoff you can swap covers, bios, and links without rebuilding the site.",
    },
    {
      question: "Is the site a store?",
      answer:
        "It sends readers to the retailers you choose. Checkout on your own site is a separate build.",
    },
  ],
  "book-cover-design": [
    {
      question: "How many directions do I see?",
      answer:
        "You receive distinct cover directions based on your genre references, then we finish the one you pick. A new concept after that choice is quoted separately.",
    },
    {
      question: "Do you design the spine and back?",
      answer:
        "Yes for print, once the page count and trim are known. Ebook covers are the front only.",
    },
    {
      question: "Can I supply my own photo?",
      answer:
        "Yes, if you have the right to use it. Otherwise we work from licensed art or illustration described in the brief.",
    },
    {
      question: "What files do I receive?",
      answer:
        "Print and ebook exports at the sizes in the agreement, including the spine width for the print edition.",
    },
  ],
  "book-formatting": [
    {
      question: "What do you need before layout starts?",
      answer:
        "The approved manuscript, the trim size, and a note about images or tables. Layout does not begin on a draft you still plan to rewrite.",
    },
    {
      question: "Will print and ebook match?",
      answer:
        "Chapter order and headings match. Page numbers and margins exist only in the print file. The ebook reflows.",
    },
    {
      question: "Can you fix a file another designer started?",
      answer:
        "Yes, if you send the source. We quote that cleanup separately from a layout that starts in our template.",
    },
    {
      question: "Do I see a proof?",
      answer:
        "Yes. You mark corrections on the laid-out pages before we export the final print and ebook files.",
    },
  ],
  "book-printing": [
    {
      question: "When does printing start?",
      answer:
        "After you approve the interior and the cover. We do not send a file to press while comments are still open.",
    },
    {
      question: "Can I order a single proof?",
      answer:
        "Yes. A proof copy is the right check before a larger quantity, and it is priced on its own.",
    },
    {
      question: "What if a copy arrives damaged?",
      answer:
        "We replace copies that arrive damaged from a run we managed. Books that match the approved files are not returned.",
    },
    {
      question: "Do you warehouse leftovers?",
      answer:
        "Only if storage is written into the agreement. Otherwise the quantity you approved is the quantity produced.",
    },
  ],
  "children-book": [
    {
      question: "Which ages do you work with?",
      answer:
        "Picture books, early readers, and middle grade. Tell us the age at the start so length and vocabulary match that reader.",
    },
    {
      question: "Do you illustrate?",
      answer:
        "Illustration is coordinated when it is in the agreement. You approve the art direction before final pages are locked.",
    },
    {
      question: "Can the book be read aloud?",
      answer:
        "Picture-book layouts leave room for that. We choose trim and type with a parent reading beside a child in mind.",
    },
    {
      question: "Is the ebook the same as the print book?",
      answer:
        "The story matches. A fixed layout is used when the pictures have to stay with the words. A reflowing ebook is used only when you ask for it.",
    },
  ],
  "ebook-writing": [
    {
      question: "How long is the ebook?",
      answer:
        "Word count and chapter count are agreed before drafting. A short guide and a full-length book are different projects.",
    },
    {
      question: "Do I approve an outline first?",
      answer:
        "Yes. Writing starts after you accept the outline, so the draft follows the book you described.",
    },
    {
      question: "Who owns the text?",
      answer:
        "You do. The manuscript is written for you under the project agreement, and you are the author on the book.",
    },
    {
      question: "Does this include formatting?",
      answer:
        "The delivery is an edited manuscript ready for ebook formatting. Formatting is a separate stage unless the agreement includes it.",
    },
  ],
  "fiction-writing": [
    {
      question: "Do you write the whole novel?",
      answer:
        "Yes, from an outline you approve. We can also draft the sections you have not written and leave your existing chapters in place.",
    },
    {
      question: "Which genres?",
      answer:
        "Romance, fantasy, thriller, and general fiction. Tell us the genre in the first call so the outline follows those expectations.",
    },
    {
      question: "Can I change the ending?",
      answer:
        "Yes, during the outline or the revision round in your package. A new ending after the draft is approved is additional scope.",
    },
    {
      question: "Will you publish it too?",
      answer:
        "Publishing is separate. Fiction writing ends with a manuscript you have approved.",
    },
  ],
  "ghost-writing": [
    {
      question: "Where does the material come from?",
      answer:
        "From your interviews, notes, and documents. We do not invent a book you did not describe.",
    },
    {
      question: "Will my name be on the cover?",
      answer:
        "Yes. You are the author. The ghostwriter is not credited unless you ask for a credit in writing.",
    },
    {
      question: "How are facts checked?",
      answer:
        "For nonfiction, sourced notes are kept so claims can be reviewed before the manuscript is called final.",
    },
    {
      question: "What if I go quiet during interviews?",
      answer:
        "Tell us to pause. If we hear nothing for the period in your agreement, the project can be held and restarted with the fee stated there.",
    },
  ],
  "proof-reading": [
    {
      question: "Is proofreading the same as editing?",
      answer:
        "No. Proofreading corrects spelling, punctuation, and obvious layout slips. It does not restructure chapters or restyle sentences.",
    },
    {
      question: "Should I proof the Word file or the designed pages?",
      answer:
        "The designed pages, if you have them. That pass catches headings and line breaks the raw document will not show.",
    },
    {
      question: "How are changes shown?",
      answer:
        "You receive a marked file and a short list of what changed, and you sign off before the file goes to a retailer or a printer.",
    },
    {
      question: "Can you proof a book in another language?",
      answer:
        "Only when the agreement names that language and a reader who works in it. Do not assume an English proof covers a translation.",
    },
  ],
  "video-trailer": [
    {
      question: "How long is the trailer?",
      answer:
        "The length is in the agreement, usually a short cut for a site or a social post. A longer cut is a different quote.",
    },
    {
      question: "Who writes the on-screen text?",
      answer:
        "We draft it from your book and you approve every line before the picture is locked.",
    },
    {
      question: "Can you use my cover?",
      answer:
        "Yes. The trailer is built from the cover and the tone of the book so it looks like the same title.",
    },
    {
      question: "Where can I post it?",
      answer:
        "On the channels listed in the project. If you need a retailer-specific cut, say so before export.",
    },
  ],
};

export function getServiceFaqs(slug: string) {
  return serviceFaqs[slug] ?? [];
}
