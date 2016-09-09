var foo = "something";
var divTwo;
var myVideo;

console.log(foo);

if (typeof(foo) == "string") {
    console.log("it's a string")
    alert("just for fun");
}
console.log(typeof(foo));

var i = 0;

document.addEventListener("mousedown", function() {
    console.log("clicked");
})


//this way of declaring a function is useful
//because javascript compiles it right away
//so we can use this function before this declaration in the code.
function aFunction() {
    alert(i);
    i++;
}

//this other function can't be used before this declaration, because of the way of declaring it, which assigns its value to a variable
var bfunction = function() {
    alert("bfunction");
}

console.log(window.document);

//this is super important!!
//it has two parts
//first the declaration of the function
function whenPageLoadsDoThis() {
    //append the string "nothing" to the body
    window.document.body.innerHTML += "nothing";

    //way of traversing the dom
    //it's the reason you use ids
    divTwo = window.document.getElementById("two");
    divTwo.innerHTML = "haha";
    divTwo.style.color = "red";
    divTwo.style.fontSize = "100px";
    divTwo.addEventListener("click", whenMouseIsClicked);

    //we can omit window, because it is implied
    myVideo = document.getElementById("avideo");

    //anonymous inline function
    myVideo.addEventListener("timeupdate",
        function() {
            console.log(myVideo.currentTime);
            if (myVideo.currentTime > 10) {
                divTwo.innerHTML = "cow"
            }
            if (myVideo.currentTime > 15) {
                divTwo.innerHTML = "hungry"
            }
        });

    myVideo.play();

}

function whenMouseIsClicked() {
    divTwo.style.color = "green";
}

//then the event listener to execute it
window.addEventListener("load", whenPageLoadsDoThis);
