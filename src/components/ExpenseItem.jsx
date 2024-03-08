import React from 'react'
import { Form, Link } from 'react-router-dom'
import { formatCurrency, formatDate } from '../helper'

import { FaRegTrashCan } from "react-icons/fa6";

const ExpenseItem = ({expense}) => {
    const {id, name, amount, createdAt, budgetId} = expense
    const budgets = JSON.parse(localStorage.getItem('budgets'))

  return (
    <>
        <td>{name}</td>
        <td>{formatCurrency(amount)}</td>
        <td>{formatDate(createdAt)}</td>
        <td>
            <Link to={`/budgets/${budgetId}`}>
                {
                    budgets.map(budget => {
                        if (budget.id === budgetId){
                            return budget.name
                        }
                    })
                }
            </Link>
        </td>
        <td>
            <Form method="post">
                <input type="hidden" name='_action' value="deleteExpenseForm" />
                <input type="hidden" name='expenseId' value={id} />
                <button type="submit">
                    <FaRegTrashCan />
                </button>
            </Form>
        </td>
    </>
  )
}

export default ExpenseItem