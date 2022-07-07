import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ChooseAttack from './ChooseAttack';
import Customize from './Customize/Customize'
import useWindowDimensions from '../../useWindowDimensions';
import BugReportIcon from '@material-ui/icons/BugReport';
import SecurityIcon from '@material-ui/icons/Security';
import EnrollUsersHome from './Enroll Users/EnrollUsersHome';
import { Link, useNavigate } from 'react-router-dom';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import LinkIcon from '@mui/icons-material/Link';
import AllEnrollTargerUsers from './Enroll Users/AllEnrollTargerUsers';
import SearchIcon from '@mui/icons-material/Search';
import ReviewSchedule from '../Email/EmailTemplates/Review/ReviewSchedule';

const steps = ['Get Started', 'Choose Attack Payload', 'Customize', 'Enroll Target Users', 'Review & Schedule'];

const CompaignType = [
    {
        id: 1,
        icon: <LinkIcon />,
        name: 'Drive-By URL',
        desc: 'Lure targeted user to click on a link in an email.',
    },
    {
        id: 2,
        icon: <EnhancedEncryptionIcon />,
        name: 'Credential Harvesting',
        desc: 'Lure targeted user to enter credentials into a fack website. Note no passwords are collected.',
    },
    {
        id: 3,
        icon: <AttachFileIcon />,
        name: 'Attachment',
        desc: 'Lure targeted user to open a attachment within an email.',
    },
    {
        id: 4,
        icon: <BugReportIcon />,
        name: 'Malware Attack',
        desc: 'Lure targeted user to open a attachment within an email.',
    },
    {
        id: 5,
        icon: <SecurityIcon />,
        name: 'OAuth Concent Grant',
        desc: 'Lure the targeted user to grant the application permissions over some of the target’s data.',
    },

]
const nextAllowed = {

    cursor: 'pointer',

}
const nextNotAllowed = {

    // cursor: 'not-allowed', 
    pointerEvents: 'none',
    color: 'grey'
}

