var AV = require('leanengine');

AV.Cloud.define('fetchCityRanking', function (request, response) {
  AV.Cloud.httpRequest({
    method: 'GET',
    url: 'http://www.pm25.in/api/querys/aqi_ranking.json?token=RQCxTwiUMjhhcL4k3S3a',
    success: function (httpResponse) {
      var CityRanking = AV.Object.extend('CityRanking');
      var cityRanking = new CityRanking();
      cityRanking.set('data', httpResponse.text);
      cityRanking.save().then(function (cityRanking) {
        console.log('New object created with objectId: ' + cityRanking.id);
        response.success('ok');
      }, function (error) {
        console.error('Failed to create new object, with error message: ' + error.message);
      });
    },
    error: function (httpResponse) {
      console.error('Request failed with response code ' + httpResponse.status);
    }
  });
})

AV.Cloud.define('searchByLocation', function (request, response) {
  var getCityNamePromise = new Promise(function (resolve, reject) {
    AV.Cloud.httpRequest({
      method: 'GET',
      url: "http://apis.map.qq.com/ws/geocoder/v1/?location=" + request.params.lat + "," + request.params.lng + "&key=XBMBZ-W37A4-LFPUE-D55AO-RSLZK-HMBJ6",
      success: function (httpResponse) {
        var cityName = JSON.parse(httpResponse.text).result.address_component.city.replace("市", "");
        resolve(cityName);
      },
      error: function (httpResponse) {
        console.error('Request failed with response code ' + httpResponse.status);
      }
    });
  });

  var fetchCityAQIPromise = new Promise(function (resolve, reject) {

    getCityNamePromise.then(function (cityName) {

      var query = new AV.Query('CityAQI');
      query.equalTo('cityName', cityName);
      query.greaterThan('createdAt', new Date(new Date() - 3600000));

      query.first().then(function (result) {
        if (result) {
          resolve(result);
        } else {
          reject(cityName);
        }
      }, function (error) {
        console.error('Failed to fetch cityAQI, with error message: ' + error.message);
      });

    })
  });


  fetchCityAQIPromise.then(function (result) {
    console.log("Fetched CityAQI Data from storage with id:" + result.id);
    response.success(result.get('data'));
  }).catch(function (cityName) {
    AV.Cloud.httpRequest({
      method: 'GET',
      url: encodeURI("http://www.pm25.in/api/querys/aqi_details.json?city=" + cityName + "&token=RQCxTwiUMjhhcL4k3S3a"),
      success: function (httpResponse) {
        var CityAQI = AV.Object.extend('CityAQI');
        var cityAQI = new CityAQI();
        cityAQI.set('cityName', cityName);
        cityAQI.set('data', httpResponse.text);
        cityAQI.save().then(function (cityAQI) {
          console.log('New ' + cityName + ' cityAQI created with objectId: ' + cityAQI.id);
        }, function (error) {
          console.error('Failed to create new cityAQI, with error message: ' + error.message);
        });
        response.success(httpResponse.text);
      },
      error: function (httpResponse) {
        console.error('Request failed with response code ' + httpResponse.status);
      }
    });
  })
})

module.exports = AV.Cloud;