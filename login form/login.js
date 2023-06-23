

function alll()

{
    var usernamefield=document.getElementById('inputbox').value;
    var passwordfield=document.getElementById('inputboxone').value;
    
    if(usernamefield=="akash" && passwordfield=="12345"){

      confirm("Are you sure you want to log in");

      location.assign("https://www.w3schools.com/js/default.asp");

        }else{

         window.alert("password is wrong");
        
        }

}

              /*username = akash
                password = 12345*/


