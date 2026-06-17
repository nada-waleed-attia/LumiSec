import React from 'react'
import CampaignsTabel from '../Components/CampaignsTabel/CampaignsTabel'

export default function Campaigns() {
  return <>
  
  <div>
    <div className='d-flex justify-content-between align-items-center mb-3'>
        <div>
            <h5 className='text-white'>Campaigns</h5>
            <p className='dashboard-desc'>7 total campaigns · 3 active</p>
        </div>
        <button className='btn add-btn text-white border-0'>
                    <i className="fa-solid fa-plus me-2"></i>
                    New Campaign
        </button>
    </div>
    <div>
        <CampaignsTabel />
    </div>
  </div>
  
  
  </>
}
