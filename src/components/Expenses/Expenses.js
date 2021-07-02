import './Expenses.css'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    let filteredExpenses = props.expenses.filter(ele => ele.date.getFullYear() == parseInt(filteredYear))
    return (
        //If we use && operator in ternary expression it will render first item after operator like "filteredExpenses.length === 0 && expenseContent"
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesList expenses={filteredExpenses}></ExpensesList>
            </Card>
        </div>
    );
}

export default Expenses;
