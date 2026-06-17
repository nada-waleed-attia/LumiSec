import React from 'react'
import "./DepartmentRisk.css"

export default function DepartmentRisk() {
  return <>
  
  <h6 className='text-white mb-2'>Department Risk</h6>
      <p>Submission rate by department</p>

      <div className='mb-3'>
        <div className='d-flex justify-content-between align-items-center'>
            <p>Finance</p>
            <p className='red-number fw-medium'>74%</p>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-red w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
      </div>


      <div className='mb-3'>
        <div className='d-flex justify-content-between align-items-center'>
            <p>HR</p>
            <p className='orange-number fw-medium'>52%</p>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-orange w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
      </div>



      <div className='mb-3'>
        <div className='d-flex justify-content-between align-items-center'>
            <p>IT</p>
            <p className='orange-number fw-medium'>38%</p>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-orange w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
      </div>


      <div className='mb-3'>
        <div className='d-flex justify-content-between align-items-center'>
            <p>Sales</p>
            <p className='red-number fw-medium'>61%</p>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-red w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
      </div>



      <div className='mb-3'>
        <div className='d-flex justify-content-between align-items-center'>
            <p>Marketing</p>
            <p className='green-number fw-medium'>29%</p>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-green w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
      </div>


      <div className='mb-3'>
        <div className='d-flex justify-content-between align-items-center'>
            <p>Engineering</p>
            <p className='green-number fw-medium'>18%</p>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-green w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
      </div>

  
  
  
  </>
}
