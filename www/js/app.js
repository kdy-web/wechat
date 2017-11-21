// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'],function($httpProvider){
	//此方法用于修改$http请求的数据格式，让后台可以按照ajax，传输数据的方式接收
  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */
  var param = function(obj) {
    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

    for(name in obj) {
      value = obj[name];

      if(value instanceof Array) {
        for(i=0; i<value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value instanceof Object) {
        for(subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }

    return query.length ? query.substr(0, query.length - 1) : query;
  };

  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data) {
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
$ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
   
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.class', {
    url: '/class',
      
    views: {
      'tab-class': {
        templateUrl: 'templates/tab-class.html',
        controller: 'ClassCtrl'
      }
    }
  })

  .state('tab.teacher', {
      url: '/teacher',
         cache:false,
      views: {
        'tab-teacher': {
          templateUrl: 'templates/tab-teacher.html',
          controller: 'TeacherCtrl'
        }
      }
   })

  .state('tab.mine', {
    url: '/mine',
       cache:false,
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-mine.html',
        controller: 'MineCtrl'
      }
    }
  })
 
  .state('tab.list', {
    url: '/list',
  cache:false,
    views: {
      'tab-teacher': {
        templateUrl: 'templates/tab-list.html',
        controller: 'ListCtrl'
      }
    }
  })
  .state('tab.mine_list', {
    url: '/mine_list',
  cache:false,
    views: {
      'tab-mine': {
        templateUrl: 'templates/mine_list.html',
        controller: 'Mine_listCtrl'
      }
    }
  })
 
    .state('tab.bills', {
    url: '/bills',
      cache:false,
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-bills.html',
        controller: 'BillsCtrl'
      }
    }
  })
  	.state('tab.video', {
    url: '/video/:id',
     cache:false,
    views: {
      'tab-class': {
        templateUrl: 'templates/tab-video.html',
        controller: 'VideoCtrl'
      }
    }
  })
.state('tab.teacher_video', {
    url: '/teacher_video/:id',
      cache:false,
    views: {
      'tab-teacher': {
        templateUrl: 'templates/tab-teacher_video.html',
        controller: 'Teacher_videoCtrl'
      }
    }
  })
  .state('tab.search', {
    url: '/search/:val',
    cache:true,
    views: {
      'tab-class': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  })	
   .state('tab.mine_video', {
    url: '/mine_video/:id',
    cache:false,
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-mine_video.html',
        controller: 'Mine_videoCtrl'
      }
    }
  })	
 
  
  
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/class');

});
