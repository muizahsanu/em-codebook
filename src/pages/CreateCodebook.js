import { doc, setDoc } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase/config'
import './CreateCodebook.scss'

export default function CreateCodebook(){
    const [title, setTitle] = useState('')
    const [language, setLanguage] = useState('')

    const navigate = useNavigate()
    
    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(!title){
            alert('Title cannot be empty')
            return  
        }

        const titleToID = 

        await setDoc(doc(db, "codebooks", title.toLowerCase().replace(/\s+/g,'-')), {
            title: title,
            language: language,
            codes: null
        });

        // navigate('/codebook')

    }

    return (
        <div className="create-codebook">
            <h2 className="page-title">Create Codebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="formgroup">
                    <label htmlFor="">Codebook Title:</label>
                    <input type="text" placeholder="ex: ReactJS" 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="formgroup">
                    <label htmlFor="language">Language:</label>
                    <select name="language" id="language"
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="xml">XML/HTML</option>
                        <option value="javascript">Javascript</option>
                        <option value="sass">SASS</option>
                        <option value="php">PHP</option>
                    </select>
                </div>
                <button className="btn">Add codebook</button>
            </form>
        </div>
    )
}