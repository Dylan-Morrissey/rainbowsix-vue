import Api from '@/services/api'

export default {
  fetchOperators () {
    return Api().get('/operators')
  },
  postOperator (operator) {
    return Api().post('/operators', operator,
      {headers: {'Content-type': 'application/json'}})
  }
}
