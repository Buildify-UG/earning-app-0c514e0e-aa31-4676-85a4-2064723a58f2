import { useState } from 'react';
import { Coins, Zap, Gamepad2, ClipboardList, TrendingUp, Wallet, ArrowRight, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Index() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [userBalance] = useState(2450.50);
  const [userLevel] = useState('Gold');

  const tasks = [
    { id: 1, title: 'Quick Survey - Tech Habits', reward: 50, time: '5 mins', type: 'survey', difficulty: 'Easy' },
    { id: 2, title: 'Download & Rate App', reward: 150, time: '10 mins', type: 'app', difficulty: 'Easy' },
    { id: 3, title: 'Complete Profile Survey', reward: 75, time: '8 mins', type: 'survey', difficulty: 'Easy' },
    { id: 4, title: 'Play Game & Score 1000pts', reward: 200, time: '15 mins', type: 'game', difficulty: 'Medium' },
    { id: 5, title: 'Video Feedback - Product', reward: 100, time: '12 mins', type: 'survey', difficulty: 'Medium' },
    { id: 6, title: 'Download 3 Apps', reward: 300, time: '20 mins', type: 'app', difficulty: 'Hard' },
  ];

  const games = [
    { id: 1, name: 'Spin & Win', reward: 50, image: '🎡', players: '2.5K' },
    { id: 2, name: 'Tap Master', reward: 100, image: '⚡', players: '5.2K' },
    { id: 3, name: 'Block Blast', reward: 150, image: '🧩', players: '3.1K' },
    { id: 4, name: 'Quiz Rush', reward: 75, image: '🧠', players: '4.8K' },
  ];

  const surveys = [
    { id: 1, title: 'Shopping Habits 2026', reward: 60, questions: 12, time: '6 mins' },
    { id: 2, title: 'Social Media Usage', reward: 45, questions: 8, time: '4 mins' },
    { id: 3, title: 'Travel Preferences', reward: 80, questions: 15, time: '8 mins' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900">EarnHub</h1>
              <p className="text-xs text-gray-500">Real Tasks, Real Money</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Balance</p>
              <p className="text-2xl font-bold text-blue-600">₹{userBalance.toFixed(2)}</p>
            </div>
            <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition">
              <Wallet className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Level</p>
                <p className="text-3xl font-bold text-blue-600">{userLevel}</p>
              </div>
              <Star className="w-12 h-12 text-yellow-400" />
            </div>
          </Card>
          <Card className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Tasks Completed</p>
                <p className="text-3xl font-bold text-purple-600">247</p>
              </div>
              <TrendingUp className="w-12 h-12 text-purple-400" />
            </div>
          </Card>
          <Card className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">This Month</p>
                <p className="text-3xl font-bold text-green-600">₹8,450</p>
              </div>
              <Zap className="w-12 h-12 text-green-400" />
            </div>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-200">
          {[
            { id: 'overview', label: 'All Tasks', icon: '📋' },
            { id: 'games', label: 'Games', icon: '🎮' },
            { id: 'surveys', label: 'Surveys', icon: '📝' },
            { id: 'apps', label: 'Apps', icon: '📱' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-3 font-medium transition-all border-b-2 ${
                selectedTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab - All Tasks */}
        {selectedTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tasks.map((task) => (
              <Card key={task.id} className="p-5 bg-white border-0 shadow-sm hover:shadow-lg transition cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                      {task.type === 'survey' && <ClipboardList className="w-6 h-6 text-blue-600" />}
                      {task.type === 'app' && <Zap className="w-6 h-6 text-purple-600" />}
                      {task.type === 'game' && <Gamepad2 className="w-6 h-6 text-green-600" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{task.title}</h3>
                      <div className="flex gap-2 text-xs text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {task.time}
                        </span>
                        <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">{task.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">+₹{task.reward}</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Start Task <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        )}

        {/* Games Tab */}
        {selectedTab === 'games' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {games.map((game) => (
              <Card key={game.id} className="p-6 bg-white border-0 shadow-sm hover:shadow-lg transition cursor-pointer text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition">{game.image}</div>
                <h3 className="font-bold text-gray-900 mb-2">{game.name}</h3>
                <p className="text-sm text-gray-600 mb-3">Up to ₹{game.reward}</p>
                <p className="text-xs text-gray-500 mb-4">{game.players} playing</p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg">
                  Play Now
                </Button>
              </Card>
            ))}
          </div>
        )}

        {/* Surveys Tab */}
        {selectedTab === 'surveys' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {surveys.map((survey) => (
              <Card key={survey.id} className="p-6 bg-white border-0 shadow-sm hover:shadow-lg transition cursor-pointer">
                <h3 className="font-bold text-gray-900 mb-2">{survey.title}</h3>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span>{survey.questions} questions</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {survey.time}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-green-600">₹{survey.reward}</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    Take Survey
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Apps Tab */}
        {selectedTab === 'apps' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'PhotoPro', reward: 200, rating: 4.8, downloads: '100K+' },
              { name: 'FitTrack', reward: 150, rating: 4.6, downloads: '50K+' },
              { name: 'ShopSmart', reward: 180, rating: 4.7, downloads: '75K+' },
              { name: 'NewsFlow', reward: 120, rating: 4.5, downloads: '200K+' },
            ].map((app, idx) => (
              <Card key={idx} className="p-6 bg-white border-0 shadow-sm hover:shadow-lg transition cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">{app.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600">{app.rating} ({app.downloads})</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-green-600">₹{app.reward}</p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Download & Earn
                </Button>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-3">About</h4>
              <p className="text-sm">EarnHub connects you with real earning opportunities through tasks, surveys, and games.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Features</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Real Money Payouts</li>
                <li>✓ Instant Withdrawals</li>
                <li>✓ No Hidden Charges</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">What's Next?</h4>
              <ul className="text-sm space-y-1">
                <li>🔐 User Authentication</li>
                <li>💳 Payment Integration</li>
                <li>📊 Leaderboards</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 text-center text-sm">
            <p>&copy; 2026 EarnHub. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
