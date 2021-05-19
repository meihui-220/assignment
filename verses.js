var Verses = {
  prop: {
    example: Object
  },
  data() {
    return {
      info: null,
      currentId: [],
      id: null,
      bookData: []
    };
  },
  // created() {
  //   this.id = this.$route.params.id;
  //   console.log("iddddd", this.id);
  // },
  mounted() {
    this.getData();
    console.log("hi", this.currentId);
  },
  template: `
  <div class="bookList">
  <h2>Book Name: {{bookData.name}}</h2>
  <h3>Verses</h3>
    <li v-for="(data, index) in info">Number {{index+1}}: {{data.text}}
</div>
  `,
  methods: {
    async getData() {
      console.log("hiiiii", this.id);
      // versions api
      let i = [];
      i = await axios.get("https://www.abibliadigital.com.br/api/versions", {
        headers: {
          Authorization: "apiKey"
        }
      });
      this.currentId = i.data[Math.floor(Math.random() * i.data.length)];

      // book Api
      // let bookData = null;
      let j = [];
      j = await axios.get("https://www.abibliadigital.com.br/api/books", {
        headers: {
          Authorization: "apiKey"
        }
      });
      this.bookData = j.data[Math.floor(Math.random() * j.data.length)];
      console.log(this.bookData);
      // get verses api
      let version = this.currentId.version;
      let abbrev = "/" + this.bookData.abbrev.en;
      let chapter = "/" + this.bookData.chapters;

      // let number = "";
      let versesUrl =
        "https://www.abibliadigital.com.br/api/verses/" +
        version +
        abbrev +
        chapter;
      console.log("url", versesUrl);
      axios
        .get(versesUrl, {
          headers: {
            Authorization: "apiKey"
          }
        })
        .then((response) => (this.info = response.data.verses));
    }
    // loadbookData(id) {
    // axios
    //   .get("https://www.abibliadigital.com.br/api/verses/nvi/gn/1", {
    //     headers: {
    //       Authorization: "apiKey"
    //     }
    //   })
    //   .then((response) => (this.info = response.data));
    // this.currentId = id.name;
    // console.log(id);
    // }
  }
};
