app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    // Now set up the states
    $stateProvider       
        // For any unmatched url, redirect to /
        .state('/', {    
            url: '/',
            templateUrl: 'app/components/landing/landingView.html',
            controller: 'landingController'
        })
        .state('home',{
            url: '/home',
            templateUrl : 'app/components/home/homeView.html',
            controller: 'homeController'
        })
}]);