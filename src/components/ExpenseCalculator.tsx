
import { useState } from "react";
import ExpenseTable from "./ExpenseTable";
import Results from "./Results";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Expense {
  id: string;
  category: string;
  amount: number;
}

const ExpenseCalculator = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: "1", category: "Groceries", amount: 15000 },
    { id: "2", category: "Rent", amount: 40000 },
    { id: "3", category: "Transportation", amount: 5000 },
    { id: "4", category: "Entertainment", amount: 10000 },
    { id: "5", category: "Communication", amount: 2000 },
    { id: "6", category: "Gym", amount: 3000 },
  ]);

  const [showResults, setShowResults] = useState(false);

  const addExpense = (category: string, amount: number) => {
    const newExpense: Expense = {
      id: Date.now().toString(),
      category,
      amount,
    };
    setExpenses([...expenses, newExpense]);
  };

  const removeExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const calculateResults = () => {
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const averageDaily = totalAmount / 30;
    const topThree = [...expenses]
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 3);

    return {
      totalAmount,
      averageDaily,
      topThree,
    };
  };

  const handleCalculate = () => {
    console.log("Calculating expenses...", calculateResults());
    setShowResults(true);
  };

  const results = calculateResults();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Monthly Expenses</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ExpenseTable 
            expenses={expenses}
            onAddExpense={addExpense}
            onRemoveExpense={removeExpense}
          />
          <div className="mt-6 text-center">
            <Button 
              onClick={handleCalculate}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg font-semibold shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              Calculate Expenses
            </Button>
          </div>
        </CardContent>
      </Card>

      {showResults && (
        <div className="animate-fade-in">
          <Results results={results} />
        </div>
      )}
    </div>
  );
};

export default ExpenseCalculator;
