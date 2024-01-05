javascript:
var census_collection_numbers = new Map([
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

var years_available = "";
var census_year = prompt("Enter the Census Year:", "");
census_year = census_year.replace(/[^0-9]/gi, "");

if (census_collection_numbers.has(census_year)) {
  if (census_year=="1950") {
    window.open("https://www.familysearch.org/search/collection/" + census_collection_numbers.get(census_year));
  }
  else {
    window.open("https://www.familysearch.org/search/image/index?owc=https://www.familysearch.org/service/cds/recapi/collections/" + census_collection_numbers.get(census_year) + "/waypoints");
  }
}
else {
  for (census_year of census_collection_numbers.keys()) {
    years_available += census_year + " ";
  }
  alert("The only years available are:\n" + years_available);
}
void(0);
