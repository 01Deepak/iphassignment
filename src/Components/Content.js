import React, { useState } from 'react'
import ReviewNav from './ReviewNav'
import Menu from '../Pages/Menu'
import Info from '../Pages/Info'
import Reviews from '../Pages/Reviews'
import '../Styles/Style.css'
import OrderCard from './OrderCard'


const Content = () => {
    const [conditionalComponent, setConditionalComponent] = useState({
        isMenu: false,
        isReviews: false,
        isInfo: false
    })
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-sm-8 '>
                    <ReviewNav conditionalComponent={conditionalComponent} setConditionalComponent={setConditionalComponent} />
                    {
                        conditionalComponent.isMenu ? <Menu /> : conditionalComponent.isReviews ? <Reviews /> : conditionalComponent.isInfo ? <Info /> : <Reviews />
                    }
                </div>
                <div className='col-sm-4 '>
                    <OrderCard />
                </div>
            </div>
        </div>
    )
}

export default Content