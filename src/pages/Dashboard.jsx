import React from 'react'
import { useLoaderData } from 'react-router-dom'

// helpers
import { fetchData } from '../helper'

// components
import Intro from '../components/Intro'

// toast
import { toast } from 'react-toastify'



export const dashboardLoader = async () => {
  const username = fetchData('username')
  return {username}
}

export const dashboardAction = async ({request}) => {
  const formData = await request.formData()
  // const username = data.get('username')
  const data = Object.fromEntries(formData) 
  const username = data.username
  try {
    localStorage.setItem('username', JSON.stringify(username))
    toast.success(`Welcome, ${username}`)
  } catch(e){
    console.log(e)
    // toast.error('')
    throw new Error('There was a problem creating your account.')
  }
  return {username}
}

const Dashboard = () => {
  const {username} = useLoaderData()

  return (
    <div className='padding-x padding-y'>
      {/* <h1 className="">Welcome, {username}</h1> */}
      {username ? (<h1 className="">Welcome, {username}</h1>) : (<Intro />)}
    </div>
  )
}

export default Dashboard