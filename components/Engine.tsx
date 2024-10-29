import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Engine = () => {
  return (
    <div className="w-[800px] overflow-hidden flex rounded-[50px] border-2 px-4">
      <div className="h-full flex justify-center items-center mr-4">
        <Search />
      </div>
      <Input
        type="email"
        placeholder="Transform Aspirations Into Achievments..."
        className="py-8 text-2xl border-none focus-within:border-2 ring-offset-0 
        placeholder:text-center focus-visible:ring-0 focus-visible:ring-offset-0 px-4"
      />
    </div>
  );
};

export default Engine;
