
const exbitronURL = 'https://www.exbitron.com/api/v2'
const lotusExplorerURL = 'https://explorer.givelotus.org/api'


export const state = () => ({
  avg_price: '',
  current_difficulty: '',
  total_network_hash_rate: '',
})
export const mutations = {
  UPDATE_PRICE(state, avg_price) {
    state.avg_price = avg_price
  },
  UPDATE_DIFFICULTY(state, current_difficulty) {
    state.current_difficulty = current_difficulty
  },
  UPDATE_NETWORK_HASHRATE(state, network_hash_rate) {
    state.total_network_hash_rate = network_hash_rate
  },
}
export const actions = {
  fetchPrice({ commit }) {
    return this.$axios.get(`${exbitronURL}/peatio/public/markets/xpiusdt/tickers`).then(
      response => {
        commit('UPDATE_PRICE', response.data.ticker.avg_price)
    })
  },

  fetchDifficulty({ commit }) {
    return this.$axios.get(`${lotusExplorerURL}/getdifficulty`).then(
      response => {
        commit('UPDATE_DIFFICULTY', response.data)
    })
  },

  fetchNetworkHashrate({ commit }) {
    return this.$axios.get(`${lotusExplorerURL}/getnetworkhashps`).then(
      response => {
        commit('UPDATE_NETWORK_HASHRATE', response.data)
    })
  },
}
