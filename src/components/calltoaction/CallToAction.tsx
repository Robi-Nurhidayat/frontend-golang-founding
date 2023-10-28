import Image from "next/image";
import Link from "next/link";
import RadialLine from 'public/Radial-Backgroud.png'

const CallToAction = () => {
  return (
    <div style={{clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0% 100%)'}} className="flex flex-col items-center gap-y-[46px] bg-[#3B41E3] text-white pt-[150px] mt-[130px] pb-[100px] relative">
      <h1 className="text-center font-[600] text-[48px] w-[731px]">
        Cara mudah untuk mendanai ide dan inovasi terbaik
      </h1>
      <Link
        href={"/"}
        className="p-[13px_93px_12px_91px] bg-[#FF872E] rounded-full text-[20px] font-[600] text-white"
      >
        Mulai
      </Link>

      <Image src={RadialLine} alt="radial line" className="absolute -z-50 -top-[100px] right-2.5" />
    </div>
  );
};
export default CallToAction;
