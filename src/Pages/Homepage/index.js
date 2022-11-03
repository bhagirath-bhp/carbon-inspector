import React from 'react'
import Header from '../../Components/Header';
import Searchpager from '../../Components/Search-pager';
import Companyprofile from '../Companyprofile';
import Compareprofile from '../Compareprofile';
import './styles.css';


function Homepage() {
  return (
    <>
        <div className="homepage">
          <Header/>
          <div className="content">
            <Searchpager/>
            {/* <Companyprofile/> */}
            {/* <Compareprofile/> */}
          </div>
        </div>
    </>
  )
}

export default Homepage