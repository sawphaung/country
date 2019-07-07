import React from 'react';

function Region({ handleChange, region }) {
  return (
    <div>
      <select className='region' value={region} onChange={handleChange}>
        <option value=''>Filter by Region</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </div>
  );
}

export default Region;
