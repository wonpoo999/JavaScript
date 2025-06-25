// 원본 배열
const time = ["09:00", "11:00", "12:30", "14:00", "16:45"];
const todo = ["수업", "과제", "점심식사", "주간회의", "자료조사"];

// 위의 2개의 배열을 객체 배열 1개로 변경.
// 객체 예시 : {time: '09:00', todo: '과제'}

//time + todo -> 객체 배열로 합치기
const schedule = [];
for (let i = 0; i < time.length; i++) {
  schedule.push({ time: time[i], todo: todo[i] });
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

//본문 행 추가
const tbody = document.createElement("tbody");
schedule.forEach((item) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.time}</td>
    <td>${item.todo}</td>
    </tr>
`;
  tbody.appendChild(row);
});

table.appendChild(tbody);
container.appendChild(table);
