import Image from "next/image";
import { CONTACT_EMAIL } from "@/components/hero-actions";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Image
            src="/images/logo-mark-white.png"
            alt="AMZ Self Pub"
            width={81}
            height={88}
            className="h-20 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/90">
            Get An Idea. Get Published. Get Fame. Get Paid. Get Away And Explore.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-bold text-teal">Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed">
            <p>12508 Center St, South Gate, CA 90280, United States</p>
            <p>
              <a href="tel:4564812546664" className="hover:text-teal">
                4564812546664
              </a>
            </p>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-teal">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>
              <a href="https://www.amzselfpub.com" className="hover:text-teal">
                www.amzselfpub.com
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="font-sans text-sm font-bold text-teal">Social Media</h2>
          <ul className="mt-4 flex gap-3">
            {[
              { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
              { label: "Instagram", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" },
              { label: "LinkedIn", path: "M4 9h4v11H4zM6 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6 6h4v1.6c.6-1 2-2 4-2 3.3 0 4 2 4 5.1V20h-4v-5.2c0-1.2 0-2.8-1.8-2.8s-2.2 1.3-2.2 2.7V20h-4z" },
              { label: "X", path: "M4 4l6.5 8.5L4 20h2.2l5.2-6 4.4 6H20l-7-9.2L19.5 4H17l-4.7 5.5L8.4 4z" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href="#contact"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="currentColor">
                    <path d={item.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/20 px-5 py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Powered By amzselfpub . All rights reserved.</p>
        <p>
          <a href="/terms-and-conditions" className="text-teal">
            Terms & Conditions
          </a>
          <span className="px-2 text-white/50">|</span>
          <a href="/privacy-policy" className="text-teal">
            Privacy Policy
          </a>
          <span className="px-2 text-white/50">|</span>
          <a href="/return-and-refund" className="text-teal">
            Return & Refund
          </a>
        </p>
      </div>
    </footer>
  );
}
