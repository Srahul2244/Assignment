import React from 'react'
import "./Grid.css"
const Grid = () => {
    return (
        <div className='gridclass'>
            <div className='info-heading'><h1 className='frinds-info'>Friends who enrolled<span className='third'>(3)</span></h1></div>
            <div className='grid-conta'>
                <div className='h'>
                    <div className='flex-box'>
                        <h1 className='headings'>Dhiraj Saxsena</h1>
                        <p className='dob-info'>14 Sep, 2022</p>
                    </div>
                    <h1 className='courses'>Courses Enrolled(6)</h1>
                    <div className='grid-second'>
                        <div className='chota-box'>
                            <h1>UI/UX</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>Photoshop</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>Illustrator</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>Python</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>MERN</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>JAVA</h1>
                        </div>
                    </div>
                    <div className='refral-infom'>
                        <h1>Referral Amount <span className='rupess'>₹185</span></h1>

                    </div>
                </div>
                <div className='h'>
                    <div className='flex-box'>
                        <h1 className='headings'>Shubhash Mishra</h1>
                        <p className='dob-info'>15 Sep, 2022</p>
                    </div>
                    <h1 className='courses'>Courses Enrolled(23)</h1>
                    <div className='grid-second'>
                        <div className='chota-box'>
                            <h1>UI/UX</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>Photoshop</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>Illustrator</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>Python</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>MERN</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>JAVA</h1>
                        </div>
                    </div>
                    <div className='refral-infom'>
                        <h1>Referral Amount    {" "}{" "}<span className='rupess'>₹485</span></h1>

                    </div>
                </div>
                <div className='h'>
                    <div className='flex-box'>
                        <h1 className='headings'>Praful Kumar</h1>
                        <p className='dob-info'>15 Sep, 2022</p>
                    </div>
                    <h1 className='courses'>Courses Enrolled(23)</h1>
                    <div className='grid-second'>
                        <div className='chota-box'>
                            <h1>UI/UX</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>Photoshop</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>Illustrator</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>C++</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>MERN</h1>
                        </div>
                        <div className='chota-box'>
                            <h1>JAVA</h1>
                        </div>
                    </div>
                    <div className='refral-infom'>
                        <h1>Referral Amount    {" "}{" "}<span className='rupess'>₹485</span></h1>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid