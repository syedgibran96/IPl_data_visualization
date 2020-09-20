function extraRunsPerTeam (deliveries,matches) {
    const result = {};
    for (match of matches){
        for (delivery of deliveries){
            const year = match.season;
            const idM = match.id;
            const idD = delivery.match_id;
            const runs = delivery.extra_runs
            const team = delivery.bowling_team;
            if( year == 2016 && idM == idD)
            {
                if(!result[team]){
                    result[team] = parseInt(runs);
                }else {
                    result[team] += parseInt(runs);
                }
            }
        }
    }
    return result
}


module.exports = extraRunsPerTeam;