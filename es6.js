/*let sum = (a, b)=>a+b;
console.log(sum(10, 5));

let user = 'Tolik';
console.log(`the best, ${user}.`);

let nicknames = ['di', 'boo', 'punkeye'];

for (let nickname of nicknames) {
    console.log(nickname);
}

let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname in nicknames) {
    console.log(nickname);
}
let person = {
    name: 'Mark',
    age: 8,
    sayHi(){
        console.log('Hello ' + this.name);
    }
};
for(let key in person){
    console.log(key +':' +  person[key]);
} 
person.sayHi();
console.log(Object.keys(person));
console.log(Object.getOwnPropertyNames(person));*/
let age = {mark: 8, tolik: 33};
console.log(Object.keys(age));

var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
  console.log( i + ": " + item + " (массив:" + arr + ")" );
});



