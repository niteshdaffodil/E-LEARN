function doGet($resource, url, opt, callback){
	console.log("ok done");
	var data = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
};
callback(data);
$resource(url,{}, {query : {method : "GET" , isArray :  true} });
/* $resource("api/StudentsApi", {}, {
            query: { method: "GET", isArray: true },
            create: { method: "POST" },
            get: { method: "GET", url: "/api/StudentsApi?id=:id" },
            remove: { method: "DELETE", url: "/api/StudentsApi?id=:id" },
            update: { method: "PUT", url: "/api/StudentsApi?id=:id" }
       });
*/


}
app.controller("homeController",['$scope','moduleService','lessonService', function($scope,moduleService, lessonService) {
console.log("In home controller");
$scope.modules =[];
$scope.lesson = '';
 $scope.oneAtATime = true;
//$scope.users = UserService.query();
/*moduleService.get({ id: 10 },function (data) {
   console.log('success, got data: ', data);
 }, function (err) {
   alert('request failed');
 });
/*moduleService.getAllModules(opts ,function(data){
	console.log("datatatta", data);
});*/
console.log(moduleService.query());
var module = moduleService.query(function() {
	$scope.modules = module.result.result;
    console.log("datat" , $scope.modules);
});
lessonService.get({ id: '56b5e075b7d52a8145c13825' }, function(data) {
    $scope.lesson = data;
    console.log("lesson" , data , $scope.lesson);
});
$scope.submitSave = function(Id){
	console.log("submitSave", Id);
	lessonService.get({ id: Id }, function(data) {
    $scope.lesson = data.statusCode;
    console.log("lesson" , data , $scope.lesson);
});
};
$scope.expandLesson = function($event){
	console.log("expandLesson");
	$event.stopPropagation();
};
}]);
app.factory('moduleService', function ($resource) {
   return  $resource(APP.endpoints.module,{},{query: { method: "GET", isArray: false }});
});
app.factory('lessonService', function ($resource) {
   return  $resource(APP.endpoints.lession);
});

app.controller("landingController",['$scope','$element', function($scope,$element) {

	console.log("In landing controller");

}]);

app.directive('header', function () {
	return {
		templateUrl: 'app/shared/header/headerView.html',
		restrict: 'E',
		controller: ''
	};
});