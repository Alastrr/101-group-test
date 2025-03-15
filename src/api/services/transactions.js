import apiClient from '../axios.js'

export default {
  async getTransactions(queryParams) {
    const response = await apiClient.get('/transactions', { params: queryParams });
    return response.data
  }
}


