import React from 'react'
import "./Simple.css";
import image from "./ass.png"
import vector from "./Vector.jpg"
import vector2 from "./Vector (2).jpg"
import Refer from './Refer';
import Cards from './Cards';
import Card from './Card';
import Description from './Description';
const Simple = () => {
    return (
        <div className='main'>
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
            <Refer />
            <div className='section'>
                <Card />
                <Cards />
            </div>
            <Description />
            <div className='last-info'>
                <div className='footer-info'>
                    <h1>Friends Who Enrolled</h1>
                </div>
                <div className='footer-inform'>
                    <h1>Terms & Conditions</h1>
                </div>
            </div>

        </div>
    )
}

export default Simple

