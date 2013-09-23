RenderContext = function(resourceLoader){
    this.gl = null;
	  this.programs = {};
};

RenderContext.prototype.init = function(selector) {
  var canvas =  document.getElementById(selector);
  try
  {
    var ctx = canvas.getContext("experimental-webgl", {antialias: false});
    this.gl = ctx;
  } catch (ex){
    alert("Sorry dude, I couldn't create webgl, try Chrome or something: " + ex);   
  }

  if(!this.gl){
    return;
  }
 
  this._canvasWidth = canvas.width;
  this._canvasHeight = canvas.height;  
  this._currentWidth = canvas.width;
  this._currentHeight = canvas.height;  

  this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
  this.gl.enable(this.gl.DEPTH_TEST);  
};

RenderContext.prototype.currentWidth = function() { return this._currentWidth; };
RenderContext.prototype.currentHeight = function() { return this._currentHeight; };
RenderContext.prototype.canvasWidth = function() { return this._canvasWidth; };
RenderContext.prototype.canvasHeight = function() { return this._canvasHeight; };

RenderContext.prototype.setDimensions = function(width, height) {
  this._currentWidth = width;
  this._currentHeight = height;  
};

RenderContext.prototype.resetDimensions = function() {
  this._currentWidth = this._canvasWidth;
  this._currentHeight = this._canvasHeight;  
};

RenderContext.prototype.createProgram = function(programName) {
	
	var fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
	var vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER);
	
   this.gl.shaderSource(fragmentShader, Cache.Shaders[programName].Fragment);
   this.gl.compileShader(fragmentShader);

   this.gl.shaderSource(vertexShader, Cache.Shaders[programName].Shader);
   this.gl.compileShader(vertexShader);

	if (!this.gl.getShaderParameter(vertexShader, this.gl.COMPILE_STATUS)) {
		 throw this.gl.getShaderInfoLog(vertexShader);
	}
	if (!this.gl.getShaderParameter(fragmentShader, this.gl.COMPILE_STATUS)) {
		 throw this.gl.getShaderInfoLog(fragmentShader);
	}

   var program = this.gl.createProgram();
	 this.gl.attachShader(program, vertexShader);
   this.gl.attachShader(program, fragmentShader);
   this.gl.linkProgram(program);	

	if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
		throw "Couldn't create program";
	}	

	this.programs[programName] = program;
};


RenderContext.prototype.setActiveProgram = function(programName) {
	if(!this.programs[programName]) { this.createProgram(programName); }
	var program = this.programs[programName];

	this.gl.useProgram(program);
	this.program = program;
	return program;
}; 
