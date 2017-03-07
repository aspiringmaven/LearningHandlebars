$(document).ready(function() {
	prepareData();
});



function prepareData() {

	$.ajax({
		url:"http://it-ebooks-api.info/v1/search/Java",
		type:'GET',
		dataType:'json',
		success:function(response){
			performCallback(response.Books);
			
		},
		error:function(err) {
		}
  });
}

function performCallback(books) {
	//identify source
	var htmlTemplate = $("#appTemplate").html();
	
	
	//convert into handle bar template
	var handlebarTemplate = Handlebars.compile(htmlTemplate);
	
	//prepare data
	var data = {
		userName:"Sumit Kawatra",
		employeeId:123252356,
		designation: "Senior Developer",
		company:"NIITTech",
		Books:books
	};
	
	console.log(data);
	//bind the template with data
	var instance = handlebarTemplate(data);
		$("#renderHere").append(instance);
	
}


