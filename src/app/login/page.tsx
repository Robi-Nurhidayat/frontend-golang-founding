"use client";
import LoginUploadImage from "@/components/login/LoginUploadImage";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import ImageLogin from "public/sign-in-background@2x.jpg";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/sessions",
        {
          email: formLogin.email,
          password: formLogin.password,
        }
      );

      const { data } = response;

      if (data) {
        toast.success("Success login");
        return router.push("dashboard");
      } else {
        alert("Email atau password tidak valid");
      }
    } catch (error: any) {
      if (error.response) {
        // Tangani kesalahan status code HTTP di sini (misalnya, status code 422)
        alert("Gagal login. Periksa kembali email dan password Anda.");
      } else {
        // Tangani kesalahan jaringan atau lainnya di sini
        alert("Terjadi kesalahan saat melakukan permintaan.");
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-[#3B41E3] flex">
      <div className=" flex-[0_0_564px] rounded-full  h-full">
        <Image
          src={ImageLogin}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-[36px] font-[500] text-white mb-[40px]">
          Sign In to Your Account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-[18px]">
            <label
              htmlFor="email"
              className="text-[20px] font-[500] text-white"
            >
              Email Address
            </label>
            <input
              type="text"
              name="email"
              className="text-[16px] text-[#222] py-4 pl-[30px] pr-[51px] rounded-full w-[400px] outline-none"
              placeholder="Masukkan alamat email Anda "
              value={formLogin.email}
              onChange={(e: any) =>
                setFormLogin({ ...formLogin, email: e.target.value })
              }
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
              type="password"
              name="password"
              className="text-[16px] text-[#222] py-4 pl-[30px] pr-[51px] rounded-full w-[400px] outline-none"
              placeholder="Masukkan password  Anda "
              value={formLogin.password}
              onChange={(e: any) =>
                setFormLogin({ ...formLogin, password: e.target.value })
              }
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-[20px] font-[600] text-white rounded-full w-full bg-[#FF872E] p-[12px_149px_13px_150px]"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-5 text-base text-white">
          Don’t have account?
          <Link href={"/login"} className="text-[#FF872E] ml-1">
            Sign Up
          </Link>
        </p>
      </div>
    </div>

    // <LoginUploadImage />
  );
};
export default Login;
