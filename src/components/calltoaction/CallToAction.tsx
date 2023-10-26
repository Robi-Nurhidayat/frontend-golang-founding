import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-y-[46px]">
      <h1 className="text-center font-[600] text-[48px] w-[731px]">
        Cara mudah untuk mendanai ide dan inovasi terbaik
      </h1>
      <Link
        href={"/"}
        className="p-[13px_93px_12px_91px] bg-[#FF872E] rounded-full text-[20px] font-[600] text-white"
      >
        Mulai
      </Link>
    </div>
  );
};
export default CallToAction;
