import Image from "next/image";
import Link from "next/link";
import ImageRegister from "public/sign-up-background@2x.jpg";
import RadialLine from 'public/Radial-Backgroud.png'

const Register = () => {
  return (
    <div className="w-screen h-screen bg-[#3B41E3] flex relative">
        <Image src={RadialLine} alt="line" className="absolute -z-50 -top-[50px] -right-[100px]" />
      <div className=" flex-[0_0_564px]  h-full">
        <Image
          src={ImageRegister}
          alt="image"
          className="h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-[36px] font-[500] text-white mb-[40px]">
          Daftar Sekarang!
        </h1>
        <form action="#">
          <div className="flex flex-col mb-[18px]">
            <label htmlFor="name" className="text-[20px] font-[500] text-white">
              Nama Lengkap
            </label>
            <input
            id="name"
              type="text"
              name="nama"
              className=" text-[16px] text-[#BFBFBF] py-4 pl-[30px] pr-[51px] rounded-full w-[400px] outline-none"
              placeholder="Masukkan nama lengkap Anda "
            />
          </div>
          <div className="flex flex-col mb-[18px]">
            <label
              htmlFor="pekerjaan"
              className="text-[20px] font-[500] text-white"
            >
              Pekerjaan
            </label>
            <input
            id="pekerjaan"
              type="text"
              name="pekerjaan"
              className="text-[16px] text-[#BFBFBF] py-4 pl-[30px] pr-[51px] rounded-full w-[400px] outline-none"
              placeholder="Masukkan nama lengkap Anda "
            />
          </div>
          <div className="flex flex-col mb-[18px]">
            <label
              htmlFor="email"
              className="text-[20px] font-[500] text-white"
            >
              Alamat Email
            </label>
            <input
              type="text"
              name="email"
              className="text-[16px] text-[#BFBFBF] py-4 pl-[30px] pr-[51px] rounded-full w-[400px] outline-none"
              placeholder="Masukkan alamat email Anda "
            />
          </div>
          <div className="flex flex-col mb-[40px]">
            <label
              htmlFor="password"
              className="text-[20px] font-[500] text-white"
            >
              Password
            </label>
            <input
              type="text"
              name="password"
              className="text-[16px] text-[#BFBFBF] py-4 pl-[30px] pr-[51px] rounded-full w-[400px] outline-none"
              placeholder="Masukkan password  Anda "
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-[20px] font-[600] text-white rounded-full w-full bg-[#FF872E] p-[12px_149px_13px_150px]"
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-5 text-base text-white">
          Sudah punya akun?{" "}
          <Link href={"/login"} className="text-[#FF872E] ml-1">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
