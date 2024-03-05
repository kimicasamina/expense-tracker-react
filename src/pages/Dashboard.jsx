import React from 'react'
import { useLoaderData } from 'react-router-dom'

// helpers
import { fetchData, simulateFetchingData } from '../helper'

// components
import Intro from '../components/Intro'

// toast
import { toast } from 'react-toastify'
import BudgetForm from '../components/BudgetForm'



export const dashboardLoader = async () => {
  const username = fetchData('username')
  return {username}
}

export const dashboardAction = async ({request}) => {
  const formData = await request.formData()
  // const username = data.get('username')
  const {_action, ...values} = Object.fromEntries(formData) 
  
  
  // console.log(_action, 'action')
  // console.log(values, 'values')
  if(_action === 'userForm'){
    try {
      console.log(values.username)
        const username = values.username
        localStorage.setItem('username', username)
        toast.success(`Successfully created a new account.`)
        return {username}
      } catch(e){
        throw new Error('There was a problem creating your account.')
        console.log(e)
      }
  }


  if(_action === 'budgetForm'){

    // wait for 1 sec
    await new Promise(resolve => setTimeout(resolve, 1000));

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
    } catch(e){
      throw new Error('There was a problem creating your budget.')
      console.log(e)
    }
  }
}

const Dashboard = () => {
  const {username} = useLoaderData()

  return (
    <div className='w-full max-w-screen-xl mx-auto padding-y padding-x'>
      {username ? (
        <div className="">
          <h1 className="py-10">Welcome, <span className="font-semibold text-saturated-orange">{username}</span> </h1>
          <BudgetForm />
        </div>
      
      ) : (<Intro />)}
    </div>
  )
}

export default Dashboard