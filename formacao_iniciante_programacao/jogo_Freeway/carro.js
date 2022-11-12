//variaveis dos carros
let pista = [40,96,150,210,260,320];
let velocidade = [2,2.5,3,3.2,2.4,1.9];
let xCarro = [450,460,440,475,445,465];
let CompCarro = 50;
let altCarro = 40;



function desenharCarro(){
  for(let i = 0; i < imgCar.length; i++){
    image(imgCar[i],xCarro[i],pista[i],CompCarro,altCarro);
  }
  
}

function movCarro() {
  for (let i = 0; i < imgCar.length; i++){
    xCarro[i] -= velocidade[i];
  }
}

function infiniteRoad(){
  for (let i = 0; i < imgCar.length; i++) {
    if (xCarro[i] < -50){
      xCarro[i] = 600;
    }    
  }
}

//Arquivo imagem.js
//Variaveis para imagem
let estradaBackgroun;
let ator1;
let carro1;
let carro2;
let carro3;

function preload(){
    estradaBackgroun = loadImage("imagens/estrada.png");
    ator1 = loadImage("imagens/ator-1.png");
    carro1 = loadImage("imagens/carro-1.png");
    carro2 = loadImage("imagens/carro-2.png");
    carro3 = loadImage("imagens/carro-3.png");
    imgCar = [carro1, carro2, carro3, carro3, carro2, carro1]
}
