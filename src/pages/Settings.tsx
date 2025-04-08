
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Save, Lock, Bell, User, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/DashboardLayout";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [accountForm, setAccountForm] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567"
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    browser: true,
    updates: false,
    marketing: false
  });

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setAccountForm(prev => ({ ...prev, [id]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [id]: value }));
  };

  const handleNotificationToggle = (key: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSaveAccount = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account updated",
      description: "Your account information has been updated successfully."
    });
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your new password and confirmation match.",
        variant: "destructive"
      });
      return;
    }
    
    if (passwordForm.newPassword.length < 8) {
      toast({
        title: "Password too short",
        description: "Your password must be at least 8 characters long.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Password changed",
      description: "Your password has been changed successfully."
    });
    
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Notification preferences updated",
      description: "Your notification preferences have been saved."
    });
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
        
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-ezapply-darkblue">Account Settings</h1>
          <p className="text-ezapply-gray">Manage your account preferences and information</p>
        </header>
        
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="account" className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Account
            </TabsTrigger>
            <TabsTrigger value="password" className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              Password
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your account information</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveAccount} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={accountForm.firstName}
                        onChange={handleAccountChange}
                        className="text-ezapply-darkblue"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={accountForm.lastName}
                        onChange={handleAccountChange}
                        className="text-ezapply-darkblue"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={accountForm.email}
                      onChange={handleAccountChange}
                      className="text-ezapply-darkblue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={accountForm.phone}
                      onChange={handleAccountChange}
                      className="text-ezapply-darkblue"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-ezapply-blue hover:bg-ezapply-darkblue">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleChangePassword} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={passwordForm.currentPassword}
                      onChange={handlePasswordChange}
                      className="text-ezapply-darkblue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={passwordForm.newPassword}
                      onChange={handlePasswordChange}
                      className="text-ezapply-darkblue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={passwordForm.confirmPassword}
                      onChange={handlePasswordChange}
                      className="text-ezapply-darkblue"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-ezapply-blue hover:bg-ezapply-darkblue">
                      Change Password
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Customize how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveNotifications} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Email Notifications</Label>
                        <p className="text-sm text-ezapply-gray">Receive updates via email</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.email}
                        onCheckedChange={() => handleNotificationToggle("email")}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Browser Notifications</Label>
                        <p className="text-sm text-ezapply-gray">Show notifications in browser</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.browser}
                        onCheckedChange={() => handleNotificationToggle("browser")}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Product Updates</Label>
                        <p className="text-sm text-ezapply-gray">Receive updates about new features</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.updates}
                        onCheckedChange={() => handleNotificationToggle("updates")}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Marketing Emails</Label>
                        <p className="text-sm text-ezapply-gray">Receive promotional emails</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.marketing}
                        onCheckedChange={() => handleNotificationToggle("marketing")}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-ezapply-blue hover:bg-ezapply-darkblue">
                      <Save className="mr-2 h-4 w-4" />
                      Save Preferences
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
