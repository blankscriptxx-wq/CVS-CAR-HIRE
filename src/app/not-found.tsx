import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center justify-center px-6">
      <div className="text-center">
        <span className="eyebrow">Error 404</span>
        <h1 className="mt-4 text-display font-display text-warm-white">Wrong turn.</h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-silver">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you back
          on the road.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" variant="primary" size="lg">
            Back to Home
          </ButtonLink>
          <ButtonLink href="/fleet" variant="outline" size="lg">
            Explore the Fleet <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <p className="mt-8 text-sm text-silver">
          Or{" "}
          <Link href="/contact" className="text-champagne underline">
            get in touch
          </Link>{" "}
          and we&rsquo;ll help.
        </p>
      </div>
    </section>
  );
}
