function preload() {
  soundEk = loadSound("habibi wlah.mp3");  
  soundDho = loadSound("heat waves.mp3");  
  soundTheen = loadSound("ttf bgm.mp3");  
  soundCharr = loadSound("rick rolled.mp3");  
}

function setup() {
    canvas = createCanvas(500,500);
    canvas.position(700,350);
    background(255,255,255); 

    vid = createCapture(VIDEO);
    vid.hide();
     

    
    
}

function draw() {
 image(vid ,0,0, 500,500);   
}