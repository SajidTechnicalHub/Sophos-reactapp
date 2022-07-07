import React, { useState } from 'react'

const ReviewSchedule = () => {
  const [radioBotton, setRadioBotton] = useState('')

  const handleRadioBotton = (value) => {
    if (value == '1') {
      setRadioBotton('1')
    } else {
      setRadioBotton('2')

    }
  }
  return (
    <React.Fragment>
      <div className="auto-enroll-block review-schedule">

        <div class="form-check">
          <input className="form-check-input" name='radioBotton' value='1' onClick={() => handleRadioBotton('1')} type="radio" id="flexRadioDefault1" defaultChecked />
          <label className="form-check-label" for="flexRadioDefault1">
            <span className='auto-enroll-user-text'>Launch at scheduled time</span>
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" name='radioBotton' value='2' onClick={() => handleRadioBotton('2')} type="radio" id="flexRadioDefault1" />
          <label className="form-check-label" for="flexRadioDefault1">
            <span className='auto-enroll-user-text'>Launch immediately</span>
          </label>
        </div>


      </div>
      <div className="review-date-pikker">
        {/* <input type="date" id="birthday" name="birthday" /> */}
        <input type="datetime-local" id="birthday" name="birthday" />
       
      </div>
    </React.Fragment>
  )
}

export default ReviewSchedule