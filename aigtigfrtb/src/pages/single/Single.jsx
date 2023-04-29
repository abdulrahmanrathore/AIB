import './single.css';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import { useState } from 'react';

export default function Single() {
  const [updateMode, setUpdateMode] = useState(false);
  function handleChildData(data) {
    setUpdateMode(data);
  }

  return (
    <div className="row me-0">
    <div className="col-md-8">
      <div className="container m-3 pb-3">
        <SinglePost onDataReceived={handleChildData} />
      </div>
    </div>
    <div className="col-md-4 me-0 p-5">{updateMode ? (<></>):(<Sidebar className="sidebar" />)}</div>
  </div>
  )
}
