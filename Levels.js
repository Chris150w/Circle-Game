player = {},sam=[],carl={}

class Level{
constructor(enemies,coins,anythingElse){
	sam=[enemies,coins,anythingElse]
	stopAll();renderList=[];right=0,down=0;
	player = new Player(375,375,'aliceblue')
	for(let q=0;q<enemies.length;q++){eval(`new ${enemies[q][0]}(${enemies[q][1]},${enemies[q][2]})`),console.log(renderList[q+1].p)}
	this.coinList = coins,this.points=0
	eval(`new ${coins[0]}`)
	setTimeout(()=>{stopAll();console.log('cons')},10)
	eval(`${anythingElse}`)
	}
good(){
	this.points++
	if(!this.coinList[currentLevel.points]){stopAll();alert('PISS')}
	else{eval(`new ${this.coinList[currentLevel.points][0]}(${this.coinList[currentLevel.points][1]},${this.coinList[currentLevel.points][2]})`)}
	}
bad(){
	;renderList=[];currentLevel={}
	if(confirm('You are bad at this game. Try AGAIN and become stronger')){
		currentLevel=new Level(sam[0],sam[1],sam[2])}
	right=0,down=0
	}
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