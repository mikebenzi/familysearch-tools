javascript:
var census_year = "";
const census_collection_number = new Map([
  ["1850", "1401638"],
  ["1860", "1473181"],
  ["1870", "1438024"],
  ["1880", "1417683"],
  ["1890", "1610551"],
  ["1900", "1325221"],
  ["1910", "1727033"],
  ["1920", "1488411"],
  ["1930", "1810731"],
  ["1940", "2000219"],
  ["1950", "4464515"]
 ]);
census_year = prompt("Enter the Census Year:", "");
census_year = census_year.replace(/[^0-9]/gi, "");
if (census_collection_number.has(census_year)){
  if (census_year=="1950") {
    window.open("https://www.familysearch.org/search/collection/" + census_collection_number.get(census_year));
  }
  else {
    window.open("https://www.familysearch.org/search/image/index?owc=https://www.familysearch.org/service/cds/recapi/collections/" + census_collection_number.get(census_year) + "/waypoints");
  }
}
else{
  let years_available = "";
  for (let year of census_collection_number.keys()){
    years_available += year + " ";
  }
  alert("The only years available are:\n" + years);
}
void(0);
