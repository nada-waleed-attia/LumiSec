import React from 'react'
import "./ExfiltrationIndicators.css"
export default function ExfiltrationIndicators() {
  return<>
  
  <div className='dashboard-card'>
            <div className='row justify-content-between align-items-center p-2'>
                <div className='col-6 d-flex align-items-center mb-3 mx-0 p-0'>
                    <i class="fa-solid fa-circle-exclamation exclamation-icon me-2"></i>
                    <h6 className='text-white mb-0'>Flood & Anomaly Alerts</h6>
                </div>
                
                <div className='mb-5'>
                <div className='row justify-content-between align-items-center p-0 mb-2'>
                    <div className='col-8'>
                        <p className='rounded-3 w-fit-content text-white mb-0'>Suspicious Exfiltration</p>
                    </div>
                    <div className='col-2 p-0 d-flex justify-content-end align-items-center'>
                        <p className='mb-0 critical rounded-3 w-fit-content'>Risk 85%</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center p-0 mb-3'>
                    <p className='mb-0'>Src: <span className='text-white'>192.168.1.20</span></p>
                    <p className='mb-0'>Dst: <span className='text-white'>203.0.113.50</span></p>
                    <p className='mb-0'>Proto: <span className='text-white'>HTTPS</span></p>
                </div>
                    <div className='row justify-content-between align-items-center p-0'>
                        <div className='col-3'>
                            <p className='mb-0'>Data Volume</p>
                        </div>
                        <div className='col'>
                            <div class="Anomaly-Alerts-progress progress">
                                <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='col-2'>
                            <p className='text-white mb-0'>2.3 GB</p>
                        </div>
                    </div>
                </div>


                <div className='mb-5'>
                <div className='row justify-content-between align-items-center p-0 mb-2'>
                    <div className='col-8'>
                        <p className='rounded-3 w-fit-content text-white mb-0'>Suspicious Exfiltration</p>
                    </div>
                    <div className='col-2 p-0 d-flex justify-content-end align-items-center'>
                        <p className='mb-0 critical rounded-3 w-fit-content'>Risk 72%</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center p-0 mb-3'>
                    <p className='mb-0'>Src: <span className='text-white'>192.168.1.45</span></p>
                    <p className='mb-0'>Dst: <span className='text-white'>198.51.100.25</span></p>
                    <p className='mb-0'>Proto: <span className='text-white'>DNS</span></p>
                </div>
                    <div className='row justify-content-between align-items-center p-0'>
                        <div className='col-3'>
                            <p className='mb-0'>Data Volume</p>
                        </div>
                        <div className='col'>
                            <div class="Anomaly-Alerts-progress-orange progress">
                                <div class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='col-2'>
                            <p className='text-white mb-0'>850 MB</p>
                        </div>
                    </div>
                </div>



                <div className='mb-5'>
                <div className='row justify-content-between align-items-center p-0 mb-2'>
                    <div className='col-8'>
                        <p className='rounded-3 w-fit-content text-white mb-0'>Suspicious Exfiltration</p>
                    </div>
                    <div className='col-2 p-0 d-flex justify-content-end align-items-center'>
                        <p className='mb-0 critical rounded-3 w-fit-content'>Risk 90%</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center p-0 mb-3'>
                    <p className='mb-0'>Src: <span className='text-white'>172.16.8.88</span></p>
                    <p className='mb-0'>Dst: <span className='text-white'>172.16.8.88</span></p>
                    <p className='mb-0'>Proto: <span className='text-white'>SSH</span></p>
                </div>
                    <div className='row justify-content-between align-items-center p-0'>
                        <div className='col-3'>
                            <p className='mb-0'>Data Volume</p>
                        </div>
                        <div className='col'>
                            <div class="Anomaly-Alerts-progress progress">
                                <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='col-2'>
                            <p className='text-white mb-0'>1.1 GB</p>
                        </div>
                    </div>
                </div>



                
                </div>

            </div>
  
  </>
}
