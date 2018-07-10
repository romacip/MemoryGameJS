var tablero=new Array();
var contador=0;
var tablero_comp=new Array();
var tab_id=new Array();

var randomFromListGenerator = function (list) {
    var position = 0;

    for (var i=0, l=list.length; i<l; i++) {
        var random = Math.floor((Math.random() * l));
        var aux = list[i];
        list[i] = list[random];
        list[random] = aux;
    }

    return function () {
        return list[position++ % list.length];
    }
}

var nextRandomFromList = randomFromListGenerator (["ROJO.jpg", "ROJO1.jpg", "VERDE.jpg", "VERDE1.jpg", "AMARILLO.jpg", "AMARILLO1.jpg", "AZUL.jpg", "AZUL1.jpg", "BLANCO.jpg", "BLANCO1.jpg", "NEGRO.jpg", "NEGRO1.jpg"]);

for(var x=0; x<12; x++){
	var newRandom = nextRandomFromList();
	tablero.push(newRandom);
}

$("#c1").click(function(){
	var color="url(./img/"+tablero[0]+")";
	$(this).css('background-image', color);
	contador++;
	res=color.substr(10, 4);
	tablero_comp.push(res);
	setTimeout(regresar, 5000)
	id="#c1";
	tab_id.push(id);
});

$("#c2").click(function(){
	var color="url(./img/"+tablero[1]+")";
	$(this).css('background-image', color);
	contador++;
	res=color.substr(10, 4);
	tablero_comp.push(res);
	setTimeout(regresar, 5000)
	id="#c2";
	tab_id.push(id);
});

$("#c3").click(function(){
	var color="url(./img/"+tablero[2]+")";
	$(this).css('background-image', color);
	contador++;	
	res=color.substr(10, 4);
	tablero_comp.push(res);
	setTimeout(regresar, 5000)
	id="#c3";
	tab_id.push(id);
});

$("#c4").click(function(){
	var color="url(./img/"+tablero[3]+")";
	$(this).css('background-image', color);
	contador++;
	res=color.substr(10, 4);
	tablero_comp.push(res);
	setTimeout(regresar, 5000)
	id="#c4";
	tab_id.push(id);
});

$("#c5").click(function(){
	var color="url(./img/"+tablero[4]+")";
	$(this).css('background-image', color);	
	contador++;
	res=color.substr(10, 4);
	tablero_comp.push(res);
	setTimeout(regresar, 5000)
	id="#c5";
	tab_id.push(id);
});

$("#c6").click(function(){
	var color="url(./img/"+tablero[5]+")";
	$(this).css('background-image', color);
	contador++;
	res=color.substr(10, 4);
	tablero_comp.push(res);
	setTimeout(regresar, 5000)
	id="#c6";
	tab_id.push(id);
});

$("#c7").click(function(){
	var color="url(./img/"+tablero[6]+")";
	$(this).css('background-image', color);
	contador++;
	res=color.substr(10, 4);
	tablero_comp.push(res);
	setTimeout(regresar, 5000)
	id="#c7";
	tab_id.push(id);
});

$("#c8").click(function(){
	var color="url(./img/"+tablero[7]+")";
	$(this).css('background-image', color);	
	contador++;
	res=color.substr(10, 4);
	tablero_comp.push(res);
	setTimeout(regresar, 5000)
	id="#c8";
	tab_id.push(id);
});

$("#c9").click(function(){
	var color="url(./img/"+tablero[8]+")";
	$(this).css('background-image', color);
	contador++;
	res=color.substr(10, 4);
	tablero_comp.push(res);
	setTimeout(regresar, 5000)
	id="#c9";
	tab_id.push(id);
});

$("#c10").click(function(){
	var color="url(./img/"+tablero[9]+")";
	$(this).css('background-image', color);
	contador++;
	res=color.substr(10, 4);
	tablero_comp.push(res);
	setTimeout(regresar, 5000)
	id="#c10";
	tab_id.push(id);
});

$("#c11").click(function(){
	var color="url(./img/"+tablero[10]+")";
	$(this).css('background-image', color);
	contador++;
	res=color.substr(10, 4);
	tablero_comp.push(res);
	setTimeout(regresar, 5000)
	id="#c11";
	tab_id.push(id);
});

$("#c12").click(function(){
	var color="url(./img/"+tablero[11]+")";
	$(this).css('background-image', color);
	contador++;
	res=color.substr(10, 4);
	tablero_comp.push(res);
	setTimeout(regresar, 5000)
	id="#c12";
	tab_id.push(id);
});

function regresar(){
	console.log(tablero_comp);
	console.log(tab_id);

	if(contador % 2 === 0 && tablero_comp[0] != tablero_comp[1]){
		$(tab_id[0]).css('background-image', 'url(./img/cerrada.png)');
		$(tab_id[1]).css('background-image', 'url(./img/cerrada.png)');

		tab_id.splice(0,1);
		tab_id.splice(0,1);

		tablero_comp.splice(0,1)
		tablero_comp.splice(0,1)
	}else{
		tab_id.splice(0,1);
		tab_id.splice(0,1);

		tablero_comp.splice(0,1)
		tablero_comp.splice(0,1)
	}
}









