import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

// helpers
import { fetchData, simulateDataFetching } from '../helper'

// toast
import { toast } from 'react-toastify'

// components
import Intro from '../components/Intro'
import BudgetForm from '../components/BudgetForm'
import ExpenseForm from '../components/ExpenseForm'
import BudgetItem from '../components/BudgetItem'
import Table from '../components/Table'



export const dashboardLoader = async () => {
  try {
    const username = fetchData('username')
    const budgets = fetchData('budgets')
    const expenses = fetchData('expenses')
  
    return {username, budgets, expenses}
  } catch(e){
    console.log(e)
    throw new Error(e)
  }
}

export const dashboardAction = async ({request}) => {

  const formData = await request.formData()

  // wait
  const {_action, ...values} = Object.fromEntries(formData) 
  
  
  if(_action === 'userForm'){
    try {
        const username = values.username
        localStorage.setItem('username', JSON.stringify(username))
        return toast.success(`Successfully created a new account.`)
      } catch(e){
        throw new Error('There was a problem creating your account.')
        console.log(e)
      }
  }


  if(_action === 'budgetForm'){
    try {
      const newItem = {
        id: crypto.randomUUID(),
        name: values.newBudgetName,
        amount: Number(values.newBudgetAmount),
        createdAt: Date.now(),
      }

      const existingBudgets = JSON.parse(localStorage.getItem('budgets')) ?? []
      localStorage.setItem('budgets', JSON.stringify([...existingBudgets, newItem]))
      return toast.success(`Budget Created!`)
    } catch(e){
      throw new Error('There was a problem creating your budget.')
    }
  }

  if(_action === 'expenseForm'){
    try {
      const newItem = {
        id: crypto.randomUUID(),
        name: values.newExpenseName,
        amount: Number(values.newExpenseAmount),
        createdAt: Date.now(),
        budgetId: values.newExpenseCategory
      }

      // check if expense is empty
      const existingExpense = JSON.parse(localStorage.getItem('expenses')) ?? []
      localStorage.setItem('expenses', JSON.stringify([...existingExpense, newItem]))

      // return toast message
      return toast.success('New expense created!')

    } catch(e){
      throw new Error('There was a problem creating your Expense.')
      console.log(e)
    }
  }

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
}

const Dashboard = () => {
  const {username, budgets, expenses} = useLoaderData()

  return (
    <>
      {username ? (  
        <div className="dashboard w-full max-w-screen-xl mx-auto padding-y padding-x">
          <h1 className="py-10">Welcome, <span className="font-semibold text-saturated-orange">{username}</span> </h1>

          <div className="">
            {budgets && budgets.length > 0 
              ? (
                <div className="">
                  <div className='flex flex-col md:flex-row'>
                    <BudgetForm />
                    <ExpenseForm budgets={budgets} />
                  </div>
                  <div className="flex flex-col">
                    <h2 className='text-2xl'>Existing Budgets</h2>

                    
                    <div className="">
                      {budgets.map(budget => {
                        return(
                          <div className="" key={budget.id}>
                            <BudgetItem budget={budget} />
                          </div>
                        )
                      })}
                    </div>

                    {expenses && expenses.length > 0 && (
                      <div className="padding-y">
                        <h2 className="font-semibold text-4xl my-6">Existing Expenses</h2>
                        <Table expenses={
                          expenses.sort((createdAtA, createdAtB) => {
                            return (createdAtA.createdAt - createdAtB.createdAtB)
                          }).slice(0,5)
                        } />
                        {expenses.length > 5 && (
                          <Link to='/expenses' className='bg-dark rounded-md text-white w-full md:w-[220px] py-4 my-4 md:my-8 flex items-center justify-center shadow-md cursor-pointer'>View all Expenses</Link>
                        )}
                      </div>
                    )}
                    
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <p>Personal budgeting is the secret to financial freedom.</p>
                  <p>Create a budget to get started!</p>
                  <BudgetForm />
                </div>
              )
            }
          </div>
        </div>

        ) : (<Intro />)}
    </>
  )
}

export default Dashboard