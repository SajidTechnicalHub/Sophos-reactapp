
import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import './Groups.css'
import { GroupsList } from './GroupsData';
import AddGroups from './AddGroups'
import EditGroups from './EditGroups';

const Gruops = () => {
  const handleDelete = (id) => {

    setGroups(groups.filter((item) => item.id !== id))
    
  }
  const Search = (groups) => {
    return groups.filter(
      (row) =>
        row.Name.toLowerCase().indexOf(q) > -1 ||
        row.Name.indexOf(q) > -1

    );
  }

  const columns = [
    // {
    //   field: 'Start', headerName: <StarIcon />, width: 50, sortable: false,
    //   renderCell: (cellValues) => {
    //     return (
    //       <>
    //         <div className="lead-column-block">
    //           {cellValues.row.Star}
    //         </div>
    //       </>

    //     );
    //   }
    // },
    { field: 'Name', headerName: 'Name/Users', width: 365 },
    { field: 'Description', headerName: 'Description', width: 365 },
    { field: 'Total_User', headerName: 'Total_User', width: 150 },
    {
      field: "action", headerName: 'Action', width: 100, sortable: false,
      renderCell: (cellValues) => {
        return (
          <>
            <div className="action-icon">
              {/* <Link to={'/Sophos-reactapp/projects/edit_project/' + cellValues.row.id}>
                <EditIcon className='edit-icon' />
              </Link> */}
              <EditIcon className='edit-icon' onClick={handleOpenEdit} />
              <DeleteIcon className='delete-icon' onClick={() => handleDelete(cellValues.row.id)} />
            </div>
          </>

        );
      }
    },
  ]
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    height: "95%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    overflow: 'scroll',
    boxShadow: 24,
    display: 'block'
    // p: 4,
  };

  const [groups, setGroups] = useState(GroupsList)
  const [pageSize, setPageSize] = useState(5);
  const [q, setQ] = useState("")

  // Handle Project Create Model
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Handle Edit Model
  const [openedit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);



  return (
    <>

      <div className="breadcrumb">
        <span className='breadcrumb-items'>Groups</span>

      </div>
      <div className="users-container">

        <div className="users-header">
          <div className="users-header-contents">
            {/* <h5>All Users</h5> */}
            <div className="users-search">
              <SearchIcon className='users-search-icon' />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder='Search Here.'
                className='users-input-search' />
                
              <select
                name=""
                id=""
                className='user-manu'
              >

                <option>Show All Groups</option>
                <option>Add Groups</option>
              </select>
            </div>
            <Button variant="contained" onClick={handleOpen} size="small" className='add-users-btn'>Add Group</Button>

          </div>

        </div>
        <div className="project-list">
          <div style={{ height: 450, width: '100%' }}>

            <DataGrid
              rows={Search(groups)}
              columns={columns}
              checkboxSelection
              disableSelectionOnClick
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 15, 20]}
              pagination
              {...groups}
              components={{ Toolbar: GridToolbar }}


            />
          </div>

          {/* Add User Model */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="create-project-moldel-container">
                <div className="project-model-header">
                  <h3>Add Group</h3>
                </div>
                <hr />
                <div className='create-project-model-form-container'>
                  <AddGroups
                    Cancel={handleClose}
                  />
                </div>

              </div>
            </Box>
          </Modal>

          {/* Edit Group Model */}

          <Modal
            open={openedit}
            onClose={handleCloseEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="create-project-moldel-container">
                <div className="project-model-header">
                  <h3>Edit Group</h3>
                </div>
                <hr />
                <div className='create-project-model-form-container'>
                  <EditGroups
                    Cancel={handleCloseEdit}
                  />
                </div>

              </div>
            </Box>
          </Modal>
        </div>
      </div>


    </>
  )
}

export default Gruops