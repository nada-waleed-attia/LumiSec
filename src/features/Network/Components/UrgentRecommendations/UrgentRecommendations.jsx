import React from 'react'
import "./UrgentRecommendations.css"

export default function UrgentRecommendations() {
  return <>

  <div>
    <div className='row justify-content-between mb-3'>
      <div className='col-1'>
          <i class="fa-solid fa-triangle-exclamation critical-danger-triangle rounded-3 p-3"></i>
      </div>
      <div className='col'>
          <div className='ms-3'>
            <p className='urgent-title mb-1'>SRV-DB-01: <span className='text-white fw-medium'>SMB Signing Disabled</span></p>
            <p className='urgant-text'>Enable SMB signing in Group Policy settings under Computer Configuration  Windows Settings  Security Settings  Local Policies Security Options</p>
          </div>
          <button className='btn fixNow-btn ms-3'><i class="fa-solid fa-wrench me-1"></i>Fix Now</button>
      </div>
    </div>

    <div className='row justify-content-between mb-3'>
    <div className='col-1'>
        <i class="fa-solid fa-triangle-exclamation high-danger-triangle rounded-3 p-3"></i>
    </div>
    <div className='col'>
        <div className='ms-3'>
          <p className='urgent-title mb-1'>WEB-SRV-01: <span className='text-white fw-medium'>Telnet Enabled</span></p>
          <p className='urgant-text'>Disable Telnet and migrate to SSH for all remote access</p>
        </div>
        <button className='btn fixNow-btn ms-3'><i class="fa-solid fa-wrench me-1"></i>Fix Now</button>
    </div>
  </div>


  <div className='row justify-content-between mb-3'>
    <div className='col-1'>
        <i class="fa-solid fa-triangle-exclamation critical-danger-triangle rounded-3 p-3"></i>
    </div>
    <div className='col'>
        <div className='ms-3'>
          <p className='urgent-title mb-1'>FTP-SRV-01: <span className='text-white fw-medium'>Weak Credentials</span></p>
          <p className='urgant-text'>Change passwords and disable anonymous access immediately</p>
        </div>
        <button className='btn fixNow-btn ms-3'><i class="fa-solid fa-wrench me-1"></i>Fix Now</button>
    </div>
  </div>


  </div>
  
  
  </>
}
