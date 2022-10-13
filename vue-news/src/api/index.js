import axios from 'axios'; // from 뒤에 쓴 'axios'는 package.json에 적혀있는 (node_modules에) 설치된 axios를 가리킴.

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리
function fetchNewsList() {
    // return axios.get('https://api.hnpwa.com/v0/news/1.json');
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchJobList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchUserList(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}
function fetchItem(itemId) {
    return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

// 3. API 함수를 export(현재 이 파일의 외부에서 사용할 수 있게)
export {
    fetchNewsList,
    fetchJobList,
    fetchAskList,
    fetchUserList,
    fetchItem,
}


// 숙제: JobsView, AskView 도 같은 방법으로 api 함수 호출해보기
