import React from 'react'
import "./DashboardCard.css"

export default function DashboardCard({icon , Statistics , text }) {

return<>
    
    <div className='col-12 col-sm-6 col-xl-2 p-1 ps-3'>

        <div className='d-flex align-items-center justify-content-between rounded-4 dashboard-card px-1 py-4 h-100'>

        <p className='text m-0'>
                    {text}
        </p>


        <h4 className='Statistics text-white mb-0'>
                    {Statistics}
                </h4>

            <figure className='mb-0 dashboard-card-image'>

                <img
                    src={icon}
                    className='w-100'
                    alt="checkIcon"
                />

            </figure>


        </div>

    </div>

</>
}