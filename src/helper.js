// FETCH DATA FROM LOCALSTORAGE
export const fetchData = (key) => {
    const data = localStorage.getItem(key)
    return data
}

// wait for 1 sec
export const wait = new Promise(resolve => setTimeout(resolve, 1000));


// total spent by budget
export const calculateSpentbyBudget = (budgetId) => {
    const expenses = JSON.parse(localStorage.getItem('expenses')) ?? []
    const budgetSpent = expenses.reduce((acc, expense) => {
        if (expense.budgetId !== budgetId){
            return acc
        } 
        return acc += expense.amount
    }, 0)
    return budgetSpent
}

// format currency
export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: 'currency',
        currency: 'PHP'
    })
}

// DELETE USER
// export const deleteUser = (key) => {
//     const data = JSON.parse(localStorage.removeItem(key))
//     return data
// }

// ADD USER
// export const addUser = ({key, value}) => {
//     // setItem(key, value) 
//     return localStorage.setItem('username', username)
// }