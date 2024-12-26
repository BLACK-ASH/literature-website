import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Lessons } from './pages/Lessons';
import { Blog } from './pages/Blog';
import { Tests } from './pages/Tests';
import { Profile } from './pages/Profile';
import { SignIn } from './pages/auth/SignIn';
import { SignUp } from './pages/auth/SignUp';

export default function App() {
  return (
    <div className="min-h-screen relative bg-gray-50">
      <Header />
      <main className="max-w-screen-xl mx-auto px-4 pb-20 md:pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <Navigation />
    </div>
  );
}