// import Image from "next/image";
// import SuccesRegisterImage from "public/success-illustration.svg";
// const SuccessRegister = () => {
//   return (
//     <div className="h-screen w-screen justify-center">
//       <Image src={SuccesRegisterImage} alt="image" />

//     </div>
//   );
// };
// export default SuccessRegister;

import Image from "next/image";
import Link from "next/link";
import SuccesRegisterImage from "public/success-illustration.svg";

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[512px] flex flex-col items-center">
        <Image
          src={SuccesRegisterImage}
          alt="not found image"
          className="mb-[55px]"
        />
        <h4 className="text-[36px] font-[500] text-[#222] mb-3">
          Selamat Datang!
        </h4>
        <p className="mb-[30px] text-[20px] font-[300] w-[280px] text-[#222] text-center">
          Akun Anda telah terdaftar di sistem!
        </p>
        <Link
          href={"/"}
          className="text-[20px] font-[600] text-white p-[12px_136px_13px_136px] bg-[#FF872E] rounded-full"
        >
          Start Explore
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
