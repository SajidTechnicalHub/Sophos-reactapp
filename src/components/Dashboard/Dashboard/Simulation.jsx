import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const SimulatioinList = [
    {
        id: 1,
        name: 'Simulation 1',
        type: 'Drived-By URL',
        status: 'Completed'
    },
    {
        id: 2,
        name: 'Simulation 2',
        type: 'Link in Attachment',
        status: 'Completed'
    },
    {
        id: 3,
        name: 'Simulation 3',
        type: 'Malware Attachment',
        status: 'Completed'
    },
    {
        id: 4,
        name: 'Simulation 4',
        type: 'Malware Attachment',
        status: 'Completed'
    },
    {
        id: 5,
        name: 'Simulation 5',
        type: 'Malware Attachment',
        status: 'Completed'
    }
]


const Simulation = () => {
    return (
        <>
            <div className="simulation-title" >Current Simulation</div>
            <div className="simulation-content" >
                <span className='simulation-content-header'>Smimulation Name</span>
                <span className='simulation-content-header' style={{ marginRight: '100px' }}>Type</span>
                <span className='simulation-content-header' style={{ marginRight: '30px' }}>Status</span>
            </div>
            <hr />
            {
                SimulatioinList.map((value, index) => {
                    return (
                        <>
                        {
                            index >= 0 && index <=2 ?
                            <div>
                            <div className="simulation-content-header-text" key={value.id}>
                               <Link to=""> <span>{value.name}</span></Link>
                                <span>{value.type}</span>
                                <span>{value.status}</span>
                            </div>
                            <hr />
                            </div>:
                            <div></div>

                        }
                            
                        </>
                    )
                })
            }
           
            <br />
            <span className=' simulation-btn'> <Link to=''>View All Simulations</Link></span>
        </>
    );
}

export default Simulation