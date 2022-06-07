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

const steps = ['Get Started', 'Choose Attack', 'Customize', 'Enroll Users', 'Review & Schedule'];
const MobileSteps = ['', '', '', '', ''];

const CompaignType = [
    {
        id: 1,
        icon: <TrendingUpIcon />,
        name: 'Phishing',
        desc: 'Lure targeted user to click on a link in an email.',
    },
    {
        id: 2,
        icon: <SettingsIcon />,
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
        name: 'Oauth Concent Grant',
        desc: 'Lure targeted user to open a attachment within an email.',
    },

]


const AddCompaigns = () => {

    const { height, width } = useWindowDimensions();
    const [input, setInput] = useState({

        name: ''
    });

    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInput(() => {
            return { ...input, [name]: value }
        })
    }

    const selectedBlock = (id) => {
        console.log(id)



    }

    const [activeClass, setActiveClass] = useState()

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
            <Stepper activeStep={activeStep} className='stepper-header' >

                {
                    width > 992 ?
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
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        }) :


                        MobileSteps.map((label, index) => {
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
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })
                }

            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
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
                                    <label htmlFor="name" className="form-label">Name Your Compaign</label>
                                    <input type="text"
                                        name="name"
                                        value={input.name}
                                        onChange={InputEvent}
                                        // className="form-control"
                                        required="required"
                                        placeholder='Compaign Name'
                                    />

                                </div>

                                <div className="mb-4 compaign-input-field-block ">
                                    <label htmlFor="compaignType" className="form-label">Choose Compaign Type</label>
                                    {
                                        CompaignType.map((currentElement, index) => {
                                            return (
                                                <>
                                                    <div className={activeClass == currentElement.id ? "compaign-type-block compaign-type-block-active" : "compaign-type-block"} onClick={e => setActiveClass(currentElement.id)} key={index}>
                                                        <div className="compaign-type-icon-block">
                                                            <span className='compaign-type-icon'>{currentElement.icon}</span>
                                                        </div>
                                                        <div className="compaign-type-content-block">
                                                            <div className="compaign-type-heading">{currentElement.name}</div>
                                                            <div className="compaign-type-text">{currentElement.desc}</div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                </>
                                            )
                                        })
                                    }


                                    <div className="mb-4 ">
                                        <label htmlFor="name" className="form-label">Choose Language</label>
                                        <p className='language-text'>This will be language of your email and training materials.</p>
                                        <div className="compaign-language">
                                            <select className="form-select" aria-label="Default select example">
                                                <option value="language">Select Language</option>
                                                <option value="English">English</option>
                                                <option value="Urdu">Urdu</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div> :

                            // ***************Choose Attack*********************
                            activeStep == 1 ?
                                <div className='stepper-body'>
                                    <div className="mb-4 ">
                                       
                                        <ChooseAttack />
                                    </div>

                                </div> :
                                // ***************Customize Step*********************
                                activeStep == 2 ?
                                    <div className='stepper-body'>
                                        <div className="mb-4 ">
                                            <label htmlFor="name" className="form-label">Customze</label>
                                            <p className='language-text'>To help disguise your campaign, you may select up to 5 attacks and
                                                each enrolled user will receive one randomly selected email.</p>
                                            <Customize />
                                        </div>
                                    </div> :
                                    // ***************Enroll Users Step*********************
                                    activeStep == 3 ?
                                        <div className='stepper-body'>
                                            <h6>Enroll Users</h6>
                                        </div> :
                                        // ***************eview and Schedule Step*********************
                                        <div className='stepper-body'>Review and Schedule</div>

                    }
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
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

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default AddCompaigns