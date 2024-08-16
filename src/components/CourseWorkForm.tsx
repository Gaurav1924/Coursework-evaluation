"use client";
import { useStore } from "../store";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { Coursework } from "./types";
import FileUpload from "./FileUpload";

export default function CourseworkForm() {
  const courseworkType = useStore((state) => state.courseworkType);
  const subject = useStore((state) => state.subject);
  const title = useStore((state) => state.title);
  const setCourseworkType = useStore((state) => state.setCourseworkType);
  const setSubject = useStore((state) => state.setSubject);
  const setTitle = useStore((state) => state.setTitle);
  const setScore = useStore((state) => state.setScore);
  const [courseworks, setCourseworks] = useState<Coursework[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCourseworks = localStorage.getItem("courseworkData");
      setCourseworks(storedCourseworks ? JSON.parse(storedCourseworks) : []);
    }
  }, []);

  const handleSave = async () => {
    // Validate form fields
    if (!courseworkType || !subject || !title) {
      alert("Please fill in all the fields before submitting.");
      return;
    }

    // Create form data object
    const formData: Coursework = {
      id: new Date().toISOString(),
      title,
      subject,
      courseworkType,
      timeToRead: "18 min read",
      words: "2388 words",
      rating: "7/7",
      language: "English",
      score: { score: 0, category: "" },
    };

    // Call API
    try {
      const response = await fetch("/api/mock-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ essay: title }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("result", result);
        const { score } = result;

        // Determines score category
        let category = "";
        if (score >= 1 && score <= 100) {
          category = "Emerging";
        } else if (score >= 101 && score <= 500) {
          category = "Developing";
        } else if (score >= 501 && score <= 1000) {
          category = "Proficient";
          alert("Congratulations! You've scored between 501-1000!");
        }

        // Updates score in the store
        setScore({ score, category });

        // Updates courseworks list and save to localStorage
        const updatedCourseworks = [
          ...courseworks,
          { ...formData, score: { score, category } },
        ];
        setCourseworks(updatedCourseworks);
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "courseworkData",
            JSON.stringify(updatedCourseworks)
          );
        }

        // Clears form fields
        setCourseworkType("");
        setSubject("");
        setTitle("");

        const event = new Event("courseworkAdded");
        window.dispatchEvent(event);
      } else {
        console.error("Failed to fetch score");
      }
    } catch (error) {
      console.error("Error occurred while fetching score:", error);
    }
  };

  return (
    <div className="p-6 bg-[#fcfbfd] rounded-2xl mb-10">
      <FileUpload />
      <motion.div
        className="space-y-4 sm:space-y-6 p-4 sm:p-6 bg-[#fcfbfd] rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <p className="text-[#7A8196] text-xs font-lighter sm:text-base mb-2">
            Select your course and subjects*
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <div>
              <Select
                value={courseworkType}
                onValueChange={(value) => setCourseworkType(value)}
              >
                <SelectTrigger className="w-full sm:w-[180px] font-semibold rounded-full bg-white text-gray-700">
                  <SelectValue placeholder="Coursework Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IA">IA</SelectItem>
                  <SelectItem value="EE">EE</SelectItem>
                  <SelectItem value="IOK">Iok Example</SelectItem>
                  <SelectItem value="TOK">Tok Example</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select
                value={subject}
                onValueChange={(value) => setSubject(value)}
              >
                <SelectTrigger className="w-full sm:w-[180px] rounded-full bg-white text-gray-700 font-semibold">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Physics">Physics</SelectItem>
                  <SelectItem value="Math">Maths</SelectItem>
                  <SelectItem value="Chemistry">Chemistry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#7A8196] text-xs font-lighter sm:text-base">
            Enter your essay title (required*)
          </p>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2"
          />
        </div>
        <div className="flex justify-center">
          <Button
            onClick={handleSave}
            className="bg-[#ADB8C9] text-base sm:text-xl text-white rounded-full px-6 py-2"
          >
            Evaluate your Score
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
