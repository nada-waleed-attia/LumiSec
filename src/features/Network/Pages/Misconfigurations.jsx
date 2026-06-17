import React from 'react'
import StatsCard from '../../SOAR/Components/StatsCard/StatsCard'
import IncidentTable from '../../SOAR/Components/IncidentTable/IncidentTable'
import PlaybookCard from '../../SOAR/Components/PlaybookCard/PlaybookCard'
import ThreatFeedCard from '../../SOAR/Components/ThreatFeedCard/ThreatFeedCard'
import RiskCard from '../../SOAR/Components/RiskCard/RiskCard'
import DashboardCard3 from '../Components/DashboardCard3/DashboardCard3'
import AssetsTabel from '../Components/AssetsTabel/AssetsTabel'
import SettingsIcon from"../../../assets/SVG (12).png"
import barCahrtIcons from"../../../assets/SVG (13).png"
import MisconfigurationsTabel from '../Components/MisconfigurationsTabel/MisconfigurationsTabel'
import SeverityDistributionChart from '../Components/SeverityDistributionChart/SeverityDistributionChart'
import UrgentRecommendations from '../Components/UrgentRecommendations/UrgentRecommendations'



export default function Misconfigurations() {
  return <>
  


<div className="dashboard-container p-3 mb-3">

<div className="row g-3 mb-4">


        <DashboardCard3
            title={"Critical"}
            icon={<i class="fa-solid fa-triangle-exclamation text-danger"></i>}
            Statistics={"4"}
            text2={"Active issues"}
        />


        <DashboardCard3
            title={"High"}
            icon={<i class="fa-solid fa-triangle-exclamation text-danger"></i>}
            Statistics={"3"}
            text2={"Active issues"}
        />



        <DashboardCard3
            title={"Medium"}
            icon={<i class="fa-solid fa-circle-info text-warning"></i>}
            Statistics={"0"}
            text2={"Active issues"}
        />



        <DashboardCard3
                    title={"Fixed"}
                    icon={<i class="fa-solid fa-circle-check text-success"></i>}
                    Statistics={"2"}
                    text2={"Active issues"}
        />
    </div>

    <div className='row m-0'>
        <div className="col-9 mb-0 p-0">
            <div className='dashboard-card'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <figure className='mb-0 me-2'>
                            <img src={SettingsIcon} alt="assetsInventoryIcon" />
                        </figure>
                        <h6 className='text-white mb-0'>Active Misconfigurations <span>(9)</span></h6>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <button className='btn action-btns rounded-3 me-3'><i class="fa-solid text-secondary fa-arrow-rotate-right"></i></button>
                        <button className='btn action-btns rounded-3'><i class="fa-solid text-secondary fa-filter"></i></button>
                    </div>
                </div>
                    <MisconfigurationsTabel />
            </div>
        </div>

        <div className='col-3 mb-3'>
            <div className="d-flex flex-column gap-3 mb-3">
                <div className='dashboard-card'>
                    <div className='d-flex align-items-center mb-0'>
                        <figure className='mb-0 me-2'>
                            <img src={barCahrtIcons} className='w-100' alt="assetsInventoryIcon" />
                        </figure>
                        <h6 className='text-white mb-3'>Severity Distribution</h6>
                    </div>
                    <SeverityDistributionChart />
                </div>
            </div>

            <div className='col'>
            <div className="d-flex flex-column gap-3">
                <div className='dashboard-card'>
                    <div className='d-flex align-items-center mb-4'>
                        <i class="fa-solid fa-circle-info me-1" style={{color: "#F97316"}}></i>
                        <h6 className='text-white m-0'>Urgent Recommendations</h6>
                    </div>
                    <UrgentRecommendations />
                </div>
            </div>
        </div>





        </div>



        
    </div>

    </div>


  
  
  
  </>
}
