import NotesList from "./components/NotesList"
import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'
import Search from "./components/Search"
import Header from "./components/Header"

export default function App(){
  const [notes,setNotes]=useState([
    {
        id: nanoid(),
       text:"joker kirloskar",
       date:"15/05/2022",
    },
    {
        id: nanoid(),
       text:"joker second note",
       date:"15/05/2022",
    },
    {
       id: nanoid(),
       text:"joker third note",
       date:"15/05/2022",
    },
  ])

  const [searchText,setSearchText]=useState('')

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);
		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  function addNote(text){
      const date=new Date();
      setNotes(x=>{
        return [
          ...x,
          {
            id:nanoid(),
            text:text,
            date: date.toLocaleDateString()
          }
        ]
      })
  }

  function deleteNote(id){
      const newNotes=notes.filter((note)=> note.id!==id);
      setNotes(newNotes)
  }

  const [isDark,setIsDark]=useState(true)

  return (
    <div className={isDark?"container-dark":""}>
        <div className= "container">
        <Header handleDark={setIsDark}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote} 
          handleDelete={deleteNote} 
        />
      </div>
    </div>
  )
}