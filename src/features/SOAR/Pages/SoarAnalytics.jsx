import React, { useState } from 'react'
import DashboardCard from '../Components/DashboardCard/DashboardCard'
import { ArrowDown, ArrowUp, CircleCheck, Clock, Hourglass, Menu, OctagonAlert } from 'lucide-react'
import DashboardBarChart from '../Components/DashboardBarChart/DashboardBarChart'
import DashboardPieChart from '../Components/DashboardPieChart/DashboardPieChart'
import AnalystPerformance from '../Components/AnalystPerformance/AnalystPerformance'
import AutomatedPlayBook from '../Components/AutomatedPlayBook/AutomatedPlayBook'
import profile from "../../../assets/prrofile.png"
import { Link, useOutletContext } from 'react-router-dom'
import logo from "../../../assets/LumiSecLogoB 1@3x.png"




export default function SoarAnalytics () {

    const { collapsed, setCollapsed } = useOutletContext();




  return <>


    <header className='topbar'>

    <div className='left-section col-5'>

        {/* Mobile open sidebar */}
        <button
            className='btn text-white border-0 p-0 d-lg-none'
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
        >
            <Menu size={28} />
        </button>

        {/* Desktop collapse */}
        <button
            className='btn text-white border-0 p-0 d-none d-lg-block'
            onClick={() => setCollapsed(!collapsed)}
        >
            <Menu size={28} />
        </button>

            <figure className='w-8 mb-0 py-5'>
                <Link to={"/soar"} className='w-25'>
                    <img src={logo} className='w-100' alt="logo" />
                </Link>
            </figure>

        <div className='mt-3'>
                <h2 className="logo m-0">Analytics & Reporting</h2>
            <p className='text-white'>Historical analysis and performance metrics</p>
        </div>


    </div>

        <div className='search-container ms-auto me-0'>

        <i class="fa-solid calender-icon position-relative fs-4 fa-calendar-days text-white "></i>

            <select name="" id="" className='form-select select-date ps-5 text-white w-50 border-0 me-4'>
                <option value="">Last 30 Days</option>
            </select>

            <div>
            <button className="export-btn btn add-btn text-white border-0 ps-2">
            <i class="fa-solid fa-download pe-2"></i>
            Export Report
            </button>
            </div>


        </div>

        {/* RIGHT */}
        <div className='right-section me-3'>


            <figure className='profile-figure mb-0'>

                <img src={profile} alt="profile" />

            </figure>

        </div>

    </header>
    
    <div className='row gy-3 align-items-center mb-5 p-3'>
        <DashboardCard
            icon={<Clock />}
            title={"Mean Time To Respond"}
            Statistics={"2h 15m"}
            arrow={<ArrowDown  size={20} color='red'/>}
            arrowDirection={"down"}
            text1={"-8%"}
            desc1={"vs last period"}
            text2= {"Average response time"} 
        />

        <DashboardCard
            icon={<Hourglass />}
            title={"Mean Time To Resolve"}
            Statistics={"8h 30m"}
            arrow={<ArrowDown  size={20} color='red'/>}
            arrowDirection={"down"}
            text1={"-12%"}
            desc1={"vs last period"}
            text2= {"Average response time"} 
        />

        <DashboardCard
            icon={<i class="fa-solid fa-circle-check fs-5" style={{color: "purple" }}></i>}
            title={"Total Incidents Resolved"}
            Statistics={"1,450"}
            arrow={<ArrowUp  size={20} color='green'/>}
            arrowDirection={"up"}
            text1={"+13%"}
            desc1={"vs last period"}
            text2= {"Successfully closed"} 
        />

        <DashboardCard
            icon={<OctagonAlert color='#f6cc3b'/>}
            title={"False Positive Rate"}
            Statistics={"22%"}
            arrow={<ArrowDown  size={20} color='red'/>}
            arrowDirection={"down"}
            text1={"-8%"}
            desc1={"vs last period"}
            text2= {"Accuracy improvement"} 
        />

        <DashboardCard
            icon={<div class="fa-solid fa-gears"></div>}
            title={"Automation ROI"}
            Statistics={"420h"}
            arrow={<ArrowUp  size={20} color='green'/>}
            arrowDirection={"up"}
            text1={"+28%"}
            desc1={"vs last period"}
            text2= {"Hours saved"} 
        />

    </div>

    <div className='row g-3 justify-content-between align-items-stretch mb-4 mb-lg-5 p-3'>

        <div className='col-12 col-lg-6'>
            <div className='dashboard-card h-100 p-3 rounded-4'>
                <DashboardBarChart />
            </div>
        </div>

        <div className='col-12 col-lg-6'>
            <div className='dashboard-card h-100 d-flex justify-content-center align-items-center p-3 rounded-4'>
                <DashboardPieChart />
            </div>
        </div>

    </div>

    <div className='row g-3 justify-content-between align-items-stretch mb-4 mb-lg-5 px-lg-3 p-3'>
        <div className='col-12 col-lg-6 row g-3 align-items-stretch'>
            <AnalystPerformance />
        </div>

        <div className='col-12 col-lg-6 row g-3 align-items-stretch'>
            <AutomatedPlayBook />
        </div>

    </div>

  </>

}
