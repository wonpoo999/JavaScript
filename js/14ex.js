// 4개 연산을 테스타. console에 결과값 출력하기. 값은 789 125
let result  //전역 변수: 파일 전체에서 사용. 이름이 같은 지역변수 result 와 다른 메모리 공간
result= calc(789, 125, '+')
console.log('+', result)
console.log('-', calc(789, 125, '-'))

const exeBtn = document.getElementById('exeBtn')
exeBtn.addEventListener('click', function(){
    //입력한 3개를 가져와서 num1, num2, op 변수에 저장
    let num1 = document.getElementById(' ')
    let num2 = document.getElementById(' ')
    let op = document.getElementById(' ')
    let result = calc(num1, num2, op)  
    // function calc(num1, num2, op)의 변수와 메모리 공간 다름

    // span#result 요소에 결과값을 출력
    document.querySelector('span#result').textContent=result
})

function calc(num1, num2, op) { //형식매개변수(인자)
    let result = 0   // 결과값 변수 (지역 변수: {안에 선언 })
    switch (op) {
        case '+' :
            result = num1 + num2
            break;
            case '-':
                result = num1 - num2
                break
                case '*':
                    result = num1 * num2
                    break
                    case '/':
                        result = num1 / num2
                        break
                        deafult:
                        console.error('op 는 허용되지 않는 값 입력이다.')
                        break;
    }
    return result;
}

console.log('더하기:', calc(789, 125, '+'));
console.log('빼기:', calc(789, 125, '-'));
console.log('곱하기:', calc(789, 125, '*'));
console.log('나누기:', calc(789, 125, '/'));