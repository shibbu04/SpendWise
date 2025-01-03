import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PieChart, DollarSign, FileText } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const features = [
  {
    icon: <PieChart className="h-6 w-6 text-primary-600" />,
    title: 'Expense Analytics',
    description: 'Visualize your spending patterns with interactive charts and graphs.',
  },
  {
    icon: <DollarSign className="h-6 w-6 text-primary-600" />,
    title: 'Budget Tracking',
    description: 'Set and monitor your monthly budgets to stay on top of your finances.',
  },
  {
    icon: <FileText className="h-6 w-6 text-primary-600" />,
    title: 'PDF Reports',
    description: 'Generate detailed expense reports in PDF format for easy sharing.',
  },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white px-6 py-24 dark:bg-dark-bg sm:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-dark-text sm:text-6xl">
              Track Your Expenses <span className="text-primary-600">Effortlessly</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Take control of your finances with our intuitive expense tracking solution.
              Monitor spending, set budgets, and achieve your financial goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Button onClick={() => navigate('/register')} size="lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={() => navigate('/login')} variant="outline" size="lg">
                Sign In
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 px-6 py-24 dark:bg-dark-card sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-dark-text sm:text-4xl">
                Everything you need to manage expenses
              </h2>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-8 shadow-lg transition-transform hover:-translate-y-1 dark:bg-dark-bg"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}