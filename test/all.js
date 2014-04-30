test("the base function exists", function() {
  ok(Rubix);
});

asyncTest("list categories", function () {
  var client = new Rubix('YOUR_KEY');
  client.listCategories(function(response){
    ok(response[0]['title'] === 'matching');
  });
});

asyncTest("list patterns", function () {
  var client = new Rubix('YOUR_KEY');
  client.listPatterns(1,function(response){
    ok(response);
  });
});

asyncTest("create pattern", function () {
  var client = new Rubix('YOUR_KEY');
  var pattern = {
    "pattern":{"remote_file_url":"http://4.bp.blogspot.com/_MBsiuN6rb40/SxPix57DG9I/AAAAAAAAAG4/suzru0MQcHg/s1600/star-trek-movie-poster.jpg",
               "category_name":"matching", 
               "label":"startrek"
             }
  };
  client.createPattern(pattern, function(response){
    ok(response);
  });
});

asyncTest("pattern matching", function () {
  var client = new Rubix('YOUR_KEY');
  var pattern = {
   "remote_file_url":"http://4.bp.blogspot.com/_MBsiuN6rb40/SxPix57DG9I/AAAAAAAAAG4/suzru0MQcHg/s1600/star-trek-movie-poster.jpg"
  };
  client.featureMatcher(pattern, function(response){
    ok(response);
  });
});

asyncTest("OCR", function () {
  var client = new Rubix('YOUR_KEY');
  var pattern = {
   "remote_file_url":"http://read.pudn.com/downloads166/sourcecode/graph/texture_mapping/765713/OCR/OCR/TEST_3.JPG"
  };
  client.ocr(pattern, function(response){
    ok(response);
  });
});

asyncTest("update trainer", function () {
  var client = new Rubix('YOUR_KEY');
  client.updateTrainer(function(response){
    ok(response);
  });
});