import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import Test from "public/project-image.jpg";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex bg-white px-[100px] items-center justify-between mb-[30px] relative z-50">
        <div>
          <h2 className="text-[32px] font-[600]">Dashboard</h2>
          <button className="mr-5 text-[18px]">Your Projects</button>
          <button>Your Transactions</button>
        </div>
        <div>
          <Link
            href={"/"}
            className="flex items-center gap-x-1 bg-green-400 py-3 px-2 text-white font-semibold text-[18px] rounded-sm"
          >
            <AiOutlinePlus />
            <span>Create Campaign</span>
          </Link>
        </div>
      </div>

      <div className="px-[100px] mb-10 flex flex-col gap-y-5">
        {/* project 1 */}
        <div className="h-[250px] flex gap-x-8 border items-center">
          <div className="h-full">
            <Image
              src={Test}
              alt="image"
              className="h-full w-[80%] object-cover"
            />
          </div>
          <div className=" py-4 pr-8">
            <h2 className="text-[22px] font-bold text-[#222] mb-2">
              Cari uang buat Gunpla
            </h2>
            <h5 className="mb-2 text-[18px] text-gray-500">
              Rp. 2000.000,000 ' <span>80%</span>
            </h5>
            <p className="mb-8 text-[#222] font-[300]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              harum ratione minus hic, qui consequatur deleniti, nesciunt vitae
              nulla tempore magni ipsa. Unde dolor veniam perspiciatis, cum
              dolores nesciunt quia.
            </p>

            <Link
              href={"/"}
              className="text-white font-semibold rounded py-3 px-4 bg-green-500"
            >
              Detail
            </Link>
          </div>
        </div>

        {/* projct 2 */}
        <div className="h-[250px] flex gap-x-8 border items-center">
          <div className="h-full">
            <Image
              src={Test}
              alt="image"
              className="h-full w-[80%] object-cover"
            />
          </div>
          <div className=" py-4 pr-8">
            <h2 className="text-[22px] font-bold text-[#222] mb-2">
              Cari uang buat Gunpla
            </h2>
            <h5 className="mb-2 text-[18px] text-gray-500">
              Rp. 2000.000,000 ' <span>80%</span>
            </h5>
            <p className="mb-8 text-[#222] font-[300]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              harum ratione minus hic, qui consequatur deleniti, nesciunt vitae
              nulla tempore magni ipsa. Unde dolor veniam perspiciatis, cum
              dolores nesciunt quia.
            </p>

            <Link
              href={"/"}
              className="text-white font-semibold rounded py-3 px-4 bg-green-500"
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard;
