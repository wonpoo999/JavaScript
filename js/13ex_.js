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

//함수 정의 => 함수 호이스팅(끌어올리기) 가능한 것은 function 사용할 때만 가능
function add() {
    console.log(100 + 1000)
}

function sub() {
    return 100 - 1000; 
}


function multiply(num1, num2){  
console.log(num1*num2)
}

function div(num1, num2){
    return num1/num2
}

