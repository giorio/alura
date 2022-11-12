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
