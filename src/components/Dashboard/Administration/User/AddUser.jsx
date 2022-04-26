import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'


const AddUser = (props) => {
    let navigate = useNavigate();
    const [input, setInput] = useState({
        // username: '',
        username: '',
        email: '',
        project_type: '',
        project_avatar: '',
        project_description: '',
        avatar: '',
        role: '',
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
            username: '',
            email: '',
            project_type: '',
            project_avatar: '',
            project_description: '',
            avatar: '',
            role: '',
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
                            <label htmlFor="username" className="form-label">Full Name<span className='estaric'>*</span></label>
                            <input type="text"
                                name="username"
                                value={input.username}
                                onChange={InputEvent}
                                // className="form-control"
                                required="required"
                                placeholder='Enter Full Name'
                            />

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-4 input-field-block">
                            <label htmlFor="email" className="form-label">Email<span className='estaric'>*</span></label>
                            <input type="Email"
                                name="email"
                                value={input.email}
                                onChange={InputEvent}
                                // className="form-control"
                                required="required"
                                placeholder='username@gmail.com'
                            />

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-1  input-field-block">
                            <label htmlFor="role" className="form-label">Role<span className='estaric'>*</span></label>
                            <select type="text"
                                name="role"
                                value={input.role}
                                onChange={InputEvent}
                                // className="form-control"
                                required="required" >
                                <option >User</option>
                                <option >Global Admin</option>
                                <option >Project Admin</option>
                                <option >Simulation Admin</option>
                                <option >Global Reader</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6">

                    </div>
                </div>

                <div className="row mb-5 ">
                    <h5>Add Groups</h5>
                    <div className="col-lg-6">
                        <h4>Available Groups</h4>
                        <div className='add-user-model-group-content'>
                            <input type="text" placeholder='Search' className='add-user-model-group-content-input' />
                            <div className="model-group-selection">

                                <input type="checkbox" className='model-group-selection-checkbox' />
                                <label htmlFor="role" className="">Available Groups</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h4>Assigned Groups</h4>
                        <div className='add-user-model-group-content'>
                            <input type="text" placeholder='Search' className='add-user-model-group-content-input' />
                            <div className="model-group-selection">

                                <input type="checkbox" className='model-group-selection-checkbox' />
                                <label htmlFor="role" className="">Assigned Groups</label>
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

export default AddUser