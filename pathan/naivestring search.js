function searchstring(longerstring, string) {
  var count = 0;
  for (var i = 0; i < longerstring.length; i++) {
    for (var j = 0; j < string.length; j++) {
      //   console.log(string[j], longerstring[i + j]);
      if (string[j] !== longerstring[i + j]) {
        break;
      }

      if (j === string.length - 1) {
        console.log("foundone");
        count++;
      }
    }

    console.log(count);
  }
}
searchstring("sossossop", "sos");
