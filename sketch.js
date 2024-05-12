// Variaveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 18;
let raio = diametro/2

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variaveis da raquete

let xRaquete = 5;
let yRaquete = 10;
let raqueteComprimento = 10
let raqueteAltura = 90;

//Variaveis do oponente

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("Pong - Sons/trilha.mp3");
    ponto = loadSound("Pong - Sons/ponto.mp3");
    raquetada = loadSound("Pong - Sons/raquetada.mp3");
}

function setup() {
    createCanvas(600, 400);
    trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();

}


function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function mostraRaquete(x, y){
  rect(x, y,raqueteComprimento,raqueteAltura);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;  
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1
  }
  if(yBolinha + raio> height || yBolinha - raio < 0 ){
    velocidadeYBolinha *= -1
  }
}

function movimentaMinhaRaquete(){
  if(keyIsDown(87)){
    yRaquete -= 10;
  } if(keyIsDown(83)){
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  if(keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  } if(keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
        raquetada.play()
    }
}

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170,26)
  fill(color(255,140,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26)
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
        ponto.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
        ponto.play();
    }
}






