"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { LayoutDashboard } from "lucide-react";
import { Folders } from "lucide-react";
export default function LeftSidebar() {
  return (
    <div className="w-[68px] flex justify-center py-4 ">
      <div className="w-[52px] bg-white rounded-2xl py-5 flex justify-center">
        <div className="flex flex-col gap-3">
          <div className="w-10 h-10 text-white rounded-full grid place-items-center">
            <img src="../../assets/zuAi-logo.png" alt="" />
          </div>
          <div className="w-9 h-9 bg-[#6947BF] text-white rounded-full grid place-items-center">
            <LayoutDashboard className="w-6 h-6" />
          </div>

          <div className="w-9 h-9 grid place-items-center">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <div className="w-9 h-9 grid place-items-center">
            <Folders className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
