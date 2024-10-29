import Navbar from "@/components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-svh relative">
      <Navbar />
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
};

export default MainLayout;
