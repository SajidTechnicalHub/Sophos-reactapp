
import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import CreateProject from '../../Projects/CreateProject';
import { RowData } from '../../Projects/ProjectData';
import './Administration.css'
import { UserList } from './UserData'
import AddUser from './User/AddUser'
import EditUser from './User/EditUser';
import ImportUser from './User/ImportUser';
import { Doughnut } from 'react-chartjs-2';
import useWindowDimensions from '../../useWindowDimensions';
import DeleteUser from './User/DeleteUser';


const Users = () => {
  const { height, width } = useWindowDimensions();
  const handleDelete = (id) => {
    console.log(id)
    setUsers(users.filter((item) => item.id !== id))
    console.log(users)
  }
  const Search = (users) => {
    return users.filter(
      (row) =>
        row.Name.toLowerCase().indexOf(q) > -1 ||
        row.Name.indexOf(q) > -1

    );
  }

  const columns = [
    {
      field: 'Start', headerName: <StarIcon />, width: 50, sortable: false,
      renderCell: (cellValues) => {
        return (
          <>
            <div className="lead-column-block">
              {cellValues.row.Star}
            </div>
          </>

        );
      }
    },
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
              {/* <Link to={'/Sophos-reactapp/projects/edit_project/' + cellValues.row.id}>
                <EditIcon className='edit-icon' />
              </Link> */}
              <EditIcon className='edit-icon' onClick={handleOpenEdit} />
              <DeleteIcon className='delete-icon' onClick={() => handleOpenDeleteUser(cellValues.row.id, cellValues.row.Name)} />
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
  const ImportUserStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    height: "80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    overflow: 'scroll',
    boxShadow: 24,
    display: 'block'
    // p: 4,
  };

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
    borderRadius:'5px'
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
    borderRadius:'5px'
    // p: 4,
  }

  const [users, setUsers] = useState(UserList)
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

  //Handle Import user form CSV Model
  const [openImportUser, setOpenImportUser] = useState(false);
  const handleOpenImportUser = () => setOpenImportUser(true);
  const handleCloseImportUser = () => setOpenImportUser(false);

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

  return (
    <>

      <div className="breadcrumb">
        <span className='breadcrumb-items'>Users</span>

      </div>
      <div className="users-container">
        <div className="users-top-header">
          <Link to=''>Azure AD Users(Preview)</Link>
          <Link to=''>Active Directory Users(Preview)</Link>
        </div>
        <div className="users-header">
          <hr />
          <div className="users-header-contents">
            {/* <h5>All Users</h5> */}
            <div className="users-search">
              <SearchIcon className='users-search-icon' />
              <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder='Search Here.' className='users-input-search' />
              <select
                name=""
                id=""
              >

                <option >All Users</option>
                <option >Admin Users</option>
                <option >Active Directory Users</option>
              </select>
            </div>
            {/* <Button variant="contained" onClick={handleOpen} size="small" className='add-users-btn'>ADD USER</Button> */}
            <div className="dropdown">
              <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Add
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a onClick={handleOpen} className="dropdown-item" href="#">Add User</a></li>
                <li><a onClick={handleOpenImportUser} className="dropdown-item" href="#">Import User From CSV</a></li>
              </ul>
            </div>
          </div>

        </div>
        <div className="project-list">
          <div style={{ height: 450, width: '100%' }}>

            <DataGrid
              rows={Search(users)}
              columns={columns}
              // checkboxSelection
              disableSelectionOnClick
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 20]}
              pagination
              {...users}
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
            <Box sx={width <= 992 ? mobilestyle : style}>
              <div className="create-project-moldel-container">
                <div className="project-model-header">
                  <h3>Add User</h3>
                </div>
                <hr />
                <div className='create-project-model-form-container'>
                  <AddUser
                    Cancel={handleClose}
                  />
                </div>

              </div>
            </Box>
          </Modal>

          {/* Edit User Model */}

          <Modal
            open={openedit}
            onClose={handleCloseEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width <= 992 ? mobilestyle : style}>
              <div className="create-project-moldel-container">
                <div className="project-model-header">
                  <h3>Edit User</h3>
                </div>
                <hr />
                <div className='create-project-model-form-container'>
                  <EditUser
                    Cancel={handleCloseEdit}
                  />
                </div>

              </div>
            </Box>
          </Modal>

          {/* Import User Model */}

          <Modal
            open={openImportUser}
            onClose={handleCloseImportUser}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={ImportUserStyle}>
              <div className="create-project-moldel-container">
                <div className="project-model-header">
                  <h3>Import Users from CSV</h3>
                </div>

                <div className='create-project-model-form-container'>
                  <ImportUser
                    Cancel={handleCloseImportUser}
                  />
                </div>

              </div>
            </Box>
          </Modal>

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

export default Users