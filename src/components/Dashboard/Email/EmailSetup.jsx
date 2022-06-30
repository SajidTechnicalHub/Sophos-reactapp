
import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import './EmailSetup.css'
import { GroupsList } from '../Administration/Groups/GroupsData';
import AddEmailProfile from './Email Setup/AddEmailProfile';
import EditEmailProfile from './Email Setup/EditEmailProfile';
import useWindowDimensions from '../../useWindowDimensions';
// import DeleteGroups from '../Administration/Groups/DeleteGroups';
import DeleteEmailSetup from './Email Setup/DeleteEmailSetup';
import { EmailSetupData } from './EmailData';

const EmailSetup = () => {
  const { height, width } = useWindowDimensions();

  const handleDelete = (id) => {

    setEmailSetup(emailSetup.filter((item) => item.id !== id))

  }
  const Search = (emailSetup) => {
    return emailSetup.filter(
      (row) =>
        row.name.toLowerCase().indexOf(q) > -1 ||
        row.name.indexOf(q) > -1

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
    { field: 'name', headerName: 'Name', minWidth: 365, flex: true },
    { field: 'interfaceType', headerName: 'Interface Type', minWidth: 280, flex: true },
    { field: 'lastModifiedDate', headerName: 'Last Modified Date', minWidth: 230, flex: true },
    {
      field: "action", headerName: 'Action', width: 100, sortable: false,
      renderCell: (cellValues) => {
        return (
          <>
            <div className="email-action-icon">
              {/* <Link to={'/Sophos-reactapp/projects/edit_project/' + cellValues.row.id}>
                <EditIcon className='edit-icon' />
              </Link> */}
              <div className="email-edit-icon-container" onClick={() => handleOpenEdit(cellValues.row.id, cellValues.row.name)} >
                <EditIcon className='email-edit-icon' />
              </div>
              <div className='email-delete-icon-container' onClick={() => handleOpenDeleteEmailProfile(cellValues.row.id, cellValues.row.name)}>
                <DeleteIcon className='email-delete-icon' />
              </div>
              {/* <DeleteIcon className='delete-icon' onClick={() => handleDelete(cellValues.row.id)} /> */}
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
    width: "55%",
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

  const DeleteGroupStyle = {
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
  const DeleteGroupStyle1 = {
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

  const [emailSetup, setEmailSetup] = useState(EmailSetupData)
  const [pageSize, setPageSize] = useState(5);
  const [q, setQ] = useState("")

  // Handle Create Model
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Handle Edit Model

  const [openedit, setOpenEdit] = useState(false);

  const [editEmailProfileData, setEditEmailProfileData] = useState({
    id: '',
    name: '',
  })

  const handleOpenEdit = (id, name) => {
    setOpenEdit(true);

    setEditEmailProfileData({
      id: id,
      name: name
    })
  }
  const handleCloseEdit = () => setOpenEdit(false);

  //Handle Delete Model
  const [deletedEmailSetupData, setDeletedEmailSetupData] = useState({
    id: '',
    name: '',
  })
  const [openDeleteEmailProfile, setOpenDeleteEmailProfile] = useState(false);
  const handleOpenDeleteEmailProfile = (id, name) => {
    setOpenDeleteEmailProfile(true);
    console.log(id)
    console.log(name)
    setDeletedEmailSetupData({
      id: id,
      name: name
    })
  }
  const handleCloseDeleteEmailProfile = () => setOpenDeleteEmailProfile(false);


  return (
    <>

      <div className="breadcrumb">
        <span className='breadcrumb-items'>Email Setup</span>

      </div>
      <div className="users-container">
        <hr />
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


            </div>
            <Button variant="contained" onClick={handleOpen} size="small" className='add-users-btn'>+Email Profile</Button>

          </div>

        </div>
        <div className="project-list">
          <div style={{ height: 450, width: '100%' }}>

            <DataGrid
              rows={Search(emailSetup)}
              columns={columns}
              checkboxSelection
              disableSelectionOnClick
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 15, 20]}
              pagination
              {...emailSetup}
              components={{ Toolbar: GridToolbar }}


            />
          </div>

          {/* Add Email Profile Model */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width <= 992 ? mobilestyle : style}>
              <div className="create-project-moldel-container">
                <div className="project-model-header">
                  <h3>Add Email Profile</h3>
                </div>
                <hr />
                <div className='create-project-model-form-container'>
                  <AddEmailProfile
                    Cancel={handleClose}
                  />
                </div>

              </div>
            </Box>
          </Modal>

          {/* Edit Email Setup Model */}

          <Modal
            open={openedit}
            onClose={handleCloseEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width <= 992 ? mobilestyle : style}>
              <div className="create-project-moldel-container">
                <div className="project-model-header">
                  <h3>Edit Email Profile</h3>
                </div>
                <hr />
                <div className='create-project-model-form-container'>
                  <EditEmailProfile
                    Cancel={handleCloseEdit}
                    EditData={editEmailProfileData}
                  />
                </div>

              </div>
            </Box>
          </Modal>

          {/* Delete Groups Model */}
          <Modal
            open={openDeleteEmailProfile}
            onClose={handleCloseDeleteEmailProfile}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width >= 992 ? DeleteGroupStyle : DeleteGroupStyle1}>
              <DeleteEmailSetup
                Cancel={handleCloseDeleteEmailProfile}
                Delete={handleOpenDeleteEmailProfile}
                DeletedData={deletedEmailSetupData}
                DeleteEmailSetup={handleDelete}
              />
            </Box>
          </Modal>
        </div>
      </div>


    </>
  )
}

export default EmailSetup