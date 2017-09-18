var modal = document.getElementById('myModal');

var img1 = document.getElementsByClassName("social-post")[0];
var img2 = document.getElementsByClassName("social-post")[1];
var img3 = document.getElementsByClassName("social-post")[2];
var img4 = document.getElementsByClassName("social-post")[3];
var img5 = document.getElementsByClassName("social-post")[4];
var img6 = document.getElementsByClassName("social-post")[5];
var img7 = document.getElementsByClassName("social-post")[6];
var img8 = document.getElementsByClassName("social-post")[7];
var img9 = document.getElementsByClassName("social-post")[8];
var img10 = document.getElementsByClassName("social-post-vertical")[0];
var img11 = document.getElementsByClassName("social-post-vertical")[1];

var modalImg = document.getElementById("img01");

img1.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}

img2.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}

img3.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}

img4.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}

img5.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}

img6.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}

img7.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}

img8.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}

img9.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}

img10.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}

img11.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}

var close = document.getElementsByClassName("close-button")[0];

close.onclick = function() {
	closeModal();
}

function closeModal() {
	modal.style.display = "none";
}

modal.onclick = function(event) {
	if (event.target == modal) {
		closeModal();
	}
}

document.addEventListener ('keydown', function(e) {
	if (e.keyCode == 27) {
		closeModal();
	}
});