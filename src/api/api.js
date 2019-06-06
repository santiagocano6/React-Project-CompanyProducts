import Data from './MockData.json'
import axios from 'axios';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callFakeApi(category) {
    await simulateNetworkLatency()

    let fakeresponse = {...Data};

    let filteredData
    if(category === 'all') {
        filteredData = fakeresponse.products
    } else {
        filteredData = fakeresponse.products.filter(product => product.categories.includes(category))
    }

    fakeresponse.category = category
    fakeresponse.hiddenproducts = fakeresponse.products.length - filteredData.length
    fakeresponse.shownproducts = filteredData.length
    fakeresponse.products = filteredData

    return fakeresponse
}

const url = 'http://localhost:64143/api/'

async function callApi(category) {
    let response = await axios.get(`${url}/Products?category=${category}`)
    return response.data
}

const api = {
    products: {
        get(category) {
            return callFakeApi(category) // Uncomment this line to Call fake API to test app withou backend
            return callApi(category)
        }
    }
}

export default api
