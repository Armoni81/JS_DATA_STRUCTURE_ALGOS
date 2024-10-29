const isAnaGram = (str1,str2) => {
    //need to check the length of both strings. If they arent equal return false
    if(str1.length !== str2.length){
        return false
    }
    // create two objects to capture the frequencies of each letter in provided strings 
    const str1Freq = {}
    const str2Freq = {}
        //put the characters in an object witht he key being the letter
        // and the value being its frequency
    for(let char of str1){
        str1Freq[char] = (str1Freq[char] || 0) + 1 
    }
     for(let char of str2){
        str2Freq[char] = (str2Freq[char] || 0) + 1 
    }
    //use str1Freq to check if a key in here is inside of str2Freq  --> if not return false
    for(let key in str1Freq){
        if(!(key in str2Freq)){
            console.log(key, 'here ')
            return false
        }
        if(!(str1Freq[key] === str2Freq[key])){
            return false
        }
    }
    return true
    // also need to check if they have equal value ---> if not return false 

}

console.log(isAnaGram('awesome', 'awesom'))