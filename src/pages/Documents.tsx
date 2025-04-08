
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileUp, Clock, CheckCircle2, AlertCircle, File } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/DashboardLayout";

const Documents = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Sample document data
  const documents = [
    {
      id: 1,
      name: "Passport",
      status: "uploaded",
      date: "Mar 15, 2025"
    },
    {
      id: 2,
      name: "Academic Transcript",
      status: "uploaded",
      date: "Mar 16, 2025"
    },
    {
      id: 3,
      name: "Statement of Purpose",
      status: "pending",
      date: ""
    },
    {
      id: 4,
      name: "Recommendation Letters",
      status: "pending",
      date: ""
    },
    {
      id: 5,
      name: "Standardized Test Scores",
      status: "rejected",
      date: "Mar 20, 2025",
      reason: "Document unclear or incomplete"
    }
  ];
  
  const handleUpload = () => {
    navigate("/certificate-upload");
  };

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
        
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-ezapply-darkblue">Documents</h1>
            <p className="text-ezapply-gray">Upload and manage your application documents</p>
          </div>
          <Button 
            onClick={handleUpload}
            className="mt-4 md:mt-0 bg-ezapply-blue hover:bg-ezapply-darkblue"
          >
            <FileUp className="mr-2 h-4 w-4" />
            Upload New Document
          </Button>
        </header>
        
        <Card>
          <CardHeader>
            <CardTitle>Required Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left font-medium text-ezapply-darkblue">Document Name</th>
                    <th className="py-3 px-4 text-left font-medium text-ezapply-darkblue">Status</th>
                    <th className="py-3 px-4 text-left font-medium text-ezapply-darkblue">Date Uploaded</th>
                    <th className="py-3 px-4 text-left font-medium text-ezapply-darkblue">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.id} className="border-b">
                      <td className="py-3 px-4 flex items-center">
                        <File className="h-4 w-4 text-ezapply-gray mr-2" />
                        {doc.name}
                      </td>
                      <td className="py-3 px-4">
                        {doc.status === "uploaded" ? (
                          <span className="inline-flex items-center text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Uploaded
                          </span>
                        ) : doc.status === "pending" ? (
                          <span className="inline-flex items-center text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                            <Clock className="h-3 w-3 mr-1" />
                            Pending
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Rejected
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4">{doc.date || "-"}</td>
                      <td className="py-3 px-4">
                        {doc.status === "uploaded" ? (
                          <Button variant="ghost" size="sm" className="text-ezapply-blue">
                            View
                          </Button>
                        ) : doc.status === "rejected" ? (
                          <Button variant="ghost" size="sm" className="text-ezapply-blue" onClick={() => {
                            toast({
                              title: "Document Rejection Reason",
                              description: doc.reason,
                            });
                          }}>
                            View Issue
                          </Button>
                        ) : (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-ezapply-blue"
                            onClick={handleUpload}
                          >
                            Upload
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Documents;
