import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  // the function for passing data from child to parent
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    // passing the value up to app (parent)
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* passing data from child (expense form) to parent (new expense) through the function SaveExpenseHandler */}
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
