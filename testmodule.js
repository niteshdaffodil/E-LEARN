/*var DateOnly = require('dateonly');
var s = '12-32-2015';
var myBirthday = new DateOnly(s);


console.log("getDate",myBirthday.getDate());
console.log("getMonth",myBirthday.getMonth());
console.log("getDay",myBirthday.getDay());
console.log("getFullYear()",myBirthday.getFullYear());*/

/*var validator = require('validator');

console.log(!validator.isEmail('w@b.mo'));
if([].length){
 console.log("================");}*/
var validator = require('validator')
if(! validator.isEmail('werg@ga.com') ){
	console.log("=====================1");
}else if(! (('asfasfd').length > 2) ){
	console.log("=====================");
}else if(! validator.isDate('12-3-2015')){
	console.log("=====================3");
}else if(! (('32552214').length > 5) ){
	console.log("=====================4");	
}else{
	console.log("==============2");
	
}