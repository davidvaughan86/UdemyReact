import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from './Card'

function Expenses (props) {
   
   const expense = props.expenses

   return (
<Card className="expenses">

{expense.map((item) => {
    return <div className="expenses"> <ExpenseItem title={item.title} amount={item.amount} date={item.date}/></div>
})}   


</Card>

   )}

export default Expenses