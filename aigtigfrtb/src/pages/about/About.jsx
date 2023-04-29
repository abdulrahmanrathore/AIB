import React from 'react';
import './about.css';
import { arr } from './assets';
import { harsh } from './assets';
import { kehkasha } from './assets';

export default function About() {
  return (
        <div className="py-5 team3 bg-light">
        <div className="container">
            <div className="row justify-content-center mb-4">
            <div className="col-md-7 text-center">
                <h3 className="mb-3">Meet With Our Team</h3>
                <h6 className="subtitle font-weight-normal">We are the team of three amazing members, contributed to buid the application from A to Z and this project is considered as a major project of our B.Tech.<br/> Here we are :-</h6>
            </div>
            </div>
            <div className="row">
            
            <div className="col-lg-4 mb-4">
            
                <div className="row p-5">
                <div className="col-md-12">
                    <img src={kehkasha} alt="wrapkit" className="card-img-top rounded h-100" />
                </div>
                <div className="col-md-12">
                    <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">Kehkasha Anjum</h5>
                    <h6 className="subtitle">B.Tech Computer Science and Engineering</h6>
                    <p>We have buid this application as much simplistic as by it's user interface that makes it easier to use, you can relay on it's amazing features that makes it user friendly as well.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/kehkasa-anjum-5957a1220/?originalSubdomain=in" className="text-decoration-none d-block px-1"><i className="icon-social-linkedin"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/kehkasa_anjum/?igshid=YmMyMTA2M2Y%3D" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            
            </div>
            
            <div className="col-lg-4 mb-4">
            
                <div className="row p-5">
                <div className="col-md-12 pro-pic">
                    <img src={harsh} alt="wrapkit" className="card-img-top rounded h-100" />
                </div>
                <div className="col-md-12">
                    <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">Harsh Kumar Deshmukh</h5>
                    <h6 className="subtitle">B.Tech Computer Science and Engineering</h6>
                    <p>
                        We have given our 100% efforts to make it featureful web application, effectively worked on frontend as well as backend. We will work more in the future to inhance it as needed.
                    </p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="https://github.com/Harshdeshmukh13" className="text-decoration-none d-block px-1"><i className="icon-social-github"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/harsh-deshmukh-17050a221/" className="text-decoration-none d-block px-1"><i className="icon-social-linkedin"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/ll__h_a_r_s_h___ll/?igshid=YmMyMTA2M2Y%3D" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
        
            </div>
            
            <div className="col-lg-4 mb-4">
            
                <div className="row p-5">
                <div className="col-md-12 pro-pic">
                    <img src={arr} alt="wrapkit" className="card-img-top rounded h-100" />
                </div>
                <div className="col-md-12">
                    <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">Abdul Rahman Rathore</h5>
                    <h6 className="subtitle">B.Tech Computer Science and Engineering</h6>
                    <p>We have not only focused on A.I. image generator part but the whole application features that you are looking in this application so that it can be a ideal solution for blogging applications.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="https://github.com/abdulrahmanrathore" className="text-decoration-none d-block px-1"><i className="icon-social-github"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/abdul-rahman-rathore-b445921b2/" className="text-decoration-none d-block px-1"><i className="icon-social-linkedin"></i></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/_AbdulRahman2_?t=UkqkyepnQzsJUtTYkEG5Pw&s=09" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/abdulrahmanrathore2/?igshid=ZDdkNTZiNTM%3D" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            
            </div>
            
            </div>
        </div>
        </div>
    )
}
