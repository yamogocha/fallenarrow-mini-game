/********** GAMEPLAY SPECIFIC JAVASCRIPT **********/
//This function resets the entire game and includes everything that needs to be reset, including updating the numbers. This will be different for each game
var restartGame = function() {
	totalSpin = 0;
	spinClickable = true;
	mNectarGame.totalNum = 5000000;
	mNectarGame.betNum = 60000;
	mNectarGame.winNum = 0;
	mNectarGame.bigWin=0;
	mNectarGame.animationTime = 3000;
	mNectarGame.animationSteps = 120;
	updateNum();
	slightOfHand(spin1);
	clearTimeout(mNectarGame.bigwinscreen);
	clearTimeout(mNectarGame.endscreen);
	document.getElementById("effect1").style.display = "none";
	document.getElementById("effect2").style.display = "none";
	document.getElementById("effect3").style.display = "none";
	document.getElementById("bigWin").style.display = "none";
	document.getElementById("spin").className = "spin";
	document.getElementById("outro-container").style.display = 'none';
}

// CALL THIS WHEN THE USER FINISHES PLAYING YOUR BUILD
// this sends the user to the end of the game if the retry is clicked and the dl is not clicked
var finishGameplay = function() {
	if (typeof gotoEndScreen != 'undefined') {
		//this is a function in the engineering templates and will only work once this project is uploaded to the UI
		gotoEndScreen();
		//report that the user has finished the game
		if (typeof mn != 'undefined'){mn("play","100%");}
	}
	else {
		displayInstallScreen();
	}
}

/********** EXAMPLE JAVASCRIPT **********/


var spin1 = [
				[14,13,12,8,4,3,2,8,5,8,9,3,5,5,5,1,11,9], //reel1
				[8,9,4,12,6,7,2,8,5,3,5,3,5,10,11,2,3,11],  //reel2
				[12,1,14,8,6,5,2,8,5,6,9,10,5,5,1,11,13,14], //reel3
				[5,14,9,11,9,7,2,8,10,5,9,3,5,10,2,12,1,3], //reel4
				[2,10,5,2,9,7,2,5,5,10,9,3,5,5,12,5,2,4] //reel5
			];

var spin2 = [
				[13,9,10,8,9,7,2,7,7,5,9,3,5,2,14,13,12,8],
				[10,4,13,2,3,7,2,8,10,2,9,3,5,6,8,9,4,12],
				[1,2,1,8,4,7,10,8,5,8,9,3,5,8,12,1,14,8],
				[4,14,2,8,5,7,2,8,4,10,2,3,5,1,5,14,9,11],
				[2,5,4,7,6,7,10,8,7,4,9,3,5,5,2,10,5,2]
			];

var spin3 = [
				[8,4,5,11,2,7,2,8,2,5,10,3,5,3,13,9,10,8],
				[11,1,14,8,2,7,10,8,7,8,9,3,5,4,10,4,13,2],
				[14,4,5,14,5,6,2,8,3,8,9,3,5,2,1,2,1,8],
				[5,9,4,7,3,7,2,8,2,3,10,3,5,7,4,14,2,8],
				[9,4,11,5,6,2,10,8,2,6,9,3,5,2,2,5,4,7]
			];

var spin4 = [
				[5,2,7,9,5,7,2,8,6,6,9,3,5,3,8,4,5,11],
				[5,2,5,8,4,1,10,8,7,2,9,3,5,6,11,1,14,8],
				[3,5,9,4,3,7,2,8,8,4,9,8,5,5,14,4,5,14],
				[10,2,6,4,3,10,2,8,3,10,10,3,5,2,5,9,4,7],
				[4,2,3,1,6,7,2,8,3,6,9,10,6,7,9,4,11,5]
			];


var totalSpin = 0;
var spinClickable = true;
var mNectarGame = {};
	mNectarGame.bigwinscreen;
	mNectarGame.endscreen;
	mNectarGame.betNum = 60000;
	mNectarGame.winNum = 0;
	mNectarGame.bigWin=0;
	mNectarGame.totalNum = 5000000;
	mNectarGame.animationTime = 3000;
	mNectarGame.animationSteps = 120;


function delimitNumbers(str) {
return (str + "").replace(/\b(\d+)((\.\d+)*)\b/g, function(a, b, c) {
  return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
});
}

