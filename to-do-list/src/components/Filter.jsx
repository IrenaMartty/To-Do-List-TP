import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Filter({ filter, setFilter }) {
  const handleFilterChange = (event, newValue) => {
    setFilter(newValue);
  };

  console.log('Filter value:', filter)

  return (
    <div> 
      <Tabs
        value={filter} 
        onChange={handleFilterChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
     
        
      >
        <Tab value="All" label="All" />
        <Tab value="Incompleted" label="Pending" />
        <Tab value="Completed" label="Completed" />
      </Tabs>
    </div>
  );
}

