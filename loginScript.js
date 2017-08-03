var myForm = document.getElementById('logform');

myForm.addEventListener("submit", function(e){ 
    e.preventDefault(); 
     submitForm(); 
    return false; 
},false);

function submitForm() { 
    var xhr; 
    try {  xhr = new ActiveXObject('Msxml2.XMLHTTP');   }
    catch (e) {
        try {   xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
        catch (e2) 
        {
           try {  xhr = new XMLHttpRequest();  }
           catch (e3) {  xhr = false;   }
         }
    }

    var upw = document.getElementById('userpwd').value;
    var usr = document.getElementById('username').value;

    xhr.onreadystatechange  = function() { 
       if(xhr.readyState  == 4)
       {
          if(xhr.status  == 200) {
              document.getElementById("errsucc").innerHTML = "- "  + xhr.responseText;
          }
          else {
              document.getElementById("errsucc").innerHTML = "Error code " + xhr.status;
          }
        }
    };

  xhr.open("POST", "../htbin/login.py",  true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send('username=' + usr + '&userpwd=' + upw); 
}