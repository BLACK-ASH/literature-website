import PropTypes from 'prop-types';
import { Clock, Users, BookOpen } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Progress } from './ui/Progress';

export function LessonCard({ lesson }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      {lesson.imageUrl && (
        <img 
          src={lesson.imageUrl} 
          alt={lesson.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{lesson.title}</h3>
          <Badge variant={
            lesson.level === 'Beginner' ? 'info' :
            lesson.level === 'Intermediate' ? 'warning' : 'success'
          }>{lesson.level}</Badge>
        </div>
        <p className="text-gray-600 mb-4">{lesson.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {lesson.duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {lesson.enrolled} enrolled
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            {lesson.modules} modules
          </div>
        </div>
        {lesson.progress && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">{lesson.progress}%</span>
            </div>
            <Progress value={lesson.progress} />
          </div>
        )}
      </div>
    </Card>
  );
}

LessonCard.propTypes = {
  lesson: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    enrolled: PropTypes.number.isRequired,
    modules: PropTypes.number.isRequired,
    progress: PropTypes.number,
    imageUrl: PropTypes.string
  }).isRequired
};