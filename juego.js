(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 850,
	height: 478,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.AndreaPirlo = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.balon = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CristianoRonaldo = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.FondoInicial = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Fontmap = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.francemap = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.goal = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.green = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Hazard = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Iniesta = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.jugar = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.led_off = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.MarioGotze = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.modric = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Pogba = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.red = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.RobertLewandowski = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Rooney = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.verde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.green();
	this.instance.setTransform(-8,-8,0.053,0.053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,16.1,16.1);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.balon();
	this.instance.setTransform(0,0,0.061,0.061);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,36.9);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.balon();
	this.instance.setTransform(0,0,0.061,0.061);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,36.9);


(lib.rojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.red();
	this.instance.setTransform(-8,-8,0.053,0.053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,16.1,16.1);


(lib.Play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.502)").s().p("Ag3g9IBvA9IhvA9g");
	this.shape.setTransform(0.5,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3g9IBvA9IhvA+g");
	this.shape_1.setTransform(0.5,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,9.8).s().p("AhBAkQgcgPAAgVQAAgUAcgPQAcgQAlAAQAmAAAcAQQAcAPAAAUQAAAVgcAPQgcAQgmAAQglAAgcgQg");
	this.shape_2.setTransform(-0.6,-10);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},3).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AB2AAQAAAwgjAjQgjAjgwAAQgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvg");
	this.shape_3.setTransform(-0.6,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape_4.setTransform(-0.6,-2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape_5.setTransform(-0.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_5},{t:this.shape_3}]},2).to({state:[{t:this.shape_5},{t:this.shape_3}]},1).wait(1));

	// Layer: button
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-0.5,0,0,-0.5,0,16.6).s().p("AhyBtQgugtAAhAQAAg/AugtQAtguBBAAQA+AAAsAgQAsAgAOBwQAOBziyASQhBAAgtgug");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-15.5,32.3,31.1);


