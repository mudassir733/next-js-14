import React from 'react'

const seassion = null

const page = () => {

  if(!seassion) throw new Error
  return (
    <div>page</div>
  )
}

export default page