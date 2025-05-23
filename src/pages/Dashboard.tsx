
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Info, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  GraduationCap, 
  FileUp 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/DashboardLayout";
import { useViewport } from "@/hooks/use-viewport";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isMobile } = useViewport();

  // Mock data for the application progress
  const applicationStatus = "in-progress"; // can be 'not-started', 'in-progress', 'submitted', 'accepted'
  const applicationProgress = 35; // percentage

  const applicationSteps = [
    { id: 1, name: "Personal Information", status: "completed" },
    { id: 2, name: "Academic History", status: "completed" },
    { id: 3, name: "Test Scores", status: "in-progress" },
    { id: 4, name: "Additional Certifications", status: "not-started" },
    { id: 5, name: "University Selection", status: "not-started" },
    { id: 6, name: "Document Upload", status: "not-started" },
    { id: 7, name: "Review & Submit", status: "not-started" }
  ];
  
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <DashboardLayout>
      <div className={`p-4 ${isMobile ? 'pb-20' : 'p-8'}`}>
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome back, John!</h1>
          <p className="text-gray-600">Here's the status of your university application</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Application Status Card */}
          <Card>
            <CardHeader className="pb-2 md:pb-3">
              <CardTitle className="text-base md:text-lg">Application Status</CardTitle>
              <CardDescription>Current progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mr-2" />
                    <span className="font-medium text-sm md:text-base">In Progress</span>
                  </div>
                  <span className="text-xs md:text-sm text-gray-500">{applicationProgress}% complete</span>
                </div>
                <Progress value={applicationProgress} className="h-2 bg-gray-200" />
                
                <Button 
                  className="w-full bg-ezapply-blue hover:bg-ezapply-darkblue text-sm md:text-base"
                  onClick={() => handleNavigate("/my-application")}
                >
                  Continue Application
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Important Deadlines Card */}
          <Card>
            <CardHeader className="pb-2 md:pb-3">
              <CardTitle className="text-base md:text-lg">Upcoming Deadlines</CardTitle>
              <CardDescription>Important dates</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 md:h-5 md:w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Document Submission</p>
                    <p className="text-xs md:text-sm text-gray-500">Jun 30, 2025 (2 weeks left)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">University Application</p>
                    <p className="text-xs md:text-sm text-gray-500">Jul 15, 2025 (4 weeks left)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Info className="h-4 w-4 md:h-5 md:w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Fall 2025 Semester</p>
                    <p className="text-xs md:text-sm text-gray-500">Aug 25, 2025</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Quick Actions Card */}
          <Card className={`${isMobile ? 'col-span-1' : ''}`}>
            <CardHeader className="pb-2 md:pb-3">
              <CardTitle className="text-base md:text-lg">Quick Actions</CardTitle>
              <CardDescription>Common tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className={`grid ${isMobile ? 'grid-cols-2' : ''} gap-2`}>
                <Button 
                  variant="outline" 
                  className={`${isMobile ? '' : 'w-full'} justify-start text-xs md:text-sm`}
                  onClick={() => handleNavigate("/documents")}
                >
                  <FileUp className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                  Upload Documents
                </Button>
                <Button 
                  variant="outline" 
                  className={`${isMobile ? '' : 'w-full'} justify-start text-xs md:text-sm`}
                  onClick={() => handleNavigate("/universities")}
                >
                  <GraduationCap className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                  Browse Universities
                </Button>
                <Button 
                  variant="outline" 
                  className={`${isMobile ? '' : 'w-full'} justify-start text-xs md:text-sm`}
                  onClick={() => handleNavigate("/settings")}
                >
                  <Info className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                  Update Profile
                </Button>
                <Button 
                  variant="outline" 
                  className={`${isMobile ? '' : 'w-full'} justify-start text-xs md:text-sm text-ezapply-blue hover:text-white hover:bg-ezapply-blue`}
                  onClick={() => handleNavigate("/notes")}
                >
                  <Info className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Application Progress Section */}
        <section className="mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Application Progress</h2>
          
          <Alert className="mb-4 md:mb-6 border-yellow-300 bg-yellow-50">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertTitle className="text-yellow-800 text-sm md:text-base">Action Required</AlertTitle>
            <AlertDescription className="text-yellow-700 text-xs md:text-sm">
              Please complete your test scores information to proceed with your application.
            </AlertDescription>
          </Alert>
          
          <div className="bg-white rounded-lg shadow p-3 md:p-6">
            <ul className="space-y-3 md:space-y-4">
              {applicationSteps.map((step) => (
                <li key={step.id} className="flex items-center">
                  {step.status === "completed" ? (
                    <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-green-100 flex items-center justify-center mr-2 md:mr-3">
                      <CheckCircle2 className="h-3 w-3 md:h-5 md:w-5 text-green-600" />
                    </div>
                  ) : step.status === "in-progress" ? (
                    <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 md:mr-3">
                      <Clock className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
                    </div>
                  ) : (
                    <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2 md:mr-3">
                      <span className="text-gray-600 font-medium text-xs md:text-sm">{step.id}</span>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-sm md:text-base">{step.name}</p>
                      <div>
                        {step.status === "completed" ? (
                          <span className="text-2xs md:text-xs bg-green-100 text-green-800 py-0.5 px-1.5 md:py-1 md:px-2 rounded-full">Completed</span>
                        ) : step.status === "in-progress" ? (
                          <span className="text-2xs md:text-xs bg-blue-100 text-blue-800 py-0.5 px-1.5 md:py-1 md:px-2 rounded-full">In Progress</span>
                        ) : (
                          <span className="text-2xs md:text-xs bg-gray-100 text-gray-800 py-0.5 px-1.5 md:py-1 md:px-2 rounded-full">Not Started</span>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
