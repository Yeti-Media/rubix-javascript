# Rubix

Rubix API wrapper in Javascript

## About

A JavaScript library by Yeti Media for interact with [Rubix API](https://rubix.3scale.net/).

See the [project homepage](http://nsanta.github.io/rubix-javascript).

## Installation

Using Bower:

    bower install rubix

Or grab the [source](https://github.com/nsanta/rubix-javascript/dist/rubix.js) ([minified](https://github.com/nsanta/rubix-javascript/dist/rubix.min.js)).

## Usage

### Common usage

Each request method accepts a success and error callbacks. The callbacks accepts one argument: `data`.
`data` contains the JSON response of rubix.


Request Example: 

```
  var client = new Rubix('YOUR_KEY');
  client.listPatterns(1,function(response){
    console.log(response);
  });
```

Response Example:

`[{id: 123, label: 'pattern label', url: '//path/to/pattern/image'}]`

##Documentation

### Client Creation

```
   var client = new Rubix('YOUR_USER_KEY');
```

### List Categories

```
   client.listCategories(success, error);
```

### List Patterns

```
   var page = 2;
   client.listPattern(2, success, error);
```

`listPatterns` take three parameters: 

- page number
- success callback
- error callback

### Create Pattern

```
   var pattern = {"pattern":{"remote_file_url":"http://4.bp.blogspot.com/_MBsiuN6rb40/SxPix57DG9I/AAAAAAAAAG4/suzru0MQcHg/s1600/star-trek-movie-poster.jpg", "category_name":"matching", "label":"startrek"}};
   client.createPattern(pattern, success, error);

```

`createPattern` take three parameters: 

- pattern Object
  - pattern Object
    - label: a string for provide a external identifier
    - category_name: a string for provide the category type
    - remote_file_url: a string for provide an url that points to the pattern image.
- success callback
- error callback

### Update Trainer

```
   client.updateTrainer(success, error);
```


### Feature Matcher

```
   var scenario = {"remote_file_url":"http://4.bp.blogspot.com/_MBsiuN6rb40/SxPix57DG9I/AAAAAAAAAG4/suzru0MQcHg/s1600/star-trek-movie-poster.jpg"};
   client.featureMatcher(scenario, success, error);

```
- scenario Object
  - remote_file_url: a string for provide an url that points to the scenario image.
- success callback
- error callback

### OCR

```
   var scenario = {"remote_file_url":"http://read.pudn.com/downloads166/sourcecode/graph/texture_mapping/765713/OCR/OCR/TEST_3.JPG"};
   client.ocr(scenario, success, error);

```
- scenario Object
  - remote_file_url: a string for provide an url that points to the scenario image.
- success callback
- error callback


## Contributing

We'll check out your contribution if you:

* Provide a comprehensive suite of tests for your fork.
* Have a clear and documented rationale for your changes.
* Package these up in a pull request.

We'll do our best to help you out with any contribution issues you may have.

## License

MIT. See `LICENSE.txt` in this directory.
