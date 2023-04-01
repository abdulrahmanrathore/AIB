import React from 'react';
import './myprofile.css';
import Posts from '../../components/posts/Posts';
import Myheader from './Myheader';
// import Sidebar from '../../components/sidebar/Sidebar';

export default function MyProfile() {
  return (
    <>
    <Myheader />
    <div className="row me-0">
        <div className="col-md-12">
            <div className="justify-content-center">
                <Posts />
            </div>
        </div>
    </div>
    </>
  )
}
