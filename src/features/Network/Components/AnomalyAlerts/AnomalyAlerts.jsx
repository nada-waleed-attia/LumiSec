import React from 'react'

export default function AnomalyAlerts() {
  return <>
  
  <div className='dashboard-card'>
            <div className='row justify-content-between align-items-center p-2'>
                <div className='col-6 d-flex align-items-center mb-3 mx-0 p-0'>
                    <i class="fa-solid fa-triangle-exclamation triangle-icon me-2"></i>
                    <h6 className='text-white mb-0'>Flood & Anomaly Alerts</h6>
                </div>
                <div className='row justify-content-between align-items-center mb-4 p-0'>
                    <div className='col-1'>
                        <p className='critical rounded-3 w-fit-content mb-0'>Critical</p>
                    </div>
                    <div className='col-8 p-0'>
                        <p className='text-white mb-0'>TCP Flood</p>
                        <div className='d-flex justify-content-between align-items-center p-0'>
                            <p className='mb-0'>Src: <span className='text-white'>192.168.1.45</span></p>
                            <p className='mb-0'>Dst: <span className='text-white'>10.0.0.5</span></p>
                            <p className='mb-0 pps'>45,000 pps</p>
                        </div>
                    </div>
                    <div className='col-1 p-0'>
                        <p className='mb-0'>14:23:15</p>
                    </div>

                </div>

                <div className='row justify-content-between align-items-center mb-4 p-0'>
                    <div className='col-1'>
                        <p className='high-sevarity px-3 rounded-3 w-fit-content mb-0'>High</p>
                    </div>
                    <div className='col-8 p-0'>
                        <p className='text-white mb-0'>ICMP Flood</p>
                        <div className='d-flex justify-content-between align-items-center p-0'>
                            <p className='mb-0'>Src: <span className='text-white'>172.16.0.88</span></p>
                            <p className='mb-0'>Dst: <span className='text-white'>192.168.1.1</span></p>
                            <p className='mb-0 pps'>32,000 pps</p>
                        </div>
                    </div>
                    <div className='col-1 p-0'>
                        <p className='mb-0'>14:18:42</p>
                    </div>

                </div>

                <div className='row justify-content-between align-items-center mb-4 p-0'>
                    <div className='col-1'>
                        <p className='high-sevarity px-3 rounded-3 w-fit-content mb-0'>High</p>
                    </div>
                    <div className='col-8 p-0'>
                        <p className='text-white mb-0'>High</p>
                        <div className='d-flex justify-content-between align-items-center p-0'>
                            <p className='mb-0'>Src: <span className='text-white'>192.168.1.70</span></p>
                            <p className='mb-0'>Dst: <span className='text-white'>8.8.8.8</span></p>
                            <p className='mb-0 pps'>28,000 pps</p>
                        </div>
                    </div>
                    <div className='col-1 p-0'>
                        <p className='mb-0'>13:55:30</p>
                    </div>

                </div>



                <div className='row justify-content-between align-items-center mb-4 p-0'>
                    <div className='col-1'>
                        <p className='critical rounded-3 w-fit-content mb-0'>Critical</p>
                    </div>
                    <div className='col-8 p-0'>
                        <p className='text-white mb-0'>Data Exfiltration</p>
                        <div className='d-flex justify-content-between align-items-center p-0'>
                            <p className='mb-0'>Src: <span className='text-white'>192.168.1.20</span></p>
                            <p className='mb-0'>Dst: <span className='text-white'>203.0.113.50</span></p>
                            <p className='mb-0 pps'>15,000 pps</p>
                        </div>
                    </div>
                    <div className='col-1 p-0'>
                        <p className='mb-0'>13:42:18</p>
                    </div>

                </div>


                <div className='row justify-content-between align-items-center mb-4 p-0'>
                    <div className='col-1'>
                        <p className='critical rounded-3 w-fit-content mb-0'>Critical</p>
                    </div>
                    <div className='col-8 p-0'>
                        <p className='text-white mb-0'>SYN Flood</p>
                        <div className='d-flex justify-content-between align-items-center p-0'>
                            <p className='mb-0'>Src: <span className='text-white'>192.168.1.90</span></p>
                            <p className='mb-0'>Dst: <span className='text-white'>192.168.1.10</span></p>
                            <p className='mb-0 pps'>192.168.1.10</p>
                        </div>
                    </div>
                    <div className='col-1 p-0'>
                        <p className='mb-0'>12:30:05</p>
                    </div>

                </div>
            </div>
        </div>
  
  
  
  </>
}
