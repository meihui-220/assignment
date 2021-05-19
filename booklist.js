var BookList = {
  props: ["id"],
  data() {
    return {
      info: null,
      currentId: null
    };
  },
  mounted() {
    axios
      .get("https://www.abibliadigital.com.br/api/books", {
        headers: {
          Authorization: "apiKey"
        }
      })
      .then((response) => (this.info = response.data));
  },
  template: `
  <div class="bookList">
      <h3>Book List</h3>
      <hr>
      <div class="row">
        <div class="col-md-2">
          <ol>
            <li v-for="data in info">
              <router-link to="Verses">Book: {{data.name}}</router-link>
          </ol>
        </div>
 
      </div>
  </div>
`,
  methods: {
    loadbookData(id) {
      // axios
      // .get("https://www.abibliadigital.com.br/api/verses/nvi/gn/1", {
      //   headers: {
      //     Authorization: "apiKey"
      //   }
      // })
      // .then((response) => (this.info = response.data));
      this.currentId = id.name;
      console.log(id);
    }
  }
  // components: {
  //   Verses
  // }
};
