import Data from './MockData.json'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));


async function callApi() {
    await simulateNetworkLatency()

    return Data
}

const api = {
    products: {
        get(category) {
            return callApi()
        }
    }
}

export default api
