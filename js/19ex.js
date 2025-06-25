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

// method의 입력값(인자)인 함수를 먼저 정의하고 함수이름으로 사용하기
 function printRow(item){  //멤버스에서 '하나씩 가져온' 요소를 item 변수에 저장  -> tr (table row) 요소를 만들기
    const tr = document.createElement('tr')
    // console.log(item[key])
    for(let key in item){   //객체의 모든 속성을 순회
        const td = document.createElement('td')
        td.textContent = item[key]
        tr.appendChild(td)
    }
    console.log(tr)
    return tr
 }
//DOMContentLoaded' 이벤트 : DOM 자료구조를 만들어서 메모리에 저장한 후에 발생. 
                        // 화면의 구성 요소들이 만들어진 후이 실행.

document.addEventListener('DOMContentLoaded', function () 
{

const root = document.getElementById('root')
const table = document.createElement('table')
table.innerHTML=`<tr>
<th>이름</th>
<th>나이</th>
<th>주소</th>
<th>키</th>
</tr>`
// table을 root 요소에 추가하기
root.appendChild(table)
//배열에 저장된 객체 요소 가각에 대해 반복하는 메스드
// members.forEach(item => )
//item 객체로 tr요소 만드는 함수 호출
members.forEach(item => {
    //item 객체로 tr요소 만드는 함수 호출
                const trResult= printRow(item)
                //  console.log(trResult)
                table.appendChild(trResult)
  })
});