import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Style.css'

const ReviewNav = ({ conditionalComponent, setConditionalComponent }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container p-0">
                <ul className="navbar-nav bg-secondary w-100 d-flex justify-content-between align-items-center">
                    <li className='col-sm-4'>

                        <button className='btn btn-sm btn-secondary w-100' onClick={() => setConditionalComponent({ isMenu: true, isReviews: false, isInfo: false })}>MENU</button>
                    </li>
                    <li className='col-sm-4'>

                        <button className='btn btn-sm btn-secondary w-100' onClick={() => setConditionalComponent({ isMenu: false, isReviews: true, isInfo: false })}>REVIEWS</button>
                    </li>
                    <li className='col-sm-4'>

                        <button className='btn btn-sm btn-secondary w-100' onClick={() => setConditionalComponent({ isMenu: false, isReviews: false, isInfo: true })}>INFO</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default ReviewNav