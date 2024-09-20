"use client"

import Link from 'next/link'
import React from 'react'

const error = ({error, reset}) => {
  return (
   <div>
    <h1 className='bg-red-500 w-full py-4 px-4 text-center'>{error.message}</h1>
    <div className="flex gap-10 items-center justify-center w-full">
        <button onClick={reset} className="bg-red-500 px-8 py-2 mt-10">Try again</button>
        <Link href="/" className="bg-red-500 px-8 py-2 mt-10">Back to home</Link>
    </div>
   </div>
  )
}

export default error