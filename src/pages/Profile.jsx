import { Award, Book, Clock, Trophy } from 'lucide-react';

export function Profile() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    level: "Intermediate",
    progress: 65,
    completedLessons: 12,
    points: 2450,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  };

  return (
    <div className="py-8 min-h-screen space-y-8">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Trophy, label: 'Level', value: user.level },
          { icon: Book, label: 'Completed', value: `${user.completedLessons} lessons` },
          { icon: Award, label: 'Points', value: user.points },
          { icon: Clock, label: 'Progress', value: `${user.progress}%` }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <stat.icon className="h-5 w-5 text-blue-600" />
              <span className="text-gray-600">{stat.label}</span>
            </div>
            <p className="text-xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: "Completed lesson", item: "Introduction to Poetry", time: "2 hours ago" },
            { action: "Earned badge", item: "Shakespeare Expert", time: "1 day ago" },
            { action: "Completed test", item: "Literary Devices Quiz", time: "2 days ago" }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
              <div>
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-gray-600">{activity.item}</p>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}