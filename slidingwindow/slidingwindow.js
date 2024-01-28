//longest substring with unique values
function longestsubstring(s) {
  let substringss = {};
  let start = 0;
  let maxlength = 0;
  let longeststring = 0;

  for (let end = 0; end < s.length; end++) {
    if (s[end] in substringss && substringss[s[end]] >= start) {
      //if the char is present ,update the start by adding 1 to the last occurence index
      start = substringss[s[end]] + 1;
    }
    substringss[s[end]] = end;

    //update the max length
    if (end - start + 1 > maxlength) {
      maxlength = end - start + 1;
      longeststring = start;
    }
  }
  return s.substring(longeststring, longeststring + maxlength);
}
let input = "abcabcdbb";
let result = longestsubstring(input);
console.log(result);
