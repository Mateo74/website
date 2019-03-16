let api = "http://api.openweathermap.org/data/2.5/weather?q=";
let ciudad = "London";
let key = "&APPID=fa7ec9c8fee6302b4bed3194e9747974";
let unidad = "&units=metric";
let url;// = api + ciudad + key + unidad;
let temp;
let size;
let input;
let x = 60;
let y = 80;

let minAbs = -40;
let maxAbs = 80;

function setup() {
	createCanvas(600, 600);
	background(20);
	//loadJSON(url, gotData);

	let boton = select('#boton');
	input = select('#ciudad'); 
	boton.mousePressed(buscarClima);

}

function buscarClima() {
	url = api + input.value() + key + unidad;
	loadJSON(url, gotData);
}

function gotData(data) {

	temp = data.main.temp;
	size = map(temp, minAbs, maxAbs, 0, width/3);
	if (x != 60) {
		x += size/2;
		if (x > width - 50) {
			x = 60;
			y += 150;
		}
	}	
	ellipse(x, y, size, size);
	textAlign(CENTER);
	text(input.value(), x, y + 5)
	x += size/2;
	x += 5;


}


function draw() {
	//background(20);
	if (temp) {

	}


} 