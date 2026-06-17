import React from 'react'
import "./PhishingSettings.css"

export default function PhishingSettings() {
  return<>
    <div className='w-75'>
        <div>
            <h5 className='text-white'>Settings</h5>
            <p className='dashboard-desc'>Platform configuration and preferences</p>
        </div>


        <div className='dashboard-card mb-3'>
            <p className='text-white mb-0'>Organisation</p>
            <hr />
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <div>
                    <p className='text-white mb-0'>Organisation Name</p>
                    <p>Shown in reports and exports</p>
                </div>
                <input type="text" className='form-control w-25 ps-2 header-search-input' value={"LumiSec Corp"} />
            </div>

            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <p className='text-white mb-0'>Timezone</p>
                    <p>Used for campaign scheduling and timestamps</p>
                </div>
                <input type="text" className='form-control w-25 ps-2 header-search-input'  />
            </div>
        </div>


        <div className='dashboard-card mb-3'>
            <p className='text-white mb-0'>Email Configuration</p>
            <hr />
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <div>
                    <p className='text-white mb-0'>From Address</p>
                    <p>Sender address for simulation emails</p>
                </div>
                <input type="text" className='form-control w-25 ps-2 header-search-input' value={"security@lumisec.io"} />
            </div>

            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <p className='text-white mb-0'>Auto-generate Reports</p>
                    <p>Send PDF report after each campaign ends</p>
                </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked  />
                </div>
            </div>


            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <p className='text-white mb-0'>Slack Notifications</p>
                    <p>Post campaign milestones to Slack</p>
                </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                </div>
            </div>
            
        </div>


        <div className='dashboard-card mb-3'>
            <p className='text-white mb-0'>Security</p>
            <hr />
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <p className='text-white mb-0'>Require MFA</p>
                    <p>Enforce multi-factor authentication for all users</p>
                </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                </div>
            </div>


            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <p className='text-white mb-0'>Session Timeout (minutes)</p>
                    <p>Auto-logout after inactivity</p>
                </div>
                <input type="text" className='form-control w-25 ps-2 header-search-input' value={"30"} />
            </div>
            
        </div>


        <div className='d-flex justify-content-end'>
            <button className='save-btn p-2 rounded-3 text-white border-0'><i className="fa-solid text-white fa-save pe-2"></i> Save Settings</button>
        </div>




    </div>
  
  
  
  </>
}
