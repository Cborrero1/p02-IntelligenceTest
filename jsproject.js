var score = 0;

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
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
  if(ans1 != "917") {
   document.getElementById("ans1-check").innerHTML="Wrong Answer";
  document.getElementById("ans1-check").classList.remove("hidden-message");
  document.getElementById("ans1-check").classList.add("shown-message");
    }
    else {
      document.getElementById("ans1-check").innerHTML="Correct!";
      
  }
}

function validateAns2()
{
  var ans2 = document.getElementById("ans2").value;
  if(ans2 != "DOWN") {
   document.getElementById("ans2-check").innerHTML="Wrong Answer";
  document.getElementById("ans2-check").classList.remove("hidden-message");
  document.getElementById("ans2-check").classList.add("shown-message");
    }
    else {
      document.getElementById("ans2-check").innerHTML="Correct!";
      
  }
}

function validateAns3()
{
  var ans3 = document.getElementById("ans3").value;
  if(ans3 != "265") {
   document.getElementById("ans3-check").innerHTML="Wrong Answer";
  document.getElementById("ans3-check").classList.remove("hidden-message");
  document.getElementById("ans3-check").classList.add("shown-message");
    }
    else {
      document.getElementById("ans3-check").innerHTML="Correct!";
      
  }
}

function nixon()
{
  var ans1 = document.getElementById("ans1").value;
   if(ans1 == "917") {
  score = score + 1;
  setCookie("scores",score,0);}
  window.location.href = "question2.html";
  
}

function lincoln()
{
  var ans2 = document.getElementById("ans2").value;
   if(ans2 == "DOWN") {
  score = score + 1;
  setCookie("scores",score,0); }
  window.location.href = "question3.html";
  
}

function obama()
{
  var ans3 = document.getElementById("ans3").value;
   if(ans3 == "265") {
  score = score + 1;
  setCookie("scores",score,0);}
  window.location.href = "results.html";
  
}