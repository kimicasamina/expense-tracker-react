import React from 'react'
import { useLoaderData } from 'react-router-dom'

// helpers
import { fetchData } from '../helper'

export const dashboardLoader = async () => {
  const username = fetchData('username')
  return {username}
}

const Dashboard = () => {
  const {username} = useLoaderData()
  return (
    <div className='padding-x padding-y'>
      <h1 className="">Welcome! {username}</h1>
      {/* <p>{username}</p> */}
    </div>
  )
}

export default Dashboard