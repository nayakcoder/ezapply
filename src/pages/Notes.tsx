
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, User, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/DashboardLayout";

interface Message {
  id: number;
  sender: "user" | "support";
  content: string;
  timestamp: Date;
}

const Notes = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "support",
      content: "Hello! How can I assist you with your university application today?",
      timestamp: new Date(Date.now() - 86400000) // 24 hours ago
    },
    {
      id: 2,
      sender: "user",
      content: "Hi, I'm looking for information about required documents for UK universities.",
      timestamp: new Date(Date.now() - 85400000)
    },
    {
      id: 3,
      sender: "support",
      content: "For UK universities, you typically need to provide your academic transcripts, personal statement, reference letters, English language proficiency test results (like IELTS or TOEFL), and passport. Some universities may have additional requirements depending on your program of study.",
      timestamp: new Date(Date.now() - 84400000)
    },
    {
      id: 4,
      sender: "user",
      content: "Thank you for the information. Do all UK universities accept the IELTS?",
      timestamp: new Date(Date.now() - 80000000)
    },
    {
      id: 5,
      sender: "support",
      content: "Yes, almost all UK universities accept IELTS. Most require a minimum score of 6.0 or 6.5 overall, with at least 5.5 or 6.0 in each component. However, some top universities or specific programs may require higher scores (7.0+). I would recommend checking the specific requirements for your target universities.",
      timestamp: new Date(Date.now() - 79000000)
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      content: newMessage.trim(),
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setNewMessage("");
    
    // Simulate reply after a short delay
    setTimeout(() => {
      const supportMessage: Message = {
        id: messages.length + 2,
        sender: "support",
        content: "Thank you for your message. Our support team will respond to your inquiry within 24 hours.",
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, supportMessage]);
      
      toast({
        title: "Message sent",
        description: "Your message has been sent to our support team.",
      });
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString();
    }
  };

  const filteredMessages = searchQuery 
    ? messages.filter(msg => 
        msg.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : messages;

  // Group messages by date
  const groupedMessages: { [key: string]: Message[] } = {};
  filteredMessages.forEach(message => {
    const dateString = formatDate(message.timestamp);
    if (!groupedMessages[dateString]) {
      groupedMessages[dateString] = [];
    }
    groupedMessages[dateString].push(message);
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col h-screen bg-gray-50">
        <div className="p-4 border-b">
          <div className="mb-2">
            <Button 
              variant="ghost" 
              className="flex items-center text-sm font-medium text-ezapply-darkblue hover:text-ezapply-blue transition-colors"
              onClick={() => navigate("/dashboard")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-ezapply-darkblue">Notes & Support</h1>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-ezapply-gray" />
              <Input
                placeholder="Search conversations"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {Object.keys(groupedMessages).length > 0 ? (
            Object.entries(groupedMessages).map(([date, msgs]) => (
              <div key={date} className="space-y-4">
                <div className="flex justify-center">
                  <span className="bg-gray-100 text-ezapply-gray text-xs px-3 py-1 rounded-full">
                    {date}
                  </span>
                </div>
                
                {msgs.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[70%] ${message.sender === "user" ? "bg-ezapply-blue text-white" : "bg-white border"} rounded-lg p-3 shadow-sm`}>
                      <div className={`flex items-center mb-1 ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                        {message.sender === "support" && (
                          <div className="bg-gray-100 rounded-full p-1 mr-2">
                            <User className="h-3 w-3 text-ezapply-darkblue" />
                          </div>
                        )}
                        <span className={`text-xs ${message.sender === "user" ? "text-white/70" : "text-ezapply-gray"}`}>
                          {message.sender === "user" ? "You" : "Support Team"}
                        </span>
                        {message.sender === "user" && (
                          <div className="bg-white/20 rounded-full p-1 ml-2">
                            <User className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className={message.sender === "user" ? "text-white" : "text-ezapply-darkblue"}>
                        {message.content}
                      </p>
                      <div className={`text-xs mt-1 ${message.sender === "user" ? "text-white/70 text-right" : "text-ezapply-gray"}`}>
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-ezapply-gray">
                <p>No messages found</p>
                {searchQuery && <p className="text-sm mt-1">Try a different search term</p>}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t">
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <Textarea
              placeholder="Type your message here..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 resize-none"
              rows={2}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  if (newMessage.trim()) handleSendMessage(e);
                }
              }}
            />
            <Button 
              type="submit" 
              disabled={!newMessage.trim()}
              className="self-end bg-ezapply-blue hover:bg-ezapply-darkblue"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <p className="text-xs text-ezapply-gray mt-2">
            Press Enter to send. Use Shift+Enter for a new line.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notes;
