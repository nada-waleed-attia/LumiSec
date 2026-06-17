import React from 'react'
import globalIcon from "../../../../assets/Overlay (1).png"
import sunIcon from "../../../../assets/SVG (4).png"
import serverIcon from "../../../../assets/Overlay (2).png"
import screenIcon from"../../../../assets/Overlay (3).png"
import printerIcon from"../../../../assets/Overlay (4).png"
import wifiIcon from"../../../../assets/Overlay (5).png"
import windowIcon from"../../../../assets/SVG (5).png"
import emulatorIcon from"../../../../assets/SVG (9).png"
import timeIcon from"../../../../assets/SVG (8).png"
import layrsIcon from"../../../../assets/SVG (7).png"
import UbuntuIcon from"../../../../assets/SVG (10).png"
import CentOSIcon from"../../../../assets/SVG (11).png"




import "./AssetsTabel.css"

export default function AssetsTabel() {
  return <>
  
  <div className="table-responsive-wrapper">

    <table className="w-100 discover-tabel">
        <thead>
        <tr>
        <th className='text-center'><input type="checkbox" className='assets-select' /></th>
            <th>IP Address</th>
            <th>Hostname</th>
            <th>Operating System</th>
            <th>Status</th>
            <th>Risk Score</th>
            <th>Category</th>
            <th>Actions</th>
        </tr>
        </thead>

        <tbody>

            
        <tr>
            <td className='text-center'><input type="checkbox" className='assets-select' /></td>
            <td className='ip-address fw-medium'>
                <div className='d-flex align-items'>
                    <figure className='me-3'>
                        <img src={globalIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='fw-normal mb-0 text-white ps-1'>192.168.1.1</p>
                </div>
            </td>
            <td className='mac-address text-white'>Gateway-Router</td>
            <td className='text-white'>
                <div className='d-flex justify-content-center align-items-center operating-system rounded-3 px-3 w-fit-content'>
                    <figure className='mb-1'>
                        <img src={sunIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='m-0 ps-1'>Cisco IOS 15.2</p>
                </div>
            </td>
            <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
            <td className='cisco'><p className='risk-score rounded-3 w-fit-content mb-0'>15 Low</p></td>
            <td className='last-seen'><p className='network rounded-3 w-fit-content mb-0'>Networks</p></td>
            <td className='vendor'>
                <button className='btn'><i class="fa-solid text-secondary fa-eye"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-pen-to-square"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-trash"></i></button>
            </td>
        </tr>




        <tr>
            <td className='text-center'><input type="checkbox" className='assets-select' /></td>
            <td className='ip-address fw-medium'>
                <div className='d-flex align-items'>
                    <figure className='me-3'>
                        <img src={serverIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='fw-normal mb-0 text-white ps-1'>192.168.1.10</p>
                </div>
            </td>
            <td className='mac-address text-white'>DC-SERVER-01</td>
            <td className='text-white'>
                <div className='d-flex justify-content-center align-items-center operating-system rounded-3 px-3 w-fit-content'>
                    <figure className='mb-1'>
                        <img src={windowIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='m-0 ps-1'>Windows Server 2022</p>
                </div>
            </td>
            <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
            <td className='cisco'><p className='risk-score rounded-3 w-fit-content mb-0 medium'>45 Medium</p></td>
            <td className='last-seen'><p className='network rounded-3 w-fit-content mb-0 server'>Servers</p></td>
            <td className='vendor'>
                <button className='btn'><i class="fa-solid text-secondary fa-eye"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-pen-to-square"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-trash"></i></button>
            </td>
        </tr>



        <tr>
            <td className='text-center'><input type="checkbox" className='assets-select' /></td>
            <td className='ip-address fw-medium'>
                <div className='d-flex align-items'>
                    <figure className='me-3'>
                        <img src={serverIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='fw-normal mb-0 text-white ps-1'>192.168.1.20</p>
                </div>
            </td>
            <td className='mac-address text-white'>DB-SERVER-01</td>
            <td className='text-white'>
                <div className='d-flex justify-content-center align-items-center operating-system rounded-3 px-3 w-fit-content'>
                    <figure className='mb-1'>
                        <img src={UbuntuIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='m-0 ps-1'>Ubuntu 22.04 LTS</p>
                </div>
            </td>
            <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
            <td className='cisco'><p className='risk-score rounded-3 w-fit-content mb-0 critical'>72 High</p></td>
            <td className='last-seen'><p className='network rounded-3 w-fit-content mb-0 server'>Servers</p></td>
            <td className='vendor'>
                <button className='btn'><i class="fa-solid text-secondary fa-eye"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-pen-to-square"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-trash"></i></button>
            </td>
        </tr>



        <tr>
            <td className='text-center'><input type="checkbox" className='assets-select' /></td>
            <td className='ip-address fw-medium'>
                <div className='d-flex align-items'>
                    <figure className='me-3'>
                        <img src={serverIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='fw-normal mb-0 text-white ps-1'>192.168.1.25</p>
                </div>
            </td>
            <td className='mac-address text-white'>WEB-SRV-01</td>
            <td className='text-white'>
                <div className='d-flex justify-content-center align-items-center operating-system rounded-3 px-3 w-fit-content'>
                    <figure className='mb-1'>
                        <img src={CentOSIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='m-0 ps-1'>WEB-SRV-01</p>
                </div>
            </td>
            <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
            <td className='cisco'><p className='risk-score rounded-3 w-fit-content mb-0 medium'>58 Medium</p></td>
            <td className='last-seen'><p className='network rounded-3 w-fit-content mb-0 server'>Servers</p></td>
            <td className='vendor'>
                <button className='btn'><i class="fa-solid text-secondary fa-eye"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-pen-to-square"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-trash"></i></button>
            </td>
        </tr>



        <tr>
            <td className='text-center'><input type="checkbox" className='assets-select' /></td>
            <td className='ip-address fw-medium'>
                <div className='d-flex align-items'>
                    <figure className='me-3'>
                        <img src={serverIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='fw-normal mb-0 text-white ps-1'>192.168.1.30</p>
                </div>
            </td>
            <td className='mac-address text-white'>MAIL-SRV-01</td>
            <td className='text-white'>
                <div className='d-flex justify-content-center align-items-center operating-system rounded-3 px-3 w-fit-content'>
                    <figure className='mb-1'>
                        <img src={windowIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='m-0 ps-1'>Windows Server 2019</p>
                </div>
            </td>
            <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
            <td className='cisco'><p className='risk-score rounded-3 w-fit-content mb-0 critical'>65 High</p></td>
            <td className='last-seen'><p className='network rounded-3 w-fit-content mb-0 server'>Servers</p></td>
            <td className='vendor'>
                <button className='btn'><i class="fa-solid text-secondary fa-eye"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-pen-to-square"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-trash"></i></button>
            </td>
        </tr>



        
        <tr>
            <td className='text-center'><input type="checkbox" className='assets-select' /></td>
            <td className='ip-address fw-medium'>
                <div className='d-flex align-items'>
                    <figure className='me-3'>
                        <img src={serverIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='fw-normal mb-0 text-white ps-1'>192.168.1.45</p>
                </div>
            </td>
            <td className='mac-address text-white'>SRV-DB-01</td>
            <td className='text-white'>
                <div className='d-flex justify-content-center align-items-center operating-system rounded-3 px-3 w-fit-content'>
                    <figure className='mb-1'>
                        <img src={layrsIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='m-0 ps-1'>Red Hat Enterprise 8</p>
                </div>
            </td>
            <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
            <td className='cisco'><p className='risk-score rounded-3 w-fit-content mb-0 critical'>92 Critical</p></td>
            <td className='last-seen'><p className='network rounded-3 w-fit-content mb-0 server'>Servers</p></td>
            <td className='vendor'>
                <button className='btn'><i class="fa-solid text-secondary fa-eye"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-pen-to-square"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-trash"></i></button>
            </td>
        </tr>




        <tr>
            <td className='text-center'><input type="checkbox" className='assets-select' /></td>
            <td className='ip-address fw-medium'>
                <div className='d-flex align-items'>
                    <figure className='me-3'>
                        <img src={screenIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='fw-normal mb-0 text-white ps-1'>192.168.1.50</p>
                </div>
            </td>
            <td className='mac-address text-white'>DEV-WS-01</td>
            <td className='text-white'>
                <div className='d-flex justify-content-center align-items-center operating-system rounded-3 px-3 w-fit-content'>
                    <figure className='mb-1'>
                        <img src={layrsIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='m-0 ps-1'>macOS Ventura</p>
                </div>
            </td>
            <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
            <td className='cisco'><p className='risk-score rounded-3 w-fit-content mb-0'>22 Low</p></td>
            <td className='last-seen'><p className='network rounded-3 w-fit-content mb-0 workstation'>Workstations</p></td>
            <td className='vendor'>
                <button className='btn'><i class="fa-solid text-secondary fa-eye"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-pen-to-square"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-trash"></i></button>
            </td>
        </tr>




        <tr>
            <td className='text-center'><input type="checkbox" className='assets-select' /></td>
            <td className='ip-address fw-medium'>
                <div className='d-flex align-items'>
                    <figure className='me-3'>
                        <img src={screenIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='fw-normal mb-0 text-white ps-1'>192.168.1.55</p>
                </div>
            </td>
            <td className='mac-address text-white'>DEV-WS-02</td>
            <td className='text-white'>
                <div className='d-flex justify-content-center align-items-center operating-system rounded-3 px-3 w-fit-content'>
                    <figure className='mb-1'>
                        <img src={timeIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='m-0 ps-1'>Windows 11 Pro</p>
                </div>
            </td>
            <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
            <td className='cisco'><p className='risk-score rounded-3 w-fit-content mb-0'>35 Low</p></td>
            <td className='last-seen'><p className='network rounded-3 w-fit-content mb-0 workstation'>Workstations</p></td>
            <td className='vendor'>
                <button className='btn'><i class="fa-solid text-secondary fa-eye"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-pen-to-square"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-trash"></i></button>
            </td>
        </tr>




        <tr>
            <td className='text-center'><input type="checkbox" className='assets-select' /></td>
            <td className='ip-address fw-medium'>
                <div className='d-flex align-items'>
                    <figure className='me-3'>
                        <img src={printerIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='fw-normal mb-0 text-white ps-1'>192.168.1.60</p>
                </div>
            </td>
            <td className='mac-address text-white'>PRINTER-01</td>
            <td className='text-white'>
                <div className='d-flex justify-content-center align-items-center operating-system rounded-3 px-3 w-fit-content'>
                    <figure className='mb-1'>
                        <img src={windowIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='m-0 ps-1'>Embedded Linux</p>
                </div>
            </td>
            <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
            <td className='cisco'><p className='risk-score rounded-3 w-fit-content mb-0'>28 Low</p></td>
            <td className='last-seen'><p className='network rounded-3 w-fit-content mb-0 Peripherals'>Peripherals</p></td>
            <td className='vendor'>
                <button className='btn'><i class="fa-solid text-secondary fa-eye"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-pen-to-square"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-trash"></i></button>
            </td>
        </tr>




        <tr>
            <td className='text-center'><input type="checkbox" className='assets-select' /></td>
            <td className='ip-address fw-medium'>
                <div className='d-flex align-items'>
                    <figure className='me-3'>
                        <img src={wifiIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='fw-normal mb-0 text-white ps-1'>192.168.1.70</p>
                </div>
            </td>
            <td className='mac-address text-white'>CAM-SURVEILLANCE</td>
            <td className='text-white'>
                <div className='d-flex justify-content-center align-items-center operating-system rounded-3 px-3 w-fit-content'>
                    <figure className='mb-1'>
                        <img src={emulatorIcon} className='w-100' alt="globalIcon" />
                    </figure>
                    <p className='m-0 ps-1'>Embedded Linux</p>
                </div>
            </td>
            <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
            <td className='cisco'><p className='risk-score rounded-3 w-fit-content mb-0 critical'>78 High</p></td>
            <td className='last-seen'><p className='network rounded-3 w-fit-content mb-0 iot'>Iot</p></td>
            <td className='vendor'>
                <button className='btn'><i class="fa-solid text-secondary fa-eye"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-pen-to-square"></i></button>
                <button className='btn'><i class="fa-solid text-secondary fa-trash"></i></button>
            </td>
        </tr>



        </tbody>
    </table>

</div>
  
  
  </>
}
