// 1. SELECCIÓN
const paragraph 		= document.getElementById("paragraph")
const links 			= document.getElementsByClassName("link")
const divs 				= document.getElementsByTagName("div")
const addItemButton 	= document.getElementById("add-item-button")
const title1            = document.getElementById("title")
const h2Tag             = document.createElement("h2")
let parent              = document.getElementsByTagName("body")[0]

// 2. MANIPULACIÓN
const attribute = paragraph.getAttribute("id")
const secondAttribute = addItemButton.getAttribute("id")

paragraph.setAttribute("id", "info-paragraph")
title1.setAttribute("id", "info-title")

h2Tag.innerHTML = "Elephant"

parent.appendChild(h2Tag)

console.log(paragraph)
console.log(title1)

const perro = "Me gustan los perros"