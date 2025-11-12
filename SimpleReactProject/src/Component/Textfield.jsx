import { useState } from "react"


function TextField(){
    const[text , setText]= useState("");
    return (
        <div>
            <input type="text" 
             name="textfield"
             placeholder="Enter text here"
             value={text}
             onChange={(e)=>{setText(e.target.value)}}
            />
            <p>Output: {text}</p>
            <p>This is first paragraph.</p>
            <p>This is second paragraph.</p>
        </div>
    )
}

export default TextField;