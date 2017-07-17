function extractVowels(str) {
  var splitStr = str.split('');
  var lowerSplitStr = [];
  var vowels = [];
  var j = 0;
  for (var i = 0; i < splitStr.length; i++) {
    lowerSplitStr[i] = splitStr[i].toLowerCase();
    if (splitStr[i] == 'a' ||
        splitStr[i] == 'e' ||
        splitStr[i] == 'i' ||
        splitStr[i] == 'o' ||
        splitStr[i] == 'u') {
          vowels[j] = splitStr[i];
          j++;
        }
  }
  console.log(splitStr);
  console.log(vowels);
}

extractVowels('James');
extractVowels('Aisha');
extractVowels('John Jacob Jingleheimerschmitt');
extractVowels('MICHAEL');
