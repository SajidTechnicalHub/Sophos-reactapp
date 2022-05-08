import React from 'react'
import useWindowDimensions from '../../useWindowDimensions'
import './EmailTemplates.css'
import img from '../Learning Hub/Images/video1.png'

const EmailTemplateData = [
  {
    id: 1,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'Special title treatment',
    description: 'With supporting text below as a natural.',
    btn: 'Click to see more',
    type: 'Featured',
    days: '2 Days ago'

  },
  {
    id: 2,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'Special title treatment',
    description: 'With supporting text below as a natural.',
    btn: 'Click to see more',
    type: 'Featured',
    days: '3 Days ago'

  },
  {
    id: 3,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'Special title treatment',
    description: 'With supporting text below as a natural.',
    btn: 'Click to see more',
    type: 'Simple',
    days: '2 Days ago'

  },
  {
    id: 4,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'Special title treatment',
    description: 'With supporting text below as a natural.',
    btn: 'Click to see more',
    type: 'Simple',
    days: '5 Days ago'

  },
  {
    id: 5,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'Special title treatment',
    description: 'With supporting text below as a natural.',
    btn: 'Click to see more',
    type: 'Featured',
    days: '2 Days ago'

  },

]
const EmailTemplates = () => {
  // const { height, width } = useWindowDimensions();

  return (
    <>
        <div className="breadcrumb ">
          <span className='breadcrumb-items'>Email Templates</span>

        </div>
     
      <div className="users-container px-3">
      <div className="row">
        {
          EmailTemplateData.map((currentElem) => {
            return (
              <>
                <div className="col-lg-4 g-3">
                  <div className="card text-center email-card">
                    <div className='email-featred'></div>
                    <span className="rotate">{currentElem.type}</span>
                    {/* <div className="card-header">
                      Featured
                    </div> */}
                    <div className="card-body ">
                      <div className="learning-video">
                        <img src={img} className="video-thumbnail" alt='' />
                      </div>
                      <h6 className="card-title">{currentElem.title}</h6>
                      <p className="card-text">{currentElem.description}</p>
                      <a href="#" className="btn btn-primary">{currentElem.btn}</a>
                    </div>
                    
                  </div>
                </div>
              </>
            )
          })
        }


      </div>
      </div>

    </>
  )
}

export default EmailTemplates
