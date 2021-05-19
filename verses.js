var Verses = {
  prop: {},
  data() {
    return {
      info: null,
      currentId: null
    };
  },
  mounted() {
    axios
      .get("https://www.abibliadigital.com.br/api/verses/nvi/gn/1", {
        headers: {
          Authorization: "apiKey"
        }
      })
      .then((response) => (this.info = response.data.verses));
  },
  template: `
  <div class="bookList">
  <h3>Verses</h3>
  <hr>
    <li v-for="(data, index) in info">Number {{index+1}}: {{data.text}}
</div>
  `,
  methods: {
  }
};
