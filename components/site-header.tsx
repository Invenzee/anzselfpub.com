"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { services } from "@/lib/services";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services", mega: true },
  { href: "/contact-us", label: "Contact Us" },
];

function isActive(pathname: string, href: string, mega?: boolean) {
  if (href === "/") return pathname === "/";
  if (pathname === href) return true;
  if (!mega) return false;
  return services.some((service) => pathname === `/${service.slug}`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  function closeAll() {
    setOpen(false);
    setServicesOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur"
      onMouseLeave={() => setServicesOpen(false)}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="shrink-0" onClick={closeAll}>
          <Image
            src="/images/logo.png"
            alt="AMZ Self Pub"
            width={108}
            height={87}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-3 text-sm font-medium tracking-wide text-[#111] lg:flex">
          {links.map((link, index) => {
            const active = isActive(pathname, link.href, link.mega);
            return (
              <span key={link.href} className="flex items-center gap-3">
                {index > 0 ? <span className="text-[#d1d1d1]">|</span> : null}
                {link.mega ? (
                  <Link
                    href={link.href}
                    className={active ? "font-extrabold text-teal" : "hover:text-teal"}
                    aria-expanded={servicesOpen}
                    onMouseEnter={() => setServicesOpen(true)}
                    onFocus={() => setServicesOpen(true)}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                ) : (
                  <Link href={link.href} className={active ? "font-extrabold text-teal" : "hover:text-teal"}>
                    {link.label.toUpperCase()}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>

        <Link
          href="/contact-us"
          className="hidden rounded-xl bg-teal px-5 py-3 text-base font-medium text-white transition hover:bg-[#048f88] lg:inline-flex"
        >
          Get Started
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 lg:hidden"
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </span>
        </button>
      </div>

      {servicesOpen ? (
        <div className="absolute inset-x-0 top-full hidden border-t border-black/5 bg-white shadow-[0_18px_40px_rgba(5,63,126,0.12)] lg:block">
          <div className="mx-auto max-w-6xl px-8 py-6">
            <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
              {services.map((service) => {
                const href = `/${service.slug}`;
                const active = pathname === href;
                return (
                  <Link
                    key={service.slug}
                    href={href}
                    className={`rounded-xl px-4 py-3 ${active ? "bg-[#e7f7f4]" : "hover:bg-[#f3fbfa]"}`}
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className={`block text-sm font-semibold ${active ? "text-teal" : "text-navy"}`}>
                      {service.nav}
                    </span>
                    <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-[#5c6570]">
                      {service.description}
                    </span>
                  </Link>
                );
              })}
            </div>
            <Link
              href="/services"
              className="mt-4 inline-flex text-sm font-semibold text-teal"
              onClick={() => setServicesOpen(false)}
            >
              View all services
            </Link>
          </div>
        </div>
      ) : null}

      {open ? (
        <nav className="max-h-[75vh] overflow-y-auto border-t border-black/5 px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium tracking-wide">
            {links.map((link) => {
              const active = isActive(pathname, link.href, link.mega);
              return (
                <li key={link.href}>
                  {link.mega ? (
                    <>
                      <button
                        type="button"
                        className={`flex w-full items-center justify-between ${active ? "font-extrabold text-teal" : "text-[#111]"}`}
                        aria-expanded={servicesOpen}
                        onClick={() => setServicesOpen((value) => !value)}
                      >
                        {link.label.toUpperCase()}
                        <span aria-hidden="true">{servicesOpen ? "−" : "+"}</span>
                      </button>
                      {servicesOpen ? (
                        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {services.map((service) => {
                            const href = `/${service.slug}`;
                            return (
                              <li key={service.slug}>
                                <Link
                                  href={href}
                                  className={`block rounded-lg bg-[#f6fbf9] px-3 py-2 normal-case tracking-normal ${
                                    pathname === href ? "font-semibold text-teal" : "text-[#111]"
                                  }`}
                                  onClick={closeAll}
                                >
                                  {service.nav}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={active ? "font-extrabold text-teal" : "text-[#111]"}
                      onClick={closeAll}
                    >
                      {link.label.toUpperCase()}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact-us"
            className="mt-4 inline-flex rounded-xl bg-teal px-5 py-3 text-base font-medium text-white"
            onClick={closeAll}
          >
            Get Started
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
