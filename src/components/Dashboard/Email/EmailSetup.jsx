import React from 'react'
import './EmailSetup.css'
import img from '../Learning Hub/Images/video1.png'

const EmailTemplates = [
  {
    id: 1,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'Special title treatment',
    description: 'With supporting text below as a natural lead-in to additional content.',
    btn: 'Click to see more',
    type:'Featured',
    days:'2 Days ago'

  },
  {
    id: 2,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'Special title treatment',
    description: 'With supporting text below as a natural lead-in to additional content.',
    btn: 'Click to see more',
    type:'Featured',
    days:'3 Days ago'

  },
  {
    id: 3,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'Special title treatment',
    description: 'With supporting text below as a natural lead-in to additional content.',
    btn: 'Click to see more',
    type:'Simple',
    days:'2 Days ago'

  },
  {
    id: 4,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'Special title treatment',
    description: 'With supporting text below as a natural lead-in to additional content.',
    btn: 'Click to see more',
    type:'Simple',
    days:'5 Days ago'

  },
  {
    id: 5,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'Special title treatment',
    description: 'With supporting text below as a natural lead-in to additional content.',
    btn: 'Click to see more',
    type:'Featured',
    days:'2 Days ago'

  },
  
]

const EmailSetup = () => {
  return (
    <>

      <div className=''>EmailSetup</div>
      <div className="row">
        {
          EmailTemplates.map((currentElem) => {
            return (
              <>
                <div className="col-lg-4 gy-3">
                  <div className="card text-center email-card">
                    <div className='email-featred'></div>
                    <span className="rotate">{currentElem.type}</span>
                    <div className="card-header">
                      Featured
                    </div>
                    <div className="card-body ">
                      <div className="learning-video">
                        <img src={img} className="video-thumbnail" alt='' />
                      </div>
                      <h5 className="card-title">{currentElem.title}</h5>
                      <p className="card-text">{currentElem.description}</p>
                      <a href="#" className="btn btn-primary">{currentElem.btn}</a>
                    </div>
                    {/* <div className="card-footer text-muted">
                      {currentElem.days}
                    </div> */}
                  </div>
                </div>
              </>
            )
          })
        }


      </div>

    </>
  )
}

export default EmailSetup