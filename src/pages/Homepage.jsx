import React from 'react'
import { useSelector} from 'react-redux'
import NewNote from '../components/NewNote'
import Note from '../components/Note'

function Homepage() {
    const notes = useSelector((state)=>state.notes)
    const eachNote = notes.notes.map((item)=>{
        return(
            <Note
            key={item.id}
             title={item.title}
             note={item.note}
             />
        )
    })
  return (
   <main className='w-screen h-full text-white max-w-[1240px] mx-auto'>
        {/* Header */}
        <section className='text-center p-3'>
            <h1 className='text-2xl font-[500]'>MyNotes</h1>
            <p>2.0</p>
            <p>A New, Improved Version.</p>
        </section>
        {/* Grid of Notes */}
        <section className='p-5 grid gap-[10em] lg:grid-cols-4'>
                {eachNote}
                <NewNote/>
        </section>
   </main>
  )
}

export default Homepage