document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}


$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            



function submitText() {
	
    $("#answer").text(!Math.round(Math.random()));
    
    navigator.notification.beep(1);
    navigator.notification.beep(2);
}