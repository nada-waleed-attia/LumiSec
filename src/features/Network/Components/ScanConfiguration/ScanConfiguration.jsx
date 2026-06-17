import React from 'react'
import codeIcon from "../../../../assets/⟨⟩.png"
import "./ScanConfiguration.css"

export default function ScanConfiguration() {
  return <>
  
  <div className='dashboard-card mb-3'>
        <div className='d-flex align-items-center'>
            <figure className='mb-0 mt-2 me-2'>
                <img src={codeIcon} className='w-100' alt="codeIcon" />
            </figure>
            <h6 className='text-white mb-0'>Scan Configuration</h6>
        </div>

        <form action="">
        <div className='row justify-content-between align-items-center mb-3'>
            <div className='col-3'>
                <label htmlFor="subnet" className='d-block'>Subnet</label>
                <input type="text" className='form-control border-0' name="" id="subnet" placeholder='Subnet' />
            </div>

            <div className='col-3'>
                <label htmlFor="scanType" className='d-block'>Scan Type</label>
                <select name="" id="scanType" className='form-select scanType-select border-0'>
                    <option value="both">Both</option>
                </select>
            </div>

            <div className='col-3'>
                <label htmlFor="timeout" className='d-block'>Timeout (ms)</label>
                <input type="text" className='form-control border-0' name="" id="timeout" placeholder='Timeout' />
            </div>

            <div className='col-3'>
                <button className='btn start-btn border-0 rounded-3 text-black fw-medium me-3 ps-0 d-flex justify-content-between align-items-center mt-4'><i class="fa-solid fa-play mx-2 text-dark"></i>Start Scan</button>
            </div>
        </div>
        </form>
    </div>
  
  </>
}
