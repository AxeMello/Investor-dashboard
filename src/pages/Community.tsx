
import * as React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { GeminiChatbot } from "@/components/community/GeminiChatbot";
import { CommunityForum } from "@/components/community/CommunityForum";
import { CommunityEvents } from "@/components/community/CommunityEvents";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <div className="flex-grow container py-8 max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Community Hub</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Connect with entrepreneurs and investors in our thriving community
          </p>
        </div>

        <Tabs defaultValue="forum" className="mb-8">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
            <TabsTrigger value="forum">Discussion Forum</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            <TabsTrigger value="ai-assistant">AI Assistant</TabsTrigger>
          </TabsList>
          <TabsContent value="forum" className="mt-6">
            <CommunityForum />
          </TabsContent>
          <TabsContent value="events" className="mt-6">
            <CommunityEvents />
          </TabsContent>
          <TabsContent value="ai-assistant" className="mt-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Venture Spark AI Assistant</h2>
              <p className="text-muted-foreground mb-6">
                Ask questions about investing, startups, fundraising, or get advice on your business plans.
                Our AI assistant is powered by Google's Gemini API and can help with a wide range of topics.
              </p>
              <GeminiChatbot />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Community;