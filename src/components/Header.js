export default function Header({handleDark}){
    return (
        <header className="header">
            <h1>Notes</h1>
            <button className="Save" onClick={()=>handleDark(x=>!x)}>Toggle Mode</button>
        </header>
    )
}