// 객체의 배열
const members = [
  {
    name: "김사나",
    age: 22,
    address: "경기",
    height: 160.9,
  },
  {
    name: "박모모",
    age: 24,
    address: "서울",
    height: 165.3,
  },

  {
    name: "이다모현",
    age: 27,
    address: "제주",
    height: 163.7,
  },
];

console.log('배열 0번 요소 : ', members[0])
console.log('배열 0번 요소 : ', members[0].name)
console.log('배열 1번 요소 : ', members[1].age)
console.log('배열 2번 요소 : ', members[2].height)
console.log('배열 3번 요소 : ', members[3]) //없으니 undefined 뜨겠지
// 1) members 배열에 저장된 객체의 name 속성 출력
for (let member of members){
    console.log('트와이스 멤버들이던가? 암튼 모두:', member.name);
}
// 2) 객체의 address 속성값이 '서울'인 name 속성값 출력 (if문 들어가야함)
for (let member of members) {
    if (member.address === '서울') {
        console.log('수도권 사는애:', member.name);
    }
}

for(let member of members) {
    if(member.age > '23')
        console.log('나이 많은 애:', member.name)
}

for(let member of members) {
    if(member.height < '162')
        console.log('키 작은 애:' ,member.name)
}

for(let member of members) {
    if(member.name.includes("모")) {
        console.log("무리수긴 하지만 모 들어간 애들:", member.name);

    }
}

// 4) 모든 배열 요소의 모든 속성값 출력하기
for (let member of members) {
    console.log('-------')
    console.log(member.name)
    console.log(member.age)
    console.log(member.address)
    console.log(member.height)
}

for(let member of members) {
    console.log ('~~~~~~~~~~')
    for(let key in member) {    //객체 member의 모든 속성을 순서대로 가져와서 key에 저장
        console.log(member[key])
    }
}

// 5) 배열의 forEach 메소드 - 배열의 요소를 '하나씩 가져다가' 특정한 함수를 실행.
                                        // ㄴ 메소드의 인자(입력)는 함수.
members.forEach (
    function(item){  //멤버스에서 '하나씩 가져온' 요소를 item 변수에 저장  
        console.log('////')
        console.log(item.address)
    })

    //위의 코드를 화살표 함수로 변경 가능.

members.forEach((item) => {  //멤버스에서 '하나씩 가져온' 요소를 item 변수에 저장  
        console.log('****')
        console.log(item.address)
});

// method의 입력값(인자)인 함수를 먼저 정의하고 함수이름으로 사용하기
 function print(item){  //멤버스에서 '하나씩 가져온' 요소를 item 변수에 저장  
        console.log('/*/')
        console.log(item.address)
 }

members.forEach(item => print(item))