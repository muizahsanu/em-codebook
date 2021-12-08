import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'

export default function Sidebar() {
	const [showSidebar, setShowSidebar] = useState(false);

	const handleShowSidebar = () =>{
		setShowSidebar(!showSidebar)
	}

	return (
		<div className={"sidebar" + (showSidebar ? ' show' : '')}>
			<div className="creates">
				<div to="/create" className="btn-icon">
					<i className='bx bx-plus' ></i>
					Create New
				</div>
				<div className="creates__content">
					<Link to="/codebook/create" className="btn-icon">Codebook</Link>
					<Link to="/notebook/create" className="btn-icon">Notebook</Link>
					<Link to="/todo/create" className="btn-icon">ToDo</Link>
				</div>
			</div>

			{/* START Menus */}
			<div className="menus">
				<div className="menus__title">Content</div>
				<NavLink to="/codebook" className="menus__head" id="codebook">
					<i className='bx bx-code-block icon'></i>
					<span className="text">Codebooks</span>
				</NavLink>
				<div className="menus__body">
					<NavLink to="/codebook/javascript" className="menu">Javascript</NavLink>
					<NavLink to="/codebook/scss" className="menu">SCSS</NavLink>
					<NavLink to="/codebook/html" className="menu">HTML</NavLink>
				</div>
			</div>
			{/* END Menus */}

			
			<div className="sidebar__togglebutton" onClick={handleShowSidebar}>
				{showSidebar && <i className='bx bxs-up-arrow' ></i>}
				{!showSidebar && <i className='bx bxs-down-arrow' ></i>}
			</div>
		</div>
	)
}