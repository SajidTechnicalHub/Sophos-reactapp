
import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { UserList } from '../../Administration/UserData';
import CloseIcon from '@mui/icons-material/Close';
import useWindowDimensions from '../../../useWindowDimensions';
import DeleteUser from '../../Administration/User/DeleteUser';
import CachedIcon from '@mui/icons-material/Cached';

const AllEnrollTargerUsers = () => {
  const { height, width } = useWindowDimensions();
  const handleDelete = (id) => {
    console.log(id)
    setUsers(users.filter((item) => item.id !== id))
    console.log(users)
  }

  const columns = [
    { field: 'Name', headerName: 'Name', minWidth: 220, flex: true },
    { field: 'Email', headerName: 'Email', minWidth: 220, flex: true },
    { field: 'Groups', headerName: 'Groups', minWidth: 220, flex: true },
    { field: 'Role', headerName: 'Role', minWidth: 220, flex: true },
    {
      field: "action", headerName: 'Action', Width: 100, sortable: false,
      renderCell: (cellValues) => {
        return (
          <>
            <div className="action-icon">

              <CloseIcon className='delete-icon' onClick={() => handleOpenDeleteUser(cellValues.row.id, cellValues.row.Name)} />
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
    width: "65%",
    height: "80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    overflow: 'scroll',
    boxShadow: 24,
    display: 'block'
    // p: 4,
  };
  const mobilestyle = {
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
  }

  const DeleteUserStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "40%",
    height: "60%",
    bgcolor: 'background.paper',
    border: '1px solid #000',
    overflow: 'scroll',
    boxShadow: 24,
    display: 'block',
    borderRadius: '5px'
    // p: 4,
  }
  const DeleteUserStyle1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    height: "95%",
    bgcolor: 'background.paper',
    border: '1px solid #000',
    overflow: 'scroll',
    boxShadow: 24,
    display: 'block',
    borderRadius: '5px'
    // p: 4,
  }

  const [users, setUsers] = useState(UserList)
  const [pageSize, setPageSize] = useState(5);

  // Handle Project Create Model
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  //Handle Delete user Model
  const [deletedUserData, setDeletedUserData] = useState({
    id: '',
    name: '',
  })
  const [openDeleteUser, setOpenDeleteUser] = useState(false);
  const handleOpenDeleteUser = (id, name) => {
    setOpenDeleteUser(true);
    console.log(id)
    console.log(name)
    setDeletedUserData({
      id: id,
      name: name
    })
  }
  const handleCloseDeleteUser = () => setOpenDeleteUser(false);


  const usersLength = users.length

  return (
    <>
      <div className="referesh-container">
        <span className='referesh'>
          <CachedIcon />
          <span className='auto-enroll-user-text'>Refresh</span>
        </span>
        <span className='referesh-container-items'>{usersLength} items</span>
      </div>


      <div className="all-enroll-users-container">

        <div className="project-list">
          <div style={{ height: 440, width: '100%' }}>

            <DataGrid
              rows={users}
              columns={columns}
              // checkboxSelection
              disableSelectionOnClick
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 20]}
              pagination
              {...users}
              // components={{ Toolbar: GridToolbar }}


            />
          </div>


          {/* Delete User Model */}

          <Modal
            open={openDeleteUser}
            onClose={handleCloseDeleteUser}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width >= 992 ? DeleteUserStyle : DeleteUserStyle1}>
              <DeleteUser
                Cancel={handleCloseDeleteUser}
                Delete={handleOpenDeleteUser}
                DeletedData={deletedUserData}
                DeleteUser={handleDelete}
              />
            </Box>
          </Modal>
        </div>
      </div>


    </>
  )
}

export default AllEnrollTargerUsers