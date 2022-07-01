
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../useWindowDimensions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import DraftsIcon from '@mui/icons-material/Drafts';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { CurrentCompaignList } from './DashboardData';

const campaignData = [
    {
        id: 1,
        recipients: 'Private Domain',
        groups: 'HR Group',
        emailSent: 'emailSent',
        emailOpen: 'enailOpen',
        clickedLink: 'clickedLink',
        finishedTraining: 'finishedTraining'
    },
    {
        id: 2,
        recipients: 'Private Domain',
        groups: 'Marketing Group',
        emailSent: 'emailSent',
        emailOpen: 'enailOpen',
        clickedLink: '',
        finishedTraining: ''
    }, {
        id: 3,
        recipients: 'Private Domain',
        groups: 'HR Group',
        emailSent: 'emailSent',
        emailOpen: '',
        clickedLink: 'clickedLink',
        finishedTraining: 'finishedTraining'
    }, {
        id: 4,
        recipients: 'Private Domain',
        groups: 'HR Group',
        emailSent: '',
        emailOpen: 'enailOpen',
        clickedLink: '',
        finishedTraining: ''
    },
]
const CampaignDetail = () => {
    const { height, width } = useWindowDimensions();
    // Get the campaign Id param from the URL.
    let { id } = useParams();

    const Search = (campaign) => {
        return campaign.filter(
            (row) =>
                row.recipients.toLowerCase().indexOf(q) > -1 ||
                row.recipients.indexOf(q) > -1

        );
    }

    const columns = [

        {
            field: 'recipients', headerName: 'RECIPIENTS', minWidth: 160, flex: true,
            renderCell: (cellValues) => {

                return (
                    <>
                        {

                            <Link to=''>
                                <span style={{ color: 'blue', cursor: 'pointer' }}>
                                    {cellValues.formattedValue}
                                </span>
                            </Link>
                        }
                    </>

                );
            }
        },
        {
            field: 'groups', headerName: 'GROUP', minWidth: 160, flex: true,
            renderCell: (cellValues) => {

                return (
                    <>
                        {

                            <Link to=''>
                                <span style={{ color: 'blue', cursor: 'pointer' }}>
                                    {cellValues.formattedValue}
                                </span>
                            </Link>
                        }
                    </>

                );
            }
        },
        {
            field: 'emailSent', headerName: 'EMAIL SENT', minWidth: 160, flex: true,
            renderCell: (cellValues) => {

                return (
                    <>
                        {
                            cellValues.formattedValue == 'emailSent' ?
                                <span className='campaign-detail-col'>
                                    <Link to=''><SendOutlinedIcon /></Link>
                                </span> : <span></span>
                        }
                    </>

                );
            }
        },
        {
            field: 'emailOpen', headerName: 'EMAIL OPEN', minWidth: 160, flex: true,
            renderCell: (cellValues) => {

                return (
                    <>
                        {
                            cellValues.formattedValue == 'enailOpen' ?
                                <span className='campaign-detail-col'>
                                    <Link to=''> <DraftsIcon /></Link>
                                </span> : <span></span>
                        }
                    </>

                );
            }
        },
        {
            field: 'clickedLink', headerName: 'CLICKED LINK', minWidth: 160, flex: true,
            renderCell: (cellValues) => {

                return (
                    <>
                        {
                            cellValues.formattedValue == 'clickedLink' ?
                                <span className='campaign-detail-col'>
                                    <Link to=''><PanToolAltOutlinedIcon /></Link>
                                </span> : <span></span>
                        }
                    </>

                );
            }
        },
        {
            field: 'finishedTraining', headerName: 'FINISHED TRAINING', minWidth: 160, flex: true,

            renderCell: (cellValues) => {

                return (
                    <>
                        {
                            cellValues.formattedValue == 'finishedTraining' ?
                                <span className='campaign-detail-col'>
                                    <Link to=''><CheckCircleOutlineOutlinedIcon /></Link>
                                </span> : <span></span>
                        }
                    </>

                );
            }
        },
    ]


    const [campaign, setCampaign] = useState(campaignData)
    const [q, setQ] = useState("")



    return (
        <React.Fragment>

            <div className="breadcrumb">
                {CurrentCompaignList.map((value, index) => {
                    console.log(value.id)
                    return (
                        <React.Fragment key={value.id}>
                            
                            {value.id == id ?
                                <span className='breadcrumb-items'>All Campaigns <span className="campaign-detail-name"> | {value.name}</span></span>
                                : <span></span>}
                        </React.Fragment>
                    )
                })


                }


            </div>
            <div className="users-container campaing-detail">
                <div className='campaign-detail-note-block'>
                    <span className='campaign-detail-note'>NOTE:</span>
                    <span className='campaign-detail-text'>It may take up to 15-20 minutes after the campaign has launched for data to be updated.</span>
                </div>

                <div className="users-header">
                    <hr />
                    <div className="users-header-contents">
                        {/* <h5>All Users</h5> */}
                        <div className="users-search">
                            <SearchIcon className='users-search-icon' />
                            <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder='Search Here.' className='users-input-search' />
                            <select name="" id="" >
                                <option >All Recipients</option>
                                <option >Email sent</option>
                                <option >Email Opened</option>
                                <option >Clicked Link</option>
                                <option >Finished Training </option>
                            </select>

                        </div>
                        <Link to='/Sophos-reactapp/admin/dashboard'> <span style={{ marginRight: '10px' }}><ArrowBackIcon />Back</span></Link>
                    </div>

                </div>
                <div className="project-list">
                    <div style={{ height: 450, width: '100%' }}>

                        <DataGrid
                            rows={Search(campaign)}
                            columns={columns}
                            // checkboxSelection
                            disableSelectionOnClick
                            pageSize={5}
                            // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                            // rowsPerPageOptions={[5, 10, 20]}
                            pagination
                            // {...campaign}
                            // components={{ Toolbar: GridToolbar }}

                            sx={{

                                '& .css-1s0hp0k-MuiDataGrid-columnHeadersInner': {
                                    color: 'white',
                                    background: '#071330'
                                },

                            }}

                        />
                    </div>

                </div>
            </div>


        </React.Fragment>
    )
}

export default CampaignDetail