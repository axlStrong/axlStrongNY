var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/new-york2.jpeg') {
        myImage.setAttribute
        ('src','images/new-york3.jpg');
    } else {
        myImage.setAttribute ('src','images/new-york2.jpeg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'The New York is yours,' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'The New York is yours,' + "Maxim";
} 
myButton.onclick = function() {
    setUserName();
}
 
