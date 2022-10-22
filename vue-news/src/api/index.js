import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/',
};

// async, await 사용
async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`);
    } catch (e) {
        console.log(e);
    }
}

function fetchUserList(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}
function fetchItem(itemId) {
    return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

export {
    fetchList,

    fetchUserList,
    fetchItem,
}
