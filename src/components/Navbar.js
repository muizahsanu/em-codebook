import './Navbar.scss'

export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="brand">EM Codebook</div>
            <div className="user">
                <div className="profile"></div>
                <div className="username">muizahsanu</div>
                <i className='bx bx-chevron-down' ></i>
            </div>
        </nav>
    )
}