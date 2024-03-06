import React from 'react'
import { formatCurrency, formatDate } from '../helper'

import { FaRegTrashCan } from "react-icons/fa6";
import ExpenseItem from './ExpenseItem';

const Table = ({expenses}) => {
    const headersTitle = ['Name', 'Amount', 'Data', 'Budget', '']


  return (
    // <div className="w-full overflow-x-scroll my-4">
    //     <div className='w-full min-w-[500px] '>
    //         <div className='grid grid-cols-5 py-2 justify-items-center'>
    //             <h3 className='font-semibold'>Name</h3>
    //             <h3 className='font-semibold'>Amount</h3>
    //             <h3 className='font-semibold'>Date</h3>
    //             <h3 className='font-semibold'>Budget</h3>
    //             <h3 className='font-semibold'></h3>
    //         </div>
    //         {expenses.map(expense => {
    //             return(
    //                 <div className='grid grid-cols-5 py-2 justify-items-center'>
    //                     <div>{expense.name}</div>
    //                     <div>{formatCurrency(expense.amount)}</div>
    //                     <div>{formatDate(expense.createdAt)}</div>
    //                     <div>
    //                         <button className="bg-green ">
    //                             {
    //                                 budgets.map(budget => {
    //                                     if(expense.budgetId === budget.id){
    //                                         return budget.name
    //                                     }
    //                                 })
    //                             }
    //                         </button>
    //                     </div>
    //                     <div><FaRegTrashCan /></div>
    //                 </div>
    //             )
    //         })}
    //     </div>
    // </div>

    <div className="w-full overflow-x-scroll">
        <table className="w-full min-w-[550px] flex flex-col gap-y-4 py-4">
            <thead className="">
                <tr className="grid grid-cols-5 justify-items-center">
                    {headersTitle.map((title, index) => {
                        return(
                            <td key={index} className='font-semibold text-2xl'>{title}</td>
                        )
                    })}
                </tr>
            </thead>
            <tbody className="flex flex-col gap-y-4">
                {expenses.map(expense => {
                    return(
                        <tr className="grid grid-cols-5 justify-items-center " key={expense.id}>
                            <ExpenseItem expense={expense} />
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Table