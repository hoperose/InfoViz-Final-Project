"use strict";
// function to return color (gold/silver/bronze)


var colors = Highcharts.getOptions().colors;

// set up the initial options



var option = {
  chart: {
            renderTo: "chart-A",
            type: 'area' // Chart type (i.e. 'bar', 'column', 'spline' etc)
        },
        title: {
            text: 'The Change of Chinese Student Population & the GDP between China and U.S.', // Title for the chart
            style: {
            color: "#224062",
            fontFamily: "Helvetica,Arial,sans-serif",
            fontSize: "20px",
            fontWeight: "bold"
            }
        },
        xAxis: {
            categories: [],
            // Categories for the charts
            plotLines: [{ // mark the weekend
              color: '#c65e3a',
              width: 2,
              value: 1,
              dashStyle: 'longdashdot',
              label: {
                text: '2001: China joined WTO', // Content of the label. 
                align: 'middle', // Positioning of the label. 
                rotation: 0,
                //Default to center. x: +10 // Amount of pixels the label will be repositioned according to the alignment.
              }
              },{ // mark the weekend
              color: '#c65e3a',
              width: 2,
              value: 3,
              dashStyle: 'longdashdot',
              label: { 
                text: '2003: U.S. tighten F1 Visa after 911', // Content of the label. 
                align: 'left', // Positioning of the label. 
                rotation: 0
                //Default to center. x: +10 // Amount of pixels the label will be repositioned according to the alignment.
              }},{ // mark the weekend
              color: '#c65e3a',
              width: 2,
              value: 6,
              dashStyle: 'longdashdot',
              label: { 
                text: '2006： U.S. subprime mortgage crisis', // Content of the label. 
                align: 'left', // Positioning of the label. 
                rotation: 0
                //Default to center. x: +10 // Amount of pixels the label will be repositioned according to the alignment.
              }},{ // mark the weekend
              color: '#c65e3a',
              width: 2,
              value: 9,
              dashStyle: 'longdashdot',
              label: { 
                text: '2009：U.S.-China Strategic and Economic Dialogue', // Content of the label. 
                align: 'left', // Positioning of the label. 
                rotation: 0
                //Default to center. x: +10 // Amount of pixels the label will be repositioned according to the alignment.
              },
            }]
        },
        yAxis: [{
            min: 0, // Lowest value to show on the yAxis
            title: {
                  style: {
                    color: "#224062",
                    fontFamily: "Helvetica,Arial,sans-serif",
                    fontWeight: "bold"
                 },
                text: 'Number of people' // Title for the yAxis
            },
          },{
            opposite: true,
            min: 0, // Lowest value to show on the yAxis
            max: 60,
            title: {
                text: 'GDP(10^12 RMB)', // Title for the yAxis
                style: {
                    color: "#224062",
                    fontFamily: "Helvetica,Arial,sans-serif",
                    fontWeight: "bold"
                 },
            },
            labels: {
              enabled: true
            },
            }],
        legend: {
            enabled: true, // Enable/Disable the legend
            layout: 'vertical',
            align:'left',
            verticalAlign: 'top',
            borderWidth: 0,
            floating: true,
            x: 65,
            y: 60
        },
        credits: {
            enabled: true, // Enable/Disable the credits
            text: ''
        },
        tooltip: {
            shared: true, // If you have multiple series then all points in each category will show up on one tooltip
        },
        plotOptions: {
          series: {
                fillOpacity: 0.4
            },

          area: {
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          }
    },
        series: [],

}

