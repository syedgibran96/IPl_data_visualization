function matchesWonPerYear(matches){
    let result = {}, teams = []
    for(match of matches){
        const season = match.season
        const winner = match.winner
        if(result[winner]) {
            result[winner].push(season)
        }else {
            result[winner] = [season]
        }
    }
    return result
}

module.exports = matchesWonPerYear

