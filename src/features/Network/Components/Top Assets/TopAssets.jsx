import React from 'react'
import "./TopAssets.css"

export default function TopAssets({title , number , text}) {
  return <>
  
  <div className='top-assets rounded-3 w-100 p-3 mb-3'>
    <div className='d-flex justify-content-between align-items-center'>
        <h6 className='text-white mb-0'>{title}</h6>
        <p className='number mb-0 px-3 py-2 rounded-3 fw-bold fs-5'>{number}</p>
    </div>
    <p>{text}</p>
    <div class="progress">
        <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
  
  
  </>
}
