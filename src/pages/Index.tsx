
import ExpenseCalculator from "@/components/ExpenseCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Expense Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your monthly expenses and get insights into your spending patterns with our comprehensive calculator
          </p>
        </div>
        <ExpenseCalculator />
      </div>
    </div>
  );
};

export default Index;
