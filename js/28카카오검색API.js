// 참고 웹사이트 - 카카오 개발자 검색하면 맨 상단에 나오는 걸로 들어가
//https://www.google.com/search?q=%EC%B9%B4%EC%B9%B4%EC%98%A4+%EA%B0%9C%EB%B0%9C%EC%9E%90&rlz=1C1IBEF_koKR1166KR1166&oq=%EC%B9%B4%EC%B9%B4%EC%98%A4+%EA%B0%9C%EB%B0%9C%EC%9E%90&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDI2NzZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
//https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-image - 다음 검색 REST API
//https://developers.kakao.com/console/app/1270533/config/appKey - APP KEY - REST API KEY
//쿼리 파리미터에 필수라 되어 있는 건 무조건 가져와야 해 - REST API KEY
// 카카오의 검색 OPEN API인데 누구에게나 오픈 되어 있기에 OPEN API라 해. 이걸 활용해보자
//위의 문서를 보면서 필요한 값을 설정.

//헤더는  설정 값 / status 200이 정답. 예를 들어 401 이나 200이 아닌 다른 무언 수치면 문제가 있는 것
// 200은 매우 정상, 오류없이 정상 처리 되었다는 뜻. 401은 너 인증해야 하는데 인증이 안 되었어, 즉 인증 오류.
//코드 값이 다 정해져 있어. 
//body: readablestream는 그 사이트 데이터 본문이다.  

const REST_API_KEY = '15c2ffaa072b84d4c98f6da83860def2'
const header = {            // 요 header는 상수 부여라 이름을 멋대로 부여한 거라 아무렇게나 이름 지어줘도 된다
    method: 'GET',
    headers:{                    // 이 headers는 속성. 속성 이름은 정해져 있으니 멋대로 바꾸면 안 된다
        Authorization: `KakaoAK ${REST_API_KEY}`}
    //API 사용 인증을 위한 KEY 필수
}
// const url = `https://dapi.kakao.com/v2/search/web`
const query = '시라소니'
const url = `https://dapi.kakao.com/v2/search/image?query=${query}`

//요청을 보내는 JS 명령어 함수
let result
fetch(url, header)                                       // 요청 url 주소로 보내기
        .then(response => {                          // 요청에 대한 응답 수산. 콜백함수 인자 response에 저장
            // console.log(response)
            return response.json()                   // 응답의 body(데이터본문)를 JS 객체로 변환시켜준다.
        })
        .then(data => {                            // 위의 then에서 리턴한 데이터를 콜백함수 인자 data에 저장
            result = data
            console.log('data :' , data)
         
         console.log('데이터 분해 1: ', data.documents[0])
         console.log('데이터 분해 2: ', data.documents[0].doc_url)
         console.log('데이터 분해 3: ', data.documents[0].image_url)
         printImage(data.documents, 20, 20)        //data 배열에서 앞에서 10개의 이미지를 출력하기
        })
        .catch(error => {                              // 요청 에러 처리. 에러 정보 콜백함수 인자 error에 저장
            console.error ('fetch 에러: ' + error)
        })
// fetch 요청이 응답을 받고 끝날 때까지 기다리지 않고 다음의 console 명령이 실행된다. (비동기 처리 명령어). 
        console.log('응답 데이터: ', result)      //undefined

        function printImage(docs, position, count) {      //임의로 정한 변수(인자)다. 데이터는 docs에, 10은 count로 이어져
        const ul = document.getElementById('kakaoImg')
        for(let i = position; i < position + count;i++){
            console.log(docs[i].image_url)
            const li = document.createElement('li')
            li.innerHTML=`<img src="${docs[i].image_url}" width="400px" height="400px">`
            ul.appendChild(li)
        }
        }

        //기본값은 80 배열이다. 그래서 양이 많아도 array는 80이다

        //카카오검색 비디오 adding 구술 발표 할 수도