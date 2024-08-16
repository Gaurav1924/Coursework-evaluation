"use client";
import { Files, CalendarPlus } from "lucide-react";
import { useStore } from "../store";
export default function RightSidebar() {
  const score = useStore((state) => state?.score?.score);

  return (
    <div className="w-[68px] md:w-[100px] py-4 flex flex-col">
      <div className="w-[52px] rounded-2xl py-5 flex justify-center">
        <div className="flex flex-col gap-3 items-center">
          {score && (
            <div className="flex text-sm md:text-base font-bold bg-white p-3 pr-2 rounded-2xl">
              <img src="../../assets/zu-icon.png" alt="" />
              <span className="pr-5">{`${score}`}</span>
            </div>
          )}
          <div className="text-white bg-white flex rounded-3xl  place-items-center p-2 pr-3">
            <img
              src="../../assets/streak.png"
              className="sm:w-4 sm:h-4"
              alt="streak"
            />
            <span className="pr-5 text-black font-bold">{120}</span>
          </div>
          <div className="w-12 h-12 md:w-12 md:h-12 text-black bg-white rounded-full grid place-items-center">
            <CalendarPlus size={24} />
          </div>
          <div className="w-12 h-12 md:w-12 md:h-12 text-black bg-white rounded-full grid place-items-center">
            <Files size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
