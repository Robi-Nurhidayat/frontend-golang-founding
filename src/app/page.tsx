import Review from "@/components/Review/Review";
import CallToAction from "@/components/calltoaction/CallToAction";
import Campaign from "@/components/campaign/Campaign";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import StepIlustration from "@/components/step/StepIlustration";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <StepIlustration />
      <Campaign />
      <Review />
      <CallToAction />
      <Footer />
    </div>
  );
};
export default Home;
