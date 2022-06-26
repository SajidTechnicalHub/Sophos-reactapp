
import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import Header from '../Home/Header'
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import CreateProject from './CreateProject';
import { RowData } from './ProjectData';
import { DataGridPro } from '@mui/x-data-grid-pro';
import ReactFileReader from 'react-file-reader';
import EditProject from './EditProject'
import useWindowDimensions from '../useWindowDimensions'
import DeleteProject from './DeleteProject'

const Projects = () => {
  const { height, width } = useWindowDimensions();
  const handleDelete = (id) => {

    setTableData(tableData.filter((item) => item.id !== id))
  }
  const Search = (tableData) => {
    return tableData.filter(
      (row) =>
        row.projectname.toLowerCase().indexOf(q) > -1 ||
        row.projectname.indexOf(q) > -1 ||
        row.lead.toLowerCase().indexOf(q) > -1 ||
        row.lead.indexOf(q) > -1
    );
  }

  const columns = [
    {
      field: 'start', headerName: <StarIcon />, width: 50, sortable: false,
      renderCell: (cellValues) => {
        return (
          <>
            <div className="lead-column-block">
              {cellValues.row.star}
            </div>
          </>

        );
      }
    },
    {
      field: 'projectname', headerName: 'Project Name', minWidth: 235, flex: true,
      renderCell: (cellValues) => {
        return (
          <>
            <div className="lead-column-block">
              <img src={cellValues.row.imageUrl} alt="Project_Name" className='leader-img' />
              {/* <Avatar className='avater leader-img'>{cellValues.row.projectname[0]}</Avatar> */}
              {cellValues.row.projectname}
            </div>
          </>

        );
      }
    },
    { field: 'url', headerName: 'URL', minWidth: 235, flex: true },
    { field: 'type', headerName: 'Type', minWidth: 235, flex: true },
    {
      field: 'lead', headerName: 'Lead', minWidth: 235, flex: true,
      renderCell: (cellValues) => {
        return (
          <>
            <div className="lead-column-block">
              {/* <img src={cellValues.row.imageUrl} alt="leader" className='leader-img' /> */}
              <Avatar className='avater leader-img'>{cellValues.row.lead[0]}</Avatar>
              {cellValues.row.lead}
            </div>
          </>

        );
      }
    },
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
              <DeleteIcon className='delete-icon' onClick={() => handleOpenDeleteProject(cellValues.row.id, cellValues.row.projectname)} />
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
    width: "90%",
    height: "95%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    overflow: 'scroll',
    boxShadow: 24,
    display: 'block'
    // p: 4,
  };

  const DeleteProjectStyle = {
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
  const DeleteProjectStyle1 = {
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

  const [tableData, setTableData] = useState(RowData)
  const [pageSize, setPageSize] = React.useState(5);
  const [q, setQ] = useState("")


  // Handle Project Create Model
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle Project Edit Model
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);


  //Handle Delete user Model
  const [deletedProjectData, setDeletedProjectData] = useState({
    id: '',
    name: '',
  })
  const [openDeleteUser, setOpenDeleteUser] = useState(false);
  const handleOpenDeleteProject = (id, name) => {
    setOpenDeleteUser(true);
    console.log(id)
    console.log(name)
    setDeletedProjectData({
      id: id,
      name: name
    })
  }
  const handleCloseDeleteProject = () => setOpenDeleteUser(false);


  return (
    <>
      <div className="project-container">
        <hr />
        <div className="project-header">

          <div className="project-header-contents">

            <h5>All Projects</h5>
            <div className='project-search-container'>
              <div className="project-search">
                <SearchIcon className='search-icon' />
                <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder='Search Here.' className='search' />

              </div>
              <Button variant="contained" onClick={handleOpen} size="small" className='project-create-btn'>Create Project</Button>
            </div>
          </div>
          <hr />

        </div>
        <div className="project-list" style={{ marginTop: '10px'}}>
          <div style={{ height: 450, width: '95%' }}>

            <DataGrid
              rows={Search(tableData)}
              columns={columns}
              // checkboxSelection
              disableSelectionOnClick
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 20]}
              pagination
              {...tableData}
              components={{ Toolbar: GridToolbar }}



            />
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="create-project-moldel-container">
                <div className="project-model-header">
                  <h3>Add Project</h3>
                </div>
                <hr />
                <div className='create-project-model-form-container'>
                  <CreateProject
                    Cancel={handleClose}
                  />
                </div>

              </div>
            </Box>
          </Modal>

          {/* Edit Project Model */}

          <Modal
            open={openEdit}
            onClose={handleCloseEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="create-project-moldel-container">
                <div className="project-model-header">
                  <h3>Edit Project</h3>
                </div>
                <hr />
                <div className='create-project-model-form-container'>
                  <EditProject
                    Cancel={handleCloseEdit}
                  />
                </div>

              </div>
            </Box>
          </Modal>

          {/* Delete Project Model */}

          <Modal
            open={openDeleteUser}
            onClose={handleCloseDeleteProject}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width >= 992 ? DeleteProjectStyle : DeleteProjectStyle1}>
              <DeleteProject
                Cancel={handleCloseDeleteProject}
                Delete={handleOpenDeleteProject}
                DeletedData={deletedProjectData}
                DeleteUser={handleDelete}
              />
            </Box>
          </Modal>
        </div>
      </div>


    </>
  )
}

export default Projects