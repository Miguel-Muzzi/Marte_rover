canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverWidth = 100;
roverHeight = 90;
nasa_array = ["nasa_image_1.jpg","nasa_image_2.jpeg","mars.jpg"];
randomNumber = Math.floor(Math.random()*3);
backgroundImage = nasa_array[randomNumber];
roverImage = "rover.png";
roverImageup = "rover up.png"
roverImagedown = "rover down.png"
roverX = 10;
roverY = 10;

function add() {
    backgroundImgTag = new Image(); //definindo uma variavel com uma nova imagem
    backgroundImgTag.onload = uploadBackgruond; //ajustando uma função, ao carregar essa variável
    backgroundImgTag.src = backgroundImage; //carregar a imagem

    roverImgTag = new Image(); //definindo uma variável com uma nova imagem
    roverImgTag.onload = uploadrover; // ajustando uma função, ao carregar essa variável
    roverImgTag.src = roverImage; //carregar a imagem
    
    roverImgTagUp = new Image(); //definindo uma variável com uma nova imagem
    roverImgTagUp.onload = uploadroverup; // ajustando uma função, ao carregar essa variável
    roverImgTagUp.src = roverImageup; //carregar a imagem

    roverImgTagDown = new Image(); //definindo uma variável com uma nova imagem
    roverImgTagDown.onload = uploadroverdown; // ajustando uma função, ao carregar essa variável
    roverImgTagDown.src = roverImagedown; //carregar a imagem
}
function uploadBackgruond(){
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

function uploadroverup(){
    ctx.drawImage(roverImgTagUp, roverX, roverY, roverWidth, roverHeight);
}

function uploadroverdown(){
    ctx.drawImage(roverImgTagDown, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", myKeyDown)

function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38'){
            up();
            console.log("cima");
        }
        if(keyPressed == '40'){
            down();
            console.log("baixo");
        }
        if(keyPressed == '37'){
            left();
            console.log("esquerda");
        }
        if(keyPressed == '39'){
            right();
            console.log("direita");
        }
}

function right(){
    if(roverX <= 700){
        roverX = roverX +10;
        uploadBackgruond()
        uploadrover()
    }
}

function left(){
    if(roverX >= 0){
        roverX = roverX -10;
        uploadBackgruond();
        uploadrover();
    }
}

function down(){
    if(roverY <= 500){
        roverY = roverY +10;
        uploadBackgruond();
        uploadroverdown();
    }
}

function up(){
    if(roverY >= 0){
        roverY = roverY -10;
        uploadBackgruond();
        uploadroverup();
    }
}