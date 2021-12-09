import { Link } from 'react-router-dom'
import { useFetch } from '../firebase/useFetch'
import './Codebook.scss'

export default function Codebook() { 
    const {data: codebookData} = useFetch('codebooks')

    return (
        <div className="codebook">
            <form className="input-query">
                <div className="formgroup">
                    <label htmlFor="search">Search</label>
                    <input type="text" placeholder="search" id='search' />
                </div>
                <div className="formgroup">
                    <label htmlFor="search">Codebook</label>
                    <input type="text" placeholder="search" id='search' />
                </div>
            </form>
            <h3>List Codebook</h3>
            <div className="papers">
                {codebookData && codebookData.map(item=>(
                    <div className="paper" key={item.id}>
                        <Link to='/codebook/javascript/useFetch'>{item.name}</Link>
                        {/* <span className="book">in 
                            <Link to="/codebook/javascript">{item.language}</Link>
                        </span> */}
                    </div>
                ))}
            </div>
        </div>
    )
}