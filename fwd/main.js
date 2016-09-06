var textColor;
var bgColor;
var currentColor = true;

textColor = prompt("What text color? Choose from major color names.");
bgColor = prompt("What background color? Choose from major color names.");

var os = document.getElementsByClassName("red-o");
var line1 = document.getElementById("title-line1");
var line2 = document.getElementById("title-line2");



function initColor() {
	
	document.body.style.color = "";
	document.body.style.background = "";
	
	for (i = 0; i < os.length; i++) {
		os[i].style.color = "";
		os[i].onclick = changeColor;
	}
	line1.style.backgroundColor = "";
	line2.style.backgroundColor = "";
}

function changeColor() {
	
	document.body.style.color = textColor;
	document.body.style.backgroundColor = bgColor;
	
	for (i = 0; i < os.length; i++) {
		os[i].style.color = "white";
		os[i].onclick = initColor;	
	}
	
	line1.style.backgroundColor = textColor;
	line2.style.backgroundColor = textColor;
			
}

initColor();
