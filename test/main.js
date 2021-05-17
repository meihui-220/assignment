new Vue({
  el: "#app",
  data() {
    return {
      info: null
    };
  },
  mounted() {
    // const [books, setBooks] = useState(null);
    // const fetchData = async () => {
    //   const response = await axios.get(
    //     "https://www.abibliadigital.com.br/api/verses/nvi/sl/23",
    //     {
    //       headers: {
    //         Authorization: "apiKey"
    //       }
    //     }
    //   );

    //   setBooks(response.data);
    // };
    axios
      .get("https://www.abibliadigital.com.br/api/verses/nvi/sl/23", {
        headers: {
          Authorization: "apiKey"
        }
      })
      .then((response) => (this.info = response.data));
  },
  methods: {
    greet: function (event) {
      alert("The Book Name called " + this.info.book.name + "!");
      console.log(this.info);
    }
  }
});
