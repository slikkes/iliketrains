let trains = [];

function start(){
	let velocity = [];
	velocity[0] = parseInt($("#vel_1").val());
	velocity[1] = parseInt($("#vel_2").val());

	trains.push(new Train(velocity[0], "right", "train_1"))
	trains.push(new Train(velocity[1], "left", "train_2"))
	setInterval(update, 250);
}

function update(){
	console.log($("#train_1").val())
	trains.forEach(e => e.move());

}