import React from 'react'
import { useOutletContext } from 'react-router-dom';
import CaptureControl from '../Components/CaptureControl/CaptureControl';
import DashboardCard2 from '../Components/DashboardCard2/DashboardCard2';
import LivePacketStream from '../Components/LivePacketStream/LivePacketStream';
import DashboardPieChart from '../../SOAR/Components/DashboardPieChart/DashboardPieChart';

export default function PacketCapture() {

    const { title, setTitle } = useOutletContext();

    setTitle("Packet Capture")

  return<>
  
    <CaptureControl />

    <div className='row align-items-center justify-content-around'>

        <DashboardCard2
            text={"Total Packets"}
            Statistics={"11,539"}
        />

        <DashboardCard2
                    text={"Protocols"}
                    Statistics={"9"}
                />


        <DashboardCard2
                    text={"Avg PPS"}
                    Statistics={"1,247"}
                />


        <DashboardCard2
            text={"Suspicious Packets"}
            Statistics={"23"}
        />



    </div>


    <div className='row g-3 justify-content-between align-items-stretch mb-4 mb-lg-5 p-3'>

        <div className='col-12 col-lg-8 ps-0'>
            <div className='dashboard-card h-100 p-3 rounded-4 overflow-hidden'>
                <LivePacketStream />
            </div>
        </div>

        <div className='col-12 col-lg-4'>
            <div className='dashboard-card h-100 d-flex justify-content-center align-items-center p-3 rounded-4'>
                <DashboardPieChart />
            </div>
        </div>

    </div>
  
  
  </>
}

