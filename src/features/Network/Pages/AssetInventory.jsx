import React from 'react'
import "./AssetInventory.css"
import { useOutletContext } from 'react-router-dom';
import assetsInventoryIcon from"../../../assets/SVG (3).png"

import AssetsTabel from '../Components/AssetsTabel/AssetsTabel';

export default function AssetInventory() {

  const { title, setTitle } = useOutletContext();

  setTitle("Asset Inventory")

  return <>
  
  <div className='row align-items-center mb-3'>

    <div className='col-6 search-container m-0'>

      <i className="fa-brands mx-2 fa-sistrix discover-search-icon"></i>

      <input
          type="text"
          className='form-control header-search-input assets rounded-3'
          placeholder='Search...'
      />

    </div>


    <div className='col-4'>
          <select name="" id="scanType" className='form-select Allcategories scanType-select border-0'>
              <option value="both">All Categories</option>
          </select>
    </div>

    <div className='col-2'>
      <button className='btn mx-auto start-btn border-0 rounded-3 text-white fw-medium me-3 ps-0 d-flex justify-content-between align-items-center'><i class="fa-solid fa-plus mx-2 text-white"></i>Add Asset</button>
    </div>

  </div>


  <div>
    <div className='dashboard-card mb-3'>
      <div className='row justify-content-between align-items-center mb-3'>
        <div className='col-9 d-flex align-items-center mb-0'>
              <figure className='mb-0 me-2'>
                  <img src={assetsInventoryIcon} className='w-100' alt="assetsInventoryIcon" />
              </figure>
              <h6 className='text-white mb-0'>Asset Inventory <span>(20)</span></h6>
        </div>
        <div className='col-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <button className='btn action-btns rounded-3'><i class="fa-solid text-secondary fa-arrow-rotate-right"></i></button>
            <button className='btn action-btns rounded-3'><i class="fa-solid text-secondary fa-download"></i></button>
            <button className='btn action-btns rounded-3'><i class="fa-solid text-secondary fa-filter"></i></button>
        </div>
        </div>
      </div>
      <AssetsTabel />
    </div>
  </div>
  
  
  </>
}
