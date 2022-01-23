let addresh = JSON.parse(localStorage.getItem("SetAddresh")) 
    let add = addresh[addresh.length-1] ;
    let CurrentAddresh = add.Add ;
 let div1 = document.getElementById("text1") ; 
    div1.innerText = CurrentAddresh.style.color.black ;
      


let date = JSON.parse(localStorage.getItem("BookingDate"));
let journydate  = date.Date ; 
let div = document.getElementById("date") ;
div.innerText  = journydate ; 
