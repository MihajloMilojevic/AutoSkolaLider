// const kolone = Array.from(document.querySelectorAll(".column"));

// const brojSlika = 40;

// console.log(kolone);
// for(let i = 1; i <= brojSlika; i++)
// {
// 	const img = document.createElement("img");
// 	img.src = `/images/gallery/galerija(${i}).jpg`;
// 	img.alt = `slika${i}`;
// 	kolone[i % 2].appendChild(img);
// }





const slike = Array.from(document.querySelectorAll(`[data-gallery-image="true"]`));
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const modalImg = document.getElementById("img");
img.onclick = function(){
  
}
slike.forEach(slika => {
	slika.addEventListener("click", function(e) {
		modal.style.display = "block";
		modalImg.src = this.src;
	})
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("html-spinner").style.display = "none";
	document.getElementById("gallery").style.display = "block";
})