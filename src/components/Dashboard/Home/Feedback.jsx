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
      <p>Your feedback helps us create an elite product features and services for you 
        and for all of our customers. 
        It’ll only take one minute and will be invaluable for us!</p>

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