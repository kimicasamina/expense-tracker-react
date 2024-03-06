import React from 'react'
import { useLoaderData } from 'react-router-dom'

import Table from '../components/Table'

export const expensesPageLoader = async () => {
    const expenses = JSON.parse(localStorage.getItem('expenses')) ?? []
    return expenses
}

const ExpensesPage = () => {
    const expenses = useLoaderData()
    
  return (
    <div className="">
        <h1 className="">Expenses</h1>
        <Table expenses={
            expenses.sort((createdAtA, createdAtB) => {
                return (createdAtB.createdAt - createdAtA.createdAtB)
              })
        }/>
    </div>
  )
}

export default ExpensesPage