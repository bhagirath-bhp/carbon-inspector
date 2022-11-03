import React, { useState } from "react";
import "./styles.css";
import data from "../../Resources/data.json";
import {Outlet, Link } from "react-router-dom";


let inputVal;
let items = [];
let filteredItems = [];
let fliteredHtml = [];

function findmatches(wordtomatch, items) {
  filteredItems = [];
  items.filter((ddata) => {
    const regex = new RegExp(wordtomatch, "gi");
    if (
      ddata.Company.match(regex) ||
      ddata.ProductNameFunctionalUnit.match(regex)
    ) {
      filteredItems.push(ddata);
    }
  });
  fliteredHtml = filteredItems.map((fitem) => (
    <FliteredHtmlFun
      key={fitem.pcfid}
      Company={fitem.Company}
      Product={fitem.ProductNameFunctionalUnit}
    />
  ));
  // console.log(fliteredHtml)
}

function displayMatches() {
  findmatches(inputVal, items[0][1]);
}

function FliteredHtmlFun(props) {
  return (
    <>
    <Link to="/companyprofile" state={{Companyname: props.Company}}>
      <li>
        <span>{props.Company}</span>
        <span>email</span>
        <span>{props.Product}</span>
      </li>
    </Link>

    </>
  );
}

function Searchpager() {
  items = data;
  items = Object.entries(items);
  let [fliteredHtmlState, setFliteredHtmlState] = useState([]);

  return (
    <>
      <div className="searchpager">
        <form className="search">
          <p>search</p>
          <input
            type="text"
            name="search"
            id="search"
            onKeyUpCapture={(event) => {
              inputVal = event.target.value;
              displayMatches();
              setFliteredHtmlState(fliteredHtml);
            }}
          />
        </form>
        <div className="suggestions-tab">
          <p>suggestion</p>
          <ul className="suggestions">
            {fliteredHtmlState}
            {/* {filteredItems} */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Searchpager;
