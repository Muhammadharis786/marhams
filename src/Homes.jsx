import React, { useState } from "react";
import {faMagnifyingGlass}  from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import fever from './fever.jpg'
import dengue from './dengue.jpg'
import breathlessness from './breathlessness.jpg'
import depresion from  './depression.jpg'
import hairfall from './hairfall.jpg'
import migrane from './migrane.jpg'
import piles from './piles.jpg'
import pregnancy from './pregnancy.jpg'
import tb from './tb.jpg'
import typhoid from './typhoid.jpg'

import {Link,NavLink,useNavigate} from 'react-router-dom'


function Homes() {
  const data = ["fever", "Heart Attack", "Pregnancy", "Breathlesness", "Hairfall", "Anxiety","Depression","Dengue Fever",
    "Typhoid Fever","Piles","Migrane","TB"
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);


  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter the data based on the search term
    const results = data.filter((item) =>
      item.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredData(results);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" ) {
      if (searchTerm.toLowerCase() === "fever") {
        navigate("/feverdoctor"); // Navigate to FeverDoctor if search term matches "fever"
      }
       else if (searchTerm.toLowerCase() === "pregnancy") {
        navigate("/pregnancy"); // Navigate to FeverDoctor if search term matches "fever"
      }

      else if (searchTerm.toLowerCase() === "breathlesness") {
        navigate("/breathlessness"); // Navigate to FeverDoctor if search term matches "fever"
      }
      else if (searchTerm.toLowerCase() === "hairfall") {
        navigate("/hairfall"); // Navigate to FeverDoctor if search term matches "fever"
      }
      else if (searchTerm.toLowerCase() === "depression") {
        navigate("/depression"); // Navigate to FeverDoctor if search term matches "fever"
      }
      else if (searchTerm.toLowerCase() === "dengue fever") {
        navigate("/dengue"); // Navigate to FeverDoctor if search term matches "fever"
      }
      else if (searchTerm.toLowerCase() === "piles") {
        navigate("/piles"); // Navigate to FeverDoctor if search term matches "fever"
      }
      else if (searchTerm.toLowerCase() === "migrane") {
        navigate("/migrane"); // Navigate to FeverDoctor if search term matches "fever"
      }
      else if (searchTerm.toLowerCase() === "tb") {
        navigate("/tb"); // Navigate to FeverDoctor if search term matches "fever"
      }
       else {
        alert("No matching page found for this symptom");
      }
    }
  };
  const handleClick = () => {
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };
  return (
    <div className="  mt-10 font-poppins">
      {/* Wrapper for input and suggestions */}

      <div className="relative">
        {/* Input Field */}
        <div className="relative flex justify-center items-center ">
      <label htmlFor="search" className="mr-2 cursor-pointer">Search</label>
        <input
            name="search"
            id="search"
          type="text"
          placeholder="Search by Diseas"
          value={searchTerm}
          onKeyDown={handleKeyPress}
          onChange={handleInputChange}
          className="w-[30%] p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 shadow-lg"
        />
        <label htmlFor="search">
        <FontAwesomeIcon icon={faMagnifyingGlass}  className="relative top-0 right-8 cursor-pointer"/>

        </label>
        </div>

        {/* Suggestions List */}
        {searchTerm && (
          <ul className="absolute top-[50px] left-[36%] z-10 w-[30%] bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto shadow-lg">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSearchTerm(item)} // Set the clicked item as the input value
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No results found</li>
            )}
          </ul>
        )}
      </div>
<div className="symtoms    mt-[100px] p-12">
  <h1  className="text-[20px] font-bold">Symptoms</h1>
  <div className=" justify-evenly flex mb-[150px]"  >
    <Link to="/feverdoctor">
  <div className="fever  relative cursor-pointer ">
  <img src={fever} alt=""  className=""/>
  <span className="  text-cyan-800 font-semibold  text-[16px] relative left-4">fever</span>
   </div>

   </Link>
   <Link to={'/pregnancy'}>
   <div className="fever  relative cursor-pointer " onClick={handleClick}>
  <img src={pregnancy} alt=""  className=""/>
  <span className="  text-cyan-800 font-semibold text-[16px] relative left-4">pregnancy</span>
   </div>
   </Link>
   <Link to={'/breathlessness'}>

   <div className="fever  relative cursor-pointer  " onClick={handleClick}>
  <img src={breathlessness} alt=""  className=""/>
  <span className="  text-cyan-800 font-semibold text-[16px] relative left-4">breathlessness</span>
   </div>
   </Link>
   <Link to={'/hairfall'}>
   <div className="fever  relative  cursor-pointer" onClick={handleClick}>
  <img src={hairfall} alt=""  className=""/>
  <span className="  text-cyan-800 font-semibold text-[16px] relative left-4">hairfall</span>
   </div>
   </Link>
   <Link to={'/depression'} >
   <div className="fever  relative cursor-pointer" onClick={handleClick}>
  <img src={depresion} alt=""  className=""/>
  <span className="  text-cyan-800 font-semibold text-[16px] relative left-4">depresion</span>
   </div>
   </Link>
   </div>

   <h1  className="text-[20px] font-bold">Diseases</h1>
   <div className=" justify-evenly flex "  >
    <Link to={'/dengue'}>
  <div className="fever  relative  cursor-pointer" onClick={handleClick}>
  <img src={dengue} alt=""  className=""/>
  <span className="  text-cyan-800 font-semibold  text-[16px] relative left-4">dengue</span>
   </div>
   </Link>

   <Link to={'/piles'}>

   <div className="fever  relative cursor-pointer " onClick={handleClick}>
  <img src={piles} alt=""  className=""/>
  <span className="  text-cyan-800 font-semibold text-[16px] relative left-4">piles</span>
   </div>
   </Link>
   <Link to={'/migrane'}>
   <div className="fever  relative cursor-pointer" onClick={handleClick}>
  <img src={migrane} alt=""  className=""/>
  <span className="  text-cyan-800 font-semibold text-[16px] relative left-4">migrane</span>
   </div>
   </Link>

   <Link to={'/tb'}>
   <div className="fever  relative cursor-pointer " onClick={handleClick}>
  <img src={tb} alt=""  className=""/>
  <span className="  text-cyan-800 font-semibold text-[16px] relative left-4">TB</span>
   </div>
   </Link>


   <Link to={'/typhoid'}>
   <div className="fever  relative cursor-pointer" onClick={handleClick}>
  <img src={typhoid} alt=""  className=""/>
  <span className="  text-cyan-800 font-semibold text-[16px] relative left-4">typhoid</span>
   </div>
   </Link>
   </div>

   
   

</div>


    </div>
  );
}

export default Homes;
