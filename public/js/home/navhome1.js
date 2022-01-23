import navbar from "/components/navbaraa.js";
let navbar_container = document.getElementById("navbar_container");

navbar_container.innerHTML = navbar();

$(".btn").click(function () {
  $(this).toggleClass("click");
  $(".sidebar").toggleClass("show");
});

var pro_name = JSON.parse(localStorage.getItem("info"));
console.log("pro_name:", pro_name);

if (!pro_name || pro_name == undefined) {
  let profile_name = document.getElementById("profile_name");
  let side_login = document.getElementById("side_login");
  let sd_login = document.getElementById("sd_login");
  profile_name.innerText = "Login/Signup";
  profile_name.href = "/user/login";
  sd_login.href = "/user/login";
  side_login.innerText = "Login/Signup";
} else if (profile_name !== undefined) {
  let logout = document.getElementById("logout");
  logout.innerText = "Log Out";
  let logouticon = document.getElementById("logouticon");
  logouticon.innerHTML = `<i class="fas fa-sign-out-alt"></i>`;
  let profile_name = document.getElementById("profile_name");
  let side_login = document.getElementById("side_login");
  let sd_login = document.getElementById("sd_login");

  profile_name.innerText = pro_name[0].full_name; //just for time being
  side_login.innerText = pro_name[0].full_name;
  profile_name.href = "/user/profile";
  sd_login.href = "/user/profile";
  let profilea = document.createElement("a");
  profilea.innerHTML = `<i class="far fa-user-circle"></i>`;
  profilea.href = "/user/profile";
  profilea.id = "profilea";

  let profilepicappen = document.getElementById("profilepicappen");
  profilepicappen.append(profilea);
  logout.addEventListener("click", function () {
    profile_name.innerText = "Login/Signup";
    side_login.innerText = "Login/Signup";
    window.location.href = "/home";
    localStorage.removeItem("info");
  });
}
