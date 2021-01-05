var args = process.argv.slice(2);
var mainArray = args[0];

var len = mainArray.split("").length;

function realCalculator(t, n, n1) {
  if (t == "add") {
    var a = parseInt(n);
    var b = parseInt(n1);
    return a + b;
  } else if (t == "multiply") {
    var a = parseInt(n);
    var b = parseInt(n1);
    return a * b;
  } else if (t == "divide") {
    var a = parseInt(n);
    var b = parseInt(n1);
    return a / b;
  }
}

while (mainArray.indexOf("(") >= 0) {
  var lastFunction = mainArray.indexOf(")");
  for (var i = lastFunction - 1; i <= len; --i) {
    if (mainArray[i] == "(") {
      var res = mainArray.substring(i + 1, lastFunction);
      res = res.split(" ");
      var answer = realCalculator(res[0], res[1], res[2]);
      mainArray = mainArray.split("");
      mainArray.splice(i, lastFunction - i + 1, answer);

      mainArray = mainArray.join("");
      break;
    }
  }
}
console.log(mainArray);
