import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AllCompaignList } from '../CompaignData';

const columns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', minWidth: 220, flex: true },
  { field: 'Type', headerName: 'Type', minWidth: 220, flex: true },
  { field: 'EndDate', headerName: 'Started Date', minWidth: 220, flex: true },
  { field: 'Recepients', headerName: 'Owner', minWidth: 210, flex: true },


];



export default function ScheduleCompaing() {
  return (
    <>
      <div className='compaign-type'>Schedule Compaign</div>
      {/* <hr /> */}
      <div style={{ height: 380, width: '100%' }}>
        <DataGrid
          rows={AllCompaignList}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15, 20]}

          checkboxSelection
        />
      </div>
      </>
      );
}
