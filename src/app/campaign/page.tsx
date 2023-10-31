import CallToAction from "@/components/calltoaction/CallToAction";
import CampaignDetails from "@/components/campaign/CampaignDetails";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const CampaignPage = () => {
  return (
    <div>
      <Navbar />
      <CampaignDetails />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default CampaignPage;
