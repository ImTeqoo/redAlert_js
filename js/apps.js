console.log("Sanity check");

function hello(){
	console.log("I GOT HOMEWORK");
	var changeDiv = document.getElementById('divElement');
	changeDiv.innerHTML = "WHY";
	console.log(changeDiv);
}

function soFAAST(){
	console.log('hello');
	var classElements = document.getElementsByClassName("firstPeriod");
	console.log(classElements);
	classElements[0].innerHTML = "WHY NO WORK?";
}