import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const AddGroups = (props) => {
    let navigate = useNavigate();
    const [input, setInput] = useState({
        groupname: '',
        description: '',

    });
    const [inputData, setInputData] = useState('')
    const [item, setItem] = useState([])
    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInput(() => {
            return { ...input, [name]: value }
        })
    }
    const SubmitEvent = (e) => {
        e.preventDefault()
        // alert(`Project Name: ${input.username}, URE:: ${input.email} `)

        setInput({
            groupname: '',
            description: '',
        })
        navigate("/Sophos-reactapp/admin");


    }

    const CancelEvent = () => {
        props.Cancel()
    }

    return (
        <>

            <form onSubmit={SubmitEvent} className='create-project-model-form input-field'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-4 input-field-block ">
                            <label htmlFor="groupname" className="form-label">Group Name<span className='estaric'>*</span></label>
                            <input type="text"
                                name="username"
                                value={input.groupname}
                                onChange={InputEvent}
                                // className="form-control"
                                required="required"
                                placeholder='Type Gruop Name'
                            />

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-4 input-field-block ">
                            <label htmlFor="description" className="form-label">Group Description<span className='estaric'>*</span></label>
                            <textarea type="text"
                                name="description"
                                value={input.description}
                                onChange={InputEvent}
                                // className="form-control "
                                required="required"
                                placeholder='Group Description'
                            />

                        </div>
                    </div>
                </div>

                <h5>Add Users</h5>
                <div className="user-model-container mb-5 ">

                    <div className=" block-width">
                        <h4>Available Users</h4>
                        <div className='add-user-model-group-content'>
                            <input type="text" placeholder='Search' className='add-user-model-group-content-input' />
                            <div className="model-group-selection">

                                <input type="checkbox" className='model-group-selection-checkbox' />
                                <label htmlFor="role" className="">Available Users</label>
                            </div>
                        </div>
                    </div>

                    <div className="enroll-user-errow-block">
                        <span className='enroll-errow-block'><ChevronRightIcon /></span>
                        <span className='enroll-errow-block'><ChevronLeftIcon /></span>
                    </div>

                    <div className="block-width">
                        <h4>Assigned Users</h4>
                        <div className='add-user-model-group-content'>
                            <input type="text" placeholder='Search' className='add-user-model-group-content-input' />
                            <div className="model-group-selection">

                                <input type="checkbox" className='model-group-selection-checkbox' />
                                <label htmlFor="role" className="">Assigned Users</label>
                            </div>
                        </div>
                    </div>
                </div>

                <Button variant="contained" type='submit' size="small" className='project-create-btn'>Save Details</Button>

                <Button variant="contained" onClick={CancelEvent} size="small" className=''>Cancel</Button>


            </form>

        </>
    )
}

export default AddGroups