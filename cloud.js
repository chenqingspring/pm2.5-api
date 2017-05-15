var AV = require('leanengine');
var request = require('request');

AV.Cloud.define('fetchCityRanking', function (req, res) {
  request('http://www.pm25.in/api/querys/aqi_ranking.json?token=RQCxTwiUMjhhcL4k3S3a', function (error, response, body) {
    if (!error) {
      var CityRanking = AV.Object.extend('CityRanking');
      var cityRanking = new CityRanking();
      cityRanking.set('data', body);
      cityRanking.save().then(function (cityRanking) {
        console.log('New object created with objectId: ' + cityRanking.id);
        res.success("ok");
      }, function (error) {
        console.error('Failed to create new object, with error message: ' + error.message);
      });

    } else {
      console.error('Request failed with error response ' + error);
    }
  });
});


AV.Cloud.define('searchByLocation', function (req, res) {

  var getCityNamePromise = new Promise(function (resolve, reject) {
    request("http://apis.map.qq.com/ws/geocoder/v1/?location=" + req.params.lat + "," + req.params.lng + "&key=XBMBZ-W37A4-LFPUE-D55AO-RSLZK-HMBJ6", function (error, response, body) {
      if (!error) {
        var cityName = JSON.parse(body).result.address_component.city.replace("市", "");
        resolve(cityName);
      } else
        console.error('Request failed with response: ' + error);
    });
  });


  getCityNamePromise.then(function (cityName) {

    var query = new AV.Query('CityAQI');
    query.equalTo('cityName', cityName);
    query.greaterThan('createdAt', new Date(new Date() - 3600000));

    query.first().then(function (result) {
      if (result) {
        console.log("Fetched CityAQI Data from storage with id:" + result.id);
        res.success(result.get('data'));
      } else {
        fetchCityDetails(cityName)
      }
    }, function (error) {
      console.error('Failed to fetch cityAQI, with error message: ' + error.message);
    });
  });


  function fetchCityDetails(cityName) {
    request(encodeURI("http://www.pm25.in/api/querys/aqi_details.json?city=" + cityName + "&token=RQCxTwiUMjhhcL4k3S3a"), function (error, response, body) {
      if (!error) {
        var CityAQI = AV.Object.extend('CityAQI');
        var cityAQI = new CityAQI();
        cityAQI.set('cityName', cityName);
        cityAQI.set('data', body);
        cityAQI.save().then(function (cityAQI) {
          console.log('New ' + cityName + ' cityAQI created with objectId: ' + cityAQI.id);
        }, function (error) {
          console.error('Failed to create new cityAQI, with error message: ' + error.message);
        });
        res.success(body);
      } else {
        console.error('Request failed with response: ' + error);
      }

    })
  }
});

module.exports = AV.Cloud;