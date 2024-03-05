// react imports
import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'

// components
import Nav from '../../components/Nav'
import { fetchData } from '../../helper'

export const RootLayoutLoader = async () => {
  const username = fetchData('username')
  return {username}
}

const RootLayout = () => {
  const {username} = useLoaderData()
  return (
    <div className=''>
        <Nav username={username}/>
        <main className="">
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout