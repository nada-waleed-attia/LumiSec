import React from 'react'
import "./DashboardCard2.css"

export default function DashboardCard2({text , Statistics }) {

return<>
    
    <div className='col-12 col-sm-6 col-xl-3 p-1 ps-3'>
        <div className='rounded-4 dashboard-card dashboard-card2 px-1 py-4 h-100'>

            <p className='text mb-1 text-center'>
                        {text}
            </p>


            <h4 className='Statistics text-white mb-0 text-center fw-medium'>{Statistics}</h4>

        </div>

    </div>


</>
}