var option2 = {
  chart: {
            renderTo: "chart-B",
            type: 'line' // Chart type (i.e. 'bar', 'column', 'spline' etc)
        },
        title: {
            text: 'The Change of OPT Got by Chinese Students & Its Percentage of the Total Student Number', // Title for the chart
            style: {
            color: "#224062",
            fontFamily: "Helvetica,Arial,sans-serif",
            fontSize: "15px",
            fontWeight: "bold"
            }
        },
        xAxis: {
            categories: [],
            // Categories for the charts
            plotLines: [{ // mark the weekend
              color: '#c65e3a',
              width: 2,
              value: 3,
              dashStyle: 'longdashdot',
              label: {
                text: '2009：U.S.-China Strategic and Economic Dialogue', // Content of the label. 
                align: 'left', // Positioning of the label. 
                rotation: 0
                //Default to center. x: +10 // Amount of pixels the label will be repositioned according to the alignment.
              }}]
        },
        yAxis: [{
            min: 0, // Lowest value to show on the yAxis
            max: 50,
            title: {
                  style: {
                    color: "#224062",
                    fontFamily: "Helvetica,Arial,sans-serif",
                    fontWeight: "bold"
                 },
                text: 'OPT percentage' // Title for the yAxis
            },
          },{
            opposite: true,
            min: 0, // Lowest value to show on the yAxis
            title: {
                text: 'Number of OPT', // Title for the yAxis
                style: {
                    color: "#224062",
                    fontFamily: "Helvetica,Arial,sans-serif",
                    fontWeight: "bold"
                 },
            },
            labels: {
              enabled: true
            },
            }],
        legend: {
            enabled: true, // Enable/Disable the legend
            layout: 'vertical',
            align:'right',
            verticalAlign: 'top',
            borderWidth: 0,
            floating: true,
            x: -60,
            y: 40
        },
        credits: {
            enabled: true, // Enable/Disable the credits
            text: ''
        },
        tooltip: {
            shared: true, // If you have multiple series then all points in each category will show up on one tooltip
        },
        plotOptions: {
          series: {
                fillOpacity: 0.4
            },

          area: {
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          }
    },
        series: [],

}

var colors = Highcharts.getOptions().colors;

// set up the initial options


