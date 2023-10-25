import CallToAction from "@/components/calltoaction/CallToAction";
import Image from "next/image";
import Link from "next/link";
import Drone from "public/drone.png";
import ChecklistIcon from "public/icon-checklist.svg";

const Home = () => {
  return (
    <div>
      <div className="hero mb-10 pl-[75px] pt-[90px]">
        <div className="w-[547px]">
          <h1 className="mb-[26px] text-[36px] font-[500]">
            Kami siap membantu startup untuk memulai & mendanai kebutuhan mereka
          </h1>
          <p className="w-[374px] ml-[25px] mb-10 font-[300] text-[20px] ">
            Danai ide terbaik Anda untuk menjadi produk nyata dan jadilah
            kontributor
          </p>
          <Link
            href={"/"}
            className="ml-[25px] p-[13px_40px_12px_28px] bg-[#FF872E] rounded-full text-[20px] font-[600] text-white"
          >
            Temukan Project
          </Link>
        </div>

        <div className="w-[561px]">
          <div className="w-[370px] h-[419px] border pt-[17px] rounded">
            <div className="flex justify-center">
              <Image src={Drone} alt="campaign-drone" className="rounded" />
            </div>
            <div className="ml-[22px] mt-[21px] mb-[22px]">
              <h3 className="text-[24px] font-[500] mb-[2px]">
                Auto Pilot Drone
              </h3>
              <p className="text-[14px] font-[300]">
                Self driving drone, no worry to drive again
              </p>
            </div>
            <div className="w-[90%] h-[15px] border mx-auto mb-[8px]">
              <div className="w-[10%] h-[100%] bg-blue-500"></div>
            </div>

            <div className="flex justify-between w-[90%] mx-auto pt-1">
              <span>45%</span>
              <span>Rp. 80.000.000</span>
            </div>
          </div>
          <div className="w-[322px] h-[158px] border rounded-3xl p-[22px_34px_22px_68px]">
            <div className="w-[220px] h-[114px] flex flex-col gap-y-2.5">
              <h6>Why we fit for you:</h6>
              <ul className="flex flex-col gap-y-[10px]">
                <li className="flex gap-x-[10px] items-center">
                  <Image src={ChecklistIcon} alt="icon checklist" />
                  <span className="text-[14px]">Easy Money Transaction</span>
                </li>
                <li className="flex gap-x-[10px] items-center">
                  <Image src={ChecklistIcon} alt="icon checklist" />
                  <span className="text-[14px]">
                    Special Services & Product
                  </span>
                </li>
                <li className="flex gap-x-[10px] items-center">
                  <Image src={ChecklistIcon} alt="icon checklist" />
                  <span className="text-[14px]">
                    Private Equity Shareholders
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
};
export default Home;
