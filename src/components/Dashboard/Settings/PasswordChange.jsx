import React, { useState } from 'react'
// import img from './user1.png'

const PasswordChange = () => {
  const [input, setInput] = useState({
    currentPassword: '',
    newPassword: '',
    username: '',

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
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',

    })
  }
  return (
    <>
      <h5 >Password Change</h5>
      <div className="row">
        <div className="col-lg-8">
          <form onSubmit={SubmitEvent} className='input-field'>
            <div className="mb-4 input-field-block ">
              <label htmlFor="currentPassword" className="form-label">Current Password<span className='estaric'>*</span></label>
              <input type="password"
                name="currentPassword"
                value={input.currentPassword}
                onChange={InputEvent}
                // className="form-control"
                required="required"
                placeholder='Current Password'
              />
            </div>

            <div className="mb-4 input-field-block ">
              <label htmlFor="newPassword" className="form-label">New Password<span className='estaric'>*</span></label>
              <input type="password"
                name="newPassword"
                value={input.newPassword}
                onChange={InputEvent}
                // className="form-control"
                required="required"
                placeholder='New Password'
              />
            </div>

            <div className="mb-4 input-field-block ">
              <label htmlFor="confirmPassword" className="form-label">Current Password<span className='estaric'>*</span></label>
              <input type="password"
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={InputEvent}
                // className="form-control"
                required="required"
                placeholder='Confirm Password'
              />
            </div>

            
            <button className='account-setting-btn'>Save</button>
          </form>
        </div>
        <div className="col-lg-4">
          <img src="../passwordChange.png" className='password-change-img' alt="img" />
        </div>
       
      </div>
      <hr />
     
    </>
  )
}

export default PasswordChange