"use client";
import { ChangeEvent, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FileUpload() {
  const [files, setFiles] = useState<
    { name: string; size: number; type: string }[]
  >([]);
  const [isDragging, setIsDragging] = useState(false); // Ensure this state is defined

  // Load files from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFiles = localStorage.getItem("uploadedFiles");
      if (storedFiles) {
        setFiles(JSON.parse(storedFiles));
      }
    }
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files ? e.target.files[0] : null;
    if (uploadedFile && uploadedFile.size <= 25 * 1024 * 1024) {
      const fileData = {
        name: uploadedFile.name,
        size: uploadedFile.size,
        type: uploadedFile.type,
      };
      const updatedFiles = [...files, fileData];
      setFiles(updatedFiles);
      if (typeof window !== "undefined") {
        localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
      }
    } else {
      alert("File size exceeds 25MB");
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const uploadedFile = e.dataTransfer.files ? e.dataTransfer.files[0] : null;
    if (uploadedFile && uploadedFile.size <= 25 * 1024 * 1024) {
      const fileData = {
        name: uploadedFile.name,
        size: uploadedFile.size,
        type: uploadedFile.type,
      };
      const updatedFiles = [...files, fileData];
      setFiles(updatedFiles);
      if (typeof window !== "undefined") {
        localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
      }
    } else {
      alert("File size exceeds 25MB");
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      className={`border-dashed border-2 p-6 sm:p-8 rounded-lg text-center ${
        isDragging ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-white"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        id="fileUpload"
      />
      <div className="flex justify-center mb-2">
        <img src="../../assets/upload_file.png" alt="" />
      </div>
      <label htmlFor="fileUpload" className="cursor-pointer">
        <div className="text-base sm:text-lg font-semibold text-gray-600">
          Drag and drop a PDF
        </div>
        <div className="text-xs sm:text-sm text-gray-400 my-2">
          *Limit 25 MB per file.
        </div>
        <Button
          variant="outline"
          className="mt-4 text-[#6947BF] rounded-full font-bold"
          onClick={() => document.getElementById("fileUpload")?.click()}
        >
          Upload your file
        </Button>
      </label>
      {files.length > 0 && (
        <div className="mt-4 text-green-500 text-xs sm:text-sm">
          {files.map((file, index) => (
            <div key={index}>
              File uploaded: {file.name} ({(file.size / 1024).toFixed(2)} KB)
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
