import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate'
import Card from './Card'
// useState is defined by calling react and destructing useState from the React library
import React, { useState } from 'react'

function ExpenseItem (props) {
    const [title, setTitle] = useState(props.title)

    const update = ()=> {
        setTitle('Updated');
        console.log(title)
    }

    //using variables to pass in dynamic data we can place this array of objects in app.js and call the data down with props. We pass data to components to make sure they are reusable. 

    // const expenseDate = new Date(2022, 7, 27)
    // const expenseTitle = 'Car Insurance'
    // const exepenseAmount = '294.67'

    //keep the jsx code as neat and clean as possible
    // const month = props.date.toLocaleString('en-US', {month: 'long'})
    // const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    // const year = props.date.getFullYear()
    
    return (
// using props . property we can dynamically render from data passed down from props in the component
        <Card className="expense-item">
           
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
            <h2  >{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={update}>Update</button>

        </Card>
        
    )
}

export default ExpenseItem