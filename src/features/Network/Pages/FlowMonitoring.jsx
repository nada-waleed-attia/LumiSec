import React from 'react'
import analysisIcon from "../../../assets/Overlay (6).png"
import arrowIcon from "../../../assets/Overlay (7).png"
import redDangerTriangle from "../../../assets/SVG (14).png"
import orangeDangerTriangle from "../../../assets/Overlay (8).png"
import DashboardCard4 from '../Components/DashboardCard4/DashboardCard4'
import TrafficFlowChart from '../Components/TraficFlowChart/TraficFlowChart'
import "./FlowMonitoring.css"
import AnomalyAlerts from '../Components/AnomalyAlerts/AnomalyAlerts'
import ExfiltrationIndicators from '../Components/ExfiltrationIndicators/ExfiltrationIndicators'

export default function FlowMonitoring() {
  return <>
  
  <div className="row g-3 mb-4">
  
  
        <DashboardCard4
            title={"Current PPS"}
            icon={analysisIcon}
            Statistics={"2,423"}
            text2={"Packets per second"}
        />


        <DashboardCard4
            title={"Avg PPS"}
            icon={arrowIcon}
            Statistics={"3,553"}
            text2={"Average packets/sec"}
        />



        <DashboardCard4
            title={"Peak PPS"}
            icon={orangeDangerTriangle}
            Statistics={"10,019"}
            text2={"Peak packets/sec"}
        />



        <DashboardCard4
                    title={"Flood Events"}
                    icon={redDangerTriangle}
                    Statistics={"5"}
                    text2={"Detected floods"}
        />
    </div>


    <div className='dashboard-card mb-3'>
        <div className='d-flex align-items-center mb-3'>
            <figure className='mb-0 me-2'>
                <img src={analysisIcon} className='w-100' alt="assetsInventoryIcon" />
            </figure>
            <h6 className='text-white mb-0'>Traffic Flow - Baseline vs Current + 3σ Threshold</h6>
        </div>
        <TrafficFlowChart />
    </div>


    
    <div className='row justify-content-between'>
        <div className='col-6'>
            <AnomalyAlerts />
        </div>

        <div className='col-6'>
            <ExfiltrationIndicators />
        </div>

    </div>





    

  
  
  
  </>
}
