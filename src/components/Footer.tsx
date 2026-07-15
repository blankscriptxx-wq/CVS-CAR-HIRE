import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { siteConfig, phoneDisplay } from "@/lib/siteConfig";
import { CallLink, WhatsAppLink } from "@/components/ActionLinks";
import { InstagramIcon, WhatsAppIcon, PhoneIcon } from "@/components/ui/Icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-black">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-3xl text-warm-white">
              CVS <span className="text-champagne">Car Hire</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-silver">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <CallLink className="inline-flex items-center gap-2 text-warm-white hover:text-champagne">
                <PhoneIcon className="h-4 w-4 text-champagne" /> {phoneDisplay}
              </CallLink>
              <WhatsAppLink className="inline-flex items-center gap-2 text-warm-white hover:text-champagne">
                <WhatsAppIcon className="h-4 w-4 text-champagne" /> WhatsApp us
              </WhatsAppLink>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-warm-white hover:text-champagne"
              >
                <InstagramIcon className="h-4 w-4 text-champagne" />{" "}
                {siteConfig.social.instagramHandle}
              </a>
            </div>
            <p className="mt-6 text-xs text-silver">
              {siteConfig.address.locality}, {siteConfig.address.region},{" "}
              {siteConfig.address.country}
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h3 className="font-sans text-[11px] uppercase tracking-luxe text-champagne">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-silver transition-colors hover:text-warm-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-silver">
            <span>Established {siteConfig.foundedYear}</span>
            <span aria-hidden className="text-line">•</span>
            <span>{siteConfig.fleetSize} vehicles</span>
            <span aria-hidden className="text-line">•</span>
            <span>BVRLA member</span>
            <span aria-hidden className="text-line">•</span>
            <span>Birmingham &amp; nationwide UK</span>
          </div>
          <p className="text-xs text-silver">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
