// FETCH DATA FROM LOCALSTORAGE
export const fetchData = (key) => {
    const data = localStorage.getItem(key)
    return data
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