import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
const Footer = () => {
  return (
    <footer className="ml-[100px] w-[1086px] flex justify-between">
      <section className="flex flex-col gap-y-[16px]">
        <div className="flex items-center gap-x-[30px]">
          <Image src={Logo} alt="logo" />
          <h2 className="font-[600] text-[26px]">Backer Inc.</h2>
        </div>
        <p className="text-[18px] w-4/5">
          Helps people execute their bright ideas
        </p>
      </section>

      <section>
        <h2 className="mb-[30px] text-[18px] font-[600]">Jelajahi</h2>
        <ul className="flex flex-col gap-y-[15px] text-[18px] font-[300]">
          <li>
            <Link href="/beranda">Layanan Kami</Link>
          </li>
          <li>
            <Link href="/tentang-kami">Sistem Ekuitas</Link>
          </li>
          <li>
            <Link href="/layanan">Pengembalian Dana</Link>
          </li>
          <li>
            <Link href="/kontak">Shareholder</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-[30px] text-[18px] font-[600]">Investor</h2>
        <ul className="flex flex-col gap-y-[15px] text-[18px] font-[300]">
          <li>
            <Link href="/beranda">Akun Saya</Link>
          </li>
          <li>
            <Link href="/tentang-kami">Startups Terbaik</Link>
          </li>
          <li>
            <Link href="/layanan">Tutorial</Link>
          </li>
          <li>
            <Link href="/kontak">Withdrawl</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-[30px] text-[18px] font-[600]">Office</h2>
        <ul className="flex flex-col gap-y-[15px] text-[18px] font-[300]">
          <li>
            <Link href="/beranda">+021 2208 1996</Link>
          </li>
          <li>
            <Link href="/tentang-kami">KBP, Bandung</Link>
          </li>
          <li>
            <Link href="/layanan">No.12 (Backer)</Link>
          </li>
          <li>
            <Link href="/kontak">support@backer.id</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};
export default Footer;
