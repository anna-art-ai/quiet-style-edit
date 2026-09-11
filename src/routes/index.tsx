import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero.jpg";
import editorialImg from "@/assets/editorial.jpg";
import aboutImg from "@/assets/about.jpg";
import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elise Mørk — Personal Stylist & Wardrobe Editing" },
      {
        name: "description",
        content:
          "Personal styling, wardrobe editing and intentional dressing for the modern woman. A quiet, considered approach to personal style.",
      },
      { property: "og:title", content: "Elise Mørk — Personal Stylist" },
      {
        property: "og:description",
        content:
          "Personal styling, wardrobe editing and intentional dressing for the modern woman.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAME = "ELISE MØRK";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Style Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    n: "01",
    title: "Wardrobe Edit",
    body: "A considered edit of your existing wardrobe, helping you remove what no longer serves you and discover what truly works.",
    image: journal1,
  },
  {
    n: "02",
    title: "Personal Styling",
    body: "A personalised styling experience built around your lifestyle, proportions, personality and aesthetic.",
    image: aboutImg,
  },
  {
    n: "03",
    title: "Shopping & Curation",
    body: "Thoughtfully selected pieces that complement your wardrobe and create a cohesive personal style.",
    image: journal2,
  },
  {
    n: "04",
    title: "Occasion Styling",
    body: "Refined looks for events, travel, celebrations and the moments that ask for a little more.",
    image: journal3,
  },
];

const JOURNAL = [
  {
    n: "01",
    title: "The Capsule Wardrobe",
    body: "How to build a wardrobe that works harder with less.",
    image: journal1,
  },
  {
    n: "02",
    title: "The Art of Neutrals",
    body: "Why a muted palette creates effortless style.",
    image: journal2,
  },
  {
    n: "03",
    title: "Dressing With Intention",
    body: "A modern approach to personal style.",
    image: journal3,
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
        scrolled || open ? "bg-background/95 backdrop-blur-[2px]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <a
          href="#top"
          className="display text-lg tracking-[0.3em] text-foreground md:text-xl"
        >
          {NAME}
        </a>

        <nav className="hidden items-center gap-12 lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="label-xs link-underline text-charcoal">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="label-xs link-hairline text-olive">
            Book a Consultation
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-end justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`block h-px bg-foreground transition-all duration-500 ${
              open ? "w-6 translate-y-[3.5px] rotate-45" : "w-7"
            }`}
          />
          <span
            className={`block h-px bg-foreground transition-all duration-500 ${
              open ? "w-6 -translate-y-[3.5px] -rotate-45" : "w-5"
            }`}
          />
        </button>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="h-px w-full bg-border" />
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-background transition-[max-height,opacity] duration-700 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-8 px-6 py-14">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display text-4xl text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="label-xs link-hairline mt-4 self-start text-olive"
          >
            Book a Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}

