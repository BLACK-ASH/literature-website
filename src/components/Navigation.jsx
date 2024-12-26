import { BookOpen, Home, Layout, TestTube2, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/lessons', icon: BookOpen, label: 'Lessons' },
  { path: '/blog', icon: Layout, label: 'Blog' },
  { path: '/tests', icon: TestTube2, label: 'Tests' },
  { path: '/profile', icon: User, label: 'Profile' },
];

export function Navigation() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="sticky bottom-2 left-0 right-0 bg-white border-t border-gray-200 md:relative md:border-t-0">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between md:justify-end space-x-4 py-3">
          {links.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors
                ${isActive(path)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-sm mt-1">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}