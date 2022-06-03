import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Compaigns.css'
import { CompaignList, PastCompaign } from './CompaignData';
import { Link } from 'react-router-dom';

// import useWindowDimensions from '../../../useWindowDimensions';

const Compaigns = () => {
  // const { height, width } = useWindowDimensions();
  const [q, setQ] = useState("")

  // const handleDelete = (id) => {

  //   setGroups(groups.filter((item) => item.id !== id))

  // }
  const Search = (groups) => {
    return groups.filter(
      (row) =>
        row.Name.toLowerCase().indexOf(q) > -1 ||
        row.Name.indexOf(q) > -1

    );
  }
  return (
    <>

      <div className="breadcrumb">
        <span className='breadcrumb-items'>Compaigns</span>

      </div>
      <div className="compaign users-container">
        {/* <hr /> */}
        <div className="users-header border">
          <div className="users-header-contents">
            {/* <h5>All Users</h5> */}
            <div className="users-search">
              <SearchIcon className='users-search-icon' />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder='Search Here.'
                className='users-input-search' />

              <select
                name=""
                id=""
                className='user-manu'
              >

                <option>All Compaign</option>
                <option>AD Groups</option>
              </select>
            </div>
            <Link to='/Sophos-reactapp/admin/compaign'>
              <Button variant="contained" size="small" className='add-users-btn'>New Compaign</Button>
            </Link>
          </div>
          {/* <hr /> */}
        </div>
        <div className='compaign-content-section'>
          {
            CompaignList.map((currentElement, index) => {
              return (
                <>
                  <div key={index}></div>
                  {
                    currentElement.CompaignType == 'Past Compaigns' ?
                      <div>
                        <div className='compaign-type'>{currentElement.CompaignType}</div>
                        <br />
                        <table class="table table-hover table-borderless  table-sm">
                          <thead>
                            <tr className='table-light border'>

                              <th scope="col">Name</th>
                              <th scope="col">Type</th>
                              <th scope="col">End Date</th>
                              <th scope="col">Recepients</th>

                            </tr>
                          </thead>
                          <tbody>
                            {PastCompaign.map((pastComp, index) => {
                              return (
                                <>
                                  <tr key={index}>

                                    <td>{pastComp.Name}</td>
                                    <td>{pastComp.Type}</td>
                                    <td>{pastComp.EndDate}</td>
                                    <td>{pastComp.Recepients}</td>
                                  </tr>
                                </>
                              )
                            })
                            }
                          </tbody>
                        </table>


                      </div> :
                      <div>
                        <div className='compaign-type'>{currentElement.CompaignType}</div>
                        <hr />
                        <div className='compaign-list'>{currentElement.CompaignList}</div>
                      </div>
                  }

                </>
              )
            })

          }

        </div>
      </div>


    </>
  )
}

export default Compaigns