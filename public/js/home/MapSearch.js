let key1 = "AIzaSyDiE2X3LCCvqv9z3NljOCJ0LythxLNMnSs";
let div = document.querySelector(".gmap_canvas");
let data = JSON.parse(localStorage.getItem("Location"));
let inp = document.getElementById("place").value;

searchmap();

async function searchmap() {
  div.innerHTML = "";
  if (inp == "") {
    inp = data[data.length - 1].location;
    iframe(inp);
  } else {
    inp = document.getElementById("place").value;
    iframe(inp);
  }

  async function iframe() {
    let inp1 = inp;
    let url = `https://maps.google.com/maps?q=${inp1}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    console.log("url:", url);
    let iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = "100%";
    iframe.height = "520";
    iframe.id = "gmap_canvas";
    iframe.frameborder = "0";
    iframe.scrolling = "no";
    iframe.marginheight = "0";
    iframe.marginwidth = "0";
    div.append(iframe);
  }
  let btn = document.querySelector("button");
  console.log("btn:", btn);
  btn.addEventListener("click", showlocation);

  let addresh = JSON.parse(localStorage.getItem("SetAddresh")) || [];
  let obj = {};
  function showlocation() {
    let inp2 = inp;
    obj.Add = inp2;
    addresh.push(obj);
    localStorage.setItem("SetAddresh", JSON.stringify(addresh));
    window.location.href = "/home/homepage";
  }
}
