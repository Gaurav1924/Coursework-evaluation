import { create } from "zustand";

type UploadedFile = File | null;

interface StoreState {
  courseworkType: string;
  subject: string;
  title: string;
  score: { score: number; category: string } | null;
  uploadedFile: UploadedFile;
  setCourseworkType: (courseworkType: string) => void;
  setSubject: (subject: string) => void;
  setTitle: (title: string) => void;
  setUploadedFile: (uploadedFile: UploadedFile) => void;
  setScore: (score: { score: number; category: string }) => void;
}

export const useStore = create<StoreState>((set) => ({
  courseworkType: "",
  subject: "",
  title: "",
  uploadedFile: null,
  score: null,
  setCourseworkType: (courseworkType) => set({ courseworkType }),
  setSubject: (subject) => set({ subject }),
  setTitle: (title) => set({ title }),
  setUploadedFile: (uploadedFile) => set({ uploadedFile }),
  setScore: (score) => set({ score }),
}));
