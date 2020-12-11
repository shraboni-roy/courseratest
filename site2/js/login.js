
$(document).ready(function(){
	$("#submit").click(function(){
		var name = $("#name").val();
		var pass = $("#password").val();
		if(name == "user" && pass == "user")
		{
			$("#wrong").hide();
			//redirect to book information page
			window.location.href = "./bookinformation.html";
			
		}
		else
		{
			//invalid user
			$("#wrong").show();
		}
	});
});
