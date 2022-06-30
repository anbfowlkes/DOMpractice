// Finding HTML Elements
// document.getElementById(id) -- 	Find an element by element id
// document.getElementsByTagName(name) --	Find elements by tag name
// document.getElementsByClassName(name) --	Find elements by class name

// Changing HTML Elements
// element.innerHTML =  new html content --	Change the inner HTML of an element
// element.attribute = new value --	Change the attribute value of an HTML element
// element.style.property = new style --	Change the style of an HTML element
// element.setAttribute(attribute, value) --	Change the attribute value of an HTML element

// Adding and Deleting Elements
// document.createElement(element) --	Create an HTML element
// document.removeChild(element) --	Remove an HTML element
// document.appendChild(element) --	Add an HTML element
// document.replaceChild(new, old) --	Replace an HTML element
// document.write(text) --    Write into the HTML output stream

let h1 = document.createElement('h1');
let p = document.createElement('p');
let img = document.createElement('img');

h1.setAttribute('class', 'header1');
p.setAttribute('id', 'ptag');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png');

let body = document.getElementsByTagName('body');
body.appendChild(h1);
body.createChild(p);
body.createChild(img);