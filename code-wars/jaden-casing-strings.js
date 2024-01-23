// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
String.prototype.toJadenCase = function () {
    let result = "";
    // turn string into arr of words
    result = this.split(" ");
    // capitalize 1st letter of each word in arr and push to new arr
    newArr = [];
    result.forEach(word=>{
        let letter = word.substring(0, 1).toUpperCase();
        capWord = word.replace(word.charAt(0), letter);
        newArr.push(capWord);
    });
    result = newArr.join(" ");
    return result;
};
