var KeyCodes = {
    S:83,
    X:88, 
    W: 87, 
    D: 68, 
    A: 65, 
    Space: 32,
    RCTRL: 17,
    UP: 38,
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40,
    SHIFT: 16,
    X: 88
};

KeyboardStates = {};

var inputEnabled = true;

PlayerController = function(targetId, server){
  this.targetId = targetId;
  this.server = server;
  
  this.forwards = false;
  this.backward = false;
  this.left = false;
  this.right = false;
  this.jump = false;
  
  var controller = this;
  setInterval(function() { controller.processInput(); }, 1000 / 30);
  
  this.registerKeyboardMappings();
  
};

PlayerController.prototype.registerKeyboardMappings = function() {
  this.keyboardMappings = {};
  this.registerKeyboardMapping(KeyCodes.UP, 'startForward', 'cancelForward');
  this.registerKeyboardMapping(KeyCodes.DOWN, 'startBackward', 'cancelBackward');
  this.registerKeyboardMapping(KeyCodes.LEFT, 'startLeft', 'cancelLeft');
  this.registerKeyboardMapping(KeyCodes.RIGHT, 'startRight', 'cancelRight');
  this.registerKeyboardMapping(KeyCodes.Space, 'startUp', 'cancelUp');
  this.registerKeyboardMapping(KeyCodes.X, 'startFiring', 'finishFiring');
};

PlayerController.prototype.registerKeyboardMapping = function(code, onKeyboardDown, onKeyboardUp){
  this.keyboardMappings[code] = {
    down: onKeyboardDown,
    up: onKeyboardUp,
    state: false
  };
};

PlayerController.prototype.disable = function() {
  inputEnabled = false;
};

PlayerController.prototype.enable = function() {
  inputEnabled = true;
};

PlayerController.prototype.processInput = function(){
  if(!inputEnabled) return;

  for(var code in this.keyboardMappings){
    var mapping = this.keyboardMappings[code];
    
    if(KeyboardStates[code] && !mapping.state){
      if(mapping.down)
        this.server.sendMessage(mapping.down, { id: this.targetId});
      mapping.state = true;
    }
    else if(!KeyboardStates[code] && mapping.state){
       if(mapping.up)
          this.server.sendMessage(mapping.up, { id: this.targetId});
       mapping.state = false;
    }    
  }    
};

document.onkeydown = function(event) { 
  if(!inputEnabled) return;
  KeyboardStates[event.keyCode] = true;
  return false;

};
document.onkeyup = function(event) { 
  if(!inputEnabled) return;
  KeyboardStates[event.keyCode] = false;
  return false;
};
