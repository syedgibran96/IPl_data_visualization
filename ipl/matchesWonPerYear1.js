function matchesWonPerYear(matches){
    const result = {}
    for(match of matches){
        const season = match.season
        const winner = match.winner
        if(!result[season]){
            result[season] = {}
        }else{
            let obj = result[season]
            if(winner in obj){
                obj[winner] +=1
            }else{
                obj[winner] = 1
            }
        }
    }
    return result
}

module.exports= matchesWonPerYear