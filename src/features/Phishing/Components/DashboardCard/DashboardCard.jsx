import React from 'react'
import "./DashboardCard.css"

export default function DashboardCard({ text , Statistics }) {

return<>
    
    <div className='col-12 col-sm-6 col-xl-3 p-1'>

        <div className='rounded-4 dashboard-card px-2 py-2 h-100'>

        <p className='text mx-0 mb-3'>
                    {text}
        </p>


        <h4 className='Statistics text-white mb-0'>
                    {Statistics}
                </h4>


        </div>

    </div>

</>
}