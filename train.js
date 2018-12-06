class Train{
	constructor(v, dir, rail){
		this.velocity = v;
		this.dir = dir;
		this.rail = rail;
		this.y = this.setStartPoint(dir);
	}

	setStartPoint(dir){
		return dir === "right" ? 0 : 100;
	}

	move(){
		if(!this.destinationReached()){

			if(this.dir === "right"){
				this.y += this.velocity;
			}else{
				this.y -= this.velocity;
			}

			$("#" + this.rail).val(this.y)
		}
	}

	destinationReached(){
		return this.y < 0 || this.y > 100;
	}
}