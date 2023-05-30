import React from 'react'
import img1 from "./Images/Vector (1).png";
import img2 from "./Images/Vector (2).png";
import img3 from "./Images/Vector (3).png";
import img4 from "./Images/Vector (4).png";
import img5 from "./Images/Vector (5).png";
import "./Description.css";

const Description = () => {
    return (
        <div className='main-container'>
            <div className='head-tag'>
                <h1>How does it work ?</h1>
            </div>
            <div className='grid-container'>
                <div className='flex-container'>
                    <div className='image-information'>
                        <img className='image-tag' src={img1} alt="" />
                    </div>
                    <div>
                        <h1 className='heading-info'>Invite your Friends</h1>
                        <p className='para-info'>Share the link tutedude.com with
                            your friends</p>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className='image-information'>
                        <img className='image-tag' src={img2} alt="" />
                    </div>
                    <div>
                        <h1 className='heading-info'>Friend purchases any course</h1>
                        <p className='para-info'>Using your REFERRAL CODE in the payments page</p>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className='image-information'>
                        <img className='image-tag' src={img3} alt="" />
                    </div>
                    <div>
                        <h1 className='heading-info'>You get ₹ 200 as referral money</h1>
                        <p className='para-info' >On total purchase the friend makes, into your wallet</p>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className='image-information'>
                        <img className='image-tag' src={img4} alt="" />
                    </div>
                    <div>
                        <h1 className='heading-info'>Your Friend gets ₹ 200 Off </h1>
                        <p className='para-info'>On his overall fee on successful purchase using your referral code </p>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className='image-information'>
                        <img className='image-tag' src={img5} alt="" />
                    </div>
                    <div>
                        <h1 className='heading-info'>Transfer money from wallet</h1>
                        <p className='para-info'>When the wallet balance reaches
                            ₹200 or more, you can withdraw it</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description