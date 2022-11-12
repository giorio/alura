//variavel y do personagem
let yAtor = 370;
let xAtor = 100;
let hit = false;
let pontos = 0;

function desenharAtor(){
  image(xAtor,100,yAtor,30,30);
}

function movPersonagem(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 3;
       }
    if(keyIsDown(DOWN_ARROW)){
      if (podeMovimentar()) {
        yAtor += 3;
          }  
        }
}

function verifColisao(){

  for (let i = 0; i < imgCar.length; i++) {
    hit = collideRectCircle(xCarro[i], pista[i], CompCarro, altCarro, xAtor, yAtor, 15);
    if(hit){
        colidiu();
        if (pontoZero()) {
          pontos -= 1;
        }
      }   
  }
}

function colidiu() {
  yAtor = 370;
}

function incluirPlacar() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60))
  text(pontos,  width / 5, 27)
}

function pontuar() {
  if (yAtor <= 15) {
    pontos += 1;
    yAtor = 370;
  }
}

function pontoZero() {
  return pontos > 0;
}

function podeMovimentar(){
  return yAtor > 370
}
