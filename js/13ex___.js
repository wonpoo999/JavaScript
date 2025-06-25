//함수 정의 - 함수를

const add = () => {
    console.log(100 + 1000)
}

const sub = () => {
    return 100 - 1000; 
}

const multiply = (num1, num2) => {  
    console.log(num1*num2)
}

const div = (num1, num2) =>{
    return num1/num2
}

add()
add()
add()

let result = sub() 
console.log('뺄셈', result)
console.log('뺄셈', sub())

multiply(12, 12) 
multiply (111, 23) 

result = div (77, 13)
console.log('divide by', result)
console.log('divide by', div (77, 13))
console.log('나눈 결과 소수점:', result.toFixed(2))




