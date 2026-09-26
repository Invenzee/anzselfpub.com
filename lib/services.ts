export type ServiceContent = {
  slug: string;
  nav: string;
  accent: string;
  headline: string;
  intro: string;
  description: string;
  journeyTitle: string;
  journey: string;
  includesTitle: string;
  includes: string[];
  details: { title: string; body: string }[];
  steps: string[];
};

export const services: ServiceContent[] = [
  {
    slug: "book-editing",
    nav: "Book Editing",
    accent: "Professional",
    headline: "Book Editing",
    intro:
      "AMZ Self Pub editors refine structure, clarity, and flow while keeping your voice intact, so the manuscript is ready for print and digital release.",
    description:
      "Professional book editing for authors who want a clean, publication-ready manuscript.",
    journeyTitle: "Editing that keeps your voice in the lead",
    journey:
      "A first draft rarely needs a new author. It needs a careful editor. We read for structure, pacing, grammar, and consistency, then return notes you can act on. Developmental feedback, line editing, and a final polish stay in one workflow, so you are not passing the same file between several vendors.",
    includesTitle: "What book editing includes",
    includes: [
      "Developmental notes on structure and pacing",
      "Line editing for clarity and tone",
      "Copy editing for grammar and consistency",
      "A final read before design and formatting",
    ],
    details: [
      {
        title: "One editing path",
        body: "Structural feedback, line edits, and proofreading sit in a single project, with a clear handoff into formatting and cover design when you are ready.",
      },
      {
        title: "You approve the changes",
        body: "Editors suggest. You decide. Nothing is rewritten into a voice that is not yours, and you keep full ownership of the manuscript.",
      },
      {
        title: "Ready for the next stage",
        body: "The edited file is prepared so formatting, cover design, and publishing setup can start without another round of cleanup.",
      },
    ],
    steps: ["Consultation", "Manuscript review", "Editorial pass", "Your revisions", "Final polish", "Handoff"],
  },
  {
    slug: "book-marketing",
    nav: "Book Marketing",
    accent: "Professional",
    headline: "Book Marketing",
    intro:
      "AMZ Self Pub plans campaigns that put your book in front of the readers most likely to buy it, from launch week through the months that follow.",
    description: "Author-focused book marketing for launch visibility and ongoing sales.",
    journeyTitle: "A plan for readers, not just a listing",
    journey:
      "A published book still needs a way to be found. We shape the audience, the message, and the channels: metadata, category placement, launch timing, and promotion that matches your genre. You see what is being done and why, and you keep the rights and royalties.",
    includesTitle: "What book marketing includes",
    includes: [
      "Audience and positioning notes",
      "Metadata, categories, and keywords",
      "Launch timing and promotion plan",
      "Author profile and listing copy",
    ],
    details: [
      {
        title: "Built around the book",
        body: "Campaigns follow the genre, the promise on the cover, and the readers already looking for that kind of story or guide.",
      },
      {
        title: "Clear reporting",
        body: "You get a written plan before spend or outreach begins, so the work matches the budget you approved.",
      },
      {
        title: "Your accounts stay yours",
        body: "Retailer accounts, ad accounts, and royalties remain in your name. We set up and advise. We do not take ownership.",
      },
    ],
    steps: ["Consultation", "Audience review", "Campaign plan", "Listing updates", "Launch support", "Follow-up"],
  },
  {
    slug: "amazon-publishing",
    nav: "Amazon Publishing",
    accent: "Amazon",
    headline: "Publishing Setup",
    intro:
      "AMZ Self Pub prepares your book for Amazon KDP, from a compliant interior and cover to categories, keywords, and a listing you approve before it goes live.",
    description: "KDP setup, formatting, and listing support while you keep ownership and royalties.",
    journeyTitle: "From manuscript to a live Amazon listing",
    journey:
      "Kindle and print each have their own file rules. We format the interior, check the cover against trim size, and walk the KDP fields with you: description, categories, keywords, and pricing. You approve the files and the listing. Royalties go to your account.",
    includesTitle: "What Amazon publishing includes",
    includes: [
      "Kindle and print file preparation",
      "Cover sized for the chosen trim",
      "Category, keyword, and description support",
      "A review of the listing before publish",
    ],
    details: [
      {
        title: "KDP requirements handled",
        body: "Interiors, covers, and metadata are checked against the format you chose so the upload is not rejected for a technical miss.",
      },
      {
        title: "You stay the publisher of record",
        body: "The KDP account is yours. We configure and explain the settings. Pricing and distribution choices are approved by you.",
      },
      {
        title: "Print and digital together",
        body: "Ebook and paperback can be prepared in the same project, with files that match each edition.",
      },
    ],
    steps: ["Consultation", "File prep", "Cover check", "Listing setup", "Your approval", "Publish"],
  },
  {
    slug: "audio-book-narration",
    nav: "Audio Book Narration",
    accent: "Audiobook",
    headline: "Narration",
    intro:
      "AMZ Self Pub turns your book into a listened-to edition, with narration and production aimed at a clean, retail-ready audiobook.",
    description: "Narration and audio production for authors adding an audiobook edition.",
    journeyTitle: "Your book, read the way it was written",
    journey:
      "Listeners stay with a voice that fits the book. We start with the tone, pace, and audience, then produce a narration you can review. Files are prepared for the audiobook retailers you choose, and the recording rights stay with you.",
    includesTitle: "What audiobook narration includes",
    includes: [
      "Voice direction based on genre and tone",
      "A produced narration of the approved text",
      "Review notes before final delivery",
      "Files prepared for audiobook distribution",
    ],
    details: [
      {
        title: "Matched to the manuscript",
        body: "Pronunciation, character tone, and pacing are set from your book, not from a generic read.",
      },
      {
        title: "You hear it before it ships",
        body: "You review the narration and request adjustments within the agreed revision round before files are finalized.",
      },
      {
        title: "Ready to distribute",
        body: "The delivered audio is organized for the platforms in your project agreement.",
      },
    ],
    steps: ["Consultation", "Script prep", "Narration", "Your review", "Final audio", "Delivery"],
  },
  {
    slug: "authors-website",
    nav: "Authors Website",
    accent: "Author",
    headline: "Website",
    intro:
      "AMZ Self Pub builds a simple author site where readers can find your books, your story, and a way to reach you.",
    description: "Author websites that present your books and give readers a place to connect.",
    journeyTitle: "A home for the books, not a template dump",
    journey:
      "Readers look up the author after they like the cover. We design a site that shows the books, a short bio, and a contact path, with pages that load cleanly on a phone. You review the layout before it goes live, and the site is yours.",
    includesTitle: "What an author website includes",
    includes: [
      "Home, books, about, and contact pages",
      "Covers and buy links you approve",
      "A layout that works on mobile",
      "A handoff so you can update the basics",
    ],
    details: [
      {
        title: "Built around the catalog",
        body: "Each book gets a clear place: cover, short description, and the retailer links you want readers to use.",
      },
      {
        title: "Your name on the site",
        body: "The domain and accounts stay in your name. We design and launch. We do not keep the site as our property.",
      },
      {
        title: "Easy to maintain",
        body: "After launch you can change bios, covers, and links without starting the project over.",
      },
    ],
    steps: ["Consultation", "Site map", "Design", "Your review", "Build", "Launch"],
  },
  {
    slug: "book-cover-design",
    nav: "Book Cover Design",
    accent: "Custom",
    headline: "Cover Design",
    intro:
      "AMZ Self Pub designs covers that signal the genre at a glance and meet the print and ebook specs for the edition you are publishing.",
    description: "Market-aware book covers for print and ebook editions.",
    journeyTitle: "The cover is the first page a reader sees",
    journey:
      "We start with genre, audience, and the feeling the book should give in a thumbnail. Designers prepare directions for you to choose from, then finish a full wrap or ebook cover sized for your trim and page count. You approve the final art before it is used anywhere.",
    includesTitle: "What cover design includes",
    includes: [
      "Genre and reference review",
      "Cover directions for you to choose",
      "Front, spine, and back when you need print",
      "Files sized for ebook and print",
    ],
    details: [
      {
        title: "Designed for the shelf",
        body: "Type, image, and color are chosen so the book reads correctly next to others in the same category.",
      },
      {
        title: "Revisions stay on the agreed concept",
        body: "We revise the selected direction until it matches the brief. A new concept after approval is scoped separately.",
      },
      {
        title: "Print-ready files",
        body: "Final exports include the formats your printer or retailer requires, including spine width when the page count is known.",
      },
    ],
    steps: ["Consultation", "References", "Concepts", "Your choice", "Revisions", "Final files"],
  },
  {
    slug: "book-formatting",
    nav: "Book Formatting",
    accent: "Interior",
    headline: "Formatting",
    intro:
      "AMZ Self Pub lays out your manuscript for paperback, hardcover, and ebook so chapters, headings, and images follow a consistent, readable design.",
    description: "Print and ebook formatting that meets retailer and printer requirements.",
    journeyTitle: "A manuscript becomes a book people can read",
    journey:
      "Formatting is the difference between a document and a book. We set margins, type, chapter openings, and images for the trim size and ebook format in your agreement. You review a proof before final files are exported.",
    includesTitle: "What book formatting includes",
    includes: [
      "Print interior for your trim size",
      "Reflowable or fixed ebook layout as agreed",
      "Chapter styles, headings, and page elements",
      "A proof for you to approve",
    ],
    details: [
      {
        title: "Built to the spec",
        body: "Margins, bleed, and heading styles follow the printer or retailer requirements for the edition you chose.",
      },
      {
        title: "Consistent from chapter one",
        body: "Scene breaks, lists, images, and front matter use the same system all the way through the book.",
      },
      {
        title: "Proof before export",
        body: "You see the laid-out pages and mark corrections before we export the final print and ebook files.",
      },
    ],
    steps: ["Consultation", "Style setup", "Layout", "Your proof", "Corrections", "Export"],
  },
  {
    slug: "book-printing",
    nav: "Book Printing",
    accent: "Print",
    headline: "Production",
    intro:
      "AMZ Self Pub prepares and manages print production so the finished book matches the approved interior, cover, and paper choices.",
    description: "Print production for authors who want a physical book that matches the approved files.",
    journeyTitle: "From approved files to a book you can hold",
    journey:
      "Printing starts only after you sign off on the interior and cover. We confirm trim, paper, binding, and quantity, then manage the handoff to production. Damaged copies from a print run we managed are replaced. Correctly printed books are made to order and are not returned as stock.",
    includesTitle: "What book printing includes",
    includes: [
      "Trim, paper, and binding options",
      "Prepress check of approved files",
      "Production of the agreed quantity",
      "Replacement of copies that arrive damaged",
    ],
    details: [
      {
        title: "Specs agreed up front",
        body: "Page count, color or black-and-white, and binding are written down before the press run, so the quote matches the book.",
      },
      {
        title: "Files checked first",
        body: "We look for trim, bleed, and spine issues before production so a preventable error does not become a printed one.",
      },
      {
        title: "Made for your order",
        body: "Copies are produced for the quantity you approved. We do not warehouse unsold books unless that was part of the agreement.",
      },
    ],
    steps: ["Consultation", "Specs", "File check", "Your approval", "Production", "Delivery"],
  },
  {
    slug: "children-book",
    nav: "Children Book",
    accent: "Children's",
    headline: "Books",
    intro:
      "AMZ Self Pub helps you shape a children's book that fits the age you are writing for, from the story and illustrations through print and ebook files.",
    description: "Children's book development, illustration coordination, and publishing setup.",
    journeyTitle: "Written and pictured for the age you chose",
    journey:
      "A picture book, early reader, and middle-grade novel are different jobs. We match length, language, and art direction to the age range, then carry the project through layout and publishing setup. You approve the story and the art before files are finalized.",
    includesTitle: "What children's book support includes",
    includes: [
      "Age-range and format guidance",
      "Story editing suited to young readers",
      "Illustration and layout coordination",
      "Print and ebook files for the final book",
    ],
    details: [
      {
        title: "The right length and tone",
        body: "We keep vocabulary, sentence length, and page count in line with the readers you named at the start.",
      },
      {
        title: "Art that serves the story",
        body: "Illustration direction follows the manuscript you approved, with reviews before final art is locked.",
      },
      {
        title: "Parents and kids can both use it",
        body: "Print trim and ebook layout are chosen so the book is comfortable to read aloud or alone.",
      },
    ],
    steps: ["Consultation", "Story", "Art direction", "Your review", "Layout", "Publish"],
  },
  {
    slug: "ebook-writing",
    nav: "Ebook Writing",
    accent: "Ebook",
    headline: "Writing",
    intro:
      "AMZ Self Pub writes and structures ebooks for digital readers, from a short guide to a full-length book you can publish under your name.",
    description: "Ebook writing and structure for authors publishing a digital-first book.",
    journeyTitle: "Written for the screen, owned by you",
    journey:
      "Digital readers skim, search, and finish books in shorter sittings. We outline the ebook with you, write in your voice, and edit for a clean reading experience on phones and e-readers. The finished manuscript is yours to publish.",
    includesTitle: "What ebook writing includes",
    includes: [
      "An outline you approve before drafting",
      "A full draft in the agreed length",
      "Editing for clarity and flow",
      "A manuscript ready for ebook formatting",
    ],
    details: [
      {
        title: "Scoped before writing starts",
        body: "Topic, audience, chapter count, and word count are agreed in writing so the draft matches the book you asked for.",
      },
      {
        title: "Your name, your rights",
        body: "You remain the author. We do not claim copyright in the manuscript we write for you under the project agreement.",
      },
      {
        title: "Built to be formatted",
        body: "Headings and chapters are structured so ebook formatting is straightforward once you approve the text.",
      },
    ],
    steps: ["Consultation", "Outline", "Draft", "Your notes", "Edit", "Delivery"],
  },
  {
    slug: "fiction-writing",
    nav: "Fiction Writing",
    accent: "Fiction",
    headline: "Writing",
    intro:
      "AMZ Self Pub develops fiction with you, from premise and outline through a manuscript that holds a reader's attention.",
    description: "Fiction development and manuscript writing across genre, with you directing the story.",
    journeyTitle: "A story with a shape, not just a pile of scenes",
    journey:
      "We start with the premise, the stakes, and the ending you want. Writers and editors then build the outline, draft, and revise with your notes. Genre conventions are respected, and the creative decisions stay yours.",
    includesTitle: "What fiction writing includes",
    includes: [
      "Premise and outline you approve",
      "Drafting in the genre you chose",
      "Revision from your story notes",
      "An edit for pace, clarity, and continuity",
    ],
    details: [
      {
        title: "Plot before pages",
        body: "The outline locks characters, turns, and ending so the draft does not wander away from the book you described.",
      },
      {
        title: "Your world stays yours",
        body: "Names, themes, and turning points change only with your approval. You own the finished story.",
      },
      {
        title: "Continuity on the way out",
        body: "The editorial pass checks timeline, character details, and chapter flow before the manuscript is delivered.",
      },
    ],
    steps: ["Consultation", "Outline", "Draft", "Your notes", "Revision", "Delivery"],
  },
  {
    slug: "ghost-writing",
    nav: "Ghostwriting",
    accent: "Ghostwriting",
    headline: "for Your Book",
    intro:
      "AMZ Self Pub ghostwriters turn your interviews, notes, and outline into a manuscript that reads like you wrote it, and the rights stay with you.",
    description: "Ghostwriting for memoirs, business books, and fiction, written from your material.",
    journeyTitle: "Your ideas, written in a voice readers can follow",
    journey:
      "Ghostwriting starts with what you already know. We interview, outline, and draft, then revise from your comments. Research is documented, and the manuscript is checked before delivery. You are the author on the book.",
    includesTitle: "What ghostwriting includes",
    includes: [
      "Interviews and a source outline",
      "A draft in the length you agreed",
      "Revisions from your notes",
      "An edited manuscript ready for design",
    ],
    details: [
      {
        title: "Built from your material",
        body: "Stories, arguments, and examples come from you. We organize and write them. We do not invent a book you did not ask for.",
      },
      {
        title: "Research you can stand behind",
        body: "Factual books get sourced notes so claims can be checked before the manuscript is called final.",
      },
      {
        title: "You own the work",
        body: "Under the project agreement, copyright in the delivered manuscript belongs to you.",
      },
    ],
    steps: ["Consultation", "Interviews", "Outline", "Draft", "Your revisions", "Delivery"],
  },
  {
    slug: "proof-reading",
    nav: "Proof Reading",
    accent: "Final",
    headline: "Proofreading",
    intro:
      "AMZ Self Pub proofreads the near-final pages so typos, punctuation, and layout slips are caught before the book is published or printed.",
    description: "Last-pass proofreading for manuscripts and designed pages.",
    journeyTitle: "The last read before readers see it",
    journey:
      "Proofreading is not a rewrite. We check spelling, punctuation, grammar, and obvious layout errors on the version you are about to publish. You receive a marked file and a clean summary of what changed.",
    includesTitle: "What proofreading includes",
    includes: [
      "Spelling, grammar, and punctuation",
      "Consistency of names and terms",
      "A check of headings and page elements",
      "A marked file plus a clean summary",
    ],
    details: [
      {
        title: "A last pass, not a new draft",
        body: "We correct errors. We do not restyle the book or change the argument unless you ask for a separate edit.",
      },
      {
        title: "Useful on designed pages",
        body: "Proofreading can run on the formatted interior so line breaks and headings are checked, not only the raw document.",
      },
      {
        title: "Clear before you approve print",
        body: "You see every change and sign off before files go to a retailer or a printer.",
      },
    ],
    steps: ["Consultation", "File intake", "Proofread", "Your review", "Corrections", "Final file"],
  },
  {
    slug: "video-trailer",
    nav: "Video Trailer",
    accent: "Book",
    headline: "Video Trailer",
    intro:
      "AMZ Self Pub produces a short trailer that shows the mood of your book and gives you a clip to share at launch.",
    description: "Short book trailers for launch posts, retailer pages, and author sites.",
    journeyTitle: "A clip readers can watch before they buy",
    journey:
      "We pull the tone from the cover, the genre, and a few lines you approve. The trailer is cut for the length in your agreement, with a review round before the final export. You can use the finished video on the channels listed in the project.",
    includesTitle: "What a video trailer includes",
    includes: [
      "A short script or shot list you approve",
      "Visuals matched to the cover and genre",
      "One revision round on the cut",
      "A final file for the channels you named",
    ],
    details: [
      {
        title: "It looks like your book",
        body: "Color, type, and imagery follow the cover and the audience, so the trailer does not feel like a different title.",
      },
      {
        title: "Words you signed off",
        body: "On-screen text and any voiceover come from copy you approved. We do not invent plot points.",
      },
      {
        title: "Exported for sharing",
        body: "You receive a file suited to the placements in the agreement, such as your site or social channels.",
      },
    ],
    steps: ["Consultation", "Script", "Cut", "Your review", "Revision", "Export"],
  },
];

export function getService(slug: string) {
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    throw new Error(`Unknown service: ${slug}`);
  }
  return service;
}
