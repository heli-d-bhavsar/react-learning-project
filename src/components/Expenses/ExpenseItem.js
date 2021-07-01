import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
function ExpenseItem(props) {
    //if we want to change any value on UI useState is used. First argument is name of that value and second is to function that updates that value
    const [title, setTitle]= useState(props.title) 
    const clickHandler = () => {
        setTitle("Updated")
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>);
}

export default ExpenseItem;
