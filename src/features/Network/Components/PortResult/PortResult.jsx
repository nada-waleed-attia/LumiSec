import React from 'react'
import "./PortResult.css"

export default function PortResult() {
  return <>
  

  <div className="table-responsive-wrapper">

    <table className="w-100 port-tabel">
        <thead>
        <tr>
            <th>IP Address</th>
            <th>Port</th>
            <th>Protocol</th>
            <th>Service</th>
            <th>Status</th>
            <th>Banner/Version</th>
        </tr>
        </thead>

        <tbody>

            
        <tr>
            <td className='ip-address fw-medium'>192.168.1.20</td>
            <td className='mac-address text-white'>3432</td>
            <td className='protocol'>TCP</td>
            <td className='py-3'><p className='text-white mb-0'>rustdesk</p></td>
            <td><p className='status rounded-5 mb-0 ps-4'>Open</p></td>
            <td className='last-seen version'>rustdesk 1.5.2</td>
        </tr>


        <tr>
            <td className='ip-address fw-medium'>192.168.1.20</td>
            <td className='mac-address text-white'>3432</td>
            <td className='protocol'>TCP</td>
            <td className='py-3'><p className='text-white mb-0'>rustdesk</p></td>
            <td><p className='status rounded-5 mb-0 ps-4'>Open</p></td>
            <td className='last-seen version'>rustdesk 1.5.2</td>
        </tr>


        <tr>
            <td className='ip-address fw-medium'>192.168.1.25</td>
            <td className='mac-address text-white'>21</td>
            <td className='protocol'>TCP</td>
            <td className='py-3'><p className='text-white mb-0'>FTP</p></td>
            <td><p className='status rounded-5 mb-0 ps-4'>Open</p></td>
            <td className='last-seen version'>vsftpd 3.0.5</td>
        </tr>



        <tr>
            <td className='ip-address fw-medium'>192.168.1.25</td>
            <td className='mac-address text-white'>80</td>
            <td className='protocol'>TCP</td>
            <td className='py-3'><p className='text-white mb-0'>HTTP</p></td>
            <td><p className='status rounded-5 mb-0 ps-4'>Open</p></td>
            <td className='last-seen version'>nginx/1.24</td>
        </tr>



        <tr>
            <td className='ip-address fw-medium'>192.168.1.25</td>
            <td className='mac-address text-white'>8080</td>
            <td className='protocol'>TCP</td>
            <td className='py-3'><p className='text-white mb-0'>HTTP</p></td>
            <td><p className='status rounded-5 mb-0 ps-4'>Open</p></td>
            <td className='last-seen version'>Jetty 11.0</td>
        </tr>



        <tr>
            <td className='ip-address fw-medium'>192.168.1.30</td>
            <td className='mac-address text-white'>25</td>
            <td className='protocol'>TCP</td>
            <td className='py-3'><p className='text-white mb-0'>SMTP</p></td>
            <td><p className='status rounded-5 mb-0 ps-4'>Open</p></td>
            <td className='last-seen version'>Postfix</td>
        </tr>



        <tr>
            <td className='ip-address fw-medium'>192.168.1.30</td>
            <td className='mac-address text-white'>110</td>
            <td className='protocol'>TCP</td>
            <td className='py-3'><p className='text-white mb-0'>POP3</p></td>
            <td><p className='status filtered rounded-5 mb-0 ps-4'>Filtred</p></td>
            <td className='last-seen version'>-</td>
        </tr>


        <tr>
            <td className='ip-address fw-medium'>192.168.1.30</td>
            <td className='mac-address text-white'>143</td>
            <td className='protocol'>TCP</td>
            <td className='py-3'><p className='text-white mb-0'>IMAP</p></td>
            <td><p className='status rounded-5 mb-0 ps-4'>Open</p></td>
            <td className='last-seen version'>Dovecot</td>
        </tr>



        <tr>
            <td className='ip-address fw-medium'>192.168.1.45</td>
            <td className='mac-address text-white'>3389</td>
            <td className='protocol'>TCP</td>
            <td className='py-3'><p className='text-white mb-0'>RDP</p></td>
            <td><p className='status rounded-5 mb-0 ps-4'>Open</p></td>
            <td className='last-seen version'>Microsoft Terminal Services</td>
        </tr>



        <tr>
            <td className='ip-address fw-medium'>192.168.1.45</td>
            <td className='mac-address text-white'>445</td>
            <td className='protocol'>TCP</td>
            <td className='py-3'><p className='text-white mb-0'>SMB</p></td>
            <td><p className='status rounded-5 mb-0 ps-4'>Open</p></td>
            <td className='last-seen version'>Windows Server 2022</td>
        </tr>


        <tr>
            <td className='ip-address fw-medium'>192.168.1.50</td>
            <td className='mac-address text-white'>22</td>
            <td className='protocol'>TCP</td>
            <td className='py-3'><p className='text-white mb-0'>SSH</p></td>
            <td><p className='status rounded-5 mb-0 ps-4'>Open</p></td>
            <td className='last-seen version'>OpenSSH 9.0</td>
        </tr>


        </tbody>
    </table>

    </div>
  
  
  </>
}
