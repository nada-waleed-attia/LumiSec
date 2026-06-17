import React from 'react'
import "./MisconfigurationsTabel.css"

export default function MisconfigurationsTabel() {
  return <>
  
  <div className="table-responsive-wrapper">

        <table className="w-100 discover-tabel">
            <thead>
            <tr>
                <th>Asset</th>
                <th>Type</th>
                <th>Severity</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>

            <tbody>

                
            <tr>
                <td className='px-2'>
                    <p className='mb-2 text-white fw-medium assets'>SRV-DB-01</p>
                    <p className='mb-2 text-secondary assets-desc'>192.168.1.45</p>
                </td>
                <td>
                    <p className='mb-2 text-white type'>SMB Signing Disabled</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content'>Critical</p>
                </td>
                <td>
                    <p className='mb-2 description'>SMB signing is disabled, allowing man-in-the-middle attacks on file sharing</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content'>Open</p>
                </td>
                <td>
                    <button className='btn mb-2 fix rounded-3 text-white'><i class="fa-solid fa-wrench text-white me-1"></i>Fix</button>
                </td>
            </tr>



            <tr>
                <td className='px-2'>
                    <p className='mb-2 text-white fw-medium assets'>WEB-SRV-01</p>
                    <p className='mb-2 text-secondary assets-desc'>192.168.1.25</p>
                </td>
                <td>
                    <p className='mb-2 text-white type'>Telnet Enabled</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content high-sevarity'>High</p>
                </td>
                <td>
                    <p className='mb-2 description'>Telnet service is enabled and unencrypted, exposing credentials to interception</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content'>Open</p>
                </td>
                <td>
                    <button className='btn mb-2 fix rounded-3 text-white'><i class="fa-solid fa-wrench text-white me-1"></i>Fix</button>
                </td>
            </tr>





            <tr>
                <td className='px-2'>
                    <p className='mb-2 text-white fw-medium assets'>FTP-SRV-01</p>
                    <p className='mb-2 text-secondary assets-desc'>192.168.1.35</p>
                </td>
                <td>
                    <p className='mb-2 text-white type'>Weak Credentials</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content'>Critical</p>
                </td>
                <td>
                    <p className='mb-2 description'>Weak passwords on anonymous FTP account allowing unauthorized access</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content'>Open</p>
                </td>
                <td>
                    <button className='btn mb-2 fix rounded-3 text-white'><i class="fa-solid fa-wrench text-white me-1"></i>Fix</button>
                </td>
            </tr>



            <tr>
                <td className='px-2'>
                    <p className='mb-2 text-white fw-medium assets'>CAM-SURVEILLANCE</p>
                    <p className='mb-2 text-secondary assets-desc'>192.168.1.70</p>
                </td>
                <td>
                    <p className='mb-2 text-white type'>Default Passwords</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content'>Critical</p>
                </td>
                <td>
                    <p className='mb-2 description'>Factory default passwords have not been changed on surveillance cameras</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content'>Open</p>
                </td>
                <td>
                    <button className='btn mb-2 fix rounded-3 text-white'><i class="fa-solid fa-wrench text-white me-1"></i>Fix</button>
                </td>
            </tr>





            <tr>
                <td className='px-2'>
                    <p className='mb-2 text-white fw-medium assets'>MAIL-SRV-01</p>
                    <p className='mb-2 text-secondary assets-desc'>192.168.1.30</p>
                </td>
                <td>
                    <p className='mb-2 text-white type'>Unencrypted Services</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content high-sevarity'>High</p>
                </td>
                <td>
                    <p className='mb-2 description'>POP3 service running without encryption, exposing email credentials</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content'>Open</p>
                </td>
                <td>
                    <button className='btn mb-2 fix rounded-3 text-white'><i class="fa-solid fa-wrench text-white me-1"></i>Fix</button>
                </td>
            </tr>





            <tr>
                <td className='px-2'>
                    <p className='mb-2 text-white fw-medium assets'>NAS-STORAGE-01</p>
                    <p className='mb-2 text-secondary assets-desc'>192.168.1.75</p>
                </td>
                <td>
                    <p className='mb-2 text-white type'>SMB Signing Disabled</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content medium-sevarity'>Medium</p>
                </td>
                <td>
                    <p className='mb-2 description'>SMB signing is disabled on storage shares</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content fixed'>Fixed</p>
                </td>
                <td className='text-center'>
                    <i class="fa-solid fa-circle-check fixed-icon fs-5"></i>
                </td>
            </tr>



            <tr>
                <td className='px-2'>
                    <p className='mb-2 text-white fw-medium assets'>DEV-WS-01</p>
                    <p className='mb-2 text-secondary assets-desc'>192.168.1.50</p>
                </td>
                <td>
                    <p className='mb-2 text-white type'>Outdated TLS</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content medium-sevarity'>Medium</p>
                </td>
                <td>
                    <p className='mb-2 description'>TLS 1.0 is still enabled on development workstation</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content fixed'>Fixed</p>
                </td>
                <td className='text-center'>
                    <i class="fa-solid fa-circle-check fixed-icon fs-5"></i>
                </td>
            </tr>





            <tr>
                <td className='px-2'>
                    <p className='mb-2 text-white fw-medium assets'>VPN-GATEWAY</p>
                    <p className='mb-2 text-secondary assets-desc'>192.168.2.1</p>
                </td>
                <td>
                    <p className='mb-2 text-white type'>Weak IKE Phase 1</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content high-sevarity'>High</p>
                </td>
                <td>
                    <p className='mb-2 description'>IKE Phase 1 using weak Diffie-Hellman group 2 (1024-bit)</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content'>Open</p>
                </td>
                <td>
                    <button className='btn mb-2 fix rounded-3 text-white'><i class="fa-solid fa-wrench text-white me-1"></i>Fix</button>
                </td>
            </tr>





            <tr>
                <td className='px-2'>
                    <p className='mb-2 text-white fw-medium assets'>IOT-TEMP-01</p>
                    <p className='mb-2 text-secondary assets-desc'>192.168.1.120</p>
                </td>
                <td>
                    <p className='mb-2 text-white type'>No Authentication</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content'>Critical</p>
                </td>
                <td>
                    <p className='mb-2 description'>IoT temperature sensor has no authentication enabled</p>
                </td>
                <td>
                    <p className='mb-2 critical rounded-5 w-fit-content'>Open</p>
                </td>
                <td>
                    <button className='btn mb-2 fix rounded-3 text-white'><i class="fa-solid fa-wrench text-white me-1"></i>Fix</button>
                </td>
            </tr>





            </tbody>
        </table>

        </div>
  
  
  
  </>
}
