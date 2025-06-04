
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Expense } from "./ExpenseCalculator";

interface ResultsProps {
  results: {
    totalAmount: number;
    averageDaily: number;
    topThree: Expense[];
  };
}

const Results = ({ results }: ResultsProps) => {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US').format(Math.round(amount));
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="shadow-lg border-0 bg-gradient-to-br from-green-500 to-green-600 text-white transform transition-all duration-300 hover:scale-105">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Total Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">${formatAmount(results.totalAmount)}</div>
          <p className="text-green-100 text-sm mt-1">Monthly total</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white transform transition-all duration-300 hover:scale-105">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Average Daily</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">${formatAmount(results.averageDaily)}</div>
          <p className="text-blue-100 text-sm mt-1">Per day (30 days)</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white transform transition-all duration-300 hover:scale-105">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Top 3 Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {results.topThree.map((expense, index) => (
              <div key={expense.id} className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  {index + 1}. {expense.category}
                </span>
                <span className="font-semibold">${formatAmount(expense.amount)}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Results;
