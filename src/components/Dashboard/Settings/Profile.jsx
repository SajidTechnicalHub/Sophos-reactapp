import React, { useState } from 'react'
// import img from './user1.png'

const Profile = () => {
  const [input, setInput] = useState({
    fname: '',
    lname: '',
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
      fname: '',
      lname: '',
      username: '',

    })
  }
  return (
    <>
        <h5 >Profile</h5>
        <p>This information will be displayed publicaly so be careful what you share. </p>
        <form onSubmit={SubmitEvent} className='input-field'>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-4 input-field-block ">
                <label htmlFor="fname" className="form-label">First Name<span className='estaric'>*</span></label>
                <input type="text"
                  name="fname"
                  value={input.fname}
                  onChange={InputEvent}
                  // className="form-control"
                  required="required"
                  placeholder='Enter First Name'
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-4 input-field-block ">
                <label htmlFor="lname" className="form-label">Last Name<span className='estaric'>*</span></label>
                <input type="text"
                  name="lname"
                  value={input.lname}
                  onChange={InputEvent}
                  // className="form-control"
                  required="required"
                  placeholder='Enter Last Name'
                />
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="mb-4 input-field-block ">
                <label htmlFor="username" className="form-label">User Name<span className='estaric'>*</span></label>
                <input type="text"
                  name="username"
                  value={input.username}
                  onChange={InputEvent}
                  // className="form-control"
                  required="required"
                  placeholder='Username'
                />
              </div>
            </div>

          </div>

          <span className='account-photo'>Photo</span>
          <div className="account-setting-photo-block">
            <img src='../user1.png' className='account-setting-photo' alt="account photo" />
            <span className="account-photo-change">Change</span>
            <span className="account-photo-remove">Remove</span>
          </div>
          <br />
          <button className='account-setting-btn'>Save</button>
        </form>
        <hr />
    </>
  )
}

export default Profile