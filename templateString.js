function greeting (name){
    return 'hi,'+ name+'!'
}
//using template String
function greeting2 (name){
    return `hi,
    
    
    ${name}!`// có thể xuống dòng được
}

var result = greeting2('Duy')
console.log(result)