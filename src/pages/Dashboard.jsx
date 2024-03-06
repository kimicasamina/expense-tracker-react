import React from 'react'
import { useLoaderData } from 'react-router-dom'

// helpers
import { fetchData } from '../helper'
import { wait } from '../helper'

// components
import Intro from '../components/Intro'
import BudgetForm from '../components/BudgetForm'
import ExpenseForm from '../components/ExpenseForm'
import BudgetItem from '../components/BudgetItem'

// toast
import { toast } from 'react-toastify'



export const dashboardLoader = async () => {
  // const username = fetchData('username')
  // const budgets = fetchData('budgets')
  const username = JSON.parse(localStorage.getItem('username'))
  const budgets = JSON.parse(localStorage.getItem('budgets'))
  const expense = JSON.parse(localStorage.getItem('expense'))
  // console.log(use)
  // console.log(budgets.canApprove)
  return {username, budgets, expense}
}

export const dashboardAction = async ({request}) => {
  // wait()
  await new Promise(resolve => setTimeout(resolve, 1000));

  
  const formData = await request.formData()
  // const username = data.get('username')
  const {_action, ...values} = Object.fromEntries(formData) 
  
  
  // console.log(_action, 'action')
  // console.log(values, 'values')
  if(_action === 'userForm'){
    try {
      console.log(values.username)
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

      // console.log('newItem:', newItem)
  
      const existingBudgets = JSON.parse(localStorage.getItem('budgets')) ?? []
      // console.log('existing budget:', existingBudgets)
      localStorage.setItem('budgets', JSON.stringify([...existingBudgets, newItem]))
      // console.log('NEW BUDGET: ', localStorage.getItem('budgets'))
      return toast.success(`Budget Created!`)
      console.log('BUDGETS:', budgets)
    } catch(e){
      throw new Error('There was a problem creating your budget.')
      console.log(e)
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
      const existingExpense = JSON.parse(localStorage.getItem('expense')) ?? []
      localStorage.setItem('expense', JSON.stringify([...existingExpense, newItem]))

      // return toast message
      return toast.success('New expense created!')

    } catch(e){
      throw new Error('There was a problem creating your Expense.')
      console.log(e)
    }
  }
}

const Dashboard = () => {
  const {username, budgets, expense} = useLoaderData()

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
                            <BudgetItem  budget={budget} />
                          </div>
                        )
                      })}
                    </div>
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