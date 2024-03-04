import React from 'react'

import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError()
  return (
    <div>Error: {error}</div>
  )
}

export default Error