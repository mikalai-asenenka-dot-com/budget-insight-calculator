
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Expense } from "./ExpenseCalculator";

interface ExpenseTableProps {
  expenses: Expense[];
  onAddExpense: (category: string, amount: number) => void;
  onRemoveExpense: (id: string) => void;
}

const ExpenseTable = ({ expenses, onAddExpense, onRemoveExpense }: ExpenseTableProps) => {
  const [newCategory, setNewCategory] = useState("");
  const [newAmount, setNewAmount] = useState("");

  const handleAddExpense = () => {
    if (newCategory.trim() && newAmount.trim()) {
      const amount = parseFloat(newAmount.replace(/,/g, ""));
      if (!isNaN(amount) && amount > 0) {
        onAddExpense(newCategory.trim(), amount);
        setNewCategory("");
        setNewAmount("");
        console.log(`Added expense: ${newCategory} - $${amount}`);
      }
    }
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US').format(amount);
  };

  const handleAmountChange = (value: string) => {
    // Allow only numbers and commas
    const cleanValue = value.replace(/[^\d,]/g, "");
    setNewAmount(cleanValue);
  };

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">Amount ($)</th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
                <td className="py-3 px-4 text-gray-800">{expense.category}</td>
                <td className="py-3 px-4 text-right font-medium text-gray-800">
                  {formatAmount(expense.amount)}
                </td>
                <td className="py-3 px-4 text-center">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onRemoveExpense(expense.id)}
                    className="text-xs"
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Add New Expense</h3>
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
            <Input
              placeholder="e.g., Groceries"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">Amount ($)</label>
            <Input
              placeholder="e.g., 15,000"
              value={newAmount}
              onChange={(e) => handleAmountChange(e.target.value)}
              className="w-full"
            />
          </div>
          <Button
            onClick={handleAddExpense}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 flex items-center gap-2"
          >
            <Plus size={16} />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTable;
