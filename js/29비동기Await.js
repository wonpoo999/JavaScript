const REST_API_KEY = '15c2ffaa072b84d4c98f6da83860def2'
const headers = {
    method: 'GET',
    headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`
    }
};
const query ='dota 2';
const url = `https://dapi.kakao.com/v2/search/image?query=${query}&sort=recency`

// 비동기 함수의 처리를 기다려야 하는 경우를 테스트
// result, result2 변수가 fetch 실행 결과를 받기 위한 예시

let result 
     //await 포함한 경우 async 키워드 표시
     // 이렇게 쓰지 맙시다. => await = then이랑 같은 뜻. 고로 이 둘을 같이 사용하는 것은 추천하지 않는다. 실행은 잘 되도 말이다.
await fetch(url, headers)        // fetch 비동기 함수이므로 await로 실행완료까지 대기
    .then(response => {
        console.log('response 수신완료:', response.status)
        return response.json ()
    })
    .then(data => {
        result = data
        // return result
    })
    .catch(error => console.error('fetch 실패: ', error))

    console.log('result: ', result)
    console.log('result: ', result.documents[0].image_url)


//await loadData() 또는
//loadData()가 비동기 함수가 되었으므로 then 사용하여 처리.

loadData2().then(() =>{
console.log('result: ', result)
console.log('result: ', result.documents[0].image_url)
})
let result2
// 정상적인 async/await: await와 then()은 함께 사용하면 중복된 의미
async function loadData2() {
    try { // 오류 검사
        const response = await fetch (url, headers)
        const data = await response.json()
        console.log(data);
        result2 = data
    } catch (error) { //오류 처리 구문
        console.error('오류: ', error)
    }
}

await loadData2()
console.log('result2: ', result2)
console.log('result2: ', result2.documents[0].image_url)

// 또는 loadData2().then (() => { ... })