var updateNum = function(){
	var bet = delimitNumbers(mNectarGame.betNum);
	document.getElementById("betNum").innerHTML = bet;
	var won = delimitNumbers(mNectarGame.winNum);
	document.getElementById("winNum").innerHTML = won;
	var totalNum = delimitNumbers(mNectarGame.totalNum);
	document.getElementById("totalNum").innerHTML = totalNum;
	var bigWin = delimitNumbers(mNectarGame.totalNum);
	document.getElementById("Point").innerHTML = bigWin;
}
updateNum();

function betIncrease(){
	document.getElementById("betL").style.pointerEvents="auto";
	document.getElementById("betR").className += " betclick";
	mNectarGame.betNum *=2
	var bet = delimitNumbers(mNectarGame.betNum);
	document.getElementById('betNum').innerHTML=bet
	setTimeout(function(){
		document.getElementById("betR").className = "betR";
	}, 100)
	
	if(mNectarGame.betNum===480000){
		document.getElementById("betR").style.pointerEvents="none";
	}
	document.getElementById('meter').className ="meterup"
	setTimeout(function(){
		document.getElementById('meter').className =""
		// document.getElementById('meterstick').className =""
		// document.getElementById('meterfront').className =""
	}, 800)

	if(mNectarGame.betNum===480000){
		document.getElementById('meterstick').className ="meter3"
		setTimeout(function(){
			document.getElementById('meterfront').className ="meterfront3"
		}, 500)	
	}
	if(mNectarGame.betNum===240000){
		document.getElementById('meterstick').className ="meter2"
		setTimeout(function(){
			document.getElementById('meterfront').className ="meterfront2"
		}, 500)	
	}
	if(mNectarGame.betNum===120000){
		document.getElementById('meterstick').className="meter1"
		setTimeout(function(){
			document.getElementById('meterfront').className ="meterfront1"
		}, 500)	
	}	
}

document.getElementById("betL").style.pointerEvents="none";
function betDecrease(){
	document.getElementById("betR").style.pointerEvents="auto";
	document.getElementById("betL").className += " betclickL";
	mNectarGame.betNum /=2
	var bet = delimitNumbers(mNectarGame.betNum);
	document.getElementById('betNum').innerHTML=bet
	setTimeout(function(){
		document.getElementById("betL").className = "betL";
	}, 100)
	if(mNectarGame.betNum===60000){
		document.getElementById("betL").style.pointerEvents="none";
	}

	document.getElementById('meter').className ="meterup"
	setTimeout(function(){
		document.getElementById('meter').className =""
		// document.getElementById('meterstick').className =""
		// document.getElementById('meterfront').className =""
	}, 800)

	if(mNectarGame.betNum===240000){
		document.getElementById('meterstick').className ="meter6"
		setTimeout(function(){
			document.getElementById('meterfront').className ="meterfront2"
		}, 500)	
	}
	if(mNectarGame.betNum===120000){
		document.getElementById('meterstick').className ="meter5"
		setTimeout(function(){
			document.getElementById('meterfront').className ="meterfront1"
		}, 500)	
	}
	if(mNectarGame.betNum===60000){
		document.getElementById('meterstick').className="meter4"
		setTimeout(function(){
			document.getElementById('meterfront').className =""
		}, 500)	
	}	
}

var animateNum = function(winValues){
	//time per step
	var duration = mNectarGame.animationTime / mNectarGame.animationSteps;
	// value of each step
	var singleAmount = winValues / mNectarGame.animationSteps;

	incrementNum(duration, singleAmount, winValues);
}

var incrementNum = function(duration, singleAmount, winValues){
	mNectarGame.bigWin += singleAmount;
	mNectarGame.winNum += singleAmount;
	mNectarGame.totalNum += singleAmount;
	updateNum();
	setTimeout(function(){
		if (mNectarGame.winNum != winValues){
			incrementNum(duration, singleAmount, winValues);
		}
	}, duration);
}


var replaceImages = function (reelInfo){
	for (var r = 1; r <= 5; r++) {
		var currentReel = reelInfo[r-1];
		for (var e = 1 ; e <=18 ; e++) {
			var element = "reel" + r + "-" + e;  
			document.getElementById(element).className = "image" + currentReel[e-1];
		};
	};
}
replaceImages(spin1);

//set top px
for (var r = 1; r <= 5; r++) {
	for (var e = 1 ; e <=18 ; e++) {
		var element = "reel" + r + "-" + e;  
		// var currentReel
		document.getElementById(element).style.top =(e-1)*170 + "px" ;
	};
};

