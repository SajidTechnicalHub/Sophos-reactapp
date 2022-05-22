import React from 'react'
import './Templates.css'
const Templates = () => {
  return (
    <>
      <div className='template-container'>
        <div className="template-body">
          <div className="template-header">
            <div className="template-title">Linked<span className='template-title-icon'>In</span></div>

            <p><strong>(First Name), we're sorry to see you go.</strong></p>
            <br />
          </div>
          
          <div className="body-text">
            <p>Closing your account will delete any recommendations or endorsements <br />
              you've given or received, plus your messages and connections.</p>
            <p ><strong>You can reopen your account in most case if it's been closed less <br />
              than 2 days, by clicking on the link below.</strong></p>
            <br />
            <button className='btn btn-primary'>Reopen Your Account</button>
            <hr />
            <p>LinkedIn is social network and online plateform for professionals. <a href=''>Learn More</a></p>
          </div>

          <div className="template-footer">
            <div className="template-unsub">
              <div><p>Unsubscribe</p></div>
              <div className='template-verticle-line'></div>
              <div><p>Help</p></div>
            </div>
          </div>
          <p>This email was sent to (First Name) (Last Name).</p>
          <div className="template-title">Linked<span className='template-title-icon'>In</span></div>
          <br />
        </div>

      </div>
    </>
  )
}

export default Templates