// I've kept this file to demonstrate the issues
// There was a lot of back and forth tying to get  this file to work with the types
// setPropertyData wasn't happy with whatever type that I set for it
// Given an oppotyunity to interview I would like to know what type you would suggest


import React, { SetStateAction, useState } from "react";
import fetchData from "../utils/fetchData";
import { IProperty, TPropertyList } from "../utils/dataTypes";

// This type worked for this file but App.tsx then threw an error about 
type TsetPropertyData = (data:TPropertyList) => void

const UserSearch = (setPropertyData:{ setPropertyData: React.Dispatch<React.SetStateAction<TPropertyList>> }) => {
    const [textInput, setTextinput] = useState("");
    const [searchType, setSearchType] = useState("lrPropertyOutcode");
  
    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSearchType(event.target.value);
    };
    const handleSearchtermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      // needed to removed empty spaces around a searchterm
      setTextinput(event.target.value.trim());
    };
    const handleKeyDown = async (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === "Enter"){
        const data = await fetchData(textInput.toUpperCase(), searchType)
        // commented out so ts doesn't throw errors
        // setPropertyData(data)
      }
    };
  
    return (
      <div data-testid="input-container" className="inputContainer">
        <input
          className="textInput"
          data-testid="input-search"
          type="text"
          placeholder="Press enter to search"
          value={textInput}
          onChange={handleSearchtermChange}
          onKeyDown={handleKeyDown}
        />
        <select className="optionSelect" value={searchType} onChange={handleTypeChange}>
          <option value="lrPropertyOutcode">Outcode</option>
          <option value="lrPropertyStreet">Street</option>
          <option value="lrPropertyId">ID</option>
        </select>
      </div>
    )
  }

  export default UserSearch;