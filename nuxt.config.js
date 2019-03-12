import axios from 'axios';

export default {
  generate: {
    routes: function () {
      return axios.get('https://ancient-springs-73658.herokuapp.com/books')
      .then((res) => {
        return res.data.books.map((book) => {
          return '/book/' + book.id
        })
      })
    }
  }
}
