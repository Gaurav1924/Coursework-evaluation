import LeftSidebar from "../components/LeftSidebar";
import Header from "../components/Header";
import CourseworkForm from "../components/CourseWorkForm";
import ExploreCourseWork from "@/components/ExploreCourseWork";
import RightSidebar from "@/components/RightSidebar";
import MyCourseWork from "@/components/MyCourseWork";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#e5ecf3] ">
      <LeftSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-4 space-y-6 bg-[#E5ECF3]">
          <div className="flex space-x-5 w-4/5 mx-auto mt-10 justify-center">
            <div>
              <Header />
              <CourseworkForm />
            </div>
            <img
              className="w-[400px] object-contain hidden lg:block"
              src="../../assets/evaluate_coursework.png"
              alt=""
            />
          </div>
          <MyCourseWork />
          <ExploreCourseWork />
        </main>
      </div>
      <RightSidebar />
    </div>
  );
}
