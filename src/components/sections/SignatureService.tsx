import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";

const pillars = [
  "Personalised vehicle recommendations",
  "Collection or nationwide delivery",
  "Occasion-specific assistance",
  "Direct, human support",
  "A clear, simple hire process",
  "Premium vehicle presentation",
  "Support before, during and after",
];

export function SignatureService() {
  return (
    <section className="border-t border-line bg-charcoal/30 py-20 md:py-28">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative order-2 aspect-[4/5] overflow-hidden border border-line lg:order-1">
          <Media
            asset={{
              src: "/images/home/signature-service.jpg",
              alt: "A CVS Car Hire vehicle prepared and presented for handover",
              placeholder: false,
            }}
            label="The Handover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Signature Service"
            title={<>Choose the car. We&rsquo;ll handle the rest.</>}
            intro="A great hire is about more than handing over a set of keys. From the first message to the final return, we make the whole experience effortless."
          />
          <ul className="mt-8 space-y-3">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 0.05} className="flex items-baseline gap-4 border-t border-line pt-3">
                <span className="font-display text-sm text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-warm-white">{p}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
