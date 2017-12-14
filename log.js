function warm(str){
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