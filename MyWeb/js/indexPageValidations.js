/*var position=0
function startsliding()
{
  console.log("current source is ")
  //alert("alert changing image")
  $("#slideHolder").attr("src","images/image-"+position+".jpg")
  if(position<8)
      position++;
  else
    position=0;
  setTimeout(startsliding,5000)
}*/
$(document).ready(function(){
  
})


$("#signup").click(function(){
  console.log("In signup.onclick()");
  $("#popUpHeader").html("SignUp")
  $("#popUpFooter").html("Signup")
  if($("#linkForgotpassword").length)
    $('#linkForgotpassword').remove()

});
$("#login").click(function(){
  console.log("In login.onclick()");
  $('#popUpHeader').html("Login")
  $('#popUpFooter').html("Login")
  if(!($("#linkForgotpassword").length))//if(zero)=false=>it does not exists
    $('#dialogFooterDiv').append("<a id=\"linkForgotpassword\" href=\"#\" >Forgot password</a>")

});
