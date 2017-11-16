
$(document).on("pagecreate", "#pageone", function() {
  $('#submitButton').on("click", function() {
    submitText();
  });            
});            

function submitText() {
	
    var answer = !Math.round(Math.random())
    
    $("#answer").text(answer);

    
  
    if (answer == true){
        navigator.notification.beep(1);
        console.log("true");
    }else {
    navigator.notification.beep(2);
        console.log("false");
    };
};