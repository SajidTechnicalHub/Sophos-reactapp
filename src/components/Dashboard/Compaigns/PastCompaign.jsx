import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { PastCompaignList } from './CompaignData';

const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', minWidth: 220, flex: true  },
  { field: 'Type', headerName: 'Type', minWidth: 220, flex: true },
  { field: 'EndDate', headerName: 'End Date', minWidth: 220, flex: true },
  { field: 'Recepients', headerName: 'Recepients', minWidth: 220, flex: true },
 
  
];



export default function PastCompaign() {
  return (
    <div style={{ height: 320, width: '100%' }}>
      <DataGrid
        rows={PastCompaignList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 15, 20]}
        
        checkboxSelection
      />
    </div>
  );
}
