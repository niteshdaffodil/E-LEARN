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