// var names = ['Ashvin', 'John', 'Michael'];
//
// names.forEach(function(name) {
//   console.log('forEach',name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Ashvin'));
//
// var person = {
//   name: 'Ashvin',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
// person.greet();

//Challenge area

function add(a,b) {
  return a + b;
}
//sttement version
var addStatement = (a,b) => {
  return a + b;
}

//expression
var addExpression = (a,b) => a+b;


console.log(addExpression(1,3));
console.log(addExpression(9,0));
