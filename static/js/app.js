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