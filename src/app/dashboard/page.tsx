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

      <div className="px-[100px]">
        <div>
          <div>
            <Image src={Test} alt="image" />
          </div>
          <div>
            <h2>Cari uang buat Gunpla</h2>
            <h5>
              Rp. 2000.000,000 ' <span>80%</span>
            </h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              harum ratione minus hic, qui consequatur deleniti, nesciunt vitae
              nulla tempore magni ipsa. Unde dolor veniam perspiciatis, cum
              dolores nesciunt quia.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard;
