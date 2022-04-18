import {useState} from 'react'
const Feedback = () => {
  const [input, setInput] = useState({
    feedback:''
  });
  const InputEvent = (e) =>{
    const {name, value} = e.target;
    setInput(()=>{
        return{ ...input, [name]:value }
    })
}
  const SubmitEvent = (e) => {
    e.preventDefault()
    alert(`Your feedback: ${input.feedback} `)
    setInput({
      feedback:''
    })
  }

  return (
    <div>
      <p>This is just the beginning. We're invested in building a one-stop
        shop to meet all your security needs across Microsoft 365. But we need your
        help. Join the Windows insider programs to preview and review the latest enhancements.
        Leave feedback right here in Microsoft 365 Defender anytime to help
        us build the right solutions for you.</p>

      <form onSubmit={SubmitEvent} >
        <div className=" mb-3">
          {/* <label htmlFor="InputUsername" className="form-label">Username</label> */}
          <textarea type="text"
            name="feedback"
            value={input.feedback}
            onChange={InputEvent}
            className='feedback'
            required="required"
            placeholder='Give your feedback here!'
            
          />

        </div>
        <button type="submit" className="feedback-btn  mb-3">Submit Feedback</button>
      </form>
    </div>
  )
}

export default Feedback