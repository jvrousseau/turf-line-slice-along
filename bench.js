var lineSliceAlong = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var line1 = JSON.parse(fs.readFileSync(__dirname + '/test/fixtures/line1.geojson'));
var route1 = JSON.parse(fs.readFileSync(__dirname + '/test/fixtures/route1.geojson'));
var route2 = JSON.parse(fs.readFileSync(__dirname + '/test/fixtures/route2.geojson'));

var suite = new Benchmark.Suite('turf-line-slice-along');
suite
  .add('turf-line-slice-along#line1 5-15 miles',function () {
    lineSliceAlong(line1, 5, 15, 'miles');
  })
  .add('turf-line-slice-along#line1 50-250 miles',function () {
    lineSliceAlong(line1, 50, 250, 'miles');
  })
  .add('turf-line-slice-along#line1 250-500 miles',function () {
    lineSliceAlong(line1, 250, 500,  'miles');
  })
  .add('turf-line-slice-along#route1 5-15 miles',function () {
    lineSliceAlong(route1, 5, 15, 'miles');
  })
  .add('turf-line-slice-along#route1 50-250 miles',function () {
    lineSliceAlong(route1, 50, 250, 'miles');
  })
  .add('turf-line-slice-along#route1 250-500 miles',function () {
    lineSliceAlong(route1, 250, 500,  'miles');
  })
  .add('turf-line-slice-along#route2 5-15 miles',function () {
    lineSliceAlong(route2, 5, 15, 'miles');
  })
  .add('turf-line-slice-along#route2 15-25 miles',function () {
    lineSliceAlong(route2, 15, 25,  'miles');
  })
  .add('turf-line-slice-along#route2 25-35 miles',function () {
    lineSliceAlong(route2, 25, 35, 'miles');
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {

  })
  .run();
/*
  var otherSuite = new Benchmark.Suite('turf-line-slice-along-separate');
  otherSuite
    .add('turf-line-slice-along-separate#route1 5-15 miles',function () {
      var start = along(route1, 5, 'miles');
      var end = along(route1, 15, 'miles');
      lineSlice(start, end, route1);
    })
    .add('turf-line-slice-along-separate#route1 50-250 miles',function () {
        var start = along(route1, 50, 'miles');
        var end = along(route1, 250, 'miles');
        lineSlice(start, end, route1);
    })
    .add('turf-line-slice-along-separate#route1 250-500 miles',function () {
        var start = along(route1, 250, 'miles');
        var end = along(route1, 500, 'miles');
        lineSlice(start, end, route1);
    })
    .add('turf-line-slice-along-separate#route2 5-15 miles',function () {
      var start = along(route2, 5, 'miles');
      var end = along(route2, 15, 'miles');
      lineSlice(start, end, route2);
    })
    .add('turf-line-slice-along-separate#route2 50-250 miles',function () {
        var start = along(route2, 50, 'miles');
        var end = along(route2, 250, 'miles');
        lineSlice(start, end, route2);
    })
    .add('turf-line-slice-along-separate#route2 250-500 miles',function () {
        var start = along(route2, 250, 'miles');
        var end = along(route2, 500, 'miles');
        lineSlice(start, end, route2);
    })
    .on('cycle', function (event) {
      console.log(String(event.target));
    })
    .on('complete', function () {

    })
    .run();
*/
