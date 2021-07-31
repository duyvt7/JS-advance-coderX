function greet(name = 'friend') {
    console.log(`Hi ${name}`)
}
greet()
//nếu không truyền tham số vào trong hàm 
// thì hàm sẽ lấy giá trị default là friend

function greet2 (name = 'friend', language= 'en'){
    if (language === 'en'){
        console.log(`Hi ${name}`)
    }else if(language = 'cn'){
        console.log(`ni hao, ${name}`)
    }else{
        console.log(`chao ban ${name}`)
    }
}
greet2('duy')
