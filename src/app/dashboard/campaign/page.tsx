import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

const CampaignDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[100px]">
        <h2 className="text-[32px] font-[500] mb-4">Dashboard</h2>
        <div className="flex items-center justify-between mb-4">
          <h5 className=" text-[18px] font-[500]">Campaign Details</h5>
          <Link
            href={"/"}
            className="text-white font-semibold rounded py-2 px-4 bg-green-500"
          >
            Edit
          </Link>
        </div>

        <div className="border py-8 px-5 rounded-sm shadow-sm">
          <h2 className=" font-bold text-[#222] mb-2">Cari Uang Buat Gunpla</h2>
          <div className="mb-4">
            <h6 className=" text-sm font-semibold text-[#222] mb-2">
              Description
            </h6>
            <p className="text-sm font-[300] text-gray-400 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              sdasdas praesentium modi aperiam voluptate necessitatibus beatae
              commodi sint harum molestias, veniam numquam magnam maxime quia
              quibusdam illum! Fuga iste dolore molestias.
            </p>
            <p className="text-sm font-[300] text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              sdasdas praesentium modi aperiam voluptate necessitatibus beatae
              commodi sint harum molestias, veniam numquam magnam maxime quia
              quibusdam illum! Fuga iste dolore molestias.
            </p>
          </div>

          <div className="mb-4">
            <h6 className=" text-sm font-semibold text-[#222] mb-2">
              What Will Founders Get
            </h6>
            <ul className="list-disc pl-5">
              <li className="text-sm font-[400] text-[#222]">
                illum! Fuga iste dolore molestias.
              </li>
              <li className="text-sm font-[400] text-[#222]">
                illum! Fuga iste dolore molestias.
              </li>
              <li className="text-sm font-[400] text-[#222]">
                illum! Fuga iste dolore molestias.
              </li>
            </ul>
          </div>

          <div>
            <h6 className=" text-sm font-semibold text-[#222] mb-2">price</h6>
            <p className="text-[20px] font-[300]">200.000</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CampaignDashboard;
