import React, { useState } from "react";
import fetchData from "../../utils/fetchData";
import './userSearch.scss'

const UserSearch = ({ setPropertyData }) => {
  const [textInput, setTextinput] = useState("");
  const [searchType, setSearchType] = useState("lrPropertyOutcode");
  const [emptyData, setEmptyData] = useState(false);

  const handleTypeChange = (event) => {
    setSearchType(event.target.value);
  };
  const handleSearchtermChange = (event) => {
    setTextinput(event.target.value.trim());
  };
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      const data = await fetchData(textInput.toUpperCase(), searchType);
      if (!data || !data.length) {
        setEmptyData(true);
      } else {
        setEmptyData(false);
        setPropertyData(data);
      }
    }
  };

  return (
    <div data-testid="input-container" className="inputContainer">
      <>
        <input
          className="inputContainer__textInput"
          data-testid="search-text-input"
          type="text"
          placeholder="Press enter to search"
          value={textInput}
          onChange={handleSearchtermChange}
          onKeyDown={handleKeyDown}
        />
        {/* I opted to add a dropdown for easier navigation through a varying number of pages 
            The list of options sadly couldn't be styled or shortened but I think it offered the best user experience*/}
        <select
          className="inputContainer__optionSelect"
          data-testid="search-type-input"
          value={searchType}
          onChange={handleTypeChange}
        >
          <option value="lrPropertyOutcode">Outcode</option>
          <option value="lrPropertyStreet">Street</option>
          <option value="lrPropertyId">ID</option>
        </select>
      </>
      {/* NOTE: I would  have liked to use a bootstrap warning but it wasn't behaving as expected so I put together a quick error message*/}
      {emptyData ? <div data-testid="empty-data-message" className="inputContainer__emptyData"> No results found</div> : null}
    </div>
  );
};

export default UserSearch;
