import React from 'react'
import { formatCurrency, formatDate } from '../helper'

import { FaRegTrashCan } from "react-icons/fa6";

const ExpenseItem = ({expense}) => {
    const {id, name, amount, createdAt, budgetId} = expense
    const budgets = JSON.parse(localStorage.getItem('budgets'))

  return (
    <>
        <td>{expense.name}</td>
        <td>{formatCurrency(expense.amount)}</td>
        <td>{formatDate(expense.createdAt)}</td>
        <td>
            {
                budgets.map(budget => {
                    if (budget.id === budgetId){
                        return budget.name
                    }
                })
            }
        </td>
        <td>
            <FaRegTrashCan />
        </td>
    </>
  )
}

export default ExpenseItem