var modal = document.getElementById('myModal');

var img1 = document.getElementById('photo1');
var img2 = document.getElementById('photo2');
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

var close = document.getElementsByClassName("close-button")[0];
close.onclick = function() {
	modal.style.display = "none";
}

var next = document.getElementsByClassName("next-button")[0];
next.onclick = function() {
	if (modalImg.src == document.getElementById('photo1').src) {
		modalImg.src = document.getElementById('photo2').src;
		captionText.innerHTML = document.getElementById('photo2').alt;
	}
	else if(modalImg.src == document.getElementById('photo2').src) {
		modalImg.src = document.getElementById('photo1').src;
		captionText.innerHTML = document.getElementById('photo1').alt;
	}
	else {
		console.log("YOU MESSED UP");
		modal.style.display = "none";
	}
}

