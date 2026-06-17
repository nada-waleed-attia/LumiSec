import React from 'react'
import { useOutletContext } from 'react-router-dom';
import PortConfiguration from '../Components/PortConfiguration/PortConfiguration';
import repeateIcon from  "../../../assets/⟳.png"
import semiFilledCircleIcon from  "../../../assets/◐.png"
import "./PortScanning.css"
import PortResult from '../Components/PortResult/PortResult';
import { Doughnut } from 'react-chartjs-2';
import ServiceDistribution from '../Components/DoughnutChart/ServiceDistribution';

export default function PortScanning() {

    const { title, setTitle } = useOutletContext();

    setTitle("Port Scanning")

  return <>
  
  <PortConfiguration />



    <div className='row g-3 justify-content-between align-items-stretch mb-4 mb-lg-5 px-2 mt-0'>
        <div className='col-8 dashboard-card me-2'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <div className='d-flex justify-content-between align-items-center mb-3 w-100'>
                    <div className='d-flex align-items-center'>
                        <figure className='mb-1 me-2'>
                            <img src={repeateIcon} className='w-100' alt="repeateIcon" />
                        </figure>
                        <h6 className='text-white mb-0'>Port Scan Results (20)</h6>
                    </div>
                    <p className='open rounded-5 mb-0'>18 Open</p>
                </div>


            </div>

            <PortResult />

        </div>

        <div className='col dashboard-card'>
            <div className='d-flex align-items-center'>
                <figure className='mb-1 me-2'>
                    <img src={semiFilledCircleIcon} className='w-100' alt="repeateIcon" />
                </figure>
                <h6 className='text-white mb-0'>Service Distribution</h6>
            </div>
            <ServiceDistribution />
        </div>

        
    </div>
  
  
  
  </>
}
