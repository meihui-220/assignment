var BookList = {
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
              <a href="#" @click="loadbookData(data)">Book Name: {{data.name}}</a></li>
            </ol>
          </div>
          <div class="col-md-10">
            <div id="item-description">{{this.currentId}}</div>
          </div>
        </div>
    </div>
  `,
    methods: {
      loadbookData(id) {
        this.currentId = id.name;
        console.log(id);
      }
    },
  };
  