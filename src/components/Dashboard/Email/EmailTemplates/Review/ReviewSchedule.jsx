import React, { useState } from 'react'
import Templates from '../Templates'

const ReviewSchedule = (props) => {
  const [radioBotton, setRadioBotton] = useState('1')
  const [input, setInput] = useState({
    date_time: ''
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setInput(() => {
      return { ...input, [name]: value }
    })
    // props.setActiveClass4('2')
    if (input.date_time != null) {
      props.setActiveClass4('2')
    } else {
      props.setActiveClass4('')
    }

  }

  const handleRadioBotton = (value) => {
    if (value == '1') {
      setRadioBotton('1')
      if (input.date_time != '') {
        props.setActiveClass4('2')
      } else {
        props.setActiveClass4('')
      }

    } else {
      setRadioBotton('2')
      props.setActiveClass4('2')

    }
  }

  return (
    <React.Fragment>
      <div className='review-schedule'>
        <div className="auto-enroll-block ">

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
        
        {radioBotton == '' || radioBotton == '1' ?
          <div className="review-date-pikker">
            <input type="datetime-local"
              name="date_time"
              value={input.date_time}
              onChange={InputEvent}
            />
          </div> :
          <p className='language-text'>This option will immediately launch the email campaign.</p>
        }



        <span>Email</span>
        <hr />
        <br />
        <div className="review-email-block">
          <div className="review-email-template">
            <Templates />
          </div>
          <div className="review-email-details">
            <span style={{ fontWeight: 'bold' }}>Email Details</span>
            <span className="review-inner-email-details-block">
              <span className="review-field-name">Sender Name:</span>
              <span className="review-email-field-details">LinkedIns</span>
            </span>
            <span className="review-inner-email-details-block">
              <span className="review-field-name">Sender Email:</span>
              <span className="review-email-field-details">do-not-reply@linkedin.com</span>
            </span>
            <span className="review-inner-email-details-block">
              <span className="review-field-name">Email Subject:</span>
              <span className="review-email-field-details">Confirmation of LinkedIn account closure</span>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ReviewSchedule