import React from 'react'
import waveIcon from "../../../../assets/Vector (1).png"

export default function LivePacketStream() {
  return<>
    <div className='d-flex align-items-center mb-3'>
        <figure className='mb-0 me-2'>
            <img src={waveIcon} className='w-100' alt="codeIcon" />
        </figure>
        <h6 className='text-white mb-0'>Capture Controls</h6>
    </div>
  <div className='bg-black h-100'>
    <div className='p-3'>
            <p className='text-white'>0001 06:37:27.845 TCP 192.168.1.10:54321 → 10.0.0.5:443 Len:1460 Flags [.], seq 1:1461, ack 1, win 65535</p>
            <p className='text-white'>0002 06:37:28.245 DNS 192.168.1.50:53 → 8.8.8.8:53 Len:64 Standard query A example.com</p>
            <p className='text-white'>0002 06:37:28.245 DNS 192.168.1.50:53 → 8.8.8.8:53 Len:64 Standard query A example.com</p>
    </div>
  </div>
  
  
  
  
  </>
}
