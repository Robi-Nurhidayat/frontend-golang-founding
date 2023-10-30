import Image from "next/image";
import Link from "next/link";
import Success from "public/funded-illustration.svg";

const SuccessFund = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[512px] flex flex-col items-center">
        <Image src={Success} alt="not found image" className="mb-[55px]" />
        <h4 className="text-[36px] font-[500] text-[#222] mb-3">
          Selamat! Anda berhasil
        </h4>
        <p className="mb-[60px] text-[20px] font-[300]  text-[#222] text-center">
          Uang Anda telah terkirim ke akun perusahaan
        </p>

        <div className="mb-5">
          <Link
            href={"/"}
            className="text-[20px] font-[600] text-white p-[12px_110px_13px_111px] bg-[#FF872E] rounded-full"
          >
            Fund Other Project
          </Link>
        </div>
        <div className="mt-5">
          <Link
            href={"/"}
            className=" text-[20px] font-[300] text-[#C2C2C2] p-[12px_127px_13px_127px] border rounded-full"
          >
            My Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessFund;
