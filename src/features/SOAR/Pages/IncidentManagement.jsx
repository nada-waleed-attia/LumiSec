import React from 'react'
import Summary from '../Components/Summary/Summary'
import "./IncidentManagement.css"
import InvesigaionTimeline from '../Components/InvesigaionTimeline/InvesigaionTimeline'
import Actions from '../Components/Actions/Actions'
import { Menu, Undo2 } from 'lucide-react'
import { Link, useOutletContext } from 'react-router-dom'
import profile from "../../../assets/prrofile.png"
import returnImg from "../../../assets/Return.png"
import logo from "../../../assets/LumiSecLogoB 1@3x.png"




export default function IncidentManagement() {

  const { collapsed, setCollapsed } = useOutletContext();



  return<>
  
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

        <div className='d-flex align-items-center w-100'>
                <h5 className="logo me-3 mb-0">[High] Malware Detection on SRV-01</h5>
                <p className='Incident rounded-4 p-2 mb-0'>Incident #1024</p>
        </div>


    </div>


      <div className='d-flex align-items-center'>
        <button className='Incidents-Queue-btn rounded-3 text-white py-0 border-0 d-flex align-items-center me-3'>
            <img src={returnImg} className='pe-1' alt="Incidents Queue" />
              Incidents Queue
          </button>


        <select name="" id="" className='form-select select-date text-white w-25 border-0 me-4'>
            <option value="">In Progress</option>
        </select>

        <select name="" id="" className='form-select select-date text-white w-25 border-0 me-4'>
            <option value="">Assign to...</option>
        </select>


        <button className="Close-Incident-btn text-white border-0 rounded-3 py-2 d-flex align-items-center">
        <i class="fa-regular fa-circle-xmark text-danger fs-5 me-1"></i>
          Close Incident
        </button>


    </div>

        <div className='right-section me-3'>

            <figure className='profile-figure mb-0'>

                <img src={profile} alt="profile" />

            </figure>

        </div>

  </header>

  <div className='row'>

    <div className="col-3 summary pt-5">
        <Summary />
    </div>

    <div className="col-6 px-5 mt-5">
        <InvesigaionTimeline />
    </div>

    <div className='col-3 actions pt-5'>
        <Actions />
    </div>


  </div>
  
  
  </>
}
