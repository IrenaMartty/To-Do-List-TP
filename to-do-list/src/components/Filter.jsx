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
        sx={{
          width: '100%',
          alignItems: 'center',
          
        }}
        
      >
        <Tab value="All" label="All"  sx={{
          width: '33.33%',
        }}/>
        <Tab value="Incompleted" label="Pending" sx={{
          width: '33.33%',
        }}/>
        <Tab value="Completed" label="Done" sx={{
          width: '33.33%',
        }}/>
      </Tabs>
    </div>
  );
}

