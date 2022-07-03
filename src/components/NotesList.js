import Note from "./Note"
import AddNote from "./AddNote"

export default function NotesList({notes,handleAddNote,handleDelete}){

    const Notelist=notes.map(x=>{
        return <Note {...x} handleDelete={handleDelete}/>
    })
    return (
        <div className="notes-list">
                {Notelist}
                <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}