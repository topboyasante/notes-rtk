import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addNotes} from '../redux/noteSlice'
import { v4 as uuidv4 } from 'uuid';

function NewNote() {
    const notes = useSelector((state)=>state.notes)
    const dispatch= useDispatch()    

    const [newTitle,setTitle] = useState('')
    const [newNote,setNote] = useState('')

    function handleTitle(e){
        setTitle(e.target.value)
    }
    function handleNote(e){
        setNote(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        const addedNote = {
            id:uuidv4(),
            title:(`${newTitle}`),
            note:(`${newNote}`)
        }
        if(newTitle !== '' && newNote !== ''){
            dispatch(addNotes({payload:addedNote}))
            setTitle('')
            setNote('')
            console.log(notes)
        }else{
            alert('Error!')
        }
    }

  return (
    <main className='bg-[#fef68a] min-w-[320px] min-h-[170px] rounded-md p-2 text-black'>
        <input type="text" placeholder='Title' className='w-full bg-transparent outline-none mb-2 font-[500] text-xl'
        value={newTitle} onChange={handleTitle}/>
        <textarea name="note" id="" cols="25" rows="10" className='w-full bg-transparent outline-none text-lg' placeholder='note'
        value={newNote} onChange={handleNote}/>
        <button className='bg-gray-500 text-white px-2 py-1 rounded-md'
        onClick={handleSubmit}
        >Save</button>
    </main>
  )
}

export default NewNote