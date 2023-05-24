
var board = document.getElementById("board");
var context = board.getContext("2d");

const ball = {
	x: board.width/2,
	y: board.height/2,
	radius: 10,
	sped: 5,
	Xvelocity: 5,
	Yvelocity: 5,
	color: "WHITE"
}

const user = {
	height: 100,
	width: 10,
	x: 0,
	get y(){ return board.height/2 - this.height/2 },
	color: "WHITE",
	score: 0
}

const com = {
	height: 100,
	width: 10,
	get x(){ return board.width - this.width },
	get y(){ return board.height/2 - this.height/2 },
	color: "WHITE",
	score: 0
}


function drawCircle(x,y,radius,color) {
	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI, false);
	context.closePath();
	context.fillStyle = color;
	context.fill();
}

function drawRet(x, y, w, h, color) {
	context.fillStyle = color
	context.fillRect(x,y,w,h)
}

function drawNet() {
	for (let index = 10; index <= board.height; index+=40) {
		context.fillStyle = "WHITE"
		context.fillRect(
			(board.width/2 - 1),
			(0+index),
			2,
			20)
	}
}

function drawText(text,x,y,color) {
	context.fillStyle = color
	context.font = "50px fantasy"
	context.fillText(text, x, y);
}

function render() {
	drawRet(0,0,600,400,'black')
	drawText(user.score,board.width/4, board.height/5,"white")
	drawText(com.score,(3*board.width/4-25), board.height/5,"white")
	drawNet()
	drawRet(user.x,user.y,user.width,user.height,user.color)
	drawRet(com.x,com.y,com.width,com.height,com.color)
	drawCircle(ball.x, ball.y, ball.radius, ball.color)
}

function update() {
	ball.x += ball.Xvelocity
	ball.y += ball.Yvelocity

	if(ball.y + ball.radius > board.height || ball.y - ball.radius < 0 ) 
		ball.Yvelocity = -ball.Yvelocity

	if(ball.x + ball.radius > board.width || ball.x - ball.radius < 0 ) 
		ball.Xvelocity = -ball.Xvelocity
	
}

function ballpos() {
	console.log("x:" + ball.x +"|y:"+ball.y)
}

function game() {
	update()
	render()
	ballpos()
}


const fps = 75;

setInterval(game,1000/fps)