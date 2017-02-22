var modal = document.getElementById('myModal');

var img1 = document.getElementsByClassName("photo")[0];
var img2 = document.getElementsByClassName("photo")[1];
var img3 = document.getElementsByClassName("photo")[2];

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img1.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

img2.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

img3.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

var close = document.getElementsByClassName("close-button")[0];
close.onclick = function() {
	modal.style.display = "none";
}

var next = document.getElementsByClassName("next-button")[0];
next.onclick = function() {
	if (modalImg.src == document.getElementsByClassName("photo")[0].src) {
		modalImg.src = document.getElementsByClassName("photo")[1].src;
		captionText.innerHTML = document.getElementsByClassName("photo")[1].alt;
	}
	else if(modalImg.src == document.getElementsByClassName("photo")[1].src) {
		modalImg.src = document.getElementsByClassName("photo")[2].src;
		captionText.innerHTML = document.getElementsByClassName("photo")[2].alt;
	}
	else if(modalImg.src == document.getElementsByClassName("photo")[2].src) {
		modalImg.src = document.getElementsByClassName("photo")[0].src;
		captionText.innerHTML = document.getElementsByClassName("photo")[0].alt;
	}
	else {
		console.log("YOU MESSED UP");
		modal.style.display = "none";
	}
}

var back = document.getElementsByClassName("back-button")[0];
back.onclick = function() {
	if (modalImg.src == document.getElementsByClassName("photo")[0].src) {
		modalImg.src = document.getElementsByClassName("photo")[2].src;
		captionText.innerHTML = document.getElementsByClassName("photo")[2].alt;
	}
	else if(modalImg.src == document.getElementsByClassName("photo")[1].src) {
		modalImg.src = document.getElementsByClassName("photo")[0].src;
		captionText.innerHTML = document.getElementsByClassName("photo")[0].alt;
	}
	else if(modalImg.src == document.getElementsByClassName("photo")[2].src) {
		modalImg.src = document.getElementsByClassName("photo")[1].src;
		captionText.innerHTML = document.getElementsByClassName("photo")[1].alt;
	}
	else {
		console.log("YOU MESSED UP");
		modal.style.display = "none";
	}
}

