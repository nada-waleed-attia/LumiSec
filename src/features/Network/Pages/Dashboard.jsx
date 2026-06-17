import React from 'react'
import DashboardCard from '../Components/DashboardCard/DashboardCard'
import assetsIcon from "../../../assets/Background+Shadow.png"
import LocationIcon from "../../../assets/Background+Shadow (1).png"
import curveIcon from "../../../assets/Background+Shadow (2).png"
import riskIcon from "../../../assets/Background+Shadow (3).png"
import timeIcon from "../../../assets/Background+Shadow (4).png"
import curvesImages from "../../../assets/SVG (1).png"
import "./Dashboard.css"
import DashboardPieChart from '../../SOAR/Components/DashboardPieChart/DashboardPieChart'
import NetworkActivityChart from '../Components/NetworkActivityChart/NetworkActivityChart'
import TopAssets from '../Components/Top Assets/TopAssets'
import { useOutletContext } from 'react-router-dom'



export default function Dashboard() {

    const { title, setTitle } = useOutletContext();

    setTitle("Dashboard")

  return <>

    <div className='row align-items-center justify-content-around'>

        <DashboardCard 
            text={"Total Assets"}
            Statistics={"1,247"}
            icon={assetsIcon}
        />

        <DashboardCard 
            text={"Active Hosts"}
            Statistics={"892"}
            icon={LocationIcon}
        />


        <DashboardCard 
            text={"Open Ports"}
            Statistics={"15,634"}
            icon={curveIcon}
        />


        <DashboardCard 
            text={"Alerts"}
            Statistics={"23"}
            icon={riskIcon}
        />


        <DashboardCard 
            text={"Threats"}
            Statistics={"7"}
            icon={timeIcon}
        />

    </div>

        <div className='d-flex align-items-center my-3 ps-3'>
            <button className='btn start-btn border-0 rounded-3 text-black fw-medium me-3 ps-0 d-flex justify-content-between align-items-center'><i class="fa-solid fa-play mx-2"></i>Start Scan</button>
            <button className='btn export-reports-btn rounded-3 fw-medium me-3 ps-0 d-flex justify-content-between align-items-center'><i class="fa-solid fa-arrow-up-from-bracket mx-2"></i>Export Report</button>
            <button className='btn view-btn rounded-3 fw-medium ps-0 d-flex justify-content-between align-items-center'><i class="fa-regular fa-bell mx-2"></i>Start Scan</button>
        </div>


    <div className='row g-3 justify-content-between align-items-stretch mb-4 mb-lg-5 px-3 mt-0'>

        <div className='col-12 col-lg-6'>
            <div className='dashboard-card h-100 p-3 rounded-4'>
                <div className='d-flex align-items-center'>
                    <figure className='me-2'>
                        <img src={curvesImages} className='w-100' alt="curvesImages" />
                    </figure>
                    <h6 className='text-white'>Network Activity - Last 24 Hours</h6>
                </div>
                <NetworkActivityChart />
            </div>
        </div>

        <div className='col-12 col-lg-6'>
            <div className='dashboard-card h-100 p-3 rounded-4'>
            <div className='d-flex align-items-center mb-4'>
                <i class="fa-solid danger-icon fa-triangle-exclamation me-2 fs-5"></i>
                <h6 className='text-white mb-0'>Top Vulnerable Assets</h6>
            </div>
                <TopAssets 
                title={"SRV-DB-01"}
                number={"92"}
                text={"192.168.1.45"}
                />
                <TopAssets 
                title={"WEB-APP-03"}
                number={"85"}
                text={"10.0.0.12"}
                />
                <TopAssets 
                title={"DEV-WS-07"}
                number={"78"}
                text={"172.16.0.88"}
                />
                <TopAssets 
                title={"FTP-SRV-02"}
                number={"71"}
                text={"192.168.1.101"}
                />
            </div>
        </div>

    </div>

  
  
  
  </>
}
