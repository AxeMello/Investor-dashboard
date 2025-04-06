
import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, ThumbsUp, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for forum posts
const forumPosts = [
  {
    id: 1,
    author: "Alex Johnson",
    authorInitials: "AJ",
    title: "Looking for co-founder in fintech space",
    content: "I'm working on a new payment solution for small businesses and looking for a technical co-founder with experience in payment systems and financial APIs. Based in San Francisco but open to remote collaboration.",
    tags: ["fintech", "co-founder", "startup"],
    likes: 24,
    comments: 8,
    date: "2 days ago",
  },
  {
    id: 2,
    author: "Sarah Williams",
    authorInitials: "SW",
    title: "Seed funding experiences in today's market",
    content: "Just closed our seed round of $1.2M and wanted to share some insights about the current funding climate. VCs are definitely more cautious but still investing in solutions with clear market fit and traction.",
    tags: ["funding", "seed", "vc"],
    likes: 36,
    comments: 14,
    date: "3 days ago",
  },
  {
    id: 3,
    author: "Michael Chen",
    authorInitials: "MC",
    title: "AI integration strategies for SaaS products",
    content: "We're exploring ways to integrate AI capabilities into our SaaS platform. Would love to hear from others who have successfully implemented AI features and how they approached the development and pricing strategy.",
    tags: ["ai", "saas", "product development"],
    likes: 19,
    comments: 7,
    date: "5 days ago",
  },
];

export function CommunityForum() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Discussion Forum</h2>
        <Button>Start New Discussion</Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {forumPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{post.authorInitials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <div className="text-sm text-muted-foreground mt-1">
                      Posted by {post.author} • <Calendar className="h-3 w-3 inline" /> {post.date}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.content}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" /> {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" /> {post.comments}
                </Button>
              </div>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <Button variant="outline">Load More Discussions</Button>
      </div>
    </div>
  );
}
