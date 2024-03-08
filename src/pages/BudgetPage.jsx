import React from 'react'
import { fetchData } from '../helper'
import { useLoaderData, useParams } from 'react-router-dom'
import BudgetItem from '../components/BudgetItem'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseItem from '../components/ExpenseItem'
import ExpensesPage from './ExpensesPage'
import Table from '../components/Table'

export const budgetPageLoader = async ({ params }) => {
  const budgets = fetchData('budgets')

  // array[{}] get the first index
  const budget = budgets.filter(budget => {
    if (budget.id === params.id){
      return budget
    }
  })[0] 

  const expenses = fetchData('expenses')

  return {budget, budgets, expenses}
}

const BudgetPage = () => {
  const { budget, budgets, expenses } = useLoaderData()
  const {id} = useParams()

  return (
    <div className="">
      {budget && <h1>{budget.name} Overview</h1>}
      <BudgetItem budget={budget}/>
      <ExpenseForm budgets={budgets.filter(budget => {return (budget.id === id)})}/>
      <ExpensesPage />
      {/* <Table expenses={expenses}/> */}
    </div>
  )
}

export default BudgetPage