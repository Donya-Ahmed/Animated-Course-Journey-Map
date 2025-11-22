import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-[300px] ">
      <div className="flex items-center gap-3 px-4 py-3 border rounded-full bg-white  border-muted h-12">
        <Search className="w-5 h-5 text-[#B3B3B3]" />
        <Input
          placeholder="What do you want learn..."
          className="border-0 shadow-none p-0 focus-visible:ring-0 bg-transparent"
        />
      </div>
    </div>
  );
}
