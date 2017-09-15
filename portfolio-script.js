var modal = document.getElementById('myModal');

var img1 = document.getElementsByClassName("social-post")[0];
var img2 = document.getElementsByClassName("social-post")[1];
var img3 = document.getElementsByClassName("social-post")[2];
var img4 = document.getElementsByClassName("social-post")[3];

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

img4.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

var close = document.getElementsByClassName("close-button")[0];
close.onclick = function() {
	closeModal();
}

function closeModal() {
	modal.style.display = "none";
}