(lib.off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.led_off();
	this.instance.setTransform(-8,-8,0.053,0.053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,16.1,16.1);


(lib.mapBalon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.balon();
	this.instance.setTransform(-12,-12.5,0.039,0.041);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-12.5,24,25);


(lib.mapa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.francemap();
	this.instance.setTransform(-321.5,-314.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-321.5,-314.5,643,629);


(lib.i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.AndreaPirlo();
	this.instance.setTransform(-168.7,-150,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.7,-150,337.5,300);


(lib.h = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Rooney();
	this.instance.setTransform(-168.7,-150,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.7,-150,337.5,300);


(lib.g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.RobertLewandowski();
	this.instance.setTransform(-168.7,-150,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.7,-150,337.5,300);


(lib.f = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.modric();
	this.instance.setTransform(-168.7,-150,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.7,-150,337.5,300);


(lib.e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.MarioGotze();
	this.instance.setTransform(-168.7,-150,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.7,-150,337.5,300);


(lib.d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Iniesta();
	this.instance.setTransform(-168.7,-150,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.7,-150,337.5,300);


(lib.comenzar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.jugar = new cjs.Text("Comenzar", "19px 'Buxton Sketch'", "#CCCCCC");
	this.jugar.name = "jugar";
	this.jugar.lineHeight = 25;
	this.jugar.lineWidth = 100;
	this.jugar.setTransform(16.6,18.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,54.8).s().p("AheDiQicgMh1g0QiXhDAAhfQAAheCXhEQBdgpB3gQQBJgKBSABQBTgBBKAKQB0AQBdApQA+AcAlAgQA2AuAAA4QAAA5g2AuQglAgg+AbQhzA0ibAMQgvADgxABQgxgBgtgDg");
	this.shape.setTransform(50,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.jugar}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,8,122.6,46);


(lib.c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.CristianoRonaldo();
	this.instance.setTransform(-168.7,-150,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.7,-150,337.5,300);


(lib.boton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.jugar();
	this.instance.setTransform(-101.5,-50.7,0.211,0.211);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-50.7,203,101.5);


(lib.b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Hazard();
	this.instance.setTransform(-225,-200,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-200,450,400);


(lib.a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Pogba();
	this.instance.setTransform(-224.9,-200,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.9,-200,450,400);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.verde();
	this.instance.setTransform(0,-0.1);

	this.instance_1 = new lib.off();
	this.instance_1.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8.1,16.1,16.1);


(lib.Balon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.balonMapa = new lib.mapBalon();
	this.balonMapa.setTransform(-1.1,-3.2,0.667,0.666,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.balonMapa).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-11.2,16,16.7);


(lib.balon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo3();
	this.instance.setTransform(39,0,1,1,0,0,0,18.5,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:26.3,y:-7.7},0).wait(1).to({x:13.8,y:-15.6},0).wait(1).to({x:1.5,y:-23.9},0).wait(1).to({x:-10.7,y:-32.4},0).wait(1).to({x:-22.6,y:-41.2},0).wait(1).to({x:-34.4,y:-50.3},0).wait(1).to({x:-45.9,y:-59.7},0).wait(1).to({x:-57.2,y:-69.4},0).wait(1).to({x:-68.2,y:-79.3},0).wait(1).to({x:-79,y:-89.6},0).wait(1).to({x:-89.4,y:-100.1},0).wait(1).to({x:-99.6,y:-110.9},0).wait(1).to({x:-109.5,y:-122},0).wait(1).to({x:-119.1,y:-133.4},0).wait(1).to({x:-128.3,y:-145},0).wait(1).to({x:-137.2,y:-156.9},0).wait(1).to({x:-145.7,y:-169.1},0).wait(1).to({x:-153.9,y:-181.5},0).wait(1).to({x:-161.6,y:-194.1},0).wait(1).to({x:-169,y:-207},0).wait(1).to({x:-176,y:-220.1},0).wait(1).to({x:-182.7,y:-233.4},0).wait(1).to({x:-188.9,y:-246.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.5,-18.4,37,36.8);


(lib.balon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(0,0,1,1,0,0,0,18.5,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:13.7,y:-6.1},0).wait(1).to({x:27.2,y:-12.6},0).wait(1).to({x:40.6,y:-19.4},0).wait(1).to({x:53.7,y:-26.5},0).wait(1).to({x:66.7,y:-34.1},0).wait(1).to({x:79.4,y:-42},0).wait(1).to({x:91.9,y:-50.3},0).wait(1).to({x:104.1,y:-59},0).wait(1).to({x:116,y:-68.1},0).wait(1).to({x:127.6,y:-77.6},0).wait(1).to({x:138.8,y:-87.6},0).wait(1).to({x:149.6,y:-98},0).wait(1).to({x:159.9,y:-108.9},0).wait(1).to({x:169.8,y:-120.2},0).wait(1).to({x:179.1,y:-131.9},0).wait(1).to({x:187.8,y:-144.1},0).wait(1).to({x:196,y:-156.7},0).wait(1).to({x:203.5,y:-169.6},0).wait(1).to({x:210.4,y:-183},0).wait(1).to({x:216.5,y:-196.7},0).wait(1).to({x:221.9,y:-210.6},0).wait(1).to({x:226.6,y:-224.9},0).wait(1).to({x:230.5,y:-239.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-18.4,37,36.8);


// stage content:



(lib.juego = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(1);
		var presentacion = this;
		var equipoSelec; // declara la variable que nombra la gallina seleccionada
		this.equipoSelec = 0;
		var teams= new Array(this.francia, this.belgica, this.portugal, this.espana, 
		this.alemania, this.croacia, this.polonia, this.inglaterra, this.italia);
		var partido;
		this.partido=0;
		this.boton.addEventListener("click", parar);
		function parar() {
			presentacion._goto(2);
		}
		
		this.next.addEventListener("click", siguiente);
		function siguiente(){
				teams[presentacion.equipoSelec].visible=false;
				presentacion.equipoSelec= (presentacion.equipoSelec+1)%teams.length;
				teams[presentacion.equipoSelec].visible=true;
		}
		
		this.previo.addEventListener("click", anterior);
		function anterior(){
			teams[presentacion.equipoSelec].visible=false;
			presentacion.equipoSelec= (presentacion.equipoSelec-1+teams.length)%teams.length;
			teams[presentacion.equipoSelec].visible=true;
		}
		
		window.addEventListener("keydown", undirtecla.bind(this));
		//- los números 37, 38, 39 y 40 corresponden a las flechas del teclado
		//- la función se ejecuta reiteradamente mientras la tecla permanezca undida
		function undirtecla(e) {
			if (e.keyCode == 37) {
				anterior();
			} else if (e.keyCode == 39) {
				siguiente();
			} 
		}
		
		this.comenzar.addEventListener("click", irMapa);
		function irMapa(){
				
				presentacion._goto(3);
		}
	}
	this.frame_3 = function() {
		var presentacion=this;
		var bordeos= new Array(this.bordeos_green, this.bordeos_off, this.bordeos_red);
		var toulouse= new Array(this.toulouse_green, this.toulouse_off, this.toulouse_red);
		var marsella= new Array(this.marsella_green, this.marsella_off, this.marsella_red);
		var niza= new Array(this.niza_green, this.niza_off, this.niza_red);
		var etienne= new Array(this.etienne_green, this.etienne_off, this.etienne_red);
		var lyon= new Array(this.lyon_green, this.lyon_off, this.lyon_red);
		var lille= new Array(this.lille_green, this.lille_off, this.lille_red);
		var lens= new Array(this.lens_green, this.lens_off, this.lens_red);
		var paris= new Array(this.paris_green, this.paris_off, this.paris_red);
		var denis= new Array(this.denis_green, this.denis_off, this.denis_red);
		var cities= new Array(bordeos,toulouse, marsella, niza, etienne, lyon, lille, lens, paris, denis);
		
		window.addEventListener("keydown", undirtecla.bind(this));
		
		//- los números 37, 38, 39 y 40 corresponden a las flechas del teclado
		//- la función se ejecuta reiteradamente mientras la tecla permanezca undida
		function undirtecla(e) {
			if (e.keyCode == 37) {
				this.balonMapa.x -= 5;
			} else if (e.keyCode == 39) {
				this.balonMapa.x += 5;
			} else if (e.keyCode == 38) {
				this.balonMapa.y -= 5;
			} else if (e.keyCode == 40) {
				this.balonMapa.y += 5;
			} else if (e.keyCode == 13) {
				jugar();
			}
		}
		
		this.bordeos_off.addEventListener("click",jugar)
		this.toulouse_off.addEventListener("click",jugar)
		this.marsella_off.addEventListener("click",jugar)
		this.niza_off.addEventListener("click",jugar)
		this.etienne_off.addEventListener("click",jugar)
		this.lyon_off.addEventListener("click",jugar)
		this.lille_off.addEventListener("click",jugar)
		this.lens_off.addEventListener("click",jugar)
		this.paris_off.addEventListener("click",jugar)
		this.denis_off.addEventListener("click",jugar)
		
		
		
		function jugar() {
			presentacion.gotoAndStop(4);
			if (presentacion.balonMapa.x >= 270 && presentacion.balonMapa.x <= 282 && presentacion.balonMapa.y >= 295 && presentacion.balonMapa.y <= 305){
						
				presentacion.gotoAndStop(4);
				
			}
		}
		
		for(i=0;i<this.partido;i++){
			visited(i);
		}
		off(this.partido);
		for(i=this.partido+1;i<cities.length;i++){
			pendiente(i);
		}
			
		
		function off(city){
				var ciudad=cities[city];
				ciudad[0].visible=false;
				ciudad[1].visible=true;
				ciudad[2].visible=false;
		}
		
		function visited(city){
				var ciudad=cities[city];
				ciudad[0].visible=true;
				ciudad[1].visible=false;
				ciudad[2].visible=false;
		}
		
		function pendiente(city){
				var ciudad=cities[city];
				ciudad[0].visible=false;
				ciudad[1].visible=false;
				ciudad[2].visible=true;
		}
	}
	this.frame_4 = function() {
		var presentacion= this;
		window.addEventListener("keydown", undirtecla.bind(this));
		//- los números 37, 38, 39 y 40 corresponden a las flechas del teclado
		//- la función se ejecuta reiteradamente mientras la tecla permanezca undida
		this.partido++;
		function undirtecla(e) {
			if (e.keyCode == 37) {
				
				presentacion._goto(3);
			} 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Capa 2
	this.balon2 = new lib.balon2();
	this.balon2.setTransform(399.4,433.5);

	this.balon = new lib.balon_1();
	this.balon.setTransform(438.4,433.5);

	this.instance = new lib.goal();
	this.instance.setTransform(126.1,0,0.478,0.403);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.balon},{t:this.balon2}]},4).wait(1));

	// Capa 4
	this.boton = new lib.boton();
	this.boton.setTransform(444.4,360);
	new cjs.ButtonHelper(this.boton, 0, 1, 1);

	this.instance_1 = new lib.FondoInicial();
	this.instance_1.setTransform(0.1,0,0.443,0.443);

	this.italia = new lib.i();
	this.italia.setTransform(391,163.9);
	this.italia.visible = false;

	this.inglaterra = new lib.h();
	this.inglaterra.setTransform(377.3,163.9);
	this.inglaterra.visible = false;

	this.polonia = new lib.g();
	this.polonia.setTransform(377.3,163.9);
	this.polonia.visible = false;

	this.croacia = new lib.f();
	this.croacia.setTransform(377.3,163.9);
	this.croacia.visible = false;

	this.alemania = new lib.e();
	this.alemania.setTransform(391,163.9);
	this.alemania.visible = false;

	this.espana = new lib.d();
	this.espana.setTransform(391,163.9);
	this.espana.visible = false;

	this.portugal = new lib.c();
	this.portugal.setTransform(391,163.9);
	this.portugal.visible = false;

	this.belgica = new lib.b();
	this.belgica.setTransform(377.3,163.9,0.75,0.75);
	this.belgica.visible = false;

	this.francia = new lib.a();
	this.francia.setTransform(377.3,163.9,0.75,0.75);

	this.comenzar = new lib.comenzar();
	this.comenzar.setTransform(347.1,317.6,1.485,1.483,0,0,0,0.2,-0.1);
	new cjs.ButtonHelper(this.comenzar, 0, 1, 1);

	this.previo = new lib.Play();
	this.previo.setTransform(116.4,223.8,4.427,4.426,0,0,180,0,-0.2);
	new cjs.ButtonHelper(this.previo, 0, 1, 2, false, new lib.Play(), 3);

	this.next = new lib.Play();
	this.next.setTransform(730.2,224.7,4.427,4.426);
	new cjs.ButtonHelper(this.next, 0, 1, 2, false, new lib.Play(), 3);

	this.instance_2 = new lib.Fontmap();
	this.instance_2.setTransform(0,-0.6,0.443,0.443);

	this.lille_red = new lib.rojo();
	this.lille_red.setTransform(537.4,30.5);

	this.lille_off = new lib.Símbolo1();
	this.lille_off.setTransform(537.4,30.5);

	this.lille_green = new lib.verde();
	this.lille_green.setTransform(537.4,30.5);

	this.lens_red = new lib.rojo();
	this.lens_red.setTransform(528.2,44.2);

	this.lens_off = new lib.Símbolo1();
	this.lens_off.setTransform(528.2,44.2);

	this.lens_green = new lib.verde();
	this.lens_green.setTransform(528.2,44.2);

	this.denis_red = new lib.rojo();
	this.denis_red.setTransform(516.7,88.4);

	this.denis_off = new lib.Símbolo1();
	this.denis_off.setTransform(516.7,88.4);

	this.denis_green = new lib.verde();
	this.denis_green.setTransform(516.7,88.4);

	this.paris_red = new lib.rojo();
	this.paris_red.setTransform(516.8,106);

	this.paris_off = new lib.Símbolo1();
	this.paris_off.setTransform(516.8,106);

	this.paris_green = new lib.verde();
	this.paris_green.setTransform(516.8,106);

	this.lyon_red = new lib.rojo();
	this.lyon_red.setTransform(592.2,226.2);

	this.lyon_off = new lib.Símbolo1();
	this.lyon_off.setTransform(592.2,226.2);

	this.lyon_green = new lib.verde();
	this.lyon_green.setTransform(592.2,226.2);

	this.etienne_red = new lib.rojo();
	this.etienne_red.setTransform(578.4,241.1);

	this.etienne_off = new lib.Símbolo1();
	this.etienne_off.setTransform(578.4,241.1);

	this.etienne_green = new lib.verde();
	this.etienne_green.setTransform(578.4,241.1);

	this.niza_red = new lib.rojo();
	this.niza_red.setTransform(665.6,308.4);

	this.niza_off = new lib.Símbolo1();
	this.niza_off.setTransform(665.6,308.4);

	this.niza_green = new lib.verde();
	this.niza_green.setTransform(665.6,308.4);

	this.marsella_red = new lib.rojo();
	this.marsella_red.setTransform(613.3,331.7);

	this.marsella_off = new lib.Símbolo1();
	this.marsella_off.setTransform(613.3,331.8);

	this.marsella_green = new lib.verde();
	this.marsella_green.setTransform(613.3,331.7);

	this.toulouse_red = new lib.rojo();
	this.toulouse_red.setTransform(487.6,317.7);

	this.toulouse_off = new lib.Símbolo1();
	this.toulouse_off.setTransform(487.6,316.6);

	this.toulouse_green = new lib.verde();
	this.toulouse_green.setTransform(487.6,317.7);

	this.bordeos_red = new lib.rojo();
	this.bordeos_red.setTransform(425.9,257.1);

	this.bordeos_off = new lib.Símbolo1();
	this.bordeos_off.setTransform(425.9,257.1);

	this.bordeos_green = new lib.verde();
	this.bordeos_green.setTransform(425.9,257.1);

	this.balonMapa = new lib.Balon();
	this.balonMapa.setTransform(322.4,173.1,1,1,0,0,0,-1.2,-2.3);

	this.instance_3 = new lib.mapa("synched",0);
	this.instance_3.setTransform(516.5,205.7,0.639,0.639,0,0,0,-5.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.boton}]}).to({state:[{t:this.instance_2,p:{y:-0.6}},{t:this.next},{t:this.previo},{t:this.comenzar},{t:this.francia},{t:this.belgica},{t:this.portugal},{t:this.espana},{t:this.alemania},{t:this.croacia},{t:this.polonia},{t:this.inglaterra},{t:this.italia}]},2).to({state:[{t:this.instance_2,p:{y:-0.1}},{t:this.instance_3},{t:this.balonMapa},{t:this.bordeos_green},{t:this.bordeos_off},{t:this.bordeos_red},{t:this.toulouse_green},{t:this.toulouse_off},{t:this.toulouse_red},{t:this.marsella_green},{t:this.marsella_off},{t:this.marsella_red},{t:this.niza_green},{t:this.niza_off},{t:this.niza_red},{t:this.etienne_green},{t:this.etienne_off},{t:this.etienne_red},{t:this.lyon_green},{t:this.lyon_off},{t:this.lyon_red},{t:this.paris_green},{t:this.paris_off},{t:this.paris_red},{t:this.denis_green},{t:this.denis_off},{t:this.denis_red},{t:this.lens_green},{t:this.lens_off},{t:this.lens_red},{t:this.lille_green},{t:this.lille_off},{t:this.lille_red}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(425.1,239,850,478.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;