
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      quote: "This platform has revolutionized how we connect with investors. The AI matching technology introduced us to the perfect funding partners for our tech startup.",
      author: "Sarah Johnson",
      role: "Founder, TechSolutions Inc.",
      avatar: "SJ",
    },
    {
      quote: "As an investor, I've been able to discover startups that perfectly align with my investment thesis. The AI analysis saves me countless hours of screening.",
      author: "Michael Chen",
      role: "Partner, Horizon Ventures",
      avatar: "MC",
    },
    {
      quote: "The blockchain-based agreements have brought a new level of trust and transparency to our investment process. It's truly the future of venture capital.",
      author: "David Rodriguez",
      role: "CEO, Innovation Labs",
      avatar: "DR",
    },
    {
      quote: "The pitch deck analysis feature provided invaluable insights that helped us refine our message. We secured funding within weeks of implementing the suggestions.",
      author: "Priya Patel",
      role: "Co-founder, GreenTech Solutions",
      avatar: "PP",
    },
    {
      quote: "This platform has transformed our investment strategy. The data-driven insights have helped us identify promising startups we might have otherwise overlooked.",
      author: "Thomas Wilson",
      role: "Investment Director, Catalyst Fund",
      avatar: "TW",
    },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Trusted by <span className="gradient-text">Entrepreneurs</span> and <span className="gradient-text">Investors</span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from the innovators and investors who have transformed their approach
              to funding and growth through our platform.
            </p>
          </div>
        </div>
        <div className="py-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full">
                    <CardContent className="flex flex-col justify-between p-6 h-full">
                      <div className="mb-4">
                        <p className="text-lg italic">"{testimonial.quote}"</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-r from-venture-400 to-investor-400 text-white">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium leading-none">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative mx-2" />
              <CarouselNext className="relative mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
