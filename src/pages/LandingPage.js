import { useEffect } from 'react'
import './LandingPage.scss'

export default function LandingPage({handleIsLandingPage}){

    useEffect(()=>{
        handleIsLandingPage(true)
    },[handleIsLandingPage])

    return (
        <div className="landing-page">
            <div className="content">
                <div className="greet">Welcome to <span className="brand">EM Codebook</span></div>
                <div>Website for storing code snippets</div>
            </div>
            <div className="footer">
                <div className="btn">
                <i className='bx bxl-google'></i>
                <span>Sign In With Google</span>
                </div>
            </div>
        </div>
    )
}