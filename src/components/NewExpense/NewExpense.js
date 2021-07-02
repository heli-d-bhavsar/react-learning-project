import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false)
    };
    const cancelExpenseDataHandler = () => {
        setIsEditing(false)
    }
    const showAddExpenseFormHandler = () => {
        setIsEditing(true)
    }
    return (
        <div className="new-expense">
            {isEditing == false ? <button className="new-expense button" onClick={showAddExpenseFormHandler}>Add New Expense</button> : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelExpenseDataHandler}></ExpenseForm>}
        </div>
    );
}

export default NewExpense;