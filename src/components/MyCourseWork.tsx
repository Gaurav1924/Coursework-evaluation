"use client";

import { useState, useEffect } from "react";
import CourseworkCard from "./CourseWorkCard";
import { Coursework } from "./types";

export default function MyCourseWork() {
  const [courseworkItems, setCourseworkItems] = useState<Coursework[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchCoursework = () => {
      const storedData = localStorage.getItem("courseworkData");
      if (storedData) {
        const parsedData: Coursework[] = JSON.parse(storedData);
        setCourseworkItems(parsedData);
      }
    };
    fetchCoursework();
    const handleCourseworkAdded = () => {
      fetchCoursework();
    };
    window.addEventListener("courseworkAdded", handleCourseworkAdded);
    return () => {
      window.removeEventListener("courseworkAdded", handleCourseworkAdded);
    };
  }, []);

  const courseworkToDisplay = showAll
    ? courseworkItems
    : courseworkItems.slice(0, 2);
  console.log("courseworkItems in MyCourseWork", courseworkItems);
  return (
    <>
      {courseworkItems.length > 0 && (
        <div className="p-4 md:p-6 bg-[#E5ECF3] rounded-lg">
          <h2 className="text-lg md:text-xl font-bold text-gray-600 mb-4">
            My coursework
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
            {courseworkToDisplay.map((coursework, index) => (
              <CourseworkCard key={index} {...coursework} />
            ))}
          </div>
          <div className="flex justify-center">
            {!showAll && courseworkItems.length > 2 && (
              <button
                onClick={() => setShowAll(true)}
                className="bg-[#ADB8C9] text-white p-2 rounded-full "
              >
                View All
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
