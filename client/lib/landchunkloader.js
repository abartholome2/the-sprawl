LandChunkModelLoader = function(resources){
    this._resources = resources;
};

LandChunkModelLoader.prototype.handles = function(path){
  return path.indexOf('terrain') > -1;
};

LandChunkModelLoader.prototype.load = function(id, callback) {
 
  var url = '/Landscape&landid=1';
  
  var model = new Landscape();
  model.loadTextures(this._resources);  
  var loader = this;

  $.getJSON(url, function(data, err) {
      model.setData(data);
      callback();
  });
  
  return model;
};
