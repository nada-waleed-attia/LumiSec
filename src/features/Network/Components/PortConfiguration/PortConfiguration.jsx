import React from 'react'
import circleIcon from "../../../../assets/◎.png"
import "./PortConfiguration.css"
export default function PortConfiguration() {
  return<>
  
  <div className='dashboard-card mb-3'>
        <div className='d-flex align-items-center mb-2'>
            <figure className='mb-0 me-2'>
                <img src={circleIcon} className='w-100' alt="codeIcon" />
            </figure>
            <h6 className='text-white mb-0'>Scan Configuration</h6>
        </div>

        <form action="">
        <div className='row justify-content-between align-items-center mb-3'>
            <div className='col'>
                <label htmlFor="Target/Range" className='d-block mb-1'>Subnet</label>
                <input type="text" className='form-control border-0' name="" id="Target/Range" placeholder='Target/Range' />
            </div>

            <div className='col'>
                <label htmlFor="PortRange" className='d-block mb-1'>Timeout (ms)</label>
                <input type="text" className='form-control border-0' name="" id="PortRange" placeholder='PortRange' />
            </div>

            <div className='col'>
                <label htmlFor="ScanType" className='d-block mb-1'>Scan Type</label>
                <select name="" id="ScanType" className='form-select ScanType-select border-0'>
                    <option value="both">Both</option>
                </select>
            </div>

            <div className='col'>
                <label htmlFor="Speed" className='d-block mb-1'>Speed</label>
                <select name="" id="Speed" className='form-select speed-select border-0'>
                    <option value="both">Both</option>
                </select>
            </div>

            <div className='col'>
                <button className='btn start-btn border-0 rounded-3 text-black fw-medium me-3 ps-0 d-flex justify-content-between align-items-center mt-4'><i class="fa-solid fa-play mx-2 text-dark"></i>Start Scan</button>
            </div>
        </div>
        </form>
    </div>
  
  
  </>
}
