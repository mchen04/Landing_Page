import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

const reviews = [
  {
    name: "Alex Chen",
    role: "Senior Developer",
    review: "DevForge has completely transformed our development workflow. The AI suggestions are incredibly accurate.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300"
  },
  {
    name: "Sarah Miller",
    role: "Tech Lead",
    review: "The integrated terminal and Git features save us countless hours every week. Best IDE I've ever used.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300"
  },
  {
    name: "James Wilson",
    role: "Full Stack Developer",
    review: "The cloud deployment integration is seamless. One-click deploys have made our releases so much smoother.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300"
  },
  {
    name: "Maria Garcia",
    role: "DevOps Engineer",
    review: "Enterprise security features give us peace of mind. The audit logs are particularly useful.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300"
  },
  {
    name: "David Park",
    role: "Software Architect",
    review: "The database tools are exceptional. Query optimization suggestions have improved our app performance.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300"
  }
];

const ReviewsSection = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Loved by Developers</h2>
        <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true, align: "start" }} setApi={setApi}>
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center mb-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-center">{review.review}</p>
                    <div className="text-center">
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ReviewsSection;