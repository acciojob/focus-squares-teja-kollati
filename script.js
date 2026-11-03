//your JS code here. If required.
const boxes = document.querySelectorAll(".square");

boxes.forEach((box) => {
	box.addEventListener("mouseover", (event) => {
		changeColor(event.target.id);
	})

	box.addEventListener("mouseout", () => {
		changeColorsBack();
	})
})

function changeColor(id){
	boxes.forEach((box) => {
		if(box.id != id){
			box.style.backgroundColor = `#6F4E37`;
		}
	})
}

function changeColorsBack() {
	boxes.forEach((box) => {
		box.style.backgroundColor = `#E6E6FA`;
	})
}