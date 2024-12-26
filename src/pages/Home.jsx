import { ArrowRight, BookOpen, Brain, Trophy, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const features = [
  {
    icon: BookOpen,
    title: 'Curated Content',
    description: 'Expert-crafted lessons covering classics to modern literature'
  },
  {
    icon: Brain,
    title: 'Interactive Learning',
    description: 'Engage with interactive exercises and discussions'
  },
  {
    icon: Trophy,
    title: 'Track Progress',
    description: 'Monitor your learning journey with detailed progress tracking'
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "English Literature Student",
    content: "This platform has transformed how I study literature. The interactive lessons are engaging and insightful.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Chen",
    role: "Book Club Leader",
    content: "The depth of analysis and discussion prompts have greatly enhanced our book club meetings.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  }
];

export function Home() {
  return (
    <div className="space-y-16 min-h-screen py-8">
      <section className="text-center space-y-6">
        <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Star className="h-4 w-4 mr-2" />
          New courses added weekly
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Master English Literature
          <br />
          <span className="text-blue-600">One Story at a Time</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Dive into the world of classic and contemporary literature through interactive lessons,
          engaging discussions, and expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="inline-flex items-center">
            Start Learning <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="secondary">View Curriculum</Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 hover:shadow-md transition-shadow">
            <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </Card>
        ))}
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">What Our Students Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <Badge variant="info">{testimonial.role}</Badge>
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}