go=false, enemyPause=-1

function draw(run,rise,color){	
	ctx.beginPath()
	ctx.fillStyle=color;
	ctx.arc(run,rise,10,2*pi,false)
	ctx.fill()
}

function paint(run,rise,message,color){
	ctx.font='50px Aleo'; ctx.fillStyle=color;
	ctx.fillText(message,run,rise)
}

function background(ñ){qqq='';
	col=fwd.split('\n');col[5]=`0`
	for(let q=0;q<ñ.length;q++){col[5]+=`;paint(${ñ[q]})`;}
	console.log(ñ)
	for(let qq=0;qq<fwd.split('\n').length;qq++){qqq+=(col[qq]+'\n')};
	fwd=qqq
	stopAll();stopAll();
}

function clear(){ctx.fillStyle = "lightgray";ctx.fillRect(0,0,canvas.width,canvas.height,)}

function stopThem(){
for(q=0;q<renderList.length;q++){
	if(enemyPause<0){renderList[q].pickup=renderList[q].speed,renderList[q].speed=0}
	else{renderList[q].speed=renderList[q].pickup}
	}
enemyPause*=-1
}

function stopAll(){go=!go
if(!go){clearInterval(carl)}
else{eval(`carl=${fwd}`)}
speedometer.innerHTML=go
}

function reset(){

}
//————————————————————————————————————————————————————————————————————————————————————————
x=0, speed=30/100, drag=.15*speed;
right = 0, down = 0;
{
body.onkeydown = (event) => {
 	if(!event.repeat){
	(event.key.toLowerCase()=='d'&&right<=0) ? (player.dest[0]+=speed,right += 1):
	(event.key.toLowerCase()=='a'&&right>=0) ? (player.dest[0]+=-speed,right +=-1):
	(event.key.toLowerCase()=='s'&&down<=0) ? (player.dest[1]+=speed, down += 1):
	(event.key.toLowerCase()=='w'&&down>=0) ? (player.dest[1]+=-speed,down +=-1):
	resolve()}
	}
}

/*Occasionally keydown fires again even without a new key stroke. This may be because of a lag spike or something.
I'm adding in another check to the if case (right, left, etc.) so that it's not adding in , but be aware of that */


body.onkeyup = (event) => {
	(event.key.toLowerCase()=='d') ? (player.dest[0]-= speed,right -= 1):
	(event.key.toLowerCase()=='a') ? (player.dest[0]-=-speed,right -=-1):
	(event.key.toLowerCase()=='s') ? (player.dest[1]-= speed, down -= 1):
	(event.key.toLowerCase()=='w') ? (player.dest[1]-=-speed, down -=-1):
	1
}


//————————————————————————————————————————————————————————————————————————————————————————

document.getElementsByTagName('script')[2].onload=()=> {
new Runner
player =new Blinky;player.searcher='renderList[0].p';player.speed=.15
animation=setInterval(()=>{try{renderList[0].mid.p=[[293,375,537][Math.floor(Math.random()*3)],[212,375,456][Math.floor(Math.random()*3)]]} catch{clearInterval(animation)}},2500)
stopAll()
}
//————————————————————————————————————————————————————————————————————————————————————————

refresh=10
fwd = `setInterval(function(){
		clear() 
		for(let q=0;q<renderList.length;q++){
		renderList[q].render()
		renderList[q].collide(renderList.slice(q+1))
		ñ=true
		draw(renderList[q].p[0],renderList[q].p[1],renderList[q].ballColor);
		speedometer.innerHTML=go
		}
	},refresh)`
