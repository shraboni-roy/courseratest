/*
$(document).ready(function(){
	$("#add").click(function(){
		if($("#c1").prop('checked')){
			$("#seletedBook").show();
		}
	});
	
});*/

$(function (){
	//Assign Click event to Button.
	$("#add").click(function (){
		var bookName;
		var bookDetails;
		
		$("#selectedBook").empty();
		
		var table = document.getElementById("selectedBook");
		var row = table.insertRow(0);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = "BOOK";
		cell2.innerHTML = "DETAILS";
		
		//Loop through all checked CheckBoxes in GridView.
		$("#Table1 input[type=checkbox]:checked").each(function () {
			
			var row = $(this).closest("tr")[0];
			bookName = row.cells[0].innerHTML;
			bookDetails = row.cells[1].innerHTML;
			
			var table = document.getElementById("selectedBook");
			var row = table.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			cell1.innerHTML = bookName;
			cell2.innerHTML = bookDetails;
		});
	});
});
