
"use strict"
var vardas = document.getElementById("vardas-input")
var pavarde = document.getElementById("pavarde-input")
var amzius = document.getElementById("amzius-input")

// Parasius kazka i laukeli ir parasius vardas.value gauni laukelio verte. 

var prideti = document.getElementById("prideti")
var table = document.getElementById("table")


// Eilutes pridejimas
prideti.addEventListener("click", function(e){
    e.preventDefault()
    var newElement = document.createElement("tr")
    if(vardas.value, pavarde.value, amzius.value){
        newElement.innerHTML = 
            `
            <td>${vardas.value}</td>
            <td>${pavarde.value}</td>
            <td>${amzius.value}</td>
            `
            table.append(newElement)
            newElement.classList.add("trs")
            vardas.value = ""
            pavarde.value = ""
            amzius.value = ""
}})

// Paskutines eilutes pasalinimas

var istrintiPas = document.getElementById("istrintiPas")

istrintiPas.addEventListener("click", function(e){
    e.preventDefault()
    var trs = document.querySelectorAll(".trs")
    if(trs.length){
        trs[trs.length - 1].remove()
    }
})

// Pirmos eilutes pasalinimas

var istrintiPir = document.getElementById("istrintiPir")

istrintiPir.addEventListener("click", function(e){
    e.preventDefault()
    var trs = document.getElement(".trs")
    if(trs.length){
        trs[trs.length - 1].remove()
    }
})

/*
Funkcija 
*/

function validateForm() {
  var x = document.forms["vardasForm"]["fVardas"].value;
  if (x == "") {
    alert("Ne visi duomenys įrašyti!");
    return false;
  }
}



prideti.addEventListener("click", function(e){
    e.preventDefault()
    var newElement = document.createElement("tr")
    if(vardas.value, pavarde.value, amzius.value){
        newElement.innerHTML = 
            `
            <td>${vardas.value}</td>
            <td>${pavarde.value}</td>
            <td>${amzius.value}</td>
            `
            table.append(newElement)
            newElement.classList.add("trs")
            vardas.value = ""
            pavarde.value = ""
            amzius.value = ""
}else if(vardas.value, pavarde.value){
        newElement.innerHTML = 
            `
            <td>${vardas.value}</td>
            <td>${pavarde.value}</td>
            <td>${amzius.value}</td>
            `
            table.append(newElement)
            newElement.classList.add("trs")
            vardas.value = ""
            pavarde.value = ""
            amzius.value = ""
}else if(vardas.value){
        newElement.innerHTML = 
            `
            <td>${vardas.value}</td>
            <td>${pavarde.value}</td>
            <td>${amzius.value}</td>
            `
            table.append(newElement)
            newElement.classList.add("trs")
            vardas.value = ""
            pavarde.value = ""
            amzius.value = ""
}else if(pavarde.value, amzius.value){
        newElement.innerHTML = 
            `
            <td>${vardas.value}</td>
            <td>${pavarde.value}</td>
            <td>${amzius.value}</td>
            `
            table.append(newElement)
            newElement.classList.add("trs")
            vardas.value = ""
            pavarde.value = ""
            amzius.value = ""
}else if(vardas.value, amzius.value){
        newElement.innerHTML = 
            `
            <td>${vardas.value}</td>
            <td>${pavarde.value}</td>
            <td>${amzius.value}</td>
            `
            table.append(newElement)
            newElement.classList.add("trs")
            vardas.value = ""
            pavarde.value = ""
            amzius.value = ""
}else if(amzius.value){
        newElement.innerHTML = 
            `
            <td>${vardas.value}</td>
            <td>${pavarde.value}</td>
            <td>${amzius.value}</td>
            `
            table.append(newElement)
            newElement.classList.add("trs")
            vardas.value = ""
            pavarde.value = ""
            amzius.value = ""
}else if(pavarde.value){
        newElement.innerHTML = 
            `
            <td>${vardas.value}</td>
            <td>${pavarde.value}</td>
            <td>${amzius.value}</td>
            `
            table.append(newElement)
            newElement.classList.add("trs")
            vardas.value = ""
            pavarde.value = ""
            amzius.value = ""
}})


