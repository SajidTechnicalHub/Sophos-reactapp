import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';


const DeleteGroups = (props) => {
    // Store input Values
    const [input, setInput] = useState({
        username: '',

    });
    // Set Input Values
    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInput(() => {
            return { ...input, [name]: value }
        })
    }

    const CancelEvent = () => {
        props.Cancel()
    }
    const DeleteEvent = (id) => {
        // Send id to Projects.jsx handleDelete() so that data can be deleted by using current id
        props.DeleteUser(id)

    }
    return (
        <>
            <div className="delete-user-section">
                <CloseIcon className='delete-close-btn' onClick={CancelEvent} />
                <br />
                <strong><p>Are you absolutely sure?</p></strong>
                <div className="delete-user-info">
                    Unexpected bad things will happen if you don’t read this!
                </div>
                <p>This action <strong>cannot</strong> be undone. This will permanently delete the Group
                    <strong> {props.DeletedData.name}</strong> and remove all collaborator associations.</p>
                <p>Please type <strong>{props.DeletedData.name}</strong> to confirm.</p>
                <input type="text"
                    name="username"
                    value={input.username}
                    onChange={InputEvent}
                    // className="form-control"
                    required="required"
                    placeholder={props.DeletedData.name}
                />
                <div className="delete-user-btn">
                    {
                        input.username === props.DeletedData.name ? <button className='delete' onClick={() => DeleteEvent(props.DeletedData.id)}>Delete</button> :
                            <button className='delete-disable' disabled >Delete Group</button>


                    }
                </div>
            </div>
        </>
    )
}

export default DeleteGroups