const REST_API_KEY = '15c2ffaa072b84d4c98f6da83860def2'; 

const header = {
    method: 'GET',
    headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`
    }
};

function searchImages() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        alert("검색어를 입력하세요!");
        return;
    }

    const url = `https://dapi.kakao.com/v2/search/image?query=${encodeURIComponent(query)}&size=30`;

    fetch(url, header)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            const ul = document.getElementById('kakaoImg');
            ul.innerHTML = "";

            if (!data.documents || data.documents.length === 0) {
                ul.innerHTML = "<li>검색 결과가 없습니다.</li>";
                return;
            }

            printImage(data.documents);
        })
        .catch(error => {
            console.error('fetch 에러:', error);
            alert('이미지를 가져오는 중 오류가 발생했습니다.');
        });
}

function printImage(docs) {
    const ul = document.getElementById('kakaoImg');
    docs.forEach(doc => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${doc.image_url}" width="400" height="400" alt="검색 이미지" />`;
        ul.appendChild(li);
    });
}

// 엔터키 눌렀을 때 검색 실행
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchImages();
    }
});