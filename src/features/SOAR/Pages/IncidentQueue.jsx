import React from "react";
import IncidentTable from "../Components/IncidentTable/IncidentTable";
import PlaybookCard from "../Components/PlaybookCard/PlaybookCard";
import ThreatFeedCard from "../Components/ThreatFeedCard/ThreatFeedCard";
import RiskCard from "../Components/RiskCard/RiskCard";
import "./IncidentsQueue.css";
import useIncidentsQueue from "../Hooks/useIncidentsQueue";
import StatsCard from "../Components/StatsCard/StatsCard";
import { DollarSign, Menu, Server, Timer } from "lucide-react";
import profile from "../../../assets/prrofile.png"
import logo from "../../../assets/LumiSecLogoB 1@3x.png"


import { Link, useOutletContext } from "react-router-dom";

export default function IncidentQueue() {

  const {stats, findings, loading, error,} = useIncidentsQueue()

  const { collapsed, setCollapsed } = useOutletContext();


  return (
    <div>

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

            <div className='mb-1'>
                  <h3 className="logo m-0">[High] Malware Detection on SRV-01</h3>
            </div>


      </div>

          {/* RIGHT */}
          <div className='right-section me-3'>
            <div className="vertical-line position-relative"></div>
            <div className='user-info d-none d-md-block'>
              <p className='text-white mb-0 fw-medium'>Mohamed Atef</p>
              <p className='header-role mb-0 text-white'>Lead Security Analyst (Tier III)</p>

            </div>

              <figure className='profile-figure mb-0'>

                  <img src={profile} alt="profile" />

              </figure>

          </div>

      </header>


      <div className="dashboard-container p-3">

      <div className="row g-3">

        <div className="col-lg-9">

          <div className="row g-3">
            

              <StatsCard
              title={"Active Threats"}
              statistics = {"1,402"}
              desc={"+14% Intensity Flux"}
              />
              <StatsCard
              title={"Critical Nodes"}
              icon ={<Server  size ={22} style={{color: "#C9D1D9"}} />}
              statistics = {"05"}
              desc={"High Value Assets at Risk"}
              />
              <StatsCard
              title={"Avg. MTTR"}
              icon={<Timer size ={22} style={{color: "#C9D1D9"}} />}
              statistics = {"42m"}
              desc={"↓ 5m Improvement"}
              />
              <StatsCard
              title={"Automation ROI"}
              icon={<DollarSign size ={22} style={{color: "#C9D1D9"}} />}
              statistics = {"$12.4k"}
              desc={"Estimated Resource Savings"}
              />
          </div>

          <div className="mt-3">
            <IncidentTable />
          </div>

        </div>

        <div className="col-lg-3">

          <div className="d-flex flex-column gap-3">
            <PlaybookCard />
            <ThreatFeedCard />
            <RiskCard />
          </div>

        </div>

      </div>

      </div>

    </div>
  );
}