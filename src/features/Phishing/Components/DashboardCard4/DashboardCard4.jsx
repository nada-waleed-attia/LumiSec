import React from 'react'

import "./DashboardCard4.css"

export default function DashboardCard4({icon , title , Statistics  , text2 , text3 , text4 }) {

return<>
    
    <div className='col-12 col-sm-6 col-xl'>

        <div className='rounded-4 dashboard-card p-2 h-100'>

            <div className='d-flex justify-content-between align-items-center'>
                <p className='mb-0'>{title}</p>
                <figure>
                    <img className='w-100 mt-2' src={icon} alt="icon" />
                </figure>
            </div>

            <div className='overflow-hidden'>
                <h2 className='Statistics text-white mb-1'>
                    <span>{Statistics}</span>
                </h2>

                <p className='text mb-2 ms-0'>
                    {text2}
                </p>
                

                <p className='text mb-2 ms-0'>
                    <span className='text3-desc me-1'>{text3}</span>
                    {text4}
                </p>

            </div>

        </div>

    </div>

</>
}
