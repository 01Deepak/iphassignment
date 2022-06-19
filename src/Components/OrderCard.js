import React from 'react'
import { MdDelete } from 'react-icons/md';

const OrderCard = () => {
    return (
        <div className='row'>
            <div className='col-sm-10 mx-auto'>
                <div className="card text-dark bg-light mb-3" >
                    <div className="card-header text-center">
                        <h4>Your Order</h4>
                    </div>
                    <div className="card-body">
                        <div className='d-flex justify-content-between align-items-center border-bottom '>
                            <p style={{ maxWidth: "150px" }}>Aenean volutpat purus magna</p>
                            <p className='minwidth'>1 x <strong>$20</strong></p>
                            <p className='text-danger' role="button"><MdDelete /></p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom '>
                            <p style={{ maxWidth: "150px" }}>Aenean volutpat purus magna</p>
                            <p className='minwidth'>2 x <strong>$30</strong></p>
                            <p className='text-danger' role="button"><MdDelete /></p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center '>
                            <span style={{ maxWidth: "150px" }}>SubTotal</span>
                            <span>$52.00</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center '>
                            <span style={{ maxWidth: "150px" }}>Delivery fee</span>
                            <span>$10.00</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span style={{ maxWidth: "150px" }}>Vat(13%)</span>
                            <span>$4.68</span>
                        </div>

                    </div>
                    <div className="card-footer text-muted d-flex justify-content-between align-items-center">
                        <h6><strong>Total</strong></h6>
                        <h6>$66.68</h6>
                    </div>
                    <button className='btn btn-warning '>PROCESS TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default OrderCard