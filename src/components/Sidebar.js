import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'

export default function Sidebar(){
    return (
        <div className="sidebar">
            <div className="creates">
                <div to="/create" className="btn-icon">
                    <i className='bx bx-plus' ></i>
                    Create News
                </div>
                <div className="creates__content">
                    <Link to="/codebook/create" className="btn-icon">Codebook</Link>
                    <Link to="/notebook/create" className="btn-icon">Notebook</Link>
                    <Link to="/todo/create" className="btn-icon">ToDo</Link>
                </div>
            </div>
            <div className="content">
                <div className="title">Content</div>
                <NavLink to="/codebook" className="menus" id="codebook">
                    <i className='bx bx-code-block icon'></i>
                    <span className="text">Codebooks</span>
                </NavLink>
                <NavLink to="/notebook" className="menus" id="notebook">
                    <i className='bx bx-notepad icon'></i>
                    <span className="text">Notebooks</span>
                </NavLink>
                <NavLink to="/todo" className="menus" id="todo">
                    <i className='bx bx-code-block icon'></i>
                    <span className="text">To Do</span>
                </NavLink>
            </div>
        </div>
    )
}