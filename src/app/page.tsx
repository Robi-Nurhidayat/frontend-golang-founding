import CallToAction from "@/components/calltoaction/CallToAction";
import Campaign from "@/components/campaign/Campaign";
import Hero from "@/components/hero/Hero";
import StepIlustration from "@/components/step/StepIlustration";


const Home = () => {
  return (
    <div>
      <Hero />
      <StepIlustration />
      <Campaign />
      <CallToAction />
    </div>
  );
};
export default Home;
