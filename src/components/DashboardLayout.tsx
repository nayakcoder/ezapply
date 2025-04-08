
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  User, 
  FileText, 
  LogOut, 
  Settings, 
  FileUp,
  GraduationCap,
  MessageSquare,
  Menu,
  X
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useViewport } from "@/hooks/use-viewport";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { isMobile } = useViewport();
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      {isMobile && (
        <header className="fixed top-0 left-0 right-0 z-40 bg-ezapply-blue h-14 flex items-center justify-between px-4 shadow-md">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="text-white p-1">
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <span className="font-bold text-xl text-white ml-3">EZ<span className="text-ezapply-teal">Apply</span></span>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/10"
            size="sm"
          >
            Home
          </Button>
        </header>
      )}
      
      {/* Sidebar Navigation */}
      <aside 
        className={`${isMobile ? 'fixed top-14 left-0 h-[calc(100vh-3.5rem)] z-30 transition-transform duration-300' : 'fixed top-0 left-0 h-full'} 
          ${isMobile && !isSidebarOpen ? '-translate-x-full' : 'translate-x-0'} 
          w-64 bg-ezapply-blue text-white shadow-lg`}
      >
        {/* Only show logo in desktop view */}
        {!isMobile && (
          <div className="p-6">
            <div className="flex items-center gap-2 mb-8">
              <span className="font-bold text-2xl">EZ<span className="text-ezapply-teal">Apply</span></span>
            </div>
          </div>
        )}
        
        <nav className={`space-y-6 ${isMobile ? 'p-4' : 'p-6'}`}>
          <div>
            <p className="text-xs uppercase text-ezapply-lightblue/70 font-semibold tracking-wider mb-2">Main</p>
            <ul className="space-y-1">
              <li>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-white hover:text-white hover:bg-white/10 ${isActive('/dashboard') ? 'bg-white/20' : ''}`}
                  onClick={() => {
                    navigate("/dashboard");
                    if (isMobile) setIsSidebarOpen(false);
                  }}
                >
                  <User className="mr-2 h-5 w-5" />
                  Dashboard
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-white hover:text-white hover:bg-white/10 ${isActive('/my-application') ? 'bg-white/20' : ''}`}
                  onClick={() => {
                    navigate("/my-application");
                    if (isMobile) setIsSidebarOpen(false);
                  }}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  My Application
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-white hover:text-white hover:bg-white/10 ${isActive('/universities') ? 'bg-white/20' : ''}`}
                  onClick={() => {
                    navigate("/universities");
                    if (isMobile) setIsSidebarOpen(false);
                  }}
                >
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Universities
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-white hover:text-white hover:bg-white/10 ${isActive('/documents') ? 'bg-white/20' : ''}`}
                  onClick={() => {
                    navigate("/documents");
                    if (isMobile) setIsSidebarOpen(false);
                  }}
                >
                  <FileUp className="mr-2 h-5 w-5" />
                  Documents
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-white hover:text-white hover:bg-white/10 ${isActive('/notes') ? 'bg-white/20' : ''}`}
                  onClick={() => {
                    navigate("/notes");
                    if (isMobile) setIsSidebarOpen(false);
                  }}
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
                  onClick={() => {
                    navigate("/settings");
                    if (isMobile) setIsSidebarOpen(false);
                  }}
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Settings
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    handleLogout();
                    if (isMobile) setIsSidebarOpen(false);
                  }}
                  className="w-full justify-start text-white hover:text-white hover:bg-white/10"
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
      
      {/* Overlay to close sidebar on mobile when clicked outside */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Main Content */}
      <div 
        className={`${isMobile ? 'pt-14' : 'ml-64'}`}
        style={{ 
          marginLeft: isMobile ? 0 : '16rem',
          transition: 'margin-left 0.3s ease'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
