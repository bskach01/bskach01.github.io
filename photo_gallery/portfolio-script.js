var modal = document.getElementById('myModal');

var img1 = document.getElementsByClassName("social-post")[0];
var img2 = document.getElementsByClassName("social-post")[1];
var img3 = document.getElementsByClassName("social-post")[2];
var img4 = document.getElementsByClassName("social-post")[3];

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

