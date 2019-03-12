<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{content}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ params, error, payload }) {
    if (payload) {
      return payload
    }
    return axios.get(`https://ancient-springs-73658.herokuapp.com/books/${params.id}`)
      .then(res => ({
        ...res.data
      }))
  }
}
</script>
