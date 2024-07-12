import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

// toast library
import { toast } from 'react-toastify'

// helpers
import { fetchData } from '../helper'

// components
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
  console.log("BUDGETS[0]", budget)
  
  const expenses = fetchData('expenses') 
  // const newExpenses = expenses.filter(expense => {
  //   return (expense.budgetId === params.id)
  // })

  return {budget, budgets, expenses}
}

export const budgetPageAction = async ({request}) => {
  const formData = await request.formData()

  // wait
  const {_action, ...values} = Object.fromEntries(formData) 
  

  if(_action === 'deleteExpenseForm'){
    try{
      const existingExpenses = JSON.parse(localStorage.getItem('expenses')) ?? []
      const newExpense = existingExpenses.filter(expense => {
        if (expense.id !== values.expenseId){
          return expense
        }
      })
      localStorage.setItem('expenses', JSON.stringify(newExpense))
      return toast.success(`Succesfully deleted an item`)
    }catch(e){
      console.log(e)
      throw new Error(e.message)
    }
  }

  if(_action === 'newExpenseCategory'){
    try{
      const existingExpenses = JSON.parse(localStorage.getItem('expenses')) ?? []
      const newExpense = existingExpenses.filter(expense => {
        if (expense.id !== values.expenseId){
          return expense
        }
      })
      localStorage.setItem('expenses', JSON.stringify(newExpense))
      return toast.success(`Succesfully deleted an item`)
    }catch(e){
      console.log(e)
      throw new Error(e.message)
    }
  }

  if(_action === 'expenseForm'){
    try{
      const newItem = {
        id: crypto.randomUUID(),
        name: values.newExpenseName,
        amount: Number(values.newExpenseAmount),
        createdAt: Date.now(),
        budgetId: values.newExpenseCategory
      }
      const existingExpenses = JSON.parse(localStorage.getItem('expenses')) ?? []
      localStorage.setItem('expenses', JSON.stringify([...existingExpenses, newItem]))
      return toast.success('Successfully created new expenses')
    } catch(e){
      console.log(e)
      throw new Error(e)
    }
  }
}

const BudgetPage = () => {
  const { budget, budgets, expenses } = useLoaderData()
  const {id} = useParams()

  return (
    <div className="flex flex-col gap-y-8">
      {budget && <h1>{budget.name} Overview</h1>}
      <BudgetItem budget={budget} showDelete={true}/>
      <ExpenseForm budgets={budgets.filter(budget => {return (budget.id === id)})}/>
      {expenses && expenses.length > 0 && (
        <div className="padding-y">
          <h2 className="font-semibold text-4xl my-6">Existing Expenses</h2>
          <Table expenses={
            expenses.filter((expense) => {
              return (expense.budgetId === id)
            })
          } />
        </div>
      )}
    </div>
  )
}

export default BudgetPage