import React from 'react'

function Spinner() {
  return (
    <div className='flex flex-col justify-center items-center space-y-2'>
        <div className='spinner'></div>
        <p className='bg-bgDark text-lg font-semibold'>Loading....</p>
    </div>
  )
}

export default Spinner