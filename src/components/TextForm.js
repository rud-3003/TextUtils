import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("");
    // text = "new text"; //Wrong way to change the text
    // setText("Enter text here"); //Correct way to change the text

    const handleClearClick = () => {
        setText('');
        props.showAlert("Cleared", "Success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();  
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();  
        props.showAlert("Copied to Clipboard", "Success");
    }

    const handleUpClick = () => {
        // console.log("Uppercase was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "Success");
    }

    const handleLoClick = () => {
        // console.log("Lowercase was clicked "+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "Success");
    }

    const handleReverseClick = () => {
        let newText = "";
        for(let i=text.length-1;i>=0;i--){
            newText += text[i];
        }
        setText(newText);
        props.showAlert("Reversed the Given String", "Success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed the Extra Spaces", "Success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    return (
        <>
        <div className='container' style={{backgroundColor: props.mode==='light'?'white':'#032250', color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#3d5170', color : props.mode==='light'?'black':'white'}}  id="myBox" rows="8"></textarea>
            </div>
            <div className="mb-3">
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UPPER CASE</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>lower case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h2> Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters<br/>
            {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>

        </div>
        </>
    )
}
