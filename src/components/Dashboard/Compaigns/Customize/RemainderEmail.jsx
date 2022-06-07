import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import useWindowDimensions from '../../../useWindowDimensions';
import RestoreProductDefaut from './RestoreProductDefault';

const RemainderEmail = () => {
    const { height, width } = useWindowDimensions();
    const [input, setInput] = useState({
        emailsubject: '',
    });

    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInput(() => {
            return { ...input, [name]: value }
        })
    }
    const SubmitEvent = (e) => {
        e.preventDefault()

        setInput({
            emailsubject: '',
        })



    }
    const style = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "50%",
        height: "51%",
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

    // Handle Product Default Model
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="remainder-email-container">
                <Button onClick={handleOpen} variant="contained" size="small" className='add-users-btn'>Restore to Product Default</Button>

                <form onSubmit={SubmitEvent} className='input-field'>
                    <div className="attack-eamil-form">
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
                </form>
            </div>

            {/* Product Default Model */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width <= 992 ? mobilestyle : style}>
              <RestoreProductDefaut
               Cancel={handleClose}
              />
            </Box>
          </Modal>
        </>
    )
}

export default RemainderEmail