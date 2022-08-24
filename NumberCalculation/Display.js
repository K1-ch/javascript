const answer = function () {
  const num = document.querySelector("input").value;
  return result(num);
};

const result = function (num) {
  let string = "";
  let sum = 0;

  if (num < 0) {
    string = "-";

    num = Math.abs(num);
  }
  var rem,
    rev = 0;
  while (num != 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    sum = sum + rem;
    num = Math.floor(num / 10);
  }

  return [string + rev, sum];
};

document.querySelector(".btn1").addEventListener("click", function () {
  const val = answer();
  const val1 = val[0];
  document.querySelector(".output1").value = val1;

  if (val1 == document.querySelector("input").value) {
    document.body.appendChild(document.createElement("p"));
    document.querySelector("body p:last-child").id = "jstext";
    document.querySelector("#jstext").innerHTML =
      "It is a palindrome number🎉🎉";
  }
});
document.querySelector(".btn2").addEventListener("click", function () {
  const val = answer();
  val2 = val[1];
  document.querySelector(".output2").value = val2;
});
