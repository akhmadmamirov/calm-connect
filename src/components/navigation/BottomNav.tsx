
import { Home, Search, BotMessageSquare, MessageSquare, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: BotMessageSquare, label: "Chat", path: "/chatbot" },
    { icon: null, label: "Add", path: "/mood-check" },
    { icon: MessageSquare, label: "Forum", path: "/community" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background flex justify-around items-center py-2 px-6 z-50">
      {navItems.map((item, index) => {
        // Special case for the center button
        if (index === 2) {
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center"
            >
              <div className="bg-thrive-purple text-white rounded-full p-3 -mt-6 shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          );
        }

        // Normal navigation item
        const isActive = location.pathname === item.path;
        const IconComponent = item.icon;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "nav-link",
              isActive ? "text-thrive-purple" : "text-gray-500"
            )}
          >
            {IconComponent && <IconComponent className="nav-icon" />}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};
