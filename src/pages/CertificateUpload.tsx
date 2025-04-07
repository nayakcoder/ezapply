import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Loader2, Upload, FileUp, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const CertificateUpload = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    degree: "",
    major: "",
    gpa: "",
    satScore: "",
    actScore: "",
    greScore: "",
    gmatScore: "",
    termsAgreed: false,
  });
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, termsAgreed: checked }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAgreed) {
      toast({
        title: "Terms not accepted",
        description: "You must agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Certificates uploaded successfully",
        description: "Your academic information has been saved.",
      });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Navigation (reused from Dashboard) */}
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
                  <Button variant="ghost" className="w-full justify-start text-white hover:text-white hover:bg-white/10">
                    Dashboard
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-white hover:text-white hover:bg-white/10">
                    My Application
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="mb-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center text-sm font-medium text-ezapply-blue hover:text-ezapply-darkblue transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </button>
        </div>
        
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Additional Certifications</h1>
          <p className="text-gray-600">Upload your test scores and academic information</p>
        </header>
        
        <Card className="max-w-3xl">
          <CardHeader>
            <CardTitle>Academic & Test Information</CardTitle>
            <CardDescription>
              Fill this form with your SAT/ACT/GRE/GMAT and other training certifications.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="degree">Highest Degree Obtained</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("degree", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select degree" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School (+2)</SelectItem>
                        <SelectItem value="bachelors">Bachelor's</SelectItem>
                        <SelectItem value="masters">Master's</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="major">Major Subject</Label>
                    <Input
                      id="major"
                      placeholder="e.g. Computer Science"
                      value={formData.major}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gpa">GPA/Percentage</Label>
                  <Input
                    id="gpa"
                    placeholder="e.g. 3.5 or 85%"
                    value={formData.gpa}
                    onChange={handleChange}
                  />
                  <p className="text-xs text-amber-600 flex items-center mt-1">
                    <Info className="h-3 w-3 mr-1" />
                    According to original marksheet
                  </p>
                </div>
                
                <div className="border-t pt-4 mt-6">
                  <h3 className="font-medium mb-4">Test Scores (Optional)</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="satScore">SAT Score</Label>
                      <Input
                        id="satScore"
                        placeholder="e.g. 1200"
                        value={formData.satScore}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="actScore">ACT Score</Label>
                      <Input
                        id="actScore"
                        placeholder="e.g. 24"
                        value={formData.actScore}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="greScore">GRE Score</Label>
                      <Input
                        id="greScore"
                        placeholder="e.g. 310"
                        value={formData.greScore}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="gmatScore">GMAT Score</Label>
                      <Input
                        id="gmatScore"
                        placeholder="e.g. 650"
                        value={formData.gmatScore}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-6">
                  <h3 className="font-medium mb-4">Upload Certificates</h3>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Input
                      id="certificate"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <Label
                      htmlFor="certificate"
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      <FileUp className="h-10 w-10 text-gray-400 mb-2" />
                      <span className="font-medium text-gray-700 mb-1">
                        {selectedFile ? selectedFile.name : "Click to upload certificate"}
                      </span>
                      <span className="text-sm text-gray-500">
                        PDF, JPG, or PNG (max. 5MB)
                      </span>
                    </Label>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAgreed}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I confirm that all the information provided is accurate and authentic.
                  </Label>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-ezapply-blue hover:bg-ezapply-darkblue"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CertificateUpload;
