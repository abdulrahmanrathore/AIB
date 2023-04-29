import React from 'react';
import { download } from '../assets';
import { downloadImage } from '../utils';
import './card.css';

const Card = ({_id, name, prompt, photo }) => {
  return (
<div className="card mb-3 rounded-3 shadow-sm position-relative overflow-hidden">
  <img src={photo} className="card-img-top rounded-3 h-100" alt={prompt} />
  <div className="subcard px-5 position-absolute bottom-0 start-0 w-100 h-0 overflow-hidden text-white text-center rounded-bottom-3">
      <div className="card-body bg-black">
          <p className="card-text">{prompt}</p>
          <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="c_con rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-2">
                  <span className="con text-uppercase fw-bold">{name[0]}</span>
                </div>
                <h5 className="card-title mb-0">{name}</h5>
              </div>
              <button type='button' onClick={() => downloadImage(_id, photo)} className="btn btn-sm btn-light">
                <img src={download} alt="download" className='download-icon' />
              </button>
          </div>
      </div>
  </div>
</div>
  )
}

export default Card