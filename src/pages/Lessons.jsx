import { useState } from 'react';
import { SearchBar } from '../components/ui/SearchBar';
import { LessonCard } from '../components/LessonCard';

const LESSONS = [
  {
    id: 1,
    title: "Introduction to Shakespeare",
    description: "Explore the life and works of William Shakespeare through his most famous plays.",
    duration: "4 weeks",
    level: "Beginner",
    enrolled: 1234,
    modules: 12,
    progress: 45,
    imageUrl: "https://images.unsplash.com/photo-1509024644558-2f56ce76c490?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Modern American Poetry",
    description: "Discover the evolution of American poetry through the works of influential poets.",
    duration: "3 weeks",
    level: "Intermediate",
    enrolled: 856,
    modules: 8,
    progress: 0,
    imageUrl: "https://images.unsplash.com/photo-1455885661740-29cbf08a42fa?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Victorian Literature",
    description: "Examine the literary movements and social context of Victorian-era writing.",
    duration: "6 weeks",
    level: "Advanced",
    enrolled: 567,
    modules: 15,
    progress: 80,
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80"
  }
];

export function Lessons() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filteredLessons = LESSONS.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || lesson.level.toLowerCase() === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="py-8 min-h-screen space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <h1 className="text-3xl font-bold">Available Lessons</h1>
        <div className="flex gap-4 md:w-2/3">
          <SearchBar 
            placeholder="Search lessons..." 
            onSearch={setSearchTerm}
          />
          <select
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}