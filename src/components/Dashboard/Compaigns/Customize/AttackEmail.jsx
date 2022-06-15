import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import Templates from '../../Email/EmailTemplates/Templates'

const AttackEmail = () => {


    const [input, setInput] = useState({
        fromname: '',
        fromemail: '',
        emailsubject: '',
        username: '',
        password: '',
        fromemail: ''

    });

    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInput(() => {
            return { ...input, [name]: value }
        })
    }
    const SubmitEvent = (e) => {
        e.preventDefault()
        // alert(`Profiel Name: ${input.fromname}, Email: ${input.fromemail} `)

        setInput({
            fromname: '',
            fromemail: '',
            emailsubject: '',
            username: '',
            password: '',
            fromemail: ''
        })



    }

    return (
        <>

            <form onSubmit={SubmitEvent} className='input-field'>
                <div className="attack-eamil-form">
                    <div className="mb-4 input-field-block ">
                        <label htmlFor="fromname" className="form-label">From Name<span className='estaric'>*</span></label>
                        <input type="text"
                            name="fromname"
                            value={input.fromname}
                            onChange={InputEvent}
                            // className="form-control"
                            required="required"
                            placeholder='Enter From Name'
                        />

                    </div>

                    <div className="mb-4 input-field-block">
                        <label htmlFor="fromemail" className="form-label">Dimain Name<span className='estaric'>*</span></label>
                        {/* <input type="email"
                            name="fromemail"
                            value={input.fromemail}
                            onChange={InputEvent}
                            // className="form-control"
                            required="required"
                            placeholder='smtp.gmail.com'
                        /> */}
                        <select 
                        name="fromemail"
                        value={input.fromemail}
                        onChange={InputEvent}
                        required="required"
                        >
                            <option>--Select Domain Name--</option>
                            <option>Domain_name@gmail.com</option>
                            <option>Domain_name@outlook.com</option>
                        </select>

                    </div>

                    <div className="mb-3  attack-email-form-check">
                        <input type="checkbox" className="form-check-inpu" id="Check2" />
                        <label className="form-check-label check-text" htmlFor="Check2">
                            Use a sub-domain on Phishing URL replacements.
                        </label>
                    </div>

                    <div className="mb-2 input-field-block ">
                        <label htmlFor="emailsubject" className="form-label">Email Subject<span className='estaric'>*</span></label>
                        <input type="text"
                            name="emailsubject"
                            value={input.emailsubject}
                            onChange={InputEvent}
                            // className="form-control"
                            required="required"
                            placeholder='Enter Email Subject'
                        />

                    </div>


                </div>

                <br />

                {/* <Button variant="contained" type='submit' size="small" className='project-create-btn'>Save Details</Button> */}

            </form>

           
        </>
    )
}

export default AttackEmail