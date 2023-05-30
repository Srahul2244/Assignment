import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <div className="card">
      <div className='card-info'>
        <div>
          <h1 className='heading'>Refferal Earning</h1>
          <p className='price'>₹ 2,500</p>
        </div>
        <div>
          <h1 className='heading'>Total Referrals</h1>
          <p className='price'>7</p>
        </div>
        <div>
          <h1 className='heading'>Wallet Balance</h1>
          <p className='price'>₹ 500</p>
        </div>

      </div>
      <div className='btn-box'>
        <button className="btn">
          Withdraw Balance
        </button>
      </div>
    </div>
  )
}

export default Card
