(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 482,
	fps: 24,
	color: "#6699FF",
	manifest: []
};



// symbols:



(lib.balon = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.franceMap = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.goal = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.porta = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.portb = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.red = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.trophy = function() {
	this.spriteSheet = ss["juego_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.red();
	this.instance.setTransform(-13,-13,0.083,0.083);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-13,25,25);


(lib.portb_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.porta();
	this.instance.setTransform(-108,-153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-153,216,306);


(lib.porta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.portb();
	this.instance.setTransform(-97.5,-147.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-147.5,195,295);


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


(lib.mapBalon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.balon();
	this.instance.setTransform(-12,-12.5,0.039,0.041);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-12.5,24,25);


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


(lib.bolaverde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.jugar = new cjs.Text("Jugar", "19px 'Buxton Sketch'", "#CCCCCC");
	this.jugar.name = "jugar";
	this.jugar.lineHeight = 25;
	this.jugar.lineWidth = 100;
	this.jugar.setTransform(28.8,18.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,54.8).s().p("AheDiQicgMh1g0QiXhDAAhfQAAheCXhEQBdgpB3gQQBJgKBSABQBTgBBKAKQB0AQBdApQA+AcAlAgQA2AuAAA4QAAA5g2AuQglAgg+AbQhzA0ibAMQgvADgxABQgxgBgtgDg");
	this.shape.setTransform(50,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.jugar}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,8,134.8,46);


(lib.Balon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.balonMapa = new lib.mapBalon();
	this.balonMapa.setTransform(-1.1,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.balonMapa).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-14.8,24,25);


// stage content:
(lib.juego = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(1);
		var presentacion = this;
		var equipoSelec; // declara la variable que nombra la gallina seleccionada
		this.equipoSelec = 0;
		var teams= new Array(this.a, this.b);
		
		
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
		var partido =0;
		crearLeds();
		window.addEventListener("keydown", undirtecla.bind(this));
		//- los números 37, 38, 39 y 40 corresponden a las flechas del teclado
		//- la función se ejecuta reiteradamente mientras la tecla permanezca undida
		function undirtecla(e) {
			if (e.keyCode == 37) {
				this.balonMapa.x -= 2;
			} else if (e.keyCode == 39) {
				this.balonMapa.x += 2;
			} else if (e.keyCode == 38) {
				this.balonMapa.y -= 2;
			} else if (e.keyCode == 40) {
				this.balonMapa.y += 2;
			} else if (e.keyCode == 13) {
				entrar();
			}
		}
		
		function entrar() {
			ocultar();
			presentacion.gotoAndStop(4);
			if (presentacion.balonMapa.x >= 270 && presentacion.balonMapa.x <= 282 && presentacion.balonMapa.y >= 295 && presentacion.balonMapa.y <= 305){
						
				presentacion.gotoAndStop(4);
				
			}
		}
		
		switch(partido){
			case 0:
				
			
			
			break;
			case 1:
			break;
			case 2:
			break;
			case 3:
			break;
			case 4:
			break;
			case 5:
			break;
			case 6:
			break;
			case 7:
			break;
			case 8:
			break;
			case 9:
			break;
		
		}
		
		function crearLeds(){
			var red = new lib.Red();
				red.name="uno";
				red.x=284.85;
				red.y=303.80;
				presentacion.addChild(red);
			var red2 = new lib.Red();
				red2.x=362.90;
				red2.y=375.80;
				presentacion.addChild(red2);
			var red3 = new lib.Red();
				red3.x=516.70;
				red3.y=382.70;
				presentacion.addChild(red3);
			var red4 = new lib.Red();
				red4.x=577.90;
				red4.y=354.65;
				presentacion.addChild(red4);
			var red5 = new lib.Red();
				red5.x=474.65;
				red5.y=286.55;
				presentacion.addChild(red5);
			var red6 = new lib.Red();
				red6.x=482.70;
				red6.y=256.65;
				presentacion.addChild(red6);
			var red7 = new lib.Red();
				red7.x=397.15;
				red7.y=128.85;
				presentacion.addChild(red7);
			var red8 = new lib.Red();
				red8.x=390.25;
				red8.y=102.40;
				presentacion.addChild(red8);
			var red9 = new lib.Red();
				red9.x=411.40;
				red9.y=60.15;
				presentacion.addChild(red9);
			var red10 = new lib.Red();
				red10.x=413.70;
				red10.y=31.40;
				presentacion.addChild(red10);
		}
		
		function ocultar(){
			presentacion.getChildAt(2).visible=true;
			presentacion.getChildAt(2).visible=false;
			presentacion.getChildAt(3).visible=false;
			presentacion.getChildAt(4).visible=false;
			presentacion.getChildAt(5).visible=false;
			presentacion.getChildAt(6).visible=false;
			presentacion.getChildAt(7).visible=false;
			presentacion.getChildAt(8).visible=false;
			presentacion.getChildAt(9).visible=false;
			presentacion.getChildAt(10).visible=false;
			presentacion.getChildAt(11).visible=false;
		}
	}
	this.frame_4 = function() {
		var presentacion= this;
		window.addEventListener("keydown", undirtecla.bind(this));
		//- los números 37, 38, 39 y 40 corresponden a las flechas del teclado
		//- la función se ejecuta reiteradamente mientras la tecla permanezca undida
		function undirtecla(e) {
			if (e.keyCode == 37) {
				presentacion._goto(3);
			} 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Capa 2
	this.instance = new lib.goal();
	this.instance.setTransform(91.5,-3.8,0.487,0.411);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// Capa 4
	this.comenzar = new lib.comenzar();
	this.comenzar.setTransform(361.9,371.8);
	new cjs.ButtonHelper(this.comenzar, 0, 1, 1);

	this.a = new lib.porta_1();
	this.a.setTransform(444.8,178.4);

	this.b = new lib.portb_1();
	this.b.setTransform(400.1,178.4);
	this.b.visible = false;

	this.previo = new lib.Play();
	this.previo.setTransform(247.6,395.4,1,1,0,0,180);
	new cjs.ButtonHelper(this.previo, 0, 1, 2, false, new lib.Play(), 3);

	this.next = new lib.Play();
	this.next.setTransform(583.1,395.4);
	new cjs.ButtonHelper(this.next, 0, 1, 2, false, new lib.Play(), 3);

	this.balonMapa = new lib.Balon();
	this.balonMapa.setTransform(281.9,301.8,1,1,0,0,0,-1.2,-2.3);

	this.instance_1 = new lib.franceMap();
	this.instance_1.setTransform(139.5,8.2,0.806,0.734);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.next},{t:this.previo},{t:this.b},{t:this.a},{t:this.comenzar}]},2).to({state:[{t:this.instance_1},{t:this.balonMapa}]},1).to({state:[]},1).wait(1));

	// Capa 1
	this.instance_2 = new lib.trophy();
	this.instance_2.setTransform(353.2,90);

	this.boton = new lib.bolaverde();
	this.boton.setTransform(321.1,344.5,2.291,2.291,0,0,0,16.1,16.1);
	new cjs.ButtonHelper(this.boton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.boton},{t:this.instance_2}]},1).to({state:[]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;