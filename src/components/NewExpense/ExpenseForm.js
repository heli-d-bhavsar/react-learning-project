import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    //This approach to change states of inputs separately
    // const [enteredTitle , setEnteredTitle] = useState('')
    // const [enteredAmount , setEnteredAmount] = useState('')
    // const [date , setDate] = useState('')

    //This approach to change states of inputs all to gather
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })
    const titleChangeHandler = (event) => {
        //setEnteredTitle(event.target.value)
        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value }
        })
    };
    const amountChangeHandler = (event) => {
        //setEnteredAmount(event.target.value)
        setUserInput((prevState) => {
            return { ...prevState, amount: event.target.value }
        })
    };
    const dateChangeHandler = (event) => {
        //setDate(event.target.value)
        setUserInput((prevState) => {
            return { ...prevState, date: event.target.value }
        })
    };
    const submitHandler = (event) => {
        userInput.date = new Date(userInput.date)
        event.preventDefault()  //To prevent default behaviour of form
        props.onSaveExpenseData(userInput); 
        setUserInput({
            title: '',
            amount: '',
            date: ''
        })
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' value={userInput.title} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='number' value={userInput.amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' value={userInput.date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    );
}
export default ExpenseForm