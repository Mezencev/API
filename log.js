/*function warm(str){
    console.log('warn: ', str);
};
function info(str){
    console.log('info: ', str);
};
function error(str){
    console.log('error: ', str);
};
exports.warm = warm;
exports.info = info;
exports.error = error;
var person = {
    firstname: 'John',
    lastName: 'Pupkin',
    greet(){
        console.log('Hello, ' + this.firstname + ' ' + this.lastName);
    }
}
person.greet();
console.log(person['firstname']);*/
let app = {"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}]};

let msg = JSON.parse(app);
console.log(msg.app);