import { Link } from 'react-router-dom'
import './Codebook.scss'

export default function Codebook() { 
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
                <div className="paper">
                    <Link to='/codebook/javascript/useFetch'>useFetch</Link>
                    <span className="book">on 
                        <Link to="/codebook/javascript">Javascript</Link>
                    </span>
                </div>
                <div className="paper">
                    <Link to='/codebook/javascript/useFetch'>flexbox</Link>
                    <span className="book">on 
                        <Link to="/codebook/javascript">CSS</Link>
                    </span>
                </div>  
                <div className="paper">
                    <Link to='/codebook/javascript/useFetch'>reset</Link>
                    <span className="book">on 
                        <Link to="/codebook/javascript">CSS/SCSS</Link>
                    </span>
                </div>  
            </div>
        </div>
    )
}