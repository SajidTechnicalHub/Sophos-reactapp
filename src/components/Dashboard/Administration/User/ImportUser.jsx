import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import usePagination from '@mui/material/usePagination/usePagination';
import ReactFileReader from 'react-file-reader';

const ImportUser = (props) => {

    const [userFile, setUserFile] = useState([])

    let navigate = useNavigate()
    const SubmitEvent = (e) => {
        e.preventDefault()
        // alert(`Project Name: ${input.project_name}, URE:: ${input.url} `)
        navigate("/Sophos-reactapp/admin");
    }

    const CancelEvent = () => {
        props.Cancel()
    }

    // Upload CSV file
    // *******************************

    const handleFiles = files => {
        var reader = new FileReader();
        reader.onload = function (e) {
            // Use reader.result
            alert(reader.result)
            setUserFile(reader.result)
            // console.log(reader.result)
        }
        reader.readAsText(files[0]);
        
    }
    
    // **************************************
    return (
        <>
            <form onSubmit={SubmitEvent} className='imort-user-model-form import-user'>
                <div className="row">
                    <div className="col-lg-6">
                        <p>The users to import new users requires setting of 'name' and 'email'.</p>
                        <p>As optional fields you can add 'manager email', 'exchange login' and 'group'.</p>
                        <p>If you have users who are in several groups you can add additional 'group' fields followed by a number. For example 'group1' and 'group2'.
                        </p>
                        <p>As a formatting example you can have a look at the following examples:
                        </p>
                        <ul>
                            <li><Link to=''>Blank template with header</Link></li>
                            <li><Link to=''>Template with example data</Link></li>


                        </ul>
                    </div>
                    <div className="col-lg-1 user-line-block">
                        <div className="import-user-line"></div>
                        </div>
                    <div className="col-lg-5">
                        <h5>CSV File</h5>

                        {/* Upload csv file */}
                        <div className="file-upload">
                            <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'} >
                                <button className='btn' type='button'>Upload</button>
                            </ReactFileReader>
                        </div>
                        <br />
                        <div className="model-group-selection">

                            <input type="checkbox" className='model-group-selection-checkbox' />
                            <label htmlFor="role" className="">
                                Create New Groups</label>
                        </div>
                        <div className="model-group-selection">

                            <input type="checkbox" className='model-group-selection-checkbox' />
                            <label htmlFor="role" className="">Give users access to Sophos Central Self Service.</label>
                        </div>

                        <div className="file-size">
                            <span>Max file size is 2MB</span>
                            <span>CSV file should be utf-8 encoded</span>

                        </div>
                    </div>
                </div>

                <Button variant="contained" type='submit' size="small" className='project-create-btn'>Add</Button>

                <Button variant="contained" onClick={CancelEvent} size="small" className=''>Cancel</Button>


            </form>
        </>
    )
}

export default ImportUser