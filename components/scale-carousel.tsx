"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export function ScaleCarousel({
  slides,
  ariaLabel,
  initial = 1,
}: {
  slides: ReactNode[];
  ariaLabel: string;
  initial?: number;
}) {
  const [active, setActive] = useState(Math.min(initial, slides.length - 1));
  const [offset, setOffset] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prev = () => setActive((index) => (index - 1 + slides.length) % slides.length);
  const next = () => setActive((index) => (index + 1) % slides.length);

  useEffect(() => {
    const frame = frameRef.current;
    const track = trackRef.current;
    if (!frame || !track) return;

    const center = () => {
      const slide = track.children[active] as HTMLElement | undefined;
      if (!slide) return;
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      setOffset(frame.clientWidth / 2 - slideCenter);
    };

    center();
    const observer = new ResizeObserver(center);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [active, slides.length]);

  return (
    <div className="relative w-full max-w-full">
      <div
        ref={frameRef}
        className="w-full max-w-full overflow-hidden py-6"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
      >
        <div
          ref={trackRef}
          className="flex w-max items-center transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {slides.map((slide, index) => {
            const isActive = index === active;
            return (
              <div
                key={index}
                className="w-[min(18rem,78vw)] shrink-0 px-2 transition-transform duration-300 ease-out sm:w-[20rem]"
                style={{
                  transform: `scale(${isActive ? 1 : 0.86})`,
                  zIndex: isActive ? 2 : 1,
                }}
              >
                <button type="button" className="block w-full text-left" onClick={() => setActive(index)} aria-current={isActive}>
                  {slide}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-2 flex justify-center gap-3">
        <button
          type="button"
          aria-label="Previous"
          onClick={prev}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-navy shadow-sm"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={next}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-white shadow-sm"
        >
          →
        </button>
      </div>
    </div>
  );
}
