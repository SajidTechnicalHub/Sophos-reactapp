import React from 'react'
import Templates from '../../Email/EmailTemplates/Templates'
const AttackEmailTemplate = () => {
  return (
    <>
     <div className="attack-email-edit-block">
                <div className="row">
                    <div className="col-lg-8 order-class-2">
                        <div class="card text-center">
                            <div class="card-header">
                                <span className='edit-text'> Edit</span>
                            </div>
                            <div class="card-body edit-attack-template-block">
                                < Templates />
                                
                            </div>
                            <div class="card-footer text-muted">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-2 order-class-1">
                        <div class="card text-center">
                            <div class="card-header">
                                Email Fields
                            </div>
                            <div class="card-body">
                                <div className="email-field-block">
                                <div className="email-field-content">
                                    <span>Link URL<span className='estaric'>*</span></span>
                                    <span>[Linkurl]</span>
                                </div>

                                <div className="email-field-content">
                                    <span>Recipient First Name</span>
                                    <span>[FirstName]</span>
                                </div>

                                <div className="email-field-content">
                                    <span>Recipient Last Name</span>
                                    <span>[LastName]</span>
                                </div>

                                <div className="email-field-content">
                                    <span>Recipient Email</span>
                                    <span>[Email]</span>
                                </div>
                                <br />
                                <div className="email-field-content">
                                    <span><span className='estaric'>*</span>Required Fields</span>

                                </div>
                                </div>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default AttackEmailTemplate