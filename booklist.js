var BookList = {
  props: ["id"],
  data() {
    return {
      info: null,
      currentId: null,
      id: null
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
    this.loadbookData();
  },
  template: `
  <div class="bookList">
      <hr>
      <button @click="goToHome()">Click me to generate random data!!</button>
  </div>
`,
  methods: {
    goToHome() {
      this.$router.push("/Verses");
    },
    async loadbookData() {
      let i = await axios.get(
        "https://www.abibliadigital.com.br/api/verses/nvi/gn/1",
        {
          headers: {
            Authorization: "apiKey"
          }
        }
      );
      this.id = i.data;
      this.$emit("id", this.id);
      console.log("....", this.id);
    }
  }
  // components: {
  //   Verses
  // }
};