var option3 = {
  chart: {
            renderTo: "chart-C",
            type: 'bar' // Chart type (i.e. 'bar', 'column', 'spline' etc)
        },
        title: {
            text: 'The GDP of Cities in China & the Number of Students', // Title for the chart
            style: {
            color: "#224062",
            fontFamily: "Helvetica,Arial,sans-serif",
            fontSize: "20px",
            fontWeight: "bold"
            }
        },
        xAxis: [{
            categories: [],
            // Categories for the charts
            reversed: false,
            labels: {
                step: 1
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: [],
            linkedTo: 0,
            labels: {
                step: 1
            }
        }],

        yAxis: {
            title: {
                  style: {
                    color: "#333333",
                    fontFamily: "Helvetica,Arial,sans-serif",
                    fontWeight: "bold"
                  },
                text: null
                //text: 'GDPNumber of people' // Title for the yAxis
            },
            labels: {
              formatter: function () {
                  return Math.abs(this.value) ;
            }
        }
        },
        legend: {
            enabled: true, // Enable/Disable the legend
            layout: 'vertical',
            align:'right',
            verticalAlign: 'top',
            borderWidth: 0,
            floating: true,
            x: -100,
            y: 40
        },
        tooltip: {
            formatter: function () {
            return '<b>' + this.series.name + ',  ' + this.point.category + '</b><br/>' +
                 Highcharts.numberFormat(Math.abs(this.point.y), 0);
            }
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: [],

}


// ajax call to data from the csv file
$.get("data/Number_of_people.csv", function (data) {
  var lines = data.split("\n");

  var years = [];
  var category = []
  var allnumber= [[],[],[],[],[],[],[]];

  $.each(lines, function ( lineNo, line ) {

    var items = line.split(',')
    if (lineNo != 0) {
      years.push(items[0]);
      for(var i = 1; i < items.length; i++) {
        if (Number(items[i]) == 0) {
          allnumber[i-1].push(items[i]);
        } else {
          allnumber[i-1].push(Number(items[i]));
        }
      }

    } else {
      for(var i = 1; i < items.length; i++) {
        category.push(items[i])
      }
    };

  });
  //console.log(allnumber)
  var year_noduplicate = Array.from(new Set(years))
  option.xAxis.categories = years


  for(var i = 0; i < category.length-4; i++) {
    // create a placeholder object & pull the required value for each key from "medalType" variable, "medalCount" variable, & "colors()" function
    var series2Data = {
      name: category[i],
      data: allnumber[i],
      yAxis: 0,
      type: 'line',
      //stack: year_noduplicate[i]
      //color: colors(i)
    };
    //console.log(series2Data)
    option.series.push(series2Data);
  };

  for(var i = 4; i < category.length-1; i++) {
    // create a placeholder object & pull the required value for each key from "medalType" variable, "medalCount" variable, & "colors()" function
    var series2Data2 = {
      name: category[i],
      data: allnumber[i],
      yAxis: 1,
      type: 'area',
      //stack: year_noduplicate[i]
      //color: colors(i)
    };
    //console.log(series2Data2)
    option.series.push(series2Data2);
  };



  var chart1 = new Highcharts.Chart(option);

});

$.get("data/OPT.csv", function (data) {
  var lines = data.split("\n");

  var years = [];
  var category = [];
  var allnumber= [[],[]];

  $.each(lines, function ( lineNo, line ) {

    var items = line.split(',')

    if (lineNo != 0) {
      years.push(items[0]);
      for(var i = 1; i < items.length; i++) {
        if (Number(items[i]) == 0) {
          allnumber[i-1].push(items[i]);
        } else {
          allnumber[i-1].push(Number(items[i]));
        }
      }

    } else {
      for(var i = 1; i < items.length; i++) {
        category.push(items[i])
      }
    };

  });
  //console.log(allnumber)
  //var year_noduplicate = Array.from(new Set(years))
  option2.xAxis.categories = years

  console.log(allnumber)
  //for(var i = 0; i < category.length-3; i++) {
    // create a placeholder object & pull the required value for each key from "medalType" variable, "medalCount" variable, & "colors()" function
  var series2Data = {
    name: category[0],
    data: allnumber[0],
    yAxis: 1,
    type: 'line',
      //stack: year_noduplicate[i]
      //color: colors(i)
    };
    //console.log(series2Data)
  option2.series.push(series2Data);
  //};

  //for(var i = 4; i < category.length; i++) {
    // create a placeholder object & pull the required value for each key from "medalType" variable, "medalCount" variable, & "colors()" function
  var series2Data2 = {
    name: category[1],
    data: allnumber[1],
    yAxis: 0,
    type: 'line',
      //stack: year_noduplicate[i]
      //color: colors(i)
    };
    //console.log(series2Data2)
  option2.series.push(series2Data2);
  //};



  var chart2 = new Highcharts.Chart(option2);

});


// ajax call to data from the csv file
$.get("data/city_GDP.csv", function (data) {
  var lines = data.split("\n");

  var cities = [];
  var people = [];
  var gdp= [];
  var region = []

  $.each(lines, function ( lineNo, line ) {

    var items = line.split(',')

    if (lineNo != 0) {
      cities.push(items[0]);
      people.push(Number(items[1]));
      gdp.push(-Number(items[2]));
      region.push(items[3]);
    };

  });

  option3.xAxis[0].categories = cities
  option3.xAxis[1].categories = cities
  //console.log(option3.xAxis)


  var series2Data = {
      name: 'Number of people',
      data: people,
      xAxis: 0
      //stack: year_noduplicate[i]
      //color: colors(i)
  };
    //console.log(series2Data)
  option3.series.push(series2Data);


  var series2Data2 = {
      name: 'GDP',
      data: gdp,
      xAxis: 1

    };
    //console.log(series2Data2)
  option3.series.push(series2Data2);
  console.log

  var chart3 = new Highcharts.Chart(option3);

});

