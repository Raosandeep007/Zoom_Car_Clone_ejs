let arr = JSON.parse(localStorage.getItem("Location")) || [];
let obj = {};
function searchlocation() {
  let inp = document.getElementById("inp").value;
  obj.location = inp;
  arr.push(obj);
  localStorage.setItem("Location", JSON.stringify(arr));
  window.location.href = "/home/MapSearch";
}
