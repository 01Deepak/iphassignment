import React from 'react'
import { reviewData } from '../StaticData/Reviews'
const ReviewCard = () => {
    return (
        <>
            {
                reviewData.map((data) => (
                    <div>
                        <hr />
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-2 roundAvtar  d-flex flex-column justify-content-center align-items-center text-center">
                                    <img src={data.image} className="img-fluid" alt="image" />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h6 className="card-title"><strong>{data.name}</strong> {data.date} </h6>
                                        <p className="card-text">{data.text}</p>
                                        <p className="card-text"><small className="text-muted">{data.icon}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>

    )
}

export default ReviewCard