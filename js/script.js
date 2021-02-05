new Vue({
  el: '#root',
  data: {
    array: []
  },
  mounted() {
    const self = this;
    for(let x = 0; x < 10; x++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(resp) {
        self.email = resp.data.response;
        self.array.push(self.email);
      })
    }
  }
})
