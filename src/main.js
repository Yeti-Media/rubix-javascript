/* rubix-javscript main */

// Base function.
var Rubix = function(uk, v, d) {
  // Add functionality here.
  this.domain = d || "http://api.rubix.io";
  this.version = v || "v1";
  this.user_key = uk;

  this.list_categories = function(){
    var result;
    this._request('get', this._buildPath("/categories"), {}, function(){
       result = JSON.parse(this.responseText);
    });
    return result;
  };

  this.list_pattern = function(){
    var result;
    this._request('get', this._buildPath("/patterns"), {}, function(){
       result = JSON.parse(this.responseText);
    });
    return result;
  };

  this.create_pattern = function(pattern){
    var result;
    this._request('post', this._buildPath("/patterns"), pattern, function(){
       result = JSON.parse(this.responseText);
    });
    return result;
  };

  this.delete_pattern = function(patternId){
    var result;
    this._request('delete', this._buildPath("/patterns" + patternId),{} , function(){
       result = JSON.parse(this.responseText);
    });
    return result;
  };

  this.feature_matcher = function(data){
    var result;
    this._request('post', this._buildPath("/patterns/feature_matcher"), data , function(){
       result = JSON.parse(this.responseText);
    });
    return result;
  };

  this.ocr = function(data){
    var result;
    this._request('post', this._buildPath("/patterns/ocr"), data , function(){
       result = JSON.parse(this.responseText);
    });
    return result;
  };

  this.update_trainer = function(){
    var result;
    this._request('get', this._buildPath("/trainers/matching"), {} , function(){
       result = JSON.parse(this.responseText);
    });
    return result;
  };

  this._request = function(method, path, params, callback){
    var oReq = new XMLHttpRequest();
    oReq.onload = this._parseData;
    oReq.open(method, path, true);
    oReq.send();
  };


  this._buildPath = function(relative){
    return domain + "/api/" + version + relative ;
  }
  
  return true;
};


// Version.
Rubix.VERSION = '0.0.0';


// Export to the root, which is probably `window`.
root.Rubix = Rubix;
