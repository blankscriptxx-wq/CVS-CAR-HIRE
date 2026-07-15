import { Hero } from "@/components/sections/Hero";
import { QuickEnquiry } from "@/components/sections/QuickEnquiry";
import { FeaturedFleet } from "@/components/sections/FeaturedFleet";
import { BrowseByExperience } from "@/components/sections/BrowseByExperience";
import { WhyCVS } from "@/components/sections/WhyCVS";
import { SignatureService } from "@/components/sections/SignatureService";
import { SocialProof } from "@/components/sections/SocialProof";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickEnquiry />
      <FeaturedFleet />
      <BrowseByExperience />
      <WhyCVS />
      <SignatureService />
      <SocialProof />
      <FinalCTA />
      <StickyActionBar context={{ page: "home" }} />
    </>
  );
}
