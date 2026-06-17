import React from 'react'
import "./HostTabel.css"

export default function HostsTabel() {
  return <>
  
<div className="table-responsive-wrapper">

  <table className="w-100 discover-tabel">
    <thead>
      <tr>
        <th>IP Address</th>
        <th>MAC Address</th>
        <th>Hostname</th>
        <th>Status</th>
        <th>OS</th>
        <th>Last Seen</th>
        <th>Vendor</th>
      </tr>
    </thead>

    <tbody>

        
    <tr>
        <td className='ip-address fw-medium'>192.168.1.1</td>
        <td className='mac-address'>00:1A:2B:3C:4D:5E</td>
        <td className='text-white'>Gateway-Router</td>
        <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
        <td className='cisco'>Cisco IOS 15.2</td>
        <td className='last-seen'>Now</td>
        <td className='vendor'>Cisco Systems</td>
    </tr>

    <tr>
        <td className='ip-address fw-medium'>192.168.1.10</td>
        <td className='mac-address'>AA:BB:CC:DD:EE:01</td>
        <td className='text-white'>DC-SERVER-01</td>
        <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
        <td className='cisco'>Windows Server 2022</td>
        <td className='last-seen'>Now</td>
        <td className='vendor'>Dell Inc.</td>
    </tr>


    <tr>
        <td className='ip-address fw-medium'>192.168.1.20</td>
        <td className='mac-address'>AA:BB:CC:DD:EE:02</td>
        <td className='text-white'>DB-SERVER-01</td>
        <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
        <td className='cisco'>Ubuntu 22.04 LTS</td>
        <td className='last-seen'>Now</td>
        <td className='vendor'>HP Inc.</td>
    </tr>


    <tr>
        <td className='ip-address fw-medium'>192.168.1.25</td>
        <td className='mac-address'>AA:BB:CC:DD:EE:03</td>
        <td className='text-white'>WEB-SRV-01</td>
        <td className='py-3'><p className='status rounded-5 mb-0 ps-4'>Online</p></td>
        <td className='cisco'>CentOS 8</td>
        <td className='last-seen'>Now</td>
        <td className='vendor'>Lenovo</td>
    </tr>


    </tbody>
  </table>

</div>
  
  </>
}
