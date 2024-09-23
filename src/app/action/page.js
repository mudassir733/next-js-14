import React from 'react'
import { redirect } from 'next/navigation'

const post = false
const page = () => {
    if (!post) {
        redirect('/dashboard')
    }

  return (
    <div>
        <h1>Click on the button</h1>
        <button className="px-4 py-2 bg-blue-400 text-black mt-5">Click on me</button>
    </div>
  )
}

export default page