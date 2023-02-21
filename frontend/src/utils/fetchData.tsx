

const fetchData = async (searchTerm:String, searchType:String) => {
  const resp = await fetch(`/${searchType}/${searchTerm}`);
  const json = await resp.json();

  if (json.success) {
    if (searchType === "lrPropertyId") {
      let tempArr = [];
      tempArr.push(json.lrProperty);
      return tempArr;
    } else {
      return json.lrProperty;
    }
  } else {
    console.log("JSON DOES NOT CONTAIN SUCCESS", json)
  }
};

export default fetchData;
