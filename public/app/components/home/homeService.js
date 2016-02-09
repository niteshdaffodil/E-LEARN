app.factory('moduleService', function ($resource) {
   return  $resource(APP.endpoints.module,{},{query: { method: "GET", isArray: false }});
});
app.factory('lessonService', function ($resource) {
   return  $resource(APP.endpoints.lesson);
});
