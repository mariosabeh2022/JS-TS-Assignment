function firstNonRepeatingChar(str){
        //Getting all duplicate characters from the string
        let duplicates=duplicateCharacters(str)
        for(let i=0;i<str.length;i++){
            //Checking for the first non duplicate
            if(!duplicates.includes(str[i])) return str[i]
        }
        //All characters are unique
        return null;
    }
    
function duplicateCharacters(str){
    let result=[];
    for(let i=0;i<str.length;i++){
        //Used the counter to check for each character its occurence
        let counter=0;
        let characterAtIndex=str[i];
        for(let k=0;k<str.length;k++){
            if(str[k]==characterAtIndex) counter++;
        }
        if(counter>=2 && !result.includes(str[i])) result.push(str[i])
    }
    return result;
}
console.log(firstNonRepeatingChar('swiss'))
console.log(firstNonRepeatingChar('racecar'))