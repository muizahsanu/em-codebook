import './CreateCode.scss'

import { useState } from 'react';
import { db } from '../firebase/config';
import { addDoc, collection, doc, setDoc} from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../firebase/useFetch';
import { convertTitleToID } from '../helper/convertTitleToID';
import CustomCodeMirror from '../components/CustomCodeMirror';

export default function CreateCode(){
    const [codebook, setCodebook] = useState('')
    const [title, setTitle] = useState('')
    const [codeSnippet, setCodeSnippet] = useState('')
    const [language, setLanguage] = useState('')
    const {data: codebooks} = useFetch('codebooks')

    const navigate = useNavigate()

    const handleCodemirroInput = (value) =>{
        console.log(value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!codeSnippet){
            alert('Code Snippet cannot be empty')
            return
        }

        console.log(codebook, title, codeSnippet, language);

        const codebookID = convertTitleToID(codebook)

        const codebookData = {
            id: codebookID,
            name: codebook
        }

        const codeData = {
            codebookID: codebookID,
            codebookName: codebook,
            title: title,
            language: language,
            codeSnippet: codeSnippet
        }

        const addNewData = async (codeData, codebookData)=>{
            const docCodebook = doc(db, "codebooks", codebookID)
            const subColRef = collection(db, "codebooks", codebookID, "codes")
            
            await setDoc(docCodebook, codebookData)
            const docRef = await addDoc(subColRef, codeData)
            if(docRef){
                navigate('/codebook')
            }
        }
        addNewData(codeData, codebookData)
    }
    
    return (
        <div className="create-code">
            <h3 className="page-title">New Code Snippet</h3>
            <form onSubmit={handleSubmit}>

                {/* START title */}
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
                {/* END title */}

                {/* START Codebook */}
                <div className="formgroup-hor">
                    <div className="formgroup">
                        <label htmlFor="new-codebook">New Codebook:</label>
                        <input type="text" id="new-codebook" placeholder="ex: ReactJS"
                            value={codebook}
                            onChange={(e) => setCodebook(e.target.value)}
                        />
                    </div>
                    <div className="formgroup">
                        <label htmlFor="codebook">Current Codebook:</label>
                        <select name="codebook" id="codebook"
                            onChange={(e)=>{
                                setCodebook(e.target.value)
                            }}
                            value={codebook}
                        >
                            <option value="">New Codebook</option>
                            {codebooks && codebooks.map(item=>(
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}    
                        </select>    
                    </div>
                </div>
                {/* END Codebook */}

                {/* START Language */}
                <div className="formgroup">
                        <label htmlFor="language">Language:</label>
                        <select name="language" id="language"
                            onChange={(e)=>setLanguage(e.target.value)} 
                            value={language}
                        >
                            <option value="" disabled>Select codebook</option>
                            <option value="xml">XML/HTML</option>
                            <option value="css">CSS</option>
                            <option value="sass">SASS</option>
                            <option value="javascript">Javascript</option>
                            <option value="jsx">JSX</option>
                            <option value="php">PHP</option>
                        </select>    
                    </div>
                {/* END Language */}

                {/* START Code snippet */}
                <div className="formgroup">
                    <label htmlFor="">Code Snippet:</label>
                    <CustomCodeMirror onTextChange={handleCodemirroInput} />
                </div>
                {/* END Code snippet */}
                <button className="btn">Add</button> 
            </form>
        </div>
    )
}