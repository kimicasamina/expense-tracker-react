// react imports
import React from 'react'
import { Outlet, useLoaderData, useRouteError } from 'react-router-dom'

// components
import Nav from '../../components/Nav'
import { fetchData } from '../../helper'

export const RootLayoutLoader = async () => {
  const username = fetchData('username')
  return {username}
}

const RootLayout = () => {
  const {username} = useLoaderData()
  const error = useRouteError()
  
  return (
    <div className='w-full max-w-screen-lg mx-auto padding-x'>
        <Nav username={username}/>
        <main className="">
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout