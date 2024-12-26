import { BookOpen, Bell, Search as SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { useState } from 'react';

export function Header() {
  const [isLoggedIn] = useState(false); // Replace with actual auth state

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">LitLearn</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/lessons" className="text-gray-600 hover:text-blue-600">Lessons</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link to="/tests" className="text-gray-600 hover:text-blue-600">Tests</Link>
            <Link to="/profile" className="text-gray-600 hover:text-blue-600">Profile</Link>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button className="relative p-2 text-gray-600 hover:text-blue-600">
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>
                <Link to="/profile">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                    alt="Profile"
                    className="h-8 w-8 rounded-full"
                  />
                </Link>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <Button variant="secondary">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}