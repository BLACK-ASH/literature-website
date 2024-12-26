import { CheckCircle2, Clock } from 'lucide-react';

export function Tests() {
  const tests = [
    {
      id: 1,
      title: "Literary Devices Quiz",
      description: "Test your knowledge of metaphors, similes, and other literary devices",
      questions: 20,
      timeLimit: "30 minutes",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "Shakespeare's Plays",
      description: "Comprehensive test on major Shakespearean plays",
      questions: 25,
      timeLimit: "45 minutes",
      difficulty: "Advanced"
    }
  ];

  return (
    <div className="py-8 min-h-screen space-y-6">
      <h1 className="text-3xl font-bold">Knowledge Tests</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {tests.map(test => (
          <div key={test.id} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{test.title}</h3>
            <p className="text-gray-600 mb-4">{test.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-1" />
                {test.questions} questions
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {test.timeLimit}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{test.difficulty}</span>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Start Test
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}