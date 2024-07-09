const container = document.querySelector("#container");

const newParagraph = document.createElement("p");
newParagraph.textContent = "Hey I'm red!"
newParagraph.setAttribute("style", "color:red;");
container.appendChild(newParagraph);

const newHeader = document.createElement("h3");
newHeader.textContent = "I'm a blue h3";
newHeader.setAttribute("style", "color:blue;");
container.appendChild(newHeader);

const newDiv = document.createElement("div");
newDiv.setAttribute("style", "background-color: pink; border-color: black;")


const newBigHeader = document.createElement("h1");
newBigHeader.textContent = "I'm in a div";
newDiv.appendChild(newBigHeader);

const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "ME TOO!";
newDiv.appendChild(anotherParagraph);

container.appendChild(newDiv);
