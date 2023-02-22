import {useState} from "react";
import Table from "./Components/Table/table";
import UserSearch from "./Components/UserSearch/userSearchjs";
import WelcomeMessage from "./Components/welcomeMessage";
import "./App.scss";
import { TPropertyList } from "./utils/dataTypes";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [propertyData, setPropertyData] = useState<TPropertyList>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  return (
    <div className="App" data-testid="app">
        <UserSearch setPropertyData={setPropertyData} setIsLoading={setIsLoading}/>
        {
          !isLoading && !propertyData.length ? 
            <WelcomeMessage data-testid="app-welcome-message" /> 
            : 
              isLoading ?
              <div className="App__loading-spinner">
                <ClipLoader
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
              :
              <Table data-testid="app-table" propertyData={propertyData} />
        }
    </div>
  );
}

export default App;


// FINAL NOTES:
// When I started this project I had just started using  a new machine so I didn't have everything I usually use installed
// This lead to a number of problems but the most troublesome issue may have been the very first hurdle:
// getting npm to install properly: My Node and Python versions were too recent and I needed to find the correct versions to run them
// As far as I could tell my dependancies all worked fine however some features/behaviours weren't how I expect them to be
// Unsure if it is caused by version issues or something else, when something didn't work as expected and neither did attempted work-arounds, I moved on
// I didn't previous  experience with Bookshelf so took some time to learn the functions and how to use it for this task


// As I had limited time to work on this I feel I missed certain things
// GIVEN MORE TIME I would have:
// Taken more time to learn Bookshelf to write better and more concise routes and perhaps make changes to the data received
// Added much more accessibility options and tags
// Written more and better tests(written some components to be more unit-test-friendly)
// Written some components to be more robust and catch more edge cases
// Appropriately typed the setState functions within the pagination and userSearch components
// Explored frameworks more to find something to assist in the styling and functionality of some components and taken more time to get Bootstrap to work
// Taken more time to consider my naming conventions and consistency
// Added API error messages



// I would love an opportunity to go over some of the missed opportunities in my app and hear what solutions you may have in mind


// Added icons
// Changed Transaction Details usage
// Added loading icon


// Questoins:
// Better to fetch for eachpage or load evertyhing and seperate it into each page
// I had to install everything with npm --force, any idea why my package manager keeps complaining about not being able to resolve react-scripts?