"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

import ListProjects from "@/components/dashboard/ListProjects";
import { useState } from "react";
import ListTransaction from "@/components/dashboard/ListTransaction";

const Dashboard = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Navbar />
      <div className="flex bg-white px-[100px] items-center justify-between mb-[30px] relative z-50">
        <div>
          <h2 className="text-[32px] font-[600]">Dashboard</h2>
          <button
            style={{ color: show ? "#222" : "#c6cdd1" }}
            onClick={() => setShow(true)}
            className="mr-5 text-[18px] font-[500]"
          >
            Your Projects
          </button>
          <button
            style={{ color: show ? "#c6cdd1" : "#222" }}
            onClick={() => setShow(false)}
            className="text-[18px] font-[500]"
          >
            Your Transactions
          </button>
        </div>
        {show && (
          <div>
            <Link
              href={"/"}
              className="flex items-center gap-x-1 bg-green-400 py-3 px-2 text-white font-semibold text-[18px] rounded-sm"
            >
              <AiOutlinePlus />
              <span>Create Campaign</span>
            </Link>
          </div>
        )}
      </div>
      {show ? <ListProjects /> : <ListTransaction />}
      <Footer />
    </div>
  );
};
export default Dashboard;
