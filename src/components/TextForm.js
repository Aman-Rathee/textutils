import React, {useState} from 'react'


export default function TextForm(props) {
  
    const handeleUpCbtnclick =()=>{
        let newText = text.toUpperCase();
        settext(newText)
        props.showAlert('Converted to Upper Case', 'success')
    }
    const handeleLowCbtnclick =()=>{
        let newText = text.toLowerCase();
        settext(newText)
        props.showAlert('Converted to Lower Case', 'success')

    }

    const btnOnChange =(event)=>{
        settext(event.target.value)
    }

    const handeleClearText =() => {
      let newText = ('')
      settext(newText)
      props.showAlert('Clear Text', 'success')

    }

    
    const handeleCopy =()=>{
      navigator.clipboard.writeText(text)
      props.showAlert('Copied to Clipboard ', 'success')

    }

    const handeleRemoveExtraSpaces=()=>{
      let newText = text.split(/[ ]+/);
      settext(newText.join(' '))
      props.showAlert('Extra spaces removed', 'success')

    }

    const handeleRemoveExtraLines=()=>{
      let newText = text.split(/\n+/);
      settext(newText.join('\n'))
      props.showAlert('Extra lines removed', 'success')

    }
    



    const [text, settext] = useState('');
    
  return (
    <>
      <div className={`container text-${props.mode==='dark'?'light':'dark'}`} >
          <h1 className='mb-4'>{props.heading} </h1>
          <div className="mb-3">
              <textarea className="form-control" value= {text} onChange={btnOnChange} id="mytextarea" rows="9" style = {{ backgroundColor: props.mode==='dark'?'#3c3c43':'white', color: props.mode==='dark'?'white':'black' }} ></textarea>
          </div>
          <button disabled={!/[a-z]/.test(text)} className="btn btn-primary mx-1 my-2" onClick={handeleUpCbtnclick} >Convert to UpperCase</button>
          <button disabled={!/[A-Z]/.test(text)} className="btn btn-primary mx-1 my-2" onClick={handeleLowCbtnclick} >Convert to LowerCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handeleClearText} >Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handeleCopy} >Copy Text</button>
          <button disabled={!text.match(/\s{2,}/)} className="btn btn-primary mx-1 my-2" onClick={handeleRemoveExtraSpaces} >Remove Extra Space</button>
          <button disabled={!text.match(/\n\s*\n/)} className="btn btn-primary mx-1 my-2" onClick={handeleRemoveExtraLines} >Remove Extra Lines</button>
      </div>
      <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`}>
        <h2>Text summary</h2>
        <p  className='container'> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p  className='container'> {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p className='container' >{text.length>0?text: 'Nothing to preview'} </p>
      </div>
    </>
  )
}

