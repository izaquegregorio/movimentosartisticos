var img;
var imgC;
var imgM;
var imgPP;
var imgR;
var imgSD;
var imgEM;
var imgFR;
var imgED;
var imgGB;
var imgPC;
var imgKM;
var imgHM;
var imgMD;
var imgCP;
var imgMD;
var imgMO;
var imgPC;
var imgMC;
var imgMS;
var tela;
var x=85;
var y=122;
var yI=103;
var yT=102;
var opção = 1;
var tela=0;
var xt=540;
var xi=544;
var xipp=694;
var xiR=844;
var xiSD=994;
var xiEM=1144;
var xiFR=1294;
var xiED=1444;
var xiGB=1594;
var xiPC=1744;
var xiKM=1894;
var xiHM=2044;
var xiMD=2194;
var xiCP=2344;
var xiMDI=2494;
var xiMO=2644;
var xiPCI=2794;
var xiMC=2944;
var xiMS=3094;
var yA=330;
var yB=350;
var yC=365;
var yD=415;
var yE=445;
var yF=485;
var xA=205;
var xB=170;
var xC=205;
var xD=170;
var xDD=140;
var xF=200;
var xFF=150;
var vidas=5;
var raio=7.5;

function preload(){
  img=loadImage('arte.png');
  imgC=loadImage('15X20.jpg');
  imgM=loadImage('Monet.png');
  imgPP=loadImage('Picasso.jpg');
  imgR=loadImage('Renoir.jpg');
  imgSD=loadImage('Dali.jpg');
  imgEM=loadImage('Manet.jpg');
  imgFR=loadImage('Frida.jpg');
  imgED=loadImage('Degas.jpg');
  imgGB=loadImage('Georges_Braque.jpg')
  imgPC=loadImage('Cezanne.jpg');
  imgKM=loadImage('Luna_1899 (2).png')
  imgHM=loadImage('Matisse.jpg');
  imgMD=loadImage('Marcel_Duchamp.jpg')
  imgCP=loadImage('Pissarro.jpg');
  imgMDI=loadImage('Mondriaan.jpg');
  imgMO=loadImage('Morisot.jpg');
  imgPCI=loadImage('Paul_Klee_1911 (2).jpg')
  imgMC=loadImage('Mary-cassatt.jpg');
  imgMS=loadImage('shagal.jpg') 
}
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(225);
  if(tela==0)
    menu();
  if(tela==1)
    fase1();
  if(tela==2)
    instruções();
  if(tela==3)
    creditos();
  if(tela==4)
    fase2();
  if(tela==5){
    image(img,0,0);
    fill('#FFFFFF')
    textAlign(CENTER)
    text('GAME OVER!', 50, 200, width);
  if(tela==6)
    fase3();
  if(tela==7)
    image(img,0,0);
    fill('#FF0000')
    textAlign(CENTER)
    text('CONTINUE ESTUDANDO ARTE!', 50, 300, width);
  }
}
function menu(){
  
  
  image(img,0,0)
  
  fill('#FF0000')
  ellipse(x, y, 150, 80);
  
  textSize(19);
  fill('#FFFFFF')
  text('ESCOLA DE CIÊNCIAS E TECNOLOGIAS - ECT/UFRN', 55, 25);
  text('PROFA.DRA.IDALMIS MILIAN & PROF.DR.ORIVALDO V.S JUNIOR', 10, 50);
  text('IZAQUE G. R. OLIVEIRA GAME ARTE - Movimento Artístico', 40, 75);
  text('JOGAR', 50, 130);
  text('INSTRUÇÕES', 20, 230);
  text('CREDITOS',35, 330);
}

