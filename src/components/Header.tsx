"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { primaryNav } from "@/lib/nav";
import { siteConfig, phoneDisplay } from "@/lib/siteConfig";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppLink, CallLink, LiveChatButton } from "@/components/ActionLinks";
import {
  MenuIcon,
  CloseIcon,
  WhatsAppIcon,
  PhoneIcon,
  ChatIcon,
  InstagramIcon,
  ArrowRight,
} from "@/components/ui/Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change and lock body scroll when open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-400 ease-luxe ${
        solid ? "bg-black/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-4">
        {/* Wordmark (logo image can replace this — see /public/brand) */}
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="font-display text-2xl tracking-wide text-warm-white">CVS</span>
          <span className="hidden text-[10px] uppercase tracking-luxe text-silver sm:inline">
            Car Hire
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="link-underline py-2 text-xs uppercase tracking-wide2 text-warm-white/90"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[220px] border border-line bg-charcoal/95 p-2 backdrop-blur">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-xs uppercase tracking-wide2 text-silver hover:bg-soft hover:text-champagne"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="/fleet" variant="primary" size="md" className="hidden md:inline-flex">
            Check Availability
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center text-warm-white lg:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[var(--header-h)] z-40 overflow-y-auto bg-black lg:hidden"
          >
            <div className="shell flex min-h-full flex-col py-8">
              <nav className="flex flex-col" aria-label="Mobile">
                {primaryNav.map((item) => (
                  <div key={item.href} className="border-b border-line">
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setOpenGroup((g) => (g === item.label ? null : item.label))
                          }
                          className="flex w-full items-center justify-between py-4 text-left font-display text-2xl text-warm-white"
                          aria-expanded={openGroup === item.label}
                        >
                          {item.label}
                          <span className="text-champagne text-lg">
                            {openGroup === item.label ? "–" : "+"}
                          </span>
                        </button>
                        <AnimatePresence>
                          {openGroup === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col pb-3">
                                <Link
                                  href={item.href}
                                  className="py-2 text-sm uppercase tracking-wide2 text-champagne"
                                >
                                  View all {item.label}
                                </Link>
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="py-2 text-sm text-silver"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-4 font-display text-2xl text-warm-white"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-8">
                <ButtonLink href="/fleet" variant="primary" size="lg" className="w-full">
                  Check Availability <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>

              {/* Direct contact CTAs */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <LiveChatButton className="flex flex-col items-center gap-2 border border-line py-4 text-warm-white">
                  <ChatIcon className="h-5 w-5 text-champagne" />
                  <span className="text-[10px] uppercase tracking-wide2">Live Chat</span>
                </LiveChatButton>
                <WhatsAppLink className="flex flex-col items-center gap-2 border border-line py-4 text-warm-white">
                  <WhatsAppIcon className="h-5 w-5 text-champagne" />
                  <span className="text-[10px] uppercase tracking-wide2">WhatsApp</span>
                </WhatsAppLink>
                <CallLink className="flex flex-col items-center gap-2 border border-line py-4 text-warm-white">
                  <PhoneIcon className="h-5 w-5 text-champagne" />
                  <span className="text-[10px] uppercase tracking-wide2">Call</span>
                </CallLink>
              </div>

              <div className="mt-auto pt-8">
                <CallLink className="block font-display text-xl text-warm-white">
                  {phoneDisplay}
                </CallLink>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-silver"
                >
                  <InstagramIcon className="h-4 w-4" /> {siteConfig.social.instagramHandle}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
