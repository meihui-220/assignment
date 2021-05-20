var BookList = {
  props: ["id"],
  data() {
    return {
      info: null,
      currentId: null,
      id: null,
      versesUrl: null
    };
  },
  mounted() {
    // axios
    //   .get("https://www.abibliadigital.com.br/api/books", {
    //     headers: {
    //       Authorization: "apiKey"
    //     }
    //   })
    //   .then((response) => (this.info = response.data));
    this.loadbookData();
  },
  template: `
  <div class="bookList">
      
      <button @click="goToHome()">Click me to generate random data!!</button>
  </div>
`,
  methods: {
    goToHome() {
      this.$router.push({
        name: "Verses",
        params: {
          version: this.currentId.version,
          bookName: this.info.name,
          bookAbbrev: this.info.abbrev.en,
          bookChap: this.info.chapters
        }
      });
    },
    async loadbookData() {
      // versions api
      let i = [];
      i = await axios.get("https://www.abibliadigital.com.br/api/versions", {
        headers: {
          Authorization: "apiKey"
        }
      });
      this.currentId = i.data[Math.floor(Math.random() * i.data.length)];

      // book Api
      let j = [];
      j = await axios.get("https://www.abibliadigital.com.br/api/books", {
        headers: {
          Authorization: "apiKey"
        }
      });
      this.info = j.data[Math.floor(Math.random() * j.data.length)];
    }
  }
  // components: {
  //   Verses
  // }
};
