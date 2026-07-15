"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { CheckIcon } from "@/components/ui/Icons";

const points = [
  { title: "Established since 2014", body: "A decade of experience delivering luxury hire across the UK." },
  { title: "Fleet of over 50 vehicles", body: "From supercars to prestige saloons and luxury 4x4s." },
  { title: "BVRLA member", body: "Members of the British Vehicle Rental & Leasing Association." },
  { title: "Birmingham-based", body: "Local knowledge, local collection, personal service." },
  { title: "Nationwide service", body: "UK-wide delivery available, subject to vehicle and location." },
  { title: "Self-drive & chauffeur", body: "Drive it yourself, or let a professional take the wheel." },
  { title: "Dedicated support", body: "Real people, before, during and after your hire." },
  { title: "Premium fleet, maintained", body: "Every vehicle carefully prepared and presented." },
];

export function WhyCVS() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Why CVS"
          title={<>Driven by experience.</>}
          intro="Since 2014 we&rsquo;ve built our reputation on the quality of our fleet and the care we take with every hire."
        />
        <RevealGroup className="mt-12 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <motion.div key={p.title} variants={revealItem} className="border-t border-line pt-5">
              <CheckIcon className="h-5 w-5 text-champagne" />
              <h3 className="mt-3 font-display text-xl text-warm-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver">{p.body}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
