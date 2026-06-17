import React from 'react'
import EmailTempletCard from '../EmailTempletCard/EmailTempletCard'
import moneyImg from "../../../assets/Text.png"
import tvImg from "../../../assets/Text (1).png"
import boxImg from "../../../assets/Text (2).png"
import cloudImg from "../../../assets/Text (3).png"
import bankImg from "../../../assets/Text (4).png"
import keyImg from "../../../assets/Text (5).png"
import emailImg from "../../../assets/Text (6).png"

export default function EmailTemplet() {
  return <>
     <div className='d-flex justify-content-between align-items-center mb-3'>
          <div>
              <h5 className='text-white'>Email Templates</h5>
              <p className='dashboard-desc'>8 templates available</p>
          </div>
          <button className='btn add-btn text-white border-0'>
                      <i className="fa-solid fa-plus me-2"></i>
                      Create Template
          </button>
      </div>

   
      <div className='search-container mb-3'>
    
    <div className='col-9 me-4'>
        <i className="fa-brands fa-sistrix discover-search-icon"></i>

        <input
            type="text"
            className='form-control header-search-input rounded-3'
            placeholder='Search...'
        />
    </div>

    </div>



      <div className='row align-items-center g-2 mx-2'>

          <EmailTempletCard
          title={"Microsoft Password Reset"}
          tag1={"IT Security"}
          tag2={"High Risk"}
          tag3={"English"}
          ctreatedBy={"by admin ·"}
          date={"2026-05-10"}
          />


          <EmailTempletCard
          img={moneyImg}
          title={"HR Salary Update"}
          tag1={"HR"}
          tag2={"High Risk"}
          tag3={"English"}
          ctreatedBy={"by admin ·"}
          date={"2026-05-12"}
          />



          <EmailTempletCard
          img={tvImg}
          title={"Netflix Billing Alert"}
          tag1={"Consumer"}
          tag2={"Medium Risk"}
          tag3={"English"}
          ctreatedBy={"by j.smith"}
          date={"2026-05-15"}
          />



          <EmailTempletCard
          img={boxImg}
          title={"DHL Package Alert"}
          tag1={"Logistics"}
          tag2={"Medium Risk"}
          tag3={"Arabic"}
          ctreatedBy={"by m.ali ·"}
          date={"2026-05-18"}
          />


          <EmailTempletCard
          img={cloudImg}
          title={"OneDrive Storage Full"}
          tag1={"IT Security"}
          tag2={"Low Risk"}
          tag3={"English"}
          ctreatedBy={"by admin ·"}
          date={"2026-05-20"}
          />

        <EmailTempletCard
          img={bankImg}
          title={"Bank Security Alert"}
          tag1={"Finance"}
          tag2={"High Risk"}
          tag3={"English"}
          ctreatedBy={"by admin ·"}
          date={"2026-05-22"}
          />



        <EmailTempletCard
          img={keyImg}
          title={"VPN Access Required"}
          tag1={"IT Security"}
          tag2={"High Risk"}
          tag3={"English"}
          ctreatedBy={"by j.smith ·"}
          date={"2026-05-25"}
          />



        <EmailTempletCard
          img={emailImg}
          title={"O365 Account Review"}
          tag1={"IT Security"}
          tag2={"Medium Risk"}
          tag3={"English"}
          ctreatedBy={"by admin ·"}
          date={"2026-05-28"}
          />

      </div>
  
  
  </>
}
