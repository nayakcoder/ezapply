
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  User, 
  FileText, 
  LogOut, 
  Settings, 
  FileUp,
  GraduationCap,
  MessageSquare
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    navigate("/login");
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-ezapply-blue text-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <span className="font-bold text-2xl">EZ<span className="text-ezapply-teal">Apply</span></span>
          </div>
          
          <nav className="space-y-6">
            <div>
              <p className="text-xs uppercase text-ezapply-lightblue/70 font-semibold tracking-wider mb-2">Main</p>
              <ul className="space-y-1">
                <li>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start text-white hover:text-white hover:bg-white/10 ${isActive('/dashboard') ? 'bg-white/20' : ''}`}
                    onClick={() => navigate("/dashboard")}
                  >
                    <User className="mr-2 h-5 w-5" />
                    Dashboard
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start text-white hover:text-white hover:bg-white/10 ${isActive('/my-application') ? 'bg-white/20' : ''}`}
                    onClick={() => navigate("/my-application")}
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    My Application
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start text-white hover:text-white hover:bg-white/10 ${isActive('/universities') ? 'bg-white/20' : ''}`}
                    onClick={() => navigate("/universities")}
                  >
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Universities
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start text-white hover:text-white hover:bg-white/10 ${isActive('/documents') ? 'bg-white/20' : ''}`}
                    onClick={() => navigate("/documents")}
                  >
                    <FileUp className="mr-2 h-5 w-5" />
                    Documents
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start text-white hover:text-white hover:bg-white/10 ${isActive('/notes') ? 'bg-white/20' : ''}`}
                    onClick={() => navigate("/notes")}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Notes
                  </Button>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="text-xs uppercase text-ezapply-lightblue/70 font-semibold tracking-wider mb-2">Account</p>
              <ul className="space-y-1">
                <li>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start text-white hover:text-white hover:bg-white/10 ${isActive('/settings') ? 'bg-white/20' : ''}`}
                    onClick={() => navigate("/settings")}
                  >
                    <Settings className="mr-2 h-5 w-5" />
                    Settings
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="ghost" 
                    onClick={handleLogout}
                    className="w-full justify-start text-white hover:text-white hover:bg-white/10"
                  >
                    <LogOut className="mr-2 h-5 w-5" />
                    Logout
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
