var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function createDeleteButton(element){
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.addEventListener("click", deleteElement);
	return deleteButton;
}

function deleteElement(event){
	if(event.target.tagName === "BUTTON"){
		element = event.target.parentElement;
		element.remove();
	}
}

function inputLength() {
	return input.value.length;
}

function toggleListItem(event){
	var li = event.target;
	if(li.tagName === "LI"){
		li.classList.toggle("done");
	}
}

function addListItemListener(li){
	li.addEventListener("click", toggleListItem);
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(createDeleteButton());
	addListItemListener(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

[...li].forEach(element =>{
		element.addEventListener("click", toggleListItem);
		element.appendChild(createDeleteButton());
	}
);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);