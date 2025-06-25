// 함수의 기본 형식
// 데이터 입력 --> 함수(실행) --> 실행 결과는 함수가 뭐든 간에 출력이라 생각하면 된다. 
// (인자, 인수) -->                        (리턴)
// let ele = members.pop()  : 입력값 없고, 출력은 ele 변수에 저장
// let size = members.push('사나') [사나가 입력값] [출력값은 일단 사이즈에 저장하겠다]

// 함수 유형.
// #1 - 인자와 리턴이 모두 없다
// #2 - 인자 없는데 리턴 있어
// #3 - 인자는 있는데 리턴이 없어
// #4 - 인자와 리턴 모두 있다
//          인자    린턴
// #1      X        X
// #2      X        O
// #3      O        X
// #4      O        O

//함수 유형 1: 인자 없다. 리턴 없다.
function add() {
    console.log(100 + 1000)
}

add()
add()
add()
//함수 유형 2: 인자 없다. 리턴(출력) 있다
function sub() {
    return 100 - 1000; //함수의 실행 결과를 전달하기
}

let result = sub()       //함수를 호출하면 결과값을 전달 받는다
console.log('뺄셈', result)
console.log('뺄셈', sub())
//함수 유형 3: 인자(입력값) 있다 리턴 없다
function multiply(num1, num2){  //함수 실행시 num1과 num2가 사용자가 정한 입력값을 저장하는 변수
console.log(num1*num2)
}
multiply(12, 12) //144          // 12, 12은 함수 실행에 필요한 입력값
multiply (111, 23) //2553       
//함수 유형 4: 인자 있다. 리턴 있다.
function div(num1, num2){
    return num1/num2
}

result = div (77, 13)
console.log('divide by', result)
console.log('divide by', div (77, 13))
console.log('나눈 결과 소수점:', result.toFixed(2))