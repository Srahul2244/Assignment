import React from 'react'
import "./Second.css"
import image from "../components/ass.png"
import vector from "../components/Vector.jpg"
import vector2 from "../components/Vector (2).jpg"
import Ux from './Ux'
import Refer from './Refer'
import Grid from './Grid'
const Second = () => {
    return (
        <div className='second-info'>
            <nav className="nav">
                <div className="logo">
                    <img src={image} alt="" />
                </div>
                <div className="navbar-items">
                    <a href="#" className="navbar-item">My Assignment</a>
                    <a href="#" className="navbar-item">Chat with Mentor</a>
                    <div className="profile">
                        <img className="vector" src={vector} alt="" />
                        <span className="profile-name">ProfileName</span>
                        <img className="vector2" src={vector2} alt="" />
                    </div>
                </div>

            </nav>
            <Ux />
            <Refer />
            <Grid />
            <div className='footer'>
                <p>Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Second