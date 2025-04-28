
import { useState } from "react";
import { ArrowLeft, Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BottomNav } from "@/components/navigation/BottomNav";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Mock search results - in a real app these would come from an API
const mockResults = [
  { id: 1, type: "image", url: "https://images.unsplash.com/photo-1552053831-71594a27632d" },
  { id: 2, type: "image", url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb" },
  { id: 3, type: "image", url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1" },
  { id: 4, type: "image", url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b" },
  { id: 5, type: "image", url: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a" },
  { id: 6, type: "image", url: "https://images.unsplash.com/photo-1517849845537-4d257902454a" },
  { id: 7, type: "image", url: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2" },
  { id: 8, type: "image", url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993" },
  { id: 9, type: "image", url: "https://images.unsplash.com/photo-1561037404-61cd46aa615b" },
  { id: 10, type: "image", url: "https://images.unsplash.com/photo-1523480717984-24cba35ae1ef" },
  { id: 11, type: "image", url: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8" },
  { id: 12, type: "image", url: "https://images.unsplash.com/photo-1444212477490-ca407925329e" },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("dogs");
  const [results, setResults] = useState(mockResults);
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would fetch results from an API
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <Button variant="ghost" size="sm" className="mb-4" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back
        </Button>
        <h1 className="text-3xl font-bold mb-6">Search</h1>
        
        <form onSubmit={handleSearch} className="mb-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for meditations, topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="py-6 pl-4 pr-10"
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </form>
        
        {results.length > 0 && (
          <>
            <h2 className="text-sm font-bold mb-4">ALL RESULTS</h2>
            <div className="grid grid-cols-3 gap-2">
              {results.map(item => (
                <div key={item.id} className="aspect-square rounded-md overflow-hidden">
                  <img 
                    src={item.url} 
                    alt={`Search result ${item.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      
      <BottomNav />
    </div>
  );
}
