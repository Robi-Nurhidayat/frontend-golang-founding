import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import Gallery1 from "public/project-slider-1.jpg";

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

        <div className="border py-8 px-5 rounded-sm shadow-sm mb-10">
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

        <div className="pb-10">
          <div className="mb-5 flex justify-between items-center">
            <h5 className=" text-[18px] font-[500]">Gallery</h5>
            <form action="#">
              <label
                htmlFor="image"
                className="text-white font-semibold rounded py-2 px-4 bg-green-500"
              >
                Upload
              </label>
              <input
                type="file"
                name="image"
                style={{ display: "none" }}
                id="image"
              />
            </form>
          </div>
          <div className="flex items-start justify-between gap-x-[15px] mb-[30px]">
            <div className="p-1 border rounded flex-1">
              <Image
                src={Gallery1}
                alt="image slider 1"
                className="rounded h-[190px] w-full"
              />
            </div>
            <div className="p-1 border rounded flex-1">
              <Image
                src={Gallery1}
                alt="image slider 1"
                className="rounded h-[190px] w-full"
              />
            </div>
            <div className="p-1 border rounded flex-1">
              <Image
                src={Gallery1}
                alt="image slider 1"
                className="rounded h-[190px] w-full"
              />
            </div>
            <div className="p-1 border rounded flex-1">
              <Image
                src={Gallery1}
                alt="image slider 1"
                className="rounded h-[190px] w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <h5 className=" text-[18px] font-[500] mb-4">Transaction History</h5>
          <div className=" mb-10 flex flex-col gap-y-5">
            {/* project 1 */}
            <div className="h-[150px] border flex items-center pl-7">
              <div className="">
                <h2 className="text-[22px] font-bold text-[#222] mb-2">
                  Cari uang buat Gunpla
                </h2>
                <h5 className="mb-2 text-[18px] text-gray-500">
                  Rp. 2000.000,000 - <span>12 september 2020</span>
                </h5>
              </div>
            </div>
            {/* projct 2 */}
            <div className="h-[150px] border flex items-center pl-7">
              <div className="">
                <h2 className="text-[22px] font-bold text-[#222] mb-2">
                  Cari uang buat Gunpla
                </h2>
                <h5 className="mb-2 text-[18px] text-gray-500">
                  Rp. 2000.000,000 - <span>12 september 2020</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CampaignDashboard;
