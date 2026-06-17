import React from 'react'
import { useOutletContext } from 'react-router-dom';
import diagonalIcon from "../../../assets/◈.png"
import squareIcon from "../../../assets/▣.png"
import ScanConfiguration from '../Components/ScanConfiguration/ScanConfiguration';
import "./NetworkDiscovery.css"
import SubnetOverview from '../Components/SubnetOverview/SubnetOverview';
import HostsTabel from '../Components/HostsTabel/HostsTabel';


export default function NetworkDiscovery() {

    const { title, setTitle } = useOutletContext();

    setTitle("Network Discovery")

  return <>

  <ScanConfiguration />

  <div className='dashboard-card mb-3'>
        <div className='d-flex align-items-center mb-3'>
            <figure className='mb-0 mt-2 me-2'>
                <img src={diagonalIcon} className='w-100' alt="diagonalIcon" />
            </figure>
            <h6 className='text-white mb-0'>Subnet Overview</h6>
        </div>

    <div className='row justify-content-between align-items-center px-3'>
        <SubnetOverview
        title={"192.168.1.0/24"}
        status={"13/15 active"}
        text={"Address Range: 1-254"}
        />
        <SubnetOverview
        title={"10.0.0.0/24"}
        status={"6/8 active"}
        text={"Address Range: 1-254"}
        />
        <SubnetOverview
        title={"172.16.0.0/24"}
        status={"4/5 active"}
        text={"Address Range: 1-254"}
        />
    </div>

  </div>



  <div className='dashboard-card mb-3'>
        <div className='d-flex justify-content-between align-items-center mb-3'>
            <div className='d-flex align-items-center mb-3'>
                <figure className='mb-1 me-2'>
                    <img src={squareIcon} className='w-100' alt="squareIcon" />
                </figure>
                <h6 className='text-white mb-0'>Discovered Hosts (15)</h6>
            </div>


            <div className='search-container'>

                <i className="fa-brands fa-sistrix discover-search-icon"></i>

                <input
                    type="text"
                    className='form-control header-search-input rounded-3'
                    placeholder='Search...'
                />

            </div>

        </div>

        <HostsTabel />

  </div>
  
  </>
}
