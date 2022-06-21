import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">

                <NavLink className="navbar-brand" to="/">
                    <i className="fas fa-heartbeat"></i>
                    Homeopathy Clinic
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                    <NavLink exact activeClassName="nav-item-select" className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink exact activeClassName="nav-item-select" className="nav-link" to="/about">About</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink exact activeClassName="nav-item-select" className="nav-link" to="/treatments">Treatments</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink exact activeClassName="nav-item-select" className="nav-link" to="/contact">Contact</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link" to="#"><i className="fas fa-search"></i></NavLink>
                    </li>

                </ul>

                </div>
            </div>
        </nav>
    )
}
