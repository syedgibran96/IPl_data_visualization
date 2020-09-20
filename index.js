const csv = require('csvtojson');
const fs = require('fs');
const MATCHES_DATA_FILE = ("./csv_data/matches.csv");
const DELIVERIES_DATA_FILE = ("./csv_data/deliveries.csv")
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonPerYear = require("./ipl/matchesWonPerYear1");
const extraRunsPerTeam = require("./ipl/extraRunsPerTeam");
const economicBowlers = require('./ipl/economicBowlers');
const story = require('./ipl/story');
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_MATCH_WON = "./public/data1.json";
const JSON_OUTPUT_EXTRA_RUN = "./public/data2.json";
const JSON_OUTPUT_BOWLERS = "./public/data3.json";
const JSON_OUTPUT_VENUE = "./public/data4.json";

function main () { 
csv()         // --- retreving total number of matches played each year
.fromFile(MATCHES_DATA_FILE)
.then(matches => {
   csv()
   .fromFile(DELIVERIES_DATA_FILE)
   .then(delivery => {
     let result = extraRunsPerTeam(delivery, matches)
     saveExtraRunPerTeam(result);

     let result1 = economicBowlers(delivery,matches)
     saveEconomicBowlers(result1);
   })
    let result = matchesPlayedPerYear(matches);
    saveMatchPlayedPerYear(result);
});

csv()           // --- retreving No. of matches won by each team over all the year
  .fromFile(MATCHES_DATA_FILE)  
  .then((matches) => {
    let result = matchesWonPerYear(matches);
    saveMatchWonPerYear(result);
    let result1 = story(matches)
    saveStory(result1)
  });

}


function saveMatchWonPerYear(result) {
  const jsonData = {
    matchesWonPerYear: result,
  };
  let jsonString = JSON.stringify(jsonData,null,4);
  fs.writeFile(JSON_OUTPUT_MATCH_WON, jsonString,"utf8", error => {
    if (error) {
      console.error(error);
    }
  });
}


function saveMatchPlayedPerYear (result) {

    const jsonData = {
        matchesPlayedPerYear : result,
    }
    let jsonString = JSON.stringify(jsonData)
    fs.writeFile(JSON_OUTPUT_FILE_PATH,jsonString,"utf8", error => {
        if(error) {
            console.error(error);
        }
    });
}

function saveExtraRunPerTeam(result) {
  const jsonData = {
    extraRunsPerTeam: result,
  };
  let jsonString = JSON.stringify(jsonData,null,4);
  fs.writeFile(JSON_OUTPUT_EXTRA_RUN, jsonString, "utf8", (error) => {
    if (error) {
      console.error(error);
    }
  });
}

function saveEconomicBowlers(result) {
  const jsonData = {
    economicBowlers: result,
  };
  let jsonString = JSON.stringify(jsonData, null, 4);
  fs.writeFile(JSON_OUTPUT_BOWLERS, jsonString, "utf8", (error) => {
    if (error) {
      console.error(error);
    }
  });
}

function saveStory(result){
  const jsonData = {
    matchesPerVenue: result,
  };
  let jsonString = JSON.stringify(jsonData, null, 4);
  fs.writeFile(JSON_OUTPUT_VENUE, jsonString, "utf8", (error) => {
    if (error) {
      console.error(error);
    }
  });
}

main()