import React from 'react'
import "./SubnetOverview.css"

export default function SubnetOverview({title , status , text}) {
  return <>
  
  <div className='col dashboard-card me-2'>
    <div className='subnet rounded-3 w-100'>
        <div className='d-flex justify-content-between align-items-center mb-3'>
            <h6 className='subnet-title mb-0'>{title}</h6>
            <p className='subnet-status mb-0 px-3 py-2 rounded-5 fw-bold'>{status}</p>
        </div>
        <div class="progress mb-3">
            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <p className='mb-0'>{text}</p>
    </div>


  </div>

  
  </>
}
