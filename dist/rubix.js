(function(root, undefined) {

  "use strict";


/* rubix-javscript main */

// Base function.
var Rubix = function(uk, v, d) {
  // Add functionality here.
  this.domain = d || "http://api.rubix.io";
  this.version = v || "v1";
  this.userKey = uk;

  this.listCategories = function(success, error){
    this._request('get', this._buildPath("/categories"), {}, success, error);
  };

  this.listPatterns = function(page, success, error){
    this._request('get', this._buildPath("/patterns"), {page: page}, success, error);
  };

  this.createPattern = function(pattern, success, error){
    this._request('post', this._buildPath("/patterns"), pattern, success, error);
  };

  this.deletePattern = function(patternId, success, error){
    this._request('delete', this._buildPath("/patterns" + patternId), {}, sucess, error);
  };

  this.featureMatcher = function(data, success, error){
    this._request('post', this._buildPath("/patterns/feature_matcher"), data, success, error);
  };

  this.ocr = function(data, success, error){
    this._request('post', this._buildPath("/patterns/ocr"), data,success, error);
  };

  this.updateTrainer = function(success, error){
    this._request('get', this._buildPath("/trainers/matching"), {}, success, error);
  };

  this._request = function(method, path, params, success, error){
    success = success || function(){};
    error = error || function(){};
    var oReq = new XMLHttpRequest();
    oReq.open(method, path, true);
    oReq.setRequestHeader('user_key', this.userKey);
    oReq.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    oReq.onreadystatechange = function () {
    if (oReq.readyState === 4) {
        if (oReq.status !== 200) {
            var data = JSON.parse(this.responseText);
            error.call(data);
        }
        else{
            var data = JSON.parse(this.responseText);
            success(data);
        }
      }
    };
    oReq.send(JSON.stringify(params));
  };

  this._buildPath = function(relative){
    return this.domain + "/api/" + this.version + relative ;
  };
  
  return true;
};


// Version.
Rubix.VERSION = '0.0.0';


// Export to the root, which is probably `window`.
root.Rubix = Rubix;


}(this));
