import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'


const EditProject = (props) => {
    let navigate = useNavigate();
    const [input, setInput] = useState({
        // username: '',
        project_name: '',
        url: '',
        project_type: '',
        project_avatar: '',
        project_description: '',
        avatar:'',
        lead: '',
    });
   
    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInput(() => {
            return { ...input, [name]: value }
        })
    }
    const SubmitEvent = (e) => {
        e.preventDefault()
        // alert(`Project Name: ${input.project_name}, URE:: ${input.url} `)
     
        setInput({
            project_name: '',
            url: '',
            project_type: '',
            project_avatar: '',
            project_description: '',
            avatar:'',
            lead: '',
        })
        navigate("/Sophos-reactapp");
       
    }

    const CancelEvent =() =>{
        props.Cancel()
    }
   
    return (
        <>

            <form onSubmit={SubmitEvent} className='create-project-model-form'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-4">
                            <label htmlFor="project_name" className="form-label">Project Name<span className='estaric'>*</span></label>
                            <input type="text"
                                name="project_name"
                                value={input.project_name}
                                onChange={InputEvent}
                                className="form-control"
                                required="required"
                                placeholder='Project Name'
                            />

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-4">
                            <label htmlFor="url" className="form-label">URL<span className='estaric'>*</span></label>
                            <input type="text"
                                name="url"
                                value={input.url}
                                onChange={InputEvent}
                                className="form-control"
                                required="required"
                                placeholder='URL'
                            />

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-4">
                            <label htmlFor="lead" className="form-label">Project Lead<span className='estaric'>*</span></label>
                            <select type="text"
                                name="lead"
                                value={input.lead}
                                onChange={InputEvent}
                                className="form-control"
                                required="required" >

                                <option >- Select -</option>

                                <option >Admin</option>

                                <option >User</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-4">
                            <label htmlFor="project_type" className="form-label">Project Type<span className='estaric'>*</span></label>
                            <select type="text"
                                name="project_type"
                                value={input.project_type}
                                onChange={InputEvent}
                                className="form-control"
                                required="required" >

                                <option >- Select -</option>

                                <option >Business</option>

                                {/* <option ></option> */}
                            </select>
                        </div>

                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="avatar" className="form-label">Avatar<span className='estaric'>*</span></label>
                    <input type="file"
                        name="avatar"
                        value={input.avatar}
                        onChange={InputEvent}
                        className="form-control avatar-file"
                        required="required"
                        
                    />

                </div>

                <div className="mb-4">
                    <label htmlFor="project_description" className="form-label">Description<span className='estaric'>*</span></label>
                    <textarea type="text"
                        name="project_description"
                        value={input.project_description}
                        onChange={InputEvent}
                        className="form-control"
                        required="required"
                        placeholder='Description'
                    />

                </div>
                

                <Button variant="contained" type='submit' size="small" className='project-create-btn'>Update</Button>

                <Button variant="contained" onClick={CancelEvent} size="small" className=''>Cancel</Button>


            </form>

        </>
    )
}

export default EditProject