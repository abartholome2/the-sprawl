GfxApp = function(target) {
  this._target = target;  
  this.context = null;
  this.isClient = true;
};

GfxApp.prototype.init = function(finishedCallback){
  var context = new RenderContext();
  context.init(this._target);
  this.go(context);
  finishedCallback();    
};

GfxApp.prototype.go = function(context) {
  var app = this;
  app.context = context;

  app.scene = new Scene(this);
  app.resources = new ResourceManager(this);  
  app.resources.setTextureLoader(new DefaultTextureLoader(app));
  app.resources.addModelLoader(new DefaultModelLoader(this.resources));
  app.resources.addModelLoader(new LandChunkModelLoader(this.resources));
  app.controller = new Controller(this.scene);
  app.overlay = new Overlay(this);
  app.overlay.activate(context);

  app.rendering = new RenderPipeline(this);
  app.rendering.init(app.context);
};

GfxApp.prototype.tick = function(){
  this.controller.tick();  
};

GfxApp.prototype.render = function(){  
   this.rendering.render(this.context);
   this.overlay.render(this.context);
};
