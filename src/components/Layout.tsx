// components/Layout.js
import Sidebar from "./LeftSidebar";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
