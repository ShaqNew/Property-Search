import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import './pagination.scss'

// NOTE: Like userSearch.js, I tried to write this in TypeScript but kept running 
// into and issue with defining the type for the setPageArray() function

const Pagination = ({ propertyData, setPageArray }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const pageSize = 10;
  const pageLimit = Math.ceil(propertyData.length / pageSize);

  // NOTE: This felt clunky to write but I needed something to generate a list of
  // page numbers for the page selection
  const pageCounter = () => {
    let arr = [];
    for (let pageNumber = 1; pageNumber < pageLimit + 1; pageNumber++) {
      arr.push(pageNumber);
    }
    return arr;
  };
  let pageArray = pageCounter();

  const paginate = (pageNumber) => {
    return propertyData.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    );
  };

  const changePage = (increment) => {
    setSelectedPage(selectedPage + increment);
  };
  const selectPage = (event) => {
    setSelectedPage(parseInt(event.target.value));
  };

// NOTE: Needed something to reliably update the list of pages
// These useEffects() solved a number of bugs I was facing, and made pagination much more robust
  useEffect(() => {
    setPageArray(paginate(selectedPage));
  }, [selectedPage]);

  useEffect(() => {
    changePage(1 - selectedPage);
    setPageArray(paginate(selectedPage));
  }, [propertyData]);

  return (
    <div className="pageButtons" data-testid="page-buttons">
      <Button
        aria-label="previous page"
        className="pageButtons__previous"
        variant="dark"
        data-testid="previous-page-button"
        disabled={selectedPage === 1}
        onClick={() => {
          changePage(-1);
        }}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </Button>
      <select
        className="pageButtons__indicator"
        aria-label="page dropdown selection"
        data-testid="page-number"
        value={selectedPage}
        onChange={selectPage}
      >
        {pageArray.map((pageNumber) => (
          <option key={pageNumber} value={pageNumber}>
            {pageNumber}
          </option>
        ))}
      </select>
      <Button
        aria-label="next page"
        className="pageButtons__next"
        variant="dark"
        data-testid="next-page-button"
        disabled={selectedPage === pageLimit}
        onClick={() => {
          changePage(1);
        }}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </Button>
    </div>
  );
};

export default Pagination;
