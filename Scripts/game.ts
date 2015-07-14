/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;
var itera = 0;
var disp1;
var disp2;
var label1;
var label2;
var assets: createjs.LoadQueue;
var manifest = [
    { id: "1", src: "assets/images/1.png" },
    { id: "2", src: "assets/images/2.png" },
    { id: "3", src: "assets/images/3.png" },
    { id: "4", src: "assets/images/4.png" },
    { id: "5", src: "assets/images/5.png" },
    { id: "6", src: "assets/images/6.png" },
    { id: "rollButton", src: "assets/images/rollButton.png" },

    { id: "clicked", src: "assets/audio/clicked.wav" }

];


// Game Variables
var helloLabel: createjs.Text; // create a reference
var rollButton: createjs.Bitmap;


// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this); 
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init() {
    console.log("entered");
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 

    // calling main game function
    main();
}

// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '330px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring

    stage.update();

    stats.end(); // end measuring
}

// Callback function that allows me to respond to button click events
function rollButtonClicked(event: createjs.MouseEvent) {
    
    createjs.Sound.play("clicked");
    display();
}

// Callback functions that change the alpha transparency of the button

// Mouseover event
function rollButtonOver() {
    rollButton.alpha = 0.8;
}

// Mouseout event
function rollButtonOut() {
    rollButton.alpha = 1.0;
}


function Roll() {
    var betLine = [" ", " "];
    var outCome = [0, 0];

    for (var spin = 0; spin < 2; spin++) {
        outCome[spin] = Math.floor((Math.random() * 6) + 1);
        switch (outCome[spin]) {
            case 1:  // 1% probability
                betLine[spin] = "1";
                itera++;
                break;
            case 2:  // 1% probability
                betLine[spin] = "2";
                itera++;
                break;
            case 3:  // 1% probability
                betLine[spin] = "3";
                itera++;
                break;
            case 4:  // 1% probability
                betLine[spin] = "4";
                itera++;
                break;
            case 5:  // 1% probability
                betLine[spin] = "5";
                itera++;
                break;
            case 6:  // 1% probability
                betLine[spin] = "6";
                itera++;
                break;
        }
    }
    return betLine;
}


function display() {
    stage.removeAllChildren();
    var res = Roll();
    disp1 = new createjs.Bitmap(assets.getResult(res[0].toString()));
    disp2 = new createjs.Bitmap(assets.getResult(res[1].toString()));
    console.log(res[0]+" "+res[1]);
    disp1.regX = disp1.getBounds().width * 0.01;
    disp1.regY = disp1.getBounds().height * 0.01;
    disp1.x = 50;
    disp1.y = 100;
    disp2.regX = disp2.getBounds().width * 0.01;
    disp2.regY = disp2.getBounds().height * 0.01;
    disp2.x = 150;
    disp2.y = 100;
    stage.addChild(disp1);
    stage.addChild(disp2);
    var dc1;
    var dc2;
   
    label1 = new createjs.Text(res[0], "20px Consolas", "#000000");
    label1.regX = label1.getMeasuredWidth() * 1;
    label1.regY = label1.getMeasuredHeight() * 1;
    label1.x = 50;
    label1.y = 140;
    stage.addChild(label1);
    label2 = new createjs.Text(res[1], "20px Consolas", "#000000");
    label2.regX = label2.getMeasuredWidth() * 1;
    label2.regY = label2.getMeasuredHeight() * 1;
    label2.x = 250;
    label2.y = 130;
    stage.addChild(label2);

    pink();
}


function pink() {
    rollButton = new createjs.Bitmap(assets.getResult("rollButton"));
    rollButton.regX = rollButton.getBounds().width * 0.5;
    rollButton.regY = rollButton.getBounds().height * 0.3;
    rollButton.x = 160;
    rollButton.y = 270;
    stage.addChild(rollButton);
    rollButton.on("click", rollButtonClicked);
    rollButton.on("mouseover", rollButtonOver);
    rollButton.on("mouseout", rollButtonOut);

}
// Our Main Game Function
function main() {
    console.log("Game is Running");

    pink();
}