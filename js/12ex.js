      // 12요소만들기 body의 script 내에 있던 내용
      
      const members = ["mina", "momo", "nayeon", "dahyeon", "jihyo"];
      members.push("sana");
      const twice2 = document.getElementById("twice2");
      for (let m of members) {
        const li = document.createElement("li"); //li 요소 생성(generate)
        li.textContent = m;
        //class 속성값 추가 (새로운 스타일 적용)      
        li.classList.add("twice");
        li.classList.add('w500')
        twice2.appendChild(li)
        //부모요소 twice2에 생성된 li 요소를 마지막 자식으로 추가
        console.log(li);
        //for 안에서 선언된 li는 for(){...} 밖에서는 사용 못하기 때문에 에러가 난다.
        twice2.appendChild(li);
        // ul의 자식태그에 하나씩 넣어줘야 콘솔 말고 페이지에 떠.
      }