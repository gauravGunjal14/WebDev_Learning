
// function attach(content){
// const element = document.createElement('li');
// element.innerHTML = content;

// const parent = document.getElementById("root");
// // parent.appendChild(element);
// parent.append(element)
// };

// attach("React");


const element = document.createAttribute("id");
element.value = "first";

const elem1 = document.querySelector('li');
elem1.setAttributeNode(element);