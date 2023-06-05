function checkpass(){

pass=document.getElementById("pass").value;
rule=new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

test=rule.test(pass);
msg=document.getElementsByTagName("small")[0];
if(test)
{
    msg.innerHTML="password valide";
    msg.style.color="green";
}
else{
    msg.innerHTML="password not valide ,must be length of 8<p> ,contain at least 1 uppercase and </p>  <p>one lower case and a special character </p>";
   

    msg.style.color="rgb(216, 81, 81)";
}
}