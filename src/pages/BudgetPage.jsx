import React from 'react'
import { fetchData } from '../helper'
import { useLoaderData } from 'react-router-dom'
import BudgetItem from '../components/BudgetItem'
import ExpenseForm from '../components/ExpenseForm'

export const budgetPageLoader = async ({ params }) => {
  const budgets = fetchData('budgets')

  // array[{}] get the first index
  const budget = budgets.filter(budget => {
    if (budget.id === params.id){
      return budget
    }
  })[0] 

  return {budget}
}

const BudgetPage = () => {
  const { budget } = useLoaderData()

  return (
    <div className="">
      {budget && <h1>{budget.name} Overview</h1>}
      <BudgetItem budget={budget}/>
      <ExpenseForm budgets={budget}/>
    </div>
  )
}

export default BudgetPage