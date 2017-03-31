//Cody Borrero
//setCookie and getCookie code is courtesy of W3Schools
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function showHint()
{
  alert("Shame on you for wanting a hint. Geniuses don't need hints to solve things because they're geniuses. Now get back to it and figure it out.");
}
 function showHint2()
{
  alert("You serious? First of all I'm not giving out answers here okay this is an official test no hints! Second, if you don't know this then you need to shut down your computer because you've instantly failed.");

}

 function showHint3()
{
  alert("C'mon. You're on question 3. If you're this far then surely you don't need a hint. This is the easiest question in the world, it's basic algebra.");

}

function validateAns1()
{
  var ans1 = document.getElementById("ans1").value;
  if(isNaN(ans1) === true) {
  document.getElementById("ans1-check").innerHTML="Only numbers are allowed";
  document.getElementById("ans1-check").classList.remove("hidden-message");
  document.getElementById("ans1-check").classList.add("shown-message");
  }
  else {
  if(ans1 != "917") {
   document.getElementById("ans1-check").innerHTML="Wrong Answer";
  document.getElementById("ans1-check").classList.remove("hidden-message");
  document.getElementById("ans1-check").classList.add("shown-message");
    }
    else {
      document.getElementById("ans1-check").innerHTML="Correct!";
      
  }
}}

function validateAns2()
{
  var ans2 = document.getElementById("ans2").value;
  if(isNaN(ans2) === false) {
  document.getElementById("ans2-check").innerHTML="Only letters are allowed";
    document.getElementById("ans2-check").classList.remove("hidden-message");
  document.getElementById("ans2-check").classList.add("shown-message");}
  else{
  if(ans2 != "DOWN") {
  document.getElementById("ans2-check").innerHTML="Wrong Answer";
  document.getElementById("ans2-check").classList.remove("hidden-message");
  document.getElementById("ans2-check").classList.add("shown-message");
    }
    else {
      document.getElementById("ans2-check").innerHTML="Correct!";
      
  }
}}

function validateAns3()
{
  var ans3 = document.getElementById("ans3").value;
  if(isNaN(ans3) === true) {
  document.getElementById("ans1-check").innerHTML="Only numbers are allowed";
    document.getElementById("ans3-check").classList.remove("hidden-message");
  document.getElementById("ans3-check").classList.add("shown-message");}
  else {
  if(ans3 != "265") {
   document.getElementById("ans3-check").innerHTML="Wrong Answer";
  document.getElementById("ans3-check").classList.remove("hidden-message");
  document.getElementById("ans3-check").classList.add("shown-message");
    }
    else {
      document.getElementById("ans3-check").innerHTML="Correct!";
      
  }
}}

function nixon()
{
  var ans1 = document.getElementById("ans1").value;
  var R = 1;
  var F = 0;
   if(ans1 == "917") {
  setCookie("ans1",R,30); }
  else {
    setCookie("ans1",F,30);
  }
  window.location.href = "question2.html";
  
}

function lincoln()
{
  var ans2 = document.getElementById("ans2").value;
  var R = 1;
  var F = 0;
   if(ans2 == "DOWN") {
  setCookie("ans2",R,30); }
  else {
    setCookie("ans2",F,30);
  }
  window.location.href = "question3.html";
  
}

function obama()
{
  var ans3 = document.getElementById("ans3").value;
  var R = 1;
  var F = 0;
   if(ans3 == "265") {
       setCookie("ans3",R,30); }
  else {
    setCookie("ans3",F,30);
  }
  window.location.href = "results.html";
  
}

function displayResults(){
  var res1 = getCookie("ans1");
  var res2 = getCookie("ans2");
  var res3 = getCookie("ans3");
  var resF = res1 + res2 + res3;
  var resFF = Number(resF);
  var resFFF = resFF / 3;
  var resF4 = resFFF * 100 + "%";
  if(res1 == 1){
    document.getElementById("spAns1").innerHTML="Correct!";
    document.getElementById("spAns1").classList.remove("sp");
    document.getElementById("spAns1").classList.add("spC");
  }
  else{
    document.getElementById("spAns1").innerHTML="Wrong!";
    document.getElementById("spAns1").classList.remove("sp");
    document.getElementById("spAns1").classList.add("spI");
  }
  if(res2 == 1){
    document.getElementById("spAns2").innerHTML="Correct!";
    document.getElementById("spAns2").classList.remove("sp");
    document.getElementById("spAns2").classList.add("spC");
  }
  else{
    document.getElementById("spAns2").innerHTML="Wrong!";
    document.getElementById("spAns2").classList.remove("sp");
    document.getElementById("spAns2").classList.add("spI");
  }
  if(res3 == 1){
    document.getElementById("spAns3").innerHTML="Correct!";
    document.getElementById("spAns3").classList.remove("sp");
    document.getElementById("spAns3").classList.add("spC");
  }
  else{
    document.getElementById("spAns3").innerHTML="Wrong!";
    document.getElementById("spAns3").classList.remove("sp");
    document.getElementById("spAns3").classList.add("spI");
  }
  document.getElementById("spR").innerHTML = resF4;
  document.getElementById("spR").classList.remove("sp");
  document.getElementById("spR").classList.add("spCC");
  
}