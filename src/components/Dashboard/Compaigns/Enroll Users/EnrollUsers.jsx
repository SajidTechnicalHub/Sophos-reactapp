import React, { useState } from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import GroupIcon from '@mui/icons-material/Group';

const EnrollUsers = () => {
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

                <span className='available-users-text'>AVAILABLE USERS</span>
              </div>
              <span>1</span>
            </div>
          </div>

          <div class="card-body ">
            <div className='available-users-block'>
              <div className="available-users">

                <FormControlLabel
                  disabled control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange}
                      size='small'
                      name="checkedA"
                      color="primary"
                    />
                  }
                // label="Primary"
                />

                <span className='available-users-text'><GroupIcon />Phishing Phishing</span>
              </div>
            </div>
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

export default EnrollUsers