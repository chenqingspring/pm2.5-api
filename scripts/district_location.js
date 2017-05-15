#!/usr/bin/env node

var AV = require("leanengine");
var allCities = require('./all_cities.json');
var request = require('request');

var APP_ID = 'PmV1nY70lW7jOSgdaz77Ek4x-gzGzoHsz';
var APP_KEY = 'y73IcLAkxJznpDxczxmA9sak';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

allCities.forEach(function (item, index) {
  setTimeout(function () {
    if (!!item.position_name) {
      var districtName = item.area + item.position_name;
      request(encodeURI("http://apis.map.qq.com/ws/geocoder/v1/?address=" + districtName + "&output=json&key=XBMBZ-W37A4-LFPUE-D55AO-RSLZK-HMBJ6"), function (error, response, body) {
        if (!error && !!JSON.parse(body).result) {
          console.log(districtName);
          var DistrictLocation = AV.Object.extend('DistrictLocation');
          var dl = new DistrictLocation();
          var location = JSON.parse(body).result.location;
          dl.set('city', item.area);
          dl.set('district', item.position_name);
          dl.set('lng', location.lng);
          dl.set('lat', location.lat);
          dl.save().then(function (districtLocation) {
            console.log('New ' + districtName + 'location created with objectId: ' + districtLocation.id);
          }, function (error) {
            console.error('Failed to create new location, with error message: ' + error.message);
          });
        }
      })
    }
  }, 1000 * index)
});