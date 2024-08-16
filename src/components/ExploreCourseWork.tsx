"use client";

import { useState, useEffect } from "react";
import CourseworkCard from "./CourseWorkCard";
import { Coursework } from "./types";

const filterOptions = ["All", "IA", "EE", "IO Example", "Tok Example"];

export default function ExploreCourseWork() {
  const [filter, setFilter] = useState<string>("All");
  const [courseworkItems, setCourseworkItems] = useState<Coursework[]>([]);

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

  const filteredItems = courseworkItems.filter((item) =>
    filter === "All" ? true : item.courseworkType === filter
  );

  return (
    <>
      {courseworkItems.length > 0 && (
        <div className="p-4 md:p-6 bg-[#E5ECF3] rounded-lg">
          <h2 className="text-lg md:text-xl font-bold text-gray-600 mb-4">
            Explore coursework
          </h2>
          <div className="flex space-x-4 mb-4 overflow-x-auto">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 rounded-full text-gray-600 font-semibold ${
                  filter === option
                    ? "bg-[#fff] text-[#6947BF]"
                    : "hover:bg-[#D0D8E2] text-[#98A1BB]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredItems.map((coursework) => (
              <CourseworkCard key={coursework.id} {...coursework} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
