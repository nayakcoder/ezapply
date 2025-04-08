
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, MapPin, Globe, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const Universities = () => {
  const navigate = useNavigate();
  
  // Sample university data
  const universities = [
    {
      id: 1,
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, MA, USA",
      ranking: "#1 in Engineering",
      programs: ["Computer Science", "Engineering", "Business"],
      website: "https://mit.edu"
    },
    {
      id: 2,
      name: "Stanford University",
      location: "Stanford, CA, USA",
      ranking: "#2 in Engineering",
      programs: ["Computer Science", "Business", "Medicine"],
      website: "https://stanford.edu"
    },
    {
      id: 3,
      name: "University of California, Berkeley",
      location: "Berkeley, CA, USA",
      ranking: "#3 in Engineering",
      programs: ["Computer Science", "Engineering", "Biology"],
      website: "https://berkeley.edu"
    }
  ];

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
          <h1 className="text-3xl font-bold text-ezapply-darkblue">Universities</h1>
          <p className="text-ezapply-gray">Browse and select your target universities</p>
        </header>
        
        <div className="grid grid-cols-1 gap-6">
          {universities.map((university) => (
            <Card key={university.id} className="card-hover-effect">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-xl flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-ezapply-blue" />
                    {university.name}
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="text-ezapply-blue" asChild>
                    <a href={university.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center text-ezapply-darkblue">
                    <MapPin className="h-4 w-4 mr-2 text-ezapply-gray" />
                    <span>{university.location}</span>
                  </div>
                  <div className="flex items-center text-ezapply-darkblue">
                    <Globe className="h-4 w-4 mr-2 text-ezapply-gray" />
                    <span>{university.ranking}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-medium text-sm text-ezapply-darkblue mb-1">Available Programs:</p>
                  <div className="flex flex-wrap gap-2">
                    {university.programs.map((program, idx) => (
                      <span key={idx} className="bg-ezapply-lightblue text-ezapply-darkblue text-xs py-1 px-2 rounded">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button className="bg-ezapply-blue hover:bg-ezapply-darkblue">
                    Add to Application
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Universities;
