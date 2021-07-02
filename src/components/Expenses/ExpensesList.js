import "./ExpensesList.css"
import ExpenseItem from './ExpenseItem'
const ExpensesList = (props) => {
    if (props.expenses.length === 0) {
      return <h2  className="expenses-list__fallback">No expenses found</h2>
    }
    return (
        <ul className="expenses-list">
            {props.expenses.map(expense =>
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={expense.id}>
                </ExpenseItem>
            )}
        </ul>
    )
}

export default ExpensesList