import Api from '@/services/api'

export default {
  fetchMaps () {
    return Api().get('/maps')
  },
  postMap (map) {
    return Api().post('/maps', map,
      {headers: {'Content-type': 'application/json'}})
  },
  likeMap (id) {
    return Api().put(`/maps/${id}/likes`)
  },
  deleteMap (id) {
    return Api().delete(`/maps/${id}`)
  },
  fetchMap (id) {
    return Api().get(`/maps/${id}`)
  },
  putMap (id, map) {
    console.log('REQUESTING ' + map._id + ' ' +
      JSON.stringify(map, null, 5))
    return Api().put(`/maps/updateMap/${id}`, map,
      { headers: {'Content-type': 'application/json'} })
  }
}
