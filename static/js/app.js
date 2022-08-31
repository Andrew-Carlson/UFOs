// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 library
// D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage
// tbody is the html tag that will contain the table of data
var tbody = d3.select("tbody")

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("")

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => { // dataRow is the parameter to be called when function is used

        // Append a row to the table body
        let row = tbody.append("tr");

    // Object.values:reference one object from the array of UFO sightings.
    // By adding (dataRow) as the argument, add values to go into the dataRow. 
    // We've added forEach((val) to specify that we want one object per row.
        Object.values(dataRow).forEach((val) => {

            let cell = row.append("td")

            //.text(value): extracting only the text of the value.
            cell.text(val)
            }
        );    
    });
};

// create function to filter table data
function handleClick() {

    // D3.js selects first element that matches selector string (HTML id): "datetime". 
    // The selector string is the HTML item we're telling D3.js to look for.
    let date = d3.select("#datetime").property("value"); // .property("value"): grabs selected info and puts in "date" variable

    // By setting the filteredData variable to our raw data, we're basically using it as a blank slate.
    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date with if statement
    // Pseudocode:
    // if (a date is entered) {
        // Filter the default data to show only the date entered
    if (date) {

        // Show only the rows where the date is equal to the date filter we created above
        filteredData = filteredData.filter(row => row.datetime === date) // === : strict equality, == : loose equality
    }

    // if no date was entered, the filteredData table will just be the original tableData

    // call the handleClick() function to update the table with filtered data
    buildTable(filteredData);
};

// link code directly to filter button.
// .on("click", handleClick);, tells D3 to execute handleClick() function when the button with id=filter-btn is clicked.
d3.selectALL("#filter-btn").on("click", handleClick); // 'filter-btn' is HTML tag/selector string

// Build the table when the page loads
buildTable(tableData)