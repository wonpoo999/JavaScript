// 배열 메소드 연습(2)
//1. splice - 배열에 새로운 요소를 추가하거나 삭제할 때 씀
let fruits = ['banana', 'mango', 'orange', 'apple']

fruits.splice(2, 0, 'lemon')
//2: 새로운 데이터 'lemon' 이 추가될 위치(인덱스값)
//0: 삭제할 데이터의 갯수
//그 뒤에 값들은 추가될 데이터

console.log(fruits.toString())

fruits = ['banana', 'mango', 'orange', 'apple']
var myfruits = fruits.splice(1,1)
//1: 추가될 위치 인덱스
//1: 삭제할 데이터 갯수
//추가할 값 없으면 어떻게 될까? 그럼 1번 자리 한개를 삭제하게 되지.
// 그러므로 새로운 요소를 추가 및 삭제할 수 있다는거

console.log(fruits.toString())
//banana, orange, apple

//2.slice() : 배열의 특정 부분을 자르기하여 새로운 배열을 생성
fruits = ['banana', 'mango', 'orange', 'apple']
            //메소드 결과 리턴이 있다. 리턴이 중요
// 1: 시작위치 인덱스
// 3: 마지막 위치 인덱스 (포함 X)
// 자르기한 배열의 갯수 = 3-1 = 2개
console.log(fruits.toString()) //fruits는 변화가 없음.
console.log(myfruits.toString()) //myfruits는 새로운 배열

//1. splice
    
//2. slice() 의 입력값이 1개인 경우 - 마지막 인덱스 생략(끝까지)
myfruits = fruits.slice(1)
console.log('🤗', myfruits.toString())
//slice()의 입력값이 음수 인 경우 - 맨뒤 -1부터 접근
myfruits = fruits.slice(-3, -1)
console.log('🤗', myfruits.toString()) //'mango', 'orange'
myfruits = fruits.slice(-1)
console.log('🤗', myfruits.toString()) //'apple'
//3. indexOf()
fruits = ['banana', 'mango', 'orange', 'apple'];
let position = fruits.indexOf("apple")
console.log('apple의 첫번째 위치: ', position)
//4. lastIndexOf()
position = fruits.lastIndexOf("apple")
console.log('apple의 첫번째 위치: ', position)
position = fruits.indexOf("Lemon") //없는 값
console.log('Lemon의 첫번째 위치:', position)
//5. includes()
let result = fruits.includes("Mango")
console.log("mango 있냐?", result)
result = fruits.includes("Lemon");
console.log("Lemon 있냐?", result)
//6. find()
// forEach 처럼 '배열 요소를 하나씩 가져와 함수에 전달'합니다.
//                              ㄴ 값, 인덱스, 원본배열
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction); //함수에 대입한 조건식이 참인 첫번째 값

function myFunction(value, index, array) { //값, 인덱스, 원본배열}
    return value > 18;
}
console.log ('18 보다 큰 첫번째 값:', first) //25

//화살표 함수로 변형해보자
first = numbers.find(value => value > 18)
console.log ('🤬18보다 큰 첫번째 값:', first) //25

first = numbers.find(value=> value >25 && value < 30)
console.log ('🥵25 보다 큰 첫번째 값', first) //29

//7. findIndex()
first = numbers.findIndex(myFunction)
//8. findLast()
let last = numbers.findLast(myFunction);
console.log('준비되어있는 값 중 가장 마지막(last) 값:', last) //29
//18보다 큰 마지막 값을 말하지. value가 >18 이니까

//9. findLastIndex()
last = numbers.findLastIndex(myFunction)
console.log('18 보다 큰 마지막 값 인덱스 : ', last) //4
// 0(4), 1(9), 2(16), 3(25), 4(29)니까