function Index() {
  useReveal();

  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />

      {/* 1. HERO */}
      <section className="relative pt-32 md:pt-40">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-[1fr_1.05fr] lg:items-end lg:gap-20">
          <div data-reveal className="reveal pb-4 lg:pb-20">
            <p className="label-xs">Personal Stylist</p>

            <h1 className="display mt-8 text-[clamp(3rem,9vw,7.5rem)] text-foreground">
              {NAME}
            </h1>

            <div className="mt-12 flex gap-8">
              <span aria-hidden className="mt-2 block w-px shrink-0 self-stretch bg-border" />
              <div className="max-w-md">
                <p className="display text-[clamp(1.5rem,2.4vw,2.15rem)] italic leading-[1.35] text-charcoal">
                  “Style is not about having more. It is about knowing what belongs.”
                </p>
                <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-taupe">
                  Personal styling, wardrobe editing and intentional dressing for the modern
                  woman.
                </p>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-12 gap-y-6">
              <a
                href="#services"
                className="label-xs border border-foreground px-9 py-4 text-foreground transition-colors duration-500 hover:bg-foreground hover:text-background"
              >
                Explore Services
              </a>
              <a href="#contact" className="label-xs link-underline text-olive">
                Book a Consultation →
              </a>
            </div>
          </div>

          <div data-reveal className="reveal img-frame">
            <img
              src={heroImg}
              alt="Stylist in an oversized cream coat and olive tailored trousers in a minimal concrete interior"
              width={1200}
              height={1600}
              className="h-[65vh] w-full object-cover md:h-[88vh]"
            />
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section className="mx-auto max-w-[1600px] px-6 py-32 md:px-12 md:py-52">
        <div className="h-px w-full bg-border" />
        <div className="grid grid-cols-1 gap-14 pt-20 lg:grid-cols-[auto_1fr] lg:gap-24">
          <p data-reveal className="reveal label-xs lg:w-40">
            The Philosophy
          </p>

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.25fr_auto_1fr] lg:gap-20">
            <h2
              data-reveal
              className="reveal display text-[clamp(2.25rem,5vw,4.25rem)] text-foreground"
            >
              Your wardrobe should feel as considered as the life you are building.
            </h2>

            <span aria-hidden className="hidden w-px bg-border lg:block" />

            <div data-reveal className="reveal space-y-6 self-end">
              <p className="text-sm font-light leading-[1.9] text-charcoal">
                Personal style is not a trend to be chased. It is a quiet decision, repeated
                daily — a way of dressing that reflects who you are rather than who the season
                suggests you should be.
              </p>
              <p className="text-sm font-light leading-[1.9] text-taupe">
                My work begins with simplicity: fewer pieces, better chosen. Quality over
                quantity, proportion over novelty, timeless over temporary. What remains is a
                wardrobe you trust, and the confidence that comes with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section id="services" className="bg-pearl">
        <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-12 md:py-44">
          <div className="flex items-baseline justify-between">
            <h2 data-reveal className="reveal display text-[clamp(2rem,4vw,3.25rem)]">
              Services
            </h2>
            <p className="label-xs hidden md:block">Four ways to work together</p>
          </div>

          <div className="mt-16 border-t border-border">
            {SERVICES.map((s) => (
              <article
                key={s.n}
                data-reveal
                className="reveal group relative border-b border-border"
              >
                <div className="grid grid-cols-1 gap-4 py-10 transition-[padding] duration-700 md:grid-cols-[6rem_1fr_1.1fr] md:gap-12 md:py-14 md:group-hover:pl-4">
                  <span className="label-xs pt-2 transition-colors duration-500 group-hover:text-olive">
                    {s.n}
                  </span>
                  <h3 className="display text-[clamp(1.75rem,3vw,2.6rem)] text-foreground transition-colors duration-500 group-hover:text-olive">
                    {s.title}
                  </h3>
                  <p className="max-w-md self-center text-sm font-light leading-[1.9] text-taupe">
                    {s.body}
                  </p>
                </div>

                {/* Hover image reveal — desktop only */}
                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-0 w-56 -translate-y-1/2 overflow-hidden opacity-0 transition-all duration-700 group-hover:h-64 group-hover:opacity-100 xl:block">
                  <img
                    src={s.image}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="h-64 w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL IMAGE */}
      <section className="relative">
        <div data-reveal className="reveal img-frame">
          <img
            src={editorialImg}
            alt="Olive tailored blazer, linen throw and a black leather bag in a warm minimalist interior"
            width={1920}
            height={1088}
            loading="lazy"
            className="h-[60vh] w-full object-cover md:h-[85vh]"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-6 pb-10 md:px-12 md:pb-16">
          <div className="max-w-sm border-l border-floral/50 pl-6">
            <p className="label-xs text-floral/80">The Art of Less</p>
            <p className="display mt-3 text-2xl italic text-floral md:text-3xl">
              “Less noise. More intention.”
            </p>
          </div>
        </div>
      </section>

      {/* 5. ABOUT */}
      <section id="about" className="mx-auto max-w-[1600px] px-6 py-32 md:px-12 md:py-52">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_auto_1fr] lg:gap-24">
          <div data-reveal className="reveal img-frame">
            <img
              src={aboutImg}
              alt="Portrait of stylist Elise Mørk in a bone knit beside a rail of neutral garments"
              width={1008}
              height={1312}
              loading="lazy"
              className="h-[70vh] w-full object-cover"
            />
          </div>

          <span aria-hidden className="hidden w-px bg-border lg:block" />

          <div data-reveal className="reveal self-center">
            <p className="label-xs">About the Stylist</p>
            <h2 className="display mt-8 text-[clamp(2.25rem,4.5vw,3.75rem)] text-foreground">
              {NAME}
            </h2>
            <div className="mt-10 space-y-6">
              <p className="text-sm font-light leading-[1.9] text-charcoal">
                I have spent fifteen years between Copenhagen and Paris, dressing women who
                want their clothes to do more with less. My work sits somewhere between
                styling and editing — closer to interior design than to fashion.
              </p>
              <p className="text-sm font-light leading-[1.9] text-taupe">
                Each collaboration begins with conversation: your days, your rooms, your
                proportions, the things you already love. From there we build slowly, keeping
                only what earns its place.
              </p>
            </div>
            <a href="#contact" className="label-xs link-underline mt-12 inline-block text-olive">
              Read My Story →
            </a>
          </div>
        </div>
      </section>

      {/* 6. STYLE JOURNAL */}
      <section id="journal" className="bg-pearl">
        <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-12 md:py-44">
          <div className="flex items-baseline justify-between border-b border-border pb-8">
            <h2 data-reveal className="reveal display text-[clamp(2rem,4vw,3.25rem)]">
              Style Journal
            </h2>
            <a href="#journal" className="label-xs link-underline hidden md:inline-block">
              All Entries
            </a>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-20 pt-16 md:grid-cols-3">
            {JOURNAL.map((a, i) => (
              <article
                key={a.n}
                data-reveal
                className="reveal group"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <a href="#journal" className="block">
                  <div className="img-frame">
                    <img
                      src={a.image}
                      alt={a.title}
                      width={900}
                      height={1150}
                      loading="lazy"
                      className="h-[46vh] w-full object-cover md:h-[52vh]"
                    />
                  </div>
                  <div className="mt-7 flex gap-6">
                    <span className="label-xs pt-1">{a.n}</span>
                    <div>
                      <h3 className="display text-2xl text-foreground transition-colors duration-500 group-hover:text-olive md:text-[1.75rem]">
                        {a.title}
                      </h3>
                      <p className="mt-3 text-sm font-light leading-[1.9] text-taupe">
                        {a.body}
                      </p>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL */}
      <section className="mx-auto max-w-[1600px] px-6 py-32 md:px-12 md:py-52">
        <div data-reveal className="reveal mx-auto max-w-4xl text-center">
          <span aria-hidden className="mx-auto mb-14 block h-16 w-px bg-border" />
          <blockquote className="display text-[clamp(1.85rem,4.2vw,3.4rem)] italic leading-[1.35] text-foreground">
            “Working with Elise completely changed the way I see my wardrobe.”
          </blockquote>
          <p className="label-xs mt-12">— Johanna Lind, Copenhagen</p>
        </div>
      </section>

      {/* 8. CTA */}
      <section id="contact" className="bg-ink">
        <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-12 md:py-48">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_auto_0.8fr] lg:gap-20">
            <h2
              data-reveal
              className="reveal display text-[clamp(2.5rem,6.5vw,5.5rem)] text-floral"
            >
              Your style,
              <br />
              considered.
            </h2>

            <span aria-hidden className="hidden w-px bg-floral/20 lg:block" />

            <div data-reveal className="reveal self-end">
              <p className="max-w-sm text-sm font-light leading-[1.9] text-bone">
                Let's create a wardrobe that feels unmistakably you.
              </p>
              <a
                href="mailto:studio@elisemork.com"
                className="label-xs mt-10 inline-block border border-olive bg-olive px-10 py-4 text-floral transition-colors duration-500 hover:bg-transparent hover:text-bone"
              >
                Book a Private Consultation →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-background">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-28">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="display text-xl tracking-[0.3em] text-foreground">{NAME}</p>
              <p className="mt-6 max-w-xs text-sm font-light leading-[1.9] text-taupe">
                Personal styling studio. Copenhagen & Paris, by appointment.
              </p>
            </div>

            <nav className="flex flex-col gap-4">
              <a href="#contact" className="label-xs link-underline self-start">Contact</a>
              <a href="#services" className="label-xs link-underline self-start">Services</a>
              <a href="#about" className="label-xs link-underline self-start">About</a>
              <a href="#journal" className="label-xs link-underline self-start">Style Journal</a>
              <a href="#top" className="label-xs link-underline self-start">Privacy</a>
            </nav>

            <nav className="flex flex-col gap-4">
              <a href="https://instagram.com" className="label-xs link-underline self-start">
                Instagram
              </a>
              <a href="https://pinterest.com" className="label-xs link-underline self-start">
                Pinterest
              </a>
              <a
                href="mailto:studio@elisemork.com"
                className="label-xs link-underline self-start"
              >
                studio@elisemork.com
              </a>
            </nav>
          </div>

          <div className="mt-20 h-px w-full bg-border" />
          <p className="label-xs mt-8">© 2026 {NAME} — All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
