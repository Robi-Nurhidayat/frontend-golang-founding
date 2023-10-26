import links from "@/utils/nav-links";
import Link from "next/link";
import Logo from "public/logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-[#3B41E3] flex justify-between items-center px-[100px] pt-[50px] z-50">
      <nav className="flex  gap-x-[14px]">
        <div className="logo">
          <Image src={Logo} alt="Logo" />
        </div>
        <ul className="flex items-center gap-x-[30px]">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                style={{ fontWeight: "500" }}
                className="text-[18px]"
              >
                <Link href={link.path}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex justify-between items-center gap-x-5 text-[18px]">
        <Link href={"/"} className="p-[6px_51px_7px_52px] border rounded-full">
          Daftar
        </Link>
        <Link href={"/"} className="p-[6px_32px_7px_33px] border rounded-full">
          Akun Saya
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
