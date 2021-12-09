import './CreateCode.scss'

// CodeMirror
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/sass/sass'
import 'codemirror/mode/css/css'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/php/php'
import { useState } from 'react';
import { db } from '../firebase/config';
import { addDoc, collection} from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function CreateCode(){
    const [mode, setMode] = useState('xml')
    const [title, setTitle] = useState('')
    const [codeSnippet, setCodeSnippet] = useState('')

    const navigate = useNavigate()

    const handleSelectChange = (newMode) => {
        setMode(newMode)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!codeSnippet){
            alert('Code Snippet cannot be empty')
            return
        }

        const newData = {
            title: title,
            language: mode,
            code_snippet: codeSnippet
        }

        const addNewData = async (newData)=>{
            const docRef = await addDoc(collection(db, "codebooks"),newData)
            if(docRef){
                navigate('/codebook')
            }
        }
        addNewData(newData)
    }
    
    return (
        <div className="create-code">
            <h3 className="page-title">New Code Snippet</h3>
            <form onSubmit={handleSubmit}>
                <div className="formgroup">
                    <label htmlFor="">Title:</label>    
                    <input 
                        type="text" 
                        placeholder="Ex: Fetch Data Code"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} 
                        required 
                    />
                </div> 
                <div className="formgroup">
                    <label htmlFor="">Language:</label>
                    <select name="mode" id="mode" 
                        placeholder="mode"
                        onChange={(e)=>handleSelectChange(e.target.value)} 
                        value={mode}
                    >
                        <option value="xml">XML / HTML</option>    
                        <option value="javascript">Javascript</option>    
                        <option value="jsx">JSX</option>    
                        <option value="css">CSS</option>    
                        <option value="sass">SASS</option>    
                    </select>    
                </div>
                <div className="formgroup">
                    <label htmlFor="">Code Snippet:</label>
                    <div>
                    </div>
                    <CodeMirror
                        value={codeSnippet}
                        options={{
                            mode: mode,
                            theme: 'material',
                            lineNumbers: true
                        }}
                        onChange={(editor, data, value) => {
                            setCodeSnippet(value)
                        }}
                    />
                </div>
                <button className="btn">Add</button> 
            </form>
        </div>
    )
}