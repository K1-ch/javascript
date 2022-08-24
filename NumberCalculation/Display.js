const answer = function () {
  const num = document.querySelector("input").value;
  return result(num);
};
const result = function (num) {
  var rem,
    rev = 0;
  while (num != 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
};

document.querySelector(".btn1").addEventListener("click", function () {
  console.log("btn is clicked");
  const val = answer();
  document.querySelector(".output").value = val;
});
