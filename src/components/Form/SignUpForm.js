
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [firstNameStatus, setFirstNameStatus] = useState(false)
    const [lastNameStatus, setLastNameStatus] = useState(false)
    const [usernameStatus, setUsernameStatus] = useState(false)
    const [emailStatus, setEmailStatus] = useState(false)

    let navigate = useNavigate()
    const [input, setInput] = useState({
        fname: '',
        lname: '',
        username: '',
        email: '',
        job_role: '',
        phone: '',
        company: '',
        company_size: '',
        state: '',
        zip_code: '',
        country: ''
    });

    // Sign Up Form part Hide show CSS Classes
    const Hide = {
        display: 'none'
    }
    const Show = {
        display: 'inline'
    }
   
//     const isValidEmail = email =>
//   // eslint-disable-next-line no-useless-escape
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );


    const NextChangeClass = (e) => {
        e.preventDefault()
        if (input.fname == '') {
            setFirstNameStatus(true)
        } else {
            setFirstNameStatus(false)
        }

        if (input.lname == '') {
            setLastNameStatus(true)
        } else {
            setLastNameStatus(false)
        }

        if (input.username == '') {
            setUsernameStatus(true)
        } else {
            setUsernameStatus(false)
        }
        if (input.email == '') {
            setEmailStatus(true)
        } else {
            setEmailStatus(false)
            // ValidateEmail(input.email)
        }

        if (input.fname != '' && input.lname != '' && input.username != '' && input.email != '') {
            setBeforenext(Hide)
            setNext(Show)
        }

    }
    const [next, setNext] = useState(Hide);
    const [beforenext, setBeforenext] = useState(Show);
    const [afternext, setAfternext] = useState(Hide);

    const CompanyEvent = () => {
        setAfternext(Show)
    }

    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInput(() => {
            return { ...input, [name]: value }
        })


    }
    const SubmitEvent = (e) => {
        e.preventDefault()
        console.log('submit event occure')
        // alert(`Your Fname: ${input.fname} and username is: ${input.username}, role:${input.job_role}, Phone: ${input.phone}, company: ${input.company}  `)
        setInput({
            fname: '',
            lname: '',
            username: '',
            email: '',
            job_role: '',
            phone: '',
            company: '',
            company_size: '',
            state: '',
            zip_code: '',
            country: ''

        })
        navigate('/Sophos-reactapp/projects')
    }
    return (
        <>
            <form onSubmit={SubmitEvent}  >
                <div className='' style={beforenext}>
                    <div className="mb-3">
                        <label htmlFor="Inputfname" className="form-label">First Name<span className='estaric'>*</span></label>
                        <input type="text"
                            id='fanme'
                            name="fname"
                            value={input.fname}
                            onChange={InputEvent}
                            className="form-control"
                        // required="required"
                        />
                        {firstNameStatus == true ?
                            <span className='signup-error-message'>Please fill out this field</span> : <span></span>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lname" className="form-label">Last Name<span className='estaric'>*</span></label>
                        <input type="text"
                            name="lname"
                            value={input.lname}
                            onChange={InputEvent}
                            className="form-control"
                        // required="required"
                        />
                        {lastNameStatus == true ?
                            <span className='signup-error-message'>Please fill out this field</span> : <span></span>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username<span className='estaric'>*</span></label>
                        <input type="text"
                            name="username"
                            value={input.username}
                            onChange={InputEvent}
                            className="form-control"
                        // required="required"
                        />
                        {usernameStatus == true ?
                            <span className='signup-error-message'>Please fill out this field</span> : <span></span>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email<span className='estaric'>*</span></label>
                        <input type="email"
                            name="email"
                            value={input.email}
                            onChange={InputEvent}
                            className="form-control"
                        // required="required"
                        />
                        {emailStatus == true ?
                            <span className='signup-error-message'>Please fill out this field</span> : <span></span>
                        }
                    </div>
                    <div className="nextLogin">
                        <button className="form-btn-next" onClick={NextChangeClass}>Next</button>
                        <Link to="/Sophos-reactapp/free_trail">
                            <span className="btn submit-btn">Back to Login</span>
                        </Link>
                    </div>
                    <p className='signup-para'>
                    By signing this form, you consent to be contacted about PhishCode product updates and services from 
                    members of the PhishCode company and selected companies who partner with us to provide our products and services. 
                    PhishCode is committed to safeguarding your privacy</p>

                </div>
                {/* After Next Button */}
                <div className='' style={next}>
                    <div className="mb-3">
                        <label htmlFor="job_role" className="form-label">Job Role<span className='estaric'>*</span></label>
                        <select type="text"
                            name="job_role"
                            value={input.job_role}
                            onChange={InputEvent}
                            className="form-control"
                            required="required" >

                            <option value='' selected="selected">- Select -</option>

                            <option >IT Executive (CIO/CISO)</option>

                            <option >IT Director/Manager</option>

                            <option >IT Network/Systems Admin</option>

                            <option >IT Analyst/Consultant/Other</option>

                            <option >Non-IT Executive (CEO/CFO)</option>

                            <option >Non-IT Professional (Sales/HR)</option>

                            <option >Reseller/MSP/Distributor</option>
                            <option >Home User/Student/Faculty</option>
                        </select>

                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number<span className='estaric'>*</span></label>
                        <input type="text"
                            name="phone"
                            value={input.phone}
                            onChange={InputEvent}
                            className="form-control"
                            required="required"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="company" className="form-label">Company<span className='estaric'>*</span></label>
                        <input type="text"
                            name="company"
                            value={input.company}
                            onChange={InputEvent}
                            onClick={CompanyEvent}
                            className="form-control"
                            required="required"
                        />
                    </div>



                    <div className='' style={afternext}>
                        <div className="mb-3">
                            <label htmlFor="industry" className="form-label">Industry<span className='estaric'>*</span></label>
                            <select type="text"
                                name="industry"
                                value={input.industry}
                                onChange={InputEvent}
                                className="form-control"
                                required="required" >
                                <option value="" selected="selected">- Select -</option>
                                <option value="Aerospace &amp; Defense">Aerospace &amp; Defense</option>
                                <option value="Biotechnology">Biotechnology</option>
                                <option value="Consumer Products">Consumer Products</option>
                                <option value="Education, Higher Ed/Tertiary">Education, Higher Ed/Tertiary</option>
                                <option value="Education, Primary/Secondary">Education, Primary/Secondary</option>
                                <option value="Entertainment &amp; Media">Entertainment &amp; Media</option>
                                <option value="Financial Services">Financial Services</option>
                                <option value="Government, Local">Government, Local</option>
                                <option value="Government, National/Federal">Government, National/Federal</option>
                                <option value="Government, State/Regional">Government, State/Regional</option>
                                <option value="Healthcare-Private">Healthcare-Private</option>
                                <option value="Healthcare-Public">Healthcare-Public</option>
                                <option value="High Technology">High Technology</option>
                                <option value="ISP">ISP</option><option value="Manufacturing">Manufacturing</option>
                                <option value="Natural Resources">Natural Resources</option>
                                <option value="Non-Profit">Non-Profit</option>
                                <option value="Other">Other</option>
                                <option value="Retail">Retail</option>
                                <option value="Services">Services</option>
                                <option value="Telecommunications">Telecommunications</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Utility">Utility</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="company_size" className="form-label">Company Size<span className='estaric'>*</span></label>
                            <input type="number"
                                name="company_size"
                                value={input.company_size}
                                onChange={InputEvent}
                                className="form-control"
                                required="required"
                                min='1'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">Country<span className='estaric'>*</span></label>
                            <select type="text"
                                name="country"
                                value={input.country}
                                onChange={InputEvent}
                                className="form-control"
                                required="required"

                                aria-required="true"
                            >
                                <option value="" selected="selected">- Select -</option>
                                <option >United States</option>
                                <option >United Kingdom</option>
                                <option >Canada</option>
                                <option >Australia</option>
                                <option >Afghanistan</option>
                                <option >Albania</option>
                                <option >Algeria</option>
                                <option >American Samoa</option>
                                <option >Andorra</option>
                                <option >Angola</option>
                                <option >Anguilla</option>
                                <option >Antarctica</option>
                                <option >Antigua &amp; Barbuda</option>
                                <option >Argentina</option>
                                <option >Armenia</option>
                                <option >Aruba</option>
                                <option >Austria</option>
                                <option >Azerbaijan</option>
                                <option >Bahrain</option>
                                <option >Bangladesh</option>
                                <option >Barbados</option>
                                <option >Belarus</option>
                                <option >Belgium</option>
                                <option >Belize</option>
                                <option >Benin</option>
                                <option >Bermuda</option>
                                <option >Bhutan</option>
                                <option >Bolivia</option>
                                <option >Bosnia &amp; Herzegovina</option>
                                <option >Botswana</option>
                                <option >Brazil</option>
                                <option >British Virgin Islands</option>
                                <option >Brunei</option>
                                <option >Bulgaria</option>
                                <option >Burkina Faso</option>
                                <option >Burundi</option>
                                <option >Cambodia</option>
                                <option >Cameroon</option>
                                <option >Cape Verde</option>
                                <option >Cayman Islands</option>
                                <option >Central African Republic</option>
                                <option >Chad</option>
                                <option >Chile</option>
                                <option >China</option>
                                <option >Colombia</option>
                                <option >Comoros</option>
                                <option >Congo - Brazzaville</option>
                                <option >Congo - Kinshasa</option>
                                <option >Cook Islands</option>
                                <option >Costa Rica</option>
                                <option >Côte d’Ivoire</option>
                                <option >Croatia</option>
                                <option >Curaçao</option>
                                <option >Cyprus</option>
                                <option >Czechia</option>
                                <option >Denmark</option>
                                <option >Djibouti</option>
                                <option >Dominica</option>
                                <option >Dominican Republic</option>
                                <option >East Timor</option>
                                <option >Ecuador</option>
                                <option >Egypt</option>
                                <option >El Salvador</option>
                                <option >Equatorial Guinea</option>
                                <option >Eritrea</option>
                                <option >Estonia</option>
                                <option >Ethiopia</option>
                                <option >Falkland Islands</option>
                                <option >Faroe Islands</option>
                                <option >Fiji</option>
                                <option >Finland</option>
                                <option >France</option>
                                <option >French Guiana</option>
                                <option >French Polynesia</option>
                                <option >Gabon</option>
                                <option >Gambia</option>
                                <option >Georgia</option>
                                <option >Germany</option>
                                <option >Ghana</option>
                                <option >Gibraltar</option>
                                <option >Greece</option>
                                <option >Greenland</option>
                                <option >Grenada</option>
                                <option >Guadeloupe</option>
                                <option >Guam</option>
                                <option >Guatemala</option>
                                <option >Guernsey</option>
                                <option >Guinea</option>
                                <option >Guinea-Bissau</option>
                                <option >Guyana</option>
                                <option >Haiti</option>
                                <option >Honduras</option>
                                <option >Hong Kong SAR China</option>
                                <option >Hungary</option>
                                <option >Iceland</option>
                                <option >India</option>
                                <option >Indonesia</option>
                                <option >Iraq</option>
                                <option >Ireland</option>
                                <option >Isle of Man</option>
                                <option >Israel</option>
                                <option >Italy</option>
                                <option >Jamaica</option>
                                <option >Japan</option>
                                <option >Jersey</option>
                                <option >Jordan</option>
                                <option >Kazakhstan</option>
                                <option >Kenya</option>
                                <option >Kiribati</option>
                                <option >Kuwait</option>
                                <option >Kyrgyzstan</option>
                                <option >Laos</option>
                                <option >Latvia</option>
                                <option >Lebanon</option>
                                <option >Lesotho</option>
                                <option >Liberia</option>
                                <option >Libya</option>
                                <option >Liechtenstein</option>
                                <option >Lithuania</option>
                                <option >Luxembourg</option>
                                <option >Macao SAR China</option>
                                <option >Macedonia</option>
                                <option >Madagascar</option>
                                <option >Malawi</option>
                                <option >Malaysia</option>
                                <option >Maldives</option>
                                <option >Mali</option>
                                <option >Malta</option>
                                <option >Mariana Islands</option>
                                <option >Marshall Islands</option>
                                <option >Martinique</option>
                                <option >Mauritania</option>
                                <option >Mauritius</option>
                                <option >Mayotte</option>
                                <option >Mexico</option>
                                <option >Micronesia</option>
                                <option >U.S. Minor Outlying Islands</option>
                                <option >Moldova</option>
                                <option >Monaco</option>
                                <option >Mongolia</option>
                                <option >Montserrat</option>
                                <option >Morocco</option>
                                <option >Mozambique</option>
                                <option >Myanmar</option>
                                <option >Namibia</option>
                                <option >Nauru</option>
                                <option >Nepal</option>
                                <option >Netherlands</option>
                                <option >Netherlands Antilles</option>
                                <option >New Caledonia</option>
                                <option >New Zealand</option>
                                <option >Nicaragua</option>
                                <option >Niger</option>
                                <option >Nigeria</option>
                                <option > Niue Island</option>
                                <option >Norway</option>
                                <option >Oman</option>
                                <option >Pakistan</option>
                                <option >Palau</option>
                                <option >Palestinian Territories</option>
                                <option >Panama</option>
                                <option >Papua New Guinea</option>
                                <option >Paraguay</option>
                                <option >Peru</option>
                                <option >Philippines</option>
                                <option >Pitcairn Islands</option>
                                <option >Poland</option>
                                <option >Portugal</option>
                                <option >Puerto Rico</option>
                                <option >Qatar</option>
                                <option >Republic of Montenegro</option>
                                <option >Republic of Serbia</option>
                                <option >Réunion</option>
                                <option >Romania</option>
                                <option >Russian Federation</option>
                                <option >Rwanda</option>
                                <option >Saint Helena</option>
                                <option >Saint Kitts &amp; Nevis</option>
                                <option >Saint Lucia</option>
                                <option >Saint Pierre &amp; Miquelon</option>
                                <option >Saint Vincent &amp; Grenadines</option>
                                <option >Samoa</option>
                                <option >San Marino</option>
                                <option >São Tomé &amp; Príncipe</option>
                                <option >Saudi Arabia</option>
                                <option >Senegal</option>
                                <option >Seychelles</option>
                                <option >Sierra Leone</option>
                                <option >Singapore</option>
                                <option >Sint Maarten</option>
                                <option >Slovakia</option>
                                <option >Slovenia</option>
                                <option >Solomon Islands</option>
                                <option >Somalia</option>
                                <option >South Africa</option>
                                <option >South Korea</option>
                                <option >Spain</option>
                                <option >Sri Lanka</option>
                                <option >Suriname</option>
                                <option >Swaziland</option>
                                <option >Sweden</option>
                                <option >Switzerland</option>
                                <option >Taiwan</option>
                                <option >Tajikistan</option>
                                <option >Tanzania</option>
                                <option >Thailand</option>
                                <option >The Bahamas</option>
                                <option >Togo</option>
                                <option >Tokelau</option>
                                <option >Tonga</option>
                                <option >Trinidad &amp; Tobago</option>
                                <option >Tunisia</option>
                                <option >Turkey</option>
                                <option >Turkmenistan</option>
                                <option >Turks &amp; Caicos Islands</option>
                                <option >Tuvalu</option>
                                <option >Uganda</option>
                                <option >Ukraine</option>
                                <option >United Arab Emirates</option>
                                <option >Uruguay</option>
                                <option >Uzbekistan</option>
                                <option >Vanuatu</option>
                                <option >Vatican City</option>
                                <option >Venezuela</option>
                                <option >Vietnam</option>
                                <option >Virgin Islands (U.S.A.)</option>
                                <option >Wallis &amp; Futuna</option>
                                <option >Yemen</option>
                                <option >Zambia</option>
                                <option >Zimbabwe</option>
                            </select>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">State<span className='estaric'>*</span></label>
                            <input type="text"
                                name="state"
                                value={input.state}
                                onChange={InputEvent}
                                className="form-control"
                                required="required"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="zip_code" className="form-label">Zip Code<span className='estaric'>*</span></label>
                            <input type="text"
                                name="zip_code"
                                value={input.zip_code}
                                onChange={InputEvent}
                                className="form-control"
                                required="required"
                            />
                        </div>

                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="Check2" />
                        <label className="form-check-label check-text" htmlFor="Check2">
                             I agree to all the terms and conditions in the <a href=''>PhishCode End User Terms of Use</a>.
                        </label>
                    </div>
                    <div className='submit-btn'>
                        <button type="submit" className="form-btn">Sign Up</button>
                        <Link to="/Sophos-reactapp/free_trail">
                            <span className="btn submit-btn">Back to Login</span>
                        </Link>
                    </div>
                </div>
            </form>

        </>
    )
}

export default SignUpForm