import { redirect } from "react-router-dom"
import { toast } from 'react-toastify';

export const logoutAction = async () => {
    // Delete user
    localStorage.removeItem('username')
    console.log('actions')

    toast.success('Success!')

    // Redirect to homepage
    return redirect('/')
}