
import {MdDelete} from 'react-icons/md'

export default function Note({id,text,date,handleDelete}){
    return (
       <div className="note">
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDelete onClick={()=>handleDelete(id)}className="delete-icon" size='1.3em'/>
            </div>
            
       </div>
    )
}