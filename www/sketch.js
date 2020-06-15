// ---- エンティティ関連の関数 ---------------------------------------------

//プレイヤーエンティティ用
function creatPlayer(){
  return{
    x: 200,
    y: 300,
    vx: 0,
    vy: 0
  };
}

function drawPlayer(entity){
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY,20,20);
}

//enemyエンティティ用

function updatePositionEnemy(){

  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
  //形状が画面の境界を超えているかどうかをテストします
   //ある場合は、-1を掛けて方向を逆にします
  if (xpos > width - 20 || xpos < rad - 30) {
    xdirection *= -1;
  }
  if (ypos > height - 20 || ypos < rad - 30) {
    ydirection *= -1;
}
}

function creatEnemy(y){
  return {
    x: 0,
    y,
    vx: 0,
    vy: 0
  };
}

function drawEnemy(y){
  noStroke();
  fill(255,0,0)
  ellipse(xpos, ypos, rad, rad);
} 

function addEnemy(){
  let y = random(-100,100);
    enemies.push(creatEnemy(y));
    enemies.push(creatEnemy(y+100));
}

// ---- ゲーム全体に関わる部分 ---------------------------------------------

//プレイヤー用
let player;

//敵用
//敵のエンティティの配列
let enemies;
let rad = 60; // Width of the shape
let xpos=0, ypos=0; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

// ---- setup/draw 他 --------------------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  //プレイヤー作成
  pleyer = creatPlayer();

  //敵を作成
  enemies = [];
}

function draw() {

  //敵を毎秒ごと追加
  if (frameCount % 1200 === 1) addEnemy(blocks); 
  //全エンティティの位置を更新
  for(let enemy of enemies) updatePositionEnemy(enemy);

  background(0);
  //ぜんエンティティを線画
  drawPlayer(player);
  for(let enemy of enemies) drawEnemy(enemy);
}

function mousePressed() {
  // （ここにマウスボタンを押したときの処理が入る）
}