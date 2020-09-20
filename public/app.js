function fetchDataAndVisualize() {
    fetch("./data.json")  // ** fetch module is availabe in browser not part of node ** 
    .then(d => d.json())
    .then(visualizeData);

    fetch("./data1.json")
    .then(d => d.json())
    .then(visualizeData1);

    fetch("./data2.json")
    .then(d => d.json())
    .then(visualizeData2);

    fetch("./data3.json")
    .then(d => d.json())
    .then(visualizeData3)

    fetch("./data4.json")
    .then(d=> d.json())
    .then(visualizeData4)
}

fetchDataAndVisualize();



function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear)
    return 
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear){
    const seriesData = []
    for (let year in matchesPlayedPerYear){
        seriesData.push([year,matchesPlayedPerYear[year]])
    }

    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column",
      },
      title: {
        text: "Total number of Macthes Played Per Year",
      },
      subtitle: {
        text:
          'Source: <a href="hhttps://www.kaggle.com/nowke9/ipldata/data">kaggle</a>',
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number of matches",
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        pointFormat: "Matches: <b>{point.y:.1f}</b>",
      },
      series: [
        {
          name: "year",
          data: seriesData,
        },
      ],
    });
}



function visualizeData1(data){
   visualizeMatchesWonPerYear(data.matchesWonPerYear)
    return
}

function visualizeMatchesWonPerYear(data)
{
  const seriesData =[];
  let sum = new Array(12).fill(0)
  let sum1 =[]
  // for(let d in data) {
  //   for(let year of data[d].length) {
  //     sum1.push(year)
  //   }
  //   let res = {
  //     "name" : d,
  //     "data" : data[d]
  //   }
    // res["name"] = d
    // res["data"] = 
    // sum=[data[d].forEach(e => sum[e%2008]+=1)];
    // sum = Array.from(Object.values(data[d]))
    // for(let s of sum){
    //   sum1[s%2008]
  //   // }
  //   seriesData.push(res)
  // }
  console.log(sum1);
  console.log(seriesData);
  Highcharts.chart("matches-won-per-year", {
    chart: {
      type: "column",
    },
    title: {
      text: "Number of matches won by each team over all the year",
    },
    subtitle: {
      text: "Source: WorldClimate.com",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Rainfall (mm)",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Tokyo",
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
        ],
      },
      {
        name: "New York",
        data: [
          83.6,
          78.8,
          98.5,
          93.4,
          106.0,
          84.5,
          105.0,
          104.3,
          91.2,
          83.5,
          106.6,
          92.3,
        ],
      },
      {
        name: "London",
        data: [
          48.9,
          38.8,
          39.3,
          41.4,
          47.0,
          48.3,
          59.0,
          59.6,
          52.4,
          65.2,
          59.3,
          51.2,
        ],
      },
      {
        name: "Berlin",
        data: [
          42.4,
          33.2,
          34.5,
          39.7,
          52.6,
          75.5,
          57.4,
          60.4,
          47.6,
          39.1,
          46.8,
          51.1,
        ],
      },
    ],
  });
}


function visualizeData2(data) {
  visualizeExtraRunPerTeam(data.extraRunsPerTeam);
  return;
}

function visualizeExtraRunPerTeam(extraRuns) {
  const seriesData = [];
  for (let team in extraRuns) {
    seriesData.push([team, extraRuns[team]]);
  }

  Highcharts.chart("extra-runs-per-team", {
    chart: {
      type: "column",
    },
    title: {
      text: "Extra Runs Conceded By Each Team",
    },
    subtitle: {
      text:
        'Source: <a href="hhttps://www.kaggle.com/nowke9/ipldata/data">IPL Data</a>',
    },
    xAxis: {
      type: "category",
      labels: {
                rotation: -25,
                style: {
                    fontSize: "13px",
                    fontFamily: "Verdana, sans-serif"
                }
            }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Runs: <b>{point.y:.1f}</b>",
    },
    series: [
      {
        name: "year",
        data: seriesData,
      },
    ],
  });
}

function visualizeData3(data){
  visualizeEconomicBowlers(data.economicBowlers);
  return 
}

function visualizeEconomicBowlers(economy){
  
  const seriesData = Object.entries(economy)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 10);

  Highcharts.chart("economy-per-bowler", {
    chart: {
      type: "column",
    },
    title: {
      text: "Top 10 Economical Bowlers for 2015 Season",
    },
    subtitle: {
      text:
        'Source: <a href="hhttps://www.kaggle.com/nowke9/ipldata/data">IPL Data</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -25,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Economy: <b>{point.y:.1f}</b>",
    },
    series: [
      {
        name: "year",
        data: seriesData,
      },
    ],
  });
}

function visualizeData4(data) {
  visualizeMatchesPerVenue(data.matchesPerVenue);
  return;
}

function visualizeMatchesPerVenue(matches) {
  const seriesData = []
  for(let venue in matches){
    seriesData.push([venue,matches[venue]])
  }
  console.log(seriesData)

  Highcharts.chart("matches-per-venue", {
    chart: {
      type: "column",
    },
    title: {
      text: "Matches Per Venue",
    },
    subtitle: {
      text:
        'Source: <a href="hhttps://www.kaggle.com/nowke9/ipldata/data">IPL Data</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -60,
        style: {
          fontSize: "12px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Matches: <b>{point.y:.1f}</b>",
    },
    series: [
      {
        name: "year",
        data: seriesData,
      },
    ],
  });
  
}