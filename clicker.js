var clicks = 0;

function mainClick(number) {
	clicks = clicks + number;
	document.getElementById("clicks").innerHTML = clicks;
};

var emily = 0;

function buyEmily(){
    var emilyCost = Math.floor(25 * Math.pow(1.1,emily));     	//works out the cost of this cursor
    if (clicks >= emilyCost){                                    	//checks that the player can afford the cursor
        emily = emily + 1;                                   	//increases number of cursors
    	clicks = clicks - emilyCost;                            	//removes the cookies spent
        document.getElementById('emily').innerHTML = emily;  	//updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = clicks;    	//updates the number of cookies for the user
    };
    var nextEmily = Math.floor(25 * Math.pow(1.1,emily));       	//works out the cost of the next cursor
    document.getElementById('emilyCost').innerHTML = nextEmily;		//updates the cursor cost for the user
};

var betty = 0;

function buyBetty(){
	var bettyCost = Math.floor(50 * Math.pow(1.1,betty));
	if (clicks >= bettyCost){
		betty = betty + 1;
		clicks = clicks - bettyCost;
		document.getElementById('betty').innerHTML = betty;
		document.getElementById('clicks').innerHTML = clicks;
	};
	var nextBetty = Math.floor(50 * Math.pow(1.1,betty));
	document.getElementById('bettyCost').innerHTML = nextBetty;
};

var herbie = 0;

function buyHerbie(){
	var herbieCost = Math.floor(10 * Math.pow(1.1,herbie));
	if (clicks >= herbieCost){
		herbie = herbie + 1;
		clicks = clicks - herbieCost;
		document.getElementById('herbie').innerHTML = herbie;
		document.getElementById('clicks').innerHTML = clicks;
	};
	var nextHerbie = Math.floor(10 * Math.pow(1.1,herbie));
	document.getElementById('herbieCost').innerHTML = nextHerbie;
};

window.setInterval(function(){
	mainClick(emily);
	mainClick(betty);
	mainClick(herbie);
}, 1000);	