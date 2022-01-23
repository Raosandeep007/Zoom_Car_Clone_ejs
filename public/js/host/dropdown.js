
    var p = document.getElementById("dropdown");
    var box2 = document.getElementById('box2');
    var switchh = 0;
    p.addEventListener('click',function (){
        if(switchh==0) {
            switchh = 1;
            console.log(switchh);
            // box2.classList.remove("displayoff");
            box2.style.height= "0px";
        }
        else if(switchh == 1) {
            switchh = 0;
            console.log(switchh);
            // box2.classList += " displayoff";
            box2.style.height= "80px";
        } 
    });

    var p = document.getElementById("dropdown2");
    var minibox3 = document.getElementById('minibox3');
    var value1 = 0;
    p.addEventListener('click',function (value){
        if(value1==0) {
            value1 = 1;
            console.log(value1);
            // box2.classList.remove("displayoff");
            minibox3.style.height= "100px";
        }
        else if(value1 == 1) {
            value1 = 0;
            console.log(value1);
            // box2.classList += " displayoff";
            minibox3.style.height= "0px";
        }
    });
  
    var p = document.getElementById("dropdown3");
    var box4 = document.getElementById('box4');
    var value2 = 0;
    p.addEventListener('click',function (value){
        if(value2==0) {
            value2 = 1;
            console.log(value2);
            // box2.classList.remove("displayoff");
            box4.style.height= "100px";
        }
        else if(value2 == 1) {
            value2 = 0;
            console.log(value2);
            // box2.classList += " displayoff";
            box4.style.height= "0px";
        }
    });
  
    var p = document.getElementById("dropdown4");
    var box5 = document.getElementById('box5');
    var value3 = 0;
    p.addEventListener('click',function (value){
        if(value3==0) {
            value3 = 1;
            console.log(value3);
            // box2.classList.remove("displayoff");
            box5.style.height= "100px";
        }
        else if(value3 == 1) {
            value3 = 0;
            console.log(value3);
            // box2.classList += " displayoff";
            box5.style.height= "0px";
        }
    });

    var p = document.getElementById("dropdown5");
    var box6 = document.getElementById('box6');
    var value4 = 0;
    p.addEventListener('click',function (value){
        if(value4==0) {
            value4 = 1;
            console.log(value4);
            // box2.classList.remove("displayoff");
            box6.style.height= "100px";
        }
        else if(value4 == 1) {
            value4 = 0;
            console.log(value4);
            // box2.classList += " displayoff";
            box6.style.height= "0px";
        }
    });
  