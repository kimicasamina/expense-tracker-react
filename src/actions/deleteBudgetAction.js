import { redirect } from "react-router-dom"
import { fetchData } from "../helper"

import { toast } from "react-toastify"

export const deleteBudgetAction = async ({params}) => {   
    try {
        // delete budget.id === params.id
        const existingBudgets = JSON.parse(localStorage.getItem('budgets')) ?? []
        const newBudgets = existingBudgets.filter(budget => {
            if (budget.id !== params.id){
                return budget
            }
        })
        localStorage.setItem('budgets', JSON.stringify(newBudgets))

        // delete expenses.budgetId === params.id
        const existingExpenses = JSON.parse(localStorage.getItem('expenses')) ?? [];
        const newExpenses = existingExpenses.filter(expense => {
            if (expense.budgetId !== params.id){
                return expense
            }
        })
        localStorage.setItem('expenses', JSON.stringify(newExpenses))
        toast.success(`Successfully deleted `)
        return redirect('/')
    } catch(e){
        console.log(e)
        throw new Error(e.message)
    }
}

