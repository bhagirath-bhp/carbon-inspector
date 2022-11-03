import React from 'react'
import Productfeatures from "../../Components/Productfeatures";
import Header from "../../Components/Header";
import "./styles.css";

function Compareprofile() {
  return (
    <>
      <div className="compare-profile">
        <div>
          <div className="companyprofile">
            <Header />
            <div className="content">
              <div className="basic-wrapper">
                <div className="basic-details">
                  <h1>Compare</h1>
                </div>
              </div>
              <div className="compare-table">
                <table>
                  <thead>
                      <tr>
                          <th>Categories</th>
                          <th>LG</th>
                          <th>Samsung</th>
                      </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>MRP</td>
                      <td>Average</td>
                      <td>MRP</td>
                  </tr>
                  <tr>
                      <td>Avg. Monthly Sales</td>
                      <td>50mt</td>
                      <td>9mm</td>
                  </tr>
                  <tr>
                      <td>CES-9000</td>
                      <td>50mt</td>
                      <td>9mm</td>
                  </tr>
                  <tr>
                      <td>Operation</td>
                      <td>50mt</td>
                      <td>9mm</td>
                  </tr>
                  <tr>
                      <td>Transport</td>
                      <td>50mt</td>
                      <td>9mm</td>
                  </tr>
                  <tr>
                      <td>End of Life</td>
                      <td>50mt</td>
                      <td>9mm</td>
                  </tr>
                  </tbody>
              </table>
              </div>
            </div>
            <Productfeatures />
          </div>
        </div>
      </div>
    </>
  )
}

export default Compareprofile