// 원본 배열
const time = ["09:00", "11:00", "12:30", "14:00", "16:45"];
const todo = ["수업", "과제", "점심식사", "주간회의", "자료조사"];

// 위의 2개의 배열을 객체 배열 1개로 변경.
// 객체 예시 : {time: '09:00', todo: '과제'}

//time + todo -> 객체 배열로 합치기

// 비어있는 배열에 새로운 요소를 추가 : push() 메소드 활용

// const schedule = [
//   {time: '09:00', todo: '수업'},
//   {time: '11:00', todo: '과제'},
//   {time: '12:30', todo: '점심식사'},
//   {time: '14:00', todo: '주간회의'},
//   {time: '16:45', todo: '자료조사'},
// ]
const schedule = [];
for (let i = 0; i < time.length; i++) {
  schedule.push({ time: time[i], todo: todo[i] });
// 속성이름: 값
}

// <div id="container">에 테이블 삽입
const container = document.getElementById("container");

//테이블 생성
const table = document.createElement("table");

const thead = document.createElement("thead");
thead.innerHTML = `
<tr>
    <th class="label-cell">TIME</th>
    <th class="label-cell">TODO</th>
</tr>
`;
table.appendChild(thead);

const tbody = document.createElement("tbody"); 
table.appendChild(tbody); container.appendChild(table);

function renderTable() {
  tbody.innerHTML = "";
  schedule.forEach(item => {
    const row = document.createElement("tr"); 
    row.innerHTML = `
    <td>${item.time}</td)>;
    <td>${item.todo}</td)>`;
    tbody.appendChild(row);
});
}

//처음 랜더링
renderTable();

//본문 행 추가

const newBtn = document.getElementById('newBtn') 
newBtn.addEventListener('click', () => {
//입력값 가져와서 newItem 객체 만들기


//tr을 table에 추가

//입력 값 가져오기
const newTime = document.getElementById('newTime').value;
const newTodo = document.getElementById('newTodo').value.trim();

// 입력값 확인 (비어있으면 추가 안함)
if (!newTime || !newTodo) {
  alert("시간과 할 일을 모두 입력하라!")
  return;
}
schedule.push({ time: newTime, todo: newTodo});
//시간 기준 오름차순 정렬 (24시간 문자열 비교 가능)

//새로운 객체 만들기

//스케ㅐ줄 배열을 time 속성 순서로 정렬
schedule.sort((a,b) => a.time.localeCompare(b.time));

renderTable();
// ㄴ a,b 는 2개의 객체. 2개의 객체 time 속성비교

//테이븕 본문에 추가

//입력칸 비우기
document.getElementById('newTime').value="";
document.getElementById('newTodo').value="";
document.getElementById('newTime').focus();
});


// //새로운 <tr> 요소 만들기
// const newRow = document.createElement("tr"); newRow.innerHTML = `
// <td>${newItem.time}</td>
// <td>${newItem.todo}</td>`;

document.getElementById('newTodo').addEventListener('keydown', function (e) {if (e.key === 'Enter') {
 newBtn.click();
}
});