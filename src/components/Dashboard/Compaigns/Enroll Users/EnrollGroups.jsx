import React, { useState } from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GroupIcon from '@mui/icons-material/Group';

const EnrollGroups = () => {
  const [q, setQ] = useState("")
  const [q1, setQ1] = useState("")
  const [checkbox, setCheckbox] = useState()
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false


  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });

  };
  return (
    <>
      <div className="enroll-user-block">
        <div class="card">
          <div class="card-header">
            <span className='enroll-user-search'>
              <SearchIcon fontSize='small' className='enroll-user-search-icon' />
              <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder='Search Here.' className='enroll-user-input-search' />
            </span>
          </div>
          <div class="card-header">
            <div className='available-users-block'>
              <div className="available-users">

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleChange}
                      size='small'
                      name="checkedB"
                      color="primary"
                    />
                  }
                // label="Primary"
                />

                <span className='available-users-text'>AVAILABLE USERS GROUPS</span>
              </div>
              <span>0</span>
            </div>
          </div>

          <div class="card-body ">
            
          </div>
        </div>

        <div className="enroll-user-errow-block">
          <span className='enroll-errow-block'><ChevronRightIcon /></span>
          <span className='enroll-errow-block'><ChevronLeftIcon /></span>
        </div>

        <div class="card">
          <div class="card-header">
            <span className='enroll-user-search'>
              <SearchIcon fontSize='small' className='enroll-user-search-icon' />
              <input type="text" value={q1} onChange={(e) => setQ1(e.target.value)} placeholder='Search Here.' className='enroll-user-input-search' />
            </span>
          </div>
          <div class="card-header">
            <div className='available-users-block'>
              <div className="available-users">

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedC}
                      onChange={handleChange}
                      size='small'
                      name="checkedC"
                      color="primary"
                    />
                  }
                // label="Primary"
                />

                <span className='available-users-text'>	CAMPAIGN RECIPIENTS</span>
              </div>
              <span>0</span>
            </div>
          </div>

          <div class="card-body ">
           
          </div>
        </div>
      </div>
    </>
  )
}

export default EnrollGroups