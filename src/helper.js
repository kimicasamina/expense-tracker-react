// FETCH DATA FROM LOCALSTORAGE
export const fetchData = (key) => {
    const data = localStorage.getItem(key)
    return data
}

// wait for 1 sec
export const wait = new Promise(resolve => setTimeout(resolve, 1000));




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