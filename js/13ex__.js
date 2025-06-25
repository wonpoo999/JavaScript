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

//함수 정의 - 함수를 변수에 할당하는 방식은 호이스팅(끌어올리기)를 못하고 오류가 생긴다. 
//그럼 어떻게 오류가 안 생기게 해야할까?
// 맨위로 끌어올려야지
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

