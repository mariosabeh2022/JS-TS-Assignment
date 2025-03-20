function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCounter = 0;
    for (let i = 0; i < str.length; i++)
        if (vowels.includes(str[i]))
            vowelCounter++;
    return vowelCounter;
}
console.log(countVowels("typescript"));