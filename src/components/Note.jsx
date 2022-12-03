import React from 'react'

function note({title, note}) {
  return (
    <main className='bg-[#fef68a] min-w-[320px] min-h-[170px] rounded-md p-2 text-black'>
        <h1 className='text-xl font-[500]'>{title}</h1>
        <p className='text-lg'>{note}</p>
    </main>
  )
}

export default note