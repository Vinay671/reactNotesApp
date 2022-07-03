import {  useState } from "react"

export default function AddNote({handleAddNote}){

    const[noteText,setNoteText]=useState("")
    const characterLimit=250;

    function handleChange(event){
        if(characterLimit-event.target.value.length>=0){
            setNoteText(event.target.value)
        }
            
    }
    
    function handleClick(){
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText("")
        }
        
    }

    return (
        <div className="note new">
             <textarea
                onChange={handleChange}
                value={noteText}
                rows='8' 
                cols='10' 
                placeholder='Type to add a note...'> 
            </textarea>
             <div className='note-footer'>
                <small>{characterLimit-noteText.length} remaining</small>
                <button className="save" onClick={handleClick}>Save</button>
             </div> 
        </div>
    )
}