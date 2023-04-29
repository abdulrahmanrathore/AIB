import React, { useContext } from 'react';
import './topbar.css';
import logo from "../../img/ARR.png";
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function TopBar(){
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    }
    const PF = "http://localhost:5000/images/"

  return (
    <nav className="navbar navbar-expand-lg border-4 border-bottom border-info sticky-top navbar-light bg-white">
        <div className="container-fluid">
            <span className="navbar-brand" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <img src={logo} alt='' width="30" height="24" />
            </span>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about-us" className="nav-link">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/community" className="nav-link">COMMUNITY</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">CONTACT</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/write" className="nav-link">WRITE</Link>
                    </li>
                </ul>
            </div>
            <div className="search d-flex">
                {user ? (
                <div className="dropdown">
                    <span className="dropdown-toggle d-flex align-items-center hidden-arrow" 
                        id="navbarDropdownMenuAvatar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={PF+user.profilePic} className="rounded-circle" height="35"
                            alt="" loading="lazy" />
                    </span>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                        <li>
                            <Link className="dropdown-item" to="/myprofile" >My profile</Link>
                        </li>
                        <li>
                            <Link to="/settings" className="dropdown-item" >Settings</Link>
                        </li>
                        <li>
                            <span className="dropdown-item" onClick={handleLogout} >Logout</span>
                        </li>
                    </ul>
                </div>
                ) : (
                    <div className="float-end">
                        <span className="navbar-toggler border-0" data-bs-toggle="collapse" data-bs-target="#supplyContentSignup" aria-controls="supplyContentSignup" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa-solid fa-right-to-bracket"></i>
                        </span>
                        <div className="collapse navbar-collapse" id='supplyContentSignup'>
                            <div class="d-flex align-items-center me-5">
                                <Link type="button" to="/login" class="btn text-dark me-2">Login</Link>
                                <Link type="button" to="/register" class="btn btn-dark me-3">Signup</Link>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    </nav>
  )
}
