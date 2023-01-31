$("#threejs-div").toggle();
$("#figma-div").toggle();

const threejsButton = document.getElementById("threejs-button");
const figmaButton = document.getElementById("figma-button");
const threejsDiv = document.getElementById("threejs-div");
const figmaDiv = document.getElementById("figma-div");



threejsButton.addEventListener("click", function() {
    $("#threejs-div").slideToggle(200);
})

figmaButton.addEventListener("click", function() {
    $("#figma-div").slideToggle(200);
})

