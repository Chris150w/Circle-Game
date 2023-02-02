player = {},sam=[],carl={} , controller = new AbortController();

class Level{
constructor(enemies,coins,anythingElse=0,back=['ñ=true']){
	go=false;clearInterval(carl);
	
	sam=[enemies,coins,anythingElse,back]
	renderList=[];right=0,down=0;
	player = new Player(375,375,'aliceblue')
	for(let q=0;q<enemies.length;q++){eval(`new ${enemies[q][0]}(${enemies[q][1]},${enemies[q][2]})`)}
	this.coinList = coins, this.points=0, this.bg=back
	background(back)
	eval(`new ${coins[0]}`)
	eval(`${anythingElse}`)
	eval(`carl=${fwd}`)
	setTimeout(()=>levelStart(),25)
	}
good(){
	this.points++
	if(!this.coinList[currentLevel.points]){stopAll();alert('PISS');console.log('game won')}
	else{   eval(`new ${this.coinList[currentLevel.points][0]}(this.coinList[currentLevel.points][1],this.coinList[currentLevel.points][2]);
	/*background(this.bg)*/`)
	if(this.points==1){let qqq='';col=fwd.split('\n');col[5]=`ñ=true`;for(let qq=0;qq<fwd.split('\n').length;qq++){qqq+=(col[qq]+'\n')};fwd=qqq;stopAll();stopAll();}
		}
	}
bad(){
	;renderList=[];currentLevel={}
	if(confirm('You are bad at this game. Try AGAIN and become stronger')){
		currentLevel=new Level(sam[0],sam[1],sam[2],sam[3])}
	right=0,down=0
	}
}

flip=false; 
levelStart = async() =>{
	go=false;clearInterval(carl);
	promise = new Promise(resolve => document.body.addEventListener('keydown',()=>resolve('joo '+Math.random())))
	await promise
	flip=!flip
	if(flip){
	stopAll();setTimeout(()=>flip=false,25)}
}


badGuys=[
[[Blinky,50,50]],
[[Blinky,50,700],[Pinky,700,375]],
[[Blinky,50,700],[Winky,212,212]],
[[Blinky,50,700],[Slinky,537,375]],
[[Blinky,50,700],[Pinky,50,375],[Slinky,212,212],[Winky,537,537]],
[[Blinky,50,700],[Slinky,50,50],[Winky,537,375]],

[[]]
]

coinGuys=[
[[Coin,375,212],[Coin,600,600],[Coin,100,375]],
[[Coin,212,212],[Coin,700,537],[Coin,500,700],[Coin,537,212],[Coin,50,50],[Coin,375,375]],
[[Coin,375,212],[Coin,375,375],[Runner,700,50]],
[[]]
]

signGuys=[
[[`190,456,'WASD to move','grey'`],[`50,650,'Collect all the Coins to win','yellow'`]],
[[`50,250,'This is Blinky','red'`],[`50,600,'He likes to zoom very fast'`],[`50,650,'& when you move in straight lines'`]],
[[`425,350,'This is Pinky','hotpink'`],[`50,50,'She zooms not as fast'`],[`50,100,'but likes to predict your moves'`]],


[[]]
]
