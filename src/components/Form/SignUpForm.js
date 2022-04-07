
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUpForm = () => {

    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: '',
        job_role: '',
        phone: '',
        company: '',
        company_size: '',
        state: '',
        zip_code: '',
        country:''
    });

    // Sign Up Form part Hide show CSS Classes
    const Hide = {
        display: 'none'
    }
    const Show = {
        display: 'inline'
    }
    const NextChangeClass = () => {
        // alert('Clicked next button')
        setBeforenext(Hide)
        setNext(Show)
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
        // alert(`Your Fname: ${input.fname} and LName is: ${input.lname}, role:${input.job_role}, Phone: ${input.phone}, company: ${input.company}  `)
        setInput({
            fname: '',
            lname: '',
            email: '',
            job_role: '',
            phone: '',
            company: '',
            company_size: '',
            state: '',
            zip_code: '',
            country:''

        })
    }
    return (
        <>
            <form onSubmit={SubmitEvent} >
                <div className='' style={beforenext}>
                    <div className="mb-3">
                        <label for="Inputfname" className="form-label">First Name</label>
                        <input type="text"
                            name="fname"
                            value={input.fname}
                            onChange={InputEvent}
                            className="form-control"
                        />

                    </div>
                    <div className="mb-3">
                        <label for="lname" className="form-label">Last Name</label>
                        <input type="text"
                            name="lname"
                            value={input.lname}
                            onChange={InputEvent}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email"
                            name="email"
                            value={input.email}
                            onChange={InputEvent}
                            className="form-control"
                        />

                    </div>
                    <button className="form-btn" onClick={NextChangeClass}>Next</button>
                    <p className='signup-para'>
                        By submitting this form, you consent to be contacted about Sophos products
                        and services from members of the Sophos group of companies and selected
                        companies who partner with us to provide our products and services.
                        Sophos is committed to safeguarding your privacy. If you want more information
                        on how we collect and use your personal data, please read our <a href='#'> privacy notice</a>
                        and <a href='#'>cookie information</a> page.</p>

                </div>
                {/* After Next Button */}
                <div className='' style={next}>
                    <div className="mb-3">
                        <label for="job_role" className="form-label">Job Role</label>
                        <select type="text"
                            name="job_role"
                            value={input.job_role}
                            onChange={InputEvent}
                            className="form-control" >

                            <option selected="selected">- Select -</option>

                            <option >IT Executive (CIO/CISO)</option>

                            <option value="IT Director/Manager">IT Director/Manager</option>

                            <option >IT Network/Systems Admin</option>

                            <option >IT Analyst/Consultant/Other</option>

                            <option >Non-IT Executive (CEO/CFO)</option>

                            <option >Non-IT Professional (Sales/HR)</option>

                            <option >Reseller/MSP/Distributor</option>
                            <option >Home User/Student/Faculty</option>
                        </select>

                    </div>

                    <div className="mb-3">
                        <label for="phone" className="form-label">Phone Number</label>
                        <input type="text"
                            name="phone"
                            value={input.phone}
                            onChange={InputEvent}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label for="company" className="form-label">Company</label>
                        <input type="text"
                            name="company"
                            value={input.company}
                            onChange={InputEvent}
                            onClick={CompanyEvent}
                            className="form-control"
                        />
                        <a href="#">Where does this information come from?</a>
                    </div>



                    <div className='' style={afternext}>
                        <div className="mb-3">
                            <label for="industry" className="form-label">Industry</label>
                            <select type="text"
                                name="industry"
                                value={input.industry}
                                onChange={InputEvent}
                                className="form-control" >
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
                            <label for="company_size" className="form-label">Company Size</label>
                            <input type="number"
                                name="company_size"
                                value={input.company_size}
                                onChange={InputEvent}
                                className="form-control"
                                min='1'
                            />
                        </div>
                        <div className="mb-3">
                            <label for="country" className="form-label">Country</label>
                            <select type="text"
                                name="country"
                                value={input.country}
                                onChange={InputEvent}
                                className="form-control"
                                required="required"
                                aria-required="true"
                             >
                                <option value="" selected="selected">- Select -</option>
                                <option value="US">United States</option>
                                <option value="GB">United Kingdom</option>
                                <option value="CA">Canada</option>
                                <option value="AU">Australia</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua &amp; Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia</option>
                                <option value="BA">Bosnia &amp; Herzegovina</option>
                                <option value="BW">Botswana</option>
                                <option value="BR">Brazil</option>
                                <option value="VG">British Virgin Islands</option>
                                <option value="BN">Brunei</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CV">Cape Verde</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">Central African Republic</option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo - Brazzaville</option>
                                <option value="CD">Congo - Kinshasa</option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="CI">Côte d’Ivoire</option>
                                <option value="HR">Croatia</option>
                                <option value="CW">Curaçao</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czechia</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="TL">East Timor</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FK">Falkland Islands</option>
                                <option value="FO">Faroe Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GG">Guernsey</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong SAR China</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IM">Isle of Man</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JE">Jersey</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">Laos</option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">Libya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macao SAR China</option>
                                <option value="MK">Macedonia</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MP">Mariana Islands</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">Micronesia</option>
                                <option value="UM">U.S. Minor Outlying Islands</option>
                                <option value="MD">Moldova</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="AN">Netherlands Antilles</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU"> Niue Island</option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PS">Palestinian Territories</option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn Islands</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="ME">Republic of Montenegro</option>
                                <option value="RS">Republic of Serbia</option>
                                <option value="RE">Réunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russian Federation</option>
                                <option value="RW">Rwanda</option>
                                <option value="SH">Saint Helena</option>
                                <option value="KN">Saint Kitts &amp; Nevis</option>
                                <option value="LC">Saint Lucia</option>
                                <option value="PM">Saint Pierre &amp; Miquelon</option>
                                <option value="VC">Saint Vincent &amp; Grenadines</option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">São Tomé &amp; Príncipe</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SX">Sint Maarten</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="KR">South Korea</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SR">Suriname</option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="TW">Taiwan</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">Tanzania</option>
                                <option value="TH">Thailand</option>
                                <option value="BS">The Bahamas</option>
                                <option value="TG">Togo</option>
                                <option value="TK">Tokelau</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad &amp; Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">Turks &amp; Caicos Islands</option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VA">Vatican City</option>
                                <option value="VE">Venezuela</option>
                                <option value="VN">Vietnam</option>
                                <option value="VI">Virgin Islands (U.S.A.)</option>
                                <option value="WF">Wallis &amp; Futuna</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                            </select>
                        </div>


                        <div className="mb-3">
                            <label for="state" className="form-label">State</label>
                            <input type="text"
                                name="state"
                                value={input.state}
                                onChange={InputEvent}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="zip_code" className="form-label">Zip Code</label>
                            <input type="text"
                                name="zip_code"
                                value={input.zip_code}
                                onChange={InputEvent}
                                className="form-control"
                            />
                        </div>

                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="Check2" />
                        <label className="form-check-label check-text" for="Check2">
                            I agree to all the terms and conditions in the <a href=''>  Sophos End User Terms of Use</a>.
                        </label>
                    </div>
                    <div className='submit-btn'>
                        <button type="submit" className="form-btn">Sign Up</button>
                        {/* <Link to="login">
                        <span className="btn btn-primary">Login</span>
                    </Link> */}
                    </div>
                </div>
            </form>

        </>
    )
}

export default SignUpForm