var Verses = {
  prop: {
    example: Object
  },
  data() {
    return {
      info: null,
      currentId: [],
      version: null,
      bookName: null,
      abbrev: null,
      chapter: null,
      bookData: [],
      data1: null
    };
  },
  created() {
    this.version = this.$route.params.version;
    this.bookName = this.$route.params.bookName;
    this.abbrev = this.$route.params.bookAbbrev;
    this.chapter = this.$route.params.bookChap;
    console.log("iddddd", this.version);
  },
  mounted() {
    this.getData();
    console.log("hi", this.currentId);
    // console.log("iddddd", this.data);
  },
  template: `
  <div class="bookList">
  <h2>Book Name: {{bookName}}</h2>
  <h3>Verses</h3>
    <li v-for="(data, index) in info">Number {{index+1}}: {{data.text}}
</div>
  `,
  methods: {
    async getData() {
      let versesUrl =
        "https://www.abibliadigital.com.br/api/verses/" +
        this.version +
        "/" +
        this.abbrev +
        "/" +
        this.chapter;
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
