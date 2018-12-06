let trains = [];
let timer;

function start(){
	let velocity = [];
	velocity[0] = parseInt($("#vel_1").val())/25;
	velocity[1] = parseInt($("#vel_2").val())/25;

	trains.push(new Train(velocity[0], "right", "train_1"))
	trains.push(new Train(velocity[1], "left", "train_2"))

	clearInterval(timer);
	timer = setInterval(update, 60);
}

function update(){
	trains.forEach(e => e.move());
	checkPositions();
}

function checkPositions(){
	if(trains[1].y < trains[0].y){
		clearInterval(timer)
		let pos = trains[0].y + trains[1].y;
		pos /= 2;
		$("#pos").val(pos.toFixed(2))
		trains = [];
	}
}