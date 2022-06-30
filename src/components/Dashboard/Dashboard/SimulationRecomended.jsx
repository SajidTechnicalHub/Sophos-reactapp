import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const SimulatioinList = [
    {
        id: 1,
        type: 'Run a Credential Harvest Simulation',
        details: 'You have not run any recent simulation using this technique.',
        status: 0
    },
    {
        id: 2,
        type: 'Run a Link in Attachment Simulation',
        details: 'You have not run any recent simulation using this technique.',
        status: 0
    },
    {
        id: 3,
        type: 'Run a Link to Malware Simulation',
        details: 'You have not run any recent simulation using this technique.',
        status: 0
    },
    {
        id: 4,
        type: 'Run a Oauth Consent Grant Simulation',
        details: 'You have not run any recent simulation using this technique.',
        status: 0
    },
    {
        id: 5,
        type: 'Run a Drive-By URL Simulation',
        details: 'You have not run any recent simulation using this technique.',
        status: 0
    }
]


const SimulationRecomended = () => {
    return (
        <React.Fragment>
            <div className="simulation-recomended-container">
            <div className="simulation-content simulation-recomended" >
                <span className='simulation-content-header'>Simulation Recommendations</span>
                {/* <span className='simulation-content-header' style={{ marginRight: '100px' }}>Type</span> */}
                <span className='simulation-content-header' >Status</span>
            </div>
            <hr />
            {
                SimulatioinList.map((value, index) => {
                    return (
                        <React.Fragment key={value.id}>

                            <div className="simulatiion-recomended-header-text" >
                                <div className="simulation-recomended-type-block">
                                  <Link to='/Sophos-reactapp/admin/compaign'>  <span className='simulation-recomended-type'>{value.type}</span></Link>
                                    <span className='simulation-recomended-details'>{value.details}</span>
                                </div>
                                <span>{value.status}</span>
                            </div>
                            <hr />



                        </React.Fragment>
                    )
                })
            }
            </div>
        </React.Fragment>
    );
}

export default SimulationRecomended