import React from 'react'
import Button from '@mui/material/Button';
import './Projects.css'
import SearchIcon from '@mui/icons-material/Search';
// import { DataGrid } from '@mui/x-data-grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';


const Projects = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 170 },
    { field: 'url', headerName: 'URL', width: 170 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'lead', headerName: 'Lead', width: 150 },
    {
      field: 'action', headerName: 'Action', width: 150,
      renderCell: (params) => {
        return (
          <>

            <EditIcon className='edit-icon' />
            <DeleteOutlineIcon className='delete-icon' />

          </>
        )
      }
    },


  ];

  const rows = [
    {
      id: 1,
      name: 'Snow',
      type: 'Web',
      url: 'sajid@gmail.com',
      lead: 'Sajid',
      delete: 'ds'

    },
    {
      id: 2,
      name: 'School Management System',
      type: 'Web',
      url: 'yasir@gmail.com',
      lead: 'Yasir',

    },
    {
      id: 3,
      name: 'Snow',
      type: 'Web',
      url: 'ahmad@gmail.com',
      lead: 'Ahmad',

    },
    {
      id: 4,
      name: 'Snow',
      type: 'Web',
      url: 'ali@gmail.com',
      lead: 'Ali',

    },

    {
      id: 5,
      name: 'Snow',
      type: 'Web',
      url: 'ali@gmail.com',
      lead: 'Ali',

    },

    {
      id: 6,
      name: 'Snow',
      type: 'Web',
      url: 'ali@gmail.com',
      lead: 'Ali',

    },

    {
      id: 7,
      name: 'Snow',
      type: 'Web',
      url: 'ali@gmail.com',
      lead: 'Ali',

    },
  ];
  return (
    <>

      <div className="project-container">
        <div className="project-header">
          <div className="project-header-contents">
            <h4>Projects</h4>
            <Button variant="contained" size="small" className='project-create-btn'>Create Project</Button>

          </div>
          <div className="project-search">

            <TextField
              type='search'
              placeholder='Search...'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </div>
        </div>
        <div className="project-list">
          <div style={{ height: 430, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={6}
              rowsPerPageOptions={[6]}
              checkboxSelection
            />
          </div>
        </div>
      </div>


    </>
  )
}

export default Projects