const AddCompaigns = () => {

    let navigate = useNavigate();
    const { height, width } = useWindowDimensions();
    const [radioBotton, setRadioBotton] = useState('1')

    // *********handle Active Class in all steps**********
    const [activeClass, setActiveClass] = useState()
    const [activeClass1, setActiveClass1] = useState('')
    const [activeClass2, setActiveClass2] = useState()
    const [activeClass3, setActiveClass3] = useState(0)
    const [activeClass4, setActiveClass4] = useState()
    // *********handle Active Class in all steps**********

    const [q, setQ] = useState("")
    const [input, setInput] = useState({

        name: ''
    });

    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInput(() => {
            return { ...input, [name]: value }
        })
    }
    const Search = (users) => {
        return users.filter(
            (row) =>
                row.Name.toLowerCase().indexOf(q) > -1 ||
                row.Name.indexOf(q) > -1

        );
    }

    const handleRadioBotton = (value) => {
        if (value == '1') {
            setRadioBotton('1')
        } else {
            setRadioBotton('2')

        }
    }

    const handleChooseAttack = (id) => {
        if (activeClass1 == '') {
            setActiveClass1(id)
        } else {
            setActiveClass1('')
        }

    }



    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Box sx={{ width: '100%' }}>
            {/* orientation="vertical" */}
            <Stepper activeStep={activeStep} alternativeLabel className='stepper-header' >

                {
                    steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {

                            // I comment the optional

                            // labelProps.optional = (
                            //     <Typography variant="caption">Optional</Typography>
                            // );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}><span className='stepper-label'>{label}</span></StepLabel>
                            </Step>
                        );
                    })

                }

            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        {/* All steps completed - you&apos;re finished */}
                        {navigate("/Sophos-reactapp/admin/compaigns")}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>

                    {
                        // ***************Get Started Step*********************
                        activeStep == 0 ?
                            <div className='stepper-body'>
                                {/* <h6>Get Started</h6> */}
                                {/* <p className="compaign-name">Name Your Compaign</p> */}
                                <div className="mb-4 compaign-input-field-block ">
                                    <label htmlFor="name" className="form-label">Name Your Campaign</label>
                                    <input type="text"
                                        name="name"
                                        value={input.name}
                                        onChange={InputEvent}
                                        // className="form-control"
                                        required="required"
                                        placeholder='Campaign Name'
                                    />

                                </div>

                                <div className="mb-4 compaign-input-field-block ">
                                    <label htmlFor="compaignType" className="form-label">Select Technique</label>
                                    {
                                        CompaignType.map((currentElement, index) => {
                                            return (
                                                <React.Fragment key={currentElement.id}>
                                                    <div className={activeClass == currentElement.id ? "compaign-type-block compaign-type-block-active" : "compaign-type-block"} onClick={e => setActiveClass(currentElement.id)} >
                                                        <div className="compaign-type-icon-block">
                                                            <span className='compaign-type-icon'>{currentElement.icon}</span>
                                                        </div>
                                                        <div className="compaign-type-content-block">
                                                            <div className="compaign-type-heading">{currentElement.name}</div>
                                                            <div className="compaign-type-text">{currentElement.desc}</div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                </React.Fragment>
                                            )
                                        })
                                    }


                                    {/* <div className="mb-4 ">
                                        <label htmlFor="name" className="form-label">Choose Language</label>
                                        <p className='language-text'>This will be language of your email and training materials.</p>
                                        <div className="compaign-language">
                                            <select className="form-select" aria-label="Default select example">
                                                <option value="language">Select Language</option>
                                                <option value="English">English</option>
                                                <option value="Urdu">Urdu</option>

                                            </select>
                                        </div>
                                    </div> */}
                                </div>
                            </div> :

                            // ***************Choose Attack*********************
                            activeStep == 1 ?
                                <div className='stepper-body'>
                                    <div className="mb-4 ">

                                        <ChooseAttack
                                            handleChooseAttack={handleChooseAttack}
                                            activeClass1={activeClass1}
                                        />
                                    </div>

                                </div> :
                                // ***************Customize Step*********************
                                activeStep == 2 ?
                                    <div className='stepper-body customize'>
                                        <div className=" ">
                                            <label htmlFor="name" className="form-label">Customize</label>
                                            <p className='language-text'>This pane helps you update the template and email profile according to your requirements.</p>
                                            <Customize />
                                        </div>
                                    </div> :
                                    // ***************Enroll Users Step*********************
                                    activeStep == 3 ?
                                        <div className='stepper-body'>
                                            <label htmlFor="name" className="form-label">Enroll Target Users</label>
                                            <div className="enroll-users-block">
                                                {/* <span className='enroll-users-text enroll-users-text-bold '>Choose which users will receive this campaign below</span> */}
                                                <span className='enroll-users-text'>Note: You can only add those users in the campaigns who have organizational email addresses.
                                                    Public email addresses (outlook.com, gmail.com, yahoo.com, etc.) are not allowed.
                                                    If the groups contain public email address users, that user will not be part of the campaign.</span>
                                            </div>
                                            <div className="auto-enroll-new-new-block">
                                                <div className="auto-enroll-block">

                                                    <div class="form-check">
                                                        <input className="form-check-input" name='radioBotton' value='1' onClick={() => handleRadioBotton('1')} type="radio" id="flexRadioDefault1" defaultChecked />
                                                        <label className="form-check-label" for="flexRadioDefault1">
                                                            <span className='auto-enroll-user-text'>Include only specific users and groups</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" name='radioBotton' value='2' onClick={() => handleRadioBotton('2')} type="radio" id="flexRadioDefault1" />
                                                        <label className="form-check-label" for="flexRadioDefault1">
                                                            <span className='auto-enroll-user-text'>Include all users in my organization</span>
                                                        </label>
                                                    </div>


                                                </div>
                                                <div className={radioBotton == '1' ? 'hide-search' : 'users-search'}>
                                                    <SearchIcon className='users-search-icon' />
                                                    <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder='Search Here.' className='users-input-search' />

                                                </div>
                                            </div>

                                            {radioBotton == '1' ?
                                                <EnrollUsersHome
                                                    setActiveClass3={setActiveClass3}
                                                    activeClass3={activeClass3}
                                                /> : <AllEnrollTargerUsers
                                                    search={Search}
                                                />
                                            }

                                        </div> :
                                        // ***************eview and Schedule Step*********************
                                        <div className='stepper-body'>
                                        <div className=" ">
                                            <label htmlFor="name" className="form-label">Review and Schedule</label>
                                            <p className='language-text'>Launch immediately: This option will immediately launch the email campaign.</p>
                                            <ReviewSchedule/>
                                        </div>
                                        </div>
                                                
                    }
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className='stepper-back-button'>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                {/* Skip */}
                            </Button>
                        )}

                        {/* handle next button for allowed or not allowed */}
                        {
                            activeStep === 0 ?
                                <Button style={activeClass == null ? nextNotAllowed : nextAllowed} onClick={handleNext} className='stepper-next-button'>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                                :
                                activeStep === 1 ?
                                    <Button style={activeClass1 == '' ? nextNotAllowed : nextAllowed} onClick={handleNext} className='stepper-next-button'>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                    :
                                    activeStep === 2 ?
                                        <Button style={activeClass == null ? nextNotAllowed : nextAllowed} onClick={handleNext} className='stepper-next-button'>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                        :
                                        activeStep === 3 ?
                                            <Button style={activeClass3 == 1 || radioBotton == '2' ? nextAllowed : nextNotAllowed} onClick={handleNext} className='stepper-next-button'>
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                            :
                                            activeStep === 4 ?
                                                <Button style={activeClass == null ? nextNotAllowed : nextAllowed} onClick={handleNext} className='stepper-next-button'>
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                                :
                                                <></>
                        }

                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default AddCompaigns