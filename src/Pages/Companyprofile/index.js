import React from "react";
import Detailedreport from "../../Components/Detailedreport";
import Productfeatures from "../../Components/Productfeatures";
import Header from "../../Components/Header";
import "./styles.css";
import Commentsection from "../../Components/Commentsection";

function Companyprofile(props) {
  return (
    <>
      <div className="companyprofile">
        <Header />
        <div className="content">
          <div className="basic-wrapper">
            <div className="basic-details">
              <h1>Kallogs</h1>
              {/* <p>kallogs.com</p>
                    <p>American multinational food manufacturing company, Michigan</p> */}
            </div>
            <div className="carbonfootprint">
              {/* <p>Average</p> */}
              <h1>2.1 T</h1>
            </div>
          </div>
          <Detailedreport />
          
        </div>
        <Productfeatures />
        <Commentsection />
      </div>
    </>
  );
}

export default Companyprofile;
