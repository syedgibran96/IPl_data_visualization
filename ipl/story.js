function story(matches){
    const result = {}
    for (match of matches){
        const venue = match.venue
        if(result[venue]){
            result[venue] += 1
        }else {
            result[venue] =1
        }

}
 return result;
}
module.exports = story;