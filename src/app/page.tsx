import { Hero } from "@/components/sections/Hero";
import { QuickEnquiry } from "@/components/sections/QuickEnquiry";
import { FeaturedFleet } from "@/components/sections/FeaturedFleet";
// import { MarqueStrip } from "@/components/sections/MarqueStrip"; // hidden for now
import { BrowseByExperience } from "@/components/sections/BrowseByExperience";
import { WhyCVS } from "@/components/sections/WhyCVS";
import { SignatureService } from "@/components/sections/SignatureService";
import { FeaturableReviews } from "@/components/sections/FeaturableReviews";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { SocialProof } from "@/components/sections/SocialProof";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickEnquiry />
      <FeaturedFleet />
      {/* <MarqueStrip /> — hidden for now; re-enable when ready */}
      <BrowseByExperience />
      <WhyCVS />
      <SignatureService />
      {/* Live Google reviews — render only once configured (widget id / API key). */}
      <FeaturableReviews />
      <GoogleReviews />
      <SocialProof />
      <FinalCTA />
      <StickyActionBar context={{ page: "home" }} />
    </>
  );
}
