import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import useWindowDimensions from '../../../useWindowDimensions';
import RestoreProductDefaut from './RestoreProductDefault';

const CaughtLanding = () => {
    const { height, width } = useWindowDimensions();
    
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

export default CaughtLanding