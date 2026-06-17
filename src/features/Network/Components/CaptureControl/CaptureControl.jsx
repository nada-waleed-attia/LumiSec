import React from 'react'
import wifiIcon from "../../../../assets/SVG (2).png"

export default function CaptureControl() {
  return <>
  
<div className='dashboard-card mb-3'>
        <div className='d-flex align-items-center mb-2'>
            <figure className='mb-0 me-2'>
                <img src={wifiIcon} className='w-100' alt="codeIcon" />
            </figure>
            <h6 className='text-white mb-0'>Capture Controls</h6>
        </div>

        <form action="">
        <div className='row justify-content-between align-items-center mb-3'>

        <div className='col'>
                <label htmlFor="ScanType" className='d-block mb-1'>Interface</label>
                <select name="" id="ScanType" className='form-select ScanType-select border-0'>
                    <option value="both">eth0</option>
                </select>
        </div>



            <div className='col'>
                <label htmlFor="Target/Range" className='d-block mb-1'>Duration (sec)</label>
                <input type="text" className='form-control border-0' name="" id="Target/Range" placeholder='Duration (sec)' />
            </div>

            <div className='col'>
                <label htmlFor="PortRange" className='d-block mb-1'>BPF Filter</label>
                <input type="text" className='form-control border-0' name="" id="PortRange" placeholder='BPF Filter' />
            </div>

            <div className='col'>
                <label htmlFor="Speed" className='d-block mb-1'>Status</label>
                <button className='btn btn-secondary text-white border-0 w-100'>Stopped</button>
            </div>

            <div className='col'>
                <button className='btn start-btn border-0 rounded-3 text-white fw-medium me-3 ps-0 d-flex justify-content-between align-items-center mt-4'><i class="fa-solid fa-play mx-2 text-white"></i>Start Capture</button>
            </div>
        </div>
        </form>
    </div>
  
  </>
}
