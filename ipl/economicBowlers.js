function economicBowlers(deliveries, matches) {
    const result = {};

    for (match of matches){
        
        for (delivery of deliveries){
            const year = match.season;
            const idM = match.id;
            const idD = delivery.match_id;
            const bowler = delivery.bowler;
            const runs = delivery.total_runs;
            if(year == 2015 && idM == idD)
            {
                if (!result[bowler]) {
                  result[bowler] = {
                    balls: 1,
                    runs: parseInt(runs),
                  };
                } else {
                  result[bowler]["runs"] += parseInt(runs);
                  result[bowler]["balls"] += 1;
                }
            }
            
        }
    }
    for (i in result) {
      const r =result[i]["runs"];
      const o =result[i]["balls"]/6;
      result[i]= parseFloat((r/o).toFixed(2));
    }
    
    return result;
}

module.exports = economicBowlers