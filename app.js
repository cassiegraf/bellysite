const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
const dataPromise = d3.json(url);
d3.json(url).then(function(data) {
    console.log(data);

    let dropdown = d3.select('#selDataset');
    data.names.forEach((name) => {
      dropdown
      .append('option')
      .text(name)
      .property('value', name);
    });

});    

//bar chart for id 940
let otu_id = ['OTU 1167', 'OTU 2859', 'OTU 482', 'OTU 2264', 'OTU 41', 'OTU 1189', 'OTU 352', 'OTU 189', 'OTU 2318', 'OTU 1977']
let otu_values = [163, 126, 113, 78, 71, 51, 50, 47, 40, 40]
let title = 'id 940'    

let reverse_otu_values = otu_values.reverse();

let trace1 = {
    y: otu_id,
    x: reverse_otu_values,
    type: 'bar',
    orientation: "h"
};

let otudata = [trace1];

let layout = {
    title: title
};

Plotly.newPlot("bar", otudata, layout);



//bubble chart for 940
let traceb1 = {
    x: [1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977, 3450, 874, 1959, 2191, 1950, 2077, 2275, 944, 2184, 2244, 2024, 2419, 2811, 165, 2782, 2247, 2011, 2396, 830, 2964, 1795, 2722, 307, 2178, 2908, 1193, 2167, 1208, 2039, 1274, 2739, 2737, 1314, 1962, 2186, 2335, 2936, 907, 833, 2483, 2475, 2491, 2291, 159, 2571, 2350, 2342, 2546, 725, 170, 1505, 513, 259, 1169, 258, 1232, 1497, 1498, 1503, 412, 2235, 1960, 1968, 121, 2065, 340, 2110, 2188, 357, 342],
    y: [163, 126, 113, 78, 71, 51, 50, 47, 40, 40, 37, 36, 30, 28, 25, 23, 22, 19, 19, 14, 13, 13, 13, 12, 12, 11, 11, 11, 10, 10, 10, 8, 7, 7, 7, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    mode: 'markers'
};   
  
  var data = ([traceb1]);

  var layoutbubble = {
    showlegend: false,
    height: 600,
    width: 1200
  };
  
  Plotly.newPlot("bubble", data, layoutbubble);


  //id 940 demographic info
  let demoinfo = "id: 940 / ethnicity: Caucasian / gender: F / age: 24.0 / location: Beaufort/NC / bbtype: I / wfreq: 2.0"
 
  d3.select(".panel-body")
    .text([demoinfo]).append

 



