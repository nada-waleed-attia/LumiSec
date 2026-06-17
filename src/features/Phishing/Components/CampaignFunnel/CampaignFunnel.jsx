import React from 'react'
import "./CampaignFunnel.css"

export default function CampaignFunnel() {
  return <>
  
  <h6 className='text-white mb-2'>Campaign Funnel</h6>
      <p>Email → Submission conversion</p>

      <div className='mb-3'>
        <div className='d-flex justify-content-between align-items-center'>
            <p>Opened</p>
            <p><span className='blue-number me-1'>9,280</span>(74%)</p>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-blue w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
      </div>



      <div className='mb-3'>
        <div className='d-flex justify-content-between align-items-center'>
            <p>Clicked Link</p>
            <p><span className='purple-number me-1'>3,887</span>(31%)</p>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-purple w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
      </div>




      <div className='mb-3'>
        <div className='d-flex justify-content-between align-items-center'>
            <p>Submitted Data</p>
            <p><span className='orange-number me-1'>1,379</span>(11%)</p>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-orange w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
      </div>



      <div className='mb-3'>
        <div className='d-flex justify-content-between align-items-center'>
            <p>Emails Sent</p>
            <p><span className='red-number me-1'>12,540</span>(100%)</p>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-red w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
      </div>


      <div className='text-center'>
        <p>74% conversion</p>
        <p>42% conversion</p>
        <p>35% conversion</p>
      </div>
  
  
  
  </>
}
