
(() => {

	// this is a comment (this would be # in python)
	// console.log is the same as print
	console.log('loaded');

	// //same as an arry in python
	var choices = ["Rock", "Paper", "Scissors"]
	var computer;
	var player =  document.querySelector("#weapon")
	var trigger = document.querySelector("#play")
	var status = document.querySelector(".winlose")

	function play_game() {
		console.log("called game function")
	}

	computer = choices[Math.floor(Math,random() * choices.length)];
	console.log(computer);

	var player_choice = player.value;
	console.log(player_choice);

	if (computer.toLowerCase() = player_choice.toLowerCase()) {
		// TIE!!
		console.log('tie');
	}

	else if (player_choice.toLowerCase() == "rock"){
		 if (computer.toLowerCase() == "scissors"){
		 	console.log('win');
		 	status.textContext = 'You won! ${player_choice} beats ${computer}!';
		 } else {
		   	 console.log("lose");
		 }
		 
	}

	else if (player_choice.toLowerCase() == "scissors"){
		 if (computer.toLowerCase() == "paper"){
		 	console.log('win');
		 	status.textContext = 'You won! ${player_choice} beats ${computer}!';
		 } else {
		   	 console.log("lose");
		 }
	}

	else {
		alert("Input a valid selection");
	}
 }


// control the game function when you click the button
trigger.addEventListener("click", play_game);

}((); 

