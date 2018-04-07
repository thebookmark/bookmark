

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    background(255);

}

function draw() {
    if (mouseIsPressed) {
        fill(mouseX, mouseY, mouseY);
        ellipse(mouseX, mouseY, mouseX, mouseY);
}
}
