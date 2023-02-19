const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch JSON
const dataPromise = d3.json(url);
dataPromise.then((json) => {
    init(json);
});

// Initialize default bar chart
function init (json) {
    Plotly.newPlot("bar", getData(0, json));
    popDrop(json);
}

// Get data for selected individual
function getData (id, json) {
    values = [];
    labels = [];
    hovertext = [];
    for (i=0; i<10; i++) {
        values.unshift(json.samples[id].sample_values[i]);
        labels.unshift("OTU " + json.samples[id].otu_ids[i]);
        hovertext.unshift(json.samples[id].otu_labels[i]);
    }
    data = [{
        type: "bar",
        x: values,
        y: labels,
        hovertext: hovertext,
        orientation: "h"
    }]
    return data;
}

// Populate dropdown menu
function popDrop (data) {
    let dropdown = d3.select("#selDataset");
    for (i=0; i<data.names.length; i++) {
        dropdown.append("option").attr("value", i).text(data.names[i]);
    }
}

// Update plotly
function optionChanged(id) {
    dataPromise.then((json) => {
        Plotly.newPlot("bar", getData(id, json));
    });
    console.log("hello");
}