document.getElementById("spin").className = "spin";
var spin = function (){
	totalSpin++;
	setTimeout(function(){
		document.getElementById("spin").className = " "
	 }, 150);
	mNectarGame.winNum=0;
	mNectarGame.totalNum -= mNectarGame.betNum;
	updateNum();

	document.getElementById("reel1").className = "reel-spin";
	setTimeout(function(){
		document.getElementById("reel2").className = "reel-spin";
	 }, 200);
	setTimeout(function(){
		document.getElementById("reel3").className = "reel-spin";
	 }, 400);
	setTimeout(function(){
		document.getElementById("reel4").className = "reel-spin";
	 }, 600);
	setTimeout(function(){
		document.getElementById("reel5").className = "reel-spin";
	 }, 800);

	setTimeout(function(){
		if(totalSpin===1){
		 	slightOfHand(spin2);
		 	document.getElementById("reel1-17").className += " blinkimage";
			document.getElementById("reel2-18").className += " blinkimage";
			document.getElementById("reel3-17").className += " img14s";
			document.getElementById("reel4-16").className += " img14s";
			document.getElementById("effect1").style.display = "block";
		
		 	var winAmount = mNectarGame.betNum*1.5;
		 	mNectarGame.totalNum +=winAmount;
		 	animateNum(winAmount);

			setTimeout(function(){
				spinClickable=true;
				clearEffect1();
				document.getElementById("spin").className = "spin";
		 	}, 4000);	
		 }
	 }, 1800);

	setTimeout(function(){
		if(totalSpin===2){
		 	slightOfHand(spin3);
		 	
			setTimeout(function(){
				spinClickable=true;
				document.getElementById("spin").className = "spin";
			}, 1000);
		}
	}, 1800);

	setTimeout(function(){
		if (totalSpin===3){
		 	slightOfHand(spin4);

		 	document.getElementById("reel1-17").className += " blinkimage";
			document.getElementById("reel2-17").className += " img14s";
			document.getElementById("reel3-17").className += " blinkimage";	
			document.getElementById("effect2").style.display = "block";
			setTimeout(function(){
				clearEffect2();
			}, 3000)
			setTimeout(function(){
				document.getElementById("reel1-16").className += " blinkimage";
				document.getElementById("reel2-17").className += " img14s";
				document.getElementById("reel3-18").className += " img14s";
				document.getElementById("reel4-17").className += " blinkimage";
				document.getElementById("reel5-16").className += " blinkimage";
				document.getElementById("effect3").style.display = "block";
			}, 3200)
		

		 	mNectarGame.bigwinscreen=setTimeout(function(){
					document.getElementById("bigWin").style.display = "block";
			 		var winAmount = mNectarGame.betNum*4.5;
			 		mNectarGame.totalNum +=winAmount;
			 		animateNum(winAmount);
		    }, 6000);
			 	
			mNectarGame.endscreen=setTimeout(function(){
				if (typeof gotoEndScreen != 'undefined') {
					gotoEndScreen();
					if(typeof mn != 'undefined'){mn("play","100%");}
				}
				else {
					displayInstallScreen();
				}
			}, 13000);
		}
	}, 1800);

	if (totalSpin === 1){
		if (typeof mn != 'undefined'){mn("play","25%");}
	}

	if (totalSpin === 2){
		if (typeof mn != 'undefined'){mn("play","50%");}
	}
	
	if (totalSpin === 3){
		if (typeof mn != 'undefined'){mn("play","75%");}
	}
}

var slightOfHand = function(reelInfo){

	document.getElementById("reel1").className = "reel-top";
	document.getElementById("reel2").className = "reel-top";
	document.getElementById("reel3").className = "reel-top";
	document.getElementById("reel4").className = "reel-top";
	document.getElementById("reel5").className = "reel-top";
	replaceImages(reelInfo);
}

var clickSpin = function(){
	if(spinClickable===true){
		spin();
		spinClickable=false;
	}
}

var clearEffect1 = function(){
	document.getElementById("reel1-17").className = "image12";
	document.getElementById("reel2-18").className = "image12";
	document.getElementById("reel3-17").className = "image14";
	document.getElementById("reel4-16").className = "image14";	
	document.getElementById("effect1").style.display = "none";
}

var clearEffect2 = function(){
 	document.getElementById("reel1-17").className = "image5";
	document.getElementById("reel2-17").className = "image14";
	document.getElementById("reel3-17").className = "image5";	
	document.getElementById("effect2").style.display = "none";
}

