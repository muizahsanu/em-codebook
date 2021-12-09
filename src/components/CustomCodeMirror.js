import './CustomCodeMirror.scss'

// Codemirror
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/php/php'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/sass/sass'
import 'codemirror/mode/css/css'

// React
import { useEffect, useState } from 'react'

export default function CustomCodeMirror({isReadOnly = false, onTextChange}){
  const [language, setLanguage] = useState('')
  const [nightMode, setNightMode] = useState(true)
  const [code, setCode] = useState('')
  const [showCopiedMessage, setShowCopiedMessage] = useState(false)

  // Handle value change
  // This mean, when text in input Codemirror change send data to parent
  useEffect(()=>{
    if(onTextChange){
      onTextChange(code)
    }
  },[code, onTextChange])

  // Change Theme
  const handleNightMode = () =>{
    setNightMode(!nightMode)
  }

  // Copy Text
  const handleCopyToClipboard = () =>{
    setShowCopiedMessage(true)
    setTimeout(()=>{
      setShowCopiedMessage(false)
    }, 1000)
    navigator.clipboard.writeText(code)
  }

  return (
    <div className="codemirror">
      {/* START Tab */}
      <div className="tab">
        {/* Select Language */}
        {!isReadOnly && (
          <div className="tab__item">
            <select defaultValue="" onChange={(e) => setLanguage(e.target.value)}>
              <option value="" disabled>Select language</option>
              <option value="xml">XML/HTML</option>
              <option value="htmlmixed">HTML (Mixed)</option>
              <option value="php">PHP</option>
              <option value="javascript">Javascript</option>
              <option value="sass">SASS</option>
              <option value="css">CSS</option>
            </select>
          </div>
        )}

        {/* Copied Text Message */}
        <div className="tab__item right">
          <span className={"copied-message" + (showCopiedMessage ? " show" : "")}>Copied to clipboard</span>
        </div>

        {/* Button Copy Text */}
        <div className="tab__item" onClick={handleCopyToClipboard}>
          <i className='bx bxs-copy tab__item-btn' ></i>
        </div>

        {/* Button Nightmode */}
        <div className="tab__item" onClick={handleNightMode}>
          <i className='bx bxs-moon tab__item-btn' ></i>
        </div>
      </div>
      {/* END Tab */}
      <CodeMirror
        value={code}
        onChange={(editor, data, value) => {
            setCode(value)
        }}
        options={{
          mode: language,
          theme: nightMode ? 'base16-dark' : 'base16-light',
          lineNumbers: true,
          readOnly: isReadOnly,
          cursorHeight: isReadOnly ? 0 : 1
        }}
      />
    </div>
  )
}