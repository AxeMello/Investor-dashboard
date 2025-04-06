
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MessageCircle, SendHorizontal, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function GeminiChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your Venture Spark AI Assistant. How can I help you with startups, investments, or entrepreneurship today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    if (!apiKey && showApiKeyInput) {
      toast({
        title: "API Key Required",
        description: "Please enter your Gemini API key to continue.",
        variant: "destructive",
      });
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // This would normally call the Gemini API
      const assistantMessage = await mockGeminiAPICall(input, apiKey);
      
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: assistantMessage,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Mock API call - in production, this would call the actual Gemini API
  const mockGeminiAPICall = async (message: string, apiKey: string): Promise<string> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Simple mock responses based on keywords
    if (message.toLowerCase().includes("startup")) {
      return "Building a successful startup requires a strong value proposition, product-market fit, and a scalable business model. Consider focusing on solving a real problem for your target audience.";
    } else if (message.toLowerCase().includes("invest")) {
      return "When considering investments in early-stage startups, look at the team's experience, market opportunity, traction, and competitive advantage. Always diversify your portfolio to manage risk.";
    } else if (message.toLowerCase().includes("pitch")) {
      return "A great pitch deck should include your problem statement, solution, market size, business model, traction, team, competition analysis, and funding ask. Keep it concise and compelling.";
    } else {
      return "That's an interesting question! As an AI assistant focused on venture capital and startups, I can provide insights on fundraising, business development, market analysis, and investment strategies. How can I help you specifically with your entrepreneurial journey?";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleApiKeySubmit = () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter a valid Gemini API key.",
        variant: "destructive",
      });
      return;
    }
    
    setShowApiKeyInput(false);
    toast({
      title: "API Key Saved",
      description: "Your Gemini API key has been saved for this session.",
    });
  };

  if (showApiKeyInput) {
    return (
      <Card className="p-6">
        <div className="flex items-center mb-4">
          <Sparkles className="h-5 w-5 mr-2 text-venture-600" />
          <h3 className="text-lg font-medium">Connect to Gemini API</h3>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          To use the AI assistant, please enter your Gemini API key. This key will only be stored in your browser for this session.
        </p>
        <div className="space-y-4">
          <Textarea
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Gemini API key..."
            className="min-h-[40px] resize-none"
          />
          <div className="flex justify-end">
            <Button onClick={handleApiKeySubmit}>
              Connect <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="flex flex-col h-[600px] rounded-xl border">
      <div className="flex items-center justify-between bg-muted/50 px-4 py-2 border-b">
        <div className="flex items-center">
          <MessageCircle className="h-5 w-5 mr-2" />
          <span className="font-medium">Venture Spark AI Assistant</span>
        </div>
        <div className="flex items-center">
          <Sparkles className="h-4 w-4 text-venture-600" />
          <span className="text-xs text-muted-foreground ml-1">Powered by Gemini</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.role === "user"
                  ? "bg-venture-600 text-white"
                  : "bg-muted"
              }`}
            >
              <div className="whitespace-pre-wrap">{message.content}</div>
              <div className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t p-4">
        <div className="flex items-center space-x-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about startups, investing, or entrepreneurship..."
            className="min-h-[60px] resize-none"
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <Button
            onClick={handleSend}
            className="h-[60px] shrink-0"
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                <span>Thinking</span>
              </div>
            ) : (
              <SendHorizontal className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
