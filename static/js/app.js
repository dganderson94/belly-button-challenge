const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data
d3.json(url).then(function(data) {
    console.log("Data: ", data);
    popDrop(data);
});

// Populate dropdown menu
function popDrop (data) {
    let dropdown = d3.select("#selDataset");
    for (i=0; i<data.names.length; i++) {
        dropdown.append("option").attr("value", data.names[i]).text(data.names[i]);
    }
}

// Bar chart
let trace1 = {
    x: sample_values,
    y: otu_ids,
    type: "hbar"
};

d3.selectAll("selDataset").on("change", getData);

function getData() {
    console.log("Data Gotten");
}