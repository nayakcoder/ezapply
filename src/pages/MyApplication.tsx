
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const MyApplication = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            className="flex items-center text-sm font-medium text-ezapply-darkblue hover:text-ezapply-blue transition-colors"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
        
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-ezapply-darkblue">My Application</h1>
          <p className="text-ezapply-gray">Track and manage your university applications</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Application Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-ezapply-darkblue">Status:</span>
                  <span className="font-medium text-amber-600">In Progress</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ezapply-darkblue">Started:</span>
                  <span>April 1, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ezapply-darkblue">Target Universities:</span>
                  <span>3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ezapply-darkblue">Documents Uploaded:</span>
                  <span>2 of 5</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs text-blue-600 font-medium">1</span>
                  </div>
                  <span>Upload remaining documents</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs text-blue-600 font-medium">2</span>
                  </div>
                  <span>Complete test scores section</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs text-blue-600 font-medium">3</span>
                  </div>
                  <span>Select target universities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyApplication;
