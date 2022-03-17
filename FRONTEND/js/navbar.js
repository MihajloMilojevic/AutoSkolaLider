const meniIcon = document.getElementById("menu-icon");

meniIcon.addEventListener("click", () => {
	if(meniIcon.getAttribute("data-visible") === "true")
		meniIcon.setAttribute("data-visible", "false");
	else
		meniIcon.setAttribute("data-visible", "true");
})