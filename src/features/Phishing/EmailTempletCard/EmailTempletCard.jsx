import React from 'react'
import "./EmailTempletCard.css"

export default function EmailTempletCard({img, title , tag1 , tag2 , tag3 , ctreatedBy , date}) {
  return <>
            <div className='col-4'>
                <div className='dashboard-card p-2'>
                    <div className='d-flex'>
                        {
                            img ? <figure className='w-8'>
                            <img src={img} className='w-100' alt="img" />
                        </figure> : ""
                        }

                        <div>
                            <h5 className='text-white'>{title}</h5>
                                <div className='d-flex'>
                                <p className='purple-status rounded-3 me-2'>{tag1}</p>
                                <p className='red-status rounded-3 me-2'>{tag2}</p>
                                <p className='secandary-status rounded-3 me-2'>{tag3}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex'>
                            <p className='me-3'>{ctreatedBy}</p>
                            <p>{date}</p>
                        </div>
                        <div>
                            <button className='btn purple-background mx-2'><i class="fa-solid text-white fa-eye"></i></button>
                            <button className='btn bg-secondary mx-2'><i class="fa-solid text-white fa-pen-to-square"></i></button>
                            <button className='btn bg-secondary mx-2'><i class="fa-solid text-white fa-clone"></i></button>
                            <button className='btn red-background mx-2'><i class="fa-solid text-white fa-trash"></i></button>
                        </div>
                    </div>
                </div>  
            </div>
  
  
  </>
}
