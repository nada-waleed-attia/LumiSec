import React from 'react'

export default function TopVulnerableEmployeesTabel() {
  return<>
  
  <div className="table-responsive-wrapper">

<table className="w-100 recent-campigns discover-tabel">
  <thead>
    <tr>
    <th>Rank</th>
      <th>Employee</th>
      <th>Department</th>
      <th>Total Incidents</th>
      <th>Severity</th>
      <th>Recommendation</th>
    </tr>
  </thead>

  <tbody>

      
  <tr>
          <td className='ip-address red-number fw-medium px-1'>#1</td>
          <td className='ip-address text-white fw-medium px-1'>Alice Morgan</td>
          <td className='ip-address text-secondary fw-medium px-1'>Finance</td>
          <td className='mac-address red-number text-center'>3</td>
          <td className='py-3 px-1'><p className='critical w-fit-content rounded-3 mb-0'>Critical</p></td>
          <td className='ip-address text-secondary fw-medium px-1'>Security awareness training required</td>

  </tr>


  <tr>
          <td className='ip-address orange-number fw-medium px-1'>#2</td>
          <td className='ip-address text-white fw-medium px-1'>Alice Morgan</td>
          <td className='ip-address text-secondary fw-medium px-1'>Finance</td>
          <td className='mac-address red-number text-center'>2</td>
          <td className='py-3 px-1'><p className='high-sevarity w-fit-content px-2 py-1 rounded-3 mb-0'>High</p></td>
          <td className='ip-address text-secondary fw-medium px-1'>Security awareness training required</td>

  </tr>


  <tr>
          <td className='ip-address text-secondary fw-medium px-1'>#3</td>
          <td className='ip-address text-white fw-medium px-1'>Dave Kim</td>
          <td className='ip-address text-secondary fw-medium px-1'>Marketing</td>
          <td className='mac-address red-number text-center'>2</td>
          <td className='py-3 px-1'><p className='high-sevarity w-fit-content px-2 py-1 rounded-3 mb-0'>High</p></td>
          <td className='ip-address text-secondary fw-medium px-1'>Security awareness training required</td>

  </tr>


  <tr>
          <td className='ip-address text-secondary fw-medium px-1'>#4</td>
          <td className='ip-address text-white fw-medium px-1'>Zoe Harrison</td>
          <td className='ip-address text-secondary fw-medium px-1'>Marketing</td>
          <td className='mac-address red-number text-center'>1</td>
          <td className='py-3 px-1'><p className='medium w-fit-content rounded-3 mb-0'>Medium</p></td>
          <td className='ip-address text-secondary fw-medium px-1'>Security awareness training required</td>

  </tr>


  <tr>
          <td className='ip-address text-secondary fw-medium px-1'>#5</td>
          <td className='ip-address text-white fw-medium px-1'>James Whitfield</td>
          <td className='ip-address text-secondary fw-medium px-1'>Sales</td>
          <td className='mac-address red-number text-center'>1</td>
          <td className='py-3 px-1'><p className='medium w-fit-content rounded-3 mb-0'>Medium</p></td>
          <td className='ip-address text-secondary fw-medium px-1'>Security awareness training required</td>

  </tr>






  </tbody>
</table>

</div>
  
  
  
  </>
}
