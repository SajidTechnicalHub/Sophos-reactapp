import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'


const AddEmailProfile = (props) => {
    let navigate = useNavigate();
    const [input, setInput] = useState({
        profilename: '',
        servername:'',
        port: '',
        username:'',
        password:'',
        fromemail:''

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
        // alert(`Profiel Name: ${input.profilename}, Email: ${input.fromemail} `)

        setInput({
            profilename: '',
            servername:'',
            port: '',
            username:'',
            password:'',
            fromemail:''
        })
        props.Cancel()
        // navigate("/Sophos-reactapp/admin/emailSetup");


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
                            <label htmlFor="profilename" className="form-label">Profile Name<span className='estaric'>*</span></label>
                            <input type="text"
                                name="profilename"
                                value={input.profilename}
                                onChange={InputEvent}
                                // className="form-control"
                                required="required"
                                placeholder='Enter Profile Name'
                            />

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-4 input-field-block">
                            <label htmlFor="servername" className="form-label">Server Name<span className='estaric'>*</span></label>
                            <input type="text"
                                name="servername"
                                value={input.servername}
                                onChange={InputEvent}
                                // className="form-control"
                                required="required"
                                placeholder='smtp.gmail.com'
                            />

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-4 input-field-block ">
                            <label htmlFor="port" className="form-label">Port<span className='estaric'>*</span></label>
                            <input type="text"
                                name="port"
                                value={input.port}
                                onChange={InputEvent}
                                // className="form-control"
                                required="required"
                                placeholder='Enter Port No'
                            />

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-4 input-field-block">
                            <label htmlFor="username" className="form-label">Username<span className='estaric'>*</span></label>
                            <input type="email"
                                name="username"
                                value={input.username}
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
                        <div className="mb-4 input-field-block ">
                            <label htmlFor="password" className="form-label">Password<span className='estaric'>*</span></label>
                            <input type="password"
                                name="password"
                                value={input.password}
                                onChange={InputEvent}
                                // className="form-control"
                                required="required"
                                placeholder='Enter Password'
                            />

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-4 input-field-block">
                            <label htmlFor="fromemail" className="form-label">From Email<span className='estaric'>*</span></label>
                            <input type="email"
                                name="fromemail"
                                value={input.fromemail}
                                onChange={InputEvent}
                                // className="form-control"
                                required="required"
                                placeholder='username@gmail.com'
                            />

                        </div>
                    </div>
                </div>
                <br />
                <br />
                <Button variant="contained" type='submit' size="small"  className='project-create-btn'>Save Details</Button>

                <Button variant="contained" onClick={CancelEvent} size="small" className='project-create-btn'>Cancel</Button>


            </form>

        </>
    )
}

export default AddEmailProfile