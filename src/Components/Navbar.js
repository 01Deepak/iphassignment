import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand me-auto" to="/">Kin Kao | JustEat</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-2 mb-2 mb-lg-0 d-flex justify-content-end align-items-center w-100 ">
                        <li className="nav-item mx-3">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link " to="/aboutus">About us</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="btn btn-success btn-sm" to="/register">Login/Registration</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar