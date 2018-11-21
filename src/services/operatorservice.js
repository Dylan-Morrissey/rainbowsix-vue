import Api from '@/services/api'

export default {
  fetchOperators () {
    return Api().get('/operators')
  },
  postOperator (operator) {
    return Api().post('/operator', operator,
      {headers: {'Content-type': 'application/json'}})
  }
}
