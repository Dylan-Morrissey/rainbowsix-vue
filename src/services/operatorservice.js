import Api from '@/services/api'

export default {
  fetchOperators () {
    return Api().get('/operators')
  },
  postOperator (operator) {
    return Api().post('/operators', operator,
      {headers: {'Content-type': 'application/json'}})
  },
  likeOperator (id) {
    return Api().put(`/operators/${id}/likes`)
  },
  deleteOperator (id) {
    return Api().delete(`/operators/${id}`)
  },
  fetchOperator (id) {
    return Api().get(`/operators/${id}`)
  },
  putOperator (id, operator) {
    console.log('REQUESTING ' + operator._id + ' ' +
      JSON.stringify(operator, null, 5))
    return Api().put(`/operators/update/${id}`, operator,
      { headers: {'Content-type': 'application/json'} })
  }
}
