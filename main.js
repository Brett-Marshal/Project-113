function preload()
{}

function setup()
{
    canvas = createCanvas(400,325);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    fill("red");
    circle(350, 280, 40);
    circle(50, 50, 40);
    circle(350, 50, 40);
    circle(50, 280, 40);
    fill('green');
    rect(40, 70, 19, 190);
    rect(68, 40, 265, 19);
    rect(68, 270, 265, 19);
    rect(340, 70, 19, 190);
    image(video, 100, 90, 200, 150);
}

function capture()
{
    save("Captured_Image.png");
}