function fase1(){
   textSize(20);
  image(img,0,0);
  image(imgM,xi,yI);
  xi=xi-1;
    if(dist(xA, yA, xi, yI)<40){
    vidas=vidas+0.5;
    yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgPP, xipp, yI);
  xipp=xipp-0.5;
      if(dist(xA, yA, xipp, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;  }
  image(imgR, xiR, yI);
  xiR=xiR-0.5;
      if(dist(xA, yA, xiR, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgSD, xiSD, yI);
  xiSD=xiSD-0.5;
      if(dist(xA, yA, xiSD, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgEM, xiEM, yI);
  xiEM=xiEM-0.5;
      if(dist(xA, yA, xiEM, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgFR, xiFR, yI);
  xiFR=xiFR-0.5;
      if(dist(xA, yA, xiFR, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgED, xiED, yI);
  xiED=xiED-0.5;
      if(dist(xA, yA, xiED, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgGB, xiGB, yI)
  xiGB=xiGB-0.5;
      if(dist(xA, yA, xiGB, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgPC, xiPC, yI);
  xiPC=xiPC-0.5;
      if(dist(xA, yA, xiPC, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgKM, xiKM, yI);
  xiKM=xiKM-0.5;
      if(dist(xA, yA, xiKM, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgHM, xiHM, yI);
  xiHM=xiHM-0.5;
      if(dist(xA, yA, xiHM, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMD, xiMD, yI);
  xiMD=xiMD-0.5;
      if(dist(xA, yA, xiMD, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgCP, xiCP, yI);
  xiCP=xiCP-0.5;
      if(dist(xA, yA, xiCP, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMDI, xiMDI, yI);
  xiMDI=xiMDI-0.5;
      if(dist(xA, yA, xiMDI, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMO, xiMO, yI);
  xiMO=xiMO-0.5;
      if(dist(xA, yA, xiMO, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgPCI, xiPCI, yI);
  xiPCI=xiPCI-0.5;
      if(dist(xA, yA, xiPCI, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMC, xiMC, yI);
  xiMC=xiMC-0.5;
      if(dist(xA, yA, xiMC, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMS, xiMS, yI)
  xiMS=xiMS-0.5;
      if(dist(xA, yA, xiMS, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  
  fill('#FF0000')
  ellipse(80, 48, 150, 80);
  
  ellipse(xA, yA, 15, 50);
  if(key=="ArrowUp"){
    yA=yA-1;};
  if(key=="ArrowDown"){
    yA=yA+1};
  if(key=="ArrowRight"){
    xA=xA+1;}
  if(key=="ArrowLeft"){
    xA=xA-1;}
  ellipse(xB, yB, 40, 40);
  if(key=="ArrowUp"){
    yB=yB-1;};
  if(key=="ArrowDown"){
    yB=yB+1};
  if(key=="ArrowRight"){
    xB=xB+1;}
  if(key=="ArrowLeft"){
    xB=xB-1;}
  ellipse(xC, yC, 20, 80);
    if(key=="ArrowUp"){
    yC=yC-1;};
  if(key=="ArrowDown"){
    yC=yC+1};
  if(key=="ArrowRight"){
    xC=xC+1;}
  if(key=="ArrowLeft"){
    xC=xC-1;}
  ellipse(xD, yD, 80, 100);
  if(key=="ArrowUp"){
    yD=yD-0.5;};
  if(key=="ArrowDown"){
    yD=yD+0.5};
  if(key=="ArrowRight"){
    xD=xD+1;}
  if(key=="ArrowLeft"){
    xD=xD-1;}
  ellipse(xDD, yD, 20, 80);
  if(key=="ArrowUp"){
    yD=yD-0.5;};
  if(key=="ArrowDown"){
    yD=yD+0.5};
  if(key=="ArrowRight"){
    xDD=xDD+0;}
  if(key=="ArrowLeft"){
    xDD=xDD-0;}
  ellipse(xDD, yE, 20, 60);
  if(key=="ArrowUp"){
    yE=yE-1;};
  if(key=="ArrowDown"){
    yE=yE+1};
  if(key=="ArrowRight"){
    xDD=xDD+1;}
  if(key=="ArrowLeft"){
    xDD=xDD-1;}
  ellipse(xF, yF, 20, 100);
    if(key=="ArrowUp"){
    yF=yF-0.5;};
  if(key=="ArrowDown"){
    yF=yF+0.5};
  if(key=="ArrowRight"){
    xF=xF+1;}
  if(key=="ArrowLeft"){
    xF=xF-1;}
  ellipse(xFF, yF, 20, 100);
    if(key=="ArrowUp"){
    yF=yF-0.5;};
  if(key=="ArrowDown"){
    yF=yF+0.5};
  if(key=="ArrowRight"){
    xFF=xFF+1;}
  if(key=="ArrowLeft"){
    xFF=xFF-1;}
  
  fill('#FFFF00')
  text('fase1', 55, 55);
  text('Reconhecendo artistas do Imprecionismo', 155, 55);
  text('Pressione Esc para voltar', 200, 390);
  text('Vidas: '+vidas, 290, 25);
  text('Monet', xt, yT);
  xt=xt-1;
  if(xi==0){
    xi=2994;
  }
    if(xt==0){
    xt=2994;
  }
  text('Picasso', xipp, yT);
  xipp=xipp-0.5;
    if(xipp==0){
    xipp=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Renoir', xiR, yT);
  xiR=xiR-0.5;
    if(xiR==0){
    xiR=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Dali', xiSD, yT);
  xiSD=xiSD-0.5;
    if(xiSD==0){
    xiSD=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Manet', xiEM, yT);
  xiEM=xiEM-0.5;
  if(xiEM==0){
    xiEM=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Frida', xiFR, yT);
  xiFR=xiFR-0.5;
  if(xiFR==0){
    xiFR=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Degas', xiED, yT);
  xiED=xiED-0.5;
  if(xiED==0){
    xiED=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('G.Braque', xiGB, yT);
  xiGB=xiGB-0.5;
  if(xiGB==0){
    xiGB=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Cezanne', xiPC, yT);
  xiPC=xiPC-0.5;
  if(xiPC==0){
    xiPC=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Luna', xiKM, yT);
  xiKM=xiKM-0.5;
  if(xiKM==0){
    xiKM=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Matisse', xiHM, yT);
  xiHM=xiHM-0.5;
  if(xiHM==0){
    xiHM=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('M.Duchamp', xiMD, yT);
  xiMD=xiMD-0.5;
  if(xiMD==0){
    xiMD=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Pissarro', xiCP, yT);
  xiCP=xiCP-0.5;
  if(xiCP==0){
    xiCP=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Mondrian', xiMDI, yT);
  xiMDI=xiMDI-0.5;
  if(xiMDI==0){
    xiMDI=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Morisot', xiMO, yT);
  xiMO=xiMO-0.5;
  if(xiMO==0){
    xiMO=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('P.Klee', xiPCI, yT);
  xiPCI=xiPCI-0.5;
  if(xiPCI==0){
    xiPCI=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('M.Cassat', xiMC, yT);
  xiMC=xiMC-0.5;
  if(xiMC==0){
    xiMC=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('M.Shagal', xiMS, yT);
  xiMS=xiMS-0.5;
  if(xiMS==0){
    xiMS=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  if(vidas==0){
    tela=5;
  }
    if(vidas==10){
    tela=4;
      
  }

}

function instruções(){
   textSize(20);
  
  image(img,0,0)
  
  fill('#FF0000')
  ellipse(80, 48, 150, 80);
  fill('#FFFF00')
  text('instruçoes', 38, 55);
  text('BNCC HABILIDADE ARTE - 6º AO 9º ANO', 155, 55);
  text('Neste jogo você vai testar seus conhecimentos', 155, 100);
  text('Você vai vivenciar alguns dos movimentos artísticos', 110, 125);
  text('Vai identificar e ligar o artista a sua obra e ao movimento arte', 26, 150);
  text('- Primeiro você deve levar o robor a tocar no artista correto;', 26, 175);
  text('- Em todas as fases você deve tocar nas obras ou nos artistas:', 26, 200);
  text('- Começa com cinco vidas, perde com zero e vence com dez;', 26, 225);
  text('- Para cada artista errado você perde meia-vida;', 26, 250);
  text('- Para cada artista correto que você tocar, ganha meia-vida;', 26, 275);
  text('- Para cada artista errado você perde meia-vida;', 26, 300);
  text('- Controle o robô usando seta pra cima ou pra baixo pra es-;', 26, 325);
  text('  querda ou pra direita e pra parar o robô use a tecla Shfit;', 26, 350);
  text('Pressione Esc para voltar', 200, 390);
}

function creditos(){
   textSize(20);
  
  image(img,0,0);
  image(imgC,230,15);
  
  fill('#FF0000')
  ellipse(80, 48, 150, 80);
  fill('#FFFF00')
  text('creditos', 48, 52);
  text('Izaque Gregório Romão de Oliveira', 150, 240);
  text('PROGRAMADOR', 225, 260);
  text('&', 300, 280);
  text('PROFESSOR DE ARTE', 200, 300);
  text('MONITORIA: LORRAINE GREGÓRIO LIMA DE OLIVEIRA', 35, 320);
  text('imagens do www.google.com.br', 170, 335);
  text('Pressione Esc para voltar', 200, 390);
}

function keyPressed(){
if(key=="ArrowUp" && y>130){
  y=y-100;
  opção=opção-1;
  console.log(opção)
}
if(key=="ArrowDown" && y<230){
    y=y+100
  opção=opção+1;
  console.log(opção)
}
  if(key=="Enter"){
    tela=opção
  }
  if(key=="Escape"){
    tela=0
  }
}
  function fase2(){
  image(img,0,0);
    
  fill('#FF0000')
  ellipse(80, 48, 150, 80);
  
  ellipse(xA, yA, 15, 50);
  if(key=="ArrowUp"){
    yA=yA-1;};
  if(key=="ArrowDown"){
    yA=yA+1};
  if(key=="ArrowRight"){
    xA=xA+1;}
  if(key=="ArrowLeft"){
    xA=xA-1;}
  ellipse(xB, yB, 40, 40);
  if(key=="ArrowUp"){
    yB=yB-1;};
  if(key=="ArrowDown"){
    yB=yB+1};
  if(key=="ArrowRight"){
    xB=xB+1;}
  if(key=="ArrowLeft"){
    xB=xB-1;}
  ellipse(xC, yC, 20, 80);
    if(key=="ArrowUp"){
    yC=yC-1;};
  if(key=="ArrowDown"){
    yC=yC+1};
  if(key=="ArrowRight"){
    xC=xC+1;}
  if(key=="ArrowLeft"){
    xC=xC-1;}
  ellipse(xD, yD, 80, 100);
  if(key=="ArrowUp"){
    yD=yD-0.5;};
  if(key=="ArrowDown"){
    yD=yD+0.5};
  if(key=="ArrowRight"){
    xD=xD+1;}
  if(key=="ArrowLeft"){
    xD=xD-1;}
  ellipse(xDD, yD, 20, 80);
  if(key=="ArrowUp"){
    yD=yD-0.5;};
  if(key=="ArrowDown"){
    yD=yD+0.5};
  if(key=="ArrowRight"){
    xDD=xDD+0;}
  if(key=="ArrowLeft"){
    xDD=xDD-0;}
  ellipse(xDD, yE, 20, 60);
  if(key=="ArrowUp"){
    yE=yE-1;};
  if(key=="ArrowDown"){
    yE=yE+1};
  if(key=="ArrowRight"){
    xDD=xDD+1;}
  if(key=="ArrowLeft"){
    xDD=xDD-1;}
  ellipse(xF, yF, 20, 100);
    if(key=="ArrowUp"){
    yF=yF-0.5;};
  if(key=="ArrowDown"){
    yF=yF+0.5};
  if(key=="ArrowRight"){
    xF=xF+1;}
  if(key=="ArrowLeft"){
    xF=xF-1;}
  ellipse(xFF, yF, 20, 100);
    if(key=="ArrowUp"){
    yF=yF-0.5;};
  if(key=="ArrowDown"){
    yF=yF+0.5};
  if(key=="ArrowRight"){
    xFF=xFF+1;}
  if(key=="ArrowLeft"){
    xFF=xFF-1;}
  

  textSize(20);
  fill('#FFFF00')
  text('fase2', 55, 55);
  text('Reconhecendo obras do Imprecionismo', 155, 55);
  text('Em Coonstrução', 255, 105);
  text('Pressione Esc para voltar', 200, 390);
  text('Vidas: '+vidas, 290, 25);
  text('PARABÉNS, VOCÊ CONHECE OS IMPRESSIONISTAS', 50, 300,)
  function fase2(){
   textSize(20);
  image(img,0,0);
  
  fill('#FF0000')
  ellipse(80, 48, 150, 80);
  
  ellipse(xA, yA, 15, 50);
  if(key=="ArrowUp"){
    yA=yA-1;};
  if(key=="ArrowDown"){
    yA=yA+1};
  if(key=="ArrowRight"){
    xA=xA+1;}
  if(key=="ArrowLeft"){
    xA=xA-1;}
  ellipse(xB, yB, 40, 40);
  if(key=="ArrowUp"){
    yB=yB-1;};
  if(key=="ArrowDown"){
    yB=yB+1};
  if(key=="ArrowRight"){
    xB=xB+1;}
  if(key=="ArrowLeft"){
    xB=xB-1;}
  ellipse(xC, yC, 20, 80);
    if(key=="ArrowUp"){
    yC=yC-1;};
  if(key=="ArrowDown"){
    yC=yC+1};
  if(key=="ArrowRight"){
    xC=xC+1;}
  if(key=="ArrowLeft"){
    xC=xC-1;}
  ellipse(xD, yD, 80, 100);
  if(key=="ArrowUp"){
    yD=yD-0.5;};
  if(key=="ArrowDown"){
    yD=yD+0.5};
  if(key=="ArrowRight"){
    xD=xD+1;}
  if(key=="ArrowLeft"){
    xD=xD-1;}
  ellipse(xDD, yD, 20, 80);
  if(key=="ArrowUp"){
    yD=yD-0.5;};
  if(key=="ArrowDown"){
    yD=yD+0.5};
  if(key=="ArrowRight"){
    xDD=xDD+0;}
  if(key=="ArrowLeft"){
    xDD=xDD-0;}
  ellipse(xDD, yE, 20, 60);
  if(key=="ArrowUp"){
    yE=yE-1;};
  if(key=="ArrowDown"){
    yE=yE+1};
  if(key=="ArrowRight"){
    xDD=xDD+1;}
  if(key=="ArrowLeft"){
    xDD=xDD-1;}
  ellipse(xF, yF, 20, 100);
    if(key=="ArrowUp"){
    yF=yF-0.5;};
  if(key=="ArrowDown"){
    yF=yF+0.5};
  if(key=="ArrowRight"){
    xF=xF+1;}
  if(key=="ArrowLeft"){
    xF=xF-1;}
  ellipse(xFF, yF, 20, 100);
    if(key=="ArrowUp"){
    yF=yF-0.5;};
  if(key=="ArrowDown"){
    yF=yF+0.5};
  if(key=="ArrowRight"){
    xFF=xFF+1;}
  if(key=="ArrowLeft"){
    xFF=xFF-1;}
  image(imgM,xi,yI);
  xi=xi-1;
    if(dist(xA, yA, xi, yI)<40){
    vidas=vidas+0.5;
    yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgPP, xipp, yI);
  xipp=xipp-0.5;
      if(dist(xA, yA, xipp, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;  }
  image(imgR, xiR, yI);
  xiR=xiR-0.5;
      if(dist(xA, yA, xiR, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgSD, xiSD, yI);
  xiSD=xiSD-0.5;
      if(dist(xA, yA, xiSD, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgEM, xiEM, yI);
  xiEM=xiEM-0.5;
      if(dist(xA, yA, xiEM, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgFR, xiFR, yI);
  xiFR=xiFR-0.5;
      if(dist(xA, yA, xiFR, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgED, xiED, yI);
  xiED=xiED-0.5;
      if(dist(xA, yA, xiED, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgGB, xiGB, yI)
  xiGB=xiGB-0.5;
      if(dist(xA, yA, xiGB, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgPC, xiPC, yI);
  xiPC=xiPC-0.5;
      if(dist(xA, yA, xiPC, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgKM, xiKM, yI);
  xiKM=xiKM-0.5;
      if(dist(xA, yA, xiKM, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgHM, xiHM, yI);
  xiHM=xiHM-0.5;
      if(dist(xA, yA, xiHM, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMD, xiMD, yI);
  xiMD=xiMD-0.5;
      if(dist(xA, yA, xiMD, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgCP, xiCP, yI);
  xiCP=xiCP-0.5;
      if(dist(xA, yA, xiCP, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMDI, xiMDI, yI);
  xiMDI=xiMDI-0.5;
      if(dist(xA, yA, xiMDI, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMO, xiMO, yI);
  xiMO=xiMO-0.5;
      if(dist(xA, yA, xiMO, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgPCI, xiPCI, yI);
  xiPCI=xiPCI-0.5;
      if(dist(xA, yA, xiPCI, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMC, xiMC, yI);
  xiMC=xiMC-0.5;
      if(dist(xA, yA, xiMC, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMS, xiMS, yI)
  xiMS=xiMS-0.5;
      if(dist(xA, yA, xiMS, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  
  text('Monet', xt, yT);
  xt=xt-1;
  if(xi==0){
    xi=2994;
  }
    if(xt==0){
    xt=2994;
  }
  text('Picasso', xipp, yT);
  xipp=xipp-0.5;
    if(xipp==0){
    xipp=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Renoir', xiR, yT);
  xiR=xiR-0.5;
    if(xiR==0){
    xiR=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Dali', xiSD, yT);
  xiSD=xiSD-0.5;
    if(xiSD==0){
    xiSD=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Manet', xiEM, yT);
  xiEM=xiEM-0.5;
  if(xiEM==0){
    xiEM=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Frida', xiFR, yT);
  xiFR=xiFR-0.5;
  if(xiFR==0){
    xiFR=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Degas', xiED, yT);
  xiED=xiED-0.5;
  if(xiED==0){
    xiED=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('G.Braque', xiGB, yT);
  xiGB=xiGB-0.5;
  if(xiGB==0){
    xiGB=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Cezanne', xiPC, yT);
  xiPC=xiPC-0.5;
  if(xiPC==0){
    xiPC=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Luna', xiKM, yT);
  xiKM=xiKM-0.5;
  if(xiKM==0){
    xiKM=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Matisse', xiHM, yT);
  xiHM=xiHM-0.5;
  if(xiHM==0){
    xiHM=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('M.Duchamp', xiMD, yT);
  xiMD=xiMD-0.5;
  if(xiMD==0){
    xiMD=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Pissarro', xiCP, yT);
  xiCP=xiCP-0.5;
  if(xiCP==0){
    xiCP=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Mondrian', xiMDI, yT);
  xiMDI=xiMDI-0.5;
  if(xiMDI==0){
    xiMDI=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Morisot', xiMO, yT);
  xiMO=xiMO-0.5;
  if(xiMO==0){
    xiMO=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('P.Klee', xiPCI, yT);
  xiPCI=xiPCI-0.5;
  if(xiPCI==0){
    xiPCI=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('M.Cassat', xiMC, yT);
  xiMC=xiMC-0.5;
  if(xiMC==0){
    xiMC=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('M.Shagal', xiMS, yT);
  xiMS=xiMS-0.5;
  if(xiMS==0){
    xiMS=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  if(vidas==0){
    tela=5;
  }
    if(vidas==15){
    tela=6;
  }
}
}
function fase3(){
  image(img,0,0);  
  textSize(20);
  fill('#FFFF00')
  text('fase3', 55, 55);
  text('Conectando obras aos artistas do Imprecionismo', 135, 55);
  text('Em Coonstrução', 255, 105);
  text('Pressione Esc para voltar', 200, 390);
  text('Vidas: '+vidas, 290, 25);
  text('PARABÉNS, VOCÊ CONHECE OS IMPRESSIONISTAS', 50, 300,)
    function fase3(){
   textSize(20);
  image(img,0,0);
  image(imgM,xi,yI);
  xi=xi-1;
    if(dist(xA, yA, xi, yI)<40){
    vidas=vidas+0.5;
    yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgPP, xipp, yI);
  xipp=xipp-0.5;
      if(dist(xA, yA, xipp, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;  }
  image(imgR, xiR, yI);
  xiR=xiR-0.5;
      if(dist(xA, yA, xiR, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgSD, xiSD, yI);
  xiSD=xiSD-0.5;
      if(dist(xA, yA, xiSD, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgEM, xiEM, yI);
  xiEM=xiEM-0.5;
      if(dist(xA, yA, xiEM, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgFR, xiFR, yI);
  xiFR=xiFR-0.5;
      if(dist(xA, yA, xiFR, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgED, xiED, yI);
  xiED=xiED-0.5;
      if(dist(xA, yA, xiED, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgGB, xiGB, yI)
  xiGB=xiGB-0.5;
      if(dist(xA, yA, xiGB, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgPC, xiPC, yI);
  xiPC=xiPC-0.5;
      if(dist(xA, yA, xiPC, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgKM, xiKM, yI);
  xiKM=xiKM-0.5;
      if(dist(xA, yA, xiKM, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgHM, xiHM, yI);
  xiHM=xiHM-0.5;
      if(dist(xA, yA, xiHM, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMD, xiMD, yI);
  xiMD=xiMD-0.5;
      if(dist(xA, yA, xiMD, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgCP, xiCP, yI);
  xiCP=xiCP-0.5;
      if(dist(xA, yA, xiCP, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMDI, xiMDI, yI);
  xiMDI=xiMDI-0.5;
      if(dist(xA, yA, xiMDI, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMO, xiMO, yI);
  xiMO=xiMO-0.5;
      if(dist(xA, yA, xiMO, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgPCI, xiPCI, yI);
  xiPCI=xiPCI-0.5;
      if(dist(xA, yA, xiPCI, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMC, xiMC, yI);
  xiMC=xiMC-0.5;
      if(dist(xA, yA, xiMC, yI)<40){
    vidas=vidas+0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  image(imgMS, xiMS, yI)
  xiMS=xiMS-0.5;
      if(dist(xA, yA, xiMS, yI)<40){
    vidas=vidas-0.5;
        yA=330;
    yB=350;
    yC=365;
    yD=415;
    yE=445;
    yF=485;
    xA=205;
    xB=170;
    xC=205;
    xD=170;
    xDD=140;
    xF=200;
    xFF=150;
  }
  
  fill('#FF0000')
  ellipse(80, 48, 150, 80);
  
  ellipse(xA, yA, 15, 50);
  if(key=="ArrowUp"){
    yA=yA-1;};
  if(key=="ArrowDown"){
    yA=yA+1};
  if(key=="ArrowRight"){
    xA=xA+1;}
  if(key=="ArrowLeft"){
    xA=xA-1;}
  ellipse(xB, yB, 40, 40);
  if(key=="ArrowUp"){
    yB=yB-1;};
  if(key=="ArrowDown"){
    yB=yB+1};
  if(key=="ArrowRight"){
    xB=xB+1;}
  if(key=="ArrowLeft"){
    xB=xB-1;}
  ellipse(xC, yC, 20, 80);
    if(key=="ArrowUp"){
    yC=yC-1;};
  if(key=="ArrowDown"){
    yC=yC+1};
  if(key=="ArrowRight"){
    xC=xC+1;}
  if(key=="ArrowLeft"){
    xC=xC-1;}
  ellipse(xD, yD, 80, 100);
  if(key=="ArrowUp"){
    yD=yD-0.5;};
  if(key=="ArrowDown"){
    yD=yD+0.5};
  if(key=="ArrowRight"){
    xD=xD+1;}
  if(key=="ArrowLeft"){
    xD=xD-1;}
  ellipse(xDD, yD, 20, 80);
  if(key=="ArrowUp"){
    yD=yD-0.5;};
  if(key=="ArrowDown"){
    yD=yD+0.5};
  if(key=="ArrowRight"){
    xDD=xDD+0;}
  if(key=="ArrowLeft"){
    xDD=xDD-0;}
  ellipse(xDD, yE, 20, 60);
  if(key=="ArrowUp"){
    yE=yE-1;};
  if(key=="ArrowDown"){
    yE=yE+1};
  if(key=="ArrowRight"){
    xDD=xDD+1;}
  if(key=="ArrowLeft"){
    xDD=xDD-1;}
  ellipse(xF, yF, 20, 100);
    if(key=="ArrowUp"){
    yF=yF-0.5;};
  if(key=="ArrowDown"){
    yF=yF+0.5};
  if(key=="ArrowRight"){
    xF=xF+1;}
  if(key=="ArrowLeft"){
    xF=xF-1;}
  ellipse(xFF, yF, 20, 100);
    if(key=="ArrowUp"){
    yF=yF-0.5;};
  if(key=="ArrowDown"){
    yF=yF+0.5};
  if(key=="ArrowRight"){
    xFF=xFF+1;}
  if(key=="ArrowLeft"){
    xFF=xFF-1;}
  
  text('Monet', xt, yT);
  xt=xt-1;
  if(xi==0){
    xi=2994;
  }
    if(xt==0){
    xt=2994;
  }
  text('Picasso', xipp, yT);
  xipp=xipp-0.5;
    if(xipp==0){
    xipp=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Renoir', xiR, yT);
  xiR=xiR-0.5;
    if(xiR==0){
    xiR=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Dali', xiSD, yT);
  xiSD=xiSD-0.5;
    if(xiSD==0){
    xiSD=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Manet', xiEM, yT);
  xiEM=xiEM-0.5;
  if(xiEM==0){
    xiEM=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Frida', xiFR, yT);
  xiFR=xiFR-0.5;
  if(xiFR==0){
    xiFR=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Degas', xiED, yT);
  xiED=xiED-0.5;
  if(xiED==0){
    xiED=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('G.Braque', xiGB, yT);
  xiGB=xiGB-0.5;
  if(xiGB==0){
    xiGB=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Cezanne', xiPC, yT);
  xiPC=xiPC-0.5;
  if(xiPC==0){
    xiPC=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Luna', xiKM, yT);
  xiKM=xiKM-0.5;
  if(xiKM==0){
    xiKM=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Matisse', xiHM, yT);
  xiHM=xiHM-0.5;
  if(xiHM==0){
    xiHM=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('M.Duchamp', xiMD, yT);
  xiMD=xiMD-0.5;
  if(xiMD==0){
    xiMD=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Pissarro', xiCP, yT);
  xiCP=xiCP-0.5;
  if(xiCP==0){
    xiCP=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Mondrian', xiMDI, yT);
  xiMDI=xiMDI-0.5;
  if(xiMDI==0){
    xiMDI=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('Morisot', xiMO, yT);
  xiMO=xiMO-0.5;
  if(xiMO==0){
    xiMO=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('P.Klee', xiPCI, yT);
  xiPCI=xiPCI-0.5;
  if(xiPCI==0){
    xiPCI=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('M.Cassat', xiMC, yT);
  xiMC=xiMC-0.5;
  if(xiMC==0){
    xiMC=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  text('M.Shagal', xiMS, yT);
  xiMS=xiMS-0.5;
  if(xiMS==0){
    xiMS=2994;
    
  }
    if(xt==0){
    xt=2994;
  }
  if(vidas==0){
    tela=5;
  }
    if(vidas==20){
    tela=7;
  }
}
}