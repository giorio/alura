function setup() {
    createCanvas(500, 400);
}
  
function draw() {
    background(estradaBackgroun);
    image(ator1,100,yAtor,30,30);
    desenharCarro();
    movPersonagem();
    movCarro();
    infiniteRoad();
    verifColisao();
    incluirPlacar();
    pontuar()
}
