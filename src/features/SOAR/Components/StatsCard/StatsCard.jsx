import "./StatsCard.css";

export default function StatsCard({
    title,
    icon,
    statistics,
    desc,
}) {

    return (

        <div className='col-12 col-sm-6 col-xl'>

        <div className='rounded-4 dashboard-card p-3 py-4 h-100'>

            <div className='d-flex justify-content-between align-items-center mb-2'>
                <p className='mb-0'>{title}</p>
                <div>{icon}</div>
            </div>

            <div className='overflow-hidden'>

                <h4 className='Statistics text-white mb-1'>
                    {statistics}
                </h4>

                <div className='d-flex align-items-center'> 
                    <p className='text-danger m-0'>
                        {desc}
                    </p>
                </div>

            </div>

        </div>

    </div>

    );
}